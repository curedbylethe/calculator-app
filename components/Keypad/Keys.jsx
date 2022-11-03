import { useContext } from "react";
import { CountContext } from "../../pages/index";

export default function Keys({ text, type, number = "" }) {
  const { dispatch } = useContext(CountContext);
  return (
    <>
      <button
        className="w-[5.5rem] h-[3.5rem] rounded-lg bg-theme1-key-bg"
        onClick={() => {
          dispatch({ type: type, number: number });
        }}
      >
        {text}
      </button>
    </>
  );
}
