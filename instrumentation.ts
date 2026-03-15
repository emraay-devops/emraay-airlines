export async function register() {
  // Runs once when the Next.js server starts
  console.log(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      event: 'app_start',
      message: 'Emraay Airlines server started',
      env: process.env.NODE_ENV
    })
  )
}
