import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { addStudent } from "../api/data";

export default function StudentForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        course: "",
        grades: "",
        attendance: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!auth.currentUser) {
            navigate("/login", { state: { redirectTo: "/" } });
            return;
        }
        await addStudent(form);
        onAdd();
        setForm({
            name: "",
            email: "",
            course: "",
            grades: "",
            attendance: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-2">
            {["name", "email", "grades", "attendance"].map((field) => (
                <input
                    key={field}
                    type="text"
                    placeholder={field}
                    id={field}
                    className="p-2 border rounded w-full"
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                />
            ))}
            <select
                className="p-2 border rounded w-full"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                required
            >
                <option value="">Select course</option>
                <option value="maths">Maths</option>
                <option value="physics">Physics</option>
                <option value="biology">Biology</option>
            </select>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Add Student
            </button>
        </form>
    );
}
