import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const errorDescription = searchParams.get('error_description');
  const next = searchParams.get('next') ?? '/dashboard/student';

  if (error) {
    console.error('Supabase Auth callback error:', error, errorDescription);
    return NextResponse.redirect(
      `${origin}/auth/login?error=${encodeURIComponent(errorDescription || error)}`
    );
  }

  if (code) {
    try {
      const supabase = await createClient();
      const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
      
      if (!exchangeError && data?.user) {
        const user = data.user;
        const fullName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split('@')[0] ||
          'Student User';
        const avatarUrl =
          user.user_metadata?.avatar_url ||
          user.user_metadata?.picture ||
          '';

        // Auto-provision or update public.profiles row
        await supabase.from('profiles').upsert(
          {
            id: user.id,
            email: user.email,
            full_name: fullName,
            avatar_url: avatarUrl,
            role: 'student',
            branch: 'Computer Science & Engineering',
            batch_year: 2026,
            cgpa: 8.5,
            updated_at: new Date().toISOString(),
          },
          { onConflict: 'id' }
        );

        return NextResponse.redirect(`${origin}${next}`);
      }
    } catch (err) {
      console.error('Exception during auth callback exchange:', err);
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(`${origin}${next}`);
}

