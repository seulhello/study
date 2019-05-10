import React, {Component} from 'react'; 

class TOC extends Component{
    render(){
        let lists = [];
        let data = this.props.data;
        for(var i=0;i < data.length; i++){
            lists.push(<li key={data[i].id}><a href={`/content/${data[i].id}`} onClick={function(id_num,e){
                e.preventDefault();
                console.log(e);
                this.props.onChangePage(id_num);
            }.bind(this,data[i].id)}
            >{data[i].title}</a></li>);
        }
        console.log(data)
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;
