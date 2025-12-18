import { Student } from "../models/Student" 

interface Props{
    students: Student[];
}

const StudentList = ({students}: Props) => {
  return (
    <div>
        <h2>Student List</h2>
        <ul>
            {students.map((student) => (
                <li key={student.id}>
                    {student.name} - Age: {student.age} - Course: {student.course}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default StudentList