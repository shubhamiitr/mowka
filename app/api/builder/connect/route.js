import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../../src/lib/supabase-server';
import { BUILDER_PAGE } from '../../../../src/constants/content';

export async function POST(req) {
    try {
        const body = await req.json();
        const { phone, preferredTime, portfolioUrl } = body;

        if (!phone && !portfolioUrl) {
            return NextResponse.json({ error: BUILDER_PAGE.errors.default }, { status: 400 });
        }

        const supabase = getSupabaseAdmin();

        const { error } = await supabase.from('builder_submissions').insert({
            phone: phone?.trim() || null,
            preferred_time: preferredTime || null,
            portfolio_url: portfolioUrl?.trim() || null,
        });

        if (error) throw error;

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error('[/api/builder/connect]', err.message);
        return NextResponse.json(
            { error: BUILDER_PAGE.errors.default },
            { status: 500 }
        );
    }
}
