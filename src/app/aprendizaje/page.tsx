import Image from "next/image";

export default function AprendizajePage() {
  const recursos = [
    {
      titulo: "Uso eficiente de la energía eléctrica",
      descripcion: "Aprende prácticas simples para reducir tu consumo sin afectar el confort de tu hogar.",
      imagen: "/learn1.jpg",
      enlace: "#",
    },
    {
      titulo: "Monitoreo inteligente en tiempo real",
      descripcion: "Descubre cómo los sensores y medidores inteligentes ayudan a optimizar el uso de energía.",
      imagen: "/learn2.jpg",
      enlace: "#",
    },
    {
      titulo: "Energías renovables en Guatemala",
      descripcion: "Conoce los avances y proyectos de energía solar y eólica en Jalpatagua y el país.",
      imagen: "/learn3.jpg",
      enlace: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Centro de Aprendizaje Energético</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
        Explora recursos educativos sobre eficiencia energética, tecnologías limpias y buenas prácticas para el ahorro en el hogar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {recursos.map((recurso, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <Image
              src={recurso.imagen}
              alt={recurso.titulo}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{recurso.titulo}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {recurso.descripcion}
              </p>
              <a
                href={recurso.enlace}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Leer más →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
