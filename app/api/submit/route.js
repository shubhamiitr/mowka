import { getSupabaseAdmin } from '../../../src/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { email, phone } = await req.json();

        if (!email || !phone) {
            return NextResponse.json({ error: 'Email and phone are required' }, { status: 400 });
        }

        const supabase = getSupabaseAdmin();

        const { error } = await supabase.from('contacts').insert({
            email,
            phone,
            source: 'website',
        });

        if (error) {
            console.error('Supabase insert error:', error);
            return NextResponse.json(
                { error: 'Something went wrong. Please email shubham@mowka.in' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: 'Submission successful' });
    } catch (error) {
        console.error('Error submitting contact:', error);
        return NextResponse.json(
            { error: 'Failed to submit. Please try again or contact shubham@mowka.in' },
            { status: 500 }
        );
    }
}
