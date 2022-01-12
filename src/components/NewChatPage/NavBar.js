import {useNavigate} from 'react-router-dom'
import styles from '../HomePage/NavBar/NavBar.module.css'
const NavBar = () => {
  const navigate = useNavigate()
  const theme = localStorage.getItem('theme')
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.menuItems}>
     <li><i className="bi bi-search"></i></li>
     
      <li className={styles.appName}>New Chat</li>
      
      <li onClick={() => navigate("/chats", { replace: true })}><i className="bi bi-arrow-left"></i></li>
     </ul>
    </nav>
    )
}

export default NavBar;