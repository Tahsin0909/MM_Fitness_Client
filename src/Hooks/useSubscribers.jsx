import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSubscribers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: Subscriber, isPending  } = useQuery({
        queryKey: ['subscriber'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/subscriber`);
            return res.data;
        }
    })
    return [Subscriber, isPending ]
};

export default useSubscribers;