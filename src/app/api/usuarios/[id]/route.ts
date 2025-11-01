import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// ✅ Actualizar usuario
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const data = await request.json();
    const { nombre, correo, rol, estado, password } = data;

    const updateData: any = { nombre, correo, rol, estado };

    if (password && password.trim() !== "") {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const usuarioActualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: updateData,
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

// ✅ Eliminar usuario
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await prisma.usuario.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error en DELETE /api/usuarios/[id]:", error);
    return NextResponse.json(
      { error: "No se pudo eliminar el usuario" },
      { status: 500 }
    );
  }
}
