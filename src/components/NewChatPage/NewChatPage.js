import {useContext} from 'react'
import {DataContext} from '../../App'
import styles from './NewChat.module.css'
import NavBar from './NavBar'
import ContactCard from './ContactCard/ContactCard'
import useTitle from '../../hooks/useTitle'
const NewChatPage = () => {
 const {contacts: contactsData} = useContext(DataContext)
 
 //useTitle
 useTitle('Contacts')
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