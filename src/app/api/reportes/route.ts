import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

// ✅ Obtener todos los reportes (para uso futuro)
export async function GET() {
  try {
    const reportes = await prisma.reporte.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(reportes);
  } catch (error) {
    console.error("Error al obtener reportes:", error);
    return NextResponse.json(
      { error: "Error al obtener los reportes" },
      { status: 500 }
    );
  }
}

// ✅ Crear nuevo reporte
export async function POST(req: NextRequest) {
  try {
    const { nombre, correo, mensaje } = await req.json();

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const nuevoReporte = await prisma.reporte.create({
      data: { nombre, correo, mensaje },
    });

    return NextResponse.json({
      mensaje: "Reporte guardado correctamente",
      reporte: nuevoReporte,
    });
  } catch (error) {
    console.error("Error al guardar reporte:", error);
    return NextResponse.json(
      { error: "Error al guardar el reporte" },
      { status: 500 }
    );
  }
}
