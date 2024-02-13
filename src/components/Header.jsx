export default function Header({ username }) {
   return (
      <header className="bg-primary w-full h-20 col-start-1 row-start-1 col-end-4 rounded-md relative flex justify-center items-center">
         <img src="./src/img/icon/to-do-list.png" alt="to-do-list" className="w-10 shadow-lg absolute top-1 left-2" />
         <div className="">
            <span className="text-xl">Hallo, {username ? username : 'Tuan/Nyoya'}!🤗</span>
         </div>
      </header>
   )
}