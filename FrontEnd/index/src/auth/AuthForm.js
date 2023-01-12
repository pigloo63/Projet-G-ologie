import React, { useRef, useState, useContext} from 'react';
import AuthContext from '../context/authContext';
import { useHistory } from 'react-router-dom';

const AuthForm = () => {

    const identifiantInputRef = useRef()
    const pwdInputRef = useRef()

    const authContext = useContext(AuthContext)

    
    const history = useHistory()
    
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState()
    
    const submitHandler = (e) => {
        e.preventDefault()


        const enteredidentifiant = identifiantInputRef.current.value
        const enteredPwd = pwdInputRef.current.value

        const url = 'http://localhost:4000/api/auth/login'

        const fetchlog = async () => {
            try {
                const result = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({
                        identifiant: enteredidentifiant,
                        password: enteredPwd
                    }),
                    headers:{
                        'Content-Type' : 'application/json'
                    }
                })

                const dataResult = await result.json()

                if(result.ok){
                    setData(dataResult.result)
                    authContext.login(
                        dataResult.token,
                        dataResult.userId
                    )
                }

                history.push('/')

            } catch (error) {
                console.log('Pas de réponse de l\'API')
            }
        }
        fetchlog()
    }

    return (
        <div>
            <section>
                <form onSubmit={submitHandler}>
                    <label htmlFor="identifiant">Votre identifiant</label>
                    <input 
                        type="text" 
                        name='identifiant' 
                        id='identifiant' 
                        ref={identifiantInputRef}
                        required/>
                    <label htmlFor="password">Votre mot de passe</label>
                    <input 
                        type="password" 
                        name='password' 
                        id='password' 
                        ref={pwdInputRef}
                        required/>
                    <button type={'submit'}> Se connecter</button>
                </form>
            </section>
        </div>
    )
}

export default AuthForm