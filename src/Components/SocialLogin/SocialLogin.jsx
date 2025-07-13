import useAuth from "../../hooks/useAuth";
import {useNavigate } from 'react-router-dom';
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            navigate('/')
            const userInfo= {
                email: result.user?.email,
                name: result.user?.displayName

            }
            axiosPublic.post('/users',userInfo)
            .then(res=> {
                console.log(res.data);
            })
        })
    }
    return (
        <div>
             <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;