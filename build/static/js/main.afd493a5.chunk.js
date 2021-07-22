(this["webpackJsonplambda-eats"]=this["webpackJsonplambda-eats"]||[]).push([[0],{214:function(e,n,i){"use strict";i.r(n);var t,a,c=i(1),s=i(81),r=i.n(s),l=(i(93),i(21)),d=i(19),o=i(11),j=i(4),h=i(15),p=i(2),b=i(6),m=i(5),u=i(85),x=i.n(u),O=b.b().shape({name:b.d().required("Name is required").min(2,"name must be at least 2 characters"),size:b.d().oneOf(["small","medium","large"],"Size is required"),sauce:b.d().oneOf(["original","garlic ranch","bbq sauce","spinach alfredo"],"sauce is required"),pepperoni:b.a(),sausage:b.a(),canadian:b.a(),green:b.a(),pineapple:b.a(),extra:b.a(),special:b.d().notRequired()}),g=i(0),f=m.a.div(t||(t=Object(j.a)(["\n  display: flex;\n  flex-flow: column wrap;\n\n  label {\n    padding: 1%;\n    font-size: 1.1rem;\n  }\n"])));function v(e){var n=e.values,i=e.onChange;return Object(g.jsx)(f,{children:["Pepperoni","Sausage","Canadian Bacon","Green Pepper","Pineapple","Extra Cheese"].map((function(e){return Object(g.jsxs)("label",{children:[e,Object(g.jsx)("input",{type:"checkbox",name:e.split(" ")[0].toLocaleLowerCase(),value:n[e.split(" ")[0].toLocaleLowerCase()],onChange:i})]},e.split(" ")[0].toLocaleLowerCase())}))})}var z,w=m.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 1.1rem;\n\n  label {\n    margin: 1%;\n  }\n"])));function N(e){var n=e.onChange;return Object(g.jsx)(w,{children:["Original","Garlic Ranch","BBQ Sauce","Spinach Alfredo"].map((function(e){return Object(g.jsxs)("label",{children:[e,Object(g.jsx)("input",{type:"radio",name:"sauce",value:e.toLowerCase(),onChange:n})]},e.toLowerCase())}))})}var y,k=m.a.div(z||(z=Object(j.a)(["\n  height: 100%;\n  width: 60%;\n  margin: auto;\n\n  button {\n    width: 50%;\n    margin: auto 25%;\n    padding: 3%;\n    border-radius: 25px;\n  }\n\n  .choice-title {\n    font-size: 1.5rem;\n    font-weight: bold;\n  }\n\n  .choice-requirement {\n    font-size: 1.15rem;\n  }\n\n  .form-header img {\n    width: 100%;\n    display: block;\n    height: auto;\n    margin: auto;\n  }\n\n  .choice-header {\n    background-color: #d6d6d6;\n    padding: 2%;\n  }\n\n  .choice-inputs {\n    padding: 4%;\n  }\n\n  #size-dropdown {\n    padding: 1%;\n    font-size: 1.05rem;\n    width: 40%;\n  }\n\n  #form-title {\n    font-size: 1.5rem;\n    text-align: center;\n    padding: 1%;\n    margin: 1%;\n  }\n\n  #special-text,\n  #name-input {\n    width: 90%;\n    margin: auto;\n    padding: 2%;\n    font-size: 1.2rem;\n  }\n"])));function C(e){var n=e.values,i=e.change,t=e.submit,a=e.disabled,c=e.errors,s=Object(p.f)(),r=function(e){var n=e.target,t=n.name,a=n.value,c=n.type,s=n.checked;i(t,"checkbox"===c?s:a)};return Object(g.jsxs)(k,{id:"form-container",children:[Object(g.jsxs)("section",{className:"form-header",children:[Object(g.jsx)("h3",{id:"form-title",children:"Build Your Own Pizza"}),Object(g.jsx)("img",{src:"https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg",alt:"pizzaImage"})]}),Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(),s.push("/pizza/orders")},id:"pizza-form",children:[Object(g.jsxs)("div",{className:"size",children:[Object(g.jsxs)("div",{className:"choice-header",children:[Object(g.jsx)("h5",{className:"choice-title",children:"Choice of Size"}),Object(g.jsx)("p",{className:"choice-requirement",children:"Required"})]}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)("label",{children:Object(g.jsxs)("select",{onChange:r,id:"size-dropdown",name:"size",children:[Object(g.jsx)("option",{value:"",children:"Select an option"}),Object(g.jsx)("option",{value:"small",children:"Small"}),Object(g.jsx)("option",{value:"medium",children:"Medium"}),Object(g.jsx)("option",{value:"large",children:"Large"})]})})})]}),Object(g.jsxs)("div",{className:"sauce",children:[Object(g.jsxs)("div",{className:"choice-header",children:[Object(g.jsx)("h5",{className:"choice-title",children:"Choice of Sauce"}),Object(g.jsx)("p",{className:"choice-requirement",children:"Required"})]}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)(N,{onChange:r})})]}),Object(g.jsxs)("div",{className:"toppings",children:[Object(g.jsxs)("div",{className:"choice-header",children:[Object(g.jsx)("h5",{className:"choice-title",children:"Add Toppings"}),Object(g.jsx)("p",{className:"choice-requirement",children:"Choose up to 6"})]}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)(v,{values:n,onChange:r})})]}),Object(g.jsxs)("div",{className:"special-instructions",children:[Object(g.jsx)("div",{className:"choice-header",children:Object(g.jsx)("h5",{className:"choice-title",children:"Special Instructions"})}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)("label",{children:Object(g.jsx)("input",{id:"special-text",type:"text",name:"special",placeholder:"Anything else you'd like to add",value:n.special,onChange:r})})})]}),Object(g.jsxs)("div",{className:"name",children:[Object(g.jsxs)("div",{className:"choice-header",children:[Object(g.jsx)("h5",{className:"choice-title",children:"Name"}),Object(g.jsx)("p",{className:"choice-requirement",children:"First and last name"})]}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)("label",{children:Object(g.jsx)("input",{id:"name-input",type:"text",name:"name",value:n.name,onChange:r})})})]}),Object(g.jsx)("div",{className:"choice-inputs",children:Object(g.jsx)("button",{disabled:a,id:"order-button",children:"Add To Order"})})]}),Object(g.jsxs)("div",{className:"errors",children:[Object(g.jsx)("div",{children:c.special}),Object(g.jsx)("div",{children:c.name}),Object(g.jsx)("div",{children:c.size}),Object(g.jsx)("div",{children:c.sauce}),Object(g.jsx)("div",{children:c.pepperoni}),Object(g.jsx)("div",{children:c.sausage}),Object(g.jsx)("div",{children:c.canadian}),Object(g.jsx)("div",{children:c.green}),Object(g.jsx)("div",{children:c.pineapple}),Object(g.jsx)("div",{children:c.extra}),Object(g.jsx)("div",{children:c.special})]})]})}var S,q=m.a.div(y||(y=Object(j.a)(["\n  height: 22vh;\n  width: 31%;\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n\n  .tags {\n    width: 100%;\n    margin-top: 10px;\n    padding: 10px;\n  }\n\n  .image {\n    height: 15vh;\n    width: 100%;\n  }\n\n  .name {\n    font-size: 1.25rem;\n    font-weight: 525;\n  }\n\n  .type,\n  .bordered {\n    font-size: 1rem;\n  }\n\n  .bordered {\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .time,\n  .price {\n    border: solid black 2px;\n    padding: 5px;\n    margin: 5px 0;\n  }\n\n  .price {\n    margin-left: 15px;\n  }\n"])));function F(e){var n=e.store;return Object(g.jsx)(q,{children:Object(g.jsxs)("div",{className:"tags",children:[Object(g.jsx)("img",{src:n.img,alt:"storeImage",className:"image"}),Object(g.jsx)("h4",{className:"name",children:n.store}),Object(g.jsx)("p",{className:"type",children:n.tags.map((function(e,n){return Object(g.jsxs)("span",{children:[" - ",e]},n)}))}),Object(g.jsxs)("div",{className:"bordered",children:[Object(g.jsxs)("p",{className:"time",children:[n.time," Min"]}),Object(g.jsxs)("p",{className:"price",children:["$",n.price]})]})]})})}var P,L=[{img:"https://i0.wp.com/www.eatthis.com/wp-content/uploads/2020/10/mcdonalds-exterior.jpg?resize=640%2C360&ssl=1",store:"Mcdonald's",tags:["American","Fast Food"],time:"20-30",price:5.99},{img:"https://media-cdn.tripadvisor.com/media/photo-s/03/b2/af/61/sweet-garden-cafe-restaurant.jpg",store:"sweetgreen",tags:["Healthy","Salads"],time:"30-45",price:4.99},{img:"https://stories.starbucks.com/wp-content/uploads/2019/01/Starbucks_Store_in_New_York_1-1.jpg",store:"Starbucks",tags:["Cafe","Coffee"],time:"10-30",price:3.99},{img:"https://www.tommyspizzanyc.com/wp-content/uploads/2019/02/about.jpg",store:"Tommy's Pizza",tags:["Pizza","Lunch & dinner"],time:"10-15",price:2.99},{img:"https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/2021-01/BurgerKing.jpg?itok=tgOUq2sH",store:"Burger King",tags:["American","Fast Food"],time:"15-20",price:6.99},{img:"https://www.nrn.com/sites/nrn.com/files/styles/article_featured_standard/public/IHOP-storefront_0.jpg?itok=z7pDgOk4",store:"iHop",tags:["Cafe","Breakfast"],time:"30-45",price:9.99}],T=m.a.div(S||(S=Object(j.a)(["\n  width: 90%;\n  margin: auto;\n\n  h3 {\n    font-size: 1.5rem;\n    font-weight: bold;\n    display: flex;\n    justify-content: start;\n    margin-left: 2.5%;\n    padding-top: 10px;\n  }\n\n  .stores {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    margin: 2% 0;\n  }\n"])));function B(){return Object(g.jsxs)(T,{children:[Object(g.jsx)("h3",{children:"Food Delivery In New York"}),Object(g.jsxs)("div",{className:"stores-container",children:[Object(g.jsx)("div",{className:"stores-1 stores",children:L.map((function(e,n){for(;n<3;)return Object(g.jsx)(F,{store:e},n)}))}),Object(g.jsx)("div",{className:"stores-2 stores",children:L.map((function(e,n){for(;n>=3;)return Object(g.jsx)(F,{store:e},n)}))})]})]})}var A,_=m.a.div(P||(P=Object(j.a)(['\n  h2 {\n    text-align: center;\n    font-size: 3.5rem;\n    color: white;\n    text-shadow: 2px 2px black;\n  }\n\n  button {\n    font-size: 1.15rem;\n    margin: 30%;\n    padding: 20%;\n    border-radius: 10%;\n  }\n\n  .main-pizza-div {\n    background-image: url("https://www.agrodolce.it/app/uploads/2016/02/pizza-napoletana-980x400.jpg");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    margin: auto;\n    height: 30vh;\n  }\n\n  .pizza-div-content {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n'])));function H(){var e=Object(p.f)();return Object(g.jsxs)(_,{children:[Object(g.jsx)("section",{className:"main-pizza-div",children:Object(g.jsxs)("div",{className:"pizza-div-content",children:[Object(g.jsx)("h2",{children:"Your favorite food, while coding"}),Object(g.jsx)("div",{id:"pizza-button-div",children:Object(g.jsx)("button",{onClick:function(){return e.push("/pizza")},children:"Pizza?"})})]})}),Object(g.jsx)(B,{})]})}var I,E=m.a.div(A||(A=Object(j.a)(["\n  width: 70%;\n  margin: auto;\n\n  ul {\n    list-style-type: circle;\n  }\n\n  h4 {\n    font-size: 1.5rem;\n    font-weight: bold;\n  }\n\n  h3 {\n    font-size: 1.5rem;\n  }\n\n  p {\n    font-size: 1.25rem;\n  }\n\n  iframe {\n    width: 500px;\n    height: 400px;\n    margin: auto;\n  }\n\n  .celebration-div {\n    display: flex;\n    flex-direction: column;\n    width: 80%;\n    margin: auto;\n    text-align: center;\n\n    .orders {\n      display: flex;\n      width: 100%;\n    }\n\n    .order {\n      padding: 10px;\n      margin: 20px;\n    }\n  }\n"])));function D(e){var n=e.orders;return console.log(n),Object(g.jsxs)(E,{children:[Object(g.jsxs)("div",{className:"celebration-div",children:[Object(g.jsx)("h4",{children:"Congrats! Pizza is on its way!"}),Object(g.jsx)("iframe",{title:"dog with pizza",src:"https://giphy.com/embed/9fuvOqZ8tbZOU",alt:"pizza-dog"}),Object(g.jsx)("p",{children:"Enjoy This Dog With Pizza"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"Order History"}),n&&0!==n.length?null:Object(g.jsx)("p",{children:"Fetching History..."}),Object(g.jsx)("div",{className:"orders",children:n.map((function(e,n){return Object(g.jsx)("div",{className:"order",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:["Order # ",n]}),Object(g.jsxs)("li",{children:["Special Information: ",e.special]}),Object(g.jsxs)("li",{children:["Name: ",e.name]}),Object(g.jsxs)("li",{children:["Size: ",e.size]}),Object(g.jsxs)("li",{children:["Sauce: ",e.sauce]}),Object(g.jsxs)("li",{children:["Pepperoni: ",e.pepperoni?"True":"False"]}),Object(g.jsxs)("li",{children:["Sausage: ",e.sausage?"True":"False"]}),Object(g.jsxs)("li",{children:["Canadian Bacon: ",e.canadian?"True":"False"]}),Object(g.jsxs)("li",{children:["Green Pepper: ",e.green?"True":"False"]}),Object(g.jsxs)("li",{children:["Pineapple: ",e.pineapple?"True":"False"]}),Object(g.jsxs)("li",{children:["Extra Cheese: ",e.extra?"True":"False"]})]})},e.name)}))})]})]})}var M=m.a.div(I||(I=Object(j.a)(["\n  height: 100vh;\n  width: 100%;\n\n  h1 {\n    font-size: 2rem;\n  }\n\n  .store-header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1% 5%;\n    align-items: center;\n  }\n\n  .nav-links {\n    margin-right: 5%;\n  }\n\n  .react-link {\n    font-size: 1.25rem;\n    padding: 10%;\n    text-decoration: none;\n    color: black;\n    font-weight: bold;\n    background-color: white;\n    border: solid black 2px;\n  }\n"]))),R={special:"",name:"",size:"",sauce:"",pepperoni:!1,sausage:!1,canadian:!1,green:!1,pineapple:!1,extra:!1},Y={special:"",name:"",size:"",sauce:""},G=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),i=n[0],t=n[1],a=Object(c.useState)(R),s=Object(o.a)(a,2),r=s[0],j=s[1],m=Object(c.useState)(Y),u=Object(o.a)(m,2),f=u[0],v=u[1],z=Object(c.useState)(true),w=Object(o.a)(z,2),N=w[0],y=w[1];Object(c.useEffect)((function(){O.isValid(r).then((function(e){y(!e)}))}),[r]);return Object(g.jsxs)(M,{children:[Object(g.jsxs)("header",{className:"store-header",children:[Object(g.jsx)("h1",{children:"LAMBDA EATS"}),Object(g.jsxs)("div",{className:"nav-links",children:[Object(g.jsx)(h.b,{className:"react-link",to:"/",children:"Home"}),Object(g.jsx)(h.b,{className:"react-link",id:"order-pizza",to:"/pizza",children:"Shop"}),Object(g.jsx)(h.b,{className:"react-link",id:"order-history",to:"/pizza/orders",children:"Orders"})]})]}),Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{path:"/pizza/orders",children:Object(g.jsx)(D,{orders:i})}),Object(g.jsx)(p.a,{path:"/pizza",children:Object(g.jsx)(C,{values:r,change:function(e,n){!function(e,n){b.c(O,e).validate(n).then((function(n){v(Object(d.a)(Object(d.a)({},f),{},Object(l.a)({},e,"")))})).catch((function(n){v(Object(d.a)(Object(d.a)({},f),{},Object(l.a)({},e,n.errors[0])))}))}(e,n),j(Object(d.a)(Object(d.a)({},r),{},Object(l.a)({},e,n)))},submit:function(){!function(e){x.a.post("https://reqres.in/api/orders",e).then((function(e){t(i.concat(e.data)),console.log(i)})).catch((function(e){})).finally(j(R))}({special:r.special.trim(),name:r.name.trim(),size:r.size.trim(),sauce:r.sauce.trim(),pepperoni:r.pepperoni,sausage:r.sausage,canadian:r.canadian,green:r.green,pineapple:r.pineapple,extra:r.extra})},disabled:N,errors:f})}),Object(g.jsx)(p.a,{path:"/",children:Object(g.jsx)(H,{})})]})]})};r.a.render(Object(g.jsx)(h.a,{children:Object(g.jsx)(G,{})}),document.getElementById("root"))},93:function(e,n,i){}},[[214,1,2]]]);
//# sourceMappingURL=main.afd493a5.chunk.js.map