// src/components/Search.tsx
const Search = () => {
  return (
    <div className={"border-b border-solid border-gray-300 dark:border-gray-700"}>
      <div className={"p-3"}>
        <input className={"bg-transparent border-none text-gray-900 dark:text-gray-100 outline-none placeholder-gray-500 dark:placeholder-gray-400"} type={"text"} placeholder={"find a user"} />
      </div>
      <div className={"flex p-3 items-center gap-2.5 text-gray-900 dark:text-gray-100 cursor-pointer hover:bg-indigo-300 dark:hover:bg-indigo-700"}>
        <img className={"h-12 w-12 rounded-3xl object-cover"} src={"https://avatars.githubusercontent.com/u/112426853?v=4"} />
        <div className={""}>
          <span>Keigo</span>
        </div>
      </div>
    </div>
  );
};

export default Search;