

import Container from "../container/Container";

import { useShoppingCartContext } from "../context/Context";

import { useGetProduct } from "../services/hooks/queries";
import SideBar from "../sideBar/SideBar";

interface ICartItem {
  id: number | string,
  qty: number
}

function CartItem({ id, qty }: ICartItem) {
  const { handleIncreseProductItem, handleRemoveProduct, handleDecreaseProductItems } = useShoppingCartContext()

  console.log(id);



  const { data } = useGetProduct({ id: id as string })

  console.log(data);

  return (
    <div>
      <SideBar/>

      <Container>
        <div className="border-b p-2 flex flex-row-reverse mt-4 border-r-2 ">
          <div >
            <img className="h-60  " src={data?.image} />
            <p>{data?.title}</p>
          </div>
          <div className="mt-20 mr-4">
            <button onClick={() => { handleRemoveProduct(parseInt(id as string)) }} className="bg-red-600 w-24 p-2 rounded-md">remove</button>
            <button onClick={() => { handleIncreseProductItem(parseInt(id as string)) }} className="bg-cyan-600 w-16 ml-3 p-1 rounded-md">+</button>
            <span className="m-4 shadow-md p-2 rounded-full">{qty}</span>
            <button onClick={() => { handleDecreaseProductItems(parseInt(id as string)) }} className="bg-cyan-600 w-16 p-1 rounded-md">-</button>
          </div>

        </div>


      </Container>
    </div>
  )
}

export default CartItem

