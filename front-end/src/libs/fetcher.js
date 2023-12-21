import axios from "axios"
import { useEffect, useState } from "react"






export async function post(URL, DATA) {
    try {
        const res = await axios.post(URL, DATA, {
            headers: {
                token: sessionStorage.getItem("token")
            }
        })


        return res.data

    }
    catch (err) {
        const response = err.response

        if (response) {
            throw response.data
        } else {
            throw "Somthing Error"
        }

    }


}


export async function get(URL, DATA) {
    try {
        const res = await axios.get(URL, DATA, {
            headers: {
                token: sessionStorage.getItem("token")
            }
        })
        return res.data

    }
    catch (err) {
        const response = err.response

        if (response) {
            throw response.data
        } else {
            throw "Somthing Error"
        }

    }


}


export function useFetch(URL, DATA) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [loading, setLoading] = useState(undefined)


    useEffect(() => { 
        get(URL,DATA).then(res=>{
            setData(data)
        })
    }, [URL])

}


