import {useState, useEffect} from 'react'
import {getLs} from '../../../hooks/useLocalStorage'
import styles from '../PostsList/PostsList.module.css'
const SavedItems = ({data, handler}) => {
const [savedItems, setSavedItems] = useState([])

useEffect(() => {
    setSavedItems(getLs('savedItems'))
  }, [])
  
    return (
    <figure className={styles.postsList}>
    {
    data ? data.map(post => {
     return savedItems.map(item => {
       if(post.id === item){
        if(post.type === 'image'){
         return (<img 
          onClick={() => handler(post.id)}
          src={post.postUrl} 
          alt="saved posts thumbnail"
          key={post.id}/>)
        }else {
           return(<video 
            onClick={() => handler(post.id)}
            key={post.id}
            muted={true}
            autoPlay={false}
            loop={true}
            src={post.postUrl}>
           </video>)
        }
       }
     })
    }) : ''
    }
    </figure>
    )
}

export default SavedItems;