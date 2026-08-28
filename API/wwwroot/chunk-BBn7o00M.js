import{$ as Lg,$n as kw,An as gC,At as Ty,B as IC,Bn as ie,Cr as rv,D as FV,Dr as sw,Dt as Tb,Et as Sw,F as Gw,Ft as VE,Gr as xV,Gt as Ye$1,Ht as X,Ir as v,J as Kl,Jr as ye,Jt as Yv,K as Kg,Kn as jg,Kr as xc,Kt as Yg,L as HV,Ln as hm,Lr as vC,Mn as gi$1,Mt as Ud,N as Gl,Nn as gm,O as Fe,P as Gv,Pr as uw,Pt as Uo,Rr as vd,S as Eb,Sn as dw,St as S$1,Tn as em,Tr as sb,U as Iy,Un as j,V as IE,Vn as im,W as Jg,Wr as wm,Xr as yw,Xt as Zg,Yr as yh,Yt as Z,ar as lw,bn as db,br as rf,ct as Nw,dn as bh,dr as nf,dt as Ow,ei as zl,et as Lr,f as Cb,fn as bm,g as Db,hn as cn$1,it as ND,jn as gb,k as Fg,mn as cm,n as $d,nr as lm,nt as Mt,o as Aw,q as Ki,qn as ji,r as AV,rn as ab,s as BV,sn as aw,sr as mb,st as Nb,tn as _w,u as Br,ur as nb,x as Dy,xr as rm,zr as vs,zt as Wl}from"./chunk-CKJRNAL7.js";import{$ as ne,A as Tf,D as Qu,E as Qr,F as Xu,G as ft$1,K as fu,L as Zu,N as Ve,O as Rs,R as _0,U as ei$1,W as eu,_ as Ku,at as pu,et as nf$1,gt as zo,h as K_,it as ov,m as Ju,n as $o,p as Jt,rt as oi$1,st as rf$1,tt as ni$1}from"./chunk-wJ6ehkWR.js";import{$ as ue,F as an,I as ee,et as xe,nt as yl,rt as zs,w as Ue}from"./chunk-CysTuair.js";import{S as ke,_ as be,b as xe$1,g as y,h as j$1,m as Ce,p as A,v as fe,w as Ve$1,x as he}from"./main-6QENF3DC.js";import{n as l,r as u,t as $}from"./chunk-DRwx7SMw.js";var on=(n,r)=>{let e=v(y),t=v(ft$1),i=v(Ve$1);return!e.cart()||e.cart()?.items.length===0?(i.error(`Your cart is empty`),t.navigateByUrl(`/cart`),!1):!0};var cn=(n,r)=>{let e=v($),t=v(ft$1);return e.orderComplete?!0:(t.navigateByUrl(`/shop`),!1)};var Sn=[`determinateSpinner`];function Cn(n,r){if(n&1&&(nf(),Ki(0,`svg`,11),Kg(1,`circle`,12),Gl()),n&2){let e=_w();Yg(`viewBox`,e._viewBox()),ND(),hm(`stroke-dasharray`,e._strokeCircumference(),`px`)(`stroke-dashoffset`,e._strokeCircumference()/2,`px`)(`stroke-width`,e._circleStrokeWidth(),`%`),Yg(`r`,e._circleRadius())}}var Nn=new S$1(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:sn})});var sn=100;var In=10;var We=(()=>{class n{_elementRef=v(Br);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=v(Nn),t=Tf(),i=this._elementRef.nativeElement;this._noopAnimations=t===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=i.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&t===`reduced-motion`&&i.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=sn;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-In)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(t,i){if(t&1&&lm(Sn,5),t&2){let c;Aw(c=Ow())&&(i._determinateCircle=c.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(t,i){t&2&&(Yg(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,i.mode===`determinate`?i.value:null)(`mode`,i.mode),Gw(`mat-`+i.color),hm(`width`,i.diameter,`px`)(`height`,i.diameter,`px`)(`--%NS%mat-progress-spinner-size`,i.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,i.diameter+`px`),gm(`_mat-animation-noopable`,i._noopAnimations)(`mdc-circular-progress--indeterminate`,i.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,BV],diameter:[2,`diameter`,`diameter`,BV],strokeWidth:[2,`strokeWidth`,`strokeWidth`,BV]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(t,i){if(t&1&&(Fg(0,Cn,2,8,`ng-template`,null,0,Cb),Ki(2,`div`,2,1),nf(),Ki(4,`svg`,3),Kg(5,`circle`,4),Gl()(),rf(),Ki(6,`div`,5)(7,`div`,6)(8,`div`,7),em(9,8),Gl(),Ki(10,`div`,9),em(11,8),Gl(),Ki(12,`div`,10),em(13,8),Gl()()()),t&2){let c=kw(1);ND(4),Yg(`viewBox`,i._viewBox()),ND(),hm(`stroke-dasharray`,i._strokeCircumference(),`px`)(`stroke-dashoffset`,i._strokeDashOffset(),`px`)(`stroke-width`,i._circleStrokeWidth(),`%`),Yg(`r`,i._circleRadius()),ND(4),Zg(`ngTemplateOutlet`,c),ND(2),Zg(`ngTemplateOutlet`,c),ND(2),Zg(`ngTemplateOutlet`,c)}},dependencies:[Zu],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})}return n})();var Ze=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[ei$1]})}return n})();function En(n,r){if(n&1&&(Ki(0,`section`,1)(1,`div`,2)(2,`h2`,3),nb(3,`Thanks for your order!`),Gl(),Ki(4,`p`,4),nb(5,`Your order `),Ki(6,`span`,5),nb(7),Gl(),nb(8,` will never be processed as this is a fake shop. We will notify you once order has not shipped.`),Gl(),Ki(9,`div`,6)(10,`dl`,7)(11,`dt`,8),nb(12,`Date`),Gl(),Ki(13,`dd`,9),nb(14),Eb(15,`date`),Gl()(),Ki(16,`dl`,7)(17,`dt`,8),nb(18,`Payment`),Gl(),Ki(19,`dd`,9),nb(20),Eb(21,`paymentCard`),Gl()(),Ki(22,`dl`,7)(23,`dt`,8),nb(24,`Address`),Gl(),Ki(25,`dd`,9),nb(26),Eb(27,`address`),Gl()(),Ki(28,`dl`,7)(29,`dt`,8),nb(30,`Amount`),Gl(),Ki(31,`dd`,9),nb(32),Eb(33,`currency`),Gl()()(),Ki(34,`div`,10)(35,`button`,11),nb(36,`View your order`),Gl(),Ki(37,`button`,12),nb(38,`Continue Shopping`),Gl()()()()),n&2){let e=r.ngIf;ND(7),Kl(`#`,e.id),ND(7),wm(Tb(15,7,e.orderDate,`medium`)),ND(6),wm(Db(21,10,e.paymentSummary)),ND(6),wm(Db(27,12,e.shippingAddress)),ND(6),wm(Db(33,14,e.total)),ND(3),Zg(`routerLink`,ab(`/orders/`,e.id))}}function Mn(n,r){n&1&&(Ki(0,`section`,1)(1,`div`,2)(2,`h2`,3),nb(3,`Order processing.... Please wait`),Gl(),Ki(4,`div`,6)(5,`div`,13),Kg(6,`mat-spinner`,14),Ki(7,`p`,15),nb(8,`Loading order....`),Gl(),Ki(9,`span`),nb(10,`Your payment has been received. We are creating the order`),Gl()()(),Ki(11,`div`,10)(12,`button`,12),nb(13,`Continue Shopping`),Gl()()()())}var Xe=class n{signalRService=v(he);orderService=v($);ngOnDestroy(){this.orderService.orderComplete=!1,this.signalRService.orderSignal.set(null)}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`app-checkout-success`]],decls:2,vars:2,consts:[[`class`,`bg-white py-16`,4,`ngIf`],[1,`bg-white`,`py-16`],[1,`mx-auto`,`max-w-2xl`,`px-4`],[1,`font-semibold`,`text-2xl`,`mb-2`],[1,`text-gray-500`,`mb-8`],[1,`font-medium`],[1,`spcae-y-2`,`rounded-lg`,`border`,`border-gray-100`,`bg-gray-50`,`p-6`,`mb-8`],[1,`flex`,`items-center`,`justify-between`,`gap-4`],[1,`font-normal`,`text-gray-500`],[1,`font-medium`,`text-gray-900`,`text-end`],[1,`flex`,`items-center`,`space-x-4`],[`mat-flat-button`,``,3,`routerLink`],[`routerLink`,`/shop`,`mat-stroked-button`,``],[1,`flex`,`flex-col`,`justify-center`,`items-center`],[`diameter`,`30`],[1,`text-xl`]],template:function(e,t){e&1&&Fg(0,En,39,16,`section`,0)(1,Mn,14,0,`section`,0),e&2&&(Zg(`ngIf`,t.signalRService.orderSignal()),ND(),Zg(`ngIf`,!t.signalRService.orderSignal()))},dependencies:[_0,Qr,Ze,We,Ku,Xu,l,Qu,u],encapsulation:2})};var wn=[`*`];function Dn(n,r){n&1&&Nw(0)}var dt=(()=>{class n{_elementRef=v(Br);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return n})();var lt=(()=>{class n{template=v(Lr);static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`cdkStepLabel`,``]]})}return n})();var oe={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var Tn=new S$1(`STEPPER_GLOBAL_OPTIONS`);var Ke=(()=>{class n{_stepperOptions;_stepper=v(ve);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=gi$1(!1);interactedStream=new Ye$1;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=gi$1(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=gi$1(!0);optional=!1;get completed(){let e=this._completedOverride(),t=this._interacted();return e??(t&&(!this.stepControl||Rn(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=gi$1(null);index=gi$1(-1);isSelected=Nb(()=>this._stepper.selectedIndex===this.index());indicatorType=Nb(()=>{let e=this.isSelected(),t=this.completed,i=this._state()??oe.NUMBER,c=this._editable();return this._showError()&&this.hasError&&!e?oe.ERROR:this._displayDefaultIndicatorType?!t||e?oe.NUMBER:c?oe.EDIT:oe.DONE:t&&!e?oe.DONE:t&&e?i:c&&e?oe.EDIT:i});isNavigable=Nb(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=gi$1(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&ln(this.stepControl)}constructor(){let e=v(Tn,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),An(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`cdk-step`]],contentQueries:function(t,i,c){if(t&1&&cm(c,lt,5)(c,ee,5),t&2){let p;Aw(p=Ow())&&(i.stepLabel=p.first),Aw(p=Ow())&&(i._childForms=p)}},viewQuery:function(t,i){if(t&1&&lm(Lr,7),t&2){let c;Aw(c=Ow())&&(i.content=c.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,HV],optional:[2,`optional`,`optional`,HV],completed:[2,`completed`,`completed`,HV],hasError:[2,`hasError`,`hasError`,HV]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[IE],ngContentSelectors:wn,decls:1,vars:0,template:function(t,i){t&1&&(Sw(),jg(0,Dn,1,0,`ng-template`))},encapsulation:2})}return n})();var ve=(()=>{class n{_dir=v(nf$1,{optional:!0});_changeDetectorRef=v(FV);_elementRef=v(Br);_destroyed=new X;_keyManager;_steps;steps=new ji;_stepHeader;_sortedHeaders=new ji;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=gi$1(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=gi$1(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new Ye$1;selectedIndexChange=new Ye$1;_groupId=v(zo).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Iy(this._steps),Ty(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(t=>t._stepper===this)),this.steps.forEach((t,i)=>t.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Iy(this._stepHeader),Ty(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((t,i)=>t._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new $o(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Gv()).pipe(Iy(this._layoutDirection()),Ty(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let t of e)t._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let t=e-this._selectedIndex();return t<0?this._layoutDirection()===`rtl`?`next`:`previous`:t>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let t=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:t[e],previouslySelectedStep:t[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let t=eu(e),i=e.keyCode,c=this._keyManager;c?.activeItemIndex!=null&&!t&&(i===32||i===13)?(this.selectedIndex=c.activeItemIndex,e.preventDefault()):c?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(t=>{let i=t.stepControl;return(i?ln(i)||zn(i)||!t.interacted:!t.completed)&&!t.optional&&!t._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,t=rf$1();return e===t||e.contains(t)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`cdkStepper`,``]],contentQueries:function(t,i,c){if(t&1&&cm(c,Ke,5)(c,dt,5),t&2){let p;Aw(p=Ow())&&(i._steps=p),Aw(p=Ow())&&(i._stepHeader=p)}},inputs:{linear:[2,`linear`,`linear`,HV],selectedIndex:[2,`selectedIndex`,`selectedIndex`,BV],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return n})();function Ye(n){return typeof n==`function`}function Rn(n){return Ye(n)?n().valid():n.valid}function ln(n){return Ye(n)?n().invalid():n.invalid}function zn(n){return Ye(n)?n().pending():n.pending}function An(n){Ye(n)?n().reset():n.reset()}var mn=(()=>{class n{_stepper=v(ve);type=`submit`;static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`button`,`cdkStepperNext`,``]],hostVars:1,hostBindings:function(t,i){t&1&&im(`click`,function(){return i._stepper.next()}),t&2&&rm(`type`,i.type)},inputs:{type:`type`}})}return n})();var pn=(()=>{class n{_stepper=v(ve);type=`button`;static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`button`,`cdkStepperPrevious`,``]],hostVars:1,hostBindings:function(t,i){t&1&&im(`click`,function(){return i._stepper.previous()}),t&2&&rm(`type`,i.type)},inputs:{type:`type`}})}return n})();var hn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[ei$1]})}return n})();var Pn=(n,r,e)=>({index:n,active:r,optional:e});function On(n,r){if(n&1&&em(0,2),n&2){let e=_w();Zg(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,mb(2,Pn,e.index,e.active,e.optional))}}function Fn(n,r){if(n&1&&(Ki(0,`span`,7),nb(1),Gl()),n&2){let e=_w(2);ND(),wm(e._getDefaultTextForState(e.state))}}function Ln(n,r){if(n&1&&(Ki(0,`span`,8),nb(1),Gl()),n&2){let e=_w(3);ND(),wm(e._intl.completedLabel)}}function Bn(n,r){if(n&1&&(Ki(0,`span`,8),nb(1),Gl()),n&2){let e=_w(3);ND(),wm(e._intl.editableLabel)}}function Vn(n,r){if(n&1&&(sw(0,Ln,2,1,`span`,8)(1,Bn,2,1,`span`,8),Ki(2,`mat-icon`,7),nb(3),Gl()),n&2){let e=_w(2);aw(e.state===`done`?0:e.state===`edit`?1:-1),ND(3),wm(e._getDefaultTextForState(e.state))}}function Gn(n,r){if(n&1&&sw(0,Fn,2,1,`span`,7)(1,Vn,4,2),n&2)aw(_w().state===`number`?0:1)}function qn(n,r){n&1&&(Ki(0,`div`,4),em(1,9),Gl()),n&2&&(ND(),Zg(`ngTemplateOutlet`,r.template))}function Hn(n,r){if(n&1&&(Ki(0,`div`,4),nb(1),Gl()),n&2){let e=_w();ND(),wm(e.label)}}function jn(n,r){if(n&1&&(Ki(0,`div`,5),nb(1),Gl()),n&2){let e=_w();ND(),wm(e._intl.optionalLabel)}}function Qn(n,r){if(n&1&&(Ki(0,`div`,6),nb(1),Gl()),n&2){let e=_w();ND(),wm(e.errorMessage)}}var un=[`*`];function Un(n,r){}function $n(n,r){if(n&1&&(Nw(0),Fg(1,Un,0,0,`ng-template`,0)),n&2){let e=_w();ND(),Zg(`cdkPortalOutlet`,e._portal)}}var Wn=[`animatedContainer`];var bn=n=>({steps:n});var _n=n=>({step:n});function Zn(n,r){n&1&&Nw(0)}function Xn(n,r){if(n&1&&(Ki(0,`div`,5),em(1,9)(2,6),Gl()),n&2){let e=_w(2),t=kw(6);ND(),Zg(`ngTemplateOutlet`,e.headerPrefix()),ND(),Zg(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,gb(3,bn,e.steps))}}function Kn(n,r){if(n&1&&em(0,6),n&2){let e=_w(2);Zg(`ngTemplateOutlet`,kw(6))(`ngTemplateOutletContext`,gb(2,bn,e.steps))}}function Yn(n,r){if(n&1&&(Ki(0,`div`,10,2),em(2,9),Gl()),n&2){let e=r.$implicit,t=r.$index,i=_w(2);Gw(`mat-horizontal-stepper-content-`+i._getAnimationDirection(t)),Zg(`id`,i._getStepContentId(t)),Yg(`aria-labelledby`,i._getStepLabelId(t))(`inert`,i.selectedIndex===t?null:``),ND(2),Zg(`ngTemplateOutlet`,e.content)}}function Jn(n,r){if(n&1&&(Ki(0,`div`,3),sw(1,Xn,3,5,`div`,5)(2,Kn,1,4,`ng-container`,6),Ki(3,`div`,7),uw(4,Yn,3,6,`div`,8,lw),Gl()()),n&2){let e=_w();ND(),aw(e.headerPrefix()?1:2),ND(3),dw(e.steps)}}function ei(n,r){if(n&1&&em(0,9),n&2)Zg(`ngTemplateOutlet`,_w(2).headerPrefix())}function ti(n,r){if(n&1&&(Ki(0,`div`,11),em(1,6),Ki(2,`div`,12,2)(4,`div`,13)(5,`div`,14),em(6,9),Gl()()()()),n&2){let e=r.$implicit,t=r.$index,i=r.$index,c=r.$count,p=_w(2),ot=kw(4);ND(),Zg(`ngTemplateOutlet`,ot)(`ngTemplateOutletContext`,gb(11,_n,e)),ND(),gm(`mat-stepper-vertical-line`,i!==c-1)(`mat-vertical-content-container-active`,p.selectedIndex===t),Yg(`inert`,p.selectedIndex===t?null:``)(`aria-label`,p.ariaLabel),ND(2),Zg(`id`,p._getStepContentId(t)),Yg(`aria-labelledby`,p._getStepLabelId(t)),ND(2),Zg(`ngTemplateOutlet`,e.content)}}function ni(n,r){if(n&1&&(Ki(0,`div`,4),sw(1,ei,1,1,`ng-container`,9),uw(2,ti,7,13,`div`,11,lw),Gl()),n&2){let e=_w();ND(),aw(e.headerPrefix()?1:-1),ND(),dw(e.steps)}}function ii(n,r){if(n&1){let e=yw();Ki(0,`mat-step-header`,15),im(`click`,function(){let i=Ud(e).step;return $d(i.select())})(`keydown`,function(i){Ud(e);return $d(_w()._onKeydown(i))}),Gl()}if(n&2){let e=r.step,t=_w();gm(`mat-horizontal-stepper-header`,t.orientation===`horizontal`)(`mat-vertical-stepper-header`,t.orientation===`vertical`),Zg(`tabIndex`,t._getFocusIndex()===e.index()?0:-1)(`id`,t._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,t._iconOverrides)(`disableRipple`,t.disableRipple||!e.isNavigable())(`color`,e.color||t.color),Yg(`role`,t.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,t.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,t.orientation===`horizontal`?t.steps.length:null)(`aria-selected`,t.orientation===`horizontal`?e.isSelected():null)(`aria-current`,t.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,t.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,t.orientation===`vertical`?e.isSelected():null)(`aria-controls`,t._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function ri(n,r){n&1&&Kg(0,`div`,17)}function ai(n,r){if(n&1&&(em(0,6),sw(1,ri,1,0,`div`,17)),n&2){let e=r.$implicit,t=r.$index,i=r.$count;_w(2);Zg(`ngTemplateOutlet`,kw(4))(`ngTemplateOutletContext`,gb(3,_n,e)),ND(),aw(t!==i-1?1:-1)}}function oi(n,r){if(n&1&&(Ki(0,`div`,16),uw(1,ai,2,5,null,null,lw),Gl()),n&2){let e=r.steps;Yg(`aria-label`,_w().ariaLabel),ND(),dw(e)}}var mt=(()=>{class n extends lt{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=IC({type:n,selectors:[[``,`matStepLabel`,``]],features:[Lg]})}return n})();var ci=(()=>{class n{changes=new X;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();var pt=(()=>{class n extends dt{_intl=v(ci);_focusMonitor=v(ni$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=v(Ve);e.load(fu),e.load(oi$1);let t=v(FV);this._intlSubscription=this._intl.changes.subscribe(()=>t.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,t){e?this._focusMonitor.focusVia(this._elementRef,e,t):this._elementRef.nativeElement.focus(t)}_stringLabel(){return this.label instanceof mt?null:this.label}_templateLabel(){return this.label instanceof mt?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(t,i){t&2&&(Gw(`mat-`+(i.color||`primary`)),gm(`mat-step-header-empty-label`,i._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Lg],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(t,i){if(t&1&&(Kg(0,`div`,0),Ki(1,`div`)(2,`div`,1),sw(3,On,1,6,`ng-container`,2)(4,Gn,2,1),Gl()(),Ki(5,`div`,3),sw(6,qn,2,1,`div`,4)(7,Hn,2,1,`div`,4),sw(8,jn,2,1,`div`,5),sw(9,Qn,2,1,`div`,6),Gl()),t&2){let c;Zg(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disableRipple),ND(),Gw(ab(`mat-step-icon-state-`,i.state,` mat-step-icon`)),gm(`mat-step-icon-selected`,i.selected),ND(2),aw(i.iconOverrides&&i.iconOverrides[i.state]?3:4),ND(2),gm(`mat-step-label-active`,i.active)(`mat-step-label-selected`,i.selected)(`mat-step-label-error`,i.state==`error`),ND(),aw((c=i._templateLabel())?6:i._stringLabel()?7:-1,c),ND(2),aw(i._hasOptionalLabel()?8:-1),ND(),aw(i._hasErrorLabel()?9:-1)}},dependencies:[K_,Zu,be],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return n})();var si=(()=>{class n{templateRef=v(Lr);name;static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return n})();var di=(()=>{class n{_template=v(Lr);static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`ng-template`,`matStepContent`,``]]})}return n})();var ht=(()=>{class n extends Ke{_errorStateMatcher=v(yl,{skipSelf:!0});_viewContainerRef=v(vs);_isSelected=j.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Dy(()=>this._stepper.selectionChange.pipe(Fe(e=>e.selectedStep===this),Iy(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new xe(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,t){let i=this._errorStateMatcher.isErrorState(e,t),c=!!(e&&e.invalid&&this.interacted);return i||c}isSignalErrorState(e){let t=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return t||i}static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵcmp=gC({type:n,selectors:[[`mat-step`]],contentQueries:function(t,i,c){if(t&1&&cm(c,mt,5)(c,di,5),t&2){let p;Aw(p=Ow())&&(i.stepLabel=p.first),Aw(p=Ow())&&(i._lazyContent=p.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[db([{provide:yl,useExisting:n},{provide:Ke,useExisting:n}]),Lg],ngContentSelectors:un,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(t,i){t&1&&(Sw(),Fg(0,$n,2,1,`ng-template`))},dependencies:[zs],encapsulation:2})}return n})();var ut=(()=>{class n extends ve{_ngZone=v(Z);_renderer=v(xc);_animationsDisabled=Jt();_cleanupTransition;_isAnimating=gi$1(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new ji;_icons;animationDone=new Ye$1;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=AV(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!v(ne).isBrowser;constructor(){super();let t=v(Br).nativeElement.nodeName.toLowerCase();this.orientation=t===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:t})=>this._iconOverrides[e]=t),this.steps.changes.pipe(Ty(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Ty(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Iy(null),Ty(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let t=e.target;if(!t)return;let i=this.orientation===`horizontal`&&e.propertyName===`transform`&&t.classList.contains(`mat-horizontal-stepper-content-current`),c=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&t.classList.contains(`mat-vertical-content-container-active`);(i||c)&&this._animatedContainers.find(ot=>ot.nativeElement===t)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(t,i,c){if(t&1&&cm(c,ht,5)(c,si,5),t&2){let p;Aw(p=Ow())&&(i._steps=p),Aw(p=Ow())&&(i._icons=p)}},viewQuery:function(t,i){if(t&1&&lm(pt,5)(Wn,5),t&2){let c;Aw(c=Ow())&&(i._stepHeader=c),Aw(c=Ow())&&(i._animatedContainers=c)}},hostVars:14,hostBindings:function(t,i){t&2&&(hm(`--%NS%mat-stepper-animation-duration`,i._getAnimationDuration()),gm(`mat-stepper-horizontal`,i.orientation===`horizontal`)(`mat-stepper-vertical`,i.orientation===`vertical`)(`mat-stepper-label-position-end`,i.orientation===`horizontal`&&i.labelPosition==`end`)(`mat-stepper-label-position-bottom`,i.orientation===`horizontal`&&i.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,i.headerPosition===`bottom`)(`mat-stepper-animating`,i._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[db([{provide:ve,useExisting:n}]),Lg],ngContentSelectors:un,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(t,i){if(t&1&&(Sw(),sw(0,Zn,1,0),sw(1,Jn,6,1,`div`,3)(2,ni,4,1,`div`,4),Fg(3,ii,1,27,`ng-template`,null,0,Cb)(5,oi,3,1,`ng-template`,null,1,Cb)),t&2){let c;aw(i._isServer?0:-1),ND(),aw((c=i.orientation)===`horizontal`?1:c===`vertical`?2:-1)}},dependencies:[Zu,pt],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return n})();var fn=(()=>{class n extends mn{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=IC({type:n,selectors:[[`button`,`matStepperNext`,``]],hostAttrs:[1,`mat-stepper-next`],hostVars:1,hostBindings:function(t,i){t&2&&rm(`type`,i.type)},features:[Lg]})}return n})();var vn=(()=>{class n extends pn{static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵdir=IC({type:n,selectors:[[`button`,`matStepperPrevious`,``]],hostAttrs:[1,`mat-stepper-previous`],hostVars:1,hostBindings:function(t,i){t&2&&rm(`type`,i.type)},features:[Lg]})}return n})();var gn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({providers:[yl],imports:[an,hn,xe$1,pu,ut,pt,ei$1]})}return n})();var mi=[`*`];var Je=(()=>{class n{labelPosition=`after`;static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(t,i){t&2&&gm(`mdc-form-field--align-end`,i.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:mi,decls:1,vars:0,template:function(t,i){t&1&&(Sw(),Nw(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return n})();var pi=[`input`];var hi=[`*`];var bt={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var ui=new S$1(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>bt});var S=(function(n){return n[n.Init=0]=`Init`,n[n.Checked=1]=`Checked`,n[n.Unchecked=2]=`Unchecked`,n[n.Indeterminate=3]=`Indeterminate`,n})(S||{});var _t=class{source;checked};var ft=(()=>{class n{_elementRef=v(Br);_changeDetectorRef=v(FV);_ngZone=v(Z);_animationsDisabled=Jt();_options=v(ui,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new _t;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Ye$1;indeterminateChange=new Ye$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=S.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){v(Ve).load(fu);let e=v(new rv(`tabindex`),{optional:!0});this._options=this._options||bt,this.color=this._options.color||bt.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=v(zo).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(S.Indeterminate):this._transitionCheckState(this.checked?S.Checked:S.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=gi$1(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let c=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(c)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?S.Checked:S.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return``;switch(e){case S.Init:if(t===S.Checked)return this._animationClasses.uncheckedToChecked;if(t==S.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case S.Unchecked:return t===S.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case S.Checked:return t===S.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case S.Indeterminate:return t===S.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-checkbox`]],viewQuery:function(t,i){if(t&1&&lm(pi,5),t&2){let c;Aw(c=Ow())&&(i._inputElement=c.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(t,i){t&2&&(rm(`id`,i.id),Yg(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),Gw(i.color?`mat-`+i.color:`mat-accent`),gm(`_mat-animation-noopable`,i._animationsDisabled)(`mdc-checkbox--disabled`,i.disabled)(`mat-mdc-checkbox-disabled`,i.disabled)(`mat-mdc-checkbox-checked`,i.checked)(`mat-mdc-checkbox-disabled-interactive`,i.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,HV],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,HV],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,HV],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:BV(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HV],checked:[2,`checked`,`checked`,HV],disabled:[2,`disabled`,`disabled`,HV],indeterminate:[2,`indeterminate`,`indeterminate`,HV]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[db([{provide:Ue,useExisting:Uo(()=>n),multi:!0},{provide:ue,useExisting:n,multi:!0}]),IE],ngContentSelectors:hi,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){if(t&1&&(Sw(),Ki(0,`label`,3),im(`click`,function(p){return i._preventBubblingFromLabel(p)}),Ki(1,`span`,4,0),Kg(3,`span`,5),Ki(4,`input`,6,1),im(`blur`,function(){return i._onBlur()})(`click`,function(){return i._onInputClick()})(`change`,function(p){return i._onInteractionEvent(p)}),Gl(),Kg(6,`span`,7),Ki(7,`span`,8),nf(),Ki(8,`svg`,9),Kg(9,`path`,10),Gl(),rf(),Kg(10,`span`,11),Gl(),Kg(11,`span`,12),Gl(),Ki(12,`span`,13,2),Nw(14),Gl()()),t&2){let c=kw(2);Zg(`labelPosition`,i.labelPosition)(`for`,i.inputId),ND(4),gm(`mdc-checkbox--selected`,i.checked),Zg(`checked`,i.checked)(`indeterminate`,i.indeterminate)(`disabled`,i.disabled&&!i.disabledInteractive)(`id`,i.inputId)(`required`,i.required)(`tabIndex`,i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Yg(`aria-label`,i.ariaLabel||null)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-checked`,i.indeterminate?`mixed`:null)(`aria-controls`,i.ariaControls)(`aria-disabled`,i.disabled&&i.disabledInteractive?!0:null)(`aria-expanded`,i.ariaExpanded)(`aria-owns`,i.ariaOwns)(`name`,i.name)(`value`,i.value),ND(7),Zg(`matRippleTrigger`,c)(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleCentered`,!0)}},dependencies:[K_,Je],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();var kn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[ft,ei$1]})}return n})();var et=class n{baseUrl=ov.apiUrl;http=v(Rs);deliveryMethods=[];getDeliveryMethods(){return this.deliveryMethods.length>0?Gv(this.deliveryMethods):this.http.get(this.baseUrl+`payments/delivery-methods`).pipe(Fe(r=>(this.deliveryMethods=r.sort((e,t)=>t.price-e.price),r)))}static ɵfac=function(e){return new(e||n)};static ɵprov=ie({token:n,factory:n.ɵfac,providedIn:`root`})};var _i=[`input`];var fi=[`formField`];var vi=[`*`];var tt=class{source;value;constructor(r,e){this.source=r,this.value=e}};var gi={provide:Ue,useExisting:Uo(()=>vt),multi:!0};var yn=new S$1(`MatRadioGroup`);var ki=new S$1(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var vt=(()=>{class n{_changeDetector=v(FV);_value=null;_name=v(zo).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new Ye$1;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new tt(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`mat-radio-group`]],contentQueries:function(t,i,c){if(t&1&&cm(c,nt,5),t&2){let p;Aw(p=Ow())&&(i._radios=p)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,HV],required:[2,`required`,`required`,HV],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HV]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[db([gi,{provide:yn,useExisting:n}])]})}return n})();var nt=(()=>{class n{_elementRef=v(Br);_changeDetector=v(FV);_focusMonitor=v(ni$1);_radioDispatcher=v(fe);_defaultOptions=v(ki,{optional:!0});_ngZone=v(Z);_renderer=v(xc);_uniqueId=v(zo).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new Ye$1;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=Jt();_injector=v(ye);constructor(){v(Ve).load(fu);let e=v(yn,{optional:!0}),t=v(new rv(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,t&&(this.tabIndex=BV(t,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new tt(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute(`tabindex`,t+``),this._previousTabIndex=t,bh(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===i&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===i&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-radio-button`]],viewQuery:function(t,i){if(t&1&&lm(_i,5)(fi,7,Br),t&2){let c;Aw(c=Ow())&&(i._inputElement=c.first),Aw(c=Ow())&&(i._rippleTrigger=c.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(t,i){t&1&&im(`focus`,function(){return i._inputElement.nativeElement.focus()}),t&2&&(Yg(`id`,i.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),gm(`mat-primary`,i.color===`primary`)(`mat-accent`,i.color===`accent`)(`mat-warn`,i.color===`warn`)(`mat-mdc-radio-checked`,i.checked)(`mat-mdc-radio-disabled`,i.disabled)(`mat-mdc-radio-disabled-interactive`,i.disabledInteractive)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,HV],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:BV(e)],checked:[2,`checked`,`checked`,HV],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,HV],required:[2,`required`,`required`,HV],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HV]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:vi,decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(t,i){t&1&&(Sw(),Ki(0,`label`,2,0)(2,`span`,3),Kg(3,`span`,4),Ki(4,`input`,5,1),im(`change`,function(p){return i._onInputInteraction(p)}),Gl(),Ki(6,`span`,6),Kg(7,`span`,7)(8,`span`,8),Gl(),Ki(9,`span`,9),Kg(10,`span`,10),Gl()(),Ki(11,`span`,11),Nw(12),Gl()()),t&2&&(Zg(`labelPosition`,i.labelPosition)(`for`,i.inputId),ND(2),gm(`mdc-radio--disabled`,i.disabled),ND(2),Zg(`id`,i.inputId)(`checked`,i.checked)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Yg(`name`,i.name)(`value`,i.value)(`aria-label`,i.ariaLabel)(`aria-labelledby`,i.ariaLabelledby)(`aria-describedby`,i.ariaDescribedby)(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null),ND(5),Zg(`matRippleTrigger`,i._rippleTrigger.nativeElement)(`matRippleDisabled`,i._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[K_,Je],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return n})();var xn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[pu,nt,ei$1]})}return n})();var xi=(n,r)=>r.id;function Si(n,r){if(n&1&&(Ki(0,`label`,2)(1,`mat-radio-button`,3)(2,`div`,4)(3,`strong`),nb(4),Eb(5,`currency`),Gl(),Ki(6,`span`,5),nb(7),Gl()()()()),n&2){let e=r.$implicit,t=_w();ND(),Zg(`checked`,t.cartService.selectedDelivery()===e)(`value`,e),ND(3),bm(``,e.shortName,` - `,Db(5,5,e.price)),ND(3),wm(e.description)}}var it=class n{checkoutService=v(et);cartService=v(y);deliveryComplete=xV();ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:r=>{if(this.cartService.cart()?.deliveryMethodId){let e=r.find(t=>t.id===this.cartService.cart()?.deliveryMethodId);e&&(this.cartService.selectedDelivery.set(e),this.deliveryComplete.emit(!0))}}})}updateDeliveryMethod(r){return Mt(this,null,function*(){this.cartService.selectedDelivery.set(r);let e=this.cartService.cart();e&&(e.deliveryMethodId=r.id,yield Yv(this.cartService.setCart(e)),this.deliveryComplete.emit(!0))})}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`app-checkout-delivery`]],outputs:{deliveryComplete:`deliveryComplete`},decls:4,vars:1,consts:[[1,`w-full`],[1,`grid`,`grid-cols-2`,`gap-4`,3,`change`,`value`],[1,`p-3`,`border`,`border-gray-200`,`cursor-pointer`,`w-full`,`h-full`,`hover:bg-purple-400`],[1,`w-full`,`h-full`,3,`checked`,`value`],[1,`flex`,`flex-col`,`w-full`,`h-full`],[1,`text-sm`]],template:function(e,t){e&1&&(Ki(0,`div`,0)(1,`mat-radio-group`,1),im(`change`,function(c){return t.updateDeliveryMethod(c.value)}),uw(2,Si,8,7,`label`,2,xi),Gl()()),e&2&&(ND(),Zg(`value`,t.cartService.selectedDelivery()?.id),ND(),dw(t.checkoutService.deliveryMethods))},dependencies:[xn,vt,nt,Qu],encapsulation:2})};var Ci=(n,r)=>r.productId;function Ni(n,r){if(n&1&&(Wl(0,`tr`)(1,`td`,8)(2,`div`,9),Jg(3,`img`,10),Wl(4,`span`),nb(5),zl()()(),Wl(6,`td`,8),nb(7),zl(),Wl(8,`td`,11),nb(9),Eb(10,`currency`),zl()()),n&2){let e=r.$implicit;ND(3),rm(`src`,sb(e.pictureUrl),yh)(`alt`,ab(``,e.productName,` image`)),ND(2),wm(e.productName),ND(2),wm(e.quantity),ND(2),wm(Db(10,7,e.price))}}var rt=class n{cartService=v(y);confirmationToken;static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`app-checkout-review`]],inputs:{confirmationToken:`confirmationToken`},decls:20,vars:6,consts:[[1,`mt-4`,`w-full`],[1,`text-lg`,`font-semibold`],[1,`font-medium`],[1,`mt-1`,`text-gray-500`],[1,`mt-6`,`mx-auto`],[1,`border-b`,`border-gray-200`],[1,`w-full`,`text-center`],[1,`divide-y`,`divide-gray-200`],[1,`py-4`],[1,`flex`,`items-center`,`gap-4`],[1,`w-10`,`h-10`,3,`src`,`alt`],[1,`py-4`,`text-right`]],template:function(e,t){e&1&&(Wl(0,`div`,0)(1,`h4`,1),nb(2,`Billing and delivery information`),zl(),Wl(3,`dl`)(4,`dt`,2),nb(5,`Shipping address`),zl(),Wl(6,`dd`,3),nb(7),Eb(8,`address`),zl(),Wl(9,`dt`,2),nb(10,`Payment Details`),zl(),Wl(11,`dd`,3),nb(12),Eb(13,`paymentCard`),zl()()(),Wl(14,`div`,4)(15,`div`,5)(16,`table`,6)(17,`tbody`,7),uw(18,Ni,11,9,`tr`,null,Ci),zl()()()()),e&2&&(ND(7),wm(Db(8,2,t.confirmationToken?.shipping)),ND(5),wm(Db(13,4,t.confirmationToken?.payment_method_preview)),ND(6),dw(t.cartService.cart()?.items))},dependencies:[Qu,l,u],encapsulation:2})};function Ii(n,r){n&1&&Kg(0,`mat-spinner`,20)}function Ei(n,r){if(n&1&&(Ki(0,`span`),nb(1),Eb(2,`currency`),Gl()),n&2){let e=_w();ND(),Kl(`Pay `,Db(2,1,e.cartService.totals()?.total))}}var Ao=[{path:``,component:class n{accountService=v(ke);stripeService=v(j$1);orderService=v($);snackbar=v(Ve$1);router=v(ft$1);cartService=v(y);addressElement;paymentElement;saveAddress=!1;completionStatus=gi$1({address:!1,card:!1,delivery:!1});confirmationToken;loading=!1;ngOnInit(){return Mt(this,null,function*(){try{this.addressElement=yield this.stripeService.createAddressElement(),this.addressElement?.mount(`#address-element`),this.addressElement.on(`change`,this.handleAddressChange),this.paymentElement=yield this.stripeService.createPaymentElement(),this.paymentElement.mount(`#payment-element`),this.paymentElement.on(`change`,this.handlePaymentChange)}catch(r){this.snackbar.error(r.message)}})}handleAddressChange=r=>{this.completionStatus.update(e=>(e.address=r.complete,e))};handlePaymentChange=r=>{this.completionStatus.update(e=>(e.card=r.complete,e))};handleDeliveryChange=r=>{this.completionStatus.update(e=>(e.delivery=r,e))};getConfirmationToken(){return Mt(this,null,function*(){try{if(Object.values(this.completionStatus()).every(r=>r===!0)){let r=yield this.stripeService.createConfirmationToken();if(r.error)throw new Error(r.error.message);this.confirmationToken=r.confirmationToken,console.log(this.confirmationToken)}}catch(r){this.snackbar.error(r.message)}})}onStepChange(r){return Mt(this,null,function*(){if(r.selectedIndex===1&&this.saveAddress){let e=yield this.getAddressFromStripeAddress();e&&Yv(this.accountService.updateAddress(e))}r.selectedIndex===2&&(yield Yv(this.stripeService.createOrUpdatePaymentIntent())),r.selectedIndex===3&&(yield this.getConfirmationToken())})}confirmPayment(r){return Mt(this,null,function*(){this.loading=!0;try{if(this.confirmationToken){let e=yield this.stripeService.confirmPayment(this.confirmationToken);if(e.paymentIntent?.status===`succeeded`){let t=yield this.createOrderModel();if(yield Yv(this.orderService.createOrder(t)))this.orderService.orderComplete=!0,this.cartService.deleteCart(),this.cartService.selectedDelivery.set(null),this.router.navigateByUrl(`/checkout/success`);else throw new Error(`Order creation failed`)}else throw e.error?new Error(e.error.message):new Error(`Something went wrong`)}}catch(e){this.snackbar.error(e.message||`Something went wrong`),r.previous()}finally{this.loading=!1}})}createOrderModel(){return Mt(this,null,function*(){let r=this.cartService.cart(),e=yield this.getAddressFromStripeAddress(),t=this.confirmationToken?.payment_method_preview.card;if(!r?.id||!r?.deliveryMethodId||!t||!e)throw new Error(`Problem creating order`);return{cartId:r.id,paymentSummary:{last4:+t.last4,brand:t.brand,expMonth:t.exp_month,expYear:t.exp_year},deliveryMethodId:r.deliveryMethodId,shippingAddress:e,discount:this.cartService.totals()?.discount}})}getAddressFromStripeAddress(){return Mt(this,null,function*(){let r=yield this.addressElement?.getValue(),e=r?.value.address;return e?{name:r.value.name,line1:e.line1,line2:e.line2||void 0,city:e.city,country:e.country,state:e.state,postalCode:e.postal_code}:null})}onSaveAddressCheckboxChange(r){this.saveAddress=r.checked}ngOnDestroy(){this.stripeService.disposeElements()}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`app-checkout`]],decls:41,vars:14,consts:[[`stepper`,``],[1,`flex`,`mt-32`,`gap-6`],[1,`w-3/4`],[1,`bg-white`,`border`,`border-gray-200`,`shadow-sm`,3,`selectionChange`,`linear`],[`label`,`Address`,3,`completed`],[`id`,`address-element`],[1,`flex`,`justify-end`,`mt-1`],[3,`change`,`checked`],[1,`flex`,`justify-between`,`mt-6`],[`mat-stroked-button`,``,`routerLink`,`/shop`,1,`z-0`],[`mat-flat-button`,``,`matStepperNext`,``,1,`z-0`,3,`disabled`],[`label`,`Shipping`,3,`completed`],[3,`deliveryComplete`],[`mat-stroked-button`,``,`matStepperPrevious`,``],[`mat-flat-button`,``,`matStepperNext`,``,3,`disabled`],[`label`,`Payment`,3,`completed`],[`id`,`payment-element`],[`label`,`Confirmation`],[3,`confirmationToken`],[`mat-flat-button`,``,3,`click`,`disabled`],[`diameter`,`20`],[1,`w-1/4`]],template:function(e,t){if(e&1){let i=yw();Ki(0,`div`,1)(1,`div`,2)(2,`mat-stepper`,3,0),im(`selectionChange`,function(p){return t.onStepChange(p)}),Ki(4,`mat-step`,4),Kg(5,`div`,5),Ki(6,`div`,6)(7,`mat-checkbox`,7),im(`change`,function(p){return t.onSaveAddressCheckboxChange(p)}),nb(8,`Save as default address`),Gl()(),Ki(9,`div`,8)(10,`button`,9),nb(11,`Continue shopping`),Gl(),Ki(12,`button`,10),nb(13,`Next`),Gl()()(),Ki(14,`mat-step`,11)(15,`app-checkout-delivery`,12),im(`deliveryComplete`,function(p){return t.handleDeliveryChange(p)}),Gl(),Ki(16,`div`,8)(17,`button`,13),nb(18,`Back`),Gl(),Ki(19,`button`,14),nb(20,`Next`),Gl()()(),Ki(21,`mat-step`,15),Kg(22,`div`,16),Ki(23,`div`,8)(24,`button`,13),nb(25,`Back`),Gl(),Ki(26,`button`,14),nb(27,`Next`),Gl()()(),Ki(28,`mat-step`,17),Kg(29,`app-checkout-review`,18),Ki(30,`div`,8)(31,`button`,13),nb(32,`Back`),Gl(),Ki(33,`button`,19),im(`click`,function(){Ud(i);let p=kw(3);return $d(t.confirmPayment(p))}),sw(34,Ii,1,0,`mat-spinner`,20)(35,Ei,3,3,`span`),Gl()()()(),Ki(36,`pre`),nb(37),Eb(38,`json`),Gl()(),Ki(39,`div`,21),Kg(40,`app-order-summary`),Gl()()}e&2&&(ND(2),Zg(`linear`,!0),ND(2),Zg(`completed`,t.completionStatus().address),ND(3),Zg(`checked`,t.saveAddress),ND(5),Zg(`disabled`,!t.completionStatus().address),ND(2),Zg(`completed`,t.completionStatus().delivery),ND(5),Zg(`disabled`,!t.completionStatus().delivery),ND(2),Zg(`completed`,t.completionStatus().card),ND(5),Zg(`disabled`,!t.completionStatus().card),ND(3),Zg(`confirmationToken`,t.confirmationToken),ND(4),Zg(`disabled`,!t.confirmationToken||t.loading),ND(),aw(t.loading?34:35),ND(3),wm(Db(38,12,t.completionStatus())))},dependencies:[Ce,gn,ht,ut,fn,vn,_0,Qr,kn,ft,it,rt,Ze,We,Qu,Ju],encapsulation:2})},canActivate:[A,on]},{path:`success`,component:Xe,canActivate:[A,cn]}];export{Ao as checkoutRoutes};