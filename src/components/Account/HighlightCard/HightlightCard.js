import styles from './HighlightCard.module.css'
const HighlightCard = ({title, avatar}) => {

  return (
    <div className={styles.highlightCard}>
     <img src={avatar} alt="highlight avatar"/>
     <span>{title}</span>
    </div>
    )
}

export default HighlightCard;