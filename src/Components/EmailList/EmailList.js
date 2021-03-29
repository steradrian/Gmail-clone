import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import React, { useEffect, useState } from 'react';
import './EmailList.css';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Inbox from '@material-ui/icons/Inbox';
import Section from './Section/Section';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import EmailRow from './EmailRow/EmailRow';
import { db } from '../../firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                ));
    },[])
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton >
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>

            <div className="emailList__sections">
                <Section Icon={Inbox} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8"  />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green"  />
            </div>

            <div className="emailList__list">
                {emails.map(({ id, data: { to, subject, message, timestamp} }) => (
                    <EmailRow
                        key={id}
                        id={id}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}

            </div>
        </div>
    )
}

export default EmailList
