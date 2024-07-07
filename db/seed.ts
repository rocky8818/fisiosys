import { Appointments, Patients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Appointments).values([
		{_id: 1, userId: 1, clientId: 1, appointmentInfo: '2024-06-31/2024-07-01' },
		{_id: 2, userId: 2, clientId: 2, appointmentInfo: '2024-06-31/2024-07-01' },
	  ]);
	
	await db.insert(Patients).values([
		{_id: 1, name: 'Ricardo', lastName: 'González', },
		{_id: 2, name: 'Paola', lastName: 'Reyes', },
	  ]);
}
