import Link from "next/link"

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cloud Storage Platform</h1>
      <p className="mb-4">Your personal document collaboration and file storage solution.</p>
      <Link href="/login" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
        Login
      </Link>
    </div>
  )
}

