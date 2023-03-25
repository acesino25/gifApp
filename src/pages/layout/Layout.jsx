import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>
        <form>
            <input type="text"></input>
        </form>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout