import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Calender from "@/components/Calender";
import { redirect } from "next/navigation";
import style from "./page.module.css"

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.header}>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>

      <div>
        <Calender />
      </div>
    </div>
  );
}
