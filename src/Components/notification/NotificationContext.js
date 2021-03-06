import React, {useState} from "react"


const Context =React.createContext();

export const NotificationContextProvider = ({children})=>{

    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = (severity, messaje)=>{
        setMessage(message);
        setSeverity(severity)
        setTimeout(()=>{
            setMessage('')
        }, 5000)
    }

    return(
        <Context.Provider value={{
            notification:{
            message,
            severity},
            setNotification
        }}>
            {children}
        </Context.Provider>
        )
}

export default Context