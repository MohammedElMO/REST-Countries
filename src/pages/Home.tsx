import { useState } from "react"
import DropDown from "../components/DropDown"
import FlagsGrid from "../components/FlagsGrid"
import SearchFlage from "../components/Search"

function Home() {
    const [SelectedRegion, setSelectedRegion] = useState("")
    const [searchName, setSearchName] = useState("")
  return (
    <main className="min-h-screen overflow-x-hidden bg-very-dark-blue-dark ">
      <section className="  flex flex-row items-center justify-between max-sm:flex-col max-sm:justify-end ">
        <SearchFlage setSearchName={setSearchName}/>
        <DropDown
          setSelectedRegion={setSelectedRegion}
          region={SelectedRegion}
        />
      </section>
      <FlagsGrid flageName={searchName} SelectedRegion={SelectedRegion}/>
    </main>
  )
}

export default Home
