


import  { useEffect } from 'react'
import { getAll } from './api/AllFlags'
import Header from './components/header'
import SearchFlage from './components/Search'
import DropDown from './components/DropDown'

function App() {
  useEffect(() => {
    const fetchAll = async () => {
      const  data = await getAll()
      console.log(data);
      
    }
    // fetchAll()
  },[])
  
  return (
    <div>
      <Header />
      <main className='bg-very-dark-blue-dark h-screen'>
        <section className='flex justify-between items-center '>
          <SearchFlage /> 
          <DropDown />
        </section>

      </main>
    </div>
  )
}

export default App