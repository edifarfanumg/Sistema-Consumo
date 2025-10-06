
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* Encabezado */}
      <header className="w-full flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Image src="/energy.jpg" alt="Energy logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">
            Sistema de Monitoreo Energético
          </h1>
        </div>
        <button
          onClick={() => handleNavigation("/login")}
          className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Bienvenido al Panel Principal
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Botón Dashboard */}
          <button
            onClick={() => handleNavigation("/dashboard")}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/dashboard.png" alt="Dashboard" width={48} height={48} />
            <span className="mt-4 font-medium text-lg">Dashboard</span>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Visualiza tu consumo energético en tiempo real.
            </p>
          </button>

          {/* Botón Dispositivos */}
          <button
            onClick={() => handleNavigation("/dispositivos")}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/divices.jpg" alt="Dispositivos" width={48} height={48} />
            <span className="mt-4 font-medium text-lg">Dispositivos</span>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Administra los equipos eléctricos conectados.
            </p>
          </button>

          {/* Botón Aprendizaje */}
          <button
            onClick={() => handleNavigation("/aprendizaje")}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/learn.png" alt="Aprendizaje" width={48} height={48} />
            <span className="mt-4 font-medium text-lg">Aprendizaje</span>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Aprende sobre eficiencia energética y buenas prácticas.
            </p>
          </button>

          {/* Botón Contacto y Soporte */}
          <button
            onClick={() => handleNavigation("/soporte")}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col items-center"
          >
            <Image src="/sopport.png" alt="Soporte" width={48} height={48} />
            <span className="mt-4 font-medium text-lg">Contacto y Soporte</span>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Obtén asistencia o envía comentarios al equipo técnico.
            </p>
          </button>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="mt-12 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Sistema de Monitoreo Energético - Jalpatagua, Jutiapa
      </footer>
    </div>
  );
}

