"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ejemplo de autenticación local (simulada)
    if (email === "admin@energymonitor.com" && password === "admin123") {
      localStorage.setItem("rol", "ADMIN");
      router.push("/dashboard");
    } else if (email === "usuario@energymonitor.com" && password === "user123") {
      localStorage.setItem("rol", "USER");
      router.push("/dashboard");
    } else {
      setError("Credenciales incorrectas. Intente de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Image src="/energy.jpg" alt="Logo" width={60} height={60} />
          <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
            Iniciar Sesión
          </h1>
          <p className="text-gray-500 text-sm mt-1 text-center">
            Sistema de Monitoreo Energético
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <button
            type="submit"
            className="mt-4 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            Ingresar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          ¿No tienes cuenta? <span className="text-blue-600">Contacta al administrador</span>
        </p>
      </div>
    </div>
  );
}
