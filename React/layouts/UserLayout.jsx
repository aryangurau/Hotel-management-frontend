import { Link, Outlet } from "react-router-dom"

const UserLayout = () => {
  return (
    <div>
        <ul>
        <li> <Link to={"/"}> Home</Link> </li>
        <li><Link to={"/contact"}> Contact</Link></li>
        <li><Link to={"/about"}> About</Link></li>
    </ul>
    <div>
        <Outlet/>
    </div>
    </div>
  )
}

export default UserLayout
