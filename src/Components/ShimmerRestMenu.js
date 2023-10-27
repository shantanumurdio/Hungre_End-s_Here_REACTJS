export const ShimmerRestMenu = () => {
    return (
      <>
        <div className="border flex   items-center bg-gray-100 h-64 w-full mt-10">
          <h1 className="border bg-gray-300 h-44 w-72 rounded-md ml-80"></h1>
          <div>
            <h1 className="border bg-gray-300 w-48 ml-8 p-1 my-3 h-10"></h1>
            <h1 className="border bg-gray-300 w-36 ml-8 p-1 my-3 h-5"></h1>
            <h1 className="border bg-gray-300 w-72 ml-8 p-1 my-3 h-7"></h1>
          </div>
        </div>
        <div className="flex p-6">
          <h1 className="border h-6 ml-80 w-44 bg-gray-300"></h1>
        </div>
        <div className=" border flex flex-col justify-center w-full">
          {Array(16)
            .fill("")
            .map((e, index) => (
              <div
                key={index}
                className="border justify-between w-[900px] py-3 my-5 ml-80 bg-gray-100"
              >
                <div className="flex justify-between items-center px-2">
                  <div className="ml-5">
                    <h1 className="border bg-gray-300 w-56 h-7 my-3"></h1>
                    <h1 className="border bg-gray-300 w-20 h-5 my-3"></h1>
                    <h1 className="border bg-gray-300 w-96 h-12 my-3"></h1>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="border bg-gray-300 w-32 h-24"></h1>
                    <h1 className="border bg-gray-300 w-16 h-5 mt-2 p-3"></h1>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };