import {useNavigate } from "react-router-dom";
import augustus from "../assets/image/augustus.png";

function LandingPage() {
    const navigate = useNavigate();
    const handleToDetail = () => {
        navigate("/details");
    }

    return (
    <div className="text-center">
        <p className="font-mono text-2xl font-bold uppercasew">About Me</p>
        <div className="flex justify-center">
            <img src={augustus} alt="avatar" width={600}/>          
        </div>
        <p className="text-md mt-2 font-bold text-black mx-8 md:mx-36">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        {"\n"}
        </p>
        <p className="text-md mt-2 font-bold text-black mx-8 md:mx-36">
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <br />
        <button className="text-xl text-black font-bold underline" 
        onClick={()=>handleToDetail()}>
            NEXT
        </button>
    </div>
    );
    }
    export default LandingPage;