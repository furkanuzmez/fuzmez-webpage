(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4ro0":function(A,e,t){var n={"./content/project/e-commerce/postcover.png":"dgvA"};function s(A){var e=E(A);return t(e)}function E(A){if(!t.o(n,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return n[A]}s.keys=function(){return Object.keys(n)},s.resolve=E,A.exports=s,s.id="4ro0"},KJQv:function(A,e,t){},KNYz:function(A,e,t){"use strict";t.r(e);var n=t("dI71"),s=t("q1tI"),E=t.n(s),g=t("zuNU"),D=t("Bl7J"),l=t("vrFN"),v=function(A){function e(e){var t;return(t=A.call(this,e)||this).handleActiveButton=function(A){return function(e){return t.setState({activeButton:A}),console.log(t.state.activeButton),0}},t.state={activeButton:"All"},t}return Object(n.a)(e,A),e.prototype.render=function(){var A=this,e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges,s=[],v={};n.map((function(A){var e=A.node;return null==e.frontmatter.subjects?null:e.frontmatter.subjects.map((function(A){s.includes(A)?v[A]=Number(v[A])+1:(s.push(A),v[A]=1)}))}));for(var f in console.log(v),v)Number(v[f]);return E.a.createElement(D.a,{location:this.props.location,title:t},E.a.createElement(l.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),E.a.createElement("h3",null,"Projects"),E.a.createElement("hr",null),E.a.createElement("div",{class:"btns"},console.log(s),E.a.createElement("button",{"data-menu":"all",className:"button "+("All"==this.state.activeButton?"active-color":""),id:"All",onClick:this.handleActiveButton("All")}," ","All  ( "+n.length+" ) "," "),s.map((function(e){return console.log(e),E.a.createElement("button",{"data-menu":"all",className:"button "+(A.state.activeButton==e?"active-color":""),id:e,onClick:A.handleActiveButton(e)},e+"  ( "+v[e]+" ) ")}))),E.a.createElement("section",{class:"cards-wrapper"},n.map((function(e){var t=e.node;if("All"==A.state.activeButton||t.frontmatter.subjects.includes(A.state.activeButton))return E.a.createElement(g.a,{node:t,linkTo:"/project"})}))))},e}(E.a.Component);e.default=v},Kh2z:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqQAAAKlCAIAAACSeGlbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NTg1MDVGMjA3NDExRTM5QTIwRjQ0MUFEM0NDRjVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3NTg1MDYwMjA3NDExRTM5QTIwRjQ0MUFEM0NDRjVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDc1ODUwNUQyMDc0MTFFMzlBMjBGNDQxQUQzQ0NGNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDc1ODUwNUUyMDc0MTFFMzlBMjBGNDQxQUQzQ0NGNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94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AxRobm7u6rVreVKkUmKfpNJ//c03eg9QlJmZmes3bhR4Ud7bCop9Mjo6mnpf2tsrAYo1Ozd388svfVpKcftf9b6QzzQEKNni4uLNmzeVPinxEFTn891cDyCwy8vL166X+Jb69xpYW9/Mw/KsPXktTwAI4c2dc25Y0b2t6NgnOzs791ZX2+12ngPQZNPT09dvXC/zzjkfUXrsk8PDw0ePHq0/f57nADTQ68+yW15eunDBqft3iX2WlvgPHzzY29vLcwCaY25+/ovyPsuue2L/X0dHRxvr60+ePHFWH6AppqamLi8vT09P5znvI/Z/1ul0UvKfPn3aarXyQwDUz9T09KVLl1yI1w2xf7+0yt/e2nr2/Hn6Mz8EQA0MDg4uLCwsLi1NTk7mh/gUsf+Edru9+eK1ly9f5ocA6LvU+JmZmfn5+dm5OffJOS6x79bhwcH2zk5K/sudnb29vbT0z18AoDdS1NPyfWp6enpqKv3pMvsTE/uTSKXf39vbb72Wlv4HBwedw8PDzmH+MgDHNPDZwODQa8PDw6MjI6Ojo2Pj466uPytiDwDBedkDAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASA4sQeA4MQeAIITewAITuwBIDixB4DgxB4AghN7AAhO7AEgOLEHgODEHgCCE3sACE7sASC0zz77/3lHbq2BALelAAAAAElFTkSuQmCC"},dgvA:function(A,e,t){A.exports=t.p+"static/postcover-4b48a121cee129ea878b1e021a0d251a.png"},zuNU:function(A,e,t){"use strict";var n=t("q1tI"),s=t.n(n),E=t("Wbzz");t("p3AD"),t("KJQv");e.a=function(A){var e,n=A.node,g=A.linkTo,D=n.frontmatter.title||n.fields.slug;try{e=t("4ro0")("./content"+g+n.fields.slug+"postcover.png")}catch(l){e=t("Kh2z")}return console.log(e),s.a.createElement("div",{class:"card-grid-space"},s.a.createElement(E.Link,{class:"card",to:g+n.fields.slug},s.a.createElement("div",{class:"date"},s.a.createElement("h2",null,D),s.a.createElement("p",null,n.frontmatter.description.substring(0,350)||n.excerpt.substring(0,350),"..."),s.a.createElement("div",{class:"date"},n.frontmatter.date),s.a.createElement("div",{class:"tags"},null==n.frontmatter.subjects?null:n.frontmatter.subjects.map((function(A){return s.a.createElement("div",{class:"tag"},A)}))))))}}}]);
//# sourceMappingURL=component---src-pages-project-js-938424fc95644dae1293.js.map