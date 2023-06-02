import { useEffect, useState } from "react"
import { FlagCardT } from "../api/allFlags"
import axiosApiClient from "../api/axios-apiClient"

export default  function getAllFlags() {
  const [flags, setFlags] = useState<FlagCardT[] | undefined>([])

  useEffect(() => {
    const fetchAllFlags = async () => {
      try {
        const req = await axiosApiClient.get<FlagCardT[]>("/all")
        const data = await req.data
        setFlags(data)
        return data
      } catch (err) {
        if (err instanceof Error) console.log(err)
      }
    }
    fetchAllFlags()
  }, [])
  return { flags }
}
