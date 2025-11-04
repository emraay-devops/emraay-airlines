import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, StarIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/emraay-airlines-logo.svg"
                alt="Emraay Airlines"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#fleet" className="text-white hover:text-blue-300 transition-colors">Our Fleet</Link>
              <Link href="#services" className="text-white hover:text-blue-300 transition-colors">Services</Link>
              <Link href="#about" className="text-white hover:text-blue-300 transition-colors">About</Link>
              <Link href="http://emraaysolutions.com" className="text-white hover:text-blue-300 transition-colors">Emraay Website</Link>
              <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Book Flight
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Luxury
                  <span className="block text-blue-400">Private Jets</span>
                </h1>
                <p className="text-xl text-blue-100 max-w-lg">
                  Experience the ultimate in private aviation with Emraay Airlines. 
                  Premium service, unmatched comfort, and global reach. Your journey begins here.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center group">
                  Book Your Flight
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#fleet" className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Fleet
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-6 w-6 text-green-400" />
                  <span className="text-white font-medium">Certified Safe</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-6 w-6 text-blue-400" />
                  <span className="text-white font-medium">24/7 Service</span>
                </div>
                <div className="flex items-center space-x-2">
                  <StarIcon className="h-6 w-6 text-yellow-400" />
                  <span className="text-white font-medium">5-Star Rated</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/private-jet-1.jpg"
                  alt="Luxury Private Jet"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Gulfstream G650</h3>
                  <p className="text-blue-200">Ultra-long range business jet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Premium Fleet</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Choose from our carefully curated selection of the world&apos;s most advanced private aircraft. We would love to show you our fleet!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Jet 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/images/private-jet-2.jpg"
                  alt="Bombardier Global 7500"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Bombardier Global 7500 - V4</h3>
                <p className="text-blue-200 mb-4">Ultra-long range, 19 passengers, 2 Pilots</p>
                <div className="space-y-2 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <span className="text-white font-semibold">7,700 nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed:</span>
                    <span className="text-white font-semibold">Mach 0.925</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="text-white font-semibold">19 passengers</span>
                  </div>
                </div>
                <Link href="/book" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full text-center block transition-colors">
                  Book This Aircraft
                </Link>
              </div>
            </div>

            {/* Jet 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/images/private-jet-3.jpg"
                  alt="Cessna Citation X"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Embraer E190 Long Haul Jet</h3>
                <p className="text-blue-200 mb-4">High-speed, 25 passengers</p>
                <div className="space-y-2 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Range:</span>
                    <span className="text-white font-semibold">3,460 nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Speed:</span>
                    <span className="text-white font-semibold">Mach 0.935</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="text-white font-semibold">12 passengers</span>
                  </div>
                </div>
                <Link href="/book" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full text-center block transition-colors">
                  Book This Aircraft
                </Link>
              </div>
            </div>

            {/* Jet 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-colors">
              <div className="relative h-64">
                <Image
                  src="/images/luxury-interior.jpg"
                  alt="Luxury Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Custom Interior</h3>
                <p className="text-blue-200 mb-4">Luxury seating, 8 passengers</p>
                <div className="space-y-2 text-sm text-blue-100">
                  <div className="flex justify-between">
                    <span>Comfort:</span>
                    <span className="text-white font-semibold">Executive Suite</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Amenities:</span>
                    <span className="text-white font-semibold">Full Service</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="text-white font-semibold">8 passengers</span>
                  </div>
                </div>
                <Link href="/book" className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full text-center block transition-colors">
                  Book This Aircraft
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Premium Services</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Experience unparalleled luxury and convenience with our comprehensive private aviation services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Global Reach</h3>
              <p className="text-blue-200">Access to 5,000+ airports worldwide</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Gourmet Dining</h3>
              <p className="text-blue-200">Michelin-starred chef prepared meals</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-bold text-white">Concierge</h3>
              <p className="text-blue-200">24/7 personal concierge service</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white">Security</h3>
              <p className="text-blue-200">Highest security standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/images/emraay-airlines-logo.svg"
                alt="Emraay Airlines"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-blue-200">
                The world&apos;s premier private jet charter service, delivering luxury, safety, and convenience.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="#fleet" className="hover:text-white transition-colors">Private Jets</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Charter Services</Link></li>
                <li><Link href="/book" className="hover:text-white transition-colors">Flight Booking</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">Concierge</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Safety</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-blue-200">
                <p>+1 (555) 123-4567</p>
                <p>info@emraayairlines.com</p>
                <p>24/7 Emergency: +1 (555) 911-HELP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Emraay Airlines. All rights reserved. | Luxury Private Jet Charter</p>
          </div>
        </div>
      </footer>
    </div>
  )
}