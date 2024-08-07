import { Link } from 'react-router-dom';

const Login = () => {

    return (
      <div className={"bg-gray-100 h-screen flex items-center justify-center"}>
        <div className={"flex flex-col rounded-lg gap-2.5 bg-white p-16 py-5 items-center shadow-2xl"}>
          <span className={"text-blue-600 text-xl font-bold"}>Ori Chat</span>
          <span className={"text-gray-600 text-xs"}>Login</span>
          <form className={"flex flex-col gap-3.5"}>
            <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"} type={"text"}
                   placeholder={"email"}/>
            <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"}
                   type={"password"} placeholder={"password"}/>
            <button className={"bg-blue-500 text-white p-3 font-bold border-0 cursor-pointer hover:bg-blue-600"}>Sign in</button>
          </form>

          <p className={"text-gray-600 text-sm mt-3"}>
            You don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-600">Register</Link>
          </p>
        </div>
      </div>
    )
}

export default Login;