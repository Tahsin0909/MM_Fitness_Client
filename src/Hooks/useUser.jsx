import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/ContextApi/ContextApi";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const {AuthUser } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: UserData } = useQuery({
        queryKey: ['userDataDb'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${AuthUser?.email}`);
            return res.data;
        }
    })
    return [UserData]
};

export default useUser;