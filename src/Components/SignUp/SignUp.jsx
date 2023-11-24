/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogIn from "../Shared/Social  LogIn/SocialLogIn";
import { AuthContext } from "../ContextApi/ContextApi";
// import { useLocation, useNavigate } from "react-router-dom";


const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    // Navigate After LOgIn
    // const location = useLocation()
    // const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const [passwordError, setPasswordError] = useState('')

    //Handle Login
    const onSubmit = data => {

        const User = {
            name: data.name,
            email: data.email,
            password: data.password,
            profileImage: data.profileImage,
            role: 'user'
        }
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
                    console.log(User);

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
            <div className=" -translate-y-20">
                <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/xMSG4f1/a3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content">
                        <div className="md:p-16 p-10 rounded-lg glass md:mt-0 mt-20">
                            <h1 className="text-center text-2xl text-white font-bold">Register Now:</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col md:flex-row gap-4 items-center">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-white">Name</span>
                                        </label>

                                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" />

                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text text-white">Profile Image</span>
                                        </label>

                                        <input {...register("Image")} type="text" placeholder="URL..." className="input input-bordered" />

                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 items-center">
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
                                    </div>

                                </div>
                                <span className="label-text text-red-600 font-bold max-w-[210px]">{passwordError}</span>
                                <p className="text-white">Already have an account? <Link className="hover:underline " to={'/logIn'}>Log In</Link> </p>
                                <div className="mt-6 ">
                                    <input className="btn Shared_Color w-full" type="submit" value="Register" />
                                </div>
                            </form>
                            {/* social sign up */}
                            <div>
                                <SocialLogIn text={'Or Sign up With'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;