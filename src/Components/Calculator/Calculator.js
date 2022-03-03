import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [inputValue, setInputValue] = useState('');
    const display = (value) => {
        setInputValue(inputValue + value);
    }
    const calculate = () => {
        let answer = eval(inputValue);
        setInputValue(answer)
    }
    const clearData = () => {
        setInputValue("")
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 shadow-lg p-3 mb-5 mt-5 rounded">
                    <h3 className="fw-bold">NPX CALCULATOR</h3>
                    <table className="table">
                        <tr>
                            <td className="" colSpan="3">
                                <input
                                    type="text"
                                    className="w-100"
                                    value={inputValue}
                                />
                            </td>
                            <td className="">
                                <button
                                    type="button"
                                    className="btn btn-info"
                                    onClick={() => { clearData() }}
                                >C</button>
                            </td>
                        </tr>
                        <tr>
                            <td><button onClick={() => display("1")}>1</button></td>
                            <td><button onClick={() => display("2")}>2</button></td>
                            <td><button onClick={() => display("3")}>3</button></td>
                            <td><button onClick={() => display("/")}>/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => display("4")}>4</button></td>
                            <td><button onClick={() => display("5")}>5</button></td>
                            <td><button onClick={() => display("6")}>6</button></td>
                            <td><button onClick={() => display("-")}>-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => display("7")}>7</button></td>
                            <td><button onClick={() => display("8")}>8</button></td>
                            <td><button onClick={() => display("9")}>9</button></td>
                            <td><button onClick={() => display("+")}>+</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => display(".")}>.</button></td>
                            <td><button onClick={() => display("0")}>0</button></td>
                            <td><button onClick={() => { calculate() }}>=</button></td>
                            <td><button onClick={() => display("*")}>*</button></td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Calculator;
