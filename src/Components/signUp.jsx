/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
// import { AiOutlineCheck } from "react-icons/ai";
// import { AuthContext } from "../ContextApi/ContextApi";
import { Helmet } from "react-helmet";
// import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../ContextApi/ContextApi";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../Hooks/useAxiosPublic";
const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser } = useContext(AuthContext)

    const [btn, setBtn] = useState(true)

    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()


    //React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()



    //For Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const [captchaError, setCaptchaError] = useState(null)
    //For ValidATE caPTCHA
    const handleCaptcha = (e) => {
        const captcha = e.target.value
        if (captcha.length == 6) {
            if (validateCaptcha(captcha)) {
                setBtn(false)
                setCaptchaError(null)
            }
            else {
                setBtn(true)
            }
        }
        else {
            setCaptchaError('Not Match')
        }

    }


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                const UserData = {
                    email: result.user.email,
                    fUid: result.user.uid
                }
                axiosPublic.post('/users', UserData)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            localStorage.setItem('ToastShowed', JSON.stringify(false))
                            location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')

                        }
                    })
                // axios.post('https://joblancernewserver.vercel.app/jwt', {
                //     email: email,
                //     password: password
                // }, { withCredentials: true })
                //     .then(res => console.log(res.data))
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        reset()
        setBtn(true)
    }




    const handleGoogle = () => {
        // GoogleSignUp()
        //     .then(result => {
        //         console.log(result.user)

        //         const loggedUser = {
        //             userLastSignInTime: result.user.metadata.lastSignInTime,
        //         }
        //         fetch(`https://joblancernewserver.vercel.app/user/${result.user.uid}`, {
        //             method: `PATCH`,
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(loggedUser)
        //         })
        //             .then(res => res.json())
        //             .then(data => console.log(data))
        //         localStorage.setItem('ToastShow', JSON.stringify('false'))
        //         axios.post('https://joblancernewserver.vercel.app/jwt', {
        //             email: result?.user.email,
        //         }, { withCredentials: true })
        //             .then(res => console.log(res.data))
        //         location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
        //     })
        //     .catch((error) => {
        //         const errorMessage = error.message;
        //         console.log(errorMessage);
        //     });
    }


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sign Up</title>
            </Helmet>
            <div className="pt-24 pb-10">
                <div className="flex flex-col-reverse lg:flex-row gap-4  justify-center items-center">
                    <div className=" lg:w-[500px]">
                        <div >
                            <p className="text-xl text-[#D1A054B2]">Register Now :</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#D1A054B2]">Email?</span>
                                    </label>
                                    <input  {...register("email")} type="email" placeholder="ghost@email.com" className="input input-bordered input-success w-full max-w-md" />
                                </div>
                                <div className=" ">
                                    <label className="label">
                                        <span className="label-text text-[#D1A054B2]">Password?</span>
                                    </label>
                                    <input  {...register("password", { required: true, minLength: 6, pattern: /(?=.*[@$!%*?&])(?=.*[A-Z])/ })} type="password" placeholder="1234A@" className="input input-bordered input-success  w-full max-w-md" />
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-600">password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600">password must contain 6 character</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600">password must contain special and Uppercase character</p>
                                    )}
                                </div>
                                <div className=" ">
                                    <label className="label">
                                        <LoadCanvasTemplateNoReload />
                                    </label>
                                    <input onChange={(e) => handleCaptcha(e)} name="captcha" required type="text" placeholder="Type the Captcha Above" className="input input-bordered input-success  w-full max-w-md" />
                                    <p className="py-1 text-red-600">{captchaError}</p>
                                </div>
                                <input disabled={btn} type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-[#D1A054B2] text-white hover:text-[#D1A054B2]" />
                            </form>
                            <p>Already HAve An Account <Link to={'/logIn'}>Log In</Link> </p>
                            <div className="divider max-w-md text-[#D1A054B2]">OR Sign Up With</div>

                            <div className=" max-w-md w-full mt-2 rounded-xl border  bg-white ">
                                <div className=" flex gap-8 md:gap-16 items-center justify-center py-4 ">
                                    <img onClick={handleGoogle} className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[410px] pl-10 pt-4 lg:block hidden">
                        <img src="https://i.ibb.co/ccQm9Vm/authentication1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;