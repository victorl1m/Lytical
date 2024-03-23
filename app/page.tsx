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
      <main className="flex min-h-screen max-xl:p-2 bg-neutral-900 justify-between flex-col">
        <Brand />
        <div className="flex flex-row items-center justify-between">
          <div className="p-6 sm:p-0 lg:p-0 md:p-0 xl:p-48 2xl:p-48 h-full max-xl:items-center flex flex-col bg-neutral-800 w-min max-xl:w-full rounded-3xl">
            <h1 className="text-3xl font-bold text-white font-base text-left">
              Entrar
            </h1>
            <div className="mt-12 max-xl:p-6 w-96 flex justify-center flex-col">
              <label htmlFor="email" className="font-base text-white text-xl">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-white bg-neutral-800 p-4 rounded-xl border-2 border-neutral-700 mt-1 focus:outline-none focus:border-purple-900"
              />

              <button
                onClick={handleSearchAccount}
                className="mt-6 w-full h-16 bg-purple-900 rounded-xl justify-center flex items-center font-base text-xl focus:outline-none"
              >
                {loading ? (
                  <Loader2 className="h-6 w-6 animate-spin text-purple-500" />
                ) : (
                  <span className="text-white">Continuar</span>
                )}
              </button>
            </div>
          </div>
          <svg
            width="521"
            height="521"
            viewBox="0 0 521 521"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M173.667 303.917C245.602 303.917 303.917 245.602 303.917 173.667C303.917 101.732 245.602 43.4167 173.667 43.4167C101.732 43.4167 43.4167 101.732 43.4167 173.667C43.4167 245.602 101.732 303.917 173.667 303.917Z"
              stroke="#581C87"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M392.704 225.115C413.225 232.766 431.485 245.468 445.797 262.046C460.108 278.624 470.009 298.543 474.582 319.961C479.155 341.379 478.254 363.604 471.962 384.582C465.67 405.559 454.189 424.611 438.583 439.976C422.976 455.341 403.747 466.523 382.674 472.487C361.601 478.451 339.364 479.005 318.02 474.098C296.676 469.191 276.914 458.981 260.561 444.413C244.209 429.845 231.794 411.388 224.464 390.75"
              stroke="#581C87"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M183.978 128.622C179.413 129.018 168.789 129.573 162.812 128.622V218.169H171.528H183.978V128.622Z"
              fill="#581C87"
              stroke="#581C87"
            />
            <path
              d="M120.481 140.833H183.978V134.462V128.622H120.481V140.833Z"
              fill="#581C87"
              stroke="#581C87"
            />
            <path
              d="M143.682 184.385L139.612 176.245L203.516 150.602L207.179 157.928L143.682 184.385Z"
              fill="#581C87"
              stroke="#581C87"
            />
            <path
              d="M302.904 369.636C306.627 372.308 315.052 378.805 318.968 383.418L377.274 315.454L370.659 309.78L361.21 301.673L302.904 369.636Z"
              fill="#581C87"
              stroke="#581C87"
            />
            <path
              d="M359.047 401.713L310.855 360.369L306.706 365.204L302.904 369.636L351.096 410.981L359.047 401.713Z"
              fill="#581C87"
              stroke="#581C87"
            />
            <path
              d="M369.796 353.551L367.585 362.38L302.387 340.233L304.377 332.287L369.796 353.551Z"
              fill="#581C87"
              stroke="#581C87"
            />
          </svg>
        </div>
        <Copyright />
      </main>
    </>
  );
}
