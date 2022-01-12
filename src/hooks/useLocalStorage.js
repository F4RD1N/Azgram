export const getLs = name => {
   let savedItems;
   let LS = localStorage.getItem(name)
   if(!LS){
     savedItems = []
   }else {
     savedItems = JSON.parse(LS)
   }
   return savedItems;
 }
 
 export const setLs = (name, value) => {
   const savedItems = getLs(name)
   savedItems.push(value)
   localStorage.setItem(name, JSON.stringify(savedItems))
 }
 
 export const removeLs = (name, value) => {
   const savedItems = getLs(name)
   savedItems.forEach((item, index) => {
     if(item === value) {
       savedItems.splice(index, 1)
     }
   })
   localStorage.setItem(name, JSON.stringify(savedItems))
 }