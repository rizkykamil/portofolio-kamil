import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { name, email, phone, subject, InquiryType, message } =
        await req.json();

    console.log(req.body); // Untuk debugging

    // Validasi input
    if (!name ) {
        return NextResponse.json(
            { status: 'error', message: 'Field Name is required' },
            { status: 400 }
        );
    }

    if (!email) {
        return NextResponse.json(
            { status: 'error', message: 'Field Email is required' },
            { status: 400 }
        );
    }

    if (!phone) {
        return NextResponse.json(
            { status: 'error', message: 'Field Phone is required' },
            { status: 400 }
        );
    }

    if (!subject) {
        return NextResponse.json(
            { status: 'error', message: 'Field Subject is required' },
            { status: 400 }
        );
    }

    if (!InquiryType) {
        return NextResponse.json(
            { status: 'error', message: 'Field Inquiry Type is required' },
            { status: 400 }
        );
    }

    if (!message) {
        return NextResponse.json(
            { status: 'error', message: 'Field Message is required' },
            { status: 400 }
        );
    }

    // Proses nomor telepon (format WA)
    let formattedPhone = phone.replace(/[\s().+-]/g, '');
    formattedPhone = `wa.me/${formattedPhone}`;

    // Data untuk dikirim ke API WhatsApp
    const data = {
        sendTo: '+6285172014124', // Nomor tujuan
        token: 'oQmTbHOQ9z', // Token device yang valid
        message: `Nama: ${name}\nEmail: ${email}\nPhone: ${formattedPhone}\nSubject: ${subject}\nInquiryType: ${InquiryType}\nMessage: ${message}`,
    };

    try {
        // Kirim data ke API WhatsApp
        const response = await fetch(
            'https://wa.wibidigital.com/api/send-text-message',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

        const responseData = await response.json();

        if (response.ok) {
            // Kirim terimakasih ke nomor pengirim
            const thankYouMessage = `Terimakasih ${name} telah menghubungi kami, kami akan segera menghubungi Anda kembali.`;

            const sendThankYouResponse = await fetch(
                'https://wa.wibidigital.com/api/send-text-message',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sendTo: formattedPhone.replace('wa.me/', ''),
                        token: 'oQmTbHOQ9z',
                        message: thankYouMessage,
                    }),
                }
            );

            if (!sendThankYouResponse.ok) {
                throw new Error('Gagal mengirim pesan terimakasih');
            }

            return NextResponse.json({
                status: 'success',
                message: 'Pesan berhasil dikirim',
            });
        } else {
            throw new Error(responseData.message || 'Gagal mengirim pesan');
        }
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            {
                status: 'error',
                message: 'Gagal mengirim pesan, silahkan coba lagi nanti!',
            },
            { status: 500 }
        );
    }
}
