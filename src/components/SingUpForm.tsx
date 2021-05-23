
import { FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForm'
import { ErrorIcon } from './ErrorIcon'

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const SingUpForm = () => {

    const [newErrors, setnewErrors] = useState({
        firstNameError: '',
        lastNameError: '',
        emailError: '',
        password: ''
    })

    const { form, handleChange } = useForm<FormData>({
        firstName: 'Diego',
        lastName: 'Ceron',
        email: 'test@gmail.com',
        password: '12345678'
    });

    const { firstName, lastName, email, password } = form;

    const handleSubmit = (ev: FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        validateForm();
    }

    const validateForm = () => {
        let errors = {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            password: ''
        }

        if (!firstName.trim()) {
            errors.firstNameError = 'First Name cannot be empty'
        }

        if (!lastName.trim()) {
            errors.lastNameError = 'Last Name cannot be empty'
        }

        if (!email.trim()) {
            errors.emailError = 'Email Address cannot be empty'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]+$/i.test(email)) {
            errors.emailError = 'Looks like this is not an email'
        }

        if (!password.trim()) {
            errors.password = 'Password cannot be empty'
        }

        setnewErrors(errors);
        console.log(newErrors)
    }


    return (
        <div className='login__form-container' >
            <div className="login__offer">
                <p className='login__offer-text' ><b>Try it free 7 days</b> then $20/mo. thereafter</p>
            </div>
            <div className="login__form-wrapper">
                <form >
                    <div className="login__form-input-container">
                        <input className={` login__form-input ${ newErrors.firstNameError !== '' && 'error' }`}
                            type="text"
                            name="firstName"
                            autoComplete='off'
                            placeholder='First Name'
                            value={firstName}
                            onChange={handleChange}
                        />
                        {
                            newErrors.firstNameError !== '' &&
                            <ErrorIcon />
                        }
                    </div>
                    <span className='login__form-error ' >{newErrors.firstNameError}</span>
                    <div className="login__form-input-container">
                        <input className={` login__form-input ${ newErrors.lastNameError !== '' && 'error' }`}
                            type="text"
                            name="lastName"
                            autoComplete='off'
                            placeholder='Last Name'
                            value={lastName}
                            onChange={handleChange}
                        />
                        {
                            newErrors.lastNameError !== '' &&
                            <ErrorIcon />
                        }
                    </div>
                    <span className='login__form-error' >{newErrors.lastNameError}</span>
                    <div className="login__form-input-container">
                        <input className={` login__form-input ${ newErrors.emailError !== '' && 'error' }`}
                            type="email"
                            name="email"
                            autoComplete="username"
                            placeholder='Email Address'
                            value={email}
                            onChange={handleChange}
                        />
                        {
                            newErrors.emailError !== '' &&
                            <ErrorIcon />
                        }
                    </div>
                    <span className='login__form-error' >{newErrors.emailError}</span>
                    <div className="login__form-input-container">
                        <input className={ ` login__form-input ${ newErrors.password !== '' && 'error' }` }
                            type="password"
                            name="password"
                            autoComplete='current-password'
                            placeholder='Password'
                            value={password}
                            onChange={handleChange}
                        />
                        {
                            newErrors.password !== '' &&
                            <ErrorIcon />
                        }
                    </div>
                    <span className='login__form-error' >{newErrors.password}</span>
                    <button type='submit' className='login__form-button' onClick={handleSubmit} >Claim your free trial</button>
                </form>
                <p className='login__form-terms' >By clicking the button, you are agreeing to our <b>Terms and Services</b></p>
            </div>
        </div>
    )
}
