import {useRef, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({data}) => {
 const params = useParams()
 const progress = useRef(null)
 const navigate = useNavigate()
 
useEffect(() => {
 setTimeout(() => {
  navigate("/", { replace: true })
 }, 3000);
}, [])
  return (
    <nav className={styles.navBarWrapper}>
    <div 
     ref={progress}
     className={styles.progressBar}></div>
     <ul className={styles.navBar}>
      <li
       onClick={() => navigate("/", { replace: true })}
       ><i className="bi bi-arrow-left"></i></li>
      <li className={styles.icon}>
      {data.map(item => {
        if(item.username === params.id){
       return <img src={item.accAvatar} key={item.id} alt="account avatar"/>
        }
      })
      }
      </li>
      <li className={styles.username}>{params.id}</li>
     </ul>
    </nav>
    )
}

export default NavBar;