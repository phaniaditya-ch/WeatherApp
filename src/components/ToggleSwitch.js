import React from 'react'
import './ToggleSwitch.css';

const ToggleSwitch = () => {
    return (
        <div>
            <label className="ui-switch">
                <input type="checkbox" />
                <div className="slider">
                    <div className="circle"></div>
                </div>
            </label>
        </div>
    )
}

export default ToggleSwitch
