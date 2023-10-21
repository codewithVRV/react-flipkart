import axios from "axios"
import { useEffect, useState } from "react"
import { getAllCategories } from "../Apis/fakeStoreProdApis"

function useCategory () {
    const [allCategories, setAllCategories] = useState([])


    async function downloadAllCategories () {
        const response = await axios.get(getAllCategories(), {withCredentials: true})
        setAllCategories(response.data)
    }


    useEffect(() => {
        downloadAllCategories()
    }, [])

    return [allCategories]
}


export default useCategory;