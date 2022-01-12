import styles from './AddPage.module.css'
import Navigation from '../Navigation/Navigation'
import useTitle from '../../hooks/useTitle'
const AddPage = () => {
  
  //set useTitle
  useTitle('Add')
  return (
    <section className={styles.addPage}>
     not available yet!
     <Navigation active="add" />
    </section>
    )
}

export default AddPage;