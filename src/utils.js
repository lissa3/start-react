// import axios from "axios";
import photos from './photos.json'

const helpFunc = ()=>{
    return photos
}
 
const sendRequest = async (term)=>{      
    // real API call async-await 
    
    let imgList = await(helpFunc())    
    return  imgList
       
    // const url = `https://some-url-unsplash.com`
    // const resp = await axios.get( url,
    //     {headers:{ Authorization:'Client-ID abcd123'},
    //     params:{query:term}}
    // )
    // return resp.data.results    
}

export default sendRequest;