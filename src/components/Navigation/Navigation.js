import {useNavigate} from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = ({active}) => {
 const theme = localStorage.getItem('theme')
 const navigate = useNavigate()
return (
    <nav className={`${styles.bottomNavBar} ${theme === 'light' ? styles.light : ''}`}>
   <ul className={styles.navItems}>
    <li  onClick={() => navigate("/", { replace: true })}>
      {active === 'home' ? <i className="bi bi-house-fill"></i> : <i className="bi bi-house"></i>}
    </li>
    <li onClick={() => navigate("/explore", { replace: true })}>
      {active === 'search' ? <i className="bi bi-binoculars-fill"></i> : <i className="bi bi-binoculars"></i>}
    </li>
    <li onClick={() => navigate("/add", { replace: true })}>
      {active === 'add' ? <i className="bi bi-plus-circle-fill"></i> : <i className="bi bi-plus-circle"></i>}
    </li>
    <li onClick={() => navigate("/activity", { replace: true })}>
      {active === 'activity' ? <i className="bi bi-heart-fill"></i> : <i className="bi bi-heart"></i>}
    </li>
    <li onClick={() => navigate("/account", { replace: true })}>
     <img src="../resources/react.png" alt="account avatar" />
    </li>
   </ul>
  </nav>
  )
}

export default Navigation;