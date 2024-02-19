import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

export default function Product() {
  // Fetch data and send to Single Component

  return (
    <div className="Product">
      <Single {...singleProduct} />
    </div>
  );
}
