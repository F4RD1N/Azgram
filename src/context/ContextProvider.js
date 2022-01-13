import React, {useState, useEffect} from 'react'
import {allData} from '../services/api'
export const MainContext = React.createContext()
const ContextProvider = ({children}) => {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      setData(allData)
    }
    fetchData()
  },[])
  return(
    <MainContext.Provider value={data}>
     {data.chats && children}
    </MainContext.Provider>
    )
}

export default ContextProvider;