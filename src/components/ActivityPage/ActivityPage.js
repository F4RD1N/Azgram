import {useContext} from 'react'
import {DataContext} from '../../App'
import styles from './ActivityPage.module.css'
import NavBar from './NavBar'
import Liked from './AllStatus/Liked'
import Followed from './AllStatus/Followed'
import Navigation from '../Navigation/Navigation'
import useTitle from '../../hooks/useTitle'
const ActivityPage = () => {
 const {activity: activityData} = useContext(DataContext)
 
 //set useTitle
 useTitle('Acticity')
  return (
    <>
    <NavBar />
    <section className={styles.activityPage}>
  
     <span className={styles.date}>Today</span>
     {
      activityData ? activityData.map(item => item.type === "liked" ? <Liked data={item} key={item.id}/> : <Followed data={item} key={item.id} />) : ''
     }

     <Navigation active="activity" />
    </section>
    </>
    )
}

export default ActivityPage;