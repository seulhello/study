import React,{ Component } from 'react';
import Router from 'Components/Router';
// import Header만 해도 되는 이유 Header 폴더에 index.js 가 있어서 캡슐화에 용이하다
import Header from 'Components/Header';

class App extends Component{
    render(){
        return(
            <>
                <Header />
                <Router />
            </>
        );
    }
}

export default App;
