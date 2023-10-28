import React, { useState, useEffect } from 'react'
import serviceLogin from '../services/serviceLogin'
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
  id: null;
  username: string;
  password: string;
  status: string;
}

export default function LoginDashboard() {
  
  const [form, setForm] = useState<Form>({
    username: {value: ''},
    password: {value: ''}
  })

  const [datas, setDatas] = useState<VerifyProps>([])
  const [message, setMessage] = useState<string>('Not connected !')
  const [response, setResponse] = useState<VerifyResponse[] | null>([])

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
          setMessage(err.message)
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
        id: null,
        username: form.username.value,
        password: form.password.value,
        status: ""
      }
      await serviceLogin
        .statusRequest(statusData)
        .then((data) => {
          setResponse(data)
          setMessage("Welcome ADMIN !")
        })
        .catch((err) => {
          console.log("Error during catching of login data !", err.message);
          //setMessage('🔐' + " " + err.message)
          setMessage('🔐  Identifiant ou mot de passe incorrect.')
        })
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
          {response ? (
            response?.map((u) => (
              <VerifyAdmin
                key={u.id}
                username={u?.username}
            />
            ))
          ) : (
            null
          )}

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