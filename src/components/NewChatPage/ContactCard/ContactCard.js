import styles from './ContactCard.module.css'

const ContactCard = ({data}) => {
 const {accAvatar, username, status} = data
 const theme = localStorage.getItem('theme')
  return(
     <ul className={`${styles.contactCard} ${theme === 'light' ? styles.light : ''}`}>
      <li><img src={accAvatar} alt="account avatar" /></li>
      <li>
       <ul className={styles.info}>
        <li className={styles.user}>{username}</li>
        <li className={status === 'online' ? styles.online : styles.offline}>{status}</li>
       </ul>
      </li>
     </ul>
    )
}

export default ContactCard;