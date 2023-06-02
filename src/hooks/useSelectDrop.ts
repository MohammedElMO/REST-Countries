// https://restcountries.com/v3.1/region/{region}
import { useEffect, useState } from "react"
import { FlagCardT } from "../api/allFlags"
import axiosApiClient from "../api/axios-apiClient"

const useSelectedDrop = async (region: string) => {
  const [selectedFlags, setSelectedFlags] = useState<FlagCardT[] | undefined>(
    []
  )

  useEffect(() => {
    const fetchSelectedFlags = async () => {
      try {
        const req = await axiosApiClient.get<FlagCardT[]>(`/region/${region}`)
        const data = await req.data
        setSelectedFlags(data)
      } catch (err) {
        if (err instanceof Error) console.log(err)
      }
    }
    fetchSelectedFlags()
  }, [region])
  return {
    selectedFlags,
  }
}

export default useSelectedDrop
