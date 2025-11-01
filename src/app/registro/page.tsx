"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleRegistro = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");

    const res = await fetch("/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, correo, password, rol: "usuario" }),
    });

    const data = await res.json();
    if (res.ok) {
      setMensaje("✅ Registro exitoso, ahora puedes iniciar sesión");
      setTimeout(() => router.push("/login"), 2000);
    } else {
      setMensaje(`❌ ${data.error || "Error al registrar usuario"}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Crear cuenta</h1>
        <form onSubmit={handleRegistro} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 rounded-lg border dark:bg-gray-700"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="p-2 rounded-lg border dark:bg-gray-700"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded-lg border dark:bg-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Registrar
          </button>
        </form>

        {mensaje && <p className="text-center mt-4">{mensaje}</p>}

        <p className="text-center mt-4 text-sm">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="text-blue-600 hover:text-blue-800">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
