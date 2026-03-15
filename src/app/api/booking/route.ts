import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Log immediately when request is received
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    event: 'api_booking_post_received'
  }))

  try {
    const body = await request.json()

    // Log booking attempt to stdout (visible in docker logs)
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        event: 'booking_request',
        departure: body.departure,
        destination: body.destination,
        departureDate: body.departureDate,
        passengers: body.passengers,
        aircraft: body.aircraft,
        email: body.email
      })
    )

    return NextResponse.json({
      success: true,
      message: 'Booking request received. Our team will contact you within 2 hours.'
    })
  } catch (error) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        event: 'booking_error',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    )
    return NextResponse.json(
      { success: false, message: 'Failed to process booking' },
      { status: 500 }
    )
  }
}
