import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentById } from "../api/data";
import Navbar from "../components/Navbar"; // optional if you have a navbar

export default function StudentDetails() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        getStudentById(id).then(setStudent);
    }, [id]);

    if (!student) return <p className="p-4 text-center">Loading...</p>;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
                    <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">{student.name}</h1>
                    <div className="space-y-3">
                        <Detail label="Email" value={student.email} />
                        <Detail label="Course" value={student.course} />
                        <Detail label="Grades" value={student.grades} />
                        <Detail label="Attendance" value={`${student.attendance}`} />
                    </div>
                    <div className="mt-6 text-center">
                        <button
                            onClick={() => window.history.back()}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

function Detail({ label, value }) {
    return (
        <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">{label}:</span>
            <span className="text-gray-800">{value}</span>
        </div>
    );
}
