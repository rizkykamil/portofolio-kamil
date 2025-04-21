import { NextResponse } from 'next/server'
import DB from '@/lib/db'

interface Blog {
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

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const { slug } = params
    if (req.method === 'GET') {
        try {
            const results = await new Promise<Blog[]>((resolve, reject) => {
                DB.query(
                    'SELECT * FROM blogs WHERE slug = ? LIMIT 1',
                    [slug],
                    (error, results) => {
                        if (error) {
                            console.error('Database Query Error:', error)
                            reject(error)
                        } else {
                            resolve(results as Blog[])
                        }
                    }
                )
            })

            // Check if the query returned any blogs
            if (results.length === 0) {
                return NextResponse.json(
                    { message: 'No blogs found' },
                    { status: 404 }
                )
            }

            const blog = results[0]
            blog.gambar = `https://portofolio.rizkykmil.web.id/uploads/blog_images/${blog.gambar}`
            return NextResponse.json(blog, { status: 200 })
        } catch (error) {
            console.error('Error Fetching Blogs:', error)

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
