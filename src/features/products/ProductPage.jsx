import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./productApi";
// import ProductTable from "./ProductTable";
import ProductFilters from "./ProductFilters";
import Loader from "../../components/Loader";
import ErrorState from "../../components/ErrorState";
import ProductCard from "./ProductCard";

function ProductPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader message="Loading products..." />;
  if (isError) return <ErrorState message={error.message} />;

  return (
    <div className="space-y-6">
      <ProductFilters />
      {/* <ProductTable products={data} /> */}
       <ProductCard products={data} />
    </div>
  );
}

export default ProductPage;
