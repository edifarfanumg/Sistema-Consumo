// src/lib/db.ts
import { PrismaClient } from "../generated/prisma"; // ruta relativa correcta

const prisma = new PrismaClient();
export default prisma;
