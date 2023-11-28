/* eslint-disable react/prop-types */

const Button = ({ text }) => {
    return (
        <button className="Shared_Color md:text-base text-sm py-2 px-4 hover:bg-white hover:font-semibold border border-[#c91b1b] hover:text-[#c91b1b] rounded-md hover:scale-[.90] hover:relative duration-300">
            {text}
        </button>
    );
};

export default Button;