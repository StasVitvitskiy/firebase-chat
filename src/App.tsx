// eslint-disable-next-line
import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginOrSignUp } from "./store";

const StyledAppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const App = connect((state) => ({}), {
  loginOrSignUp
})(
  class App extends React.PureComponent<{
    loginOrSignUp: (nickname: string) => void;
  }> {
    componentDidMount() {
      this.props.loginOrSignUp("nickname");
    }

    render() {
      return <StyledAppContainer>Header</StyledAppContainer>;
    }
  }
);
