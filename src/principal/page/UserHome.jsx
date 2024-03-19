export const UserHome = () => {
  return (
    <>
        <div className="grid grid-cols-4 h-screen">
            <div className="col-start-1 col-end-2 m-2 space-y-0 bg-slate-900 rounded-2xl">
                <div className="flex flex-col justify-start items-center py-2 h-full">
                    <button className="w-80 py-2 my-0 m-0 flex flex-row items-start justify-center rounded-md hover:bg-slate-800">
                        <div className="flex flex-col py-1 my-0 m-0">
                            <img src="" alt="" />
                        </div>
                        <div className="flex flex-col py-1 my-0 m-1">
                            <p className="mb-2 text-sm text-white">HOME</p>
                        </div>
                    </button>
                    <button className="w-80 py-2 flex flex-row items-start justify-center rounded-md hover:bg-slate-800">
                        <div className="flex flex-col py-1 my-0 m-0">
                            <img src="" alt="" />
                        </div>
                        <div className="flex flex-col py-1 my-0 m-1">
                            <p className="mb-2 text-sm text-white">HOME</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="col-start-2 col-end-5 m-2 space-x-1 bg-slate-900 rounded-2xl">02</div>
        </div>
    </>
  )
}
