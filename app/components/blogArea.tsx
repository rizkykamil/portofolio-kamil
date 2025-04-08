// app/components/blogArea.tsx  
import React from 'react';  

interface Blog {  
    id: number;  
    judul: string;  
    type: string;  
    time: number;  
    tanggal: string;  
    gambar: string;  
    slug: string;  
    isi: string;  
    created_at: string;  
}  

export default function BlogArea({ blogs }: { blogs: Blog[] }) {  
    // Render logic for blogs  
    return (  
        <>  
            {blogs.map((blog) => (  
                <div key={blog.id} className="col-md-4">  
                    {/* Tampilan blog individual */}  
                    <div className="single-portfolio">  
                        <img src={blog.gambar} alt={blog.judul} />  
                        <h3>{blog.judul}</h3>  
                        {/* Tambahkan elemen lain sesuai kebutuhan */}  
                    </div>  
                </div>  
            ))}  
        </>  
    );  
}  