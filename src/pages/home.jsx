import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentCard from "../components/card";
import { fetchStudents } from "../api/data";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const FilterBar=({setCourseFilter})=>{
    return (
        <div className="mb-4">
            <select onChange={(e)=>setCourseFilter(e.target.value)}
                    className="p-2 border-rounded">
                <option value="">All courses</option>
                <option value="maths">maths</option>
                <option value="physics">physics</option>
                <option value="biology">biology</option>
            </select>
        </div>
    )
}

export default function Home() {
    const [students, setStudents] = useState([]);
    const [courseFilter, setCourseFilter] = useState("");

    const load = () => fetchStudents().then(setStudents);

    useEffect(() => {
        load();
    }, []);

    const filtered = courseFilter
        ? students.filter(
            (s) => s.course.toLowerCase() === courseFilter.toLowerCase()
        )
        : students;

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar/>
            <div className="p-4 max-w-2xl mx-auto">

                <FilterBar setCourseFilter={setCourseFilter} />
                {filtered.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
                <StudentForm onAdd={load} />
            </div>
        </div>
    );
}
