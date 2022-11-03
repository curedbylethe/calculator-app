import Keys from "./Keys";

export default function Keypad() {
  return (
    <>
      <div className="grid w-[25rem] h-[25rem] grid-cols-2 rounded-lg bg-theme1-keypad-bg py-3">
        <div>
          <div className="grid grid-cols-2 mb-[0.75rem]">
            <div className="flex flex-col items-center justify-center gap-[0.75rem]">
              <Keys text="7" type="field" number="7" />
              <Keys text="4" type="field" number="4" />
              <Keys text="1" type="field" number="1" />
              <Keys text="." />
            </div>
            <div className="flex flex-col items-center justify-center gap-[0.75rem]">
              <Keys text="8" type="field" number="8" />
              <Keys text="5" type="field" number="5" />
              <Keys text="2" type="field" number="2" />
              <Keys text="0" type="field" number="0" />
            </div>
          </div>
          <div className="text-center">
            <Keys text="RESET" type="reset" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 mb-[0.75rem]">
            <div className="flex flex-col items-center justify-center gap-[0.75rem]">
              <Keys text="9" type="field" number="9" />
              <Keys text="6" type="field" number="6" />
              <Keys text="3" type="field" number="3" />
              <Keys text="/" type="divide" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[0.75rem]">
              <Keys text="DEL" type="delete" />
              <Keys text="+" type="add" />
              <Keys text="-" type="substract" />
              <Keys text="x" type="multiply" />
            </div>
          </div>
          <div className="text-center">
            <Keys text="=" type="result" />
          </div>
        </div>
      </div>
    </>
  );
}
