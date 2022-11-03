import Head from "next/head";
import React from "react";
import {  useReducer } from "react";
import Calculator from "../components/Calculator/Calculator";

export const CountContext = React.createContext();
const initialState = {
  operand1: "",
  operand2: "",
  operator: "",
  operate: false,
  result: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "field":
      if (state.operate === false) {
        return {
          ...state,
          operand1: state.operand1 + action.number,
        };
      } else {
        return {
          ...state,
          operand2: state.operand2 + action.number,
        };
      }
    case "add":
      return {
        ...state,
        operator: "+",
        operate: true,
      };
    case "substract":
      return {
        ...state,
        operator: "-",
        operate: true,
      };
    case "multiply":
      return {
        ...state,
        operator: "x",
        operate: true,
      };
    case "divide":
      return {
        ...state,
        operator: "/",
        operate: true,
      };
    case "result":
      if (state.operator === "+") {
        return {
          ...state,
          result: parseInt(state.operand1) + parseInt(state.operand2),
        };
      }
      if (state.operator === "-") {
        return {
          ...state,
          result: parseInt(state.operand1) - parseInt(state.operand2),
        };
      }
      if (state.operator === "x") {
        return {
          ...state,
          result: parseInt(state.operand1) * parseInt(state.operand2),
        };
      }
      if (state.operator === "/") {
        return {
          ...state,
          result: parseInt(state.operand1) / parseInt(state.operand2),
        };
      }
    case "reset":
      return initialState;
    case "delete":
      if (state.operate === false) {
        return {
          ...state,
          operand1: state.operand1.slice(0, -1),
        };
      } else {
        return {
          ...state,
          operand2: state.operand2.slice(0, -1),
        };
      }
    default:
      return state;
  }
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ state: state, dispatch: dispatch }}>
      <Head>
        <title>Calculator</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="items-center justify-center align-middle md:mx-[38rem]">
        <Calculator />
      </main>
    </CountContext.Provider>
  );
}
