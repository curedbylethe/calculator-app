import Keypad from "../Keypad/Keypad";
import Result from "./Result";
import Header from "./Header";

export default function Calculator() {
  return (
    <>
      <Header />
      <Result />
      <Keypad />
    </>
  );
}
