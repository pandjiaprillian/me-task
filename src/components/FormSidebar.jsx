import { useState } from "react"
import { Toaster, toast } from "alert";
import Button from "./utils/Button";

export default function FormSidebar({ onHandleAddTask }) {
   const [task, setTask] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!task) {
         toast.error('Harap masukan deskripsi tugas 😊')
         return;
      }

      const newTask = {
         id: crypto.randomUUID(),
         description: task
      };
      onHandleAddTask(newTask);
      setTask('');
   }

   return (
      <form onSubmit={handleSubmit}>
         <Toaster />
         <label htmlFor="task" className="inline-block w-full text-center md:text-left md:block md:text-sm font-semibold">Apa yang harus dikerjakan hari ini?</label>
         <div className="flex justify-center items-center gap-1 mt-1">
            <input type="text" className="rounded outline-none p-0.5 md:p-1.5 md:h-7 md:text-sm md:w-10/12" name="task" id="task" placeholder="Beli telur..." value={task} onChange={(e) => setTask(e.target.value)} />
            <Button>Tambah</Button>
         </div>
      </form>
   )
}