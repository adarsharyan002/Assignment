import Machines from '../asserts/Machines.png'

const LowerPart = () => {
    return ( 
        <div className="lowerPart-container">
            <h3 >INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h3>
            <div className="image-box">
                <img style={{width:'100%'}} src={Machines} alt="" />
                <p style={{margin:'1.3rem'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            </div>
            <div className="details">
                <h3 style={{margin:'1.5rem'}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
                <p>CHEMICALS | PROCESS POWER WATER | WASTE WATER OILS | GAS PHARMA SUGARS | DISTILLERIES PAPER | PULP MARINE | DEFENCE METAL | MINING FOOD | BEVERAGE PETROCHEMICAL | REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE | RESIDENTIAL
</p>
            </div>
        </div>
      );
}
 
export default LowerPart;