import React from "react";
import Credit from "./credit";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: "1245852614781236",
      cardName: "CARDHOLDER",
      validT: "1250"
    };
  }
  changeNumber = e => {
    this.setState({
      cardNumber: String(e.target.value).slice(0, 16)
    });
  };
  changeName = e => {
    this.setState({
      cardName: e.target.value.toUpperCase().substr(0, 20)
    });
  };
  changeValidThru = e => {
    this.setState({
      validT: e.target.value.slice(0, 4)
    });
  };
  render() {
    return (
      <div>
        <Credit
          cardNumber={this.state.cardNumber}
          cardName={this.state.cardName}
          validT={this.state.validT}
        />

        <br />
        <div className="my-card-2">
          <input
            type="number"
            placeholder="Card Number"
            onKeyUp={this.changeNumber}
          />
          <br />
          <input type="text" placeholder="Name" onKeyUp={this.changeName} />
          <br />
          <input
            type="number"
            placeholder="Valid thru"
            onKeyUp={this.changeValidThru}
          />
        </div>
      </div>
    );
  }
}

export default App;
