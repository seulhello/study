(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),s=n.n(o),i=(n(17),n(6)),c=n.n(i),l=n(9),u=n(1),p=n(2),m=n(4),v=n(3),h=n(5),d=(n(19),n(20),n(10)),f=n.n(d),g=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return console.log(this.props.genres),r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(_,{poster:this.props.poster,alt:this.props.title})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,this.props.title),r.a.createElement("div",{className:"Movie__Genres"},this.props.genres.map(function(e,t){return r.a.createElement(b,{genres:e,key:t})})),r.a.createElement("div",{className:"Movie__synopsis"},r.a.createElement(f.a,{text:this.props.synopsis,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))}}]),t}(a.Component),_=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:this.props.poster,alt:this.props.alt}))}}]),t}(a.Component);function b(e){var t=e.genres;return r.a.createElement("span",{className:"Movie__Genre"},t)}var j=g,y="https://yts.am/api/v2/list_movies.json?sort_by=download_count",O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(m.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),r.a.createElement(j,{key:e.id,title:e.title,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch(y).then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--loading"},this.state.movies?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.5d9ef43c.chunk.js.map