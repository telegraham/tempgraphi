(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(59)},36:function(e,t,n){},38:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(27),r=n.n(c),i=(n(36),n(9)),l=n(10),s=n(14),u=n(11),h=n(15),d=n(60),m=(n(38),"https://tempapi-backend.herokuapp.com");var p=n(62),f=function(e){var t=e.locations.map(function(e){return o.a.createElement("li",{key:e.slug},o.a.createElement(p.a,{to:"/"+e.slug},e.name))});return o.a.createElement("ol",{className:"locations"},t)},g=n(30),v=n(12),b=(n(48),n(23)),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={readings:[]},n.handleReceivedReading=function(e){n.setState({readings:Object(g.a)(n.state.readings).concat([e])})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setReadings()}},{key:"componentDidUpdate",value:function(){this.props.location.slug!==this.state.locationSlug&&this.setReadings()}},{key:"setReadings",value:function(){var e,t,n=this,a=this.props.location.slug;e=a,t=function(e){n.setState({locationSlug:a,readings:e})},fetch("".concat(m,"/locations/").concat(e,"/readings")).then(function(e){return e.json()}).then(t)}},{key:"processedData",value:function(){return console.log("pd"),this.state.readings.filter(function(e){return Date.parse(e.time)>154225314e4}).reduce(function(e,t){return t.data.forEach(function(n){e.push({y:n.temperature,x:Date.parse(t.time)+n.seconds})}),e},[])}},{key:"formatXAxis",value:function(e){return new Date(e).toLocaleString()}},{key:"render",value:function(){console.log(this.state.readings.length);var e=this.props.location;return o.a.createElement("section",null,o.a.createElement("h2",null,this.props.location.name),o.a.createElement(v.ActionCable,{key:e.id,channel:{channel:"ReadingsChannel",location:e.slug},onReceived:this.handleReceivedReading}),o.a.createElement(b.b,{height:300,width:300},o.a.createElement(b.a,{data:this.processedData()})))}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={locations:[]},n.renderLocation=function(e){var t=e.match.params.locationSlug,a=n.state.locations.find(function(e){return e.slug===t});return a?o.a.createElement(E,{location:a}):o.a.createElement(o.a.Fragment,null)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;e=function(e){t.setState({locations:e})},fetch("".concat(m,"/locations")).then(function(e){return e.json()}).then(e)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Temperature TCF"),o.a.createElement(f,{locations:this.state.locations}),o.a.createElement(d.a,{path:"/:locationSlug",render:this.renderLocation}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(61);r.a.render(o.a.createElement(v.ActionCableProvider,{url:"wss://tempapi-backend.herokuapp.com/cable"},o.a.createElement(w.a,null,o.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.28d4974a.chunk.js.map