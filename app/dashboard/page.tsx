"use client"

import { useState } from "react"
import { Folder, File, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"

type Item = {
  id: string
  name: string
  type: "file" | "folder"
  children?: Item[]
}

const initialItems: Item[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      { id: "2", name: "Work", type: "folder", children: [] },
      { id: "3", name: "Personal", type: "folder", children: [] },
    ],
  },
  {
    id: "4",
    name: "Images",
    type: "folder",
    children: [
      { id: "5", name: "vacation.jpg", type: "file" },
      { id: "6", name: "family.jpg", type: "file" },
    ],
  },
  { id: "7", name: "notes.txt", type: "file" },
  {
    id: "8",
    name: "Documents",
    type: "folder",
    children: [
      { id: "doc1", name: "Project Plan.md", type: "file" },
      { id: "doc2", name: "Meeting Notes.md", type: "file" },
    ],
  },
]

function FileTreeItem({ item, level = 0 }: { item: Item; level?: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div
        className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer`}
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={() => item.type === "folder" && setIsOpen(!isOpen)}
      >
        {item.type === "folder" && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        {item.type === "folder" ? <Folder size={16} className="mr-2" /> : <File size={16} className="mr-2" />}
        {item.type === "file" && item.name.endsWith(".md") ? (
          <Link href={`/documents/${item.id}`} className="hover:underline">
            {item.name}
          </Link>
        ) : (
          <span>{item.name}</span>
        )}
      </div>
      {item.type === "folder" &&
        isOpen &&
        item.children?.map((child) => <FileTreeItem key={child.id} item={child} level={level + 1} />)}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="border rounded">
        {initialItems.map((item) => (
          <FileTreeItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

