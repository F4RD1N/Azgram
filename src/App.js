import React, {useEffect, useState} from 'react'
import {getJSON} from './services/api'
import {Routes, Route, Navigate} from 'react-router-dom'
import Loading from './components/LoadingPage/Loading'
import HomePage from './components/HomePage/HomePage'
import Account from './components/Account/Account'
import SearchPage from './components/SearchPage/SearchPage'
import ActivityPage from './components/ActivityPage/ActivityPage'
import AddPage from './components/AddPage/AddPage'
import AllChatsPage from './components/AllChatsPage/AllChatsPage'
import NewChatPage from './components/NewChatPage/NewChatPage'
import MessagePage from './components/MessagePage/MessagePage'
import StoryPage from './components/StoryPage/StoryPage'
export const DataContext = React.createContext()
export const ThemeContext = React.createContext()
const App = () => {
  const [data, setData] = useState({
    posts: [],
    stories: [],
    account: {},
    explore: [],
    activity: [],
    contacts: [],
    chats: []
  })
 useEffect(() => {
  const getDatas = async () => {
   try{
   //get posts
   const resPost = await fetch("./JSON/Posts.json")
   const dataJSONPost = await resPost.json()
   
   //get stories
   const resStory = await fetch("./JSON/Stories.json")
   const dataJSONStory = await resStory.json()
   
   //get account
   const resAccount = await fetch("./JSON/Account.json")
   const dataJSONAccount = await resAccount.json()
   
   //get Activity
   const resActivity = await fetch("./JSON/Activity.json")
   const dataJSONActivity = await resActivity.json()

   //get Contacts
   const resContacts = await fetch("./JSON/Contacts.json")
   const dataJSONContacts = await resContacts.json()
   
   //get chats
   const resChats = await fetch("./JSON/Chats.json")
   const dataJSONChats = await resChats.json()
   
   //set to state
   setData(
     {
       ...data, 
       posts: dataJSONPost,
       stories: dataJSONStory,
       account: dataJSONAccount,
       activity: dataJSONActivity,
       contacts: dataJSONContacts,
       chats: dataJSONChats
     })
   }catch(err) {
    window.location.replace('/')
   }
 }
 getDatas()
 }, [])
 //set Theme
 const [theme, setTheme] = useState('dark')
 
 const changeThemeHandler = () => {
   if(theme === 'dark') setTheme('light');
   else setTheme('dark')
   localStorage.setItem('theme', theme)
 }
 useEffect(() => {
   const body = document.body;
   const themeMode = localStorage.getItem('theme')
   if(themeMode === 'light') {
     body.classList.add('light')
   }else {
     body.classList.remove('light')
   }
 },[theme])
 
 //set Loading
 const [isLoaded, setIsLoaded] = useState(false);
 document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    setIsLoaded(true)
  }
}
 
 
 //prevent right click
document.addEventListener('contextmenu', event => event.preventDefault());

  return (
    <>
    {
    !isLoaded ? <Loading /> : ''
    }
  <DataContext.Provider value={data}>
     <ThemeContext.Provider value={theme}>
     <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route path="/account" element={ <Account themeHandler={changeThemeHandler} /> } />
      <Route path="/explore" element={<SearchPage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/add" element={<AddPage /> } />
      <Route path="/chats" element={<AllChatsPage />} />
      <Route path="/newchat" element={<NewChatPage />} />
      <Route path="/message/:id" element={<MessagePage />} />
      <Route path="/message" element={<Navigate to="/chats" />}/>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/story/:id" element={<StoryPage />} />
     </Routes>
    </ThemeContext.Provider>
   </DataContext.Provider>
    </>
    )
}

export default App;