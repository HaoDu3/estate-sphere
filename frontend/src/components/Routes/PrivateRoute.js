import {useEffect,useState} from 'react'
import {Outlet} from 'react-router-dom'
import {useAuth} from '../../context/auth'
import axios from 'axios'

export default function PrivateRoute() {
    const [auth, setAuth] = useAuth();
    const [ok,setOk] = useState(false);
    useEffect(() => {
        if(auth?.token) { getCurrentUser(); }
    }, [auth?.token]);

    const getCurrentUser = async() => {
        try {
            const {data} = await axios.get('/current-user',{
                headers: {
                    authorization: auth?.token
                },
            });
            setOk(true);
        } catch (error) {
            setOk(false);
        }
    };

   return ok ? <Outlet /> : <div>loading...</div>;
}