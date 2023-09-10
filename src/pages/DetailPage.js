import Cerberus from "../assets/image/Cerberus.png";

function DetailPage() {


    return (
    <div className="text-center">
        <p className="font-mono text-2xl font-bold uppercasew">About My Dog</p>
        <div className="flex justify-center">
            <img src={Cerberus} alt="avatar" width={600}/>          
        </div>
        <p className="text-md mt-2 font-bold text-black mx-8 md:mx-36">
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        {"\n"}
        </p>
        <p className="text-md mt-2 font-bold text-black mx-8 md:mx-36">
            "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>
        <br />
      
    </div>
    );
    }
    export default DetailPage;