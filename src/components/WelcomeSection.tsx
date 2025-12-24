const WelcomeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[8px]  text-[#101828]">
      <img
        alt="Aura orb"
        className="w-[380px] h-[280px]"
        src="/assets/svgs/orb.svg"
      />
      <div className="flex items-center justify-center gap-1.5 text-[32px] lg:text-[48px] font-[700]">
        <p>Welcome to</p>
        <p
          className="bg-[linear-gradient(90deg,#AD46FF_0%,#F6339A_50%,#AD46FF_100%),linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0))] 
         bg-clip-text text-transparent"
        >
          Aura
        </p>
      </div>
      <p className="text-[24px] lg:text-[30px] text-center font-[400]">
        How can I help you today?
      </p>
    </div>
  );
};

export default WelcomeSection;
