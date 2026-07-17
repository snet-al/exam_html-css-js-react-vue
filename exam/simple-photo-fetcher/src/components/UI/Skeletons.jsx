import React from "react";

function Skeletons({ count }) {
    const skeletons = Array.from({ length: count }, (_, index) => (
        <div key={index} className="skeleton"></div>
    ));

    return <div className="skeletons">{skeletons}</div>;
}

export default Skeletons;
