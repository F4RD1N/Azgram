import PostCard from '../HomePage/PostCard/PostCard'
import styles from './PostPage.module.css'
const PostPage = ({data, id}) => {
  const theme = localStorage.getItem('theme')
  return (
    <section className={`${styles.postPage} postPage ${theme === 'light' ? styles.light : ''}`}>
     <div className={styles.wrapper}>
     {
       data ? data.map(post => {
         if(post.id === id) {
           return <PostCard data={post} key={post.id}/>
         }
       }) : ''
     }
     </div>
    </section>
    )
}

export default PostPage;