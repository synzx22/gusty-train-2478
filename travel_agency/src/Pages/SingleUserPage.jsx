import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import {Link} from "react-router-dom"

const getdata = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleUserPage = () => {
  const [err, SetErr] = useState(false);
  const [res, setRes] = useState({});
  const { user_id } = useParams();
  console.log(user_id);


  const fetchdata = async () => {
    try {
      let data = await getdata(`http://localhost:3000/products/${user_id}`);
      setRes(data);
    } catch (error) {
      console.log(error)
    }
  };

   const alertFunction = ()=>{
    alert("Ticket Has Been Booked")
   }


  useEffect(() => {
    fetchdata(user_id);
  }, [user_id]);

  return (
    <div>
    <div
      style={{
        widht: "90%",
        height: "500px",
        display: "flex",
        position: "relative",
      }}
    >
      <div style={{width: "30%",}}>
      <img style={{width: "100%", height: "400px", marginLeft: "200px", marginTop: "50px"}} src={res?.image} alt={res?.category} />
      </div>

      <div style={{marginLeft: "250px", width: "700px", height: "400px", marginTop: "50px", position: "relative"}}>
      <Link to="/destination"><button style={{position: "absolute", widht: "250px",backgroundColor: "#FF6F00",color: "white",borderRadius: "10px",marginRight: "-230px",top : "203px",fontFamily: "sans-serif", fontWeight: "700", fontSize: "25px", border: "1px solid black", paddingLeft: "30px", paddingRight: "30px"}} >CANCEL BOOKING</button> </Link>
        
      <p style={{marginRight: "490px", marginTop: "40px", fontWeight: "700"}}><span style={{fontFamily: "sans-serif", fontWeight: "700", fontSize: "25px"}}>Name :   </span><span style={{color: "Orange",marginLeft: "10px", fontSize: "25px"}}>{res?.category}</span></p>
      <p style={{marginRight: "480px", marginTop: "10px",fontWeight: "700"}}><span style={{fontFamily: "sans-serif", fontWeight: "700", fontSize: "25px"}}>Price : </span><span style={{color: "Orange",marginLeft: "10px", fontSize: "25px"}}>$ {res?.price}</span></p>
      <p style={{marginRight: "490px", marginTop: "10px",fontWeight: "700"}}><span style={{fontFamily: "sans-serif", fontWeight: "700", fontSize: "25px"}}>Rating : </span><span style={{color: "Orange",marginLeft: "10px", fontSize: "25px"}}>✰ {res?.rating?.rate}</span></p>

      <br />
      <button style={{ widht: "250px",backgroundColor: "#FF6F00",color: "white",borderRadius: "10px",marginRight: "380px",fontFamily: "sans-serif", fontWeight: "700", fontSize: "25px", border: "1px solid black", paddingLeft: "30px", paddingRight: "30px"}} onClick={alertFunction}>TICKET BOOKING</button> 
      
      <br />
      <br />
      <p><span style={{fontFamily:"sans-serif", fontWeight: "700", fontSize: "20px",}}>More Info:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, voluptate atque reiciendis provident soluta consequuntur at veritatis? Aliquam impedit quaerat quos ab corporis molestiae, illo esse quo totam hic mollitia voluptatem. Assumenda voluptate aut earum! Eaque consectetur quibusdam maiores. Cumque eaque neque quod accusamus! Fuga ipsa odit atque eaque adipisci!</p>

      
      </div>

      

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
    
    <br/>
     <Footer/>

    </div>
  );
};

export default SingleUserPage;
