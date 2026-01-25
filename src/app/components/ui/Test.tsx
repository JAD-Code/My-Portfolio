const Test = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="absolute w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

      <div className="relative">
        <div
          className="
      w-72 h-96 
      rounded-[2.5rem] 
      bg-white/10 
      backdrop-blur-2xl 
      border border-white/20 
      shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
      before:absolute before:inset-0 
      before:rounded-[2.5rem] 
      before:bg-gradient-to-b before:from-white/10 before:to-transparent
      after:absolute after:inset-x-0 after:bottom-0 
      after:h-1/2 after:bg-gradient-to-t after:from-white/5 after:to-transparent
      flex flex-col items-center justify-center p-6 text-center
    "
        >
          <div className="mb-4 text-4xl"></div>
          <h1 className="text-white font-bold text-xl tracking-wide">
            GlassOS
          </h1>
          <p className="text-white/40 text-sm mt-2">
            نظام تصميم مستوحى من الحداثة
          </p>

          <button className="mt-8 px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-full text-white text-sm transition-all">
            اكتشف المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
