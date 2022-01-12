import styles from './TextBox.module.css'
const TextBox = ({message, setMessage, sendHandler}) => {
  const messageHandler = event => {
    setMessage(event.target.value)
  }
  const theme = localStorage.getItem('theme')
  return (
    <footer className={`${styles.footer} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.textBox}>
     <li><i className="bi bi-mic"></i></li>
     <li className={styles.inputBox}>
      <input
       onChange={messageHandler}
       onKeyDown={e => e.key === 'Enter' ? sendHandler() : ''}
       placeholder="Message"
       value={message}
      />
     </li>
     
     <li 
      onClick={sendHandler}
      className={`${styles.send} ${message ? styles.active : ''}`}>
     <i
      className="bi bi-send-fill"></i></li>
     </ul>
    </footer>
    )
}


export default TextBox;