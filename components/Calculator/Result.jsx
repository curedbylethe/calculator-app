import { useContext } from "react";
import { CountContext } from "../../pages/index";

export default function Result() {
  const { state,  } = useContext(CountContext);
  console.log(state);
  return (
    <>
        <div className=" items-center align-middle py-[4.75rem] p-[14rem] mb-5 text-3xl text-white rounded-lg bg-theme1-screen-bg">
            <div className="absolute justify-end">
                 <p className="relative ">
                    {state.operate && state.result ? state.result : state.operate ? state.operand2 : state.operand1}
                 </p>
            </div>
        </div>
    </>
  );
}
