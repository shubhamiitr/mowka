import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../../src/lib/supabase-server';
import { TALENT_PAGE } from '../../../../src/constants/content';

export async function POST(req) {
    try {
        const body = await req.json();
        const { fullName, email, linkedinId, avatarUrl, phone, preferredTime, portfolioUrl } = body;

        if (!linkedinId) {
            return NextResponse.json({ error: TALENT_PAGE.errors.authFailed }, { status: 400 });
        }

        const supabase = getSupabaseAdmin();

        // Deduplication check using unique linkedinId
        const { data } = await supabase.from('builder_submissions').select('id').eq('linkedin_id', linkedinId).maybeSingle();
        if (data) {
            return NextResponse.json({ alreadyExists: true }, { status: 200 });
        }

        const { error } = await supabase.from('builder_submissions').insert({
            full_name: fullName.trim(),
            email: email?.trim() || null,
            phone: phone?.trim() || null,
            preferred_time: preferredTime || null,
            portfolio_url: portfolioUrl?.trim() || null,
            linkedin_id: linkedinId,
            avatar_url: avatarUrl || null,
        });

        if (error) {
            if (error.code === '23505') {
                return NextResponse.json({ alreadyExists: true }, { status: 200 });
            }
            throw error;
        }

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error('[/api/talent/connect]', err.message);
        return NextResponse.json(
            { error: TALENT_PAGE.errors.default },
            { status: 500 }
        );
    }
}
