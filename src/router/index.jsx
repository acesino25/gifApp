// Necesitamos la librería que crea la cascada de direcciones
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Layout from "../pages/layout/Layout";



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
            }
        ]
    }
])