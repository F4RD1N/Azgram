const BASE_URL = './JSON/'
const allData = {
  posts: [],
  stories: [],
  account: [],
  activity: [],
  contacts: [],
  chats: []
}
const apiFiles = ['Posts', 'Stories', 'Account', 'Activity', 'Contacts', 'Chats']
const getJSON = async (path) => {
  try{
  const res = await fetch(`${BASE_URL+path}.json`);
  const data = await res.json();
  allData[path.toLowerCase()] = data;
  }catch(err) {
    window.location.replace('/')
  }
}
apiFiles.map(item => getJSON(item))
export {allData};