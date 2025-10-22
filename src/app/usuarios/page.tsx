"use client";
import { useState, useEffect } from "react";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({
    nombre: "",
    correo: "",
    rol: "Usuario",
    estado: "Activo",
  });
  const [editarUsuarioId, setEditarUsuarioId] = useState<number | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  // 🔹 Obtener usuarios
  const obtenerUsuarios = async () => {
    try {
      const res = await fetch("/api/usuarios");
      const data = await res.json();
      setUsuarios(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      setUsuarios([]);
    }
  };

  // 🔹 Crear usuario
  const agregarUsuario = async () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.correo) return;

    try {
      const res = await fetch("/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });
      const usuarioCreado = await res.json();
      setUsuarios([...usuarios, usuarioCreado]);
      setNuevoUsuario({ nombre: "", correo: "", rol: "Usuario", estado: "Activo" });
      setMostrarModal(false);
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  // 🔹 Actualizar usuario
  const actualizarUsuario = async () => {
    if (editarUsuarioId === null) return;

    try {
      const res = await fetch(`/api/usuarios/${editarUsuarioId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
      });
      const usuarioActualizado = await res.json();
      setUsuarios(
        usuarios.map((u) => (u.id === editarUsuarioId ? usuarioActualizado : u))
      );
      setEditarUsuarioId(null);
      setNuevoUsuario({ nombre: "", correo: "", rol: "Usuario", estado: "Activo" });
      setMostrarModal(false);
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  // 🔹 Eliminar usuario
  const eliminarUsuario = async (id: number) => {
    try {
      await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
      setUsuarios(usuarios.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  // 🔹 Abrir modal para edición
  const abrirModalEditar = (usuario: any) => {
    setEditarUsuarioId(usuario.id);
    setNuevoUsuario({
      nombre: usuario.nombre,
      correo: usuario.correo,
      rol: usuario.rol,
      estado: usuario.estado,
    });
    setMostrarModal(true);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Gestión de Usuarios</h1>

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
                <td className="p-4 text-center flex justify-center gap-2">
                  <button
                    onClick={() => abrirModalEditar(u)}
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Editar
                  </button>
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

      {/* Modal para agregar/editar usuario */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {editarUsuarioId ? "Editar usuario" : "Agregar nuevo usuario"}
            </h2>
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
                  onClick={() => {
                    setMostrarModal(false);
                    setEditarUsuarioId(null);
                    setNuevoUsuario({
                      nombre: "",
                      correo: "",
                      rol: "Usuario",
                      estado: "Activo",
                    });
                  }}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  onClick={editarUsuarioId ? actualizarUsuario : agregarUsuario}
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
