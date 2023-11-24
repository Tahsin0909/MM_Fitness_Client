import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";


const LogIn = () => {
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit,reset} = useForm();
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
                    console.log(data);
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
                                <div className="mt-6 ">
                                    <input className="btn Shared_Color w-full" type="submit" value="Log In" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;