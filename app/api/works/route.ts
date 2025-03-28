import { NextRequest, NextResponse } from 'next/server'
import DB from '@/lib/db'

// Define an interface untuk struktur work
interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    client: string
    link: string
}

// Export GET sebagai named export
export async function GET(req: NextRequest) {
    if (req.method === 'GET') {
        try {
            const results = await new Promise<Work[]>((resolve, reject) => {
                DB.query('SELECT * FROM works', (error, results) => {
                    if (error) reject(error)
                    else resolve(results as Work[])
                })
            })

            return NextResponse.json(
                results.map((work: Work) => ({
                    id: work.id,
                    judul: work.judul,
                    gambar:
                        'https://portofolio.rizkykmil.web.id/uploads/works_images/' +
                        work.gambar,
                    type: work.type,
                    client: work.client,
                    link: work.link,
                })),
                { status: 200 }
            )
        } catch (error) {
            return NextResponse.json(
                {
                    message: 'Database error',
                    error:
                        error instanceof Error ? error.message : String(error),
                },
                { status: 500 }
            )
        }
    } else {
        return NextResponse.json(
            { message: 'Method Not Allowed' },
            { status: 405 }
        )
    }
}
