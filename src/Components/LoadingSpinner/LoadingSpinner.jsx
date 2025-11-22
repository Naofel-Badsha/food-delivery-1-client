const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center mt-72">
      {/*-----------skeleton--------1----------*/}
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full  bg-slate-200"></div>
        <div className="skeleton h-4 w-28  bg-slate-200"></div>
        <div className="skeleton h-4 w-full  bg-slate-200"></div>
        <div className="skeleton h-4 w-full  bg-slate-200"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
