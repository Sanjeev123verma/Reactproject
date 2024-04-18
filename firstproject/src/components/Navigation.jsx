

const Navigation = () => {
  return (
   <body className=" h-screen">
    <nav className="flex item-center text-center justify-between w-[100%] bg-slate-500 mx-auto px-5 py-3">

      <div>
        <img
          src="/Images/Nike_logo.png"
          alt="logo"
          className=" md:w-32 w-20 cursor-pointer "
        />
      </div>

      <div className="absolute md:static bg-slate-500 md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center text-center pl-16">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-6 text-2xl font-semibold ">
          <li classNam="list-none inline-block">
            {" "}
            <a className="hover:text-white"href="#">Menu</a>
          </li>
          <li classNam="list-none inline block">
            {" "}
            <a className="hover:text-white"href="#">Location</a>
          </li>
          <li classNam="list-none inline-block">
            {" "}
            <a
            className="hover:text-white" href="#">About</a>
          </li>
          <li classNam="list-none inline-block">
            {" "}
            <a 
            className="hover:text-white"href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3 ">
      <button className=" md:text-2xl text-white font-semibold bg-red-600 px-4 py-[6px] mr-4 rounded-full hover:bg-[#c83d3dc5] ">
          Login
        </button>
      <span className=" text-3xl cursor-pointer md:hidden hover:text-white"> 
      <ion-icon onclick="onToggleMenu(this)" name="menu-outline"></ion-icon>
      </span> 
      </div>
      
    </nav>
    </body>
  );
};

export default Navigation;
