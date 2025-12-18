import { useState } from 'react'
import { Student } from './models/Student'  
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <h1>Student Manager</h1>
      <StudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  )
}

export default App
