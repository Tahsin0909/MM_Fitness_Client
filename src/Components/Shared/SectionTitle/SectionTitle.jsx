/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="border py-4 px-2 mb-6 shadow-lg">
            <div className="flex flex-col justify-start   w-fit">
                <div className="text-start px-4  w-full">
                    <p className="skeleton w-fit bg-[#c91b1b] bg-clip-text text-transparent  uppercase text-4xl font-semibold">{title}</p>
                    <p className="text-gray-400">{subtitle}</p>
                </div>
                <div className="skeleton h-1 Shared_Color mt-1 w-full"></div>
            </div>
        </div>
    );
};

export default SectionTitle;