import { Outlet } from "react-router-dom"

const Rootlayout = () => {
    return (
        <> 
        <div className="min-h-screen bg-gray-100">
                <main className="p-4">

                    <Outlet />
                </main>
        </div>
        </>
    )
}

export default Rootlayout