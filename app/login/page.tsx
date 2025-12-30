"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include", // 🔑 FONDAMENTALE
    });

    if (res.ok) {
      router.push("/matches");
    } else {
      setError("Credenziali non valide");
    }
  };

  return (
    <main className="min-h-screen bg-[#0e1428] text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-[#1a233a] p-8 rounded-2xl shadow-lg">

        <Image
          src="/images/login.png"
          alt="Login Hero"
          width={300}
          height={200}
          className="mx-auto mb-8"
          priority
        />

        <h2 className="text-3xl font-bold text-center mb-6 text-amber-400">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg bg-[#0d1220] focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg bg-[#0d1220] focus:outline-none focus:ring-2 focus:ring-amber-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-400 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-black font-semibold py-3 rounded-lg transition"
          >
            Accedi
          </button>
        </form>
      </div>
    </main>
  );
}
