import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={"bg-blue-100 h-screen flex items-center justify-center"}>
      <div className={"flex flex-col rounded-lg gap-2.5 bg-white p-20 py-5 items-center"}>
        <span className={"text-pink-300 text-xl font-bold"}>Keigo Chat</span>
        <span className={"text-pink-300 text-xs"}>Register</span>
        <form className={"flex flex-col gap-3.5"}>
          <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"} type={"text"}
                 placeholder={"display name"}/>
          <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"} type={"text"}
                 placeholder={"email"}/>
          <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"}
                 type={"password"} placeholder={"password"}/>
          <input className={"p-4 border-0 border-b border-solid border-purple-100 placeholder-gray-400"} type={"file"}
                 id={"file"} style={{display: "none"}}/>
          <label className={"size-9 flex items-center gap-3.5 text-sm cursor-pointer"} htmlFor={"file"}>
            <img src={"https://image.sliverkeigo.fun/file/fe1e9e41e0c3b3a1758cf.png"}/>
            <span className={"flex text-purple-400 text-center"}>Upload Avatar</span>
          </label>
          <button className={"bg-blue-300 text-white p-3 font-bold border-0 cursor-pointer"}>Sign Up</button>
        </form>
        <p className={"text-pink-400 text-sm mt-3"}>
          You do have an account? <Link to="/login" className="text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register