import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <>
            <div>RootLayout</div>
            <Outlet />
            <footer>Footer</footer>
        </>
        
    )
}

export default RootLayout