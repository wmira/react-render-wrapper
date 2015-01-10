/*globals require,module */
"use strict";

var React = require("react");

/**
 * React instance creation is a bit noisy. Use this on react a library such
 * that its more direct to the point when creating new instance. E.g.
 *
   React.render(React.createElement(ViewPager,{ views : ["page11","page22","page33"], visible:"page11"}),
            document.getElementById("viewpager-container2"));
 * 
 * to something like
 *
 * ViewPager.render({ views : ["page1","page2","page3"], visible:"page1"},"viewpager-container");
 * or
 * ViewPager.render("viewpager-container");
 * 
 * If your are exposing a library then :
 * 
 * var renderWrapper = require("react-render");
 * var MyReactComponent = React.createClass... 
 * 
 * module.exports = renderWrapper(MyReactComponent)
 *
 */

    
var render = function(ReactClass,options,el) {
    
    var ouroption = {};
    //if he passed an html element or a string on the first argument
    //then we assume he wants no options
    var ourEl = null;
    
    //check if its actually an element
    if ( ( options.tagName && options.nodeName && (typeof options.nodeType === 'number') ) 
        || ( typeof options === 'string' ) ) {
        ourEl = options;
    } else {
        ouroption = options;
        ourEl = ( typeof el === 'string') ? document.getElementById(el) : el;
    }

    return React.render(React.createElement(ReactClass,ouroption), ourEl);
};

var RenderWrapper = function(ReactClass) {

    return {
        cls : ReactClass,
        render : function(options,el) {
            return render(ReactClass,options,el)
        }
    }

};

module.exports = RenderWrapper;