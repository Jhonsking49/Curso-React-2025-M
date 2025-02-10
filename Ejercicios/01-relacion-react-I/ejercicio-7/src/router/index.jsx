import Rootlayout from "../layouts/Rootlayout";
import Errorpage from "../pages/Errorpage";
import Homepage from "../pages/Homepage";
import Searchpage from "../pages/Searchpage";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Rootlayout />,
        error: <Errorpage />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'search',
                element: <Searchpage />,
            }
        ]
    }
])