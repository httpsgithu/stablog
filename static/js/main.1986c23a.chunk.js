(this["webpackJsonpstablog-site"]=this["webpackJsonpstablog-site"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/stablog_logo_256x256.899da545.png"},20:function(e,t,a){e.exports=a.p+"static/media/windows.185acfd1.svg"},21:function(e,t,a){e.exports=a.p+"static/media/mac.7ca102d4.svg"},25:function(e,t,a){e.exports=a(52)},30:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),i=a.n(o),r=(a(30),a(3)),c=a.n(r),l=a(15),m=a(16),h=a(17),u=a(22),d=a(18),g=a(23),p=a(19),v=a.n(p),E=a(20),b=a.n(E),f=a(21),k=a.n(f),w=a(54),N=a(4),y=a.n(N),B=(a(49),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={showThankList:!1,config:{downloadUrl:"https://github.com/YaoZeyuan/stablog#%E8%BD%AF%E4%BB%B6%E4%B8%8B%E8%BD%BD",releaseAt:"2019\u5e7410\u670822\u65e5",releaseNote:"\u7a33\u90e8\u843d1.1.0, \u95ea\u4eae\u53d1\u5e03.",version:1.1,detail:{windows:{version:1.1,url:"http://stablog.bookflaneur.cn/%E7%A8%B3%E9%83%A8%E8%90%BD%20Setup%201.1.0.exe"},mac:{version:1.1,url:"http://stablog.bookflaneur.cn/%E7%A8%B3%E9%83%A8%E8%90%BD-1.1.0.dmg"}}},thankList:[{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"},{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"},{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"},{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"},{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"},{reason:"*\u660e\u660e\u6350\u52a9\u4e8625\u5143",time:"2019-10-14 21:34"}]},a.toggleThankList=function(){a.setState({showThankList:!a.state.showThankList})},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,a,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("http://api.bookflaneur.cn/stablog/version");case 2:return t=e.sent,e.next=5,y.a.get("http://api.bookflaneur.cn/stablog/thank_you/list");case 5:a=e.sent,n=t.data,s=a.data,this.setState({config:n,thankList:s});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.config,a=e.thankList,n=e.showThankList,o=[],i=0,r=!0,c=!1,l=void 0;try{for(var m,h=a[Symbol.iterator]();!(r=(m=h.next()).done);r=!0){var u=m.value,d=i,g=s.a.createElement("div",{key:d,className:"thank-list-item"},s.a.createElement("div",{className:"thank-list-item-time"},u.time),s.a.createElement("div",{className:"thank-list-item-reason"},u.reason));o.push(g),i++}}catch(p){c=!0,l=p}finally{try{r||null==h.return||h.return()}finally{if(c)throw l}}return console.log("showThankList =>",n),s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"body"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"title"},"\u7a33\u90e8\u843d"),s.a.createElement("div",{className:"slogan"},"\u4e13\u4e1a\u5bfc\u51fa\u5907\u4efd\u5fae\u535a\u8bb0\u5f55"),s.a.createElement("div",{className:"desc"},"\u4e00\u952e\u5bfc\u51fa\u6307\u5b9a\u7528\u6237\u7684\u6240\u6709\u5fae\u535a&\u6587\u7ae0"),s.a.createElement("div",{className:"desc"},"\u6700\u65b0\u7248\u672c\uff1a",t.version),s.a.createElement("div",{className:"logo"},s.a.createElement("img",{src:v.a})),s.a.createElement("div",{className:"desc"},"\u4e0b\u8f7d"),s.a.createElement("div",null,s.a.createElement("div",{className:"download-container"},s.a.createElement("a",{className:"download-button",target:"_blank",href:t.detail.windows.url},s.a.createElement("img",{className:"download-button-icon",src:b.a}),"Windows\u7248"),s.a.createElement("a",{className:"download-button",target:"_blank",href:t.detail.mac.url},s.a.createElement("img",{className:"download-button-icon",src:k.a}),"Mac\u7248"))))),s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"comment"},s.a.createElement("a",{className:"tip",href:"https://github.com/YaoZeyuan/stablog",target:"_blank"},"\u4f7f\u7528\u6307\u5357"),s.a.createElement("p",{className:"tip",onClick:this.toggleThankList},"\u81f4\u8c22\u5217\u8868"),s.a.createElement("a",{className:"tip",href:"https://github.com/YaoZeyuan/stablog/issues",target:"_blank"},"\u529f\u80fd\u5efa\u8bae")),s.a.createElement(w.a,{in:this.state.showThankList,timeout:300,classNames:"fade",unmountOnExit:!0},s.a.createElement("div",{className:"thank-list"},o))),s.a.createElement("a",{href:"https://github.com/you",className:"fork-me-on-github"},s.a.createElement("img",{width:"149px",height:"149px",src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149",alt:"Fork me on GitHub"})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1986c23a.chunk.js.map