import Body from "./components/Body";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import InstrumentCables from "./components/InstrumentCables";
import CustomCables from "./components/CustomCables";
import PatchCables from "./components/PatchCables";

const AppLayout = () => {
    return (
        <div className="flex-1 items-center">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
};

const appRouter = createBrowserRouter([{
    path: "/",
    element: <AppLayout/>,
    children: [
        {
            path: "/",
            element: <Body/>,
            children: [
                {
                    path: "/instrument-cables",
                    element: <InstrumentCables />
                },
                {
                    path: "/custom-cables",
                    element: <CustomCables />
                },
                {
                    path: "/patch-cables",
                    element: <PatchCables />
                }
            ]
        },

    ],
    
    errorElement: <Error/>
},
])

export {
  appRouter,
}