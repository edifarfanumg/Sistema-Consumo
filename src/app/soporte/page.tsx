"use client";
import { useState } from "react";

export default function SoportePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Tu mensaje ha sido enviado correctamente. ✅");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Centro de Soporte y Contacto</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        Si tienes dudas, problemas técnicos o sugerencias, completa el siguiente formulario y nuestro equipo te contactará a la brevedad.
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
          <label className="block text-sm font-medium mb-2">Correo electrónico</label>
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
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Enviar mensaje
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center">
        <p>También puedes contactarnos por correo: <strong>soporte@energia-jalpatagua.com</strong></p>
        <p>Teléfono: <strong>+502 1234 5678</strong></p>
      </div>
    </div>
  );
}
