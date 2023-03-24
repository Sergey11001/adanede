import Start from "../pages/Start";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Whitepaper from "../pages/Whitepaper";
import Investors from "../pages/Investors";

export const routes = [
    {
        path: "/",
        element: <Start />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contacts",
        element: <Contacts />
    },
    {
        path: "/whitepaper",
        element: <Whitepaper />
    },
    {
        path: "/projects",
        element: <></>
    },

    {
        path: "/investors/*",
        element: <Investors />
    }
]