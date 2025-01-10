import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-[#101010] text-white motion-safe:animate-slideIn">
      <Link href="/" className="flex items-center hover-scale">
        <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span className="text-xl font-bold">Xliich Network</span>
      </Link>
      <div className="flex space-x-4">
        <Link href="/updates">
          <Button variant="outline" className="bg-white text-black hover:bg-gray-200 hover-scale">
            Updates
          </Button>
        </Link>
      </div>
    </header>
  )
}

