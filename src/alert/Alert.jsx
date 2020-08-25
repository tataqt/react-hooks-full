import React, { useContext } from 'react';
import { useAlert } from './AlertContext';

function Alert() {
    const alert = useAlert();

    if (!alert.visible) return null;

    return (
        <div className={'alert alert-danger'} onClick={alert.toggle}>
            Это очень важное сообщение
        </div>
    );
}

export default Alert;