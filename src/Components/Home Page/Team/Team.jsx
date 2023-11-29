
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useTrainer from "../../../Hooks/useTrainer";

const Team = () => {
    const [data, isPending] = useTrainer()
    return (
        <div className="my-20">
            <SectionTitle title={"Our Dedicated Team"} subtitle={'We have the Best Team on this Planet'} />
            {
                isPending ? <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-4">
                    <div className="flex flex-col gap-4 w-[280px] md:w-[350px] ">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-[280px] md:w-[350px]">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-[280px] md:w-[350px]">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-[280px] md:w-[350px]">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
                    :
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto w-[280px] md:w-full  gap-4">
                        {
                            data?.slice(0, 3).map(card => <div key={card._id} className="relative flex flex-col text-gray-700 bg-white shadow-md w-[280px] md:w-[350px] rounded-xl bg-clip-border">
                                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                                    <img className="w-full h-full object-cover" src={card.photo_url} alt="profile-picture" />
                                </div>
                                <div className="p-2 text-center">
                                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {card.name}
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text">
                                        {card.skill[0]}
                                    </p>
                                </div>
                                <div className="flex justify-center gap-4 p-2">
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" />
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png" alt="" />
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="" />
                                    <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/2111/2111646.png" alt="" />
                                </div>
                            </div>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Team;