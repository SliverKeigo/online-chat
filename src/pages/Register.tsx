import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={"bg-gray-100 h-screen flex items-center justify-center"}>
      <div className={"flex flex-col rounded-lg gap-2.5 bg-white p-16 py-5 items-center shadow-2xl"}>
        <span className={"text-blue-600 text-xl font-bold"}>Ori Chat</span>
        <span className={"text-gray-600 text-xs"}>Register</span>
        <form className={"flex flex-col gap-3.5"}>
          <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"} type={"text"}
                 placeholder={"display name"}/>
          <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"} type={"text"}
                 placeholder={"email"}/>
          <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"}
                 type={"password"} placeholder={"password"}/>
          <input className={"p-4 border-0 border-b border-solid border-gray-300 placeholder-gray-500"} type={"file"}
                 id={"file"} style={{display: "none"}}/>
          <label className={"flex items-center gap-3.5 size-8 text-sm cursor-pointer"} htmlFor={"file"}>
            <img src={"https://image.sliverkeigo.fun/file/fe1e9e41e0c3b3a1758cf.png"}/>
            <span className={"text-blue-600 text-center"}>Upload Avatar</span>
          </label>
          <button className={"bg-blue-500 text-white p-3 font-bold border-0 cursor-pointer hover:bg-blue-600"}>Sign Up</button>
        </form>
        <p className={"text-gray-600 text-sm mt-3"}>
          You do have an account? <Link to="/login" className="text-blue-500 hover:text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register