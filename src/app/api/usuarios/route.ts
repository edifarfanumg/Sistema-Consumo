// src/app/api/usuarios/route.ts
import prisma from "@/lib/db"; // Ajusta la ruta si tu db.ts está en otra carpeta
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usuarios = await prisma.usuario.findMany(); // Consulta todos los usuarios
    return NextResponse.json(usuarios); // Devuelve los datos en JSON
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al obtener los usuarios" }, { status: 500 });
  }
}
