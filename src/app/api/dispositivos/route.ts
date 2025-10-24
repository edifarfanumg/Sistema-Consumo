// src/app/api/dispositivos/route.ts
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ✅ GET: obtener todos los dispositivos
export async function GET() {
  try {
    const dispositivos = await prisma.dispositivo.findMany({
      include: { usuario: true }, // Incluye datos del usuario relacionado
    });

    return NextResponse.json(dispositivos);
  } catch (error) {
    console.error("Error en GET /api/dispositivos:", error);
    return NextResponse.json(
      { error: "Error al obtener los dispositivos" },
      { status: 500 }
    );
  }
}

// ✅ POST: crear un nuevo dispositivo
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const nuevoDispositivo = await prisma.dispositivo.create({
      data: {
        nombre: body.nombre,
        tipo: body.tipo,
        estado: body.estado,
        consumo: body.consumo,
        usuarioId: body.usuarioId,
      },
    });

    return NextResponse.json(nuevoDispositivo);
  } catch (error) {
    console.error("Error en POST /api/dispositivos:", error);
    return NextResponse.json(
      { error: "Error al crear el dispositivo" },
      { status: 500 }
    );
  }
}
