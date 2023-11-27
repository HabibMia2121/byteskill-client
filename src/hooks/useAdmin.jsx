import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin =  () => {
    const { user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isPending } = useQuery({
        queryKey: ['isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/user/admin/${user?.email}`);
            return res.data?.admin;
        }
    });
   
    return [isAdmin, isPending]
};

export default useAdmin;