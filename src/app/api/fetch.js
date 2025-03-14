export const fetchApi = async (url) => {
    try{
        const responses = await fetch(url);
        const datas = await responses.json()
        // console.log(datas)
        return datas
    }catch(error){
        console.error("ERROR: ", error);
        return error
    }
}