import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import {db} from "../../firebase"
import {query,getDocs,collection,where} from "firebase/firestore"

const Widget = ({type}) => {
    let data;
    const [amount,setAmount]= useState(null);
    const [diff,setDiff]=useState(null);

    

    switch(type){
        case "user":
            data = {
                title:"Users",
                isMoney:false,
                link:"See all users",
                query:"users",
                icon:<PersonOutlineIcon className="icon" 
                style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)"
                }}/>,
            };
            break;
        case "order":
            data = {
                title:"ORDERS",
                isMoney:true,
                link:"View all orders",
                icon:<ShoppingCartOutlinedIcon className="icon" 
                style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
                }}/>,
            };
            break;
        case "earning":
            data = {
                title:"EARNINGS",
                isMoney:true,
                link:"View net earnings",
                icon:<MonetizationOnOutlinedIcon className="icon" 
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>,
            };
            break;
        case "product":
            data = {
                title:"PRODUCTS",
                query:"products",
                link:"See details",
                icon:<AccountBalanceWalletOutlinedIcon className="icon" 
                style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
                }}/>,
            };
            break;
            default:
                break;
    }

    useEffect(()=>{
        const fetchData = async()=>{
            const today = new Date();
            const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
            const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
            
            const lastMonthQuery = query(collection(db,data.query),where("timestamp","<=",today),where("timestamp",">",lastMonth));
            const prevMonthQuery = query(collection(db,data.query),where("timestamp","<=",lastMonth),where("timestamp",">",prevMonth));

            const lastMonthData = await getDocs(lastMonthQuery);
            const prevMonthData = await getDocs(prevMonthQuery);

            setAmount(lastMonthData.docs.length);
            if (prevMonthData.docs.length === 0) {
            setDiff(0); 
            } else {
            setDiff(
                (lastMonthData.docs.length - prevMonthData.docs.length) /
                prevMonthData.docs.length *
                100
            );
            }
        };
        fetchData();
    },[data.query]);

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className={`precentage ${diff < 0 ? "negative" :"positive" }`}>
                {diff < 0 ? <KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
                {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget