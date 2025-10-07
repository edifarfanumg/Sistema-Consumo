"use client";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function DashboardPage() {
  const [data, setData] = useState([
    { hora: "08:00", consumo: 1.2 },
    { hora: "10:00", consumo: 2.4 },
    { hora: "12:00", consumo: 3.1 },
    { hora: "14:00", consumo: 2.8 },
    { hora: "16:00", consumo: 3.6 },
    { hora: "18:00", consumo: 4.1 },
    { hora: "20:00", consumo: 3.5 },
  ]);

  const [valores, setValores] = useState({
    consumoActual: 3.5,
    energiaTotal: 48.7,
    dispositivosActivos: 5,
  });

  // Simulación de actualización de consumo en tiempo real
  useEffect(() => {
    const intervalo = setInterval(() => {
      const nuevoConsumo = (Math.random() * 2 + 2).toFixed(2);
      setValores((prev) => ({
        ...prev,
        consumoActual: parseFloat(nuevoConsumo),
      }));

      setData((prev) => [
        ...prev.slice(1),
        { hora: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), consumo: parseFloat(nuevoConsumo) },
      ]);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Panel de Monitoreo Energético</h1>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-300">Consumo Actual</h3>
          <p className="text-3xl font-bold text-blue-600">{valores.consumoActual.toFixed(2)} kWh</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-300">Energía Total del Día</h3>
          <p className="text-3xl font-bold text-green-600">{valores.energiaTotal.toFixed(1)} kWh</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-gray-300">Dispositivos Activos</h3>
          <p className="text-3xl font-bold text-orange-500">{valores.dispositivosActivos}</p>
        </div>
      </div>

      {/* Gráfico de consumo */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-200">
          Consumo Energético (Últimas Horas)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="hora" stroke="#888" />
            <YAxis unit="kWh" stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="consumo" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Información complementaria */}
      <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center max-w-3xl">
        <p>
          Este panel muestra los datos simulados del consumo energético del hogar en tiempo real. 
          En la versión final del sistema, los valores se actualizarán automáticamente a partir de los sensores conectados.
        </p>
      </div>
    </div>
  );
}
