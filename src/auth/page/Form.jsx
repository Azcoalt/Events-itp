
export const Form = () => {
  return (
    <>
        <div className=" bg-gradient-to-b from-blue-500 to-indigo-950 h-screen overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen animate-zoom-in animate-delay-700">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0">
                    <div className=" relative">
                        <img src="https://gabrielasorianocervantes.files.wordpress.com/2016/06/itp-03.jpg?w=300&h=300" alt=""
                            className=" w-[400px] h-full hidden rounded-r-2xl md:block object-cover" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="m-b3 text-4xl font-rubik">REGISTRATE</span>
                        <span className=" font-light text-gray-400 mb-8"> INGRESA TUS DATOS PARA PODER REGISTRARTE</span>
                        <form action="">
                            <div className="flex flex-row py-2">
                                <div className="flex flex-col py-1 my-0 m-0">
                                    <label className="mb-2 text-sm">NOMBRE</label>
                                    <input type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                        name="nombre"
                                        id="nombre" />
                                </div>
                                <div className="flex flex-col py-1 my-0 m-1">
                                    <label className="mb-2 text-sm">APELLIDOS</label>
                                    <input type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                        name="apellido"
                                        id="apellido" />
                                </div>
                            </div>
                            <div className=" py-2">
                                <label className="mb-0 text-sm">EMAIL</label>
                                <input type="email" name="email" id="email"
                                    className=" w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                            </div>
                            <div className="py-2">
                                <label className=" mb-0 text-sm">PASSWORD</label>
                                <input type="password" name="password" id="password" 
                                   className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" />
                            </div>
                            <div className="flex flex-row py-4">
                                <div className="flex flex-col py-0 my-0 m-0">
                                    <label className="mb-2 text-sm">N° CONTROL</label>
                                    <input type="text" name="n-control" id="n-control" 
                                        className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                                </div>
                                <div className="flex flex-col py-0 my-0 m-2">
                                    <label className="mb-2 text-sm">CARRERA</label>
                                    <select name="carrera" id="carrera" className="w-full h-full border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" >
                                        <option value="tics">TICS</option>
                                        <option value="mecanica">MECANICA</option>
                                        <option value="industrial">INDUSTRIAL</option>
                                        <option value="electrica">ELECTRICA</option>
                                        <option value="administracion de empresas">ADMINISTRACION DE EMPRESAS</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-blue-700 hover:text-white hover:border hover:border-blue-500 hover:animate-heartbeat">REGISTRARE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
