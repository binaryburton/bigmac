import React, { Component } from 'react'
import axios from 'axios';
import { loadBigMacData, getRandomCountry, getBigMacFromIPVig } from '../../utils';

export default class dashboard extends Component {

  state = {
    currentCountry: {},
    bigMacData: [],
    randomCountry: {},
    localAmount: 0
  }

  componentDidMount = async () => {
    const data = await loadBigMacData();
    this.setState({ bigMacData: data });
    this.getSingleIPData(data);
    const randomCountry = getRandomCountry(data, 'United States');
    this.setState({ randomCountry: randomCountry });
  }

  getSingleIPData = (bigMacData) => {
    axios.get('http://localhost:8080/ip/test')
      .then(async (res) => {
        const data = res.data.data;
        const newData = await getBigMacFromIPVig(bigMacData, data.country_name);
        this.setState({ currentCountry: newData });
      }) 
      .catch(() => {
        console.log('HANDLE ERRROROROROROR');
      })
  }

  render() {
    return (
      <div style={wrapper}>
        <div style={row}>
          You are in <b>{this.state.currentCountry.Country}</b> <br/>
          <label> Please enter an amount of money in your local currency </label> <br/>
        </div>
        <div style={row}>
          You could buy [#] of Big Macs in your country <br/>
          Your Dollar Purchasing Parity (PPP) is {this.state.currentCountry.DollarPPP}
        </div>
        <div style={row}>
          Random Country: [RANDOM COUNTRY] <br/>
          You could buy [#] of Big Macs in [RAND COUNTRY] with [INPUT]!<br/>
          (calculation is (INPUT / local price) * (local dollar price / RAND COUNTRY dollar price) <br/>
          Your [INPUT] is worth about [#] in [RAND COUNTRY] <br/>
          (Calculation is [INPUT] * (local dollar price / RAND COUNTRY dollar price))
        </div>
      </div>
    )
  }
}

const wrapper = {
  display: 'grid'
}

const row = {
  width: '100%',
  height: '8rem',
  marginBottom: '1rem',
  backgroundColor: 'salmon',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  color: 'white',
}