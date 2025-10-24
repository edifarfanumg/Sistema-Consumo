"use client";
import React from "react";
import Image from "next/image";

export default function MonitoreoPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 dark:text-blue-400">
          Monitoreo Inteligente en Tiempo Real
        </h1>

        <Image
          src="/learn2.png"
          alt="Monitoreo energético inteligente"
          width={800}
          height={400}
          className="rounded-xl mb-8 shadow-lg"
        />

        <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
          El monitoreo energético es una herramienta moderna que te permite conocer **en tiempo real cuánta energía consumen tus dispositivos eléctricos**. Gracias a los sensores y medidores inteligentes, puedes observar el comportamiento del consumo, identificar hábitos ineficientes y tomar decisiones informadas para reducir el gasto eléctrico en tu hogar.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          ¿Cómo Funciona el Monitoreo?
        </h2>
        <p className="mb-6">
          El sistema de monitoreo emplea un **medidor inteligente** conectado al panel eléctrico de la vivienda. Este dispositivo registra el flujo de corriente y tensión de cada circuito, y envía la información al **sistema web**. Desde la plataforma, los usuarios pueden visualizar:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Gráficas de consumo diario, semanal y mensual.</li>
          <li>Alertas automáticas cuando un aparato excede su consumo normal.</li>
          <li>Comparaciones entre diferentes periodos o habitaciones.</li>
          <li>Estimaciones de costo eléctrico y ahorro potencial.</li>
        </ul>

        <div className="bg-green-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            ⚙️ <b>Ejemplo:</b> Si una plancha consume 1.2 kWh por uso y notas un aumento inusual,
            el sistema puede avisarte que ha sido utilizada más tiempo o con fallas eléctricas.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Tipos de Medición y Tecnología
        </h2>
        <p className="mb-6">
          Los medidores inteligentes modernos usan tecnologías como **IoT (Internet de las Cosas)**, **Wi-Fi o LoRaWAN** para enviar los datos al servidor en la nube. Desde allí, la información se procesa y se muestra en una interfaz gráfica intuitiva.  
          Además, algunos sistemas permiten controlar equipos a distancia, encender o apagar aparatos, y definir horarios automáticos de uso.
        </p>

        <h3 className="text-xl font-semibold text-blue-500 mb-3">
          Ventajas del Monitoreo Inteligente
        </h3>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li><b>Transparencia:</b> El usuario sabe en todo momento cuánta energía está usando.</li>
          <li><b>Ahorro:</b> Detecta desperdicios y reduce el consumo hasta un 30%.</li>
          <li><b>Seguridad:</b> Previene sobrecalentamientos y sobrecargas.</li>
          <li><b>Educación energética:</b> Motiva cambios de hábitos positivos en la familia.</li>
          <li><b>Planificación:</b> Permite establecer metas de consumo mensual y recibir reportes.</li>
        </ul>

        <div className="bg-blue-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            📊 <b>Dato:</b> En Guatemala, un hogar promedio puede ahorrar entre <b>Q30 y Q50 al mes</b> aplicando control inteligente del consumo.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Resultados Medibles y Beneficios Reales
        </h2>
        <p className="mb-6">
          Los datos recolectados permiten **evaluar el rendimiento energético del hogar**. Al detectar fugas eléctricas, aparatos defectuosos o mal uso, se pueden aplicar soluciones efectivas sin necesidad de instalaciones complejas.
        </p>

        <table className="w-full text-sm mb-10 border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th className="p-2 text-left">Acción</th>
              <th className="p-2 text-left">Promedio de Ahorro (%)</th>
              <th className="p-2 text-left">Beneficio Adicional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Identificación de fugas eléctricas</td>
              <td className="p-2">10–15%</td>
              <td className="p-2">Menor riesgo de cortocircuitos.</td>
            </tr>
            <tr>
              <td className="p-2">Control de horarios de consumo</td>
              <td className="p-2">5–10%</td>
              <td className="p-2">Mejor distribución del uso diario.</td>
            </tr>
            <tr>
              <td className="p-2">Cambio de hábitos familiares</td>
              <td className="p-2">20–30%</td>
              <td className="p-2">Mayor conciencia energética.</td>
            </tr>
            <tr>
              <td className="p-2">Uso de alertas automáticas</td>
              <td className="p-2">5–8%</td>
              <td className="p-2">Prevención de sobreconsumo.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Aplicaciones del Monitoreo en Guatemala
        </h2>
        <p className="mb-6">
          Diversas comunidades del país han comenzado a implementar sistemas de monitoreo
          doméstico y comunitario. En Jalpatagua, por ejemplo, estos sistemas ayudan a las
          familias a **controlar el gasto energético y detectar variaciones en la red eléctrica**,
          mejorando la estabilidad del servicio.  
          Además, en sectores rurales, el monitoreo apoya la integración de energías renovables,
          como paneles solares, permitiendo medir cuánta energía se genera y cuánta se consume.
        </p>

        <div className="bg-yellow-100 dark:bg-gray-800 p-5 rounded-xl mb-8 shadow-md">
          <p className="text-gray-800 dark:text-gray-300">
            🌎 <b>Impacto ambiental:</b> Reducir el consumo en 1 kWh equivale a evitar la emisión
            de 0.5 kg de CO₂. Si una comunidad de 500 hogares reduce su consumo un 10%, puede
            evitar más de 30 toneladas de CO₂ al año.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Futuro del Monitoreo Energético
        </h2>
        <p className="mb-6">
          El futuro apunta hacia hogares completamente **inteligentes**, donde el monitoreo no
          solo registre el consumo, sino que también **aprenda los patrones del usuario** y
          realice ajustes automáticos para maximizar la eficiencia. Con la integración de
          inteligencia artificial (IA) y análisis predictivo, el sistema podrá sugerir al
          usuario cuándo utilizar ciertos aparatos para aprovechar mejor la energía disponible.
        </p>

        <p className="italic text-gray-500 dark:text-gray-400">
          El monitoreo inteligente no es un lujo, es una inversión en conocimiento, ahorro y
          sostenibilidad para el hogar del futuro.
        </p>
      </div>
    </div>
  );
}
