import { useEffect, useState } from "react";
import Footer from "../component/Footer"
import {Link} from "react-router-dom"
const ApiUrl = (filterByCategory,orderBy) => {

    let url=`https://tavel-agency-ba6u.onrender.com/products` ;
     
   let filterdata=`category=${filterByCategory}`
     const sort = "price"

    if (filterByCategory) {
     return (url =`${url}?${filterByCategory?filterdata:""}`);
   }
    else if(orderBy){
      return (url = `${url}?&_sort=${sort}&_order=${orderBy}`)
    }
   
   else{
    return `https://tavel-agency-ba6u.onrender.com/products`
   }
  
  };

function Destination(){
    const [data, setdata] = useState([]);
    const [filterByCategory, setfilterByCategory] = useState("");
   const [orderBy, setorderBy] = useState("")

  const sort = "price"



    const fetchdata = async(filterByCategory) => {
        const formApi = ApiUrl(
          filterByCategory,
          orderBy,
          sort
        );
    
        try {
          const res = await fetch(formApi);
          const data = await res.json();
          setdata(data);
          console.log(data);
          console.log(res)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchdata(filterByCategory);
      }, [filterByCategory,orderBy, sort]);
    
    
  
    return(

          

        <div >

            <div>
                <img style={{widht: "1000px", height: "400px", margin: "auto", marginTop: "30px"}} src="https://www.shutterstock.com/image-vector/travel-banner-landmarks-airplane-around-260nw-1025799550.jpg" alt="" />
            </div>


            <div style={{width:"500px",marginLeft: "550px", marginTop: "30px" }}>
            <select style={{border: "1px solid white", width: "200px", height: "40px", fontSize: "18px", backgroundColor: "#FF6F00", borderRadius: "5px", color: "white", fontFamily:"sans-serif", fontWeight: "700"}}
            className="filter-by-category"
            value={filterByCategory}
            onChange={(e) => setfilterByCategory(e.target.value)}
          >
            <option value="all" onClick={()=>setfilterByCategory("")} style={{marginTop: "20px"}}>All Categories</option>
            <option value="INDIA">India</option>
            <option value="DUBAI">Dubai</option>
            <option value="JAPAN">Japan</option>
            <option value="USA">USA</option>
          </select>
          <button style={{marginLeft: "20px", border: "1px solid", fontSize: "18px", paddingLeft: "10px",paddingRight: "10px",marginleft: "10px",backgroundColor: "#FF6F00", borderRadius: "5px", color: "white", fontFamily:"sans-serif", fontWeight: "700"}} onClick={()=>setfilterByCategory("")}>Reset</button>
            
             
             
            
            </div>




            <div style={{marginLeft: "510px", width: "650px",marginTop: "10px",}}>
            <button onClick={()=>{
              setorderBy("asc")
              console.log(orderBy)
            }} style={{margin: "auto",border: "1px solid white",borderRadius: "10px", marginRight: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#FF6F00",color: "white", fontFamily:"sans-serif", fontWeight: "700"}}
              >Price: Acsending</button>
            <button onClick={()=>setorderBy("desc")} style={{margin: "auto",border: "1px solid white",borderRadius: "10px", marginRight: "10px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#FF6F00",color: "white", fontFamily:"sans-serif", fontWeight: "700"}}>Price: Descending</button>
            <button onClick={()=>setorderBy("")} style={{margin: "auto",border: "1px solid white",borderRadius: "10px", marginRight: "100px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#FF6F00",color: "white", fontFamily:"sans-serif", fontWeight: "700"}}>Reset all</button>
          </div>



            <div style={{ display: "grid",   gridTemplateColumns: "repeat(3, 1fr)", marginTop: "20px",paddingBottom: "40px"}}>
         {data.map((e) => (
            <div key={e.id} style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src={e.image} alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A" }}>{e.category}</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>${e.price}</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ {e.rating.rate}</p>
              <Link style={{ fontWeight: "700",width: "120px",marginTop: "20px",marginLeft: "10px",display: "block", fontSize: "20px",color: "#FF6F00", border: "2px solid #FF6F00",borderRadius: "15px",}} to={`/destination/${e.id}`}>BOOK →</Link>
            </div>
            
          ))}
          </div>

          <div style={{ width: "70%", height: "300px", marginTop: "70px", position: "relative", marginLeft: "15%"}}>
            <img style={{width: "100%", height: "300px"}} src="https://c4.wallpaperflare.com/wallpaper/156/586/511/tower-city-tourist-attraction-tower-block-wallpaper-preview.jpg" alt="" />
           <h1 style={{postion: "absolute",Bottom: "-100px"}}></h1>
           <div style={{width: "55%", margin: "auto", position: "absolute", marginLeft: "250px",bottom: "220px",}}>
              <div style={{width: "90%", margin: "auto", paddingLeft: "30px", paddingRight: "30px",paddingTop: "40px"}}>
              <h1 style={{ fontFamily: "sans-serif",lineHeight: "35px", fontSize: "30px",fontWeight: "700", color: "grey" }}><span style={{color: "orange"}}>Subscribe</span> <span style={{color: "black"}}>And Be</span> <span style={{color: "orange"}}>Updated</span> </h1>
              </div>
              <div style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",borderRadius: "20px",width: "100%", margin: "auto", position: "absolute", marginLeft: "20px",bottom: "-140px", backgroundColor: "white"}}>
              <div style={{width: "100%", margin: "auto",paddingTop: "20px",paddingBottom: "20px"}}>
              <h1 style={{ fontFamily: "sans-serif",lineHeight: "35px", fontSize: "17px", color: "grey" }}>
                Enter Your E-Mail and Get All Laterst Update 
                <button style={{border: "1px solid black", marginLeft: "100px", borderRadius: "20px", paddingLeft: "15px", paddingRight: "15px", backgroundColor:"#FF6F00", color: "white", fontFamily: "sans-serif", fontWeight: "700",}}>Subscribe</button>
              </h1>
              </div>
          </div>
          </div>
          </div>
          
          <div style={{paddingTop: "40px"}} >
          <Footer/>
          </div>
        </div>
    )
}

export default Destination