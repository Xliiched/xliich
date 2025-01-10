'use client'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import Image from 'next/image'

interface Update {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

function UpdateCard({ update, index }: { update: Update; index: number }) {
  return (
    <div 
      className="flex border border-white p-6 rounded-lg mb-6 hover-scale motion-safe:animate-slideUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Image
        src={update.imageUrl}
        alt={update.title}
        width={200}
        height={200}
        className="w-48 h-48 object-cover rounded-lg mr-6"
      />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold">{update.title}</h2>
          <span className="text-sm text-gray-300">
            {format(new Date(update.date), 'MMMM d, yyyy')}
          </span>
        </div>
        <p className="text-gray-300">{update.description}</p>
      </div>
    </div>
  );
}

export default function Updates() {
  const [updates, setUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const storedUpdates = localStorage.getItem('updates');
    if (storedUpdates) {
      setUpdates(JSON.parse(storedUpdates));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 motion-safe:animate-fadeIn">Latest Updates</h1>
        {updates.map((update, index) => (
          <UpdateCard key={update.id} update={update} index={index} />
        ))}
      </div>
    </div>
  );
}

