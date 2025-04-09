import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const ScrollToTop = ()=>{
    const location = useLocation(); 

    useEffect(() =>{
        window.scrollTo(0,0); // scrolls to top of page
    }, [location]); 
    return null; 
};

export default ScrollToTop;

