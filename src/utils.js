import axios from "axios";

const sendRequest = async (term)=>{    
    const url = `https://jsonplaceholder.typicode.com/${term}/5`
    const resp = await axios.get(url)
    console.log(resp)
    return resp.data
}

const loginAPI = async (email,psw)=>{
    console.log("util here; params:",email,psw)
    // const url = `https://some-url-of-the-server`
    // await axios.post(url,{email,psw})
    // .then((resp)=>{
    //     console.log(resp)
    //     return resp.data

    // })
    // .catch ((err)=>{
    //     console.log(err)
    // })
}

export {sendRequest,loginAPI};