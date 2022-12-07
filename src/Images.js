import './Images.css'
import Image from './components/Image';

const Images = ({images})=> { 
   
   const imgFabric = images.map((img)=>{
    // console.log("---",img)
    return (
      // let op: in wrapper img.id if you need wrapper for <Image>
      <div key={img.id}>
      <Image image={img} />
      </div>
    )
   })

  return (
  <div className="image-list">
    
    <div>
        {imgFabric}
    </div>
   
  </div>
  )   
}
export default Images;
