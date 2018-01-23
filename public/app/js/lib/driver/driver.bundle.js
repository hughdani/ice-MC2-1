!function e(t,n,i){function o(s,l){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!l&&u)return u(s,!0);if(r)return r(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return o(n||e)},c,c.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=e("./factories/SvgEditorElementFactory"),r=e("./enums/SvgEditorElementTypes"),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._canvas=null==t?svgCanvas:t,this._elements={}}return i(e,[{key:"createElement",value:function(t,n){var i=o.make(t,n);switch(i.type){case r.SYMBOL:i.id=this._canvas.getNextId()+"_"+i.getSymbol(),i.dom=this._canvas.addSvgElementFromJson({element:"path",curStyles:!0,attr:{d:i.getPathData(),id:i.id}});var s=i.getSize(),l=e.getRelativeScale(s.width,n.width),u=e.getRelativeScale(s.height,n.height);i.dom.setAttribute("transform","scale("+l+","+u+")"),this._canvas.recalculateDimensions(i.dom);var a=i.getPosition();this._canvas.moveSelectedElements(n.x-a.x,n.y-a.y,!1,[i.dom])}return this._elements[i.id]=i,i}},{key:"findElementById",value:function(e){return!!this._elements[e]&&this._elements[e]}},{key:"findElementsByType",value:function(e){var t=[];for(var n in this._elements)this._elements[n].type===e&&t.push(this._elements[n]);return t}}],[{key:"getRelativeScale",value:function(e,t){return t/e}}]),e}();t.exports=s},{"./enums/SvgEditorElementTypes":8,"./factories/SvgEditorElementFactory":11}],2:[function(e,t,n){"use strict";var i=e("../enums/SvgEditorSymbols"),o={};o[i.SUM]="m126.45467,174.437l-113.5001,134.29466c-2.49984,2.87774 -3,3.35722 -3,4.79624c0,3.35722 3,3.35722 8.99999,3.35722l263.99986,0l27.50014,-76.26003l-7.99999,0c-7.99999,23.02194 -28.99998,41.72712 -56.50014,50.36034c-4.99999,1.91849 -26.99998,9.113 -73.99996,9.113l-135.49978,0l110.99995,-131.41692c2,-2.87774 2.49984,-3.35752 2.49984,-4.79624c0,-1.43902 0,-1.43902 -2,-4.31676l-103.49978,-136.21315l125.99993,0c36.49982,0 109.99995,1.91849 131.99994,58.99388l7.99999,0l-27.50014,-71.46411l-263.99986,0c-8.99999,0 -8.99999,0.47977 -8.99999,9.59248l116.5001,153.95939l0,-0.00001zm0,0",o[i.SQRT]="M133.45757,302.23514L127.90965,175.37415L507.30505,174.22819L129.33541,174.2829C130.70946,215.61172 132.08352,256.94053 133.45757,298.26935L115.52818,284.66933L133.45757,302.23514z",t.exports=o},{"../enums/SvgEditorSymbols":9}],3:[function(e,t,n){"use strict";window.Driver={SvgEditorDriver:e("./SvgEditorDriver"),SvgEditorElement:e("./elements/SvgEditorElement"),SvgEditorElementSize:e("./elements/SvgEditorElementSize"),SvgEditorElementPosition:e("./elements/SvgEditorElementPosition"),SvgEditorElementTypes:e("./enums/SvgEditorElementTypes"),SvgEditorSymbols:e("./enums/SvgEditorSymbols")}},{"./SvgEditorDriver":1,"./elements/SvgEditorElement":4,"./elements/SvgEditorElementPosition":5,"./elements/SvgEditorElementSize":6,"./enums/SvgEditorElementTypes":8,"./enums/SvgEditorSymbols":9}],4:[function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._width=t,this._height=n,this._x=i,this._y=o,this.dom=null,this.type=-1}return i(e,[{key:"getSize",value:function(){throw"Method getSize not implemented"}},{key:"getPosition",value:function(){throw"Method getPosition not implemented"}}]),e}();t.exports=o},{}],5:[function(e,t,n){"use strict";t.exports=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=t,this.y=n}},{}],6:[function(e,t,n){"use strict";t.exports=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.width=t,this.height=n}},{}],7:[function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=e("../enums/SvgEditorSymbols"),r=e("../enums/SvgEditorElementTypes"),s=e("./SvgEditorElement"),l=e("../exceptions/SvgEditorDriverSymbolNotDefinedError"),u=e("./SvgEditorElementSize"),a=e("./SvgEditorElementPosition"),c=e("../data/Symbols"),f=function(e){function t(e,n,i,s){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.SUM;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,i,s));if(!c[u])throw new l;return a._symbol=u,a._symbolData=c[u],a.type=r.SYMBOL,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s),i(t,[{key:"getPathData",value:function(){return this._symbolData}},{key:"getSymbol",value:function(){return this._symbol}},{key:"getSize",value:function(){return this._reloadSize(),new u(this._width,this._height)}},{key:"getPosition",value:function(){return this._reloadPosition(),new a(this._x,this._y)}},{key:"_reloadSize",value:function(){this.dom&&(this._width=this.dom.getBoundingClientRect().width,this._height=this.dom.getBoundingClientRect().height)}},{key:"_reloadPosition",value:function(){this.dom&&(this._x=this.dom.getBoundingClientRect().left,this._y=this.dom.getBoundingClientRect().top)}}]),t}();t.exports=f},{"../data/Symbols":2,"../enums/SvgEditorElementTypes":8,"../enums/SvgEditorSymbols":9,"../exceptions/SvgEditorDriverSymbolNotDefinedError":10,"./SvgEditorElement":4,"./SvgEditorElementPosition":5,"./SvgEditorElementSize":6}],8:[function(e,t,n){"use strict";t.exports={SYMBOL:0,IMAGE:1,PATH:2}},{}],9:[function(e,t,n){"use strict";t.exports={SUM:0,SQRT:1}},{}],10:[function(e,t,n){"use strict";t.exports=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}},{}],11:[function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var o=e("../enums/SvgEditorElementTypes"),r=e("../elements/SvgEditorSymbolElement"),s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return i(e,null,[{key:"make",value:function(e,t){switch(e){case o.SYMBOL:return new r(t.width,t.height,t.x,t.y,t.symbol)}}}]),e}();t.exports=s},{"../elements/SvgEditorSymbolElement":7,"../enums/SvgEditorElementTypes":8}]},{},[3]);