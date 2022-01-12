import {useState, useContext} from 'react'
import {DataContext} from '../../App'
import styles from './Account.module.css'
import NavBar from './NavBar/NavBar'
import Info from './Info/Info'
import PostsList from './PostsList/PostsList'
import SavedItems from './SavedItems/SavedItems'
import Navigation from '../Navigation/Navigation'
import PostPage from '../PostPage/PostPage'
import useTitle from '../../hooks/useTitle'
const Account = ({themeHandler}) => {
 const {account: accountData, posts: postsData} = useContext(DataContext)
  const [postType, setPostType] = useState('ownPosts')
  const [showPost, setShowPost] = useState(false);
  const [postId, setPostId] = useState('')
  const theme = localStorage.getItem('theme')
  const showPostHandler = (id) => {
    setShowPost(true)
    setPostId(id)
  }
  const closePostHandler = event => {
    if(event.target.classList.contains("postPage")){
      setShowPost(false)
    }
  }
  
  //set Title
  useTitle('Account')
  
  return (
    <section
     className={`${styles.account} ${theme === 'light' ? styles.light : ''}`}
     onClick={closePostHandler}
    >
     <NavBar username={accountData.username} themeHandler={themeHandler}/>
     <Info data={accountData}/>
     <ul className={styles.postType}>
      <li 
       className={postType === 'ownPosts' ? styles.active : ''}
       onClick={() => setPostType('ownPosts')}>
       {postType === "ownPosts" ? <i className="bi bi-image-fill"></i> : <i className="bi bi-image"></i>}
      </li>
      <li 
       className={postType === 'savedPosts' ? styles.active : ''}
       onClick={() => setPostType('savedPosts')}>
       {postType === 'savedPosts' ? <i className="bi bi-bookmark-check-fill"></i> : <i className="bi bi-bookmark-check"></i>}
       </li>
     </ul>
     {
     postType === "ownPosts" ? <PostsList handler={showPostHandler} data={postsData}/>
       : <SavedItems data={postsData} handler={showPostHandler}/>
     }
     
     <Navigation active ="account" />
     {
       showPost ? <PostPage data={postsData} id={postId}/> : ''
     }
    </section>
    )
}

export default Account;