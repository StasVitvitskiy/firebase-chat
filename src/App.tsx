// eslint-disable-next-line
import * as React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { AppState, loginOrSignUp } from "./store";
import { LoginForm } from "./loginForm";
import { Chat } from "./chat";

const StyledAppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const App = connect((state) => state, {
  loginOrSignUp
})(
  class App extends React.PureComponent<
    AppState & {
      loginOrSignUp: (nickname: string) => void;
    }
  > {
    componentDidMount() {
      this.props.loginOrSignUp("nickname");
    }

    render() {
      if (!this.props.user) {
        return null;
      }
      if (this.props.user.isGuest) {
        return (
          <StyledAppContainer>
            <LoginForm />
          </StyledAppContainer>
        );
      }
      return (
        <StyledAppContainer>
          <Chat />
        </StyledAppContainer>
      );
    }
  }
);
