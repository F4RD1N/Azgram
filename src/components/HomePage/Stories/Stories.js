import StoryCard from './StoryCard/StoryCard'
import styles from './Stories.module.css'
import useSlider from '../../../hooks/useSlider'
import Slider from "react-slick"
const Stories = ({data}) => {
  const theme = localStorage.getItem('theme')
    const element = document.querySelector('.slider')
    useSlider(element)
    
  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      swipeToSlide: true,
      arrows: false,
  }
  return(
    <section 
     className={`${styles.stories} ${theme === 'light' ? styles.light : 'slider'}`}>
    
        <Slider {...settings}>
 
        <div className={styles.addStory}>
         <div className={styles.imageWrapper}>
          <img src="../resources/react.png" alt="account avatar"/>
         </div>
          <span className={styles.name}>Your Story</span>
        </div>
     {
       data.map(story => <div className={styles.card} key={story.id}><StoryCard name={story.username} image={story.accAvatar} seen={story.isVisited} /></div>)
     }
        </Slider>
    </section>
    )
}

export default Stories;