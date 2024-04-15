import Image from "next/image";

const Alert = () => {
  return (
    <div className="flex align-center p-6 max-w-sm mx-auto big-white rounded-xl shadow-lg space-x-4 mt-12">
      <Image
        src="/images/icon-error.svg"
        alt="Error"
        className="w-12 h-12"
        width={0}
        height={0}
        sizes="100"
      />
      <div>
        <div className="text-xl font-medium text-black">Are You Sure?</div>
        <p className="text-slate-500">You are about to delete a post</p>
      </div>
    </div>
  );
};

export default Alert;
