import {useState} from 'react'
import styles from './AllStatus.module.css'
const Followed = ({data}) => {
  const {accAvatar, username, time, } = data
  const [isFollowed, setIsFollowed] = useState(false)
  const theme = localStorage.getItem('theme')
  return(
      <ul className={`${styles.followedStatus} ${theme === 'light' ? styles.light : ''}`}>
     <li className={styles.userImage}><img src={accAvatar}  alt="account avatar" /></li>
     <li className={styles.followedInfo}>
    <span className={styles.username}>{username} </span>
      started following you
      <span className={styles.time}>{time} ago</span>
     </li>
     <li 
      className={`${styles.button} ${isFollowed && styles.messageButton}`}
      onClick={() => setIsFollowed(true)}>
      <span>{isFollowed ? "Message" : "Follow"}</span></li>
    </ul>
    )
}

export default Followed;