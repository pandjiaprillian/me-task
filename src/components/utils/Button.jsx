export default function Button({ children, onClick }) {
   return <button onClick={onclick} className="bg-utility px-1 py-1 rounded-md text-white text-sm hover:bg-orange-700 transition-all">{children}</button>
}