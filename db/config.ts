import { column, defineDb, defineTable } from 'astro:db';

/*
const Users = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    username: column.text(),
    password: column.text(),
  }
})

const Sessions = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    username: column.text(),
    password: column.text(),
  }
})
*/
const Patients = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    name: column.text(),
    lastName: column.text(),
    phone: column.text(),
    notes: column.text(),
    state: column.text(),
  }
})

const Appointments = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    //userId: column.number({ references: () => Users.columns._id }),
    patientId: column.number(),
    //userId: column.number(),
    appointmentInfo: column.text(),
  }
})
const Cases = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    //userId: column.number({ references: () => Users.columns._id }),
    patientId: column.number({ references: () => Patients.columns._id }),
    title: column.text(),
    description: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Patients,
    //Users,
    Cases,
    Appointments,
  }
});
