import { useParams } from "react-router-dom"
import Container from "../../components/container/Container"
import { useGetProduct } from "../../components/services/hooks/queries"
import { useShoppingCartContext } from "../../components/context/Context"
import SideBar from "../../components/sideBar/SideBar"


function Product() {
    const { id } = useParams<{ id: string}>()
   


    const { data } = useGetProduct({ id: id as string })

    const {cartItems,handleIncreseProductItem,getProductQty,handleDecreaseProductItems,handleRemoveProduct} = useShoppingCartContext()
    
console.log(cartItems);

    return (
        <div>
            <SideBar/>
                <Container>
            <div className="grid grid-cols-12 shadow-md  mt-6 p-4">
                <div className=" col-span-10 ">
                    <h3 className="font-bold mb-4">{data?.title}</h3>
                    <p> {data?.description}</p>
                </div>
                <div className="col-span-2  ">
                    <img src={data?.image} />

                    <div className="flex justify-between mt-3">
                        <button onClick={()=>handleIncreseProductItem(parseInt(id as string))} className="bg-sky-400 px-3 rounded-md shadow-md font-bold">+</button>
                        <span  className="shadow-md px-4 rounded-md font-bold">{getProductQty(parseInt(id as string))}</span>
                        <button onClick={()=>handleDecreaseProductItems(parseInt(id as string))} className="bg-sky-400 px-3  shadow-md rounded-md font-bold">-</button>
                    </div>
                    <div>
                        <button onClick={()=>handleRemoveProduct(parseInt(id as string))} className="text-gray-50 w-full flex justify-center mt-6 shadow-md rounded-md bg-red-600 font-bold p-1">Remove</button>
                    </div>

                </div>

            </div>
        </Container>
        </div>
    
    )
}

export default Product