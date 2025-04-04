import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient as PostgresqlClient } from '@/../prisma/generated/postgresql2'

const prisma = new PostgresqlClient()

// Get all events
export async function GET() {
  try {
    const events = await prisma.eventSocialButterfly.findMany({
      orderBy: { date: 'asc' },
    })

    return NextResponse.json(events, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
