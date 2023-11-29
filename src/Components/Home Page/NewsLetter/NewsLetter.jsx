import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const NewsLetter = () => {
    const { AuthUser } = useContext(AuthContext)
    const [email, setEmail] = useState(null)
    const axiosPublic = useAxiosPublic()
    useEffect(() =>{
        if(AuthUser?.email){
            setEmail(AuthUser?.email)
        }
        else{
            setEmail('you@example.com')
        }
    },[AuthUser?.email])
    const handleSubscribe = e => {
        e.preventDefault()
        const email = e.target.email.value
        axiosPublic.post('/subscriber', {email : email})
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Subscribed",
                        text: `You are now a subscriber`,
                        icon: "success",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
                else{
                    Swal.fire({
                        title: "Oh!",
                        text: `You already Subscribe`,
                        icon: "info",
                        confirmButtonColor: "#c91b1b",
                        confirmButtonText: 'DONE'
                    });
                }
            })
    }
    return (
        <div className="md:my-20">
            <div className="hero min-h-[40vh]" style={{ backgroundImage: 'url(https://mostneededinfo.com/wp-content/uploads/2023/05/toko-1024x576.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center  flex flex-col">
                    <div className="max-w-lg">
                        <h1 className="text-white mb-5 text-5xl font-bold">Join Our NewsLetter</h1>
                        <p className="text-gray-400 mb-2">Fresh insights, exclusive updates, and inspiration await. Join for the latest trends and expert analyses. Elevate your knowledge with our informed community</p>
                    </div>

                    <form onSubmit={(e) => handleSubscribe(e)}>
                        <div className="flex items-center justify-center gap-2">
                            <input required name="email" type="text" defaultValue={email} className="input input-bordered input-md w-full max-w-xs" />
                            <input className="btn Shared_Color" type="submit" value="Subscribe" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;