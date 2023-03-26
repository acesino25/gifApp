import { Outlet } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"

const Layout = () => {
  return (
    <div>
        <SearchBar></SearchBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout