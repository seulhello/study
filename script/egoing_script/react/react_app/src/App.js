import React, {Component} from 'react'; 
import TOC from './components/TOC';
import ReadContent from './components/Readcontent';
import CreateContent from './components/Createcontent';
import UpdateContent from './components/UpdateContent';
import Control from './components/control';
import Subject from './components/subject';
import './App.css';

class App extends Component{
    // constructor가 있으면 컴포넌트가 실행되기 이전에 초기화를 담당한다.
    constructor(props){
        super(props);
        this.max_content_id = 3;
        this.state = {
            selected_content_id:2,
            mode:'Welcome',
            welcome:{title:'Welcome',desc:'Hello React'},
            subject : {
                title: 'WEB',
                sub: 'world wide web!!'
            },
            contents:[
                {id:1, title:'HTML', desc:'HTML is for infomation'},
                {id:2, title:'CSS', desc:'CSS is for design'},
                {id:3, title:'Javascript', desc:'Javascript is for interactive'}
            ]
        }
    }
    getContent(){
        let _title,_desc,_article = null;
        if(this.state.mode === 'Welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc} />
        }else if(this.state.mode === 'read'){
            for(var i = 0; i < this.state.contents.length;i++){
                let data = this.state.contents[i];
                if(data.id === this.state.selected_content_id){
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
            }
            _article = <ReadContent title={_title} desc={_desc} />
        }else if(this.state.mode === 'create'){
            _article = <CreateContent 
                            onSubmit = {(_title,_desc)=>{
                                this.max_content_id = this.max_content_id + 1;
                                //입력받은 값으로 새로운 state 값을 만들어서 추가한다
                                //concat은 원본의 정보를 직접 변경하지 않고 복사본을 반든다고 생각하면 좋다 그래서 하단과 같이 내용을 추가할때 push가 아닌 concat을 쓴이유가 바로 위와 같은 이유이다 
                                //const a = [1,2]; a.push(3); console.log(a) => [1,2,3] 
                                //원본을 변경하는것 (push)
                                ///const a = [1,2]; a.concat(3);{여기서 복사본 형성!} console.log(a) => [1,2]
                                //[1,2,3]을 얻고 싶으면 concat 함수를 사용했을때 생긴 복사본을 새로운 변수에 저장하여 불러내면된다 
                                //const a= [1,2]; const b = a.concat(3); console.log(b) =>
                                //[1,2,3] a는 변화없이 [1,2]를 유지한다
                                //왜 이게 필요한가??
                                // =>>> 추후에 생길 성능 문제 때문에 이런식으로 한다. 
                                let _contents =this.state.contents.concat({id:this.max_content_id,title:_title,desc:_desc}
                                );
                                this.setState({
                                    contents : _contents
                                })
                            }}
                        />
        }else if(this.state.mode === 'update'){
            _article = <UpdateContent />
        }
        //여기서 찍은 this는 App의 this이다 이것을 onClick안에 있는 함수에 bind하면 
        //App의 this가 고정이 된다.
        // console.log(this);
        //state의 값을 변경할때는 직접변경이아닌 꼭!!!!!!!!! setState를 사용해야한다.
        //onchangepage라는 이벤트는 내가 만든것이다.
        return _article;
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
        return(
            <div className="App">
                <Subject 
                    title={this.state.subject.title} 
                    sub={this.state.subject.sub}
                    onChangePage = {() => {
                        this.setState({
                            mode:'Welcome'
                        });
                    }}
                />
                {/* <header>
                    <h1><a href="/" onClick={function(e){
                        e.preventDefault();
                        this.setState({
                            mode:'Welcome'
                        });
                    }.bind(this)}>{this.state.subject.title}</a></h1>
                    {this.state.subject.sub}
                </header> */}
                <TOC 
                    data={this.state.contents} 
                    onChangePage= {data_id => {
                        this.setState({
                            mode:'read',
                            selected_content_id: Number(data_id)
                        });
                    }}
                />
                <Control 
                    onChangeMode ={(mode_status) =>{
                        this.setState({
                            mode:mode_status
                        });
                    }}
                />
                {this.getContent()}
            </div>
        );
    }
}

export default App;
