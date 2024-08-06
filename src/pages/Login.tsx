import { Link } from 'react-router-dom';

const Login = () => {

    return (
      <div className={"bg-blue-100 h-screen flex items-center justify-center"}>
        <div className={"flex flex-col rounded-lg gap-2.5 bg-white p-16 py-5 items-center"}>
          <span className={"text-pink-300 text-xl font-bold"}>Keigo Chat</span>
          <span className={"text-pink-300 text-xs"}>Login</span>
          <form className={"flex flex-col gap-3.5"}>
            <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"} type={"text"}
                   placeholder={"email"}/>
            <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"}
                   type={"password"} placeholder={"password"}/>
            <button className={"bg-blue-300 text-white p-3 font-bold border-0 cursor-pointer"}>Sign in</button>
          </form>

          <p className={"text-pink-400 text-sm mt-3"}>
            You don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </div>
      </div>
    )
}

export default Login;