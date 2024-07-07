import type { APIContext } from "astro";
import { Patients, db } from "astro:db";
//import { generateId } from "lucia";

import type { Patient } from '../../../lib/modelos'; 



export async function POST(context: APIContext): Promise<Response> {
    const formData = await context.request.formData();
    const nombre = formData.get("nombre") as string | undefined;
    const apellido = formData.get("apellido") as string | undefined;

    function normalizeString(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, '');
    }


    const normalizedUrl = normalizeString(nombre || '');


    const nuevoPaciente: Patient = {
        name: nombre || '',
        lastName: apellido || '',
    };

    await db.insert(Patients).values([nuevoPaciente]);

    return context.redirect("/admin/pacientes");
}