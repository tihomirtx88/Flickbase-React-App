import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SideDrawer from './sideNavigation';

import { useSelector, useDispatch } from 'react-redux';
import { clearNotifications } from '../../store/reducers/notifications';
import { showToast } from '../../utils/tools';
import { signOut } from '../../store/actions/users';

const Header = () => {
    const users = useSelector(state=>state.users);
    const notifications = useSelector(state=> state.notifications);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        let { global } = notifications;
        if (notifications && global.error) {
            const msg = global.msg ? global.msg : 'Error';
            showToast('ERROR', msg);
            dispatch(clearNotifications());
        }
        if (notifications && global.success) {
            const msg = global.msg ? global.msg : 'Good!';
            showToast('SUCCESS', msg);
            dispatch(clearNotifications());
        }

    },[notifications]);
    // Detect notifications

    const signOurUser = () => {
       dispatch(signOut());
       navigate('/');
    };

    return(
        <nav className='navbar fixed-top'>
            <Link to="/" className='navbar-brand d-flex align-items-center fredoka_ff'>
                Flickbase
            </Link>
            <SideDrawer users={users} signOurUser={signOurUser}/>
        </nav>
    )
}

export default Header;