var N,h,X,r_,x,G,Y,$,O,A,R,T={},Z=[],l_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function w(e,_){for(var t in _)e[t]=_[t];return e}function __(e){var _=e.parentNode;_&&_.removeChild(e)}function i_(e,_,t){var l,o,r,s={};for(r in _)r=="key"?l=_[r]:r=="ref"?o=_[r]:s[r]=_[r];if(arguments.length>2&&(s.children=arguments.length>3?N.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)s[r]===void 0&&(s[r]=e.defaultProps[r]);return E(e,s,l,o,null)}function E(e,_,t,l,o){var r={type:e,props:_,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++X,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(r),r}function W(e){return e.children}function F(e,_){this.props=e,this.context=_}function P(e,_){if(_==null)return e.__?P(e.__,e.__i+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?P(e):null}function e_(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return e_(e)}}function J(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!I.__r++||G!==h.debounceRendering)&&((G=h.debounceRendering)||Y)(I)}function I(){var e,_,t,l,o,r,s,u;for(x.sort($);e=x.shift();)e.__d&&(_=x.length,l=void 0,r=(o=(t=e).__v).__e,s=[],u=[],t.__P&&((l=w({},o)).__v=o.__v+1,h.vnode&&h.vnode(l),z(t.__P,l,o,t.__n,t.__P.namespaceURI,32&o.__u?[r]:null,s,r??P(o),!!(32&o.__u),u),l.__v=o.__v,l.__.__k[l.__i]=l,o_(s,l,u),l.__e!=r&&e_(l)),x.length>_&&x.sort($));I.__r=0}function t_(e,_,t,l,o,r,s,u,c,i,p){var n,g,f,v,m,y=l&&l.__k||Z,a=_.length;for(t.__d=c,s_(t,_,y),c=t.__d,n=0;n<a;n++)(f=t.__k[n])!=null&&typeof f!="boolean"&&typeof f!="function"&&(g=f.__i===-1?T:y[f.__i]||T,f.__i=n,z(e,f,g,o,r,s,u,c,i,p),v=f.__e,f.ref&&g.ref!=f.ref&&(g.ref&&V(g.ref,null,f),p.push(f.ref,f.__c||v,f)),m==null&&v!=null&&(m=v),65536&f.__u||g.__k===f.__k?c=n_(f,c,e):typeof f.type=="function"&&f.__d!==void 0?c=f.__d:v&&(c=v.nextSibling),f.__d=void 0,f.__u&=-196609);t.__d=c,t.__e=m}function s_(e,_,t){var l,o,r,s,u,c=_.length,i=t.length,p=i,n=0;for(e.__k=[],l=0;l<c;l++)s=l+n,(o=e.__k[l]=(o=_[l])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?E(null,o,null,null,null):j(o)?E(W,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?E(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,u=f_(o,t,s,p),o.__i=u,r=null,u!==-1&&(p--,(r=t[u])&&(r.__u|=131072)),r==null||r.__v===null?(u==-1&&n--,typeof o.type!="function"&&(o.__u|=65536)):u!==s&&(u==s-1?n=u-s:u==s+1?n++:u>s?p>c-s?n+=u-s:n--:u<s&&n++,u!==l+n&&(o.__u|=65536))):(r=t[s])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=P(r)),B(r,r,!1),t[s]=null,p--);if(p)for(l=0;l<i;l++)(r=t[l])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=P(r)),B(r,r))}function n_(e,_,t){var l,o;if(typeof e.type=="function"){for(l=e.__k,o=0;l&&o<l.length;o++)l[o]&&(l[o].__=e,_=n_(l[o],_,t));return _}e.__e!=_&&(_&&e.type&&!t.contains(_)&&(_=P(e)),t.insertBefore(e.__e,_||null),_=e.__e);do _=_&&_.nextSibling;while(_!=null&&_.nodeType===8);return _}function f_(e,_,t,l){var o=e.key,r=e.type,s=t-1,u=t+1,c=_[t];if(c===null||c&&o==c.key&&r===c.type&&!(131072&c.__u))return t;if(l>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||u<_.length;){if(s>=0){if((c=_[s])&&!(131072&c.__u)&&o==c.key&&r===c.type)return s;s--}if(u<_.length){if((c=_[u])&&!(131072&c.__u)&&o==c.key&&r===c.type)return u;u++}}return-1}function K(e,_,t){_[0]==="-"?e.setProperty(_,t??""):e[_]=t==null?"":typeof t!="number"||l_.test(_)?t:t+"px"}function L(e,_,t,l,o){var r;_:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(_ in l)t&&_ in t||K(e.style,_,"");if(t)for(_ in t)l&&t[_]===l[_]||K(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")r=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||_==="onFocusOut"||_==="onFocusIn"?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+r]=t,t?l?t.u=l.u:(t.u=O,e.addEventListener(_,r?R:A,r)):e.removeEventListener(_,r?R:A,r);else{if(o=="http://www.w3.org/2000/svg")_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!="width"&&_!="height"&&_!="href"&&_!="list"&&_!="form"&&_!="tabIndex"&&_!="download"&&_!="rowSpan"&&_!="colSpan"&&_!="role"&&_!="popover"&&_ in e)try{e[_]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&_[4]!=="-"?e.removeAttribute(_):e.setAttribute(_,_=="popover"&&t==1?"":t))}}function Q(e){return function(_){if(this.l){var t=this.l[_.type+e];if(_.t==null)_.t=O++;else if(_.t<t.u)return;return t(h.event?h.event(_):_)}}}function z(e,_,t,l,o,r,s,u,c,i){var p,n,g,f,v,m,y,a,d,S,b,M,C,q,D,H,k=_.type;if(_.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[u=_.__e=t.__e]),(p=h.__b)&&p(_);_:if(typeof k=="function")try{if(a=_.props,d="prototype"in k&&k.prototype.render,S=(p=k.contextType)&&l[p.__c],b=p?S?S.props.value:p.__:l,t.__c?y=(n=_.__c=t.__c).__=n.__E:(d?_.__c=n=new k(a,b):(_.__c=n=new F(a,b),n.constructor=k,n.render=c_),S&&S.sub(n),n.props=a,n.state||(n.state={}),n.context=b,n.__n=l,g=n.__d=!0,n.__h=[],n._sb=[]),d&&n.__s==null&&(n.__s=n.state),d&&k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,k.getDerivedStateFromProps(a,n.__s))),f=n.props,v=n.state,n.__v=_,g)d&&k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),d&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(d&&k.getDerivedStateFromProps==null&&a!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,b)===!1||_.__v===t.__v)){for(_.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(U){U&&(U.__=_)}),M=0;M<n._sb.length;M++)n.__h.push(n._sb[M]);n._sb=[],n.__h.length&&s.push(n);break _}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,b),d&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,v,m)})}if(n.context=b,n.props=a,n.__P=e,n.__e=!1,C=h.__r,q=0,d){for(n.state=n.__s,n.__d=!1,C&&C(_),p=n.render(n.props,n.state,n.context),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[]}else do n.__d=!1,C&&C(_),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(l=w(w({},l),n.getChildContext())),d&&!g&&n.getSnapshotBeforeUpdate!=null&&(m=n.getSnapshotBeforeUpdate(f,v)),t_(e,j(H=p!=null&&p.type===W&&p.key==null?p.props.children:p)?H:[H],_,t,l,o,r,s,u,c,i),n.base=_.__e,_.__u&=-161,n.__h.length&&s.push(n),y&&(n.__E=n.__=null)}catch(U){if(_.__v=null,c||r!=null){for(_.__u|=c?160:32;u&&u.nodeType===8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,_.__e=u}else _.__e=t.__e,_.__k=t.__k;h.__e(U,_,t)}else r==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=u_(t.__e,_,t,l,o,r,s,c,i);(p=h.diffed)&&p(_)}function o_(e,_,t){_.__d=void 0;for(var l=0;l<t.length;l++)V(t[l],t[++l],t[++l]);h.__c&&h.__c(_,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){h.__e(r,o.__v)}})}function u_(e,_,t,l,o,r,s,u,c){var i,p,n,g,f,v,m,y=t.props,a=_.props,d=_.type;if(d==="svg"?o="http://www.w3.org/2000/svg":d==="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),r!=null){for(i=0;i<r.length;i++)if((f=r[i])&&"setAttribute"in f==!!d&&(d?f.localName===d:f.nodeType===3)){e=f,r[i]=null;break}}if(e==null){if(d===null)return document.createTextNode(a);e=document.createElementNS(o,d,a.is&&a),r=null,u=!1}if(d===null)y===a||u&&e.data===a||(e.data=a);else{if(r=r&&N.call(e.childNodes),y=t.props||T,!u&&r!=null)for(y={},i=0;i<e.attributes.length;i++)y[(f=e.attributes[i]).name]=f.value;for(i in y)if(f=y[i],i!="children"){if(i=="dangerouslySetInnerHTML")n=f;else if(i!=="key"&&!(i in a)){if(i=="value"&&"defaultValue"in a||i=="checked"&&"defaultChecked"in a)continue;L(e,i,null,f,o)}}for(i in a)f=a[i],i=="children"?g=f:i=="dangerouslySetInnerHTML"?p=f:i=="value"?v=f:i=="checked"?m=f:i==="key"||u&&typeof f!="function"||y[i]===f||L(e,i,f,y[i],o);if(p)u||n&&(p.__html===n.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),_.__k=[];else if(n&&(e.innerHTML=""),t_(e,j(g)?g:[g],_,t,l,d==="foreignObject"?"http://www.w3.org/1999/xhtml":o,r,s,r?r[0]:t.__k&&P(t,0),u,c),r!=null)for(i=r.length;i--;)r[i]!=null&&__(r[i]);u||(i="value",v!==void 0&&(v!==e[i]||d==="progress"&&!v||d==="option"&&v!==y[i])&&L(e,i,v,y[i],o),i="checked",m!==void 0&&m!==e[i]&&L(e,i,m,y[i],o))}return e}function V(e,_,t){try{if(typeof e=="function"){var l=typeof e.__u=="function";l&&e.__u(),l&&_==null||(e.__u=e(_))}else e.current=_}catch(o){h.__e(o,t)}}function B(e,_,t){var l,o;if(h.unmount&&h.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||V(l,null,_)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){h.__e(r,_)}l.base=l.__P=null}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&B(l[o],_,t||typeof e.type!="function");t||e.__e==null||__(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function c_(e,_,t){return this.constructor(e,t)}function p_(e,_,t){var l,o,r,s;h.__&&h.__(e,_),o=(l=typeof t=="function")?null:t&&t.__k||_.__k,r=[],s=[],z(_,e=(!l&&t||_).__k=i_(W,null,[e]),o||T,T,_.namespaceURI,!l&&t?[t]:o?null:_.firstChild?N.call(_.childNodes):null,r,!l&&t?t:o?o.__e:_.firstChild,l,s),o_(r,e,s)}function a_(e,_){p_(e,_,a_)}N=Z.slice,h={__e:function(e,_,t,l){for(var o,r,s;_=_.__;)if((o=_.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,l||{}),s=o.__d),s)return o.__E=o}catch(u){e=u}throw e}},X=0,r_=function(e){return e!=null&&e.constructor==null},F.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof e=="function"&&(e=e(w({},t),this.props)),e&&w(t,e),e!=null&&this.__v&&(_&&this._sb.push(_),J(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),J(this))},F.prototype.render=W,x=[],Y=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(e,_){return e.__v.__b-_.__v.__b},I.__r=0,O=0,A=Q(!1),R=Q(!0);export{p_ as B,a_ as D,i_ as _,F as b,h as l,r_ as t};