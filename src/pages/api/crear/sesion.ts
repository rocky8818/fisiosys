import type { APIContext } from "astro";
import { Cases, db } from "astro:db";
//import { generateId } from "lucia";

import type { Case } from '../../../lib/modelos'; 



export async function POST(context: APIContext): Promise<Response> {
    const formData = await context.request.formData();
    const paciente = formData.get("paciente") as string | undefined;
    const titulo = formData.get("titulo") as string | undefined;
    const descripcion = formData.get("descripcion") as string | undefined;

    function normalizeString(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '');
    }

    console.log(paciente)

    const normalizedUrl = normalizeString(titulo || '');


    const nuevaSesion: Case = {
        patientId: Number(paciente) || 1,
        title: titulo || '',
        description: descripcion || '',
    };

    await db.insert(Cases).values([nuevaSesion]);

    return context.redirect("/admin/sesiones");
}