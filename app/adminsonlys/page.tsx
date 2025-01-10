'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ADMIN_EMAIL = 'admin@xliich.com'
const ADMIN_PASSWORD = 'admin123' // In a real application, use a secure authentication method

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
    } else {
      alert('Invalid credentials')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description || !image || !date) {
      alert('Please fill in all fields')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      const newUpdate = {
        id: Date.now(),
        title,
        description,
        date,
        imageUrl: reader.result as string,
      }

      const existingUpdates = JSON.parse(localStorage.getItem('updates') || '[]')
      const updatedUpdates = [newUpdate, ...existingUpdates]
      localStorage.setItem('updates', JSON.stringify(updatedUpdates))

      alert('Post created successfully!')
      setTitle('')
      setDescription('')
      setDate('')
      setImage(null)
    }
    reader.readAsDataURL(image)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-black">Admin Login</h1>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 text-black"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 text-black"
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#101010] py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-black">Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-4 text-black"
          />
          <Textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mb-4 text-black"
          />
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mb-4 text-black"
          />
          <Input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="mb-6 text-black"
          />
          <Button type="submit">Create Post</Button>
        </form>
      </div>
    </div>
  )
}

