import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

export default function User() {
  // Fetch data and send to the single component
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
}
