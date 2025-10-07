"use client";
import { useState } from "react";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Carlos Pérez", correo: "carlos@admin.com", rol: "Administrador", estado: "Activo" },
    { id: 2, nombre: "María López", correo: "maria@user.com", rol: "Usuario", estado: "Activo" },
    { id: 3, nombre: "Luis Gómez", correo: "luis@user.com", rol: "Usuario", estado: "Inactivo" },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    rol: "Usuario",
    estado: "Activo",
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const agregarUsuario = () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.correo) return;

    const nuevo = {
      id: usuarios.length + 1,
      ...nuevoUsuario,
    };

    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario({ nombre: "", correo: "", rol: "Usuario", estado: "Activo" });
    setMostrarModal(false);
  };

  const eliminarUsuario = (id: number) => {
    setUsuarios(usuarios.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Usuarios</h1>

      {/* Botón para agregar usuario */}
      <button
        onClick={() => setMostrarModal(true)}
        className="mb-8 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        + Agregar usuario
      </button>

      {/* Tabla de usuarios */}
      <div className="w-full max-w-5xl overflow-x-auto bg-white dark:bg-gray-800 rounded-2xl shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Nombre</th>
              <th className="p-4 font-semibold">Correo</th>
              <th className="p-4 font-semibold">Rol</th>
              <th className="p-4 font-semibold">Estado</th>
              <th className="p-4 font-semibold text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr
                key={u.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4">{u.id}</td>
                <td className="p-4">{u.nombre}</td>
                <td className="p-4">{u.correo}</td>
                <td className="p-4">{u.rol}</td>
                <td
                  className={`p-4 font-semibold ${
                    u.estado === "Activo" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {u.estado}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => eliminarUsuario(u.id)}
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

      {/* Modal para agregar usuario */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Agregar nuevo usuario</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nuevoUsuario.nombre}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={nuevoUsuario.correo}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              />

              <select
                value={nuevoUsuario.rol}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, rol: e.target.value })
                }
                className="p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
              >
                <option value="Usuario">Usuario</option>
                <option value="Administrador">Administrador</option>
              </select>

              <select
                value={nuevoUsuario.estado}
                onChange={(e) =>
                  setNuevoUsuario({ ...nuevoUsuario, estado: e.target.value })
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
                  onClick={agregarUsuario}
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
