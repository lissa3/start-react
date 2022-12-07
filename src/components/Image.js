import '../App.css'


const Image = ({image})=> {  
//  console.log("fimal",image)
  return (
  <div className="">
   <img src={image.thumbnailUrl} alt="go" />
  </div>
  )   
}
export default Image;
