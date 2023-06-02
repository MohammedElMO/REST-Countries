import { useRef } from "react"
import {BiSearch} from "react-icons/bi"



function SearchFlage() {
    const searchRef = useRef<HTMLInputElement>(null)

    const collectInput = () => {
            if(!searchRef.current?.value)
                return

        console.log(searchRef.current.value);
                
    }
  return (
    <div className="m-10 relative flex w-[35%]">
        <input  onChange={() => collectInput()} ref={searchRef} className="relative text-white rounded-md px-16 py-4 flex-1 font-nunito font-semibold text-lg shadow-md bg-dark-blue" type="search"  placeholder="Search for a country..." id="" />
        <BiSearch className="cursor-pointer text-xl top-[34%] left-7  text-white absolute " />
    </div>
  )
}

export default SearchFlage