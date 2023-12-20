const AuthFormTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="flex items-center">
        <div>
          <img src="/public/images/paper 1.png" alt="" />
        </div>
        <span className="text-[28px] font-bold text-[#4E5D78] ml-2">Stack</span>
      </div>
      <p className="text-xl font-semibold text-[#404040] mt-5">{title}</p>
    </div>
  );
};

export default AuthFormTitle;
