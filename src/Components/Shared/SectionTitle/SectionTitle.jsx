/* eslint-disable react/prop-types */

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="flex justify-center">
            <div className="text-center border-t-2 px-4 border-b-2">
                <p className="uppercase text-4xl font-semibold shared_text_color border-t-2">{title}</p>
                <p className="text-gray-400">{subtitle}</p>
            </div>
        </div>
    );
};

export default SectionTitle;