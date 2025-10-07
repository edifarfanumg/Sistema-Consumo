"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const protegerRuta = (rolPermitido: string) => {
  const router = useRouter();

  useEffect(() => {
    const rol = localStorage.getItem("rol");
    if (!rol || rol !== rolPermitido) {
      router.push("/login");
    }
  }, [router]);
};
