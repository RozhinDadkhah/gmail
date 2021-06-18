import { Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/counter/mailSlice';
import { db } from '../../firebase';
import React from 'react'
import './SendMail.css'
import firebase from 'firebase'

function SendMail() {

    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formData) => {
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage())
    }

    return (
        <div className='sendmail'>
            <div className='sendmail__header'>
                <h3>New Message</h3>
                <Close className='sendmail__close' onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("to", { required: true })} placeholder='To' type='email' />
                {errors.to && <p className='sendmail__error'>This field is required</p>}

                <input {...register("subject", { required: true })} placeholder='Subject' />
                {errors.subject && <p className='sendmail__error'>This field is required</p>}

                <input {...register("message", { required: true })} placeholder='Message...' />
                {errors.message && <p className='sendmail__error'>This field is required</p>}


                <div className='sendmail__option'>
                    <Button
                        className='sendmail__button'
                        variant='contained'
                        color='primary'
                        type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
