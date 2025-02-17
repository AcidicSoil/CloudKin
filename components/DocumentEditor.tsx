"use client"

import { useState, useEffect } from "react"
import Editor from "@monaco-editor/react"
import { io, type Socket } from "socket.io-client"

interface DocumentEditorProps {
  documentId: string
}

export default function DocumentEditor({ documentId }: DocumentEditorProps) {
  const [content, setContent] = useState<string>("")
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const newSocket = io("http://localhost:3001") // Replace with your actual WebSocket server URL
    setSocket(newSocket)

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server")
      newSocket.emit("join-document", documentId)
    })

    newSocket.on("document-update", (updatedContent: string) => {
      setContent(updatedContent)
    })

    return () => {
      newSocket.disconnect()
    }
  }, [documentId])

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setContent(value)
      socket?.emit("document-change", { documentId, content: value })
    }
  }

  return (
    <div className="h-[600px] border rounded">
      <Editor
        height="100%"
        defaultLanguage="markdown"
        value={content}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          wordWrap: "on",
        }}
      />
    </div>
  )
}

