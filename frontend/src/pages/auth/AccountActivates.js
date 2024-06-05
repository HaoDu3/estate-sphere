import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useAuth} from '../../context/auth';


export default function AccountActivate() {
    const [auth, setAuth] = useAuth();

    const { token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(token) requestActication();
    }, [token]);

    const requestActication = async () => {
        try {
            const {data} = await axios.post(`/signup`, { token });
            if(data?.error) return toast.error(data.error);
            localStorage.setItem('auth', JSON.stringify(data));
            console.log('Account activation');
            setAuth(data);
            toast.success("Successfully activated account.");
            navigate('/');
        } catch (error) {
            console.log('Account activation error', error);
            toast.error(error.response.data.error);
        }
    };

    console.log (token);
    return (
      <div className="display-6 bg-success text-light p-3">
        Please Wait...
        </div>
    );
}