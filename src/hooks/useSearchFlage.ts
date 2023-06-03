// https://restcountries.com/v3.1/region/{region}
import { useEffect, useState } from "react"
import { FlagCardT } from "../api/allFlags"
import axiosApiClient from "../api/axios-apiClient"

const useSearchFlage =  (falgeName: string) => {
  const [searchFlag, setSearchedFlags] = useState<FlagCardT[] | undefined>(
    []
  )

  useEffect(() => {
    const fetchSelectedFlags = async () => {
      try {
        const req = await axiosApiClient.get<FlagCardT[]>(`name/${falgeName}`)
        const data = await req.data
        setSearchedFlags(data)
        
      } catch (err) {
        if (err instanceof Error) console.log(err)
      }
    }
    fetchSelectedFlags()
  }, [falgeName])
  return {
    searchFlag,
  }
}

export default useSearchFlage
