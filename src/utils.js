import axios from "axios";

const sendRequest = async (term)=>{    
    const url = `https://jsonplaceholder.typicode.com/${term}/5`
    const resp = await axios.get(url)
    console.log(resp)
    return resp.data
}

export default sendRequest;