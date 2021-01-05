import React from 'react'
// import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications"

const Header = props => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/37874027_957000944481741_5558430718956142592_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=XxTLt1wDxCsAX-CLTEk&_nc_ht=scontent.fblr5-1.fna&oh=161954d8db8b34f11404eba7ea8a4173&oe=601A9FDF" title="Me"/>
            </div>
        </div>
    )
}

// Header.propTypes = {

// }

export default Header
