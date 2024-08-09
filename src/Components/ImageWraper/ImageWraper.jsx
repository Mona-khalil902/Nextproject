import product from'../../assets/product.jpg'
import './ImageWraper.css'

function ImageWraper() {

  return (
    <div id='Imagediv'>
        <img src={product} id='photo'/>
    </div>
  )
}

export default ImageWraper