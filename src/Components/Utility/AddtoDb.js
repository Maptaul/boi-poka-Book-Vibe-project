import { toast } from "react-toastify";

const getStoredReadList=()=>{
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr){
        const storedList=JSON.parse(storeListStr)
        return storedList
    }
    else{
        return []
    }

}

const addToStoredReadList = (id)=>{
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'already exits in the read list ')
    }
    else{
        storedList.push(id)
        const storeListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storeListStr)
        toast('This book added to the read list')
    }

}

export {addToStoredReadList, getStoredReadList}