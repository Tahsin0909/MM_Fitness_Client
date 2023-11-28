import useForums from "../../Hooks/useForums";
import Cover from "../Shared/Cover/Cover";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
const Forums = () => {
    const [data, isPending] = useForums()
    console.log(data);
    return (
        <div>
            <Cover title={'Forums Article'} />
            <div className="flex justify-center items-center mb-10">
                {
                    isPending ? <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                        <div className="skeleton  animate-pulse  w-[300px] h-[500px]"></div>
                    </div>
                        :
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                            {
                                data.map(post => <div key={post._id}>
                                    <div className="w-[300px] shadow-lg hover:scale-110 duration-300">
                                        <img className="w-[300px] h-[200px] rounded-t-lg" src={post.postImage} alt="" />
                                        <div className="p-2 border rounded-b-lg bg-neutral-content">
                                            <div className="">
                                                <div className="flex justify-between items-start">
                                                    <p className="w-[200px] font-semibold hover:underline">{post.title.slice(0, 40)}</p>
                                                    <div className="flex gap-1 items-center text-gray-400">
                                                        <FaCalendarAlt size={15} />
                                                        <p className="text-sm">{post.dateTime}</p>
                                                    </div>
                                                </div>
                                                <p className=" text-sm mt-2">{post.content.slice(0, 120)}...</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-4">
                                                    <AiFillLike size={20} className="hover:scale-125 duration-300" />
                                                    <AiFillDislike size={20} className="hover:scale-125 duration-300" />
                                                    <IoMdShare size={20} className="hover:scale-125 duration-300" />
                                                </div>
                                                <MdBookmarkAdd size={20} className="hover:scale-125 duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Forums;