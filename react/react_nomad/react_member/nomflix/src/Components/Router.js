import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={home} />
            {/*[part1] 같은 router ex) /tv, /tv/popular 가 있는 경우 랜더링은 두개 동시에 된다  */}
            <Route exact path="/tv" component={TV} />
            {/* exact는 파생되는 Router(/tv,/tv/popular)가 서로 중복되는 내용이 나오지 않도록하는 것 정확한 url의 내용을 따르는것 */}
            <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
            <Route path="/search" component={Search} />
            {/* Redirect 만약에 일치하는 Route가 하나도 없다면 이쪽으로 돌려줘 from (어느 페이지던 ) to (여기로 보내게 해줘)*/}
            {/* 하단에 있는 것 그대로 하게되면 part1 처럼 같은 Router를 가지고 있기 때문에 redirect 와 path "/" 를 가진것 두개 동시에 랜더링 되기때문에 오류가 생겨난다 */}
            {/* <Redirect from="*" to="/" /> */}
            {/* 그래서 하단에 있는 처럼 Switch를 사용하여 바꾸어야 한다. (Router를 switch로 감싼다)*/}
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);