/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogIn from "../Shared/Social  LogIn/SocialLogIn";
import { AuthContext } from "../ContextApi/ContextApi";
import toast, { Toaster } from "react-hot-toast";
// import { useLocation, useNavigate } from "react-router-dom";


const LogIn = () => {
    const { SignInUser } = useContext(AuthContext)
    // Navigate After LOgIn
    // const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const [passwordError, setPasswordError] = useState('')

    //Handle Login
    const onSubmit = data => {
        // regx to check UpperCAse
        const UpperRegX = /(?=.*[A-Z])/;

        // regx to check special charecter
        const SpecialRegX = /(?=.*[@$!%*?&])/

        if (data.password.length >= 6) {

            // to check UpperCAse
            if (UpperRegX.test(data.password)) {

                // to check special charecter
                if (SpecialRegX.test(data.password)) {
                    setPasswordError('')
                    SignInUser(data.email, data.password)
                        .then(result => {
                            const User = {
                                name: result.user.displayName,
                                email: result.user.email,
                                emailVerified: result.user.emailVerified,
                                creationTime: result.user.metadata.creationTime,
                                lastSignInTime: result.user.metadata.lastSignInTime,
                                profileImage: result.user.photoURL,
                                role: 'user'
                            }
                            console.log(User)
                            localStorage.setItem('ToastShowed', JSON.stringify('false'))
                            navigate('/')
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            toast.error(`${errorMessage}`)
                        });
                    reset()
                }
                else {
                    setPasswordError('Password must contain at least one special character.')
                }
            }
            else {
                setPasswordError('Password must contain at least one uppercase letter')
            }
        }
        else { setPasswordError('Password must be at least 6 characters long.') }
    }
    return (
        <div>
            <div className="-translate-y-20">
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/xMSG4f1/a3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content">
                        <div className="md:p-16 p-10 rounded-lg glass">
                            <h1 className="text-center text-2xl text-white font-bold">Log In Now:</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>

                                    <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />

                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>

                                    <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />

                                    <label className="label">
                                        <span className="label-text text-red-600 font-bold">{passwordError}</span>
                                    </label>
                                </div>
                                <p className="text-white text-sm">Dont't have an account? <Link className="hover:underline " to={'/signUp'}>Sign Up</Link> </p>
                                <div className="mt-6 ">
                                    <input className="btn Shared_Color w-full" type="submit" value="Log In" />
                                </div>
                            </form>
                            {/* social Login */}
                            <div>
                                <SocialLogIn text={'Or Log In With'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default LogIn;