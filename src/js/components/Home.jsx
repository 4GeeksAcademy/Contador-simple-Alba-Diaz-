import React from "react";


export const Home = ({ digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) => {

    return (
        <div className="container mt-5 ">
            <h1 className="d-flex justify-content-center">
                Simple Counter
            </h1>

            <div className="container  mt-5">
                <div className="bg-dark  d-flex justify-content-center p-3 border rounded-pill">
                    <div className="clock d-flex align-items-center">
                        <i className="far fa-clock text-white fs-1 px-4 mx-2 "></i>
                    </div>
                    <div className="digitSix text-white fs-1 border border-white rounded px-4 mx-2">{digitSix % 10}</div>
                    <div className="digitFive text-white fs-1 border border-white rounded px-4 mx-2">{digitFive % 10}</div>
                    <div className="digitFour text-white fs-1 border border-white rounded px-4 mx-2">{digitFour % 10}</div>
                    <div className="digitTree text-white fs-1 border border-white rounded px-4 mx-2 ">{digitThree % 10}</div>
                    <div className="digitTwo text-white fs-1 border border-white rounded px-4 mx-2">{digitTwo % 10}</div>
                    <div className="digitOne text-white fs-1 border border-white rounded px-4 mx-2">{digitOne % 10}</div>
                </div>
            </div>
        </div>
    );
}


