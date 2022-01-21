import { useContext } from "react"
import NotificationContext from '../notification/NotificationContext'

const Notification = ()=>{

    const {notification} = useContext(NotificationContext);
    
    if(notification.message === ''){
        return null
    }

    return(
        <h1 style={{color: notification.severity === 'error'? 'red':'green'}}>
            {notification.message}
        </h1>
    )
}

export default Notification