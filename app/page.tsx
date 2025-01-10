import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010]">
      {/* Section 1: Hero */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white motion-safe:animate-fadeIn">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <h1 className="text-6xl font-bold z-10">Xliich Network</h1>
      </section>

      {/* Section 2: About Us */}
      <section className="py-20 px-6 bg-[#101010] text-white motion-safe:animate-slideUp">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg">
            Xliich Network is a cutting-edge platform dedicated to revolutionizing the way people connect and collaborate. Our mission is to provide innovative solutions that empower individuals and businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Section 3: Discord */}
      <section className="py-20 px-6 bg-[#101010] text-white motion-safe:animate-slideUp" style={{ animationDelay: '0.2s' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Discord</h2>
          <p className="text-lg mb-10">
            Join our vibrant Discord community to connect with like-minded individuals, share ideas, and stay updated on the latest developments.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Discord Server 1"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Main Community</h3>
                <p className="text-gray-600 mb-4">Our main hub for discussions, support, and networking.</p>
                <Link href="https://discord.gg/main-community">
                  <Button>Join Server</Button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Discord Server 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Developer's Corner</h3>
                <p className="text-gray-600 mb-4">A space for developers to collaborate and share knowledge.</p>
                <Button disabled>Join Server</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Founders */}
      <section className="py-20 px-6 bg-[#101010] text-white motion-safe:animate-slideUp" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Founders</h2>
          <p className="text-lg mb-10">
            Meet the visionaries behind Xliich Network who are driving innovation and shaping the future of digital connectivity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 text-center hover-scale">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Founder 1"
                width={200}
                height={200}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">Jane Doe</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center hover-scale">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Founder 2"
                width={200}
                height={200}
                className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-black">John Smith</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

