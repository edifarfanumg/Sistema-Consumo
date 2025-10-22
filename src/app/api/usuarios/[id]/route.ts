import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// Actualizar usuario (PUT)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const data = await request.json();
    const { nombre, correo, rol } = data;

    const usuarioActualizado = await prisma.usuario.update({
      where: { id: Number(params.id) },
      data: { nombre, correo, rol },
    });

    return NextResponse.json(usuarioActualizado);
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return NextResponse.json({ error: "No se pudo actualizar el usuario" }, { status: 500 });
  }
}

//  Eliminar usuario (DELETE)
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.usuario.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return NextResponse.json({ error: "No se pudo eliminar el usuario" }, { status: 500 });
  }
}
