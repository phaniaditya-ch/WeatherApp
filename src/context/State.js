import React, { useState } from "react";
import Context from "./Context";

const State = (props) => {

    let s1 = {
        "dark": true,
        "name": "weatherapp"
    }

    let [state, setState] = useState(s1);

    const update = async (newState) => {
        setState(newState);
    }

    return (
        <Context.Provider value={{ state, update }}>
            {props.children}
        </Context.Provider>
    )
}

export default State;