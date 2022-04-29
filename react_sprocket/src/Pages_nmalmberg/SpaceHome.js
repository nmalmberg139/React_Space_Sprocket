import NavBar from "./NavBar";

function SpaceHome(){
    return(
        <div className='Home'>
            <NavBar/>
            <h1>Welcome to our space sprocket</h1>
            <div className='row'>
                <div className='col'><img src={require('./imgs/Space logo.jpg')} alt='spaceLogo'/></div>
                <div className='col'><img src={require('./imgs/Skypad_Apartments.webp')} height='200' width='200' /></div>
            </div>
            <h3>What is a sprocket?</h3>
                <p> A sprocket is one of multiple projectiles on a rim of a wheel that engage with the links of a chain </p>

            <p>There are many different types of parts including:</p>
            <ul>
                <li>Double Duty</li>
                <li>Hunting tooth</li>
                <li>Segmental rim</li>
                <li>Multiple strand</li>
                <li>Quick disconnect</li>
            </ul>
            <h1>Our company history</h1>
            <div>
                <p>Space Sprocket has been creating products and services to many engineers for 80 years</p>
                <p>We now have operations in 32 countries and ship over 50,000 parcels a day!</p>
            </div>

            <h3>How are they used</h3>
            <p>They are mainly used on bicycles to pull the chain and rotate the wheels.</p>
            <p>Also used in tanks and farming machinery to line up links of a track the machine follows
            and pulls the vehicle making it move.</p>
            <div>
                <img src={require('./imgs/Cosmo_Spacely.webp')} width='200' height='200'/>
                <p>Spacely Sprockets founder and owner is Cosmos Spacely</p></div>
        </div>
    )
} export default SpaceHome