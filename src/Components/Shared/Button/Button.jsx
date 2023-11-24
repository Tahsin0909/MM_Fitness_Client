/* eslint-disable react/prop-types */

const Button = ({ text }) => {
    return (
        <button className="Shared_Color py-2 px-4 hover:bg-white hover:text-[#c91b1b] rounded-md">
            {text}
        </button>
    );
};

export default Button;