import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

export default async function getData(props: { user: User | null }) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('events')
    .select('text, start_time, end_time')
    .eq('user_id', props.user?.id);
  if (error) {
    console.log(error);
    return { props: { data: null, error: 'データ取得に失敗しました' } };
  }

  return { props: { data } };
}
