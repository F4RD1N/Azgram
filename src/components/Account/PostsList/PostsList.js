import styles from './PostsList.module.css'
const PostsList = ({handler, data}) => {
  return (
    <figure className={styles.postsList}>
    {
    data ? data.map(post => {
     if(post.own){
      return (<img 
       onClick={() => handler(post.id)}
       src={post.postUrl} 
       key={post.id}
       alt="posts thumbnail"/>)
     }
    }) : ''
    }
    </figure>
    )
}

export default PostsList;