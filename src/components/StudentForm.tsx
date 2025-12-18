import { useState } from "react";
import type { Student } from "../models/Student";

interface Props{
    onAddStudent: (student: Student) => void;
}

const StudentForm = ({ onAddStudent }: Props) => {

    const [name, setName] = useState<string>("");
    const [age,setAge] = useState<number>(0);
    const [course,setCourse] = useState<string>("");

    const handleSubmit = () =>{
        const newStudent:Student = {
            id: Date.now(),
            name,
            age,
            course
        }
        onAddStudent(newStudent);
        setName("");
        setAge(0);
        setCourse("");
    }
  return (
    <div>
        <h2>Add Student</h2>
        <input 
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        />
        <input 
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Student</button> 
    </div>
  )
}

export default StudentForm