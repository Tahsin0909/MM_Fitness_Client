import './Spinner.css'
const Spinner = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;