import React, {useEffect, useState} from 'react'

export const useApi = (API) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setloading] = useState(true)
    useEffect(() => {
      fetch(API)
        .then(res => res.json())
        .then(quotes => {
            console.log(quotes)
            setData(quotes)
            setError(false)
            setloading(false)
        })
        .catch(error => {
            setData(error)
            setError(true)
            setloading(false)
        })
    }, [])
    return { data, error, loading }
}

