import React, { useRef } from 'react';
import './Slider.css'; // Import CSS file
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const Slider = () => {
    const slideRef = useRef(null);

    const handleNext = () => {
        const items = slideRef.current.querySelectorAll(".Slider-item");
        slideRef.current.appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = slideRef.current.querySelectorAll(".Slider-item");
        slideRef.current.prepend(items[items.length - 1]);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", marginTop: "3rem", marginBottom: "8rem", textAlign: "center" }}>
            <h2 style={{ marginBottom: "3rem" }}>Why to choose WebLearn?</h2>
            <div className="Slider-container">
                <div className="slide" ref={slideRef}>
                    <div
                        className="Slider-item"
                        style={{
                            backgroundImage: 'url(https://img.freepik.com/free-vector/hand-drawn-flat-design-group-people-background-composition_23-2149192135.jpg)',
                        }}
                    >
                        <div className="Slider-content">
                            <div className="name">Integrated Communication Tools</div>
                            <div className="des">
                                You don't have to switch between apps.
                            </div>
                        </div>
                    </div>
                    <div
                        className="Slider-item"
                        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/employees-celebrating-business-success-with-huge-trophy_1150-37475.jpg)' }}
                    >
                        <div className="Slider-content">
                            <div className="name">Leaderboard & Quizes</div>
                            <div className="des">
                                Compete in your community!
                            </div>
                            
                        </div>
                    </div>
                    <div
                        className="Slider-item"
                        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/scrum-method-concept-illustration_114360-13019.jpg)' }}
                    >
                        <div className="Slider-content">
                            <div className="name">Roadmap Integration</div>
                            <div className="des">
                                Learn with a proper plan.
                            </div>
                        </div>
                    </div>
                    <div
                        className="Slider-item"
                        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/users-with-laptops-working-with-database-data-storage-organization-information-access-management-big-data-protection-concept-vector-isolated-illustration_335657-2143.jpg)' }}
                    >
                        <div className="Slider-content">
                            <div className="name">Cloud Storage</div>
                            <div className="des">
                                Get space for your notes.
                            </div>
                        </div>
                    </div>
                    <div
                        className="Slider-item"
                        style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/video-blogger-computer-screen-advertising-new-phone-man-posting-vlog-smartphone-review-channel-flat-vector-illustration-technology-marketing-concept-banner-landing-web-page_74855-21080.jpg)' }}
                    >
                        <div className="Slider-content">
                            <div className="name">Personalized Educational Feeds</div>
                            <div className="des">
                                Learn with reels feature.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Slider-button">
                    <button className="prev" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handlePrev}>
                        <FaArrowLeft />
                    </button>
                    <button className="next" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handleNext}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
