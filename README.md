react-render-wrapper
=======================

A easy to use factory wrapper for react components. 

```javascript
//instead of having something like below
var pager2 = React.render(
       React.createElement(ViewPager.cls,{ 
           views : ["page11","page22","page33"], visible:"page11"}),
   document.getElementById("viewpager-container2"));

//you can expose your component to something liek below instead
ViewPager.render({ views : ["page1","page2","page3"], visible:"page1"},"viewpager-container");

```
## Usage
$ npm install react-render-wrapper

```javascript
var renderWrapper= require('react-render-wrapper');
module.exports = renderWrapper(React,ViewPager);

//and clients can do
MyReactClass = require('react-myclass');

MyReactClass.render({option:'myoption'},'elementid'); //option and id
MyReactClass.render('elementid'); //
MyReactClass.render($container.find('.cls-cont').get(0)); //

//if you use jsx
React.render(<MyReactClass.cls/>,el);
```
