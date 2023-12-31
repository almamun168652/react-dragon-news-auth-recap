import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const {logIn} = useContext(AuthContext);

    const location = useLocation();
    
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        
        // log in
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center mt-20">
                <h1 className="text-2xl font-semibold uppercase">Login Now</h1>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-2/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-accent">Login</button>
                    </div>
                </form>
                <p className="mt-4">Don`t have an account. <Link className="text-purple-500" to="/register">Register Here</Link></p>
            </div>
        </div>
    );
};

export default Login;