import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productitem/ProductItem"
import { useGetProducts } from "../../components/services/hooks/queries"
import Spinner from "../../components/spinner/Spinner"
import SideBar from "../../components/sideBar/SideBar"



function Store() {
  const { data, isLoading } = useGetProducts()

  return (
    <div>
    <SideBar/>

      <Container>
        
        {
          isLoading ? <div className="flex justify-center items-center fixed w-full h-full top-0 left-0 bg-white opacity-65">
            <Spinner />
          </div>
            : <div className="grid grid-cols-4 gap-4 mt-9">
              {
                data?.map((item) => (
                  <Link to={`/product/${item.id}`} key={item.id}>
                    <ProductItem   {...item} /> </Link>
                    

                ))
              }




            </div>
        }

      </Container>
    </div>

  )
}

export default Store