/* eslint-disable react/prop-types */

const SocialLogIn = ({ text }) => {
    return (
        <div>
            <div className="divider divider-neutral text-white">{text}</div>

            <div className=" flex gap-8 md:gap-10 items-center justify-center ">
                <img  className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
            </div>
        </div>
    );
};

export default SocialLogIn;