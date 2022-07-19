import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton =()=>
{
    const navigate = useNavigate();
    return(
        <div className="bcakButton">
            <span>
                <MdKeyboardBackspace onClick={() => navigate(-1)}/>
            </span>
        </div>
    )
}

export default BackButton;