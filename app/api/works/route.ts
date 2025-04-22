import { NextRequest, NextResponse } from 'next/server'
import DB from '@/lib/db'

// Define an interface for work structure
interface Work {
    id: number
    judul: string
    gambar: string
    type: string
    client: string
    link: string
    slug : string
}

// Export GET as a named export
export async function GET(req: NextRequest) {
    if (req.method === 'GET') {
        try {
            // Using async/await for cleaner code
            const results: Work[] = await new Promise((resolve, reject) => {
                DB.query('SELECT * FROM works', (error, results) => {
                    if (error) reject(error)
                    else resolve(results as Work[])
                })
            });

            // Check if there are no results
            if (results.length === 0) {
                return NextResponse.json(
                    { message: 'No works found' },
                    { status: 404 }
                );
            }

            // Mapping over results to structure the response data
            return NextResponse.json(
                results.map((work) => ({
                    id: work.id,
                    judul: work.judul,
                    gambar: 'https://portofolio.rizkykmil.web.id/uploads/works_images/' + work.gambar,
                    type: work.type,
                    client: work.client,
                    link: work.link,
                    slug : work.slug
                })),
                { status: 200 }
            );
        } catch (error) {
            // Logging the error to the console for better debugging
            console.error('Database error:', error);

            return NextResponse.json(
                {
                    message: 'Database error',
                    error: error instanceof Error ? error.message : String(error),
                },
                { status: 500 }
            );
        }
    } else {
        // Handling other HTTP methods
        return NextResponse.json(
            { message: 'Method Not Allowed' },
            { status: 405 }
        );
    }
}
