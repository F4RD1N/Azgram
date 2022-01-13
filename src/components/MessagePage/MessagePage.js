import {useRef, useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {MainContext} from '../../context/ContextProvider'
import styles from './MessagePage.module.css'
import NavBar from './NavBar'
import TextBox from './TextBox/TextBox'
import Sender from './MessageBox/Sender'
import Reciver from './MessageBox/Reciver'
const MessagePage = () => {
  const params = useParams()
  const container = useRef(null)
  const date = new Date()
  const time = date.toLocaleTimeString('en-GB').slice(0,5)
  const [message, setMessage] = useState('')
  const [senderAllMessage, setsenderAllMessage] = useState([])
  const [connection, setConnection] = useState(true)
  const [data, setData] = useState({})
  const {chats: chatsData} = useContext(MainContext)
  const theme = localStorage.getItem('theme')
  useEffect(() => {
    if(!chatsData) return;
     chatsData.map(item => {
      if(item.id === params.id) {
        setData(item)
      }
    })
  },[])
  window.ononline = () => setConnection(true)
  window.onoffline = () => setConnection(false)
  const sendMessageHandler = () => {
    if(!message) return;
      setsenderAllMessage([...senderAllMessage, {
        body: message,
        time: time,
        status: connection,
      }])
      setMessage('')
     window.scrollTo(0,container.current.scrollHeight);
  }
  
  return(
    <>
    <NavBar data={data}/>
    <section 
     ref={container}
     className={`${styles.messagePage} ${theme === 'light' ? styles.light : ''}`}>
    <TextBox
     message={message} 
     setMessage={setMessage}
     sendHandler={sendMessageHandler}/>
     <section
      className={styles.messagesWrapper}>
      {
        data.messages ? data.messages.map(item => item.type === 'he' ? <Reciver data={item} key={item.id} /> : <Sender data={item} key={item.id}/> ) : ''
      }
      {
        senderAllMessage.map(item => {
         return <Sender data={item} />
        })
      }
     </section>
    </section>
    </>
    )
}

export default MessagePage;