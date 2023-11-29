/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col justify-start mt-10 mb-6 shadow-lg z-10 ">
            <div className="text-start px-4  w-full">
                <p className="skeleton w-fit bg-[#c91b1b] bg-clip-text text-transparent  uppercase text-4xl font-semibold">{title}</p>
                <p className="text-gray-400">{subtitle}</p>
            </div>
            <div className="skeleton h-1 Shared_Color mt-1 w-full"></div>
        </div>
    );
};

export default SectionTitle;