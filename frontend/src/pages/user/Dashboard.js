import { useAuth } from "../../context/auth";
import Sidebar from "../../components/nav/Sidebar";

export default function Dashboard() {
  const [auth, setAuth] = useAuth();

  return (
    <div>
       
      <h1 className="display-6 bg-success text-light p-3">Dashboard</h1>
      <Sidebar />
    </div>
  );
}