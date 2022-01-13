import {useContext, useEffect, useState} from 'react'
import {MainContext} from '../../context/ContextProvider'
import styles from './AllChats.module.css'
import NavBar from './NavBar'
import ChatCard from './ChatCard/ChatCard'
import useTitle from '../../hooks/useTitle'
const AllChatsPage = () => {
const {chats: chatsData} = useContext(MainContext)

//set useTitle
useTitle('Chats')

const [time, setTime] = useState(1)
  useEffect(() => {
    setTimeout(function() {
      setTime(2)
    },200);
  },[])
  return(
    <>
     <NavBar />
    <section className={styles.allChatsPage}>
     {
       chatsData ? chatsData.map(item => <ChatCard data={item} key={item.id}/>) : ''
     }
    </section>
    </>
    )
}


export default AllChatsPage;