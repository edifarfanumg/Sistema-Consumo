import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// ✅ Obtener todos los usuarios
export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios ?? []);
  } catch (error) {
    console.error("Error en GET /api/usuarios:", error);
    return NextResponse.json([], { status: 500 });
  }
}

// ✅ Crear nuevo usuario
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { nombre, correo, password, rol, estado } = data;

    if (!nombre || !correo || !password) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const existente = await prisma.usuario.findUnique({
      where: { correo },
    });
    if (existente) {
      return NextResponse.json(
        { error: "El correo ya está registrado" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await prisma.usuario.create({
      data: { nombre, correo, password: hashedPassword, rol, estado },
    });

    return NextResponse.json(nuevoUsuario);
  } catch (error) {
    console.error("Error en POST /api/usuarios:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}
