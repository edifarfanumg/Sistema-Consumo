// src/app/api/dispositivos/[id]/route.ts
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const dispositivo = await prisma.dispositivo.findUnique({
      where: { id: Number(params.id) },
      include: { usuario: true },
    });
    return NextResponse.json(dispositivo);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener dispositivo" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const dispositivoActualizado = await prisma.dispositivo.update({
      where: { id: Number(params.id) },
      data: {
        nombre: body.nombre,
        tipo: body.tipo,
        estado: body.estado,
        consumo: body.consumo,
        usuarioId: body.usuarioId,
      },
    });
    return NextResponse.json(dispositivoActualizado);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al actualizar dispositivo" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.dispositivo.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: "Dispositivo eliminado correctamente" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al eliminar dispositivo" }, { status: 500 });
  }
}
