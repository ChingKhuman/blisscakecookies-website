import http from "../../helper/Constant";

class ProductService {
  getAll = () => {
    return http.get("/product");
  };
  getSingleByID = (id) => {
    return http.get(`/product/${id}`);
  };
}

export default new ProductService();
