import { Appointments, Patients, Cases, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Appointments).values([
		{_id: 1, patientId: 1, appointmentInfo: '2024-06-31/2024-07-01' },
		{_id: 2, patientId: 2, appointmentInfo: '2024-06-31/2024-07-01' },
	  ]);
	
	await db.insert(Patients).values([
		{_id: 1, name: 'Ricardo', lastName: 'González', phone: '', notes: '', state: 'Activo' },
		{_id: 2, name: 'Paola', lastName: 'Reyes', phone: '', notes: '', state: 'Lastimado'},
	  ]);
	  
	  await db.insert(Cases).values([
		{_id: 1, patientId: 2, title: 'Ay Paola', description: 'El paciente presenta fatiga muscular' },
		{_id: 2, patientId: 2, title: 'Ay Paola', description: 'La inflamación se ha reducido'},
	  ]);
}
