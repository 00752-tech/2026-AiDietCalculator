import { NextResponse } from "next/server"

const DESTINATION_URL = "https://dea07u16p85ker4kfpbav7tk1j.hop.clickbank.net/?&traffic_source=ai_diet"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const targetUrl = new URL(DESTINATION_URL)

  // Pass through dynamic tracking parameters (e.g., utm_campaign)
  searchParams.forEach((value, key) => {
    if (key !== "traffic_source") {
      targetUrl.searchParams.set(key, value)
    }
  })

  return NextResponse.redirect(targetUrl.toString(), 307)
}
