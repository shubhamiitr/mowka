import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '../../../../src/lib/supabase-server';
import { HOME_PAGE } from '../../../../src/constants/content';

export async function POST(req) {
    try {
        const body = await req.json();
        const { companyWebsite, roleLink } = body;

        if (!companyWebsite || !roleLink) {
            return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
        }

        const supabase = getSupabaseAdmin();

        const { error } = await supabase.from('company_leads').insert({
            company_website: companyWebsite.trim(),
            role_link: roleLink.trim(),
        });

        if (error) throw error;

        return NextResponse.json({ success: true });

    } catch (err) {
        console.error('[/api/company/connect]', err.message);
        return NextResponse.json(
            { error: HOME_PAGE.contact.errors.default },
            { status: 500 }
        );
    }
}
