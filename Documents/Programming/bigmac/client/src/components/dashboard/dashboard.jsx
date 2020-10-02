import React, { Component } from "react";
import Loading from "../common/loading";
import { getIPData, getUserIP } from "../../api/ipApi";
import {
  loadBigMacData,
  getRandomCountry,
  getBigMacFromIPVig,
} from "../../utils";

export default class dashboard extends Component {
  state = {
    currentCountry: {},
    bigMacData: [],
    randomCountry: {},
    localAmount: 0,
    localAmountError: false,
  };

  async componentDidMount() {
    const [bigMacData, userIP] = await Promise.all([
      loadBigMacData(),
      getUserIP(),
    ]);

    const userIPData = await getIPData(userIP.data.data);
    const currentCountry = await getBigMacFromIPVig(
      bigMacData,
      userIPData.data.data.country_name
    );
    const randomCountry = getRandomCountry(bigMacData, userIPData.country_name);

    this.setState({
      bigMacData,
      currentCountry,
      randomCountry,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.currency.value && e.target.currency.value !== "0") {
      const numberValue = parseInt(e.target.currency.value);
      this.setState({
        localAmount: numberValue,
        localAmountError: false,
      });
    } else {
      this.setState({
        localAmountError: true,
      });
    }
  };

  handleBigMacCalc = () => {
    return (
      (this.state.localAmount / this.state.currentCountry.Localprice) *
      (this.state.currentCountry.Dollarprice /
        this.state.randomCountry.Dollarprice)
    ).toFixed(2);
  };

  handleAmountCalc = () => {
    return (
      this.state.localAmount *
      (this.state.currentCountry.Dollarprice /
        this.state.randomCountry.Dollarprice)
    ).toFixed(2);
  };

  render() {
    return (
      <div style={wrapper}>
        {this.state.currentCountry.Country ? (
          <>
            <div style={row}>
              You are in <b> {this.state.currentCountry.Country} </b> <br />
              <label>
                {" "}
                Please enter an amount of money in your local currency{" "}
              </label>{" "}
              <br />
              <form onSubmit={this.handleSubmit} noValidate>
                <input
                  id="currency"
                  name="currency"
                  type="number"
                  placeholder="42"
                ></input>
                <button type="submit"> Submit </button> <br />
                {this.state.localAmountError ? (
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    *Cannot submit empty value or 0
                  </div>
                ) : (
                  <> </>
                )}
              </form>{" "}
              <br />
              <span style={{ color: "lightGreen" }}>
                {" "}
                The data for <b> {this.state.currentCountry.Country} </b> was
                gathered in <b> {this.state.currentCountry.Date} </b>
              </span>
            </div>

            <div style={row}>
              {this.state.localAmount ? (
                <div>
                  You could buy{" "}
                  <b>
                    {(
                      this.state.localAmount /
                      this.state.currentCountry.Localprice
                    ).toFixed(2)}
                  </b>{" "}
                  Big Macs in your country
                </div>
              ) : (
                <> </>
              )}
              Your Dollar Purchasing Parity (PPP) is{" "}
              <b>{this.state.currentCountry.DollarPPP}</b>
            </div>
            <div style={row}>
              Random Country: <b>{this.state.randomCountry.Country}</b> <br />
              {this.state.localAmount ? (
                <>
                  <div>
                    You could buy <b>{this.handleBigMacCalc()}</b> Big Macs in{" "}
                    <b>{this.state.randomCountry.Country}</b> with{" "}
                    <b>{this.state.localAmount}</b>
                  </div>
                  <div>
                    Your <b>{this.state.localAmount}</b> is worth about{" "}
                    <b>{this.handleAmountCalc()}</b> in{" "}
                    <b>{this.state.randomCountry.Country}</b>
                  </div>
                </>
              ) : (
                <></>
              )}{" "}
              <br />
              <span style={{ color: "lightGreen" }}>
                {" "}
                The data for <b> {this.state.randomCountry.Country} </b> was
                gathered in <b> {this.state.randomCountry.Date} </b>
              </span>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const wrapper = {
  display: "grid",
};

const row = {
  width: "100%",
  height: "8rem",
  marginBottom: "1rem",
  backgroundColor: "grey",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  color: "white",
};

const bold = {
  fontWeight: "bold",
};
