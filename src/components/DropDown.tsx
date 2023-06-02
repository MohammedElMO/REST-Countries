import { Menu } from "@headlessui/react"
import { Fragment, useContext, useState } from "react"
import {BiChevronDown} from "react-icons/bi"


function DropDown() {
    const [SelectedRegion, setSelectedRegion] = useState("")
    const regions = ["africa" , "America","Asia" ,"Europ","Ocenia"]
  // const DropContext = useContext<string[]>([] as any)
    return (
    <div className="relative flex flex-col font-nunito m-10">
        <Menu as={Fragment} >
        <Menu.Button className="bg-dark-blue shadow-md p-4 rounded-md text-white flex items-center gap-3 text-lg">
           {SelectedRegion || "Filter by Region"}
        <BiChevronDown className="text-lg font-bold"/>
        </Menu.Button>
        <Menu.Items  className={" px-4 text-lg w-full absolute top-[100%] mt-1 py-4  p-2 gap-4  rounded-md flex text-white  flex-col bg-dark-blue "}>
            {
                regions.map(region => (
                    <Menu.Item  key={region}>
                        {({ active,close,disabled}) => (
              <a
                onClick={() => {
                    close
                    setSelectedRegion(region)
                }}
                className={`p-2 rounded ${disabled && "bg-"} ${active && 'bg-very-dark-blue-dark'}`}
                href="#"
              >
                {region}
              </a>
            )}
          </Menu.Item>
                ))
            }      
        </Menu.Items>
          </Menu>
    </div>

    )
}

export default DropDown