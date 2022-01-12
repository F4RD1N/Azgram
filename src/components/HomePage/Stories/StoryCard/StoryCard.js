import {Link} from 'react-router-dom'
import styles from './StoryCard.module.css'
const StoryCard = ({name, image, seen}) => {
  const theme = localStorage.getItem('theme')
  return(
    <div className={`${styles.storyCard} ${theme === 'light' ? styles.light : ''}`}>
     <div className={`${styles.imageWrapper} ${seen === true && styles.seen}`}>
     <Link to={`/story/${name}`}>
      <img src={image} alt="account avatar"/>
    </Link>
     </div>
     <span className={styles.username}>{name}</span>
    </div>
    )
}

export default StoryCard;