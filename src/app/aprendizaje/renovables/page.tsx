"use client";
import React from "react";
import Image from "next/image";

export default function RenovablesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
          Energías Renovables en Guatemala
        </h1>

        <Image
          src="/learn3.jpg"
          alt="Energías renovables en Guatemala"
          width={800}
          height={400}
          className="rounded-xl mb-8 shadow-lg"
        />

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Guatemala posee una **enorme riqueza natural** que permite aprovechar
          fuentes de energía limpia como el **sol, el viento, el agua y la biomasa**.
          Estas fuentes son renovables porque se regeneran de manera natural y
          contribuyen a reducir la dependencia de combustibles fósiles, a la vez
          que promueven el desarrollo sostenible de las comunidades.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          ¿Qué Son las Energías Renovables?
        </h2>
        <p className="mb-6">
          Se denominan renovables aquellas fuentes que provienen de recursos
          naturales inagotables o de regeneración continua. A diferencia de los
          combustibles fósiles, no emiten gases contaminantes durante su uso y
          **disminuyen el impacto ambiental del sistema eléctrico**.
        </p>

        <div className="bg-green-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            🌍 <b>Dato:</b> Según el Ministerio de Energía y Minas (MEM), en 2024
            más del <b>70% de la electricidad generada en Guatemala</b> provino de
            fuentes renovables, principalmente hidroeléctricas y solares.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Energía Solar: La Fuente Más Accesible
        </h2>
        <p className="mb-6">
          Guatemala cuenta con una radiación solar promedio de **5 a 6 kWh/m² por día**,
          lo que la convierte en un país ideal para instalar sistemas fotovoltaicos.
          En Jalpatagua y otras regiones de Jutiapa, la luz solar es abundante
          durante todo el año, permitiendo generar electricidad limpia para uso
          doméstico, agrícola o comunitario.
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Un sistema de 1 kW puede generar hasta 150 kWh/mes.</li>
          <li>Paneles solares duran entre 20 y 25 años con mantenimiento mínimo.</li>
          <li>La inversión inicial se recupera en 4 a 6 años gracias al ahorro.</li>
        </ul>

        <div className="bg-yellow-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            ☀️ <b>Ejemplo:</b> Una familia que instala 4 paneles solares puede cubrir
            el 60% de su consumo mensual y ahorrar hasta <b>Q150 al mes</b>.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Energía Eólica: El Poder del Viento
        </h2>
        <p className="mb-6">
          La energía eólica utiliza turbinas para transformar la fuerza del viento
          en electricidad. En regiones con vientos constantes como Chiquimulilla o
          la costa sur del país, esta fuente puede complementar el suministro solar.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Genera electricidad sin emitir gases contaminantes.</li>
          <li>Ideal para zonas rurales con suficiente velocidad de viento.</li>
          <li>Requiere espacio y un mantenimiento moderado.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Energía Hidráulica y Microhidroeléctrica
        </h2>
        <p className="mb-6">
          La energía hidráulica aprovecha el movimiento del agua para generar
          electricidad. En comunidades rurales de Guatemala se instalan **microturbinas**
          capaces de alimentar varias viviendas con un impacto ambiental mínimo.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Ideal en zonas con ríos o corrientes constantes.</li>
          <li>Puede operar de forma continua durante todo el año.</li>
          <li>Requiere poco mantenimiento y produce energía estable.</li>
        </ul>

        <div className="bg-blue-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            💧 <b>Ejemplo:</b> Una microhidroeléctrica de 5 kW puede abastecer hasta
            20 hogares rurales con energía limpia y constante.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Energía de Biomasa
        </h2>
        <p className="mb-6">
          La biomasa convierte residuos orgánicos —como cáscaras de café, bagazo de caña
          o desechos agrícolas— en energía útil mediante combustión o biogás.
          En Guatemala, esta fuente es muy aprovechada en ingenios y fincas agrícolas,
          pero también puede usarse a pequeña escala en hogares rurales.
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Reduce la cantidad de desechos orgánicos.</li>
          <li>Puede generar gas combustible o electricidad.</li>
          <li>Promueve la economía circular y la autosuficiencia local.</li>
        </ul>

        <h3 className="text-xl font-semibold text-blue-500 mb-3">
          Comparativa de Fuentes Renovables
        </h3>
        <table className="w-full text-sm mb-10 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-2 text-left">Fuente</th>
              <th className="p-2 text-left">Costo inicial</th>
              <th className="p-2 text-left">Mantenimiento</th>
              <th className="p-2 text-left">Ahorro estimado</th>
              <th className="p-2 text-left">Duración promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Solar</td>
              <td className="p-2">Medio</td>
              <td className="p-2">Bajo</td>
              <td className="p-2">Hasta 80%</td>
              <td className="p-2">25 años</td>
            </tr>
            <tr>
              <td className="p-2">Eólica</td>
              <td className="p-2">Alto</td>
              <td className="p-2">Medio</td>
              <td className="p-2">60–70%</td>
              <td className="p-2">20 años</td>
            </tr>
            <tr>
              <td className="p-2">Hidráulica</td>
              <td className="p-2">Medio</td>
              <td className="p-2">Bajo</td>
              <td className="p-2">50–60%</td>
              <td className="p-2">30 años</td>
            </tr>
            <tr>
              <td className="p-2">Biomasa</td>
              <td className="p-2">Bajo</td>
              <td className="p-2">Bajo</td>
              <td className="p-2">30–40%</td>
              <td className="p-2">15 años</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Beneficios del Uso de Energías Renovables
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Reducción del costo de electricidad a mediano plazo.</li>
          <li>Menor dependencia de combustibles fósiles importados.</li>
          <li>Protección del medio ambiente y reducción de CO₂.</li>
          <li>Creación de empleos locales en instalación y mantenimiento.</li>
          <li>Impulso de comunidades autosuficientes y sostenibles.</li>
        </ul>

        <div className="bg-green-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            🌱 <b>Impacto:</b> Un sistema solar de 2 kW evita la emisión de más de
            <b> 800 kg de CO₂ al año</b>, equivalente a plantar 40 árboles o evitar
            recorrer 2,500 km en automóvil.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Futuro de las Energías Renovables en Guatemala
        </h2>
        <p className="mb-6">
          Guatemala tiene el potencial de convertirse en un referente regional en
          energía limpia. La combinación de radiación solar, recursos hídricos y
          desarrollo tecnológico favorece la expansión de proyectos renovables
          a nivel doméstico y comunitario.  
          Los hogares que integren monitoreo energético y fuentes renovables serán
          parte de una **nueva generación de viviendas inteligentes y sostenibles**.
        </p>

        <p className="italic text-gray-500 dark:text-gray-400">
          “Invertir en energías renovables es invertir en el futuro de nuestras
          familias, en el bienestar de la comunidad y en la salud del planeta.”
        </p>
      </div>
    </div>
  );
}
