import { NextRequest, NextResponse } from 'next/server';

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 5000);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phone, email, amount, paymentMethod, transactionId, message } = body;

    if (!fullName || !phone || !paymentMethod || !transactionId) {
      return NextResponse.json(
        { error: 'Full name, phone, payment method, and transaction ID are required.' },
        { status: 400 }
      );
    }

    const sanitized = {
      fullName: sanitize(fullName),
      phone: sanitize(phone),
      email: sanitize(email || ''),
      amount: sanitize(String(amount || '')),
      paymentMethod: sanitize(paymentMethod),
      transactionId: sanitize(transactionId),
      message: sanitize(message || ''),
      submittedAt: new Date().toISOString(),
    };

    console.log('[IRIS FOUNDATION - DONATION SUBMISSION]', JSON.stringify(sanitized, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Donation details recorded. Thank you for supporting Iris Foundation.',
    });
  } catch (error) {
    console.error('[DONATE API ERROR]', error);
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 });
  }
}