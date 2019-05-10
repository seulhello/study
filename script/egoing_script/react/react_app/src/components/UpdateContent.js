import React, {Component} from 'react'; 

class UpdateContent extends Component{
    render(){
        console.log(this.props);
        return (
            <article>
                <h2>Update</h2>
                <form action="/update_process" method="post">
                    <p><input type="text" name="title" placeholder="title" /></p>
                    <p><textarea name="desc" id="" cols="30" rows="10" placeholder="content"></textarea></p>
                    <p><input type="submit" value="submit" /></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;