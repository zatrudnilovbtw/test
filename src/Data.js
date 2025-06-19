// Данные врачей
export const doctors = [
    { id: 1, name: 'Иванов Иван Иванович', specialty: 'Терапевт' },
    { id: 2, name: 'Петрова Мария Сергеевна', specialty: 'Кардиолог' },
    { id: 3, name: 'Сидоров Алексей Петрович', specialty: 'Невролог' },
    { id: 4, name: 'Козлова Елена Андреевна', specialty: 'Офтальмолог' },
    { id: 5, name: 'Морозов Дмитрий Викторович', specialty: 'Хирург' },
    { id: 6, name: 'Новикова Ольга Николаевна', specialty: 'Эндокринолог' },
    { id: 7, name: 'Соколов Артём Владимирович', specialty: 'Дерматолог' },
    { id: 8, name: 'Волкова Наталья Александровна', specialty: 'Гастроэнтеролог' }
];

export const workingHours = Array.from({ length: 13 }, (_, i) => i + 9);

export const appointments = [
    { id: '1-1', doctorId: 1, patientName: 'Пациент 12', startTime: 9, endTime: 10 },
    { id: '1-2', doctorId: 1, patientName: 'Пациент 71', startTime: 13, endTime: 14 },
    { id: '1-3', doctorId: 1, patientName: 'Пациент 71', startTime: 15, endTime: 17 },
    { id: '1-4', doctorId: 1, patientName: 'Пациент 23', startTime: 18, endTime: 19 },
    { id: '1-5', doctorId: 1, patientName: 'Пациент 45', startTime: 19, endTime: 20 },
    { id: '1-6', doctorId: 1, patientName: 'Пациент 78', startTime: 20, endTime: 21 },

    { id: '2-1', doctorId: 2, patientName: 'Пациент 33', startTime: 9, endTime: 10 },
    { id: '2-2', doctorId: 2, patientName: 'Пациент 19', startTime: 11, endTime: 12 },
    { id: '2-3', doctorId: 2, patientName: 'Пациент 27', startTime: 12, endTime: 13 },
    { id: '2-4', doctorId: 2, patientName: 'Пациент 42', startTime: 14, endTime: 16 },
    { id: '2-5', doctorId: 2, patientName: 'Пациент 56', startTime: 16, endTime: 17 },
    { id: '2-6', doctorId: 2, patientName: 'Пациент 5', startTime: 17, endTime: 19 },
    { id: '2-7', doctorId: 2, patientName: 'Пациент 5', startTime: 18, endTime: 20 },

    { id: '3-1', doctorId: 3, patientName: 'Пациент 41', startTime: 9, endTime: 11 },
    { id: '3-2', doctorId: 3, patientName: 'Пациент 62', startTime: 10, endTime: 11 },
    { id: '3-3', doctorId: 3, patientName: 'Пациент 83', startTime: 12, endTime: 13 },
    { id: '3-4', doctorId: 3, patientName: 'Пациент 21', startTime: 13, endTime: 14 },
    { id: '3-5', doctorId: 3, patientName: 'Пациент 8', startTime: 14, endTime: 16 },
    { id: '3-6', doctorId: 3, patientName: 'Пациент 93', startTime: 17, endTime: 18 },

    { id: '4-1', doctorId: 4, patientName: 'Пациент 17', startTime: 10, endTime: 11 },
    { id: '4-2', doctorId: 4, patientName: 'Пациент 50', startTime: 11, endTime: 13 },
    { id: '4-3', doctorId: 4, patientName: 'Пациент 31', startTime: 15, endTime: 16 },
    { id: '4-4', doctorId: 4, patientName: 'Пациент 67', startTime: 17, endTime: 18 },
    { id: '4-5', doctorId: 4, patientName: 'Пациент 95', startTime: 18, endTime: 20 },

    { id: '5-1', doctorId: 5, patientName: 'Пациент 22', startTime: 9, endTime: 10 },
    { id: '5-2', doctorId: 5, patientName: 'Пациент 44', startTime: 10, endTime: 11 },
    { id: '5-3', doctorId: 5, patientName: 'Пациент 77', startTime: 11, endTime: 13 },
    { id: '5-4', doctorId: 5, patientName: 'Пациент 11', startTime: 12, endTime: 13 },
    { id: '5-5', doctorId: 5, patientName: 'Пациент 39', startTime: 14, endTime: 15 },
    { id: '5-6', doctorId: 5, patientName: 'Пациент 35', startTime: 17, endTime: 19 },
    { id: '5-7', doctorId: 5, patientName: 'Пациент 88', startTime: 20, endTime: 21 },

    { id: '6-1', doctorId: 6, patientName: 'Пациент 29', startTime: 9, endTime: 10 },
    { id: '6-2', doctorId: 6, patientName: 'Пациент 53', startTime: 11, endTime: 13 },
    { id: '6-3', doctorId: 6, patientName: 'Пациент 81', startTime: 12, endTime: 14 },
    { id: '6-4', doctorId: 6, patientName: 'Пациент 14', startTime: 13, endTime: 14 },
    { id: '6-5', doctorId: 6, patientName: 'Пациент 100', startTime: 16, endTime: 18 },
    { id: '6-6', doctorId: 6, patientName: 'Пациент 52', startTime: 18, endTime: 20 },

    { id: '7-1', doctorId: 7, patientName: 'Пациент 63', startTime: 9, endTime: 10 },
    { id: '7-2', doctorId: 7, patientName: 'Пациент 85', startTime: 11, endTime: 13 },
    { id: '7-3', doctorId: 7, patientName: 'Пациент 24', startTime: 12, endTime: 14 },
    { id: '7-4', doctorId: 7, patientName: 'Пациент 37', startTime: 16, endTime: 18 },
    { id: '7-5', doctorId: 7, patientName: 'Пациент 49', startTime: 18, endTime: 20 },
    { id: '7-6', doctorId: 7, patientName: 'Пациент 54', startTime: 19, endTime: 21 },

    { id: '8-1', doctorId: 8, patientName: 'Пациент 3', startTime: 10, endTime: 12 },
    { id: '8-2', doctorId: 8, patientName: 'Пациент 98', startTime: 11, endTime: 13 },
    { id: '8-3', doctorId: 8, patientName: 'Пациент 76', startTime: 12, endTime: 13 },
    { id: '8-4', doctorId: 8, patientName: 'Пациент 25', startTime: 13, endTime: 14 },
    { id: '8-5', doctorId: 8, patientName: 'Пациент 9', startTime: 16, endTime: 18 },
    { id: '8-6', doctorId: 8, patientName: 'Пациент 60', startTime: 18, endTime: 19 }
];
