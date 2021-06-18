import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/counter/userSlice'

function Login() {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://cdn.vox-cdn.com/thumbor/CL1hyVp0ceVn6VSlIrP4W6IJGOI=/0x0:1320x880/1200x800/filters:focal(555x335:765x545)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg' />
                <Button
                    onClick={signIn}
                    variant='contained'
                    color='primary'
                >
                    LogIn
                </Button>
            </div>
        </div>
    )
}

export default Login
