import { SingUpForm } from "../components/SingUpForm"

export const LoginPage = () => {
    return (
        <div className='login' >
            <div className="login__data">
                <h1 className="login__title">Learn to code by watching others</h1>
                <p className="login__description">
                    See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
                </p>
            </div>
            <SingUpForm />
        </div>
    )
}
