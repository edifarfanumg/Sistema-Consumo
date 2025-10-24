// src/app/api/usuarios/route.ts
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ✅ Obtener todos los usuarios
export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();

    // Garantiza que siempre retorne un array, incluso si no hay datos
    return NextResponse.json(usuarios ?? []);
  } catch (error) {
    console.error("Error en GET /api/usuarios:", error);
    return NextResponse.json([], { status: 500 });
  }
}

// ✅ Crear un nuevo usuario
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const nuevoUsuario = await prisma.usuario.create({ data });

    return NextResponse.json(nuevoUsuario);
  } catch (error) {
    console.error("Error en POST /api/usuarios:", error);
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 500 }
    );
  }
}
