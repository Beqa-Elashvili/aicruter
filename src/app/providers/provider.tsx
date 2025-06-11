"use client";

import { useContext, useEffect, useState } from "react";
import { supabase } from "../services/suparbaseClient";
import { UserDetail, UserDetailContext } from "./UserDetailContext";

function Provider({ children }: { children: any }) {
  const [user, setUser] = useState<UserDetail | null>(null);
  const CreateNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      let { data: Users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", user?.email);
      console.log(Users);
      if (Users?.length === 0) {
        const { data, error } = await supabase.from("users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.user_metadata?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);
        setUser(data!);
        console.log(data);
      }
      setUser(Users !== null ? Users[0] : null);
      return;
    });
  };

  useEffect(() => {
    CreateNewUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ user, setUser }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default Provider;

export const useUser = () => {
  const context = useContext(UserDetailContext);
  return context;
};
