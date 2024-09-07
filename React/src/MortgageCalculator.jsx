import { useState } from "react";

const MortageCalculator = () => {
  const Mortgage = [
    { interestRate: 5, loanTerm: 1 },
    { interestRate: 9, loanTerm: 2 },
    { interestRate: 1, loanTerm: 3 },
    { interestRate: 12, loanTerm: 10 },
  ];
  const [loanAmount, setLoanAmount] = useState("");
  const [iRate, setIRate] = useState("");
  const [lTerm, setLTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  return (
    <div className="container-fluid py-3">
      <div className="row d-flex justify-content-center align-items-center flex-column shadow py-5">
        <div className="col-6">
          <h1>Mortage Calculator</h1>
          <input
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => {
              setLoanAmount(Number(e.target.value));
            }}
          />

          {/* <input placeholder="Enter rate" value={iRate} onChange={(e)=>{setIRate(Number(e.target.value))}}/> */}
          {/* <input placeholder="Enter loan term" value={lTerm} onChange={(e)=>{setLTerm(Number(e.target.value))}}/> */}

          <select
            onChange={(e) => {
              setIRate(Number(e.target.value));
            }}
          >
            <option value="">select the interestRate</option>
            {Mortgage.map((iRate) => {
              return (
                <option key={iRate?.interestRate} value={iRate?.interestRate}>
                  {iRate?.interestRate}
                </option>
              );
            })}
          </select>
                   {/* loan term */}
          <select
            onChange={(e) => {
              setLTerm(Number(e.target.value));
            }}
          >
            <option value="">Select loan term</option>
            {Mortgage.map((lterm, index) => {
              return (
                <option key={index} value={lterm?.loanTerm}>
                  {lterm?.loanTerm}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-lg-6">
          <button
            onClick={() => {
              const monthlyRate = iRate / 100 / 12; // Assuming iRate is the annual interest rate
              const numPayments = lTerm * 12; // Assuming lTerm is the loan term in years

              if (loanAmount == "") {
                alert("Please enter valid loan Amount");
              }

              setMonthlyPayment(() => {
                return (
                  (loanAmount *
                    (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
                  (Math.pow(1 + monthlyRate, numPayments) - 1)
                );
              });
            }}
          >
            Monthly Payment
          </button>

          {loanAmount && iRate && lTerm &&  monthlyPayment && (
            <div className="bg-success"> The monthlyPayment of {loanAmount} with {iRate} is {monthlyPayment} </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MortageCalculator;
