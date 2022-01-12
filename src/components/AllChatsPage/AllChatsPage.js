import {useContext} from 'react'
import {DataContext} from '../../App'
import styles from './AllChats.module.css'
import NavBar from './NavBar'
import ChatCard from './ChatCard/ChatCard'
import useTitle from '../../hooks/useTitle'
const AllChatsPage = () => {
const {chats: chatsData} = useContext(DataContext)

//set useTitle
useTitle('Chats')
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