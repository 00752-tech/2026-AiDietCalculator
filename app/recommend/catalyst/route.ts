import { NextResponse } from "next/server"

const DESTINATION_URL = "https://2d52bx1-e7dsfx08pm6q66yqyz.hop.clickbank.net/?&traffic_source=aidietcalc"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const targetUrl = new URL(DESTINATION_URL)

  // Pass through dynamic tracking query parameters (e.g. utm_campaign from programmatic pages)
  searchParams.forEach((value, key) => {
    if (key !== "traffic_source") {
      targetUrl.searchParams.set(key, value)
    }
  })

  return NextResponse.redirect(targetUrl.toString(), 307)
}
