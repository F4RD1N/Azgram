import styles from './AllStatus.module.css'
const Liked = ({data}) => {
  const {accAvatar, username, time, likedPost} = data
  return(
    <ul className={styles.likedStatus}>
     <li className={styles.userImage}><img src={accAvatar} alt="account avatar" /></li>
     <li className={styles.likedInfo}>
    <span className={styles.username}>{username} </span>
      liked your photo
      <span className={styles.time}> {time} ago</span>
     </li>
     <li className={styles.likedPhoto}><img src={likedPost}alt="post thumbnail"/></li>
    </ul>
    )
}

export default Liked;