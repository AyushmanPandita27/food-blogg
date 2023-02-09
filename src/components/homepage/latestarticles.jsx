import { UserProvider, Using } from "../../context";

const Latest =() =>{
  const {users} = Using();
    return(
        <div className="latest">
            <div className="latest-inner" >
            <h1 style={{
                fontFamily: 'Source Sans Pro',
                fontStyle: "SemiBold",
                fontWeight: 600,
                fontSize: "56px",
                lineHeight: "42px",
                lineHeight: "60%",
                align: "left",
                verticalAlign: "top",
                letterSpacing: "4%",
                color: "#0E2368"
            }}>Latest Articles</h1>       
            </div>

        <div className="wdth">
        <div className="card-list">
            {users.map((itr)=> {
                return(
                    <div className="card-container" key={itr.id}>
                       <img className="imgg"
                               alt={itr.title}
                       src = {itr.imageUrl}
                       />
                        <div className="title">
            <h2>{itr.title}</h2>
            </div>
            <div className="para2">
            <p styles={{
            
                
                fontFamily: 'Open Sans',
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "42px",
                lineHeight: "27px",
               
                letterSpacing: "0.02em",
                color: "#444957"
        
            }}> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
            </div>
       
        <div>
        <button className="read">Read More</button>
            </div>
                        </div>
                );
            })}
        </div>
       
        </div>
        
      


        </div>
    );
}

export default Latest;