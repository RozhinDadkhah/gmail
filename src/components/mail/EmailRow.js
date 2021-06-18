import { StarBorderOutlined, LabelImportantOutlined } from '@material-ui/icons';
import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import './EmailRow.css';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SelectMail } from '../../features/counter/mailSlice';

function EmailRow({ title, subject, description, time, id }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(SelectMail({
            id, title, subject, description, time
        }))
        history.push('/mail')
    }

    return (
        <div className='emailrow' onClick={openMail}>
            <div className='emailrow__option'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className='emailrow__title'>
                {title}
            </h3>
            <div className='emailrow__message'>
                <h4>{subject}{" "}</h4>
                <span className='emailrow__description'>-{description}</span>
            </div>
            <p className='emailrow__time'>
                {time}
            </p>
        </div>
    )
}

export default EmailRow