import Swal from "sweetalert2";

const toGetData = () => {
    const isData = localStorage.getItem("appList")
    return isData ? JSON.parse(isData) : [];
}

const addToStore = (id) => {

    const storeData = toGetData()
    if (storeData.includes(id)) {
        Swal.fire({
            text: "Already installed it?",
            icon: "error"
        })
        return
    }
    storeData.push(id);
    const data = JSON.stringify(storeData)
    localStorage.setItem("appList", data)
    Swal.fire({
        title: "Good job!",
        text: "installed app successfully!",
        icon: "success"
    });
}

export { toGetData, addToStore }