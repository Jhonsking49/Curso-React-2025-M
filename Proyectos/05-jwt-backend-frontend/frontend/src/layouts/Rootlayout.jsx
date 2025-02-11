import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const Rootlayout = () => {
    return (
        <> 
        <div className="min-h-screen bg-gray-100">
            <Navbar >
                <main className="p-4">

                    <Outlet />
                </main>
            </Navbar>
        </div>
        </>
    )
}

export default Rootlayout