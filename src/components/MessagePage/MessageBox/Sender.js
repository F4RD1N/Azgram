import styles from './MessageBox.module.css'

const Sender = ({data}) => {
  const {body, time, status} = data
  const theme = localStorage.getItem('theme')
  const perChar = /[\u0600-\u06FF]/;
  return (
    <div className={`${styles.wrapper} ${theme === 'light' ? styles.light : ''}`}>
    <div className={styles.sender}>
     <p className={perChar.test(body) ? styles.isPersian : styles.message}>{body}</p>
     <ul className={styles.info}>
      <li className={styles.time}>{time}</li>
      <li className= {styles.tik}>
      { status ?
       <i className="bi bi-check2-all"></i>
       : <i className="bi bi-exclamation-lg"></i>
      }
      </li>
     </ul>
    </div>
    </div>
    )
}

export default Sender