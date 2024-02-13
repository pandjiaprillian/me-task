import FormSidebar from "./FormSidebar";

export default function Sidebar({ onHandleAddTask }) {
   return (
      <div className="h-min md:col-start-3 md:row-start-2 md:col-end-4 col-start-1 col-end-4 bg-primary rounded-md p-3">
         <FormSidebar onHandleAddTask={onHandleAddTask} />
      </div>
   )
}