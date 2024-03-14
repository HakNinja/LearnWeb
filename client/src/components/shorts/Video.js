import React, { useRef, useState } from "react";

// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FaArrowLeft, FaRegStar } from "react-icons/fa";

// import MoreVertIcon from "@material-ui/icons/MoreVert";

import { CiCircleMore } from "react-icons/ci";

// import StarIcon from '@material-ui/icons/Star';


import './Video.css'
// import { v } from '../../assets';
// import { Avatar } from "@material-ui/core";
// import Ticker from "react-ticker";

function Video({id, location, name, description}) {
    const [playing, setPlaying] = useState(false);
    const [subs, setSubs] = useState(false);
    const [liked, setLiked] = useState(false);

    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if (playing) {
            setPlaying(false);
            videoRef.current.pause();
        } else {
            videoRef.current.play();
            setPlaying((play) => !play);
        }
    };

    const handleSubscribe = () => {
        setSubs((sub) => !sub);
    };

    const handleLiked = () => {
        setLiked((like) => !like);

    };


    return (
        <div className='svideo'>
            {console.log(location)}
            <video
                id={id}
                className="svideo__player"
                onClick={handleVideoPress}
                loop
                ref={videoRef}
                src={require("../../assets/3.mp4")} type="video/mp4"/>
            <div className='sshortscontainer'>
                <div className="sshortsVideoTop">
                    <div className="sshortsVideoTopIcon">
                        {/* <ArrowBackIcon /> */}
                        <FaArrowLeft />
                    </div>
                    <div className="sshortsVideoTopIcon">
                        {/* <MoreVertIcon /> */}
                        <CiCircleMore />
                    </div>
                </div>
            </div>
            <div className="sshortsVideoSideIcons">
                <div className="sshortsVideoSideIcon">
                    {/* <StarIcon style={{
                            fill: liked ? "yellow" : "white",
                        }}
                        onClick={handleLiked} /> */}
                        <FaRegStar style={{
                            fill: liked ? "yellow" : "white",
                        }}
                        onClick={handleLiked}/>
                    <p>Star </p>
                </div>
                {/* <div className="sshortsVideoSideIcon">
                    <InsertCommentIcon />
                    <p>comment</p>
                </div> */}
            </div>
            <div className="sshortsBottom">
                <div className="sshortsDesc">
                    <p className="ssdescription">{description}</p>
                    {/* <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="description">description</p>
                </>
               )} 
            </Ticker> */}
                </div>
                <div className="sshortDetails">
                    {/* <Avatar
                        src={
                            "https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo"
                        }
                    /> */}
                    <p>{name}</p>
                    <button
                        style={{
                            background: subs ? "red" : "hsla(0,0%,69.4%,.609)",
                        }}
                        onClick={handleSubscribe}
                    >
                        {subs ? "SUBSCRIBED" : "SUBSCRIBE"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Video