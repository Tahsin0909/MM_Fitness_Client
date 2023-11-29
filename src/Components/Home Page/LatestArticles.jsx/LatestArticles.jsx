import { FaCalendarAlt } from "react-icons/fa";
import useForums from "../../../Hooks/useForums";
import { FaTag } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../../Shared/Button/Button";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const LatestArticles = () => {
    const [data, isPending] = useForums()
    return (
        <div>
            <SectionTitle title={'LAtest Article'} subtitle={ 'Article posted by our trainer' }/>
            <div className="flex justify-center items-center mb-20">
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
                                data.slice(0, 4).map(post => <div key={post._id}>
                                    <div className="w-[300px] shadow-lg hover:scale-110 duration-300">
                                        <img className="w-[300px] h-[200px] rounded-t-lg" src={post.postImage} alt="" />
                                        <div className="p-2 border rounded-b-lg bg-neutral-content">
                                            <div className="mb-2">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex gap-2 items-center mb-2 shared_text_color">
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
                                            <Link to={'/forum'}>
                                                <Button text={'Know More'} />
                                            </Link>
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


export default LatestArticles;