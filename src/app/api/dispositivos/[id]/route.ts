// src/app/api/dispositivos/[id]/route.ts
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ✅ GET: obtener dispositivo por ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const dispositivo = await prisma.dispositivo.findUnique({
      where: { id: Number(id) },
      include: { usuario: true },
    });

    return NextResponse.json(dispositivo);
  } catch (error) {
    console.error("Error en GET /api/dispositivos/[id]:", error);
    return NextResponse.json(
      { error: "Error al obtener el dispositivo" },
      { status: 500 }
    );
  }
}

// ✅ PUT: actualizar dispositivo por ID
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    const dispositivoActualizado = await prisma.dispositivo.update({
      where: { id: Number(id) },
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
    console.error("Error en PUT /api/dispositivos/[id]:", error);
    return NextResponse.json(
      { error: "Error al actualizar el dispositivo" },
      { status: 500 }
    );
  }
}

// ✅ DELETE: eliminar dispositivo por ID
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.dispositivo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: "Dispositivo eliminado correctamente",
    });
  } catch (error) {
    console.error("Error en DELETE /api/dispositivos/[id]:", error);
    return NextResponse.json(
      { error: "Error al eliminar el dispositivo" },
      { status: 500 }
    );
  }
}
