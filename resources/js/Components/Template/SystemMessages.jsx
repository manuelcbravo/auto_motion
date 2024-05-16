import React, { useState, useEffect } from 'react';
import {usePage} from '@inertiajs/react';

export default () => {
    const [visible, setVisible] = useState(true);
    const { flash, errors } = usePage().props;
    const numOfErrors = Object.keys(errors).length;

    useEffect(() => {
        setVisible(true);
    }, [flash, errors]);

    return (
        <div>
            {flash.success && visible && (
                <div className="w-30 position-fixed z-1" style={{ bottom: 0, right: "20px" }}>
                    <div className="alert alert-success alert-dismissible bg-success text-white border-0 fade show" role="alert">
                        <button type="button" className="btn-close btn-close-white" onClick={() => setVisible(false)}></button>
                        {flash.success}
                    </div>
                </div>
            )}
            {flash.warning && visible && (
                <div className="w-30 position-fixed z-1" style={{ bottom: 0, right: "20px" }}>
                    <div className="alert alert-warning alert-dismissible bg-warning text-white border-0 fade show" role="alert">
                        <button type="button" className="btn-close btn-close-white" onClick={() => setVisible(false)}></button>
                        {flash.warning}
                    </div>
                </div>
            )}
            {(flash.error || numOfErrors > 0) && visible && (
                <div className="w-30 position-fixed z-1" style={{ bottom: 0, right: "20px" }}>
                    <div className="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show" role="alert">
                        <button type="button" className="btn-close btn-close-white" onClick={() => setVisible(false)}></button>
                        <strong>Error: </strong>
                        {flash.error && flash.error}
                        {numOfErrors === 1 && 'There is one form error'}
                        {numOfErrors > 1 && `There are ${numOfErrors} form errors.`}
                    </div>
                </div>
            )}
        </div>
    );
};
