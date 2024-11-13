import React from "react";
import TopImg from "./TopImg";
import NameTag from "./NameTag";
import Job from "./Job";

function SingleCard() {
    return (
        <>
            <div id="singleCard">
                <div id="mainCardContent">
                    {/* <TopImg/> */}
                    <NameTag/>
                    <Job/>
                </div>
            </div>
        </>
    )
}

export default SingleCard