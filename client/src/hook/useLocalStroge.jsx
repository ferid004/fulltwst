
import React, { useEffect, useState } from 'react'

function useLocalStroge(strogename) {
    const [data, setdata] = useState(localStorage.getItem(strogename)?JSON.parse(localStorage.getItem(strogename)):[])
    useEffect(() => {
      localStorage.setItem(strogename,JSON.stringify(data))
    }, [data])
    
  return [data,setdata]
}

export default useLocalStroge