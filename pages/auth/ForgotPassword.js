
import axios from "axios";
import {useState} from "react";
import toast from "react-hot-toast";
import { useNavigate, Link} from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
     const {data} = await axios.post('/forgot-password', {
       email,
     });
     if(data?.error) {
        toast.error(data.error);
        setLoading(false);
        return;
      }
      toast.success('Please check your email to reset password');
      setLoading(false);
     console.log(data);
     navigate('/');
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong');
      setLoading(false);
    }
  }
  return (
    <div>
      <h1 className="display-1 bg-primary text-light p-5">Forgot Password</h1>
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
              <button disabled= {loading} type="submit" className="btn btn-primary">
                {loading ? 'Loading...': 'Submit'}
              </button>
            </form>
            <Link className= "text-danger" to ="/login">Back to Login</Link>
          </div>
        </div>

      </div>

    </div>
  );
}