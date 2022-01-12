import {Link} from 'react-router-dom'
import styles from './ChatCard.module.css'

const ChatCard = ({data}) => {
  const {id, accAvatar, username, messages} = data;
  const theme = localStorage.getItem('theme')
  return(
    <Link to={`/message/${id}`}>
     <ul className={`${styles.chatCard} ${theme === 'light' ? styles.light : ''}`}>
      <li><img src={accAvatar} alt="account avatar"/></li>
      <li>
       <ul className={styles.info}>
        <li className={styles.user}>{username}</li>
        <li className={styles.message}>{messages[messages.length -1].body}</li>
       </ul>
      </li>
      <li className={styles.time}>{messages[messages.length -1].time}</li>
     </ul>
    </Link>
    )
}

export default ChatCard;