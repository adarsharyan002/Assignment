import Prize from '../asserts/Prize.png'
import Cup from '../asserts/Cup.png'



const UpperPart = () => {
    return ( 
        
    <div className="upperPart-container">
        <div className="left-box">
            <img style={{width:'100%',height:'100%'}} src={Cup} alt="Cup" />
        </div>
        <div className="right-box">
            <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
            <div className="right-image-box">
                <ul style={{marginBottom:'20px'}}>
                    
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
    
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <div className='img-cont'>
                <img style={{width:'100%',height:'60%'}} src={Prize} alt="Prize" />
                </div>
                <p >Government of India has awarded the <span style={{fontWeight:'bold'}}> "National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
	
            </div>
            
        </div>
    </div> 
    
    );
}
 
export default UpperPart;