(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pCxb:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),o=i("tyNb"),n=i("itXk"),c=i("vkgz"),r=i("fXoL"),a=i("2Vo4"),l=i("LRne"),u=i("HDdC");function h(t,e){return new u.a(e?i=>e.schedule(b,0,{error:t,subscriber:i}):e=>e.error(t))}function b({error:t,subscriber:e}){e.error(t)}var d=i("pLZG"),f=i("quSY");class p extends f.a{constructor(t,e){super()}schedule(t,e=0){return this}}class v extends p{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,e,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i=!1,s=void 0;try{this.work(t)}catch(o){i=!0,s=!!o&&o||new Error(o)}if(i)return this.unsubscribe(),s}_unsubscribe(){const t=this.id,e=this.scheduler,i=e.actions,s=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==s&&i.splice(s,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}}let m=(()=>{class t{constructor(e,i=t.now){this.SchedulerAction=e,this.now=i}schedule(t,e=0,i){return new this.SchedulerAction(this,t).schedule(i,e)}}return t.now=()=>Date.now(),t})();class k extends m{constructor(t,e=m.now){super(t,()=>k.delegate&&k.delegate!==this?k.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,i){return k.delegate&&k.delegate!==this?k.delegate.schedule(t,e,i):super.schedule(t,e,i)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,i){for(;t=e.shift();)t.unsubscribe();throw i}}}const g=new k(v);var w=i("7o/Q"),O=i("EY2u");let y=(()=>{class t{constructor(t,e,i){this.kind=t,this.value=e,this.error=i,this.hasValue="N"===t}observe(t){switch(this.kind){case"N":return t.next&&t.next(this.value);case"E":return t.error&&t.error(this.error);case"C":return t.complete&&t.complete()}}do(t,e,i){switch(this.kind){case"N":return t&&t(this.value);case"E":return e&&e(this.error);case"C":return i&&i()}}accept(t,e,i){return t&&"function"==typeof t.next?this.observe(t):this.do(t,e,i)}toObservable(){switch(this.kind){case"N":return Object(l.a)(this.value);case"E":return h(this.error);case"C":return Object(O.b)()}throw new Error("unexpected notification kind value")}static createNext(e){return void 0!==e?new t("N",e):t.undefinedValueNotification}static createError(e){return new t("E",void 0,e)}static createComplete(){return t.completeNotification}}return t.completeNotification=new t("C"),t.undefinedValueNotification=new t("N",void 0),t})();class P{constructor(t,e){this.delay=t,this.scheduler=e}call(t,e){return e.subscribe(new x(t,this.delay,this.scheduler))}}class x extends w.a{constructor(t,e,i){super(t),this.delay=e,this.scheduler=i,this.queue=[],this.active=!1,this.errored=!1}static dispatch(t){const e=t.source,i=e.queue,s=t.scheduler,o=t.destination;for(;i.length>0&&i[0].time-s.now()<=0;)i.shift().notification.observe(o);if(i.length>0){const e=Math.max(0,i[0].time-s.now());this.schedule(t,e)}else this.unsubscribe(),e.active=!1}_schedule(t){this.active=!0,this.destination.add(t.schedule(x.dispatch,this.delay,{source:this,destination:this.destination,scheduler:t}))}scheduleNotification(t){if(!0===this.errored)return;const e=this.scheduler,i=new I(e.now()+this.delay,t);this.queue.push(i),!1===this.active&&this._schedule(e)}_next(t){this.scheduleNotification(y.createNext(t))}_error(t){this.errored=!0,this.queue=[],this.destination.error(t),this.unsubscribe()}_complete(){this.scheduleNotification(y.createComplete()),this.unsubscribe()}}class I{constructor(t,e){this.time=t,this.notification=e}}class S{constructor(t,e){this.compare=t,this.keySelector=e}call(t,e){return e.subscribe(new B(t,this.compare,this.keySelector))}}class B extends w.a{constructor(t,e,i){super(t),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(t,e){return t===e}_next(t){let e;try{const{keySelector:i}=this;e=i?i(t):t}catch(s){return this.destination.error(s)}let i=!1;if(this.hasKey)try{const{compare:t}=this;i=t(this.key,e)}catch(s){return this.destination.error(s)}else this.hasKey=!0;i||(this.key=e,this.destination.next(t))}}var F=i("eIep"),D=i("JIr8"),j=i("tk/3");let $=(()=>{class t{constructor(t){this.http=t}searchBook(t){return Object(l.a)(t).pipe(Object(d.a)(t=>t.length>2),function(t,e=g){var i;const s=(i=t)instanceof Date&&!isNaN(+i)?+t-e.now():Math.abs(t);return t=>t.lift(new P(s,e))}(1e3),t=>t.lift(new S(void 0,void 0)),Object(F.a)(e=>this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(t)}&maxResults=20`)),Object(D.a)((t,e)=>h(t)))}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(j.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const N={mapper:{},books:[]};let _=(()=>{class t{constructor(){this._wishlist$=new a.a(N),this.wishlist$=this._wishlist$.asObservable()}get state(){return this._wishlist$.getValue()}set state(t){this._wishlist$.next(t)}addWishlist(t){const e=Object.assign({},this.state),i=[...e.books,t];e.books=i,e.mapper=z(i),this.state=Object.assign(Object.assign({},this.state),e)}removeWishlist(t){const e=Object.assign({},this.state),i=e.books.findIndex(e=>e.id===t);if(i>-1){const t=e.books.filter((t,e)=>e!==i);e.books=t,e.mapper=z(t)}this.state=Object.assign(Object.assign({},this.state),e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function z(t,e="id"){const i={};return t.forEach((t,s)=>i[t[e]]=s),i}let C=(()=>{class t{constructor(t,e){this.googleBooksService=t,this.wishlistStateService=e,this._data$=new a.a(void 0),this.data$=this._data$.asObservable(),this.lastQuery=""}searchBook(t){return this.googleBooksService.searchBook(t).pipe(Object(c.a)(e=>{this._data$.next(e),this.lastQuery=t}))}addBookToWishlist(t){this.wishlistStateService.addWishlist(t)}removeBookToWishlist(t){this.wishlistStateService.removeWishlist(t.id)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb($),r.Tb(_))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),M=(()=>{class t{itemID(t,e){return e.id}index(t,e){return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var T=i("QH85");function E(t,e){if(1&t){const t=r.Qb();r.Pb(0,"div",1),r.Pb(1,"div",2),r.Pb(2,"div",3),r.Kb(3,"img",4),r.Ob(),r.Pb(4,"div",5),r.Pb(5,"div",6),r.Pb(6,"h5",7),r.mc(7),r.Ob(),r.Pb(8,"article",8),r.mc(9),r.Ob(),r.Pb(10,"a",9),r.Xb("click",(function(){return r.hc(t),r.Zb().onModerDetailsHandler()})),r.mc(11,"show more details"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(12,"div",10),r.mc(13),r.Ob(),r.Ob()}if(2&t){const t=r.Zb();r.zb(3),r.cc("src",null==t.book.volumeInfo?null:null==t.book.volumeInfo.imageLinks?null:t.book.volumeInfo.imageLinks.smallThumbnail,r.ic),r.zb(4),r.nc(t.book.volumeInfo.title),r.zb(2),r.nc(t.book.volumeInfo.description),r.zb(4),r.oc(" ",t.book.volumeInfo.authors," ")}}let A=(()=>{class t{constructor(){this.onBookDetails=new r.n}ngOnInit(){}onModerDetailsHandler(){this.onBookDetails.emit()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-book-item"]],inputs:{book:"book"},outputs:{onBookDetails:"onBookDetails"},decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],[1,"row","no-gutters","h-75"],[1,"col-auto"],["alt","",1,"img-fluid","h-100",3,"src"],[1,"col"],[1,"card-block","px-2","h-100"],[1,"card-title","text-center","p-1","trim-text","w-100","h-50","d-flex","justify-content-center","align-items-center"],[1,"card-text","trim-text","w-100","h-50"],[1,"btn","btn-primary","text-white","w-100",3,"click"],[1,"card-footer","w-100","text-muted"]],template:function(t,e){1&t&&r.kc(0,E,14,4,"div",0),2&t&&r.cc("ngIf",e.book)},directives:[s.k],styles:[".card[_ngcontent-%COMP%] {\n      max-height: 300px;\n      height: 3000px;\n    }\n\n    .card-block[_ngcontent-%COMP%] {\n      max-height: 150px;\n    }"],changeDetection:0}),t})();const H=function(t,e){return{"btn-success":t,"btn-danger":e}};let W=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-book-item-details"]],inputs:{book:"book",functions:"functions",isFavorite:"isFavorite"},decls:23,vars:10,consts:[[1,"modal-header"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-title"],[1,"card","modal-body"],[1,"row","no-gutters"],[1,"col-auto"],["alt","",1,"img-fluid",3,"src"],[1,"col"],[1,"card-block","px-2","h-100"],[1,"card-title","text-center","p-1","trim-text","w-100","d-flex","justify-content-center","align-items-center"],[1,"card-text","w-100","mh-50","overflow-auto"],[1,"card-footer","w-100","text-muted"],[1,"modal-footer"],["type","button",1,"btn",3,"ngClass","click"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.Pb(0,"div",0),r.Pb(1,"button",1),r.Xb("click",(function(){return e.functions.onCancel()})),r.Pb(2,"span",2),r.mc(3,"\xd7"),r.Ob(),r.Ob(),r.Pb(4,"h4",3),r.mc(5),r.Ob(),r.Ob(),r.Pb(6,"div",4),r.Pb(7,"div",5),r.Pb(8,"div",6),r.Kb(9,"img",7),r.Ob(),r.Pb(10,"div",8),r.Pb(11,"div",9),r.Pb(12,"h5",10),r.mc(13),r.Ob(),r.Pb(14,"article",11),r.mc(15),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(16,"div",12),r.mc(17),r.Ob(),r.Pb(18,"div",13),r.Pb(19,"button",14),r.Xb("click",(function(){return e.functions.onCustomFunction(!e.isFavorite)})),r.mc(20),r.Ob(),r.Pb(21,"button",15),r.Xb("click",(function(){return e.functions.onOk()})),r.mc(22,"close"),r.Ob(),r.Ob(),r.Ob()),2&t&&(r.zb(5),r.nc(e.book.volumeInfo.title),r.zb(4),r.cc("src",e.book.volumeInfo.imageLinks.smallThumbnail,r.ic),r.zb(4),r.nc(e.book.volumeInfo.title),r.zb(2),r.nc(e.book.volumeInfo.description),r.zb(2),r.oc(" ",e.book.volumeInfo.authors," "),r.zb(2),r.cc("ngClass",r.ec(7,H,!e.isFavorite,e.isFavorite)),r.zb(1),r.oc("",e.isFavorite?"remove":"add"," favorite "))},directives:[s.i],styles:["[_nghost-%COMP%]   .card-text[_ngcontent-%COMP%]{overflow:auto;height:26vh!important}"],changeDetection:0}),t})();const K=["defaultModal"];function L(t,e){if(1&t){const t=r.Qb();r.Pb(0,"app-book-item",9),r.Xb("onBookDetails",(function(){r.hc(t);const i=e.$implicit,s=r.Zb().ngIf,o=r.Zb();return o.onBookDetailsHandler(i,s[o.MAPPER.WISH_LIST].mapper[i.id]>-1)})),r.Ob()}2&t&&r.cc("book",e.$implicit)}function q(t,e){if(1&t){const t=r.Qb();r.Nb(0),r.Pb(1,"div",2),r.Pb(2,"div",3),r.Pb(3,"div",4),r.Pb(4,"div",5),r.Pb(5,"span",6),r.mc(6,"search"),r.Ob(),r.Ob(),r.Pb(7,"input",7),r.Xb("input",(function(e){return r.hc(t),r.Zb().onInputHandler(e.target.value)})),r.Ob(),r.Ob(),r.kc(8,L,1,1,"app-book-item",8),r.Ob(),r.Ob(),r.Mb()}if(2&t){const t=e.ngIf,i=r.Zb();r.zb(7),r.cc("value",i.query),r.zb(1),r.cc("ngForOf",null==t[i.MAPPER.BOOKS]?null:t[i.MAPPER.BOOKS].items)("ngForTrackBy",i.trackByService.index)}}function J(t,e){if(1&t&&r.Kb(0,"app-book-item-details",10),2&t){const t=e.$implicit;r.cc("functions",e.functions)("book",t.data.book)("isFavorite",t.data.isFavorite)}}let R=(()=>{class t{constructor(t,e,i,s){this.bookService=t,this.trackByService=e,this.modalService=i,this.wishlistStateService=s,this.MAPPER={BOOKS:0,WISH_LIST:1},this.query=this.bookService.lastQuery}ngOnInit(){this.data$=Object(n.a)(this.bookService.data$,this.wishlistStateService.wishlist$)}ngAfterViewInit(){}onInputHandler(t){this.bookService.searchBook(t).subscribe()}onBookDetailsHandler(t,e){this.modalService.show({data:{book:t,isFavorite:e}},this.tpl).pipe(Object(c.a)(e=>this.addOrRemoveWishlist(e,t))).subscribe()}addOrRemoveWishlist(t,e){t?this.bookService.addBookToWishlist(e):this.bookService.removeBookToWishlist(e)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(C),r.Jb(M),r.Jb(T.a),r.Jb(_))},t.\u0275cmp=r.Db({type:t,selectors:[["app-book"]],viewQuery:function(t,e){var i;1&t&&r.pc(K,!0),2&t&&r.fc(i=r.Yb())&&(e.tpl=i.first)},decls:4,vars:3,consts:[[4,"ngIf"],["defaultModal",""],[1,"row"],[1,"mb-3","col-sm-9","col-md-7","col-lg-5","mx-auto"],[1,"input-group","my-3"],[1,"input-group-prepend"],["id","basic-addon1",1,"input-group-text"],["type","text","placeholder","Username","aria-label","Username","aria-describedby","basic-addon1",1,"form-control",3,"value","input"],[3,"book","onBookDetails",4,"ngFor","ngForOf","ngForTrackBy"],[3,"book","onBookDetails"],[3,"functions","book","isFavorite"]],template:function(t,e){1&t&&(r.kc(0,q,9,3,"ng-container",0),r.ac(1,"async"),r.kc(2,J,1,3,"ng-template",null,1,r.lc)),2&t&&r.cc("ngIf",r.bc(1,1,e.data$))},directives:[s.k,s.j,A,W],pipes:[s.b],encapsulation:2}),t})();var Q=i("qfBg");let X=(()=>{class t{constructor(t){this.userService=t}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(Q.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-books"]],decls:10,vars:3,consts:[[1,"p-2","d-flex","justify-content-around"],[1,"d-flex","align-self-center"],[1,""],["routerLink","/books/search","routerLinkActive","btn-primary",1,"btn","px-2"],["routerLink","/books/wishlist","routerLinkActive","btn-info",1,"btn"]],template:function(t,e){var i;1&t&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.mc(2),r.ac(3,"async"),r.Ob(),r.Pb(4,"div",2),r.Pb(5,"button",3),r.mc(6,"search"),r.Ob(),r.Pb(7,"button",4),r.mc(8,"wishlist"),r.Ob(),r.Ob(),r.Ob(),r.Kb(9,"router-outlet")),2&t&&(r.zb(2),r.oc(" hello ",null==(i=r.bc(3,1,e.userService.user$))?null:i.username," "))},directives:[o.b,o.c,o.e],pipes:[s.b],encapsulation:2,changeDetection:0}),t})();var Z=i("lJxs");let V=(()=>{class t{constructor(t){this.wishlistStateService=t,this.data$=this.wishlistStateService.wishlist$.pipe(Object(Z.a)(t=>t.books))}removeBook(t){this.wishlistStateService.removeWishlist(t.id)}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(_))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac}),t})();function Y(t,e){if(1&t){const t=r.Qb();r.Pb(0,"tr"),r.Pb(1,"td",3),r.mc(2),r.Ob(),r.Pb(3,"td",3),r.mc(4),r.Ob(),r.Pb(5,"td",3),r.mc(6),r.Ob(),r.Pb(7,"td",3),r.Pb(8,"span",5),r.Xb("click",(function(){r.hc(t);const i=e.$implicit;return r.Zb(3).onRemoveBookHandler(i)})),r.mc(9,"remove"),r.Ob(),r.Ob(),r.Ob()}if(2&t){const t=e.$implicit,i=e.index;r.zb(2),r.oc("",i," "),r.zb(2),r.oc(" ",t.volumeInfo.title,""),r.zb(2),r.oc(" ",t.volumeInfo.authors[0],"")}}function G(t,e){if(1&t&&(r.Nb(0),r.Pb(1,"table"),r.Pb(2,"thead"),r.Pb(3,"th",3),r.mc(4,"#"),r.Ob(),r.Pb(5,"th",3),r.mc(6,"name"),r.Ob(),r.Pb(7,"th",3),r.mc(8,"author"),r.Ob(),r.Kb(9,"th",3),r.Ob(),r.Pb(10,"tbody"),r.kc(11,Y,10,3,"tr",4),r.Ob(),r.Ob(),r.Mb()),2&t){const t=r.Zb().ngIf,e=r.Zb();r.zb(11),r.cc("ngForOf",t)("ngForTrackBy",e.trackByService.itemID)}}function U(t,e){1&t&&(r.Pb(0,"div"),r.mc(1," You dont have any wishlist yet. Please feel free to search for one. "),r.Ob())}function tt(t,e){if(1&t&&(r.Nb(0),r.kc(1,G,12,2,"ng-container",1),r.kc(2,U,2,0,"ng-template",null,2,r.lc),r.Mb()),2&t){const t=e.ngIf,i=r.gc(3);r.zb(1),r.cc("ngIf",t.length>0)("ngIfElse",i)}}const et=[{path:"",component:X,children:[{path:"",redirectTo:"search",pathMatch:"full"},{path:"search",component:R},{path:"wishlist",component:(()=>{class t{constructor(t,e){this.wishlistService=t,this.trackByService=e}ngOnInit(){}onRemoveBookHandler(t){this.wishlistService.removeBook(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(V),r.Jb(M))},t.\u0275cmp=r.Db({type:t,selectors:[["app-wishlist"]],features:[r.yb([V])],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["noWishlists",""],[1,"text-center","px-2"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"badge","badge-danger",3,"click"]],template:function(t,e){1&t&&(r.kc(0,tt,4,2,"ng-container",0),r.ac(1,"async")),2&t&&r.cc("ngIf",r.bc(1,1,e.wishlistService.data$))},directives:[s.k,s.j],pipes:[s.b],encapsulation:2,changeDetection:0}),t})()}]}];let it=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[o.d.forChild(et)],o.d]}),t})();var st=i("PCNd");i.d(e,"BooksModule",(function(){return ot}));let ot=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},providers:[],imports:[[s.c,it,st.a]]}),t})()}}]);