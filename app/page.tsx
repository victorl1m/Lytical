"use client";
import Brand from "@/components/Brand";
import Copyright from "@/components/Copyright";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearchAccount() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      <main className="flex min-h-screen flex-col bg-neutral-900 justify-between">
        <Brand />
        <div className="sm:p-0 lg:p-0 md:p-0 xl:p-48 2xl:p-48 h-full max-xl:items-center flex flex-col">
          <h1 className="text-3xl font-bold text-white font-base text-left">
            Entrar
          </h1>
          <div className="mt-12 w-96 flex justify-center flex-col">
            <div>
              <label htmlFor="email" className="font-base text-white text-xl">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-96 text-white bg-neutral-800 p-4 rounded-xl border-2 border-neutral-700 mt-1 focus:outline-none focus:border-purple-900"
              />
            </div>

            <button
              onClick={handleSearchAccount}
              className="mt-6 w-96 h-16 bg-purple-900 rounded-xl justify-center flex items-center font-base text-xl"
            >
              {loading ? (
                <Loader2 className="h-6 w-6 animate-spin text-purple-500" />
              ) : (
                <span className="text-white">Continuar</span>
              )}
            </button>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
}
