import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Components/ContextApi/ContextApi";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const {AuthUser } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: UserData } = useQuery({
        queryKey: ['userDataDb'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${AuthUser?.email}`);
            return res.data;
        }
    })
    return [UserData]
};

export default useUser;