import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const{dispatch}=useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <Link to={"/"} style={{textDecoration:"none"}}>
            <div className='top'><span className='logo'>lamaadmin</span></div>
        </Link>
        <hr/>
        <div className='center'>
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
            </ul>
            <ul>
                <li>
                    <PersonOutlineIcon className="icon"/>
                    <Link to={"/users"} style={{textDecoration:"none"}}>                  
                        <span>Users</span>
                    </Link>
                    
                </li>
            </ul>
            <ul>
                <li>
                    <LocalShippingIcon className="icon"/>
                    <Link to={"/products"} style={{textDecoration:"none"}}>
                        <span>Products</span>
                    </Link>
                    
                </li>
            </ul>
            <ul>
                <li>
                    <CreditCardIcon className="icon"/>
                    <span>Orders</span>
                </li>
            </ul>
            <ul> 
                <li>
                    <StoreIcon className="icon"/>
                    <span>Delivery</span>
                </li>
            </ul>
            <ul>
                <p className="title">USEFUL</p>
                <li>
                    <InsertChartIcon className="icon"/>
                    <span>Stats</span>
                </li>
            </ul>
            <ul>
                
                <li>
                    <SettingsApplicationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
            </ul>
            <ul>
                <p className="title">SERVICE</p> 
                <li>
                    <ExitToAppIcon className="icon"/>
                    <span>System Health</span>
                </li>
            </ul>
            <ul>
                <li>
                    <NotificationsNoneIcon className="icon"/>
                    <span>Logs</span>
                </li>
            </ul>
            <ul>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
            </ul>
            <ul>
                <p className="title">USER</p>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
            </ul>
            <ul>
                <li>
                    <AccountCircleOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar