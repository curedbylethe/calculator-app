import { useState, useEffect, useContext, useCallback } from "react";
import ThemeContext from "@/ThemeContext";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const { theme } = useContext(ThemeContext);

  // const handleKeyDown = useCallback(
  //   (event) => {
  //     const key = event.key;
  //     if (/[0-9]/.test(key)) {
  //       handleDigitClick(parseInt(key, 10));
  //     } else if (key === ".") {
  //       handleDecimalClick();
  //     } else if (key === "+" || key === "-" || key === "*" || key === "/") {
  //       handleOperatorClick(key);
  //     } else if (key === "Enter" || key === "=") {
  //       handleResultClick();
  //     } else if (key === "Backspace") {
  //       handleDeleteClick();
  //     }
  //   },
  //   [
  //     handleDigitClick,
  //     handleDecimalClick,
  //     handleOperatorClick,
  //     handleResultClick,
  //     handleDeleteClick,
  //   ]
  // );

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [handleKeyDown]);

  const handleDigitClick = useCallback((digit) => {
    setDisplayValue((prevDisplayValue) => {
      if (prevDisplayValue === "0") {
        return digit.toString();
      } else {
        return prevDisplayValue + digit.toString();
      }
    });
    setWaitingForSecondOperand(false);
  }, []);

  const handleDecimalClick = useCallback(() => {
    setDisplayValue((prevDisplayValue) => {
      if (!prevDisplayValue.includes(".")) {
        return prevDisplayValue + ".";
      } else {
        return prevDisplayValue;
      }
    });
    setWaitingForSecondOperand(false);
  }, []);

  const handleOperatorClick = useCallback(
    (nextOperator) => {
      const inputValue = parseFloat(displayValue);

      if (firstOperand === null) {
        setFirstOperand(inputValue);
      } else if (operator) {
        const currentValue = firstOperand || 0;
        const newValue = calculateValue(currentValue, inputValue, operator);
        setFirstOperand(newValue);
        setDisplayValue(newValue.toString());
      }

      setWaitingForSecondOperand(true);
      setOperator(nextOperator);
    },
    [displayValue, firstOperand, operator]
  );

  const calculateValue = useCallback(
    (firstOperand, secondOperand, operator) => {
      switch (operator) {
        case "+":
          return firstOperand + secondOperand;
        case "-":
          return firstOperand - secondOperand;
        case "*":
          return firstOperand * secondOperand;
        case "/":
          return firstOperand / secondOperand;
        default:
          return secondOperand;
      }
    },
    []
  );

  const handleResetClick = useCallback(() => {
    setDisplayValue("0");
    setOperator(null);
    setFirstOperand(null);
    setWaitingForSecondOperand(false);
  }, []);

  const handleDeleteClick = useCallback(() => {
    setDisplayValue((prevDisplayValue) => {
      if (prevDisplayValue.length === 1) {
        return "0";
      } else {
        return prevDisplayValue.slice(0, -1);
      }
    });
  }, []);

  const handleResultClick = useCallback(() => {
    const inputValue = parseFloat(displayValue);

    if (operator && firstOperand !== null) {
      const currentValue = firstOperand || 0;
      const newValue = calculateValue(currentValue, inputValue, operator);
      setDisplayValue(newValue.toString());
      setFirstOperand(newValue);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  }, [displayValue, operator, firstOperand]);

  const handleDisplay = () => {
    if (displayValue.length > 9) {
      setDisplayValue(displayValue.slice(0, 9));
      return displayValue.slice(0, 9);
    } else {
      return displayValue;
    }
  };

  return (
    <div className="calculator">
      <div className={`calculator-display calculator-display-${theme}`}>
        <p
          className={`calculator-display-text calculator-display-text-${theme}`}
        >
          {handleDisplay()}
        </p>
      </div>
      <div className={`calculator-keypad calculator-keypad-${theme}`}>
        <div className="calculator-row">
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(7)}
          >
            7
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(8)}
          >
            8
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(9)}
          >
            9
          </button>
          <button
            className={`calculator-row__delete calculator-row__delete-${theme}`}
            onClick={() => handleDeleteClick()}
          >
            DEL
          </button>
        </div>
        <div className="calculator-row">
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(4)}
          >
            4
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(5)}
          >
            5
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(6)}
          >
            6
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleOperatorClick("+")}
          >
            +
          </button>
        </div>
        <div className="calculator-row">
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(1)}
          >
            1
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(2)}
          >
            2
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(3)}
          >
            3
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleOperatorClick("-")}
          >
            -
          </button>
        </div>
        <div className="calculator-row">
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDecimalClick()}
          >
            .
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleDigitClick(0)}
          >
            0
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleOperatorClick("/")}
          >
            /
          </button>
          <button
            className={`calculator-row__key calculator-row__key-${theme}`}
            onClick={() => handleOperatorClick("*")}
          >
            x
          </button>
        </div>
        <div className="calculator-row">
          <button
            className={`calculator-row__reset calculator-row__reset-${theme}`}
            onClick={() => handleResetClick()}
          >
            RESET
          </button>
          <button
            className={`calculator-row__result calculator-row__result-${theme}`}
            onClick={() => handleResultClick()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
