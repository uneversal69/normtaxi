
import React from "react";

const CloseIcon = ({ color }) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color }}>
            <line x1="0.353553" y1="0.646447" x2="14.3535" y2="14.6464" stroke="currentColor" />
            <line x1="0.579758" y1="14.6464" x2="14.5797" y2="0.646484" stroke="currentColor" />
        </svg>
    );
};

export default CloseIcon;
