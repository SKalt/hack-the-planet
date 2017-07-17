var uglyRedBook = {};
function lookInto(pathArr){
  let result = window;
  try {
    for (let path of pathArr){
      result = result[path];
    }
    uglyRedBook[pathArr.join('.')] = result;
    Object.keys(result).forEach( subitem => lookInto(pathArr.concat(subitem)) );
  } catch (err) {}
}
// ignore normal window keys:
var toIgnore = new Set(['d3'].concat('stop,open,alert,confirm,prompt,print,requestAnimationFrame,cancelAnimationFrame,requestIdleCallback,cancelIdleCallback,captureEvents,releaseEvents,getComputedStyle,matchMedia,moveTo,moveBy,resizeTo,resizeBy,getSelection,find,getMatchedCSSRules,webkitRequestAnimationFrame,webkitCancelAnimationFrame,btoa,atob,setTimeout,clearTimeout,setInterval,clearInterval,postMessage,createImageBitmap,blur,focus,close,scroll,scrollTo,scrollBy,fetch,webkitRequestFileSystem,webkitResolveLocalFileSystemURL,openDatabase,chrome,console,frames,self,window,parent,opener,top,length,closed,location,document,origin,name,history,locationbar,menubar,personalbar,scrollbars,statusbar,toolbar,status,frameElement,navigator,applicationCache,external,screen,innerWidth,innerHeight,scrollX,pageXOffset,scrollY,pageYOffset,screenX,screenY,outerWidth,outerHeight,devicePixelRatio,clientInformation,screenLeft,screenTop,defaultStatus,defaultstatus,styleMedia,onanimationend,onanimationiteration,onanimationstart,onsearch,ontransitionend,onwebkitanimationend,onwebkitanimationiteration,onwebkitanimationstart,onwebkittransitionend,onwheel,isSecureContext,onabort,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onseeked,onseeking,onselect,onshow,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting,onbeforeunload,onhashchange,onlanguagechange,onmessage,onoffline,ononline,onpagehide,onpageshow,onpopstate,onrejectionhandled,onstorage,onunhandledrejection,onunload,performance,onauxclick,customElements,ongotpointercapture,onlostpointercapture,onpointercancel,onpointerdown,onpointerenter,onpointerleave,onpointermove,onpointerout,onpointerover,onpointerup,crypto,ondevicemotion,ondeviceorientation,ondeviceorientationabsolute,indexedDB,webkitStorageInfo,sessionStorage,localStorage,caches,speechSynthesis'.split(','));
Object.keys(window).forEach(key => {
  if (!toIgnore.has(key)){
    lookInto(key);
  }
});
//console.log(uglyRedBook.join('\n'));
console.log( Object.keys(uglyRedBook).filter(i => /earth/.exec(i)) )
