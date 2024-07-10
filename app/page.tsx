"use client"

import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/client";
import Calender from "@/components/Calender";
import style from "./page.module.css"
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function Index() {
  const canInitSupabaseClient = () => {


    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    fetchUser();
  }, []);



  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <div className={style.header}>
          {isSupabaseConnected && <AuthButton user={user}/>}
        </div>
      </nav>

      <div>
        <Calender user={user}/>
      </div>
    </div>
  );
}
