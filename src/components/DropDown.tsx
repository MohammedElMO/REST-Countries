import { Menu } from "@headlessui/react"
import { Fragment, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import useSelectedDrop from "../hooks/useSearchFlage"

function DropDown({setSelectedRegion,region} :{setSelectedRegion:(region:string) => void,region:string}) {
  // const [SelectedRegion, setSelectedRegion] = useState("")
  const regions = ["ALL regions","Africa", "Americas", "Asia", "Europe", "Oceania"]

  // const region = useSelectedDrop(SelectedRegion)


  return (
    <div className="relative m-10 flex flex-col font-nunito">
      <Menu as={Fragment}>
        <Menu.Button className="flex items-center gap-3 rounded-md bg-dark-blue p-4 text-lg text-white shadow-md">
          {region || "Filter by Region"}
          <BiChevronDown className="text-lg font-bold" />
        </Menu.Button>
        <Menu.Items
          className={
            " absolute top-[100%]  overflow-hidden mt-1 flex w-[200%] flex-col gap-4 right-0 max-sm:w-full max-sm:left-0 rounded-md bg-dark-blue  p-2 px-4 py-4  text-lg text-white "
          }
        >
          {regions.map((region) => (
            <Menu.Item key={region}>
              {({ active, close, disabled }) => (
                <a
                  onClick={() => {
                    close
                    setSelectedRegion(region)
                  }}
                  className={`rounded p-2 ${disabled && "bg-"} ${
                    active && "bg-very-dark-blue-dark"
                  }`}
                  href="#"
                >
                  {region}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default DropDown
