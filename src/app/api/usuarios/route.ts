import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany();
    return NextResponse.json(usuarios ?? []); // 👈 garantiza que devuelva un array
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return NextResponse.json([], { status: 500 }); // 👈 devuelve un array vacío en caso de error
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const nuevoUsuario = await prisma.usuario.create({ data });
    return NextResponse.json(nuevoUsuario);
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 });
  }
}
