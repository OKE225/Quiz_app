const Loading = () => {
  //   <h1 className="">Connecting...</h1>
  return (
    <h1 className=" flex items-center text-amber-500">
      <div className="h-3 w-3 bg-amber-500 rounded-full animate-pulse mr-1"></div>
      Connecting...
    </h1>
  );
};

export default Loading;
