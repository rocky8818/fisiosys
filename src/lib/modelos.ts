export interface Patient {
  _id?: number;
  name: string;
  lastName: string;
  phone: string;
  notes: string;
  state: string;
}

export interface Case {
  _id?: number;
  patientId: number;
  title: string;
  description: string;
}