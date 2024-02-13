import ContentList from "./ContentList";

export default function Content({ tasks, onHandleDeleteTask }) {
   return (
      <div className="md:col-start-1 md:row-start-2 md:col-end-3 col-start-1 col-end-4 bg-primary rounded-md p-3">
         {
            tasks.length === 0
               ?
               <div className="font-semibold h-full flex justify-center items-center">
                  <p>Belum ada tugas nihhh!!! 🤔</p>
               </div>
               :
               tasks.map(task => <ContentList task={task} key={task.id} onHandleDeleteTask={onHandleDeleteTask} />)
         }
      </div>
   )
}