import React, { useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["+", "-", "*", "/", ".", "%"];
  const otherOps = ["^", "^2", "Sqr"];

  const updateOutput = (input) => {
    if (
      (ops.includes(input) && calc === "") ||
      (ops.includes(input) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    // console.log(calc+input)
    setCalc(calc + input);

    if (otherOps.includes(input)) {
      let pow;
      input === "^2" ? (pow = 2) : (pow = 3);
      setResult(
        eval(
          parseInt(calc.substring(0, calc.length - 2)) +
            Math.pow(calc[calc.length - 1], pow)
        ).toString()
      );
    } else if(input === "C") {
      setCalc("");
      setResult("");
    } else if (!ops.includes(input) && input !== "=") {
      setResult(eval(calc + input).toString());
    } else if (input === "=") {
      console.log(result);
      setCalc(result);
      setResult("");
    }
  };

  const createNumbers = () => {
    const number = [];

    for (let i = 0; i < 10; i++) {
      number.push(
        <div>
          <button key={i} onClick={() => updateOutput(i.toString())}>
            {i}
          </button>
        </div>
      );
    }
    return number;
  };

  return (
    <Container>
      <Screen>
        <span>
          {calc || "0"} {result ? <span>({result})</span> : " "}
        </span>
      </Screen>
      <Flex>
        <div>
          <button onClick={() => updateOutput("C")}>C</button>
        </div>
        {createNumbers()}
        <div>
          <button onClick={() => updateOutput("0")}>0</button>
        </div>
        <div>
          <button onClick={() => updateOutput("+")}>+</button>
        </div>
        <div>
          <button onClick={() => updateOutput("-")}>-</button>
        </div>
        <div>
          <button onClick={() => updateOutput("*")}>x</button>
        </div>
        <div>
          <button onClick={() => updateOutput("/")}>/</button>
        </div>
        {/* <button onClick={() => updateOutput("%")}>Mod</button>
        <button onClick={() => updateOutput("^2")}>Sq</button>
        <button onClick={() => updateOutput("^")}>^</button> */}
        <div>
          <button onClick={() => updateOutput("=")}>=</button>
        </div>
        {/* <button onClick={}>C</button> */}
      </Flex>
    </Container>
  );
};

export default Calculator;

const Container = styled.div`
  background: #1B234A;
  width: 360px;
  border-radius: 20px;
  border: 5px solid #232629;
  &:first-child {
    color: white;
    margin: 1rem auto;
    padding: 1rem 0rem;
    text-align: center;
  }
`;

const Screen = styled.div`
  text-align: center;
  padding: 1rem;
  margin: 1rem auto 2rem auto;
  border-radius: 20px;
  background: #8E9AD6;
  border: 5px solid lightgrey;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  width: 300px;
  height: 40px;
  font-size: 1.5em;
  white-space: nowrap;
  overflow: auto;
  overflow-Y: hidden;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    // width: 50px;
    // height: 20px;
    button {
      width: 70px;
      height: 70px;
      cursor: pointer;
      border-radius: 15px;
      margin: 10px;
      background: lightblue;
      color: #232629;
      font-weight: 900;
      font-size: 1.6em;
      border: 2px solid lightgrey;
      box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
  }
`;
