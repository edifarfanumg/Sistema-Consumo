"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";
import { PDFButton } from "@/components/ReportePDF";

type Dispositivo = {
  id: number;
  nombre: string;
  consumo: number; // kWh consumidos
  costoHora: number;
  costoDia: number;
  costoMes: number;
};

export default function ReportesPage() {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
  const precioKWh = 0.15;

  const obtenerDispositivos = async () => {
    try {
      const res = await fetch("/api/dispositivos");
      const data = await res.json();
      // Calcular costos si no vienen de la API
      const dispositivosConCosto = data.map((d: any) => ({
        ...d,
        costoHora: d.consumo * precioKWh,
        costoDia: d.consumo * precioKWh * 24,
        costoMes: d.consumo * precioKWh * 24 * 30,
      }));
      setDispositivos(Array.isArray(dispositivosConCosto) ? dispositivosConCosto : []);
    } catch (error) {
      console.error("Error al obtener dispositivos:", error);
    }
  };

  useEffect(() => {
    obtenerDispositivos();
  }, []);

  const consumoTotal = dispositivos.reduce((acc, d) => acc + d.consumo, 0);
  const promedioDiario = dispositivos.length > 0 ? consumoTotal / dispositivos.length : 0;
  const picoMaximo = dispositivos.reduce((max, d) => (d.consumo > max ? d.consumo : max), 0);
  const costoEstimado = consumoTotal * precioKWh;
  const datosLinea = dispositivos.map(d => ({ fecha: d.nombre, consumo: d.consumo }));

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Reportes y Análisis Energético</h1>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800" />
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800" />
        <button onClick={() => alert(`Generando reporte desde ${fechaInicio} hasta ${fechaFin}`)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Generar Reporte
        </button>
        <PDFButton dispositivos={dispositivos} fechaInicio={fechaInicio} fechaFin={fechaFin} />
      </div>

      {/* Resumen de consumo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 w-full max-w-5xl">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Consumo total</h3>
          <p className="text-2xl font-bold text-blue-600">{consumoTotal.toFixed(2)} kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Promedio diario</h3>
          <p className="text-2xl font-bold text-green-600">{promedioDiario.toFixed(2)} kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Pico máximo</h3>
          <p className="text-2xl font-bold text-orange-500">{picoMaximo.toFixed(2)} kWh</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow text-center">
          <h3 className="text-gray-500">Costo estimado</h3>
          <p className="text-2xl font-bold text-red-500">Q {costoEstimado.toFixed(2)}</p>
        </div>
      </div>

      {/* Gráfico de línea */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow mb-10 w-full max-w-5xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Consumo por dispositivo (kWh)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={datosLinea}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="fecha" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="consumo" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico comparativo */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow w-full max-w-5xl">
        <h2 className="text-xl font-semibold mb-4 text-center">Comparativa de dispositivos</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dispositivos.map(d => ({ dispositivo: d.nombre, consumo: d.consumo }))}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="dispositivo" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="consumo" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
