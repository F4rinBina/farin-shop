import CartItem from "../cartItem/cartItem";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/Context";
import SideBar from "../sideBar/SideBar";

function Cart() {
  const { cartItems } = useShoppingCartContext()
  return (
    <div>
      <SideBar/>
      <Container>
        <div>
          {
            cartItems.map((item) => (
              <CartItem {...item} />
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Cart
