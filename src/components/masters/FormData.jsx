import React, { useState } from "react";
const FormData = () => {
  const [formData, setFormData] = useState({
    serialno: "",
    CollectionDate: "",
    customer_name: "",
    company_name: "",
    dob: "",
    pan: "",
    aadhar: "",
    address: "",
    branch_name: "",
    email: "",
    Manufacturing_year: "",
    model: "",
    Vechile_reg_no: "",
    Insurance_comp: "",
    current_policy_no: "",
    expiry_month: "",
    expiry_year: "",
    risk_start_date: "",
    amount_paid: "",
    cheque_no: "",
    bank_name: "",
    shortfall_amt: "",
    shortfall_cheq: "",
    total_gross_amt: "",
    idv: "",
    ncb: "",
    Plans: "",
    third_party_premium: "",
    net_premium: "",
    od_premium: "",
    remakrs_by_caller: "",
    referred_by: "",
    code: "",
    tc_name: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the form of data");
    console.log(formData);
  }

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const combinedValue =
    selectedMonth !== "" && selectedYear !== ""
      ? `${selectedMonth}/${selectedYear}`
      : "";

  return (
    <div className="border shadow rounded users">
      <div className="row container">
        <div className="col-sm-12 mt-3">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col">
                <label htmlFor="serialno" className="form-label">
                  Sr.No<sup>*</sup>
                </label>
                <input
                  type="number"
                  name="serialno"
                  id="serialno"
                  placeholder="Enter Serial no."
                  className="form-control"
                  value={formData.serialno}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label htmlFor="CollectionDate" className="form-label">
                  Collection Date<sup>*</sup>
                </label>
                <input
                  type="date"
                  name="CollectionDate"
                  id="CollectionDate"
                  className="form-control"
                  value={formData.CollectionDate}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="customer_name" className="form-label">
                  Customer Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  placeholder="Enter Customer Name"
                  name="customer_name"
                  id="customer_name"
                  className="form-control"
                  value={formData.customer_name}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label htmlFor="company_name" className="form-label">
                  Company Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Company Name"
                  name="company_name"
                  id="company_name"
                  value={formData.company_name}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="dob" className="form-label">
                  D.O.B<sup>*</sup>
                </label>
                <input
                  type="date"
                  placeholder="Enter Date of Birth"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label htmlFor="pan" className="form-label">
                  PAN<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Pan No."
                  id="pan"
                  name="pan"
                  value={formData.pan}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="aadhar" className="form-label">
                  Aadhar No<sup>*</sup>
                </label>
                <input
                  type="number"
                  placeholder="Enter Aadhar no."
                  className="form-control"
                  id="aadhar"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={changeHandler}
                />
              </div>
              <div className="col">
                <label htmlFor="address" className="form-label">
                  Address<sup>*</sup>
                </label>
                <textarea
                  type="date"
                  className="form-control"
                  placeholder="Enter Address...."
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="branch_name" className="form-label">
                  Branch Name<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="branch_name"
                  name="branch_name"
                  value={formData.branch_name}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Guargaon">Guargaon</option>
                </select>
              </div>
              <div className="col mt-4">
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">R/F</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="gridRadios1"
                        name="gridRadios1"
                        value="R"
                        onChange={changeHandler}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        R
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios1"
                        id="gridRadios1"
                        value="F"
                        onChange={changeHandler}
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        F
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email<sup>*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter Email Id"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="Manufacturing_year" className="form-label">
                  Manufacturing Year<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="Manufacturing_year"
                  name="Manufacturing_year"
                  value={formData.Manufacturing_year}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
            </div>
            {/* someting changing this field */}
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="model" className="form-label">
                  Model/fuel/cc<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="Vechile_reg_no" className="form-label">
                  Vehicle Reg. No.<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="Vechile_reg_no"
                  name="Vechile_reg_no"
                  value={formData.Vechile_reg_no}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Vehicle Registration No."
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="Insurance_comp" className="form-label">
                  Insurance Company<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="Insurance_comp"
                  name="Insurance_comp"
                  value={formData.Insurance_comp}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Select Insurace Company Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="current_policy_no" className="form-label">
                  Current Policy No.<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="current_policy_no"
                  name="current_policy_no"
                  value={formData.current_policy_no}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Policy Number"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="combinedInput" className="form-label">
                  Expiry Date:
                </label>
                <div className="input-group">
                  <select
                    className="custom-select"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                  >
                    <option value="">Choose Month...</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    {/* Add more months as needed */}
                  </select>
                  <select
                    className="custom-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    <option value="">Choose Year...</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    {/* Add more years as needed */}
                  </select>
                  <input
                    type="text"
                    className="form-control"
                    id="combinedInput"
                    value={combinedValue}
                    readOnly
                  />
                </div>
              </div>
              <div className="col">
                <label htmlFor="expiry_month" className="form-label">
                  Expiry Month<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="expiry_month"
                  name="expiry_month"
                  value={formData.expiry_month}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Select Expiry Month</option>
                  <option value="Jan">Jan</option>
                  <option value="Feb">Feb</option>
                  <option value="Mar">Mar</option>
                  <option value="Apr">Apr</option>
                  <option value="May">May</option>
                  <option value="Jun">Jun</option>
                  <option value="Jul">Jul</option>
                  <option value="Aug">Aug</option>
                  <option value="Sep">Sep</option>
                  <option value="Oct">Oct</option>
                  <option value="Nov">Nov</option>
                  <option value="Dec">Dec</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="expiry_year" className="form-label">
                  Expiry Year<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="expiry_year"
                  name="expiry_year"
                  value={formData.expiry_year}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>2025</option>
                  <option value="2024">2024</option>
                  <option value="2023<">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="risk_start_date" className="form-label">
                  Risk Start Date<sup>*</sup>
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="risk_start_date"
                  name="risk_start_date"
                  value={formData.risk_start_date}
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="payment_mode" className="form-label">
                  Payment Mode<sup>*</sup>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    id="payment_mode"
                    name="payment_mode"
                    value="online"
                    type="radio"
                    onChange={changeHandler}
                  />
                  <label className="form-check-label" htmlFor="payment_mode">
                    Online
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment_mode"
                    id="payment_mode"
                    value="Cheque"
                    onChange={changeHandler}
                  />
                  <label className="form-check-label" htmlFor="payment_mode">
                    Cheque
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment_mode"
                    id="payment_mode"
                    value="cash"
                  />
                  <label className="form-check-label" htmlFor="payment_mode">
                    Cash
                  </label>
                </div>
              </div>

              <div className="col">
                <label htmlFor="amount_paid" className="form-label">
                  Amount Paid By Customer<sup>*</sup>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount_paid"
                  value={formData.amount_paid}
                  name="amount_paid"
                  onChange={changeHandler}
                  placeholder="Enter Amount.."
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="cheque_no" className="form-label">
                  Cheque No.<sup>*</sup>
                </label>
                <input
                  type="number"
                  placeholder="Enter Cheque no."
                  id="cheque_no"
                  name="cheque_no"
                  value={formData.cheque_no}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="bank_name" className="form-label">
                  Bank Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="bank_name"
                  name="bank_name"
                  value={formData.bank_name}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Bank Name.."
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="shortfall_amt" className="form-label">
                  Shortfall Ammount<sup>*</sup>
                </label>
                <input
                  type="number"
                  placeholder="Enter Shortfall Amount.."
                  id="shortfall_amt"
                  name="shortfall_amt"
                  value={formData.shortfall_amt}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="shortfall_cheq" className="form-label">
                  Shortfall Chq No./Recepit No./Amount<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="shortfall_cheq"
                  name="shortfall_cheq"
                  value={formData.shortfall_cheq}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="total_gross_amt" className="form-label">
                  Total Gross Premium<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="total_gross_amt"
                  name="total_gross_amt"
                  value={formData.total_gross_amt}
                  onChange={changeHandler}
                  placeholder="Enter Gross Premium Amount.."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="idv" className="form-label">
                  IDV<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="idv"
                  name="idv"
                  value={formData.idv}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="" className="form-label">
                  IDV CNG/ELEC/NON-ELEC<sup>*</sup>
                </label>
                <input
                  type="number"
                  placeholder="Enter Serial no."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="ncb" className="form-label">
                  NCB<sup>*</sup>
                </label>
                <select
                  id="ncb"
                  name="ncb"
                  value={formData.ncb}
                  onChange={changeHandler}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="0">0</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="35">35</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                  <option value="65">65</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="Plans" className="form-label">
                  Plans<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="Plans"
                  name="Plans"
                  value={formData.Plans}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="d">d</option>
                  <option value="c">c</option>
                  <option value="e">e</option>
                  <option value="t">t</option>
                  <option value="r">r</option>
                  <option value="k">k</option>
                  <option value="pb">pb</option>
                  <option value="eth">eth</option>
                  <option value="ncb">ncb</option>
                  <option value="rsa">rsa</option>
                  <option value="owner">owner</option>
                  <option value="driver">driver</option>
                  <option value="passenger">passenger</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="third_party_premium" className="form-label">
                  Third Party Premium<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="third_party_premium"
                  value={formData.third_party_premium}
                  name="third_party_premium"
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="net_premium" className="form-label">
                  Net Premium<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="net_premium"
                  name="net_premium"
                  value={formData.net_premium}
                  onChange={changeHandler}
                  placeholder="Enter Net Premium Amount.."
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="od_premium" className="form-label">
                  OD Premium<sup>*</sup>
                </label>
                <input
                  type="number"
                  id="od_premium"
                  name="od_premium"
                  value={formData.od_premium}
                  onChange={changeHandler}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label
                  htmlFor="
                        remakrs_by_caller"
                  className="form-label"
                >
                  Special Remarks By Caller<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="remakrs_by_caller"
                  name="remakrs_by_caller"
                  value={formData.remakrs_by_caller}
                  onChange={changeHandler}
                  placeholder="Enter 
                            comment"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label htmlFor="referred_by" className="form-label">
                  Referred By<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="referred_by"
                  name="referred_by"
                  value={formData.referred_by}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Name And Phone Number"
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <label htmlFor="code" className="form-label">
                  Code<sup>*</sup>
                </label>
                <select
                  className="form-select"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={changeHandler}
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="RG">RG</option>
                  <option value="JK">JK</option>
                  <option value="PC">PC</option>
                  <option value="JY">JY</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="tc_name" className="form-label">
                  TC Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  id="tc_name"
                  name="tc_name"
                  value={formData.tc_name}
                  onChange={changeHandler}
                  className="form-control"
                  placeholder="Enter Telecaller Name"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success mb-4 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormData;
