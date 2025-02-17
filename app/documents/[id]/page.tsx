"use client"

import { useState } from "react"
import DocumentEditor from "@/components/DocumentEditor"
import { Button } from "@/components/ui/button"

export default function DocumentPage({ params }: { params: { id: string } }) {
  const [version, setVersion] = useState(1)
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState("")

  const handleSaveVersion = () => {
    // In a real app, you'd save the current state to the backend
    setVersion(version + 1)
    alert(`Version ${version + 1} saved!`)
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment("")
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Document: {params.id}</h1>
      <div className="flex justify-between items-center">
        <span>Current Version: {version}</span>
        <Button onClick={handleSaveVersion}>Save New Version</Button>
      </div>
      <DocumentEditor documentId={params.id} />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        <div className="space-y-2">
          {comments.map((comment, index) => (
            <div key={index} className="p-2 bg-gray-100 rounded">
              {comment}
            </div>
          ))}
        </div>
        <div className="mt-2 flex">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-grow p-2 border rounded-l"
            placeholder="Add a comment..."
          />
          <Button onClick={handleAddComment} className="rounded-l-none">
            Add Comment
          </Button>
        </div>
      </div>
    </div>
  )
}

