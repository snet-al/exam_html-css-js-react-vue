import { useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    return (
        <>
        <h1>Thank you for using our website</h1>
        <button onClick={()=>navigate("/")}>Go back</button>
        </>
    );
}

export default About;