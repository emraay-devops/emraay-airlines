'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, CalendarIcon, MapPinIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function BookPage() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    aircraft: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (data.success) {
        alert(data.message)
      } else {
        alert(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Book Your Private Flight</h1>
          <p className="text-xl text-blue-200">Experience luxury aviation at its finest</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Flight Details */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">Flight Details</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Departure City</label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="text"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        placeholder="e.g., New York"
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Destination City</label>
                    <div className="relative">
                      <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., London"
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Departure Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Return Date (Optional)</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="date"
                        name="returnDate"
                        value={formData.returnDate}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Number of Passengers</label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="8">8 Passengers</option>
                      <option value="12">12 Passengers</option>
                      <option value="19">19 Passengers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Preferred Aircraft</label>
                    <select
                      name="aircraft"
                      value={formData.aircraft}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    >
                      <option value="">Select Aircraft</option>
                      <option value="global-7500">Bombardier Global 7500</option>
                      <option value="citation-x">Cessna Citation X</option>
                      <option value="gulfstream-g650">Gulfstream G650</option>
                      <option value="custom">Custom Interior</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.smith@email.com"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any special dietary requirements, ground transportation needs, or other requests..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>

          {/* Booking Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Instant Confirmation</h4>
                    <p className="text-blue-200 text-sm">Receive immediate confirmation of your booking request</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Personal Concierge</h4>
                    <p className="text-blue-200 text-sm">Our team will contact you within 2 hours to finalize details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Flight Preparation</h4>
                    <p className="text-blue-200 text-sm">We&apos;ll prepare your aircraft and coordinate all logistics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Luxury Experience</h4>
                    <p className="text-blue-200 text-sm">Enjoy your premium private flight experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Emraay?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <h4 className="text-white font-semibold">Global Network</h4>
                    <p className="text-blue-200 text-sm">Access to 5,000+ airports worldwide</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h4 className="text-white font-semibold">Safety First</h4>
                    <p className="text-blue-200 text-sm">Highest safety standards and certifications</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <h4 className="text-white font-semibold">5-Star Service</h4>
                    <p className="text-blue-200 text-sm">Award-winning luxury service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <h4 className="text-white font-semibold">24/7 Support</h4>
                    <p className="text-blue-200 text-sm">Round-the-clock concierge service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

