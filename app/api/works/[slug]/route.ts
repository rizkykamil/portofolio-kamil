import { NextResponse } from 'next/server'
import DB from '@/lib/db'

interface Work {
    id: number
    judul: string
    type: string
    time: number
    tanggal: string
    gambar: string
    slug: string
    isi: string
    created_at: string
}

export async function GET(
    req: Request,
    { params }: { params: Promise<{ slug: string }> } // Key fix here
) {
    try {
        const { slug } = await params // Resolve the Promise

        const results = await new Promise<Work[]>((resolve, reject) => {
            DB.query(
                'SELECT * FROM works WHERE slug = ? LIMIT 1',
                [slug],
                (error, results) => {
                    if (error) reject(error)
                    resolve(results as Work[])
                }
            )
        })

        if (results.length === 0) {
            return NextResponse.json(
                { message: 'No works found' },
                { status: 404 }
            )
        }

        const work = results[0]
        work.gambar = `https://portofolio.rizkykmil.web.id/uploads/works_images/${work.gambar}`
        return NextResponse.json(work, { status: 200 })
    } catch (error) {
        console.error('Error:', error)
        return NextResponse.json(
            {
                message: 'Database error',
                error: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        )
    }
}
