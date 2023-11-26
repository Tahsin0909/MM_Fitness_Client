import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';
import Cover from "../Shared/Cover/Cover";

let pageParams = 0
const getImage = async () => {
    const res = await fetch(`http://localhost:5000/gallery?limit=10&offset=${pageParams}`)
    const data = await res.json()
    return { data, prvOffset: pageParams }
}


const GAllery = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ['image'],
        queryFn: getImage,
        getNextPageParam: (lastPage) => {
            if (lastPage.prvOffset <= 20) {
                return pageParams = lastPage.prvOffset + 10
            }
        }

    })
    // console.log(data);
    const images = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.data]
    }, [])


    return (
        <div className="">
            <Cover title={'Gallery'} />

            <div className="h-full mx-6 flex justify-center items-center my-5">
                <InfiniteScroll
                    dataLength={32}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                >
                    {
                        isLoading ? <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                            <div className="skeleton  animate-pulse w-[450px] h-[300px]"></div>
                        </div>
                            :
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {
                                    images?.map((data, idx) => <div key={idx}>
                                        <img className="w-[450px] h-[300px] rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105  duration-300" src={data.url} alt="" />

                                    </div>)
                                }
                            </div>
                    }

                </InfiniteScroll>
            </div>

        </div>
    );
};

export default GAllery;