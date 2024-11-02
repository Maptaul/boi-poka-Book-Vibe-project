const getStoredWishList=()=>{
    const storeListStr = localStorage.getItem('wish-list');
    if(storeListStr){
        const storedList=JSON.parse(storeListStr)
        return storedList
    }
    else{
        return []
    }

}

const addToStoredWishList = (id)=>{
    const storedList = getStoredWishList();
    if(storedList.includes(id)){
        console.log(id, 'already exits in the read list ')
    }
    else{
        storedList.push(id)
        const storeListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storeListStr)
    }

}

export {addToStoredWishList, getStoredWishList }