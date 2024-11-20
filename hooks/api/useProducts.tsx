import { useQuery } from "@tanstack/react-query";
import { QUERIES } from "@/constants/queries";

const useProducts = () => {
    return useQuery({
        queryKey: [QUERIES.products],
        queryFn : () => "asdasd"
    });
};

export default useProducts;