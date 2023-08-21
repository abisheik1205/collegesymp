import React from "react";

const Divider = ({ margin, color }) => {
    return(
        <div className="divider" style={{margin: margin, border: `1px solid ${color}`}}></div>
    )
}

export default Divider;