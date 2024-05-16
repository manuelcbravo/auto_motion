import React from "react";

export default function LTemplate1({message}) {

    return (
        <div className="preloader">
            <div className="img-fluid">
                <div className="spinner-border text-primary" role="status"></div>
                <p>{message}</p>
            </div>
        </div>
    );
}
