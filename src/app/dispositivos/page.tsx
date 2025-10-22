"use client";
import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  nombre: string;
};

type Dispositivo = {
  id: number;
  nombre: string;
  tipo: string;
  estado: string;
  consumo: number;
  usuarioId: number;
  usuario: Usuario;
};

export default function DispositivosPage() {
  const [dispositivos, setDispositivos] = useState<Dispositivo[]>([]);
  const [nuevoDispositivo, setNuevoDispositivo] = useState({
    nombre: "",
    tipo: "",
    estado: "Activo",
    consumo: 0,
    usuarioId: 1,
  });
  const [mostrarModal, setMostrarModal] = useState(false);
  const [editarDispositivoId, setEditarDispositivoId] = useState<number | null>(null);

  const obtenerDispositivos = async () => {
    const res = await fetch("/api/dispositivos");
    const data = await res.json();
    setDispositivos(Array.isArray(data) ? data : []);
  };

  const guardarDispositivo = async () => {
    if (!nuevoDispositivo.nombre) return;

    if (editarDispositivoId) {
      // Editar
      await fetch(`/api/dispositivos/${editarDispositivoId}`, {
        method: "PUT",
        body: JSON.stringify(nuevoDispositivo),
      });
    } else {
      // Crear
      await fetch("/api/dispositivos", {
        method: "POST",
        body: JSON.stringify(nuevoDispositivo),
      });
    }

    setNuevoDispositivo({ nombre: "", tipo: "", estado: "Activo", consumo: 0, usuarioId: 1 });
    setEditarDispositivoId(null);
    setMostrarModal(false);
    obtenerDispositivos();
  };

  const eliminarDispositivo = async (id: number) => {
    await fetch(`/api/dispositivos/${id}`, { method: "DELETE" });
    obtenerDispositivos();
  };

  const editarDispositivo = (dispositivo: Dispositivo) => {
    setNuevoDispositivo({
      nombre: dispositivo.nombre,
      tipo: dispositivo.tipo,
      estado: dispositivo.estado,
      consumo: dispositivo.consumo,
      usuarioId: dispositivo.usuarioId,
    });
    setEditarDispositivoId(dispositivo.id);
    setMostrarModal(true);
  };

  useEffect(() => {
    obtenerDispositivos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Dispositivos</h1>

      <button
        onClick={() => setMostrarModal(true)}
        className="mb-8 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        {editarDispositivoId ? "Editar Dispositivo" : "+ Agregar Dispositivo"}
      </button>

      <div className="w-full max-w-5xl overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Nombre</th>
              <th className="p-4 font-semibold">Tipo</th>
              <th className="p-4 font-semibold">Estado</th>
              <th className="p-4 font-semibold">Consumo</th>
              <th className="p-4 font-semibold">Usuario</th>
              <th className="p-4 font-semibold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {dispositivos.map((d) => (
              <tr key={d.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <td className="p-4">{d.id}</td>
                <td className="p-4">{d.nombre}</td>
                <td className="p-4">{d.tipo}</td>
                <td className="p-4">{d.estado}</td>
                <td className="p-4">{d.consumo} kWh</td>
                <td className="p-4">{d.usuario?.nombre}</td>
                <td className="p-4 text-center flex justify-center gap-2">
                  <button
                    onClick={() => editarDispositivo(d)}
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Editar
                  </button>
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

      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {editarDispositivoId ? "Editar dispositivo" : "Agregar nuevo dispositivo"}
            </h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nuevoDispositivo.nombre}
                onChange={(e) => setNuevoDispositivo({ ...nuevoDispositivo, nombre: e.target.value })}
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />
              <input
                type="text"
                placeholder="Tipo"
                value={nuevoDispositivo.tipo}
                onChange={(e) => setNuevoDispositivo({ ...nuevoDispositivo, tipo: e.target.value })}
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />
              <input
                type="number"
                placeholder="Consumo (kWh)"
                value={nuevoDispositivo.consumo}
                onChange={(e) => setNuevoDispositivo({ ...nuevoDispositivo, consumo: Number(e.target.value) })}
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />
              <select
                value={nuevoDispositivo.estado}
                onChange={(e) => setNuevoDispositivo({ ...nuevoDispositivo, estado: e.target.value })}
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    setMostrarModal(false);
                    setEditarDispositivoId(null);
                  }}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  onClick={guardarDispositivo}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
