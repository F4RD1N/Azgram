import {useContext, useState} from 'react'
import styles from './SearchPage.module.css'
import SearchBox from './SearchBox/SearchBox'
import Navigation from '../Navigation/Navigation'
import PostPage from '../PostPage/PostPage'
import {MainContext} from '../../context/ContextProvider'
import useTitle from '../../hooks/useTitle'
const SearchPage = () => {
  const {posts: postsData} = useContext(MainContext)
  const [showPost, setShowPost] = useState(false);
  const [postId, setPostId] = useState('')
  const showPostHandler = (id) => {
    setShowPost(true)
    setPostId(id)
  }

  const closePostHandler = event => {
    if(event.target.classList.contains("postPage")){
      setShowPost(false)
    }
  }
  
  //set useTitle
  useTitle('Explore')
  return (
    <section onClick={closePostHandler}>
     <SearchBox />
    <figure className={styles.postsList}>
     <li className={styles.video}>
      {
        postsData ? postsData.map(post => {
          if(post.type === 'video') {
           return(<video 
            onClick={() => showPostHandler(post.id)}
            muted={true}
            autoPlay={true}
            loop={true}
            key={post.id}
            src={post.postUrl}>
           </video>)
          }
        })
        : ''
      }
     </li>
     {
       postsData ? postsData.map(post => {
        if(!post.own && post.type === 'image'){
         return (<li>
           <img 
            onClick={() => showPostHandler(post.id)}
            src={post.postUrl}
            key={post.id}
            alt="explore post thumbnails"/> 
         </li>)
        }
       }) : ''
     }
    </figure>
    <Navigation active="search" />
     {
       showPost ? <PostPage data={postsData} id={postId} /> : ''
     }
    </section>
    )
}

export default SearchPage;