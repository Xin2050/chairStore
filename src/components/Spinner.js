import React from 'react';

const Spinner = ({message,is404,top}) => {
    const css = is404?"spinner__404":"spinner"
    return (

        <div id="spinner" className={css} style={{top}}>
            <div className="spinner__message">
                {message}
            </div>
        </div>

    );
};

export default Spinner;