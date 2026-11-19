import React, { Fragment, useRef } from 'react';

function App() {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "1001";
        focusPoint.current.focus();
    };
    return (
        <Fragment>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                
            </label><br />
            <textarea rows="40" cols="5" ref={focusPoint}  />
        </Fragment>
    );
};
export default App;