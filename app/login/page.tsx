'use client';

import { createClient } from '@/utils/supabase/client';
import { Auth } from '@supabase/auth-ui-react';

import { ThemeSupa, ThemeMinimal } from '@supabase/auth-ui-shared';

export default function Login() {
  const supabase = createClient();

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={['google']}
        // onlyThirdPartyProviders
        theme="dark"
      />
    </div>
  );
}
