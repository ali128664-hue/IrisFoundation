import { NextRequest, NextResponse } from 'next/server';

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 5000);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const sanitized = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      subject: sanitize(subject || ''),
      message: sanitize(message),
      submittedAt: new Date().toISOString(),
    };

    console.log('[IRIS FOUNDATION - CONTACT INQUIRY]', JSON.stringify(sanitized, null, 2));

    return NextResponse.json({ success: true, message: 'Message received. Thank you.' });
  } catch (error) {
    console.error('[CONTACT API ERROR]', error);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}