import { Route, Routes } from "react-router-dom"
import { routes } from "./components/routes/Routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Layout from "./components/layout/Layout";
import { ShoppingCartContextProvider } from "./components/context/Context";




const queryClient = new QueryClient();



function App() {


  return (
    <ShoppingCartContextProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            {
              routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))
            }
          </Routes>
        </Layout>
      </QueryClientProvider>
    </ShoppingCartContextProvider>



  )
}

export default App
