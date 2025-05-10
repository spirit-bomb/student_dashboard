import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export default function StudentCard({ student }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!auth.currentUser) {
            navigate("/login", { state: { redirectTo: `/student/${student.id}` } });
        } else {
            navigate(`/student/${student.id}`);
        }
    };

    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <h2 className="font-bold">{student.name}</h2>
            <p>{student.email}</p>
            <p className="text-sm text-gray-500">{student.course}</p>
            <button
                onClick={handleClick}
                className="mt-2 text-blue-600 underline text-sm"
            >
                View Details
            </button>
        </div>
    );
}
