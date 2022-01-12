import styles from './Info.module.css'
import HighlightCard from '../HighlightCard/HightlightCard'
const Info = ({data}) => {
  const theme = localStorage.getItem('theme')
  const {
    followers,
    following,
    isVerified,
    avatar,
    name,
    job,
    loc,
    highlights
  } = data;
 
  return (
    <section className={styles.infoWrapper}>
     <ul className={styles.states}>
      <li>
       <span className={styles.top}>{followers}</span>
       <span className={styles.bottom}>followers</span>
      </li>
      <li> <img src={avatar} alt="account avatar" /> </li>
      <li>
       <span className={styles.top}>{following}</span>
       <span className={styles.bottom}>following</span>
      </li>
     </ul>
     <ul className={styles.userInfo}>
      <li className={styles.name}>{name} {isVerified? 
      <span className={styles.verified}><i className="bi bi-patch-check-fill"></i></span> : ''}</li>
      <li className={styles.job}>{job}</li>
      <li className={styles.location}><i className="bi bi-geo-alt"></i> {loc}</li>
     </ul>
     <ul className={styles.buttonActions}>
      <li className={`${styles.primaryButton} ${theme === 'light' ? styles.light : ''}`}><span>New Post</span></li>
      <li className={`${styles.secButton} ${theme === 'light' ? styles.light : ''}`}><span>Edit Profile</span></li>
     </ul>
     
     <ul className={styles.highlights}>
      { highlights ?
        highlights.map(item => {
          return <HighlightCard key={item.id} title={item.title} avatar={item.avatar} />
        })
        : ''
      }
     </ul>
    </section>
    )
}

export default Info;