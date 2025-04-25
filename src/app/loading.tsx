import { FaSpinner } from "react-icons/fa";

export default async function loading() {
  return (
    <h1 className=" text-3xl bg-red w-full h-full p-0 m-0 flex justify-center items-center ">
      <FaSpinner className="animate-spin " />
    </h1>
  );
}
