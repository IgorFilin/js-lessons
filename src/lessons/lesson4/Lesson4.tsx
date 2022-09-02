import React from 'react'
import './lesson_4';
import {createPromis,resolvePromis,rejectPromis} from "./lesson_4";

const Lesson4 = () => {
    const handlerCreatre = () => {
        createPromis()
    }
    const handlerResolve = () => {
        resolvePromis()
    }
    const handlerReject = () => {
        rejectPromis()
    }


    return (
        <div>
            <button onClick={handlerCreatre}  id='btn-create-promise'>Create Promise</button>
            <button onClick={handlerResolve}  id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={handlerReject}  id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;