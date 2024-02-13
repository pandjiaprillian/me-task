import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content';

export default function ContentList({ task, onHandleDeleteTask }) {

   const showSwal = () => {
      withReactContent(Swal).fire({
         title: <i>Apakah anda yakin ingin menghapus tugas ini?</i>,
         background: '#323437',
         color: '#E2B714',
         confirmButtonText: 'Hapus',
         cancelButtonText: 'Batal',
         showConfirmButton: true,
         showCancelButton: true,
         confirmButtonColor: '#E2B714',
         cancelButtonColor: '#ff0000',
         focusCancel: true,
         focusConfirm: false
      }).then(result => {
         if (result.isConfirmed) {
            onHandleDeleteTask(task);
         } else if (result.isDenied) {
            return false;
         }
      })
   }

   return (
      <>
         <div className="w-full bg-secondary p-3 rounded-md relative flex justify-between mb-2" onClick={showSwal}>
            <div>{task.description}</div>
            <div className='close'>
               <img src="./src/img/icon/delete.png" alt="delete" className="w-8" title="hapus tugas" />
            </div>
         </div>
      </>
   )
}