"use client";
import { useState } from "react";

export default function SoportePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [estado, setEstado] = useState<"enviando" | "exito" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");

    try {
      const res = await fetch("/api/reportes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setEstado("exito");
        setFormData({ nombre: "", correo: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Centro de Soporte y Reportes</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        Si has detectado algún problema o deseas hacer una sugerencia sobre el
        sistema, llena el siguiente formulario. Tu reporte será almacenado y
        revisado por el equipo técnico.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={estado === "enviando"}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {estado === "enviando" ? "Enviando..." : "Enviar reporte"}
        </button>

        {estado === "exito" && (
          <p className="text-green-600 text-center mt-4">
            ✅ Tu reporte ha sido guardado correctamente.
          </p>
        )}
        {estado === "error" && (
          <p className="text-red-500 text-center mt-4">
            ❌ Ocurrió un error al guardar el reporte.
          </p>
        )}
      </form>

      <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p>
          También puedes escribirnos a:{" "}
          <strong>soporte@energia-jalpatagua.com</strong>
        </p>
        <p>
          Teléfono: <strong>+502 1234 5678</strong>
        </p>
      </div>
    </div>
  );
}
