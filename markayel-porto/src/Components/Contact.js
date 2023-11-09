import React, {useState} from "react";
const Contact = () => {
    
    const[click, setClick] = useState(false)
    const handleClick = () => setClick (!click)
    
    return (
    <>
    <h5>Tom</h5>
    </>
    
    )
    }
    
export default Contact