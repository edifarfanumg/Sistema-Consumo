"use client";
import { useState } from "react";

export default function DispositivosPage() {
  const [dispositivos, setDispositivos] = useState([
    { id: 1, nombre: "Refrigerador", consumo: 1.2, estado: "Activo" },
    { id: 2, nombre: "Televisor", consumo: 0.3, estado: "Activo" },
    { id: 3, nombre: "Computadora", consumo: 0.8, estado: "Inactivo" },
  ]);

  const [nuevoDispositivo, setNuevoDispositivo] = useState({
    nombre: "",
    consumo: "",
    estado: "Activo",
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarDispositivo = () => {
    if (!nuevoDispositivo.nombre || !nuevoDispositivo.consumo) return;

    const nuevo = {
      id: dispositivos.length + 1,
      ...nuevoDispositivo,
      consumo: parseFloat(nuevoDispositivo.consumo),
    };

    setDispositivos([...dispositivos, nuevo]);
    setNuevoDispositivo({ nombre: "", consumo: "", estado: "Activo" });
    setMostrarModal(false);
  };

  const eliminarDispositivo = (id: number) => {
    setDispositivos(dispositivos.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Dispositivos</h1>

      {/* Botón para agregar */}
      <button
        onClick={() => setMostrarModal(true)}
        className="mb-8 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        + Agregar dispositivo
      </button>

      {/* Tabla de dispositivos */}
      <div className="w-full max-w-4xl overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Nombre</th>
              <th className="p-4 font-semibold">Consumo (kWh)</th>
              <th className="p-4 font-semibold">Estado</th>
              <th className="p-4 font-semibold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dispositivos.map((d) => (
              <tr
                key={d.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4">{d.id}</td>
                <td className="p-4">{d.nombre}</td>
                <td className="p-4">{d.consumo}</td>
                <td
                  className={`p-4 font-semibold ${
                    d.estado === "Activo" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {d.estado}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => eliminarDispositivo(d.id)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para agregar dispositivo */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Agregar nuevo dispositivo</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre del dispositivo"
                value={nuevoDispositivo.nombre}
                onChange={(e) =>
                  setNuevoDispositivo({ ...nuevoDispositivo, nombre: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />

              <input
                type="number"
                placeholder="Consumo (kWh)"
                value={nuevoDispositivo.consumo}
                onChange={(e) =>
                  setNuevoDispositivo({ ...nuevoDispositivo, consumo: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />

              <select
                value={nuevoDispositivo.estado}
                onChange={(e) =>
                  setNuevoDispositivo({ ...nuevoDispositivo, estado: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setMostrarModal(false)}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  onClick={agregarDispositivo}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Sistema de Monitoreo Energético - Jalpatagua, Jutiapa
      </footer>
    </div>
  );
}

