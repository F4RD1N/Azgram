import {useContext, useEffect, useState} from 'react'
import {MainContext} from '../../context/ContextProvider'
import styles from './ActivityPage.module.css'
import NavBar from './NavBar'
import Liked from './AllStatus/Liked'
import Followed from './AllStatus/Followed'
import Navigation from '../Navigation/Navigation'
import useTitle from '../../hooks/useTitle'
const ActivityPage = () => {
 const {activity: activityData} = useContext(MainContext)
 
 //set useTitle
 useTitle('Acticity')
 
const [time, setTime] = useState(1)
  useEffect(() => {
    setTimeout(function() {
      setTime(2)
    },200);
  },[])
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