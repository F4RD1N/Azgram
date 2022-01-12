import styles from './Loading.module.css'
import ReactDOM from 'react-dom'
const Loading = () => {
  const theme = localStorage.getItem('theme')
  return ReactDOM.createPortal(
    <section className={`${styles.loading} ${theme === 'light' ? styles.light : ''}`}>
     <div className={styles.ldsHeart}><div></div></div>
    </section>
    , document.getElementById("loading")
    )
}

export default Loading;