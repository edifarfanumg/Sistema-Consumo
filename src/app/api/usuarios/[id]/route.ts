// src/app/api/usuarios/[id]/route.ts
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ✅ Actualizar usuario (PUT)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await request.json();
    const { nombre, correo, rol } = data;

    const usuarioActualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { nombre, correo, rol },
    });

    return NextResponse.json(usuarioActualizado);
  } catch (error) {
    console.error("Error en PUT /api/usuarios/[id]:", error);
    return NextResponse.json(
      { error: "No se pudo actualizar el usuario" },
      { status: 500 }
    );
  }
}

// ✅ Eliminar usuario (DELETE)
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.usuario.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      message: "Usuario eliminado correctamente",
    });
  } catch (error) {
    console.error("Error en DELETE /api/usuarios/[id]:", error);
    return NextResponse.json(
      { error: "No se pudo eliminar el usuario" },
      { status: 500 }
    );
  }
}
