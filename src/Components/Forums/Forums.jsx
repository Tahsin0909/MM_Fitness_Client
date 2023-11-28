import useForums from "../../Hooks/useForums";
import Cover from "../Shared/Cover/Cover";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
const Forums = () => {
    const [data, isPending] = useForums()
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
                                    <div className="w-[300px] shadow-lg ">
                                        <img className="w-[300px] h-[200px] rounded-t-lg" src={post.postImage} alt="" />
                                        <div className="p-2 border rounded-b-lg bg-neutral-content">
                                            <div className="h-[150px]">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex gap-2 items-center mb-2">
                                                        <FaTag />
                                                        <p>{post.category}</p>
                                                    </div>
                                                    <div className="flex gap-1 items-center text-gray-400">
                                                        <FaCalendarAlt size={15} />
                                                        <p className="text-sm">{post.dateTime}</p>
                                                    </div>
                                                </div>
                                                <p className=" font-semibold hover:underline">{post.title.slice(0, 50)}</p>
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