import React from "react";

const ProgressBar = (props) => {
    const { bgcolor, completed, title_text } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e9ecef",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <p >{title_text}</p>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;