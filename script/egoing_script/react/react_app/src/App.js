import React, {Component} from 'react'; 
import TOC from './components/TOC'
import Content from './components/content'
import Subject from './components/subject'
import './App.css';

class App extends Component{
    // constructor가 있으면 컴포넌트가 실행되기 이전에 초기화를 담당한다.
    constructor(props){
        super(props);
        this.state = {
            mode:'read',
            welcome:{title:'Welcome',desc:'Hello React'},
            subject : {
                title: 'WEB',
                sub: 'world wide web!!'
            },
            contents:[
                {id:1, title:'HTML', desc:'HTML is for infomation'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'Javascript', desc:'JAvascript is for interactive'}
            ]
        }
    }
    //bind란? 
    // ex) test= {name: 'siri'} 
    //function bindTest(){console.log(this.name)} 이런식으로 함수가 되어있을때 
    //bindTest(); 라고 하게되면 결과 값이 undefinded가 된다. 내가 원하는건 test값이 bindTest와 연결되어 bindTest함수가 실행되게 하고싶다. 그렇게하려면
    //bindTest.bind(test); 이런식으로 해서 console을 찍으면 siri라고 나오게 된다.
    // 즉 bind란 내가 원하는 객체를 고정시켜주는 역할이라고 이해하면 될 것같다. (예제에서는 test)
    //그냥 연결만 시켜주는게 아닌 연결이 된 새로운 함수를 만들어서 그내용을 보여주는것이다 
    // const bindTest2 = bindTest.bind(obj); bindTest2();   결과 => siri
    render(){
        let _title,_desc = null;
        if(this.state.mode === 'Welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        //여기서 찍은 this는 App의 this이다 이것을 onClick안에 있는 함수에 bind하면 
        //App의 this가 고정이 된다.
        console.log(this);
        return(
            <div className="App">
                {/* <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub} 
                /> */}
                <header>
                    <h1><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.setState({
                            mode:'Welcome'
                        });
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header>
                <TOC data={this.state.contents} />
                <Content title={_title} desc={_desc} />
            </div>
        );
    }
}

export default App;
