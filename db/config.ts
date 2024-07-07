import { number } from 'astro/zod';
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
  }
})

const Appointments = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    //userId: column.number({ references: () => Users.columns._id }),
    //clientId: column.number({ references: () => Clients.columns._id }),
    userId: column.number(),
    clientId: column.number(),
    appointmentInfo: column.text(),
  }
})
/*
const Cases = defineTable({
  columns: {
    _id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => Users.columns._id }),
    clientId: column.number({ references: () => Clients.columns._id }),
    description: column.text(),
  }
})
*/
// https://astro.build/db/config
export default defineDb({
  tables: {
    Patients,
    /*Users,
    Cases,*/
    Appointments,
  }
});
