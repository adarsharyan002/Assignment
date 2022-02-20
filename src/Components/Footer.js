import { FaPhoneSquare,FaFacebook,} from "react-icons/fa";
import {GoGlobe } from "react-icons/go";

const Footer = () => {
    return ( <div className="footer">
        <div className="icons">
           <FaPhoneSquare className="svg"  />
   <p>Toll free <span>1800 200 1234</span> </p>
   </div>
   <div className="icons">
   <label className="label" htmlFor="p"><FaFacebook/></label>
   <p>www.facebook.com/cripumps</p>
   </div>
   <div className="icons">
   <label className="label" htmlFor="a"><GoGlobe/></label>
 <p>www.crigroups.com</p>
 </div>

    </div> );
}
 
export default Footer;