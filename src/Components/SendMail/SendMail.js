import React from 'react';
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button, IconButton } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase';

function SendMail() {

    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton>
                    <CloseIcon
                        className="sendMail__close"
                        onClick={() => dispatch(closeSendMessage())}
                    />
                </IconButton>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.to && <p className="sendMail__error">To is required</p>}
                <input
                    name='to'
                    type="email"
                    placeholder="To"
                    ref={register({ required: true })}
                />
                {errors.subject && <p className="sendMail__error">Please enter a subject</p>}
                <input
                    name='subject'
                    type="text"
                    placeholder="Subject"
                    ref={register({ required: true })}
                />
                {errors.message && <p className="sendMail__error">Please enter a message</p>}
                <input
                    name='message'
                    type="text"
                    placeholder="Message..."
                    className="sendMail__message"
                    ref={register({ required: true })}
                />

                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
