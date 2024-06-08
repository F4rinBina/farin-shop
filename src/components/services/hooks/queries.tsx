
import { getProduct, getProducts } from "../api/queries"
import { IProduct } from "../../types/server"
import { useQuery } from "@tanstack/react-query"


export const useGetProducts = () => {
    return useQuery<IProduct[]>({
        queryKey: ["getProducts"],
        queryFn: getProducts
    })
};


export const useGetProduct = ({ id }: { id: string }) => {
    return useQuery<IProduct>({
        queryKey: ["getProduct"],
        queryFn: () => getProduct({ id })
    })
}









   







// export const useGetProducts = () => {
//     const [data, setData] = useState<([])
//     const [IsLoding, setIsLoding] = useState(false)

//     useEffect(() => {
//         setIsLoding(true)
//         getProducts().then(res => {
//             setIsLoding(false)
//             setData(res)
//         })
//     }, [])

//     return { data, IsLoding };
// }