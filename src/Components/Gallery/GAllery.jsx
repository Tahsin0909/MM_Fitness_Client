import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from 'react-infinite-scroll-component';


const getImage = async ({ pageParams = 0 }) => {
    const res = await fetch(`http://localhost:5000/gallery?limit=12&offset=${pageParams}`)
    const data = await res.json()
    return { ...data , prvOffset:pageParams }
}


const GAllery = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ['image'],
        queryFn: getImage,
        getNextPageParam: (lastPage) => lastPage.prvOffset + 12,
    })
    console.log(data);
    // const images = data?.pages.reduce((acc, page) =>{
    //     console.log(acc);
    //     console.log(page);
    //     return [...acc, page]
    // }, [])

    // console.log(images);
    return (
        <div className="h-[200vh]">
            <p>GAllery</p>
            <InfiniteScroll
            dataLength={data?.pages[0].length || 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            >
                <div>
                    {
                        data?.pages.map(data => <div key={data._id}>
                            <img className="w-40" src={data.url} alt="" />
                        </div> )
                    }
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default GAllery;