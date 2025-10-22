"use client";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

type Dispositivo = {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
  consumo: number; // Consumo en kWh
};

export default function DashboardPage() {
  const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
  const precioKWh = 0.15; // Precio por kWh

  const obtenerDispositivos = async () => {
    const res = await fetch("/api/dispositivos");
    const data = await res.json();
    setDispositivos(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    obtenerDispositivos();
  }, []);

  const consumoTotal = dispositivos.reduce((acc, d) => acc + d.consumo, 0);
  const gastoHora = consumoTotal * precioKWh;
  const gastoDia = gastoHora * 24;
  const gastoMes = gastoDia * 30;

  const dispositivosActivos = dispositivos.filter(d => d.estado === "Activo").length;
  const dispositivosInactivos = dispositivos.length - dispositivosActivos;

  const consumoPorDispositivo = dispositivos.map(d => ({
    nombre: d.nombre,
    consumo: d.consumo,
  }));

  const gastoProyeccion = [
    { periodo: "Hora", gasto: gastoHora },
    { periodo: "Día", gasto: gastoDia },
    { periodo: "Mes", gasto: gastoMes },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Dashboard Energético</h1>

      {/* Tarjetas resumen */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Total Dispositivos</h2>
          <p className="text-3xl font-bold">{dispositivos.length}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Activos</h2>
          <p className="text-3xl font-bold">{dispositivosActivos}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Inactivos</h2>
          <p className="text-3xl font-bold">{dispositivosInactivos}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Consumo Total (kWh)</h2>
          <p className="text-3xl font-bold">{consumoTotal.toFixed(2)}</p>
        </div>
      </div>

      {/* Proyección de pago */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Gasto por Hora</h2>
          <p className="text-2xl font-bold text-green-600">${gastoHora.toFixed(2)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Gasto por Día</h2>
          <p className="text-2xl font-bold text-green-600">${gastoDia.toFixed(2)}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Gasto por Mes</h2>
          <p className="text-2xl font-bold text-green-600">${gastoMes.toFixed(2)}</p>
        </div>
      </div>

      {/* Gráfico de consumo por dispositivo */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Consumo por Dispositivo (kWh)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={consumoPorDispositivo}>
            <XAxis dataKey="nombre" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consumo" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de proyección de gasto */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Proyección de Gasto (USD)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={gastoProyeccion}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="periodo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="gasto" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
