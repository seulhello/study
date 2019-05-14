import React,{ Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

class App extends Component{
    render(){
        return(
            // <div className="App">
            //     <button className="button button--success">Hello</button>
            //     <button className="button button--error">Hello</button>
            // </div>
            <>
                <GlobalStyle />
                <Container>
                    <Button success>Hello</Button>
                    <Button error>Hello</Button>
                    <Anchor href="https://google.com">Go To Google</Anchor>
                </Container>
            </>
        );
    }
}

const Container = styled.div`
    height:100vh;
    width:100%;
    margin:0;
    padding:0;
    background-color: pink;
`

const Button = styled.button`
    min-width: 120px;
    padding: 5px;
    border-radius: 50px;
    color: #fff;
    font-weight: 600;
    appearance: none;;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus{
        outline: none;
    }
    background-color: ${props => props.error ? "#F44336" : "#8BC34A"}
`

const Anchor = styled(Button.withComponent("a"))`
  text-decoration:none;
`

export default App;
