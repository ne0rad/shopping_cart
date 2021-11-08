(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{17:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),r=c(11),i=c.n(r),s=c(6),o=c(4),d=c(5),j=c(0);var u=function(t){var e=t.id,c=t.product,n=t.quantity,a=t.removeFromCart;return t.changeQuantity,Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsx)("span",{className:"title-text",children:c.name}),Object(j.jsxs)("div",{className:"title-description",children:[n," x ",Object(j.jsxs)("span",{className:"price-text",children:["\xa3",c.price]}),Object(j.jsx)("button",{className:"btn btn-remove",onClick:function(){return a(e)},children:"Remove"})]}),Object(j.jsx)("br",{})]})};var l=function(t){var e=t.cart,c=t.cartQuantity,n=t.removeFromCart,a=t.changeQuantity,r=t.clearCart,i=t.cartOpen,s=t.toggleCart,o=t.ProductsJSON;function d(){for(var t=0,n=0;n<e.length;n++)t+=o[e[n]].price*c[n];return(Math.round(100*t)/100).toFixed(2)}return t.products,Object(j.jsx)(j.Fragment,{children:i&&Object(j.jsxs)("div",{id:"Cart",children:[e.length>0?Object(j.jsxs)("div",{children:[e.map((function(t,e){return Object(j.jsx)(u,{id:t,product:o[t],quantity:c[e],removeFromCart:n,changeQuantity:a},t)})),Object(j.jsxs)("div",{className:"title-text",children:["Total: \xa3",d()]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn",onClick:function(){return function(){var t=d();alert("You have been charged \xa3"+t+" on your fake credit card!"),r(),s()}()},children:"Checkout"})]}):Object(j.jsx)("div",{className:"title-text",children:"No items in the cart"}),Object(j.jsx)("button",{className:"btn btn-red",onClick:function(){return s()},children:"Close"})]})})};var b=function(t){var e=t.toggleCart,c=t.cart;return Object(j.jsxs)("div",{id:"Header",children:[Object(j.jsx)("div",{id:"header-logo",children:"\u29be NeoTech \u29be"}),Object(j.jsxs)("div",{id:"menu",children:[Object(j.jsx)(d.b,{className:"menu-item",to:"/",children:"Home"}),Object(j.jsx)(d.b,{className:"menu-item",to:"/products",children:"Products"}),Object(j.jsx)(d.b,{className:"menu-item",to:"/contacts",children:"Contacts"}),Object(j.jsx)("div",{className:"menu-item",onClick:e,children:Object(j.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",children:[Object(j.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(j.jsx)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})]})}),c.length>0&&Object(j.jsx)("div",{id:"cart-count",children:c.length})]})]})},h=c(2);var O=function(){return Object(j.jsx)("div",{id:"Home",className:"main",children:Object(j.jsx)("h1",{children:"Home"})})};var m=function(t){var e=t.product,c=t.quantity,n=t.addToCart,a=t.changeQuantity;return Object(j.jsxs)("li",{className:"product",children:[Object(j.jsx)("div",{className:"title-text",children:e.name}),Object(j.jsx)("div",{className:"description-text",children:e.description}),Object(j.jsxs)("div",{className:"add-div",children:[Object(j.jsxs)("div",{className:"price-text",children:["\xa3",e.price]}),c>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{className:"description-text",children:" Quantity: "}),Object(j.jsx)("button",{className:"btn btn-quantity",onClick:function(){return c>0&&a(e.id,c-1)},children:"-"}),Object(j.jsx)("span",{className:"quantity-text",children:c})]}),Object(j.jsx)("button",{className:c>0?"btn btn-quantity":"btn btn-add",onClick:function(){return n(e.id)},children:c>0?"+":"Add to Cart"})]})]},e.id)};var p=function(t){var e=t.cart,c=t.cartQuantity,n=t.addToCart,a=t.changeQuantity,r=(t.toggleCart,t.openCart,t.products);function i(t){var n=e.indexOf(t);return n>-1?c[n]:0}return Object(j.jsxs)("div",{id:"Products",className:"main",children:[Object(j.jsx)("h1",{children:"Products"}),Object(j.jsx)("ul",{className:"products",children:r.map((function(t){return Object(j.jsx)(m,{product:t,quantity:i(t.id),addToCart:n,changeQuantity:a},t.id)}))})]})};var x=function(){return Object(j.jsx)("div",{id:"Contacts",className:"main",children:Object(j.jsx)("h1",{children:"Contacts"})})};var v=function(){return Object(j.jsx)("div",{id:"NotFound",className:"main",children:Object(j.jsx)("h1",{children:"Page Not Found"})})};var g=function(t){var e=t.cart,c=t.cartQuantity,n=t.addToCart,a=t.changeQuantity,r=t.toggleCart,i=t.openCart,s=t.ProductsJSON,o=t.products;return Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",element:Object(j.jsx)(O,{})}),Object(j.jsx)(h.a,{path:"/products",element:Object(j.jsx)(p,{cart:e,cartQuantity:c,addToCart:n,changeQuantity:a,toggleCart:r,openCart:i,ProductsJSON:s,products:o})}),Object(j.jsx)(h.a,{path:"/contacts",element:Object(j.jsx)(x,{})}),Object(j.jsx)(h.a,{path:"*",element:Object(j.jsx)(v,{})})]})};var f=function(){return Object(j.jsx)("div",{id:"Footer",children:Object(j.jsx)("div",{className:"footer-item",children:"Made by ne0rad"})})},N=c(9);var C=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),c=e[0],a=e[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],h=i[1],O=Object(n.useState)(!1),m=Object(o.a)(O,2),p=m[0],x=m[1],v=Object(n.useState)([]),C=Object(o.a)(v,2),y=C[0],S=C[1];function Q(t,e){var n=Object(s.a)(c),r=Object(s.a)(u),i=c.indexOf(t);0===e?(n.splice(i,1),r.splice(i,1)):-1===i?(n.push(t),r.push(e)):r[i]=e,a(n),h(r),F(n,r)}function w(){x(!p)}function F(t,e){window.sessionStorage.setItem("cart",JSON.stringify(t)),window.sessionStorage.setItem("quantity",JSON.stringify(e))}return Object(n.useEffect)((function(){var t=JSON.parse(window.sessionStorage.getItem("cart")),e=JSON.parse(window.sessionStorage.getItem("quantity"));t||(t=[]),e||(e=[]),a(t),h(e),function(){var t=[];for(var e in N)t.push(N[e]);S(t)}()}),[]),Object(j.jsxs)("div",{id:"content",children:[Object(j.jsx)(l,{cart:c,cartQuantity:u,removeFromCart:function(t){var e=Object(s.a)(c),n=Object(s.a)(u),r=c.indexOf(t);e.splice(r,1),n.splice(r,1),a(e),h(n),F(e,n)},changeQuantity:Q,clearCart:function(){a([]),h([]),F([],[])},cartOpen:p,toggleCart:w,ProductsJSON:N,products:y}),Object(j.jsxs)(d.a,{children:[Object(j.jsx)(b,{toggleCart:w,cart:c}),Object(j.jsx)(g,{cart:c,cartQuantity:u,addToCart:function(t){var e=Object(s.a)(c),n=Object(s.a)(u),r=e.indexOf(t);-1===r?(e.push(t),n.push(1)):n[r]<10&&n[r]++,a(e),h(n),F(e,n)},changeQuantity:Q,toggleCart:w,openCart:function(){x(!0)},ProductsJSON:N,products:y})]}),Object(j.jsx)(f,{})]})};c(17);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('{"0":{"id":0,"name":"GeForce RTX 3080 Graphics Card","description":"High end graphics card.","price":599.99},"1":{"id":1,"name":"GeForce RTX 3090 Graphics Card","description":"Top tier graphics card, for our most demanding customers.","price":899.99},"3":{"id":3,"name":"Nintendo Switch Console","description":"The best selling Nintendo console ever! Fun for the whole family","price":359.99},"4":{"id":4,"name":"Playstation 5 Digital Edition","description":"Most powerful playstation to date. Digital edition (no disc)","price":389.99},"5":{"id":5,"name":"Playstation 5 Console","description":"Most powerful playstation to date.","price":429.99}}')}},[[18,1,2]]]);
//# sourceMappingURL=main.f5729a90.chunk.js.map