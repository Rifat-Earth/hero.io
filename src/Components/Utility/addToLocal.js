const toGetData =()=>{
    const isData = localStorage.getItem("appList")
    return isData?JSON.parse(isData): [] ;
}

const addToStore =(id)=>{

    const storeData = toGetData()
    storeData.includes(id)? alert("already added this app"):storeData.push(id);
     
    const data = JSON.stringify(storeData)
    localStorage.setItem("appList",data)
}

export {toGetData,addToStore}