import React, { Component } from "react";
import UserCreate from "./Components/UserCreate";
import Languagecontext from "./Components/contexts/LanguageContext";
import ColorContext from "./Components/contexts/ColorContext";
export default class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          <h3>Select a language:</h3>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <ColorContext.Provider value="red">
          <Languagecontext.Provider value={this.state.language}>
            <UserCreate />
          </Languagecontext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}
