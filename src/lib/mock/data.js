export const data = [
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Uriburu 429, 4b",
    description2: "1643 Beccar",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Agendar turno",
    secondaryBtnTxt: "Ver perfil",
  },
];

export const plans = [
  {
    id: 1,
    title: "Plan Básico",
    subtitle: "$999",
    description: "Incluye 1 agenda digital para tu consultorio",
    description2: "3 meses de prueba gratis",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Suscribirse",
  },
  {
    id: 2,
    title: "Plan Intermedio",
    subtitle: "$1.999",
    description: "Incluye 5 agendas digitales para tu consultorio",
    description2: "3 meses de prueba gratis",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Suscribirse",
  },
  {
    id: 3,
    title: "Plan Intermedio",
    subtitle: "$2.999",
    description: "Incluye 10 agendas digitales para tu consultorio",
    description2: "3 meses de prueba gratis",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Suscribirse",
  },
];

export const user = {
  id: 1,
  name: "Benjamin",
  surname: "Barreiro",
  email: "barreirobenjamin@gmail.com",
  healthInsurance: "osde",
};

export const appointments = [
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Modificar turno",
    dangerBtnTxt: "Cancelar turno",
  },
];

export const historicAppointments = [
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
  {
    id: 1,
    title: "Doctor Benjamin Pedro Barreiro",
    subtitle: "Dentista",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    primaryBtnTxt: "Repetir",
  },
];

export const patients = [
  {
    id: 1,
    title: "Benjamin Barreiro",
    subtitle: "OSDE",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
    dangerBtnTxt: "Cancelar turno",
  },
];
export const historicPatients = [
  {
    id: 1,
    title: "Benjamin Barreiro",
    subtitle: "OSDE",
    description: "Viernes 25 de Octubre",
    description2: "13:00",
    src: "images/consultorio.jpeg",
  },
];

export const schedules = [
  {
    title: "Agenda 1",
    appoinmentDuration: "60",
    blockedWeekDays: [0, 5],
    availability: {
      // Ejemplo simple: horarios por día de la semana
      1: ["09:00", "10:00", "11:00"], // lunes
      2: ["09:00", "10:00", "11:00"],
      3: ["09:00", "10:00", "11:00", "15:00"],
      4: ["09:00", "10:00", "11:00", "15:00"],
      5: ["09:00", "10:00"],
    },
  },
];

export const healthInsurances = [
  { label: "osde", value: "osde" },
  { label: "galeno", value: "galeno" },
  { label: "swiss medical", value: "swiss medical" },
  { label: "particular", value: "particular" },
];
