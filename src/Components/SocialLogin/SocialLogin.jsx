import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
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