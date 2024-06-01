import { createContext, useContext, useState, } from "react";

interface IShoppingCartContextProvider {
    children: React.ReactNode
}

interface ICartItem {
    id: number;
    qty: number;
}

interface IShoppingCartContext {
    cartItems: ICartItem[];
    handleIncreseProductItem: (id: number) => void
    getProductQty: (id: number) => number
    handleDecreaseProductItems: (id: number) => void
    handleRemoveProduct: (id: number) => void
    cartQty: number

}



export const shoppingCartContext = createContext({} as IShoppingCartContext)

export const useShoppingCartContext = () => {

    return useContext(shoppingCartContext);

}


export const ShoppingCartContextProvider = ({ children }: IShoppingCartContextProvider) => {
    const [cartItems, setcartItems] = useState<ICartItem[]>([])



    const handleIncreseProductItem = (id: number) => {
        setcartItems((currentItems) => {
            if (currentItems.find((item) => item.id == id) == null) {
                return [...currentItems, {
                    id,
                    qty: 1
                }]
            } else {
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        }

                    } else {
                        return item;
                    }
                })
            }

        })
    }


    const getProductQty = (id: number) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }




    const handleDecreaseProductItems = (id: number) => {
        setcartItems((currentItems) => {
            if (currentItems.find(item => item.id == id)?.qty === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty - 1
                        }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const handleRemoveProduct = (id: number) => {
        setcartItems(currentItem => currentItem.filter(item => item.id !== id))
    }

    const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)




return (
    <shoppingCartContext.Provider value={{ cartItems, handleIncreseProductItem, getProductQty, cartQty, handleDecreaseProductItems, handleRemoveProduct }}>
        {children}
    </shoppingCartContext.Provider>
)
}