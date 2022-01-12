import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from '../../App'
import styles from './StoryPage.module.css'
import NavBar from './NavBar.js'
const StoryPage = () => {
  const params = useParams()
  const {stories: storiesData} = useContext(DataContext)
  return (
    <section
     className={styles.storyPage}>
     <NavBar data={storiesData}/>
     {
     storiesData.map(item => {
       if(item.username === params.id)
       return( <img className={styles.storyImage} src={item.storyImage} key={item.id} alt="story post"/>)
     })
     }

    </section>
    )
}

export default StoryPage;