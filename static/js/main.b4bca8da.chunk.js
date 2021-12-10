(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{10:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),r=i(11),a=i.n(r),o=(i(16),i(3)),c=i(4),l=i(5),h=i(1),b=i(7),u=i(6),d=(i(9),i(10),i(0)),m=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(){return Object(c.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"length-control",children:[Object(d.jsx)("div",{id:this.props.titleID,children:this.props.title}),Object(d.jsxs)("div",{className:"lengthController",children:[Object(d.jsx)("button",{className:"btn-level",id:this.props.minID,onClick:this.props.onClick,value:"-",children:"-"}),Object(d.jsx)("div",{className:"btn-level",id:this.props.lengthID,children:this.props.length}),Object(d.jsx)("button",{className:"btn-level",id:this.props.addID,onClick:this.props.onClick,value:"+",children:"+"})]})]})}}]),i}(s.a.Component),j=m,p=function(e,t){var i,n,s,r;return n=(new Date).getTime()+t,s=null,r=function(){return n+=t,s=setTimeout(r,n-(new Date).getTime()),e()},i=function(){return clearTimeout(s)},s=setTimeout(r,n-(new Date).getTime()),{cancel:i}},g=function(e){Object(b.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(c.a)(this,i),(n=t.call(this,e)).state={brkLength:5,seshLength:25,timerState:"stopped",timerType:"Session",timer:1500,intervalID:"",alarmColor:{color:"white"}},n.setBrkLength=n.setBrkLength.bind(Object(h.a)(n)),n.setSeshLength=n.setSeshLength.bind(Object(h.a)(n)),n.lengthControl=n.lengthControl.bind(Object(h.a)(n)),n.timerControl=n.timerControl.bind(Object(h.a)(n)),n.beginCountDown=n.beginCountDown.bind(Object(h.a)(n)),n.decrementTimer=n.decrementTimer.bind(Object(h.a)(n)),n.phaseControl=n.phaseControl.bind(Object(h.a)(n)),n.warning=n.warning.bind(Object(h.a)(n)),n.buzzer=n.buzzer.bind(Object(h.a)(n)),n.switchTimer=n.switchTimer.bind(Object(h.a)(n)),n.clockify=n.clockify.bind(Object(h.a)(n)),n.reset=n.reset.bind(Object(h.a)(n)),n}return Object(l.a)(i,[{key:"setBrkLength",value:function(e){this.lengthControl("brkLength",e.currentTarget.value,this.state.brkLength,"Session")}},{key:"setSeshLength",value:function(e){this.lengthControl("seshLength",e.currentTarget.value,this.state.seshLength,"Break")}},{key:"lengthControl",value:function(e,t,i,n){if("running"!==this.state.timerState)if(this.state.timerType===n)"-"===t&&1!==i?this.setState(Object(o.a)({},e,i-1)):"+"===t&&60!==i&&this.setState(Object(o.a)({},e,i+1));else if("-"===t&&1!==i){var s;this.setState((s={},Object(o.a)(s,e,i-1),Object(o.a)(s,"timer",60*i-60),s))}else if("+"===t&&60!==i){var r;this.setState((r={},Object(o.a)(r,e,i+1),Object(o.a)(r,"timer",60*i+60),r))}}},{key:"timerControl",value:function(){"stopped"===this.state.timerState?(this.beginCountDown(),this.setState({timerState:"running"})):(this.setState({timerState:"stopped"}),this.state.intervalID&&this.state.intervalID.cancel())}},{key:"beginCountDown",value:function(){var e=this;this.setState({intervalID:p((function(){e.decrementTimer(),e.phaseControl()}),1e3)})}},{key:"decrementTimer",value:function(){this.setState({timer:this.state.timer-1})}},{key:"phaseControl",value:function(){var e=this.state.timer;this.warning(e),this.buzzer(e),e<0&&(this.state.intervalID&&this.state.intervalID.cancel(),"Session"===this.state.timerType?(this.beginCountDown(),this.switchTimer(60*this.state.brkLength,"Break")):(this.beginCountDown(),this.switchTimer(60*this.state.seshLength,"Session")))}},{key:"warning",value:function(e){e<61?this.setState({alarmColor:{color:"#a50d0d"}}):this.setState({alarmColor:{color:"white"}})}},{key:"buzzer",value:function(e){0===e&&this.audioBeep.play()}},{key:"switchTimer",value:function(e,t){this.setState({timer:e,timerType:t,alarmColor:{color:"white"}})}},{key:"clockify",value:function(){var e=Math.floor(this.state.timer/60),t=this.state.timer-60*e;return(e=e<10?"0"+e:e)+":"+(t=t<10?"0"+t:t)}},{key:"reset",value:function(){this.setState({brkLength:5,seshLength:25,timerState:"stopped",timerType:"Session",timer:1500,intervalID:"",alarmColor:{color:"white"}}),this.state.intervalID&&this.state.intervalID.cancel(),this.audioBeep.pause(),this.audioBeep.currentTime=0}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"main-title",children:"25 + 5 Clock"}),Object(d.jsxs)("div",{className:"lengthControllers",children:[Object(d.jsx)(j,{addID:"break-increment",length:this.state.brkLength,lengthID:"break-length",minID:"break-decrement",onClick:this.setBrkLength,title:"Break Length",titleID:"break-label"}),Object(d.jsx)(j,{addID:"session-increment",length:this.state.seshLength,lengthID:"session-length",minID:"session-decrement",onClick:this.setSeshLength,title:"Session Length",titleID:"session-label"})]}),Object(d.jsx)("div",{className:"timer",style:this.state.alarmColor,children:Object(d.jsxs)("div",{className:"timer-wrapper",children:[Object(d.jsx)("div",{id:"timer-label",children:this.state.timerType}),Object(d.jsx)("div",{id:"time-left",children:this.clockify()})]})}),Object(d.jsxs)("div",{className:"timer-control",children:[Object(d.jsx)("button",{id:"start_stop",onClick:this.timerControl,children:"Play/Pause"}),Object(d.jsx)("button",{id:"reset",onClick:this.reset,children:"Reset"})]}),Object(d.jsx)("audio",{id:"beep",preload:"auto",ref:function(t){e.audioBeep=t},src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})}}]),i}(s.a.Component);a.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))},9:function(e,t,i){}},[[18,1,2]]]);
//# sourceMappingURL=main.b4bca8da.chunk.js.map