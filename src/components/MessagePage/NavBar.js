import {useNavigate} from 'react-router-dom'
import styles from '../HomePage/NavBar/NavBar.module.css'
import styles2 from './InfoCard.module.css'
import useTitle from '../../hooks/useTitle'
const NavBar = ({data}) => {
  const {accAvatar, username, status} = data
  
 const navigate = useNavigate()
  const theme = localStorage.getItem('theme')
  
  //set useTitle
  useTitle(username)
  return (
    <nav className={`${styles.navBar} ${theme === 'light' ? styles.light : ''}`}>
     <ul className={styles2.menuItems}>
     <li className={styles2.more}><i className="bi bi-three-dots-vertical"></i></li>
     
      <li>
 <ul className={styles2.contactCard}>
      <li><img src={accAvatar} alt="account avatar"/></li>
      <li>
       <ul className={styles2.info}>
        <li className={styles2.user}>{username}</li>
        <li className={status === 'online' ? styles2.online : styles2.offline}>{status}</li>
       </ul>
      </li>
     </ul>
      </li>
      
      <li onClick={() => navigate("/chats", { replace: true })}><i className="bi bi-arrow-left"></i></li>
     </ul>
    </nav>
    )
}

export default NavBar;