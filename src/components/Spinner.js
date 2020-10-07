import React from 'react';

const Spinner = ({message,is404}) => {
    const css = is404?"spinner__404":"spinner"
    return (

        <div className={css}>
            <div className="spinner__message">
                {message}
            </div>
        </div>

    );
};

export default Spinner;