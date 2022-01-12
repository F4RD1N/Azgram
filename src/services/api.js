const BASE_URL = './JSON/'
const allData = {}
const apiFiles = ['Posts', 'Stories', 'Account', 'Activity', 'Contacts', 'Chats']
const getJSON = async (path) => {
  const res = await fetch(`${BASE_URL+path}.json`)
  const data = await res.json()
  allData[path] = data
}
apiFiles.map(item => getJSON(item))
console.log(allData)
export {getJSON};