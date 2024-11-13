import React from "react";

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white border-b border-tertiary-400' : 'text-[#adb7be]';
    
    return (
        <span onClick={selectTab} >
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </span>
    );
};

export default TabButton;
