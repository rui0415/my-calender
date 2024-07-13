import { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { signOut } from '@/app/login/actions/actions';

export default function AuthButton(props: { user: User | null }) {
  return props.user ? (
    <div className="flex items-center gap-4">
      Hey, {props.user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
