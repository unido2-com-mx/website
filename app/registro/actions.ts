"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { getMongoClient, getMongoDatabaseName } from "@/lib/mongodb";

const registroSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(120, "El nombre es demasiado largo"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Ingresa un correo valido")
    .max(160, "El correo es demasiado largo"),
});

export async function registerForUpdates(formData: FormData) {
  const parsed = registroSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
  });

  if (!parsed.success) {
    redirect("/registro?error=1");
  }

  try {
    const client = await getMongoClient();
    const db = client.db(getMongoDatabaseName());

    await db.collection("mentor-salud-pre-registro").insertOne({
      name: parsed.data.name,
      email: parsed.data.email,
      createdAt: new Date(),
    });
  } catch {
    redirect("/registro?error=1");
  }

  redirect("/registro/confirmacion");
}
