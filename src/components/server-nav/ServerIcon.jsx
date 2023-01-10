const ServerIcon = () => {
  return (
    <div className="w-full flex justify-center relative">
      <img
        className="w-12 h-12 object-cover rounded-3xl hover:rounded-2xl transition-all cursor-pointer peer"
        src="https://cdn.vox-cdn.com/thumbor/a3kFdZvmK6-lnx68-hAtOpoglTg=/0x0:1600x946/1200x800/filters:focal(683x473:939x729)/cdn.vox-cdn.com/uploads/chorus_image/image/65836369/Ornn_Splash_0.0.jpg"
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-100 w-1 rounded-r-full h-0 peer-hover:h-1/2 opacity-0 peer-hover:opacity-100 transition-all"></div>
    </div>
  );
};

export default ServerIcon;
