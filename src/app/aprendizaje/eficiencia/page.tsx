"use client";
import React from "react";
import Image from "next/image";

export default function EficienciaPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
          Uso Eficiente de la Energía Eléctrica
        </h1>

        <Image
          src="/learn1.jpg"
          alt="Uso eficiente de la energía"
          width={800}
          height={400}
          className="rounded-xl mb-8 shadow-lg"
        />

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          El uso eficiente de la energía consiste en realizar las mismas
          actividades diarias utilizando la menor cantidad posible de electricidad.
          No se trata de limitar la comodidad, sino de **optimizar el uso de cada
          aparato, adaptar los hábitos de consumo y aprovechar los recursos
          naturales disponibles**. En los hogares de Guatemala, especialmente en
          municipios como Jalpatagua, aplicar medidas de eficiencia puede reducir
          el gasto eléctrico familiar hasta en un 25%.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
          ¿Por Qué Es Importante la Eficiencia Energética?
        </h2>
        <p className="mb-6">
          Cada kilovatio-hora (kWh) que ahorramos representa menos combustibles
          fósiles quemados, menos emisiones contaminantes y una factura más baja.
          En zonas donde el suministro eléctrico puede ser irregular o costoso,
          mejorar la eficiencia contribuye a la **seguridad energética y la
          sostenibilidad ambiental**.
        </p>

        <div className="bg-blue-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            💡 <b>Dato:</b> En Guatemala, un hogar promedio consume entre 100 y
            150 kWh al mes. Una reducción del 10% equivale a un ahorro de hasta
            Q15–Q25 mensuales.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
          Principales Consumidores de Energía en el Hogar
        </h2>
        <p className="mb-4">
          Algunos electrodomésticos demandan más electricidad que otros. Conocer
          su consumo te permitirá administrar mejor su uso.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li><b>Refrigerador:</b> 30–40% del consumo mensual, especialmente si es antiguo o no tiene etiqueta de eficiencia.</li>
          <li><b>Televisores, computadoras y equipos electrónicos:</b> 15–20%.</li>
          <li><b>Lavadora, plancha y microondas:</b> 10–15%.</li>
          <li><b>Iluminación:</b> hasta 10%, dependiendo del tipo de bombillos.</li>
          <li><b>Ventiladores y pequeños electrodomésticos:</b> 5–10%.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
          Consejos Prácticos para Ahorrar Energía
        </h2>
        <ul className="list-disc list-inside mb-8 text-gray-700 dark:text-gray-300 space-y-2">
          <li>Desconecta cargadores y aparatos cuando no los uses, ya que siguen consumiendo energía en modo “stand-by”.</li>
          <li>Utiliza **regletas inteligentes** para cortar la corriente a varios equipos a la vez.</li>
          <li>Aprovecha la luz natural abriendo ventanas y cortinas durante el día.</li>
          <li>Reemplaza bombillos incandescentes por **LED de bajo consumo** (ahorran hasta un 85%).</li>
          <li>Regula el uso del refrigerador: evita abrirlo constantemente y mantén las gomas en buen estado.</li>
          <li>Realiza mantenimiento regular a tus aparatos eléctricos y limpia los filtros de aire o ventilación.</li>
          <li>Plancha y lava en horarios de menor demanda (mañana o noche).</li>
        </ul>

        <div className="bg-green-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            🌱 <b>Ejemplo:</b> Si reemplazas 10 bombillos incandescentes por LED,
            podrías ahorrar hasta <b>100 kWh al año</b>, equivalente a plantar 5 árboles.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
          Tecnología y Eficiencia Energética
        </h2>
        <p className="mb-6">
          Los avances tecnológicos han permitido la creación de aparatos con
          **mayor rendimiento y menor consumo**. Al comprar nuevos equipos, busca
          siempre la **etiqueta de eficiencia energética**, que clasifica los
          aparatos desde “A+++” (más eficiente) hasta “D” (menos eficiente).  
          En Guatemala, el Ministerio de Energía y Minas promueve el uso de
          dispositivos certificados como parte del Programa Nacional de Eficiencia Energética.
        </p>

        <h3 className="text-xl font-semibold text-blue-500 mb-3">
          Comparativa de Consumo Eléctrico
        </h3>
        <table className="w-full text-sm mb-10 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-2 text-left">Aparato</th>
              <th className="p-2 text-left">Consumo (kWh/mes)</th>
              <th className="p-2 text-left">Costo estimado (Q)</th>
              <th className="p-2 text-left">Sugerencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Refrigerador</td>
              <td className="p-2">45</td>
              <td className="p-2">Q 49.5</td>
              <td className="p-2">Usar modelo con tecnología Inverter.</td>
            </tr>
            <tr>
              <td className="p-2">Televisor</td>
              <td className="p-2">20</td>
              <td className="p-2">Q 22.0</td>
              <td className="p-2">Apagar completamente al no usar.</td>
            </tr>
            <tr>
              <td className="p-2">Focos LED (10 uds)</td>
              <td className="p-2">12</td>
              <td className="p-2">Q 13.2</td>
              <td className="p-2">Apagar si no se necesita luz.</td>
            </tr>
            <tr>
              <td className="p-2">Plancha</td>
              <td className="p-2">15</td>
              <td className="p-2">Q 16.5</td>
              <td className="p-2">Planchar varias prendas a la vez.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-600">
          Impacto Ambiental y Económico
        </h2>
        <p className="mb-6">
          Reducir el consumo eléctrico no solo disminuye tu factura, sino que
          también **reduce las emisiones de dióxido de carbono (CO₂)** y la
          necesidad de generar más energía mediante fuentes fósiles.  
          Si cada hogar de Jalpatagua redujera su consumo en un 10%, se evitaría
          emitir más de **120 toneladas de CO₂ al año**, contribuyendo al cuidado
          del planeta.
        </p>

        <p className="italic text-gray-500 dark:text-gray-400">
          “La eficiencia energética comienza con pequeños cambios. Cada acción
          cuenta para construir un futuro más sostenible para todos.”
        </p>
      </div>
    </div>
  );
}
