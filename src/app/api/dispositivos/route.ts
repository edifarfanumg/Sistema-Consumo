// src/app/api/dispositivos/route.ts
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dispositivos = await prisma.dispositivo.findMany({
      include: { usuario: true }, // Incluye datos del usuario relacionado
    });
    return NextResponse.json(dispositivos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener dispositivos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
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
    console.error(error);
    return NextResponse.json({ error: "Error al crear dispositivo" }, { status: 500 });
  }
}
