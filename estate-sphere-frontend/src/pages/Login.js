
import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";
import { useNavigate, Link,useLocation} from "react-router-dom";
import {useAuth} from '../context/auth';

export default function Login() {
  const [auth,setAuth] = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
     const {data} = await axios.post('login', {
       email,
       password
     });
     if(data?.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      }
      setAuth(data);
      localStorage.setItem('auth', JSON.stringify(data));
      toast.success('Log in successful');
      setLoading(false);
      location?.state !== null ? navigate(location.state) : navigate('/dashboard');
     console.log(data);
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong');
      setLoading(false);
    }
  }
  return (
    <div>
      <h1 className="display-6 bg-success text-light p-3">Login</h1>
      <div
        className="container"
      >
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value = {email} onChange={(e) => {
                  setEmail(e.target.value);
                }} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <button disabled= {loading} type="submit" className="btn btn-primary">
                {loading ? 'Loading...': 'Login'}
              </button>
            </form>
            <Link to ="/auth/forgot-password">forgot password</Link>
          </div>
        </div>

      </div>

    </div>
  );
}