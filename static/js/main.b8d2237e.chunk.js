(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},31:function(e,t,a){e.exports=a(59)},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),m=a(8),o=a(9),i=a(12),u=a(10),s=a(13),E=a(24),p=a(28),d=a(29),h=a(4),y=a(60),b=function(){return l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Cost ($/unit)"),l.a.createElement("th",null,"Price ($/unit)"),l.a.createElement("th",null,"Order Received (unit)")))},f=function(){return l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component A"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"A1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"A2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"A3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component B"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"B1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"B2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"B3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component C"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"C1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"C2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"C3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component D"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"D1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"D2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"D3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component E"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"E1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"E2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"E3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component F"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"F1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"F2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"F3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component G"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"G1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"G2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"G3"}))),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Component H"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"H1"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"H2"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"H3"}))))},C=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(y.a,{bordered:!0},l.a.createElement(b,null),l.a.createElement(f,null))}}]),t}(n.Component),O=a(61),w=a(62),x=a(63),j=a(64),g=a(65),v=a(66),k=a(67),S=(a(17),a(26)),B=a.n(S),R=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={showResult:!1,schedule:[],maxProfit:0,numOfComponents:[],isLoading:!0,errors:null},e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e.showHome=e.showHome.bind(Object(h.a)(Object(h.a)(e))),e.onRadioBtnClick=e.onRadioBtnClick.bind(Object(h.a)(Object(h.a)(e))),e}return Object(s.a)(t,e),Object(o.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=new FormData(e.target),n=Object.assign.apply(Object,Object(d.a)(Array.from(a,function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(E.a)({},a,n)}))),l=[{quickScan:this.state.rSelected,components:[{name:"C1",cost:n.A1,price:n.A2,desiredUnit:n.A3},{name:"C2",cost:n.B1,price:n.B2,desiredUnit:n.B3},{name:"C3",cost:n.C1,price:n.C2,desiredUnit:n.C3},{name:"C4",cost:n.D1,price:n.D2,desiredUnit:n.D3},{name:"C5",cost:n.E1,price:n.E2,desiredUnit:n.E3},{name:"C6",cost:n.F1,price:n.F2,desiredUnit:n.F3},{name:"C7",cost:n.G1,price:n.G2,desiredUnit:n.G3},{name:"C8",cost:n.H1,price:n.H2,desiredUnit:n.H3}]}];alert(JSON.stringify(l)),this.setState({showResult:!0}),B.a.post("https://a625a135-4311-42be-bdaa-2ab1ba840d67.mock.pstmn.io/getSchedule",{json:n}).then(function(e){console.log(e),console.log(e.data),t.setState({schedule:e.data.schedule,maxProfits:e.data.maxProfits,numOfComponents:e.data.numOfComponents,isLoading:!1,showResult:!0})}).catch(function(e){return t.setState({error:e,isLoading:!1,showResult:!1})})}},{key:"showHome",value:function(){this.setState({showResult:!1})}},{key:"onRadioBtnClick",value:function(e){this.setState({rSelected:e})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.schedule,t.maxProfits,t.numOfComponents),n=t.isLoading;return!0===t.showResult?l.a.createElement("div",{className:"content-container"},l.a.createElement("h1",null,"Machine Scheduling Optimizer"),l.a.createElement("div",{className:"form-container"},l.a.createElement(O.a,null,l.a.createElement(w.a,null,l.a.createElement("h2",null,"Result"),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,n?l.a.createElement("div",null,l.a.createElement(x.a,{type:"grow",color:"primary"}),l.a.createElement(x.a,{type:"grow",color:"secondary"}),l.a.createElement(x.a,{type:"grow",color:"success"}),l.a.createElement(x.a,{type:"grow",color:"danger"}),l.a.createElement(x.a,{type:"grow",color:"warning"}),l.a.createElement(x.a,{type:"grow",color:"info"}),l.a.createElement(x.a,{type:"grow",color:"light"}),l.a.createElement(x.a,{type:"grow",color:"dark"})):a.map(function(e){var t=e.name,a=e.number;return l.a.createElement("h3",null,"Number of ",t," : ",a)}))),l.a.createElement(j.a,{color:"primary",size:"sm",onClick:this.showHome},"Back"))))):l.a.createElement("div",{className:"content-container"},l.a.createElement("h1",null,"Machine Scheduling Optimizer"),l.a.createElement("div",{className:"form-container"},l.a.createElement(O.a,{onSubmit:this.handleSubmit},l.a.createElement(w.a,null,l.a.createElement(g.a,{for:"companyName"},"Company Name"),l.a.createElement(v.a,{type:"textarea",name:"company",id:"companyName",placeholder:"Enter Company Name"}),l.a.createElement("div",{className:"checkbox-container"},l.a.createElement("h5",null,"Quick Scan"),l.a.createElement(k.a,null,l.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick(!0)},active:!0===this.state.rSelected},"On"),l.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick(!1)},active:!1===this.state.rSelected},"Off")))),l.a.createElement(w.a,null,l.a.createElement(C,null)),l.a.createElement(j.a,{type:"submit"},"Submit"))))}}]),t}(l.a.Component),N=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement(R,null))}}]),t}(l.a.Component);a(57),a(58);c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.b8d2237e.chunk.js.map