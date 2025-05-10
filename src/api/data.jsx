let students = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        course: "maths",
        grades: "A",
        attendance: "95%",
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        course: "physics",
        grades: "B",
        attendance: "90%",
    },
    {
        id: 3,
        name: "Mike",
        email: "mike@example.com",
        course: 'physics',
        grades: "B",
        attendance: "88%"
    },
    {
        id: 4,
        name: 'edward',
        email: 'edward@example.com',
        course: 'biology',
        grades: "C",
        attendance: "94%"
    },
    {
        id: 5,
        name: "eren",
        email: "eren@example.com",
        course: "maths",
        grades: "A",
        attendance: "92%"
    },

];

export function fetchStudents() {
    return new Promise((resolve) => {
        setTimeout(() => resolve([...students]), 1000);
    });
}

export function addStudent(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            students.push({ id: students.length+1, ...student });
            resolve();
        }, 500);
    });
}

export const getStudentById = (id) =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(students.find((s) => s.id === Number(id)));
        }, 500);
    });
