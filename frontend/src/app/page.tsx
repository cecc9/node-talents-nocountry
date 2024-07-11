import { Landing } from "@/components/landing"
import customFetch from "@/utils/axios"

const getData = async () => {
  const response = await customFetch.get("/")
  return response.data
}

async function Home() {
  // const info = await getData()
  // console.log(info)

  return <Landing />
}
export default Home
