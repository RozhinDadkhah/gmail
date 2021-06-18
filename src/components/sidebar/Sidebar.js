import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Duo, Person, Phone } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../../features/counter/mailSlice';

function Sidebar() {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button
                className='sidebar__compose'
                startIcon={<AddIcon fontSize='large' />}
                onClick={() => dispatch(openSendMessage())}
            >
                COMPOSE
            </Button>

            <SidebarOption Icon={InboxIcon} title='Inbox' number={52} selected={true} />
            <SidebarOption Icon={StarIcon} title='Starred' number={62} />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={62} />
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={62} />
            <SidebarOption Icon={NearMeIcon} title='Sent' number={62} />
            <SidebarOption Icon={NoteIcon} title='Drafts' number={62} />
            <SidebarOption Icon={ExpandMoreIcon} title='More' number={62} />

            <div className='sidebar__footer'>
                <div className='sidebar__footericon'>
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <Duo />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
