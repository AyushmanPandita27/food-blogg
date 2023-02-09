
const About =() =>{
    return(
        <div className="about">
          
           <div className="innerus">
            
            <img className="aboutus" src="https://s3-alpha-sig.figma.com/img/5b80/babf/a1ef27ac038072c6f30264ab0d7bc72d?Expires=1676851200&Signature=Fj7ezNbZ8zL~CXP~d4CGtpVn6F4~8DFK6p15VurVU7r8SgwiVFtdEen0euAIWIIEitibDTdK3Jo2gYy68Dmi1nTgKsOTxDInYcw4hX1QT5ViR6XzVMqnNCk6zNDpcxI3kVvcYt0nv71lvuPXWbQEwWotInfRVHLt2VtxLzfdIQYex6ks3waCB-pZvgQiS9g2~vLUarauBDrf-eboymmmJ2vkGH1-pZJTBQs3K~m9GSLix8v0QGJBY8izCguwzS2pDzBqdIM~TWwruZrZuPIdvAzEZzJQ2OKmWLtPdwUNcm~z4wuOFMzHB0K0CwEcO-gzJhwR8un9BA17yXlBfjbyOg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="aboutus"/>
     
      <div className="abt">
             <h2 styles={{fontFamily: 'Poppins',
fontStyle: "normal",
fontWeight: 600,
fontSize: "45px",
lineHeight: "27px"}}>About us</h2>
      </div>
      <div className="lipsm">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
      </div>
      <div>
        <button className="btn-lpsm">Read More</button>
      </div>
      </div>
        </div>
    );
}

export default About;