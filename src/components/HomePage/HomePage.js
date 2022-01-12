import {useContext} from 'react'
import {DataContext} from '../../App'
import styles from './HomePage.module.css'
import NavBar from './NavBar/NavBar'
import Stories from './Stories/Stories'
import PostCard from './PostCard/PostCard'
import Navigation from '../Navigation/Navigation'
import useTitle from '../../hooks/useTitle'
const HomePage = () => {
 const {posts : postsData, stories: storiesData} = useContext(DataContext)
 
 //set useTitle
 useTitle('Home')
 
  return(
    <div className={styles.homePage}>
     <NavBar />
     <Stories data={storiesData} />
     {
     
       postsData.map(post => <PostCard data={post} key={post.id}/>)
     }
     <Navigation active="home"/>
    </div>
    )
}

export default HomePage;