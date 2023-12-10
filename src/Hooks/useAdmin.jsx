import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/ContextApi/ContextApi";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { AuthUser } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();
    const { data ,isPending } = useQuery({
        queryKey: ['isRole'],
        queryFn: async () => {
            if (AuthUser?.email) {
                const res = await axiosSecure.get(`/users/admin/${AuthUser?.email}`);
                console.log(res.data);
                return res.data;
            }
        }
    })
    return [data ,isPending]
};

export default useAdmin;