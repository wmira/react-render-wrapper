"use strict";

var wrapper = require("../index");
var assert = require("assert");

var ReactMock = function() {
    var options;
    var reactCls;
    var render;
    var renderEl;
    
    return {
        createElement : function(cls,opt) {
            options = opt;
            reactCls = cls;
            return cls;
        },
        getOptions : function() {
            return options;
        },

        getReactCls : function() {
            return reactCls;
        },
        
        getRenderEl : function() {
            
            return renderEl;
        },
        render : function(cls,el) {
            reactCls = cls;
            renderEl = el;
        }
    }

};

describe('It should properly wrap el', function(){
    it('should call create element', function(){
        
        var ReactClass = new Object();
        ReactClass._name= "me";
        
        var reactMockInstance = ReactMock();


        var component = wrapper(reactMockInstance,ReactClass);
        component.el({key: "val"});
        assert.equal("val",reactMockInstance.getOptions().key);
        assert.equal("me",reactMockInstance.getReactCls()._name);
        
    });

    it('should call render', function(){

        var ReactClass = new Object();
        ReactClass._name= "me";

        var reactMockInstance = ReactMock();
        
        var component = wrapper(reactMockInstance,ReactClass);
        
        component.render("el");
        
        assert.equal("el",reactMockInstance.getRenderEl());
        assert.equal("me",reactMockInstance.getReactCls()._name);

        component.render({key : "val2"},{"someEl" : "someEl"});
        assert.equal("someEl",reactMockInstance.getRenderEl().someEl);
        
    });
});

