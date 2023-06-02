import DropDown from "../components/DropDown"
import FlageCard from "../components/Flage"
import SearchFlage from "../components/Search"
import getAllFlags from "../hooks/useAllFlags"

function Home() {
//   const {data} =  useSelectedDrop("malta")
  const  {flags} =  getAllFlags()
  
  
  return (
    <main className="min-h-screen overflow-x-hidden bg-very-dark-blue-dark ">
      <section className="  flex flex-row items-center justify-between max-sm:flex-col max-sm:justify-end ">
        <SearchFlage />
        <DropDown />
      </section>
      <section className=" mx-10 grid gap-x-10 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
        {flags?.map((flag) =>
          flag.name.common === "Israel" ? null : (
            <FlageCard key={flag.name.common} {...flag} />
          )
        )}
      </section>
    </main>
  )
}

export default Home
