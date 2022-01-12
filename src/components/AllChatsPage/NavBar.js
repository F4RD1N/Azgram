import {Link, useNavigate} from 'react-router-dom'
import styles from '../HomePage/NavBar/NavBar.module.css'
const NavBar = () => {
 const navigate = useNavigate()
  const theme = localStorage.getItem('theme')
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles.menuItems}>
     <Link to="/newchat"> <li><i className="bi bi-pencil-square"></i></li> </Link>
     
      <li className={styles.appName}>Chats</li>
      
      <li onClick={() => navigate("/", { replace: true })}><i className="bi bi-arrow-left"></i></li>
     </ul>
    </nav>
    )
}

export default NavBar;