
import "./Home.css"
import Footer from "../component/Footer";
import {Link} from "react-router-dom"
function Home(){
    return(
        <div className="head">
          <div className="banner">
            <img src="https://img.freepik.com/free-vector/realistic-travel-agency-template-design_23-2149340532.jpg?size=626&ext=jpg" alt="" />
            
          </div>

          <div className="dest">
          <h1 style={{paddingBottom: "20px",marginTop: "20px"}}>Explore Top Destination</h1>
          {/* <p className="p1">If you take any of our booking service here</p>
          <p className="p2"> you take all kinds of benifits from us.</p> */}
          <p style={{fontFamily: "sans-serif", color: "grey"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quibusdam architecto temporibus commodi 
           <br /> <span style={{marginRight: "65px"}}>quaerat voluptas. Fugiat ducimus minus tempora hic. voluptas. Fugiat ducimus minus tempora hic.</span> 
          </p>
          <Link to="/destination"> <button style={{marginLeft: "-300px",border: "2px solid #FF6F00", paddingRight: "20px", paddingLeft: "20px",paddingTop: "10px",paddingBottom: "10px",fontSize: "18px", backgroundColor:"#FF6F00", color: "white", marginTop: "20px", borderRadius: "10px"}}>Learn More</button></Link>

          </div>

          <div style={{ display: "grid",   gridTemplateColumns: "repeat(3, 1fr)", marginTop: "20px"}} >
          <div  style={{ backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Nara1.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>USA</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
             
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          <div  style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2016/11/Udaivilas-romantic-400x250.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>JAPAN</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
              
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          <div  style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Romantic-Places-In-New-York-Cover-400x267.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>USA</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
              
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          <div  style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Nara1.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-240px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>CANADA</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
             
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          <div  style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2018/02/Kyoto1.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>INDIA</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
              
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          <div  style={{backgroundColor: "#EFEBE9",borderRadius: "20px",  margin: "auto", width: "370px", marginTop: "30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: "10px"}}>
              <img src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Cover-Japan-Road-Trips0310.jpg' alt="notLoaded" style={{width: "100%",height:"260px", borderRadius: "20px"}} />
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "-270px",height: "20px", marginTop: "20px", fontSize: "20px",color: "#26A69A", }}>ITELY</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "29px", fontSize: "20px", paddingBottom: "10px",color: "#26A69A" }}>$ 180000</p>
              <p style={{fontFamily:"sans-serif" ,fontWeight: "700",marginLeft: "220px", marginTop: "-90px", fontSize: "20px",color: "#FF6F00" }}>✰ 4.5</p>
              
              <button style={{marginLeft:"10px",display: "block", margin: "20px", fontSize: "20px",color: "#FF6F00", border: "1px solid #FF6F00", paddingLeft: "15px",paddingRight: "15px",borderRadius: "15px", fontFamily: "sans-serif", fontWeight: "700"}}>BOOK →</button>
          </div>
          </div>


          <div style={{display: "flex",  width: "70%", margin: "auto", paddingTop: "60px"}}>
            <div style={{marginTop: "60px",border: "2px solid #FBC02D", borderRadius: "10px", paddingLeft: "20px", paddingRight: "20px", margin: "auto"}}>
              <h1 style={{color : "#FF6F00"}}>40K</h1>
              <h2 style={{fontWeight: 700}}>Destination Tourism</h2>
            </div>
            <div style={{marginTop: "60px",border: "2px solid #FBC02D", borderRadius: "10px", paddingLeft: "20px", paddingRight: "20px", margin: "auto"}}>
              <h1 style={{color : "#FF6F00", fontSize: "17px"}}>40K</h1>
              <h2 style={{fontWeight: 700}}>Happy Costumer </h2>
            </div>
            <div style={{marginTop: "60px",border: "2px solid #FBC02D", borderRadius: "10px", paddingLeft: "20px", paddingRight: "20px", margin: "auto"}}>
              <h1 style={{color : "#FF6F00"}}>40K</h1>
              <h2 style={{fontWeight: 700}}>Tourist Compeiton</h2>
            </div>

            
          </div>
          
          <div style={{width: "60%", display: "flex", paddingTop: "60px", margin: "auto", }}>
              <div style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",width:"700px", height: "300px", borderRadius: "10px"}}>
                <h1 style={{fontSize: "29px", fontWeight: "700",color:"#FF6F00",marginRight: "200px"}}>Why Choose Us</h1>
                <p style={{marginLeft:"-5px",color:"grey", marginTop: "22px", fontSize: "20px"}}>Lorem ipsum dolor sit amet, consectetur <br></br> Maiores molestiae consequatur deserunt deleniti magni incidunt fugit ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. In, animi.</p>
                <button style={{marginLeft: "-300px",border: "2px solid #FF6F00", paddingRight: "20px", paddingLeft: "20px",paddingTop: "10px",paddingBottom: "10px",fontSize: "18px", backgroundColor:"#FF6F00", color: "white", marginTop: "20px", borderRadius: "10px"}}>Learn More</button>
                
              </div>
              <div style={{width:"700px", height: "300px"}}>
                <img style={{width: "100%", borderRadius: "10px"}} src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/09/aquaventure-parmk1-400x266.jpg" alt="" />
              </div>
            </div>

            
            <div style={{ width: "80%",height: "600px", margin: "auto", marginTop: "40px", display: "flex"}}>

            <div style={{ width: "30%",margin: "auto", height: "530px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
            <img style={{width: "100%", height: "450px"}} src="https://c1.wallpaperflare.com/preview/817/353/143/barack-obama-diplomatic-visit-photos-indonesia.jpg" alt="" />
            <button style={{fontWeight: "700",border: "1px solid black", backgroundColor: "#FF6F00",borderRadius: "10px" ,paddingLeft: "25px", paddingRight: "25px",paddingTop: "10px",paddingBottom: "10px", color: "white", marginTop:"15px"}}>England</button>
            </div>
            <div style={{ width: "30%",margin: "auto", height: "530px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
            <img style={{width: "100%", height: "450px"}} src="https://c1.wallpaperflare.com/preview/29/836/917/disney-world-magic-kingdom-building-orlando.jpg" alt="" />
            <button style={{fontWeight: "700",border: "1px solid black", backgroundColor: "#FF6F00",borderRadius: "10px" ,paddingLeft: "20px", paddingRight: "20px",paddingTop: "10px",paddingBottom: "10px", color: "white", marginTop:"15px"}}>Disny Land</button>

            </div>
            <div style={{ width: "30%",margin: "auto", height: "530px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
            <img style={{width: "100%", height: "450px"}} src="https://c0.wallpaperflare.com/preview/105/617/312/brown-and-white-concrete-church.jpg" alt="" />
            <button style={{fontWeight: "700",border: "1px solid black", backgroundColor: "#FF6F00",borderRadius: "10px" ,paddingLeft: "25px",paddingTop: "10px",paddingBottom: "10px", paddingRight: "25px", color: "white", marginTop:"15px"}}>Instabul</button>

            </div>

            </div>
            <div>

        </div>
        <h1 style={{fontSize: "35px", marginRight: "75%", marginTop: "60px", fontFamily: "sans-serif", fontWeight: "bold"}}>Blogs</h1>
        <div style={{ width: "65%", marginLeft: "110px", marginTop: "20px"}}>
        <h1 style={{fontFamily: "sans-serif",marginRight: "136px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus fugit sapiente dolore nisi quo</h1> 
        <h1 style={{fontFamily: "sans-serif",marginRight: "116px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>animi cupiditate quod vero, distinctio placeat perspiciatis dolorem quam voluptate, voluptas sit, reprehenderit </h1>
        <h1 style={{fontFamily: "sans-serif",marginRight: "30px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>doloribus repellendus similique maxime sequi rem molestias. Vitae itaque eveniet suscipit alias molestias iste sequi cum </h1>
        <h1 style={{fontFamily: "sans-serif",marginRight: "65px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>laudantium voluptatum aut, nam, esse, reiciendis minima quisquam magnam dolorem quae mollitia soluta similique </h1>
        </div>
        <Link to="/blogs"><button style={{marginLeft: "-1120px",border: "2px solid #FF6F00", paddingRight: "20px", paddingLeft: "20px",paddingTop: "10px",paddingBottom: "10px",fontSize: "18px", backgroundColor:"#FF6F00", color: "white", marginTop: "20px", borderRadius: "10px"}} >Learn More</button></Link>
        


        <div style={{width: "80%", display: "flex", paddingTop: "60px", margin: "auto", marginRight: "190px", marginBottom :"40px"}}>
              <div style={{width:"700px", height: "500px", borderRadius: "10px"}}>
                <h1 style={{fontSize: "29px", fontWeight: "700", marginRight: "340px", marginTop: "80px"}}>Find Best Place For You</h1>
                <div style={{marginTop: "150px"}}>
                <h1 style={{fontFamily: "sans-serif",marginRight: "108px", color: "grey", fontSize: "17px", lineHeight: "25px", marginTop: "-100px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla n adipisicing </h1> 
                <h1 style={{fontFamily: "sans-serif",marginRight: "116px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>animi cupiditate quod vero, distinctio placeat perspiciatiss,adipisicing elit. </h1>
                <h1 style={{fontFamily: "sans-serif",marginRight: "40px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>doloribus repellendus similique maxime sequi rem molestias. Vitaee,adipisicing elit. </h1>
                <h1 style={{fontFamily: "sans-serif",marginRight: "35px", color: "grey", fontSize: "17px", lineHeight: "25px"}}>laudantium voluptatum aut, nam, esse, reiciendis minima quisquam ,adipisicing elit. </h1>
                </div>
                <button style={{marginLeft: "-530px",border: "2px solid #FF6F00", paddingRight: "20px", paddingLeft: "20px",paddingTop: "10px",paddingBottom: "10px",fontSize: "18px", backgroundColor:"#FF6F00", color: "white", marginTop: "50px", borderRadius: "10px"}}>Learn More</button>
                
              </div>
              <div style={{width:"40%",height: "500px" }}>
                <img style={{width: "100%",height: "500px", borderRadius: "10px"}} src="https://c1.wallpaperflare.com/preview/29/836/917/disney-world-magic-kingdom-building-orlando.jpg" alt="" />
              </div>
            </div>

            <div>
            <h1 style={{fontFamily: "sans-serif",fontSize: "40px", fontWeight: "700", marginTop: "30px", paddingBottom:"20px"}}>About Us</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis natus itaque sint. Perspiciatis  
              <br /> distinctio deleniti quia, voluptatem nam! Hic quasi optio expedita pisci, nam, soluta consequuntur .</p>
          </div>
           
           <h1 style={{fontFamily: "sans-serif",fontSize: "40px", fontWeight: "700", marginTop: "30px", paddingBottom:"20px"}}>Our Story</h1>

          <div style={{position: "relative", marginTop: "40px"}}>
            <div style={{width: "70%", margin: "auto", }}>
            <img  style={{borderRadius: "20px",width: "100%", height: "400px"}} src="https://c4.wallpaperflare.com/wallpaper/768/798/505/townlet-qibaozhen-qibao-minhang-wallpaper-preview.jpg" alt="" />
            </div>
            <div style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",borderRadius: "20px",width: "55%", margin: "auto", position: "absolute", marginLeft: "340px",bottom: "-110px", backgroundColor: "white"}}>
              <div style={{width: "70%", margin: "auto", paddingLeft: "30px", paddingRight: "30px",paddingTop: "40px",paddingBottom: "40px"}}>
              <h1 style={{ fontFamily: "sans-serif",lineHeight: "35px", fontSize: "17px", color: "grey"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut est eligendi explicabo reprehenderit,
               quibusdam perspiciatis dolore, quis suscipit consequuntur, harum vero ipsam neque recusandae nihil,
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere laborum sunt ex. </h1>
              </div>
            </div>
          
           
            
          </div>



          <div style={{ width: "70%", height: "300px", marginTop: "200px", position: "relative", marginLeft: "15%"}}>
            <img style={{width: "100%", height: "300px"}} src="https://c4.wallpaperflare.com/wallpaper/156/586/511/tower-city-tourist-attraction-tower-block-wallpaper-preview.jpg" alt="" />
           <h1 style={{postion: "absolute",Bottom: "-100px"}}></h1>
           <div style={{width: "55%", margin: "auto", position: "absolute", marginLeft: "250px",bottom: "220px",}}>
              <div style={{width: "90%", margin: "auto", paddingLeft: "30px", paddingRight: "30px",paddingTop: "40px"}}>
              <h1 style={{ fontFamily: "sans-serif",fontWeight: "700",lineHeight: "35px", fontSize: "30px", color: "grey" }}><span style={{color: "orange"}}>Subscribe</span> <span style={{color: "black"}}>And Be</span> <span style={{color: "orange"}}>Updated</span> </h1>
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
            
          <div style={{marginTop: "100px"}}>
          <Footer/>
          </div>
        </div>
    )
}
export default Home