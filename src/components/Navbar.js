import twitter from "../assets/icons/twitter.png";
import riot from "../assets/icons/riot.png";
import sword from "../assets/icons/sword.png";


const Navbar = ()=>{

    return(
        <div className="flex justify-between items-center">
            <img src={sword} alt="logo" width={50}/>
            
            <ul className="hidden md:flex">
                <li className="px-10">
                    <a href="https://twitter.com/" target="blank">
                    <img src={twitter} alt="logo" width={50}/>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://map.leagueoflegends.com/en_US" target="blank">
                    <img src={riot} alt="logo" width={50}/>
                    </a>
                </li>
            </ul>
        </div>

    )
}
export default Navbar;