import { useRef } from "react"
import {BiSearch} from "react-icons/bi"



function SearchFlage({
  setSearchName,
}: {
  setSearchName: (searchInput: string) => void
}) {
  const searchRef = useRef<HTMLInputElement>(null)

  const collectInput = () => {
    if (!searchRef.current?.value || searchRef.current?.value === "") return

    setSearchName(searchRef.current.value)
  }
  return (
    <div className="relative m-10 flex w-[35%]">
      <input
        onChange={() => collectInput()}
        ref={searchRef}
        className="relative flex-1 rounded-md  bg-dark-blue px-16 py-4 font-nunito text-lg font-semibold text-white shadow-md"
        type="search"
        placeholder="Search for a country..."
        id=""
      />
      <BiSearch className="absolute left-7 top-[34%] cursor-pointer  text-xl text-white " />
    </div>
  )
}

export default SearchFlage