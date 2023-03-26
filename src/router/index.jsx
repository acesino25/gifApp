// Necesitamos la librería que crea la cascada de direcciones
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/layout/Layout";
import ResultsPage from "../pages/ResultsPage";



export const router = createBrowserRouter([
    {
        path: '/',
        // Pasamos la plantilla principal
        element: <Layout></Layout>,
        // Pasamos los children
        // Es el index?
        // Entonces:
        // index: true
        // element: pasamos el element
        //
        // ¿NO ES?
        //
        // el children siempre tendrá
        // path:
        // element: 
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                // Especificamos que pasaremos un parametro
                // si necesitamos más los separamos con slashes
                path: '/buscar/:buscar',
                element: <ResultsPage></ResultsPage>
            }
        ]
    }
])