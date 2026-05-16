import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../../src/lib/supabase-server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) return NextResponse.json({ exists: false });

    try {
        const supabase = getSupabaseAdmin();
        const { data } = await supabase.from('builder_submissions').select('id').eq('linkedin_id', id).maybeSingle();
        return NextResponse.json({ exists: !!data });
    } catch (err) {
        console.error('[/api/builder/check]', err.message);
        return NextResponse.json({ exists: false });
    }
}
