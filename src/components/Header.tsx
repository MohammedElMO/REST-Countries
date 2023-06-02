import {MdOutlineDarkMode} from "react-icons/md"



function Header() {
  return (
    <header className="shadow-xl flex  justify-between font-nunito bg-dark-blue px-5 py-5 ">
        <h2 className="text-white font-semibold text-lg">Where in the World?</h2>
        <div className=" flex items-center max-[266px]:flex-col-reverse gap-2">
            <MdOutlineDarkMode className=" cursor-pointer text-xl text-white" />
            <span className="text-white font-light space-x-2">Dark Mode</span>
        </div>
    </header>
  )
}

export default Header