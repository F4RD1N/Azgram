import {useState, useRef, useEffect} from 'react'
import {getLs, setLs, removeLs} from '../../../hooks/useLocalStorage'
import {v4} from 'uuid'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './PostCard.module.css'
const PostCard = ({data}) => {
 const theme = localStorage.getItem('theme')
 const [isSaved, setIsSaved] = useState(false)
 const {
    id,
    isVerified,
    type,
    username, 
    accAvatar,
    postUrl, 
    loc, 
    description,
    tags,
    like,
    likersAvatar,
    allComments,
    uploadTime
  } = data
 const perChar = /[\u0600-\u06FF]/;
 const [isLiked, setIsLiked] = useState(false)
 const [isPlaying, setIsPlaying] = useState(false)
 const video = useRef(null)

 const videoControl = () => {
  setIsPlaying(!isPlaying)
  if(isPlaying === false) {
    video.current.play()
  }else {
    video.current.pause()
  }
}

useEffect(() => {
const ls = getLs('savedItems')
  ls.map(item => {
    if(item === id) {
      setIsSaved(true)
    }
  })
}, [])

const addToBookmark = () => {
 setIsSaved(!isSaved)
  if(!isSaved) {
   setLs('savedItems', id)
  }else {
    removeLs('savedItems', id)
  }
}
return(
  <section className={theme === 'light' ? styles.light : ''}>
   <nav className={styles.postNav}>
    <ul className={styles.navItems}>
     <li className={styles.accInfo}>
      <img src={accAvatar} alt="account avatar"/>
      <ul className={styles.userInfo}>
       <li className={styles.username}>{username} 
        <span className={styles.verified}> {isVerified ? <i className="bi bi-patch-check-fill"></i> : ''}</span>
       </li>
       <li className={styles.location}>{loc}</li>
      </ul>
     </li>
     <li className={styles.moreOption}>
      <i className="bi bi-three-dots-vertical"></i>
     </li>
    </ul>
   </nav>
   <figure className={styles.postImage}>
   <span className={styles.likedOverlay}>
    <i className={`${"bi bi-heart-fill"} ${isLiked && styles.activeLiked}`}></i>
   </span>
     {
     type === 'image' ? <LazyLoadImage
      onDoubleClick={() => setIsLiked(true)}
      src={postUrl} alt="post image" /> : <div className={styles.videoWrapper}><video 
            className={styles.video}
            ref={video}
            onClick={videoControl}
            onDoubleClick={() => setIsLiked(true)}
            muted={false}
            autoPlay={false}
            loop={true}
            src={postUrl}>
            </video>{isPlaying === false && <span><i className="bi bi-play-fill"></i></span>}</div>
     }
   </figure>
   <footer className={styles.footer}>
    <ul className={styles.postOption}>
     <li>
      <ul className={styles.postAction}>
       <li
        className={isLiked ? styles.isLiked : ''}
        onClick={() => setIsLiked(!isLiked)}>
       <i className={isLiked ? "bi bi-heart-fill" : "bi bi-heart"}></i></li>
       <li><i className="bi bi-chat"></i></li>
       <li><i className="bi bi-send"></i></li>
      </ul>
     </li>
     <li className={styles.bookmark}
      onClick={addToBookmark}
      ><i className={isSaved ? "bi bi-bookmark-fill" : "bi bi-bookmark"}></i></li>
    </ul>
    <ul className={styles.likes}>
     <li className={styles.likesImage}>
     {
       likersAvatar.map(item => <img src={item} key={v4()} alt="likers avatar"/>)
     }
     </li>
     <li>liked by <span>{like.person}</span> and <span>{like.count} more</span></li>
    </ul>
    <div className={styles.description}>
    <span className={styles.username}>{username}</span>
    <p className={perChar.test(description) ? styles.isPersian : ''}>{description}</p> 
    <br/> <span className={styles.tags}> {tags}</span>
    </div>
    <hr className={styles.breakLine}/>
    <ul className={styles.comments}>
     <li>View all comments <span>({allComments})</span></li>
     <li className={styles.time}>{uploadTime} ago</li>
    </ul>
   </footer>
  </section>
  )
}

export default PostCard;