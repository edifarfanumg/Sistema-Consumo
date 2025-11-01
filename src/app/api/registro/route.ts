import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { nombre, correo, password, rol } = await req.json();

    const existe = await prisma.usuario.findUnique({ where: { correo } });
    if (existe) {
      return NextResponse.json({ error: "El usuario ya existe." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const usuario = await prisma.usuario.create({
      data: { nombre, correo, password: hashedPassword, rol, estado: "activo" },
    });

    return NextResponse.json(usuario, { status: 201 });
  } catch (error) {
    console.error("Error al registrar:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
