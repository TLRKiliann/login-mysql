import React, { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
//import AuthenticationService from '../services/authentication-service'
import serviceLogin from '../services/serviceLogin'
//import Cookies from 'universal-cookie'
import ConsoleDb from './subcomponents/ConsoleDb'
import HomeSubscribe from './subcomponents/HomeSubscribe'
import UsernameComp from './subcomponents/UsernameComp'
import PasswordComp from './subcomponents/PasswordComp'
import VerifyAdmin from './subcomponents/VerifyAdmin'
import userIcon from '/images/user_icon.jpg'

type Field = {
  value?: any
  error?: string
  isValid?: boolean
}

type Form = {
  username: Field
  password: Field
}

type VerifyProps = {
  id: number;
  username: string;
  password: string;
  status: string | undefined;
}[]

type VerifyResponse = {
  username: string;
  password: string;
  status: string;
}

export default function LoginDashboard() {

  //const cookies = new Cookies();
  //const Navigate = useNavigate()
  
  const [form, setForm] = useState<Form>({
    username: {value: ''},
    password: {value: ''}
  })

  const [datas, setDatas] = useState<VerifyProps>([])
  const [message, setMessage] = useState<string>('Not connected !')
  const [response, setResponse] = useState<VerifyResponse | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name
    const fieldValue: string = e.target.value
    const newField: Field = { [fieldName]: { value: fieldValue } }

    setForm({ ...form, ...newField })
  }

  const validateForm = () => {
    let newForm: Form = form

    // Validator username
    if (form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.'
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false }
      newForm = { ...newForm, ...{ username: newField } }
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ username: newField } }
    }

    // Validator password
    if (form.password.value.length < 3) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 3 caractères de long.'
      const newField: Field = { value: form.password.value, error: errorMsg, isValid: false }
      newForm = { ...newForm, ...{ password: newField } }
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true }
      newForm = { ...newForm, ...{ password: newField } }
    }
    setForm(newForm)
    return newForm.username.isValid && newForm.password.isValid
  }

  useEffect(() => {
    const callFn = () => {
      serviceLogin
        .loginRequest()
        .then(data => {
          setDatas(data)
        })
        .catch((err) => {
          console.log("Error during catching of login data !", err.message)
          setDatas([])
        })
    }
    callFn();
    return () => console.log("useEffect !!!")
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isFormValid = validateForm()
    if (isFormValid) {
      setMessage('👉  Tentative de connexion en cours ...')
      
      const statusData: VerifyResponse = {
        username: form.username.value,
        password: form.password.value,
        status: ""
      }
      await serviceLogin
        .statusRequest(statusData)
        .then((data) => {
          setResponse(data)
          //console.log(data, "data");
        })
        .catch((err) => {
          console.log("Error during catching of login data !", err.message);
        })

      //const verifyUsername = datas?.find((u) => u.username === form.username.value);
      //const verifyPassword = datas?.find((u) => u.password === form.password.value);
      /*
      if (verifyUsername === undefined || verifyPassword === undefined) {
        setMessage('🔐  Identifiant ou mot de passe incorrect.')
      } else {
        if (response.status !== "admin") {
          setMessage("🔐  Vous n'êtes pas admin !")
        } else {
          console.log("succeed")
          localStorage.setItem("admin-info",
            JSON.stringify([form.username.value, form.password.value]))
          cookies.set("admin-cookie", "admin",
            { path: '/', sameSite: "strict", secure: true });
          //console.log(cookies.get("user-cookie"));
          Navigate('/succeed')
        }
        //verifyUsername.status === 'admin' ? verifyUsername.status : undefined
        AuthenticationService
          .login(form.username.value, form.password.value, verifyUsername.username, 
            verifyPassword.password, verifyUsername.status)
          .then(isAuthenticated => {
            if (!isAuthenticated) {
              setMessage("🔐  Vous n'êtes pas admin !")
            } else {
              console.log("succeed")
              Navigate('/succeed')
             localStorage.setItem("admin-info",
                JSON.stringify([form.username.value, form.password.value]))
              cookies.set("admin-cookie", "admin",
                { path: '/', sameSite: "strict", secure: true });
              //console.log(cookies.get("user-cookie"));
              Navigate('/succeed')
            }
          })
        
        
      }
      */
    }
  }

  return(
    <main className="login--main">
      
      <div className="login--container">
        
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="login--form"
          placeholder="lastname"
        >
          <VerifyAdmin
            username={response?.username}
            status={response?.status}
          />

          <div className='form--divimg'>
            <span>
              <img src={userIcon} width="100%" height="100%" alt="user-icon" />
            </span>
            <h1 className="form--title">Access Dashboard</h1>
          </div>

          {message && <div className="div--msg">
            <p className="connection--msg">
              {message}
            </p>
          </div>
          }

          <UsernameComp 
            value={form.username.value}
            handleInputChange={(e) => handleInputChange(e)}
            error={form.username.error}
          />

          <PasswordComp 
            value={form.password.value}
            handleInputChange={(e) => handleInputChange(e)}
            error={form.password.error}
          />
          
          <button type="submit" className="btn--submitlogin">
            Login
          </button>
          
          <HomeSubscribe />

        </form>

        <ConsoleDb datas={datas} />

      </div>

    </main>
  )
}