import {useContext, useEffect, useState} from 'react'
import {MainContext} from '../../context/ContextProvider'
import styles from './NewChat.module.css'
import NavBar from './NavBar'
import ContactCard from './ContactCard/ContactCard'
import useTitle from '../../hooks/useTitle'
const NewChatPage = () => {
 const {contacts: contactsData} = useContext(MainContext)
 
 //useTitle
 useTitle('Contacts')
 
const [time, setTime] = useState(1)
  useEffect(() => {
    setTimeout(function() {
      setTime(2)
    },200);
  },[])
  return(
    <>
    <NavBar />
    <section className={styles.newChatPage}>
     {
       contactsData ? contactsData.map(item => <ContactCard data={item} key={item.id}/>) : ''
     }
    </section>
    </>
    )
}

export default NewChatPage;