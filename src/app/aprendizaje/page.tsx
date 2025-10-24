"use client";
import Image from "next/image";
import { useState } from "react";

interface Recurso {
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace: string;
}

export default function AprendizajePage() {
  const recursos: Recurso[] = [
    {
      titulo: "Uso eficiente de la energía eléctrica",
      descripcion:
        "Aprende prácticas simples para reducir tu consumo sin afectar la comodidad de tu hogar. Descubre cómo pequeños cambios generan grandes ahorros.",
      imagen: "/learn1.jpg",
      enlace: "/aprendizaje/eficiencia",
    },
    {
      titulo: "Monitoreo inteligente en tiempo real",
      descripcion:
        "Descubre cómo los sensores y medidores inteligentes te permiten conocer el consumo de tus aparatos, detectar fugas eléctricas y optimizar tu gasto.",
      imagen: "/learn2.png",
      enlace: "/aprendizaje/monitoreo",
    },
    {
      titulo: "Energías renovables en Guatemala",
      descripcion:
        "Conoce las fuentes de energía limpia más utilizadas en el país y cómo puedes aprovechar el sol, el agua y el viento para generar electricidad en tu hogar.",
      imagen: "/learn3.jpg",
      enlace: "/aprendizaje/renovables",
    },
  ];

  const [ahorroEstimado, setAhorroEstimado] = useState<number>(0);
  const [consumoActual, setConsumoActual] = useState<number>(0);

  const calcularAhorro = () => {
    const precioKWh = 0.8; // Precio promedio del kWh en Guatemala
    const ahorro = consumoActual * 0.10 * precioKWh;
    setAhorroEstimado(ahorro);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
        Centro de Aprendizaje Energético
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl leading-relaxed">
        Este centro está diseñado para ayudarte a comprender cómo funciona la energía en tu hogar,
        cómo reducir el consumo sin perder comodidad y cómo aprovechar las tecnologías limpias
        para construir un futuro sostenible. Explora los recursos educativos, calcula tu ahorro
        y aplica los conocimientos en tu vida diaria.
      </p>

      {/* Tarjetas de recursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        {recursos.map((recurso, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            <Image
              src={recurso.imagen}
              alt={recurso.titulo}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">
                {recurso.titulo}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
                {recurso.descripcion}
              </p>
              <a
                href={recurso.enlace}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300"
                aria-label={`Leer más sobre ${recurso.titulo}`}
              >
                Leer más →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Calculadora de ahorro */}
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400 text-center">
          Calcula tu ahorro potencial
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
          Ingresa tu consumo mensual estimado en kilovatios hora (kWh) y descubre cuánto podrías
          ahorrar aplicando medidas de eficiencia energética en tu hogar.
        </p>
        <input
          type="number"
          placeholder="Consumo actual (kWh/mes)"
          value={consumoActual}
          onChange={(e) => setConsumoActual(Number(e.target.value))}
          className="w-full p-3 mb-4 rounded-lg border dark:border-gray-700 dark:bg-gray-900"
        />
        <button
          onClick={calcularAhorro}
          className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
        >
          Calcular ahorro
        </button>

        {ahorroEstimado > 0 && (
          <div className="mt-6 bg-green-50 dark:bg-gray-700 p-4 rounded-xl text-gray-800 dark:text-gray-200">
            <p className="text-lg mb-1">
              Con un ahorro del 10%, podrías reducir tu gasto mensual en{" "}
              <b>Q {ahorroEstimado.toFixed(2)}</b>.
            </p>
            <p className="text-sm italic text-gray-600 dark:text-gray-400">
              Si cada hogar de Jalpatagua hiciera lo mismo, se reduciría el consumo local
              en más de un 8%, beneficiando tanto a la economía familiar como al medio ambiente.
            </p>
          </div>
        )}
      </div>

      {/* Sección educativa adicional */}
      <div className="w-full max-w-4xl bg-blue-100 dark:bg-gray-800 p-6 rounded-2xl shadow text-gray-800 dark:text-gray-300 mt-6">
        <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
          🔍 Sabías que...
        </h3>
        <ul className="list-disc list-inside text-sm space-y-2">
          <li>
            Un hogar guatemalteco promedio consume entre <b>100 y 150 kWh</b> al mes, lo que equivale a
            aproximadamente <b>Q120 a Q180</b> de energía eléctrica.
          </li>
          <li>
            Más del <b>70%</b> de la electricidad del país proviene de fuentes renovables como agua,
            sol y viento.
          </li>
          <li>
            Cambiar tus bombillos tradicionales por <b>LED</b> puede reducir tu consumo de iluminación
            hasta en un <b>85%</b>.
          </li>
          <li>
            Desconectar tus cargadores cuando no se usan evita el consumo fantasma, que puede representar
            hasta un <b>10%</b> de tu factura mensual.
          </li>
        </ul>
      </div>

      {/* Cierre motivacional */}
      <p className="text-center text-gray-500 dark:text-gray-400 italic mt-10 max-w-2xl">
        “Aprender a usar la energía de forma inteligente es el primer paso hacia un hogar sostenible
        y un futuro más limpio para todos.”
      </p>
    </div>
  );
}
