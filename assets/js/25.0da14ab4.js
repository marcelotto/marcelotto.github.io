(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{211:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#statements","aria-hidden":"true"}},[t._v("#")]),t._v(" Statements")]),t._v(" "),s("p",[t._v("RDF statements are generally represented in RDF.ex as native Elixir tuples, either as 3-element tuples for triples or as 4-element tuples for quads.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("RDF.Triple")]),t._v(" and "),s("code",[t._v("RDF.Quad")]),t._v(" modules both provide a function "),s("code",[t._v("new")]),t._v(" for such tuples, which coerces the elements to proper nodes when possible or raises an error when such a coercion is not possible. In particular these functions also resolve qualified terms from a vocabulary namespace. They can also be called with the alias functions "),s("code",[t._v("RDF.triple")]),t._v(" and "),s("code",[t._v("RDF.quad")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[t._v("iex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("triple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\niex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("triple "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\niex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Graph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n ~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Graph"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\niex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("triple "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Triple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InvalidPredicateError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" is "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" a valid predicate of a RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Triple\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rdf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ex"),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[t._v(":53")]),t._v(": RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("coerce_predicate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rdf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rdf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("triple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ex"),s("span",{pre:!0,attrs:{class:"token atom symbol"}},[t._v(":26")]),t._v(": RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Triple"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("new"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("p",[t._v("If you want to explicitly create a quad in the default graph context, you can use "),s("code",[t._v("nil")]),t._v(" as the graph name. The "),s("code",[t._v("nil")]),t._v(" value is used consistently as the name of the default graph within RDF.ex.")]),t._v(" "),s("div",{staticClass:"language-elixir extra-class"},[s("pre",{pre:!0,attrs:{class:"language-elixir"}},[s("code",[t._v("iex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" EX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ~I"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http:")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" RDF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);