
import styles from './MessageBox.module.css'

const Sender = ({data}) => {
  const {body, time} = data
  const theme = localStorage.getItem('theme')
  const perChar = /[\u0600-\u06FF]/;
  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.light : ''}`}>
  <div className={styles.reciver}>
     <p className={perChar.test(body) ? styles.isPersian : styles.message}>{body}</p>
     <ul className={styles.info}>
      <li className={styles.time}>{time}</li>
     </ul>
    </div>
    </div>
    )
}

export default Sender;