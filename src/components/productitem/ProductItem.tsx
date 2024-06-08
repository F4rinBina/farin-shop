
import { IProduct } from "../types/server"

function ProductItem({image,price,description}:IProduct) {
    return (
        <div>
            
              <div className="shadow col-span-1 hover:shadow-lg cursor-pointer rounded-md">
            <img className="w-full rounded-t-md" src={image}/>


            <div className="flex justify-between p-2 ">
                <p className="font-bold line-clamp-1">{description}</p>
                <p className="font-bold">{price}$</p>
            </div>

        </div>
        </div>
      

    )
}

export default ProductItem