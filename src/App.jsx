import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import Content from "./components/Content"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [username, setUsername] = useState(() => JSON.parse(localStorage.getItem('username')));

  // akan dijalankan pertama kali dan ketika state "tasks" berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // localstorage untuk username
  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('username'))) {
      withReactContent(Swal).fire({
        title: 'Siapa nama kamu?',
        input: 'text',
        background: '#323437',
        color: '#fff',
        inputAutoFocus: false,
        inputValidator: value => {
          if (!value) {
            return 'Mohon masukan nama anda 🙄'
          } else {
            setUsername(value);
          }
        }
      })
    } else {
      return
    }
  }, []);

  const handleAddTask = (taks) => {
    setTasks(prevTask => [...prevTask, taks]);
  }

  const handleDeleteTask = (currTask) => {
    setTasks(tasks.filter(task => task.id !== currTask.id));
  }

  return (
    <div className="container mx-auto lg:px-52 px-6 mt-5 grid md:grid-cols-3 gap-3 md:gap-4">
      <Header username={username} />
      <Sidebar onHandleAddTask={handleAddTask} />
      <Content tasks={tasks} onHandleDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default App
