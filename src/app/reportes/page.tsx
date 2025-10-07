"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function ReportesPage() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [datos, setDatos] = useState([
    { fecha: "01/10", consumo: 3.5 },
    { fecha: "02/10", consumo: 4.2 },
    { fecha: "03/10", consumo: 2.8 },
    { fecha: "04/10", consumo: 3.9 },
    { fecha: "05/10", consumo: 5.1 },
    { fecha: "06/10", consumo: 3.7 },
  ]);

  const generarReporte = () => {
    alert(`Generando reporte desde ${fechaInicio} hasta ${fechaFin}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Reportes y Análisis Energético</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <input
          type="date"
          value={fechaInicio}
          onChange={(e) => setFechaInicio(e.target.value)}
          className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
        <input
          type="date"
          value={fechaFin}
          onChange={(e) => setFechaFin(e.target.value)}
          className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
        />
        <button
          onClick={generarReporte}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Generar Reporte
        </button>
      </div>

      {/* Resumen de consumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Consumo total</h3>
          <p className="text-2xl font-bold text-blue-600">23.2 kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Promedio diario</h3>
          <p className="text-2xl font-bold text-green-600">3.8 kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Pico máximo</h3>
          <p className="text-2xl font-bold text-orange-500">5.1 kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Costo estimado</h3>
          <p className="text-2xl font-bold text-red-500">Q 22.45</p>
        </div>
      </div>

      {/* Gráfico de consumo */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-center">Consumo diario (kWh)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="consumo" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico comparativo */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">Comparativa de dispositivos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[
              { dispositivo: "Refrigerador", consumo: 10 },
              { dispositivo: "Televisor", consumo: 5 },
              { dispositivo: "Aire acondicionado", consumo: 8 },
              { dispositivo: "Iluminación", consumo: 3 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="dispositivo" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consumo" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <footer className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Sistema de Monitoreo Energético - Jalpatagua, Jutiapa
      </footer>
    </div>
  );
}
