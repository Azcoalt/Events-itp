export const Login = () => {
  return (
    <>
        <div className=" bg-gradient-to-b from-blue-500 to-indigo-950 h-screen overflow-y-auto">
            <div className=" flex items-center justify-center min-h-screen animate-blurred-fade-in animate-delay-500">
                <div className=" relative flex flex-col m-6 space-y-8 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className=" mb-3 text-4xl font-rubik">BIENVENIDO</span>
                        <span className=" font-light text-gray-400 mb-8">INGRESA TUS DATOS</span>
                            <form action="">
                                <div className="py-4">
                                    <label className=" mb-2 text-sm">EMAIL</label>
                                    <input type="email"
                                        className=" w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                                <div className=" py-4">
                                    <label className=" mb-2 text-sm">PASSWORD</label>
                                    <input type="password"
                                        className=" w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <button className=" w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-blue-600 hover:text-white hover:border hover:border-blue-300" >INICIAR SESION</button>
                                <div className=" text-center text-gray-400">
                                    ¿NO TIENES UNA CUENTA?
                                    <span className=" font-bold text-black"> REGISTRATE</span>
                                </div>
                            </form>
                    </div>
                    <div className=" relative">
                        <img src="https://lh3.googleusercontent.com/p/AF1QipMsb62v6vNKNErrqd4B7_DkqEK_nOhwkATiuh3V=s680-w680-h510" alt="" 
                            className=" w-[400px] h-full hidden rounded-r-2xl md:block object-cover"/>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}
