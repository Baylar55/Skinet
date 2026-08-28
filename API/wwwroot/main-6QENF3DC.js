import{$ as Lg,$n as kw,$t as _T,A as Fr,An as gC,Ar as ud,At as Ty,B as IC,Bn as ie$2,C as Ee$2,Cn as dy,Cr as rv,Ct as ST,D as FV,Dr as sw,Er as sm,Et as Sw,F as Gw,Fn as hb,Ft as VE,Gn as je$2,Gr as xV,Gt as Ye$1,Hn as iy,Ht as X$2,Ir as v$1,J as Kl,Jr as ye$3,Jt as Yv,K as Kg,Kn as jg,Kr as xc,Kt as Yg,L as HV,Ln as hm,Lr as vC,Lt as V_,M as G$3,Mn as gi$1,Mt as Ud,N as Gl,Nn as gm,O as Fe,On as ff,Or as sy,P as Gv,Pr as uw,Pt as Uo,Qn as kg,Qt as Zo,Rr as vd,Rt as W$2,S as Eb,Sn as dw,St as S$2,Tr as sb,Tt as Sm,U as Iy,Un as j$1,Ut as Xe$3,V as IE,Vn as im,Vt as Wv,W as Jg,Wn as jV,Wr as wm,X as Ks,Xn as kT,Xr as yw,Xt as Zg,Yn as jt,Yr as yh,Yt as Z$3,Z as Kt,_n as cw,_t as Qr,ar as lw,bn as db,br as rf,cn as ay,ct as Nw,dn as bh,dr as nf,dt as Ow,ei as zl,et as Lr,f as Cb,g as Db,gt as Qg,hn as cn$1,ir as lr,it as ND,jr as ue$2,k as Fg,ln as b$2,mn as cm,mr as or,mt as Q$1,n as $d,nr as lm,nt as Mt,o as Aw,p as Ct,pr as oE,q as Ki$1,qn as ji$1,r as AV,rn as ab,s as BV,sn as aw,st as Nb,tn as _w,tr as ld,tt as Mm,u as Br,ur as nb,ut as Oe$3,v as Dn$1,vt as Qv,w as Ei$1,wn as ea$1,x as Dy,xr as rm,zn as ib,zr as vs,zt as Wl}from"./chunk-CKJRNAL7.js";import{$ as ne$2,A as Tf,B as ai$1,C as P_,D as Qu,E as Qr$1,G as ft,H as dy$1,I as Zc,J as jg$1,K as fu,L as Zu,M as Uo$1,N as Ve$3,O as Rs,P as Wl$1,R as _0,T as Po,U as ei$1,W as eu,X as jo,Z as kn$1,_ as Ku,a as Df,at as pu,b as No,c as Gh,ct as sf,d as He$3,et as nf$1,f as Ie$2,ft as wf,g as Kh,gt as zo,h as K_,ht as zn$1,i as D0,it as ov,k as S_,l as Gi$1,lt as to,mt as yl,n as $o,o as Ef,ot as qo,p as Jt$1,pt as xt,q as je$3,r as Bf,rt as oi$1,st as rf$1,t as $g,tt as ni$1,u as Gl$1,ut as u_,v as Ln$1,w as Pe$3,y as N_}from"./chunk-wJ6ehkWR.js";import{B as ii,C as Tn$1,E as Vr,H as lo,J as ri$1,L as ei$2,M as Yt,N as Z$4,O as Wr,P as Za$1,Q as st,R as ft$1,S as Sn$1,T as Ut$1,U as ni$2,V as ke$3,W as oi$2,X as rr,Y as rn$1,a as Co,b as Pe$4,et as xe$4,f as Jt$2,g as No$1,h as Ml,i as Ce$2,j as Ya$1,k as Xa$1,l as Gr,m as Le$5,nt as yl$1,o as Do,p as Ka$1,q as pn$1,rt as zs,s as Fo,t as $t$1,tt as xn,w as Ue$3,y as Or,z as gl}from"./chunk-CysTuair.js";var je$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var qe$1={passive:!0};var Pe$2=(()=>{class n{_platform=v$1(ne$2);_ngZone=v$1(Z$3);_renderer=v$1(Fr).createRenderer(null,null);_styleLoader=v$1(Ve$3);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return jt;this._styleLoader.load(je$1);let t=Pe$3(e),i=this._monitoredElements.get(t);if(i)return i.subject;let a=new X$2,r=`cdk-text-field-autofilled`,o=u=>{u.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>a.next({target:u.target,isAutofilled:!0}))):u.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>a.next({target:u.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,o,qe$1)));return this._monitoredElements.set(t,{subject:a,unlisten:d}),a}stopMonitoring(e){let t=Pe$3(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();var He$2=new S$2(`MAT_INPUT_VALUE_ACCESSOR`);var Ze$1=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Ue$2=new S$2(`MAT_INPUT_CONFIG`);var Nt=(()=>{class n{_elementRef=v$1(Br);_platform=v$1(ne$2);ngControl=v$1(Z$4,{optional:!0,self:!0});_autofillMonitor=v$1(Pe$2);_ngZone=v$1(Z$3);_formField=v$1(Vr,{optional:!0});_renderer=v$1(xc);_uid=v$1(zo).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=v$1(Ue$2,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new X$2;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=P_(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(oi$2.required)??!1}set required(e){this._required=P_(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&S_().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=P_(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>S_().has(e));constructor(){let e=v$1(Co,{optional:!0}),t=v$1(Do,{optional:!0}),i=v$1(yl$1),a=v$1(He$2,{optional:!0,self:!0}),r=v$1(gl,{optional:!0,self:!0}),o=this._elementRef.nativeElement,d=o.nodeName.toLowerCase();a?Ei$1(a.value)?this._signalBasedValueAccessor=a:this._inputValueAccessor=a:this._inputValueAccessor=o,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(o,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new rr(i,r||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d===`select`,this._isTextarea=d===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=o.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ff(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ze$1.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&im(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(rm(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),Yg(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),gm(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HV]},exportAs:[`matInput`],features:[db([{provide:Or,useExisting:n}]),IE]})}return n})();function We(n,l){if(n&1){let e=yw();Ki$1(0,`div`,1)(1,`button`,2),im(`click`,function(){Ud(e);return $d(_w().action())}),nb(2),Gl()()}if(n&2){let e=_w();ND(2),Kl(` `,e.data.action,` `)}}var Ge=[`label`];function Ke(n,l){}var $e$2=Math.pow(2,31)-1;var S$1=class{_overlayRef;instance;containerInstance;_afterDismissed=new X$2;_afterOpened=new X$2;_onAction=new X$2;_durationTimeoutId;_dismissedByAction=!1;constructor(l,e){this._overlayRef=e,this.containerInstance=l,l._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(l){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(l,$e$2))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Oe$2=new S$2(`MatSnackBarData`);var b$1=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var Qe$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return n})();var Xe$2=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return n})();var Ye=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return n})();var Je$1=(()=>{class n{snackBarRef=v$1(S$1);data=v$1(Oe$2);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(t,i){t&1&&(Ki$1(0,`div`,0),nb(1),Gl(),sw(2,We,3,1,`div`,1)),t&2&&(ND(),Kl(` `,i.data.message,`
`),ND(),aw(i.hasAction?2:-1))},dependencies:[_0,Qe$1,Xe$2,Ye],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})}return n})();var W$1=`_mat-snack-bar-enter`;var G$2=`_mat-snack-bar-exit`;var et$2=(()=>{class n extends st{_ngZone=v$1(Z$3);_elementRef=v$1(Br);_changeDetectorRef=v$1(FV);_platform=v$1(ne$2);_animationsDisabled=Jt$1();snackBarConfig=v$1(b$1);_document=v$1(Kt);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=v$1(ye$3);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new X$2;_onExit=new X$2;_onEnter=new X$2;_animationState=`void`;_live;_label;_role;_liveElementId=v$1(zo).getId(`mat-snack-bar-container-live-`);constructor(){super();let e=this.snackBarConfig;e.politeness===`assertive`&&!e.announcementMessage?this._live=`assertive`:e.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(e){this._assertNotAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),t}attachTemplatePortal(e){this._assertNotAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),t}attachDomPortal=e=>{this._assertNotAttached();let t=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),t};onAnimationEnd(e){e===G$2?this._completeExit():e===W$1&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?bh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(W$1)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(W$1)},200)))}exit(){return this._destroyed?Gv(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?bh(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(G$2)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(G$2),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,t=this.snackBarConfig.panelClass;t&&(Array.isArray(t)?t.forEach(r=>e.classList.add(r)):e.classList.add(t)),this._exposeToModals();let i=this._label.nativeElement,a=`mdc-snackbar__label`;i.classList.toggle(a,!i.querySelector(`.${a}`))}_exposeToModals(){let e=this._liveElementId,t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let i=0;i<t.length;i++){let a=t[i],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(e)===-1&&a.setAttribute(`aria-owns`,r+` `+e):a.setAttribute(`aria-owns`,e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let t=e.getAttribute(`aria-owns`);if(t){let i=t.replace(this._liveElementId,``).trim();i.length>0?e.setAttribute(`aria-owns`,i):e.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,t=e.querySelector(`[aria-hidden]`),i=e.querySelector(`[aria-live]`);if(t&&i){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(a=document.activeElement),t.removeAttribute(`aria-hidden`),i.appendChild(t),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-snack-bar-container`]],viewQuery:function(t,i){if(t&1&&lm(zs,7)(Ge,7),t&2){let a;Aw(a=Ow())&&(i._portalOutlet=a.first),Aw(a=Ow())&&(i._label=a.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(t,i){t&1&&im(`animationend`,function(r){return i.onAnimationEnd(r.animationName)})(`animationcancel`,function(r){return i.onAnimationEnd(r.animationName)}),t&2&&gm(`mat-snack-bar-container-enter`,i._animationState===`visible`)(`mat-snack-bar-container-exit`,i._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!i._animationsDisabled)},features:[Lg],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(Ki$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Fg(4,Ke,0,0,`ng-template`,4),Gl(),Kg(5,`div`),Gl()()),t&2&&(ND(5),Yg(`aria-live`,i._live)(`role`,i._role)(`id`,i._liveElementId))},dependencies:[zs],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})}return n})();var tt$1=new S$2(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new b$1});var Le$4=(()=>{class n{_live=v$1(wf);_injector=v$1(ye$3);_breakpointObserver=v$1(Uo$1);_parentSnackBar=v$1(n,{optional:!0,skipSelf:!0});_defaultConfig=v$1(tt$1);_animationsDisabled=Jt$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Je$1;snackBarContainerComponent=et$2;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}openFromComponent(e,t){return this._attach(e,t)}openFromTemplate(e,t){return this._attach(e,t)}open(e,t=``,i){let a=G$3(G$3({},this._defaultConfig),i);return a.data={message:e,action:t},a.announcementMessage===e&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,t){let i=t&&t.viewContainerRef&&t.viewContainerRef.injector,a=ye$3.create({parent:i||this._injector,providers:[{provide:b$1,useValue:t}]}),r=new $t$1(this.snackBarContainerComponent,t.viewContainerRef,a),o=e.attach(r);return o.instance.snackBarConfig=t,o.instance}_attach(e,t){let i=G$3(G$3(G$3({},new b$1),this._defaultConfig),t),a=this._createOverlay(i),r=this._attachSnackBarContainer(a,i),o=new S$1(r,a);if(e instanceof Lr){let d=new xe$4(e,null,{$implicit:i.data,snackBarRef:o});o.instance=r.attachTemplatePortal(d)}else{let u=new $t$1(e,void 0,this._createInjector(i,o));o.instance=r.attachComponentPortal(u).instance}return this._breakpointObserver.observe(N_.HandsetPortrait).pipe(Ty(a.detachments())).subscribe(d=>{a.overlayElement.classList.toggle(this.handsetCssClass,d.matches)}),i.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(i.announcementMessage,i.politeness)}),this._animateSnackBar(o,i),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(e,t){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),t.announcementMessage&&this._live.clear()}),t.duration&&t.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(t.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let t=new Le$5;t.direction=e.direction;let i=Sn$1(this._injector),a=e.direction===`rtl`,r=e.horizontalPosition===`left`||e.horizontalPosition===`start`&&!a||e.horizontalPosition===`end`&&a,o=!r&&e.horizontalPosition!==`center`;return r?i.left(`0`):o?i.right(`0`):i.centerHorizontally(),e.verticalPosition===`top`?i.top(`0`):i.bottom(`0`),t.positionStrategy=i,t.disableAnimations=this._animationsDisabled,ri$1(this._injector,t)}_createInjector(e,t){let i=e&&e.viewContainerRef&&e.viewContainerRef.injector;return ye$3.create({parent:i||this._injector,providers:[{provide:S$1,useValue:t},{provide:Oe$2,useValue:e.data}]})}static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();var Ve$2=class n{snackbar=v$1(Le$4);error(l){this.snackbar.open(l,`Close`,{duration:5e3,panelClass:[`snack-error`]})}success(l){this.snackbar.open(l,`Close`,{duration:5e3,panelClass:[`snack-success`]})}static ɵfac=function(e){return new(e||n)};static ɵprov=ie$2({token:n,factory:n.ɵfac,providedIn:`root`})};var C$2=class extends Error{constructor(e,t){let n=new.target.prototype;super(`${e}: Status code '${t}'`),this.statusCode=t,this.__proto__=n}};var P$1=class extends Error{constructor(e=`A timeout occurred.`){let t=new.target.prototype;super(e),this.__proto__=t}};var S=class extends Error{constructor(e=`An abort occurred.`){let t=new.target.prototype;super(e),this.__proto__=t}};var z=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType=`UnsupportedTransportError`,this.__proto__=n}};var V=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType=`DisabledTransportError`,this.__proto__=n}};var K$1=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.transport=t,this.errorType=`FailedToStartTransportError`,this.__proto__=n}};var U$1=class extends Error{constructor(e){let t=new.target.prototype;super(e),this.errorType=`FailedToNegotiateWithServerError`,this.__proto__=t}};var X$1=class extends Error{constructor(e,t){let n=new.target.prototype;super(e),this.innerErrors=t,this.__proto__=n}};var H=class{constructor(e,t,n){this.statusCode=e,this.statusText=t,this.content=n}};var k=class{get(e,t){return this.send(W$2(G$3({},t),{method:`GET`,url:e}))}post(e,t){return this.send(W$2(G$3({},t),{method:`POST`,url:e}))}delete(e,t){return this.send(W$2(G$3({},t),{method:`DELETE`,url:e}))}getCookieString(e){return``}};var i=(function(r){return r[r.Trace=0]=`Trace`,r[r.Debug=1]=`Debug`,r[r.Information=2]=`Information`,r[r.Warning=3]=`Warning`,r[r.Error=4]=`Error`,r[r.Critical=5]=`Critical`,r[r.None=6]=`None`,r})(i||{});var E=class{constructor(){}log(e,t){}};E.instance=new E;var be$3=`10.0.11`;var f$2=class{static isRequired(e,t){if(e==null)throw new Error(`The '${t}' argument is required.`)}static isNotEmpty(e,t){if(!e||e.match(/^\s*$/))throw new Error(`The '${t}' argument should not be empty.`)}static isIn(e,t,n){if(!(e in t))throw new Error(`Unknown ${n} value: ${e}.`)}};var p$1=class r{static get isBrowser(){return!r.isNode&&typeof window==`object`&&typeof window.document==`object`}static get isWebWorker(){return!r.isNode&&typeof self==`object`&&`importScripts`in self}static get isReactNative(){return!r.isNode&&typeof window==`object`&&typeof window.document>`u`}static get isNode(){return typeof process<`u`&&process.release&&process.release.name===`node`}};function x(r,e){let t=``;return v(r)?(t=`Binary data of length ${r.byteLength}`,e&&(t+=`. Content: '${Ee$1(r)}'`)):typeof r==`string`&&(t=`String data of length ${r.length}`,e&&(t+=`. Content: '${r}'`)),t}function Ee$1(r){let e=new Uint8Array(r),t=``;return e.forEach(n=>{t+=`0x${n<16?`0`:``}${n.toString(16)} `}),t.substring(0,t.length-1)}function v(r){return r&&typeof ArrayBuffer<`u`&&(r instanceof ArrayBuffer||r.constructor&&r.constructor.name===`ArrayBuffer`)}function G$1(r,e,t,n,o,s){return Mt(this,null,function*(){let c={},[a,l]=I$1();c[a]=l,r.log(i.Trace,`(${e} transport) sending data. ${x(o,s.logMessageContent)}.`);let u=v(o)?`arraybuffer`:`text`,d=yield t.post(n,{content:o,headers:G$3(G$3({},c),s.headers),responseType:u,timeout:s.timeout,withCredentials:s.withCredentials});r.log(i.Trace,`(${e} transport) request complete. Response status: ${d.statusCode}.`)})}function Se$1(r){return r===void 0?new R(i.Information):r===null?E.instance:r.log!==void 0?r:new R(r)}var J=class{constructor(e,t){this._subject=e,this._observer=t}dispose(){let e=this._subject.observers.indexOf(this._observer);e>-1&&this._subject.observers.splice(e,1),this._subject.observers.length===0&&this._subject.cancelCallback&&this._subject.cancelCallback().catch(t=>{})}};var R=class{constructor(e){this._minLevel=e,this.out=console}log(e,t){if(e>=this._minLevel){let n=`[${new Date().toISOString()}] ${i[e]}: ${t}`;switch(e){case i.Critical:case i.Error:this.out.error(n);break;case i.Warning:this.out.warn(n);break;case i.Information:this.out.info(n);break;default:this.out.log(n);break}}}};function I$1(){let r=`X-SignalR-User-Agent`;return p$1.isNode&&(r=`User-Agent`),[r,Ie$1(be$3,Te$1(),xe$3(),Pe$1())]}function Ie$1(r,e,t,n){let o=`Microsoft SignalR/`,s=r.split(`.`);return o+=`${s[0]}.${s[1]}`,o+=` (${r}; `,e&&e!==``?o+=`${e}; `:o+=`Unknown OS; `,o+=`${t}`,n?o+=`; ${n}`:o+=`; Unknown Runtime Version`,o+=`)`,o}function Te$1(){if(p$1.isNode)switch(process.platform){case`win32`:return`Windows NT`;case`darwin`:return`macOS`;case`linux`:return`Linux`;default:return process.platform}else return``}function Pe$1(){if(p$1.isNode)return process.versions.node}function xe$3(){return p$1.isNode?`NodeJS`:`Browser`}function Y$1(r){return r.stack?r.stack:r.message?r.message:`${r}`}function Ce$1(){if(typeof globalThis<`u`)return globalThis;if(typeof self<`u`)return self;if(typeof window<`u`)return window;if(typeof global<`u`)return global;throw new Error(`could not find global`)}var Q=class extends k{constructor(e){if(super(),this._logger=e,typeof fetch>`u`||p$1.isNode){let t=typeof __webpack_require__==`function`?__non_webpack_require__:V_;this._jar=new(t(`tough-cookie`)).CookieJar,typeof fetch>`u`?this._fetchType=t(`node-fetch`):this._fetchType=fetch,this._fetchType=t(`fetch-cookie`)(this._fetchType,this._jar)}else this._fetchType=fetch.bind(Ce$1());if(typeof AbortController>`u`){let t=typeof __webpack_require__==`function`?__non_webpack_require__:V_;this._abortControllerType=t(`abort-controller`)}else this._abortControllerType=AbortController}send(e){return Mt(this,null,function*(){if(e.abortSignal&&e.abortSignal.aborted)throw new S;if(!e.method)throw new Error(`No method defined.`);if(!e.url)throw new Error(`No url defined.`);let t=new this._abortControllerType,n;e.abortSignal&&(e.abortSignal.onabort=()=>{t.abort(),n=new S});let o=null;if(e.timeout){let l=e.timeout;o=setTimeout(()=>{t.abort(),this._logger.log(i.Warning,`Timeout from HTTP request.`),n=new P$1},l)}e.content===``&&(e.content=void 0),e.content&&(e.headers=e.headers||{},v(e.content)?e.headers[`Content-Type`]=`application/octet-stream`:e.headers[`Content-Type`]=`text/plain;charset=UTF-8`);let s;try{s=yield this._fetchType(e.url,{body:e.content,cache:`no-cache`,credentials:e.withCredentials===!0?`include`:`same-origin`,headers:G$3({"X-Requested-With":`XMLHttpRequest`},e.headers),method:e.method,mode:`cors`,redirect:`follow`,signal:t.signal})}catch(l){throw n||(this._logger.log(i.Warning,`Error from HTTP request. ${l}.`),l)}finally{o&&clearTimeout(o),e.abortSignal&&(e.abortSignal.onabort=null)}if(!s.ok)throw new C$2((yield ye$2(s,`text`))||s.statusText,s.status);let a=yield ye$2(s,e.responseType);return new H(s.status,s.statusText,a)})}getCookieString(e){let t=``;return p$1.isNode&&this._jar&&this._jar.getCookies(e,(n,o)=>t=o.join(`; `)),t}};function ye$2(r,e){let t;switch(e){case`arraybuffer`:t=r.arrayBuffer();break;case`text`:t=r.text();break;case`blob`:case`document`:case`json`:throw new Error(`${e} is not supported.`);default:t=r.text();break}return t}var Z$2=class extends k{constructor(e){super(),this._logger=e}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new S):e.method?e.url?new Promise((t,n)=>{let o=new XMLHttpRequest;o.open(e.method,e.url,!0),o.withCredentials=e.withCredentials===void 0?!0:e.withCredentials,o.setRequestHeader(`X-Requested-With`,`XMLHttpRequest`),e.content===``&&(e.content=void 0),e.content&&(v(e.content)?o.setRequestHeader(`Content-Type`,`application/octet-stream`):o.setRequestHeader(`Content-Type`,`text/plain;charset=UTF-8`));let s=e.headers;s&&Object.keys(s).forEach(c=>{o.setRequestHeader(c,s[c])}),e.responseType&&(o.responseType=e.responseType),e.abortSignal&&(e.abortSignal.onabort=()=>{o.abort(),n(new S)}),e.timeout&&(o.timeout=e.timeout),o.onload=()=>{e.abortSignal&&(e.abortSignal.onabort=null),o.status>=200&&o.status<300?t(new H(o.status,o.statusText,o.response||o.responseText)):n(new C$2(o.response||o.responseText||o.statusText,o.status))},o.onerror=()=>{this._logger.log(i.Warning,`Error from HTTP request. ${o.status}: ${o.statusText}.`),n(new C$2(o.statusText,o.status))},o.ontimeout=()=>{this._logger.log(i.Warning,`Timeout from HTTP request.`),n(new P$1)},o.send(e.content)}):Promise.reject(new Error(`No url defined.`)):Promise.reject(new Error(`No method defined.`))}};var ee=class extends k{constructor(e){if(super(),typeof fetch<`u`||p$1.isNode)this._httpClient=new Q(e);else if(typeof XMLHttpRequest<`u`)this._httpClient=new Z$2(e);else throw new Error(`No usable HttpClient found.`)}send(e){return e.abortSignal&&e.abortSignal.aborted?Promise.reject(new S):e.method?e.url?this._httpClient.send(e):Promise.reject(new Error(`No url defined.`)):Promise.reject(new Error(`No method defined.`))}getCookieString(e){return this._httpClient.getCookieString(e)}};var y$1=class r{static write(e){return`${e}${r.RecordSeparator}`}static parse(e){if(e[e.length-1]!==r.RecordSeparator)throw new Error(`Message is incomplete.`);let t=e.split(r.RecordSeparator);return t.pop(),t}};y$1.RecordSeparatorCode=30;y$1.RecordSeparator=String.fromCharCode(y$1.RecordSeparatorCode);var te$1=class{writeHandshakeRequest(e){return y$1.write(JSON.stringify(e))}parseHandshakeResponse(e){let t,n;if(v(e)){let a=new Uint8Array(e),l=a.indexOf(y$1.RecordSeparatorCode);if(l===-1)throw new Error(`Message is incomplete.`);let u=l+1;t=String.fromCharCode.apply(null,Array.prototype.slice.call(a.slice(0,u))),n=a.byteLength>u?a.slice(u).buffer:null}else{let a=e,l=a.indexOf(y$1.RecordSeparator);if(l===-1)throw new Error(`Message is incomplete.`);let u=l+1;t=a.substring(0,u),n=a.length>u?a.substring(u):null}let o=y$1.parse(t),s=JSON.parse(o[0]);if(s.type)throw new Error(`Expected a handshake response from the server.`);return[n,s]}};var h=(function(r){return r[r.Invocation=1]=`Invocation`,r[r.StreamItem=2]=`StreamItem`,r[r.Completion=3]=`Completion`,r[r.StreamInvocation=4]=`StreamInvocation`,r[r.CancelInvocation=5]=`CancelInvocation`,r[r.Ping=6]=`Ping`,r[r.Close=7]=`Close`,r[r.Ack=8]=`Ack`,r[r.Sequence=9]=`Sequence`,r})(h||{});var ne$1=class{constructor(){this.observers=[]}next(e){for(let t of this.observers)t.next(e)}error(e){for(let t of this.observers)t.error&&t.error(e)}complete(){for(let e of this.observers)e.complete&&e.complete()}subscribe(e){return this.observers.push(e),new J(this,e)}};var oe$1=class{constructor(e,t,n){this._bufferSize=1e5,this._messages=[],this._totalMessageCount=0,this._waitForSequenceMessage=!1,this._nextReceivingSequenceId=1,this._latestReceivedSequenceId=0,this._bufferedByteCount=0,this._reconnectInProgress=!1,this._protocol=e,this._connection=t,this._bufferSize=n}_send(e){return Mt(this,null,function*(){let t=this._protocol.writeMessage(e),n=Promise.resolve();if(this._isInvocationMessage(e)){this._totalMessageCount++;let o=()=>{},s=()=>{};v(t)?this._bufferedByteCount+=t.byteLength:this._bufferedByteCount+=t.length,this._bufferedByteCount>=this._bufferSize&&(n=new Promise((c,a)=>{o=c,s=a})),this._messages.push(new ge$2(t,this._totalMessageCount,o,s))}try{this._reconnectInProgress||(yield this._connection.send(t))}catch(o){this._disconnected()}yield n})}_ack(e){let t=-1;for(let n=0;n<this._messages.length;n++){let o=this._messages[n];if(o._id<=e.sequenceId)t=n,v(o._message)?this._bufferedByteCount-=o._message.byteLength:this._bufferedByteCount-=o._message.length,o._resolver();else if(this._bufferedByteCount<this._bufferSize)o._resolver();else break}t!==-1&&(this._messages=this._messages.slice(t+1))}_shouldProcessMessage(e){if(this._waitForSequenceMessage)return e.type!==h.Sequence?!1:(this._waitForSequenceMessage=!1,!0);if(!this._isInvocationMessage(e))return!0;let t=this._nextReceivingSequenceId;return this._nextReceivingSequenceId++,t<=this._latestReceivedSequenceId?(t===this._latestReceivedSequenceId&&this._ackTimer(),!1):(this._latestReceivedSequenceId=t,this._ackTimer(),!0)}_resetSequence(e){if(e.sequenceId>this._nextReceivingSequenceId){this._connection.stop(new Error(`Sequence ID greater than amount of messages we've received.`));return}this._nextReceivingSequenceId=e.sequenceId}_disconnected(){this._reconnectInProgress=!0,this._waitForSequenceMessage=!0}_resend(){return Mt(this,null,function*(){let e=this._messages.length!==0?this._messages[0]._id:this._totalMessageCount+1;yield this._connection.send(this._protocol.writeMessage({type:h.Sequence,sequenceId:e}));let t=this._messages;for(let n of t)yield this._connection.send(n._message);this._reconnectInProgress=!1})}_dispose(e){e??(e=new Error(`Unable to reconnect to server.`));for(let t of this._messages)t._rejector(e)}_isInvocationMessage(e){switch(e.type){case h.Invocation:case h.StreamItem:case h.Completion:case h.StreamInvocation:case h.CancelInvocation:return!0;case h.Close:case h.Sequence:case h.Ping:case h.Ack:return!1}}_ackTimer(){this._ackTimerHandle===void 0&&(this._ackTimerHandle=setTimeout(()=>Mt(this,null,function*(){try{this._reconnectInProgress||(yield this._connection.send(this._protocol.writeMessage({type:h.Ack,sequenceId:this._latestReceivedSequenceId})))}catch(e){}clearTimeout(this._ackTimerHandle),this._ackTimerHandle=void 0}),1e3))}};var ge$2=class{constructor(e,t,n,o){this._message=e,this._id=t,this._resolver=n,this._rejector=o}};var Re$1=30*1e3;var De=15*1e3;var $e$1=1e5;var _$2=(function(r){return r.Disconnected=`Disconnected`,r.Connecting=`Connecting`,r.Connected=`Connected`,r.Disconnecting=`Disconnecting`,r.Reconnecting=`Reconnecting`,r})(_$2||{});var N=class r{static create(e,t,n,o,s,c,a){return new r(e,t,n,o,s,c,a)}constructor(e,t,n,o,s,c,a){this._nextKeepAlive=0,this._freezeEventListener=()=>{this._logger.log(i.Warning,`The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep`)},f$2.isRequired(e,`connection`),f$2.isRequired(t,`logger`),f$2.isRequired(n,`protocol`),this.serverTimeoutInMilliseconds=s??Re$1,this.keepAliveIntervalInMilliseconds=c??De,this._statefulReconnectBufferSize=a??$e$1,this._logger=t,this._protocol=n,this.connection=e,this._reconnectPolicy=o,this._handshakeProtocol=new te$1,this.connection.onreceive=l=>this._processIncomingData(l),this.connection.onclose=l=>this._connectionClosed(l),this._callbacks={},this._methods={},this._closedCallbacks=[],this._reconnectingCallbacks=[],this._reconnectedCallbacks=[],this._invocationId=0,this._receivedHandshakeResponse=!1,this._connectionState=_$2.Disconnected,this._connectionStarted=!1,this._cachedPingMessage=this._protocol.writeMessage({type:h.Ping})}get state(){return this._connectionState}get connectionId(){return this.connection&&this.connection.connectionId||null}get baseUrl(){return this.connection.baseUrl||``}set baseUrl(e){if(this._connectionState!==_$2.Disconnected&&this._connectionState!==_$2.Reconnecting)throw new Error(`The HubConnection must be in the Disconnected or Reconnecting state to change the url.`);if(!e)throw new Error(`The HubConnection url must be a valid url.`);this.connection.baseUrl=e}start(){return this._startPromise=this._startWithStateTransitions(),this._startPromise}_startWithStateTransitions(){return Mt(this,null,function*(){if(this._connectionState!==_$2.Disconnected)return Promise.reject(new Error(`Cannot start a HubConnection that is not in the 'Disconnected' state.`));this._connectionState=_$2.Connecting,this._logger.log(i.Debug,`Starting HubConnection.`);try{yield this._startInternal(),p$1.isBrowser&&window.document.addEventListener(`freeze`,this._freezeEventListener),this._connectionState=_$2.Connected,this._connectionStarted=!0,this._logger.log(i.Debug,`HubConnection connected successfully.`)}catch(e){return this._connectionState=_$2.Disconnected,this._logger.log(i.Debug,`HubConnection failed to start successfully because of error '${e}'.`),Promise.reject(e)}})}_startInternal(){return Mt(this,null,function*(){this._stopDuringStartError=void 0,this._receivedHandshakeResponse=!1;let e=new Promise((t,n)=>{this._handshakeResolver=t,this._handshakeRejecter=n});yield this.connection.start(this._protocol.transferFormat);try{let t=this._protocol.version;this.connection.features.reconnect||(t=1);let n={protocol:this._protocol.name,version:t};if(this._logger.log(i.Debug,`Sending handshake request.`),yield this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)),this._logger.log(i.Information,`Using HubProtocol '${this._protocol.name}'.`),this._cleanupTimeout(),this._resetTimeoutPeriod(),this._resetKeepAliveInterval(),yield e,this._stopDuringStartError)throw this._stopDuringStartError;this.connection.features.reconnect&&(this._messageBuffer=new oe$1(this._protocol,this.connection,this._statefulReconnectBufferSize),this.connection.features.disconnected=this._messageBuffer._disconnected.bind(this._messageBuffer),this.connection.features.resend=()=>{if(this._messageBuffer)return this._messageBuffer._resend()}),this.connection.features.inherentKeepAlive||(yield this._sendMessage(this._cachedPingMessage))}catch(t){throw this._logger.log(i.Debug,`Hub handshake failed with error '${t}' during start(). Stopping HubConnection.`),this._cleanupTimeout(),this._cleanupPingTimer(),yield this.connection.stop(t),t}})}stop(){return Mt(this,null,function*(){let e=this._startPromise;this.connection.features.reconnect=!1,this._stopPromise=this._stopInternal(),yield this._stopPromise;try{yield e}catch(t){}})}_stopInternal(e){if(this._connectionState===_$2.Disconnected)return this._logger.log(i.Debug,`Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`),Promise.resolve();if(this._connectionState===_$2.Disconnecting)return this._logger.log(i.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;let t=this._connectionState;return this._connectionState=_$2.Disconnecting,this._logger.log(i.Debug,`Stopping HubConnection.`),this._reconnectDelayHandle?(this._logger.log(i.Debug,`Connection stopped during reconnect delay. Done reconnecting.`),clearTimeout(this._reconnectDelayHandle),this._reconnectDelayHandle=void 0,this._completeClose(),Promise.resolve()):(t===_$2.Connected&&this._sendCloseMessage(),this._cleanupTimeout(),this._cleanupPingTimer(),this._stopDuringStartError=e||new S(`The connection was stopped before the hub handshake could complete.`),this.connection.stop(e))}_sendCloseMessage(){return Mt(this,null,function*(){try{yield this._sendWithProtocol(this._createCloseMessage())}catch(e){}})}stream(e,...t){let[n,o]=this._replaceStreamingParams(t),s=this._createStreamInvocation(e,t,o),c,a=new ne$1;return a.cancelCallback=()=>{let l=this._createCancelInvocation(s.invocationId);return delete this._callbacks[s.invocationId],c.then(()=>this._sendWithProtocol(l))},this._callbacks[s.invocationId]=(l,u)=>{if(u){a.error(u);return}else l&&(l.type===h.Completion?l.error?a.error(new Error(l.error)):a.complete():a.next(l.item))},c=this._sendWithProtocol(s).catch(l=>{a.error(l),delete this._callbacks[s.invocationId]}),this._launchStreams(n,c),a}_sendMessage(e){return this._resetKeepAliveInterval(),this.connection.send(e)}_sendWithProtocol(e){return this._messageBuffer?this._messageBuffer._send(e):this._sendMessage(this._protocol.writeMessage(e))}send(e,...t){let[n,o]=this._replaceStreamingParams(t),s=this._sendWithProtocol(this._createInvocation(e,t,!0,o));return this._launchStreams(n,s),s}invoke(e,...t){let[n,o]=this._replaceStreamingParams(t),s=this._createInvocation(e,t,!1,o);return new Promise((a,l)=>{this._callbacks[s.invocationId]=(d,T)=>{if(T){l(T);return}else d&&(d.type===h.Completion?d.error?l(new Error(d.error)):a(d.result):l(new Error(`Unexpected message type: ${d.type}`)))};let u=this._sendWithProtocol(s).catch(d=>{l(d),delete this._callbacks[s.invocationId]});this._launchStreams(n,u)})}on(e,t){!e||!t||(e=e.toLowerCase(),this._methods[e]||(this._methods[e]=[]),this._methods[e].indexOf(t)===-1&&this._methods[e].push(t))}off(e,t){if(!e)return;e=e.toLowerCase();let n=this._methods[e];if(n)if(t){let o=n.indexOf(t);o!==-1&&(n.splice(o,1),n.length===0&&delete this._methods[e])}else delete this._methods[e]}onclose(e){e&&this._closedCallbacks.push(e)}onreconnecting(e){e&&this._reconnectingCallbacks.push(e)}onreconnected(e){e&&this._reconnectedCallbacks.push(e)}_processIncomingData(e){if(this._cleanupTimeout(),this._receivedHandshakeResponse||(e=this._processHandshakeResponse(e),this._receivedHandshakeResponse=!0),e){let t=this._protocol.parseMessages(e,this._logger);for(let n of t)if(!(this._messageBuffer&&!this._messageBuffer._shouldProcessMessage(n)))switch(n.type){case h.Invocation:this._invokeClientMethod(n).catch(o=>{this._logger.log(i.Error,`Invoke client method threw error: ${Y$1(o)}`)});break;case h.StreamItem:case h.Completion:{let o=this._callbacks[n.invocationId];if(o){n.type===h.Completion&&delete this._callbacks[n.invocationId];try{o(n)}catch(s){this._logger.log(i.Error,`Stream callback threw error: ${Y$1(s)}`)}}break}case h.Ping:break;case h.Close:{this._logger.log(i.Information,`Close message received from server.`);let o=n.error?new Error(`Server returned an error on close: `+n.error):void 0;n.allowReconnect===!0?this.connection.stop(o):this._stopPromise=this._stopInternal(o);break}case h.Ack:this._messageBuffer&&this._messageBuffer._ack(n);break;case h.Sequence:this._messageBuffer&&this._messageBuffer._resetSequence(n);break;default:this._logger.log(i.Warning,`Invalid message type: ${n.type}.`);break}}this._resetTimeoutPeriod()}_processHandshakeResponse(e){let t,n;try{[n,t]=this._handshakeProtocol.parseHandshakeResponse(e)}catch(o){let s=`Error parsing handshake response: `+o;this._logger.log(i.Error,s);let c=new Error(s);throw this._handshakeRejecter(c),c}if(t.error){let o=`Server returned handshake error: `+t.error;this._logger.log(i.Error,o);let s=new Error(o);throw this._handshakeRejecter(s),s}else this._logger.log(i.Debug,`Server handshake complete.`);return this._handshakeResolver(),n}_resetKeepAliveInterval(){this.connection.features.inherentKeepAlive||(this._nextKeepAlive=new Date().getTime()+this.keepAliveIntervalInMilliseconds,this._cleanupPingTimer())}_resetTimeoutPeriod(){if(!this.connection.features||!this.connection.features.inherentKeepAlive){this._timeoutHandle=setTimeout(()=>this.serverTimeout(),this.serverTimeoutInMilliseconds);let e=this._nextKeepAlive-new Date().getTime();if(e<0){this._connectionState===_$2.Connected&&this._trySendPingMessage();return}this._pingServerHandle===void 0&&(e<0&&(e=0),this._pingServerHandle=setTimeout(()=>Mt(this,null,function*(){this._connectionState===_$2.Connected&&(yield this._trySendPingMessage())}),e))}}serverTimeout(){this.connection.stop(new Error(`Server timeout elapsed without receiving a message from the server.`))}_invokeClientMethod(e){return Mt(this,null,function*(){let t=e.target.toLowerCase(),n=this._methods[t];if(!n){this._logger.log(i.Warning,`No client method with the name '${t}' found.`),e.invocationId&&(this._logger.log(i.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),yield this._sendWithProtocol(this._createCompletionMessage(e.invocationId,`Client didn't provide a result.`,null)));return}let o=n.slice(),s=!!e.invocationId,c,a,l;for(let u of o)try{let d=c;c=yield u.apply(this,e.arguments),s&&c&&d&&(this._logger.log(i.Error,`Multiple results provided for '${t}'. Sending error to server.`),l=this._createCompletionMessage(e.invocationId,`Client provided multiple results.`,null)),a=void 0}catch(d){a=d,this._logger.log(i.Error,`A callback for the method '${t}' threw error '${d}'.`)}l?yield this._sendWithProtocol(l):s?(a?l=this._createCompletionMessage(e.invocationId,`${a}`,null):c!==void 0?l=this._createCompletionMessage(e.invocationId,null,c):(this._logger.log(i.Warning,`No result given for '${t}' method and invocation ID '${e.invocationId}'.`),l=this._createCompletionMessage(e.invocationId,`Client didn't provide a result.`,null)),yield this._sendWithProtocol(l)):c&&this._logger.log(i.Error,`Result given for '${t}' method but server is not expecting a result.`)})}_connectionClosed(e){this._logger.log(i.Debug,`HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`),this._stopDuringStartError=this._stopDuringStartError||e||new S(`The underlying connection was closed before the hub handshake could complete.`),this._handshakeResolver&&this._handshakeResolver(),this._cancelCallbacksWithError(e||new Error(`Invocation canceled due to the underlying connection being closed.`)),this._cleanupTimeout(),this._cleanupPingTimer(),this._connectionState===_$2.Disconnecting?this._completeClose(e):this._connectionState===_$2.Connected&&this._reconnectPolicy?this._reconnect(e):this._connectionState===_$2.Connected&&this._completeClose(e)}_completeClose(e){if(this._connectionStarted){this._connectionState=_$2.Disconnected,this._connectionStarted=!1,this._messageBuffer&&(this._messageBuffer._dispose(e??new Error(`Connection closed.`)),this._messageBuffer=void 0),p$1.isBrowser&&window.document.removeEventListener(`freeze`,this._freezeEventListener);try{this._closedCallbacks.forEach(t=>t.apply(this,[e]))}catch(t){this._logger.log(i.Error,`An onclose callback called with error '${e}' threw error '${t}'.`)}}}_reconnect(e){return Mt(this,null,function*(){let t=Date.now(),n=0,o=e!==void 0?e:new Error(`Attempting to reconnect due to a unknown error.`),s=this._getNextRetryDelay(n,0,o);if(s===null){this._logger.log(i.Debug,`Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.`),this._completeClose(e);return}if(this._connectionState=_$2.Reconnecting,e?this._logger.log(i.Information,`Connection reconnecting because of error '${e}'.`):this._logger.log(i.Information,`Connection reconnecting.`),this._reconnectingCallbacks.length!==0){try{this._reconnectingCallbacks.forEach(c=>c.apply(this,[e]))}catch(c){this._logger.log(i.Error,`An onreconnecting callback called with error '${e}' threw error '${c}'.`)}if(this._connectionState!==_$2.Reconnecting){this._logger.log(i.Debug,`Connection left the reconnecting state in onreconnecting callback. Done reconnecting.`);return}}for(;s!==null;){if(this._logger.log(i.Information,`Reconnect attempt number ${n+1} will start in ${s} ms.`),yield new Promise(c=>{this._reconnectDelayHandle=setTimeout(c,s)}),this._reconnectDelayHandle=void 0,this._connectionState!==_$2.Reconnecting){this._logger.log(i.Debug,`Connection left the reconnecting state during reconnect delay. Done reconnecting.`);return}try{if(yield this._startInternal(),this._connectionState=_$2.Connected,this._logger.log(i.Information,`HubConnection reconnected successfully.`),this._reconnectedCallbacks.length!==0)try{this._reconnectedCallbacks.forEach(c=>c.apply(this,[this.connection.connectionId]))}catch(c){this._logger.log(i.Error,`An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${c}'.`)}return}catch(c){if(this._logger.log(i.Information,`Reconnect attempt failed because of error '${c}'.`),this._connectionState!==_$2.Reconnecting){this._logger.log(i.Debug,`Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),this._connectionState===_$2.Disconnecting&&this._completeClose();return}n++,o=c instanceof Error?c:new Error(c.toString()),s=this._getNextRetryDelay(n,Date.now()-t,o)}}this._logger.log(i.Information,`Reconnect retries have been exhausted after ${Date.now()-t} ms and ${n} failed attempts. Connection disconnecting.`),this._completeClose()})}_getNextRetryDelay(e,t,n){try{return this._reconnectPolicy.nextRetryDelayInMilliseconds({elapsedMilliseconds:t,previousRetryCount:e,retryReason:n})}catch(o){return this._logger.log(i.Error,`IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${o}'.`),null}}_cancelCallbacksWithError(e){let t=this._callbacks;this._callbacks={},Object.keys(t).forEach(n=>{let o=t[n];try{o(null,e)}catch(s){this._logger.log(i.Error,`Stream 'error' callback called with '${e}' threw error: ${Y$1(s)}`)}})}_cleanupPingTimer(){this._pingServerHandle&&(clearTimeout(this._pingServerHandle),this._pingServerHandle=void 0)}_cleanupTimeout(){this._timeoutHandle&&clearTimeout(this._timeoutHandle)}_createInvocation(e,t,n,o){if(n)return o.length!==0?{target:e,arguments:t,streamIds:o,type:h.Invocation}:{target:e,arguments:t,type:h.Invocation};{let s=this._invocationId;return this._invocationId++,o.length!==0?{target:e,arguments:t,invocationId:s.toString(),streamIds:o,type:h.Invocation}:{target:e,arguments:t,invocationId:s.toString(),type:h.Invocation}}}_launchStreams(e,t){if(e.length!==0){t||(t=Promise.resolve());for(let n in e)e[n].subscribe({complete:()=>{t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n)))},error:o=>{let s;o instanceof Error?s=o.message:o&&o.toString?s=o.toString():s=`Unknown error`,t=t.then(()=>this._sendWithProtocol(this._createCompletionMessage(n,s)))},next:o=>{t=t.then(()=>this._sendWithProtocol(this._createStreamItemMessage(n,o)))}})}}_replaceStreamingParams(e){let t=[],n=[];for(let o=0;o<e.length;o++){let s=e[o];if(this._isObservable(s)){let c=this._invocationId;this._invocationId++,t[c]=s,n.push(c.toString()),e.splice(o,1)}}return[t,n]}_isObservable(e){return e&&e.subscribe&&typeof e.subscribe==`function`}_createStreamInvocation(e,t,n){let o=this._invocationId;return this._invocationId++,n.length!==0?{target:e,arguments:t,invocationId:o.toString(),streamIds:n,type:h.StreamInvocation}:{target:e,arguments:t,invocationId:o.toString(),type:h.StreamInvocation}}_createCancelInvocation(e){return{invocationId:e,type:h.CancelInvocation}}_createStreamItemMessage(e,t){return{invocationId:e,item:t,type:h.StreamItem}}_createCompletionMessage(e,t,n){return t?{error:t,invocationId:e,type:h.Completion}:{invocationId:e,result:n,type:h.Completion}}_createCloseMessage(){return{type:h.Close}}_trySendPingMessage(){return Mt(this,null,function*(){try{yield this._sendMessage(this._cachedPingMessage)}catch(e){this._cleanupPingTimer()}})}};var Ae=[0,2e3,1e4,3e4,null];var L=class{constructor(e){this._retryDelays=e!==void 0?[...e,null]:Ae}nextRetryDelayInMilliseconds(e){return this._retryDelays[e.previousRetryCount]}};var D=(()=>{class r{}return r.Authorization=`Authorization`,r.Cookie=`Cookie`,r})();var re$1=class extends k{constructor(e,t){super(),this._innerClient=e,this._accessTokenFactory=t}send(e){return Mt(this,null,function*(){let t=!0;this._accessTokenFactory&&(!this._accessToken||e.url&&e.url.indexOf(`/negotiate?`)>0)&&(t=!1,this._accessToken=yield this._accessTokenFactory()),this._setAuthorizationHeader(e);let n=yield this._innerClient.send(e);return t&&n.statusCode===401&&this._accessTokenFactory?(this._accessToken=yield this._accessTokenFactory(),this._setAuthorizationHeader(e),yield this._innerClient.send(e)):n})}_setAuthorizationHeader(e){e.headers||(e.headers={}),this._accessToken?e.headers[D.Authorization]=`Bearer ${this._accessToken}`:this._accessTokenFactory&&e.headers[D.Authorization]&&delete e.headers[D.Authorization]}getCookieString(e){return this._innerClient.getCookieString(e)}};var b=(function(r){return r[r.None=0]=`None`,r[r.WebSockets=1]=`WebSockets`,r[r.ServerSentEvents=2]=`ServerSentEvents`,r[r.LongPolling=4]=`LongPolling`,r})(b||{});var w$3=(function(r){return r[r.Text=1]=`Text`,r[r.Binary=2]=`Binary`,r})(w$3||{});var se$1=class{constructor(){this._isAborted=!1,this.onabort=null}abort(){this._isAborted||(this._isAborted=!0,this.onabort&&this.onabort())}get signal(){return this}get aborted(){return this._isAborted}};var W=class{get pollAborted(){return this._pollAbort.aborted}constructor(e,t,n){this._httpClient=e,this._logger=t,this._pollAbort=new se$1,this._options=n,this._running=!1,this.onreceive=null,this.onclose=null}connect(e,t){return Mt(this,null,function*(){if(f$2.isRequired(e,`url`),f$2.isRequired(t,`transferFormat`),f$2.isIn(t,w$3,`transferFormat`),this._url=e,this._logger.log(i.Trace,`(LongPolling transport) Connecting.`),t===w$3.Binary&&typeof XMLHttpRequest<`u`&&typeof new XMLHttpRequest().responseType!=`string`)throw new Error(`Binary protocols over XmlHttpRequest not implementing advanced features are not supported.`);let[n,o]=I$1(),s=G$3({[n]:o},this._options.headers),c={abortSignal:this._pollAbort.signal,headers:s,timeout:1e5,withCredentials:this._options.withCredentials};t===w$3.Binary&&(c.responseType=`arraybuffer`);let a=`${e}&_=${Date.now()}`;this._logger.log(i.Trace,`(LongPolling transport) polling: ${a}.`);let l=yield this._httpClient.get(a,c);l.statusCode!==200?(this._logger.log(i.Error,`(LongPolling transport) Unexpected response code: ${l.statusCode}.`),this._closeError=new C$2(l.statusText||``,l.statusCode),this._running=!1):this._running=!0,this._receiving=this._poll(this._url,c)})}_poll(e,t){return Mt(this,null,function*(){try{for(;this._running;)try{let n=`${e}&_=${Date.now()}`;this._logger.log(i.Trace,`(LongPolling transport) polling: ${n}.`);let o=yield this._httpClient.get(n,t);o.statusCode===204?(this._logger.log(i.Information,`(LongPolling transport) Poll terminated by server.`),this._running=!1):o.statusCode!==200?(this._logger.log(i.Error,`(LongPolling transport) Unexpected response code: ${o.statusCode}.`),this._closeError=new C$2(o.statusText||``,o.statusCode),this._running=!1):o.content?(this._logger.log(i.Trace,`(LongPolling transport) data received. ${x(o.content,this._options.logMessageContent)}.`),this.onreceive&&this.onreceive(o.content)):this._logger.log(i.Trace,`(LongPolling transport) Poll timed out, reissuing.`)}catch(n){this._running?n instanceof P$1?this._logger.log(i.Trace,`(LongPolling transport) Poll timed out, reissuing.`):(this._closeError=n,this._running=!1):this._logger.log(i.Trace,`(LongPolling transport) Poll errored after shutdown: ${n.message}`)}}finally{this._logger.log(i.Trace,`(LongPolling transport) Polling complete.`),this.pollAborted||this._raiseOnClose()}})}send(e){return Mt(this,null,function*(){return this._running?G$1(this._logger,`LongPolling`,this._httpClient,this._url,e,this._options):Promise.reject(new Error(`Cannot send until the transport is connected`))})}stop(){return Mt(this,null,function*(){this._logger.log(i.Trace,`(LongPolling transport) Stopping polling.`),this._running=!1,this._pollAbort.abort();try{yield this._receiving,this._logger.log(i.Trace,`(LongPolling transport) sending DELETE request to ${this._url}.`);let e={},[t,n]=I$1();e[t]=n;let o={headers:G$3(G$3({},e),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials},s;try{yield this._httpClient.delete(this._url,o)}catch(c){s=c}s?s instanceof C$2&&(s.statusCode===404?this._logger.log(i.Trace,`(LongPolling transport) A 404 response was returned from sending a DELETE request.`):this._logger.log(i.Trace,`(LongPolling transport) Error sending a DELETE request: ${s}`)):this._logger.log(i.Trace,`(LongPolling transport) DELETE request accepted.`)}finally{this._logger.log(i.Trace,`(LongPolling transport) Stop finished.`),this._raiseOnClose()}})}_raiseOnClose(){if(this.onclose){let e=`(LongPolling transport) Firing onclose event.`;this._closeError&&(e+=` Error: `+this._closeError),this._logger.log(i.Trace,e),this.onclose(this._closeError)}}};var ie$1=class{constructor(e,t,n,o){this._httpClient=e,this._accessToken=t,this._logger=n,this._options=o,this.onreceive=null,this.onclose=null}connect(e,t){return Mt(this,null,function*(){return f$2.isRequired(e,`url`),f$2.isRequired(t,`transferFormat`),f$2.isIn(t,w$3,`transferFormat`),this._logger.log(i.Trace,`(SSE transport) Connecting.`),this._url=e,this._accessToken&&(e+=(e.indexOf(`?`)<0?`?`:`&`)+`access_token=${encodeURIComponent(this._accessToken)}`),new Promise((n,o)=>{let s=!1;if(t!==w$3.Text){o(new Error(`The Server-Sent Events transport only supports the 'Text' transfer format`));return}let c;if(p$1.isBrowser||p$1.isWebWorker)c=new this._options.EventSource(e,{withCredentials:this._options.withCredentials});else{let a=this._httpClient.getCookieString(e),l={};l.Cookie=a;let[u,d]=I$1();l[u]=d,c=new this._options.EventSource(e,{withCredentials:this._options.withCredentials,headers:G$3(G$3({},l),this._options.headers)})}try{c.onmessage=a=>{if(this.onreceive)try{this._logger.log(i.Trace,`(SSE transport) data received. ${x(a.data,this._options.logMessageContent)}.`),this.onreceive(a.data)}catch(l){this._close(l);return}},c.onerror=a=>{s?this._close():o(new Error(`EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled.`))},c.onopen=()=>{this._logger.log(i.Information,`SSE connected to ${this._url}`),this._eventSource=c,s=!0,n()}}catch(a){o(a);return}})})}send(e){return Mt(this,null,function*(){return this._eventSource?G$1(this._logger,`SSE`,this._httpClient,this._url,e,this._options):Promise.reject(new Error(`Cannot send until the transport is connected`))})}stop(){return this._close(),Promise.resolve()}_close(e){this._eventSource&&(this._eventSource.close(),this._eventSource=void 0,this.onclose&&this.onclose(e))}};var ce$2=class{constructor(e,t,n,o,s,c){this._logger=n,this._accessTokenFactory=t,this._logMessageContent=o,this._webSocketConstructor=s,this._httpClient=e,this.onreceive=null,this.onclose=null,this._headers=c}connect(e,t){return Mt(this,null,function*(){f$2.isRequired(e,`url`),f$2.isRequired(t,`transferFormat`),f$2.isIn(t,w$3,`transferFormat`),this._logger.log(i.Trace,`(WebSockets transport) Connecting.`);let n;return this._accessTokenFactory&&(n=yield this._accessTokenFactory()),new Promise((o,s)=>{e=e.replace(/^http/,`ws`);let c,a=this._httpClient.getCookieString(e),l=!1;if(p$1.isNode||p$1.isReactNative){let u={},[d,T]=I$1();u[d]=T,n&&(u[D.Authorization]=`Bearer ${n}`),a&&(u[D.Cookie]=a),c=new this._webSocketConstructor(e,void 0,{headers:G$3(G$3({},u),this._headers)})}else n&&(e+=(e.indexOf(`?`)<0?`?`:`&`)+`access_token=${encodeURIComponent(n)}`);c||(c=new this._webSocketConstructor(e)),t===w$3.Binary&&(c.binaryType=`arraybuffer`),c.onopen=u=>{this._logger.log(i.Information,`WebSocket connected to ${e}.`),this._webSocket=c,l=!0,o()},c.onerror=u=>{let d=null;typeof ErrorEvent<`u`&&u instanceof ErrorEvent?d=u.error:d=`There was an error with the transport`,this._logger.log(i.Information,`(WebSockets transport) ${d}.`)},c.onmessage=u=>{if(this._logger.log(i.Trace,`(WebSockets transport) data received. ${x(u.data,this._logMessageContent)}.`),this.onreceive)try{this.onreceive(u.data)}catch(d){this._close(d);return}},c.onclose=u=>{if(l)this._close(u);else{let d=null;typeof ErrorEvent<`u`&&u instanceof ErrorEvent?d=u.error:d=`WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.`,s(new Error(d))}}})})}send(e){return this._webSocket&&this._webSocket.readyState===this._webSocketConstructor.OPEN?(this._logger.log(i.Trace,`(WebSockets transport) sending data. ${x(e,this._logMessageContent)}.`),this._webSocket.send(e),Promise.resolve()):Promise.reject(`WebSocket is not in the OPEN state`)}stop(){return this._webSocket&&this._close(void 0),Promise.resolve()}_close(e){this._webSocket&&(this._webSocket.onclose=()=>{},this._webSocket.onmessage=()=>{},this._webSocket.onerror=()=>{},this._webSocket.close(),this._webSocket=void 0),this._logger.log(i.Trace,`(WebSockets transport) socket closed.`),this.onclose&&(this._isCloseEvent(e)&&(e.wasClean===!1||e.code!==1e3)?this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason||`no reason given`}).`)):e instanceof Error?this.onclose(e):this.onclose())}_isCloseEvent(e){return e&&typeof e.wasClean==`boolean`&&typeof e.code==`number`}};var ve$2=100;var ae$1=class{constructor(e,t={}){if(this._stopPromiseResolver=()=>{},this.features={},this._negotiateVersion=1,f$2.isRequired(e,`url`),this._logger=Se$1(t.logger),this.baseUrl=this._resolveUrl(e),t=t||{},t.logMessageContent=t.logMessageContent===void 0?!1:t.logMessageContent,typeof t.withCredentials==`boolean`||t.withCredentials===void 0)t.withCredentials=t.withCredentials===void 0?!0:t.withCredentials;else throw new Error(`withCredentials option was not a 'boolean' or 'undefined' value`);t.timeout=t.timeout===void 0?100*1e3:t.timeout;let n=null,o=null;if(p$1.isNode&&typeof V_<`u`){let s=typeof __webpack_require__==`function`?__non_webpack_require__:V_;n=s(`ws`),o=s(`eventsource`)}!p$1.isNode&&typeof WebSocket<`u`&&!t.WebSocket?t.WebSocket=WebSocket:p$1.isNode&&!t.WebSocket&&n&&(t.WebSocket=n),!p$1.isNode&&typeof EventSource<`u`&&!t.EventSource?t.EventSource=EventSource:p$1.isNode&&!t.EventSource&&typeof o<`u`&&(t.EventSource=o),this._httpClient=new re$1(t.httpClient||new ee(this._logger),t.accessTokenFactory),this._connectionState=`Disconnected`,this._connectionStarted=!1,this._options=t,this.onreceive=null,this.onclose=null}start(e){return Mt(this,null,function*(){if(e=e||w$3.Binary,f$2.isIn(e,w$3,`transferFormat`),this._logger.log(i.Debug,`Starting connection with transfer format '${w$3[e]}'.`),this._connectionState!==`Disconnected`)return Promise.reject(new Error(`Cannot start an HttpConnection that is not in the 'Disconnected' state.`));if(this._connectionState=`Connecting`,this._startInternalPromise=this._startInternal(e),yield this._startInternalPromise,this._connectionState===`Disconnecting`){let t=`Failed to start the HttpConnection before stop() was called.`;return this._logger.log(i.Error,t),yield this._stopPromise,Promise.reject(new S(t))}else if(this._connectionState!==`Connected`){let t=`HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!`;return this._logger.log(i.Error,t),Promise.reject(new S(t))}this._connectionStarted=!0})}send(e){return this._connectionState!==`Connected`?Promise.reject(new Error(`Cannot send data if the connection is not in the 'Connected' State.`)):(this._sendQueue||(this._sendQueue=new de$2(this.transport)),this._sendQueue.send(e))}stop(e){return Mt(this,null,function*(){if(this._connectionState===`Disconnected`)return this._logger.log(i.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`),Promise.resolve();if(this._connectionState===`Disconnecting`)return this._logger.log(i.Debug,`Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),this._stopPromise;this._connectionState=`Disconnecting`,this._stopPromise=new Promise(t=>{this._stopPromiseResolver=t}),yield this._stopInternal(e),yield this._stopPromise})}_stopInternal(e){return Mt(this,null,function*(){this._stopError=e;try{yield this._startInternalPromise}catch(t){}if(this.transport){try{yield this.transport.stop()}catch(t){this._logger.log(i.Error,`HttpConnection.transport.stop() threw error '${t}'.`),this._stopConnection()}this.transport=void 0}else this._logger.log(i.Debug,`HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.`)})}_startInternal(e){return Mt(this,null,function*(){let t=this.baseUrl;this._accessTokenFactory=this._options.accessTokenFactory,this._httpClient._accessTokenFactory=this._accessTokenFactory;try{if(this._options.skipNegotiation)if(this._options.transport===b.WebSockets)this.transport=this._constructTransport(b.WebSockets),yield this._startTransport(t,e);else throw new Error(`Negotiation can only be skipped when using the WebSocket transport directly.`);else{let n=null,o=0;do{if(n=yield this._getNegotiationResponse(t),this._connectionState===`Disconnecting`||this._connectionState===`Disconnected`)throw new S(`The connection was stopped during negotiation.`);if(n.error)throw new Error(n.error);if(n.ProtocolVersion)throw new Error(`Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.`);if(n.url&&(t=n.url),n.accessToken){let s=n.accessToken;this._accessTokenFactory=()=>s,this._httpClient._accessToken=s,this._httpClient._accessTokenFactory=void 0}o++}while(n.url&&o<ve$2);if(o===ve$2&&n.url)throw new Error(`Negotiate redirection limit exceeded.`);yield this._createTransport(t,this._options.transport,n,e)}this.transport instanceof W&&(this.features.inherentKeepAlive=!0),this._connectionState===`Connecting`&&(this._logger.log(i.Debug,`The HttpConnection connected successfully.`),this._connectionState=`Connected`)}catch(n){return this._logger.log(i.Error,`Failed to start the connection: `+n),this._connectionState=`Disconnected`,this.transport=void 0,this._stopPromiseResolver(),Promise.reject(n)}})}_getNegotiationResponse(e){return Mt(this,null,function*(){let t={},[n,o]=I$1();t[n]=o;let s=this._resolveNegotiateUrl(e);this._logger.log(i.Debug,`Sending negotiation request: ${s}.`);try{let c=yield this._httpClient.post(s,{content:``,headers:G$3(G$3({},t),this._options.headers),timeout:this._options.timeout,withCredentials:this._options.withCredentials});if(c.statusCode!==200)return Promise.reject(new Error(`Unexpected status code returned from negotiate '${c.statusCode}'`));let a=JSON.parse(c.content);return(!a.negotiateVersion||a.negotiateVersion<1)&&(a.connectionToken=a.connectionId),a.useStatefulReconnect&&this._options._useStatefulReconnect!==!0?Promise.reject(new U$1(`Client didn't negotiate Stateful Reconnect but the server did.`)):a}catch(c){let a=`Failed to complete negotiation with the server: `+c;return c instanceof C$2&&c.statusCode===404&&(a=a+` Either this is not a SignalR endpoint or there is a proxy blocking the connection.`),this._logger.log(i.Error,a),Promise.reject(new U$1(a))}})}_createConnectUrl(e,t){return t?e+(e.indexOf(`?`)===-1?`?`:`&`)+`id=${t}`:e}_createTransport(e,t,n,o){return Mt(this,null,function*(){let s=this._createConnectUrl(e,n.connectionToken);if(this._isITransport(t)){this._logger.log(i.Debug,`Connection was provided an instance of ITransport, using that directly.`),this.transport=t,yield this._startTransport(s,o),this.connectionId=n.connectionId;return}let c=[],a=n.availableTransports||[],l=n;for(let u of a){let d=this._resolveTransportOrError(u,t,o,l?.useStatefulReconnect===!0);if(d instanceof Error)c.push(`${u.transport} failed:`),c.push(d);else if(this._isITransport(d)){if(this.transport=d,!l){try{l=yield this._getNegotiationResponse(e)}catch(T){return Promise.reject(T)}s=this._createConnectUrl(e,l.connectionToken)}try{yield this._startTransport(s,o),this.connectionId=l.connectionId;return}catch(T){if(this._logger.log(i.Error,`Failed to start the transport '${u.transport}': ${T}`),l=void 0,c.push(new K$1(`${u.transport} failed: ${T}`,b[u.transport])),this._connectionState!==`Connecting`){let fe=`Failed to select transport before stop() was called.`;return this._logger.log(i.Debug,fe),Promise.reject(new S(fe))}}}}return c.length>0?Promise.reject(new X$1(`Unable to connect to the server with any of the available transports. ${c.join(` `)}`,c)):Promise.reject(new Error(`None of the transports supported by the client are supported by the server.`))})}_constructTransport(e){switch(e){case b.WebSockets:if(!this._options.WebSocket)throw new Error(`'WebSocket' is not supported in your environment.`);return new ce$2(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers||{});case b.ServerSentEvents:if(!this._options.EventSource)throw new Error(`'EventSource' is not supported in your environment.`);return new ie$1(this._httpClient,this._httpClient._accessToken,this._logger,this._options);case b.LongPolling:return new W(this._httpClient,this._logger,this._options);default:throw new Error(`Unknown transport: ${e}.`)}}_startTransport(e,t){return this.transport.onreceive=this.onreceive,this.features.reconnect?this.transport.onclose=n=>Mt(this,null,function*(){let o=!1;if(this.features.reconnect)try{this.features.disconnected(),yield this.transport.connect(e,t),yield this.features.resend()}catch(s){o=!0}else{this._stopConnection(n);return}o&&this._stopConnection(n)}):this.transport.onclose=n=>this._stopConnection(n),this.transport.connect(e,t)}_resolveTransportOrError(e,t,n,o){let s=b[e.transport];if(s==null)return this._logger.log(i.Debug,`Skipping transport '${e.transport}' because it is not supported by this client.`),new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);if(He$1(t,s))if(e.transferFormats.map(a=>w$3[a]).indexOf(n)>=0){if(s===b.WebSockets&&!this._options.WebSocket||s===b.ServerSentEvents&&!this._options.EventSource)return this._logger.log(i.Debug,`Skipping transport '${b[s]}' because it is not supported in your environment.'`),new z(`'${b[s]}' is not supported in your environment.`,s);this._logger.log(i.Debug,`Selecting transport '${b[s]}'.`);try{return this.features.reconnect=s===b.WebSockets?o:void 0,this._constructTransport(s)}catch(a){return a}}else return this._logger.log(i.Debug,`Skipping transport '${b[s]}' because it does not support the requested transfer format '${w$3[n]}'.`),new Error(`'${b[s]}' does not support ${w$3[n]}.`);else return this._logger.log(i.Debug,`Skipping transport '${b[s]}' because it was disabled by the client.`),new V(`'${b[s]}' is disabled by the client.`,s)}_isITransport(e){return e&&typeof e==`object`&&`connect`in e}_stopConnection(e){if(this._logger.log(i.Debug,`HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`),this.transport=void 0,e=this._stopError||e,this._stopError=void 0,this._connectionState===`Disconnected`){this._logger.log(i.Debug,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`);return}if(this._connectionState===`Connecting`)throw this._logger.log(i.Warning,`Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`),new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);if(this._connectionState===`Disconnecting`&&this._stopPromiseResolver(),e?this._logger.log(i.Error,`Connection disconnected with error '${e}'.`):this._logger.log(i.Information,`Connection disconnected.`),this._sendQueue&&(this._sendQueue.stop().catch(t=>{this._logger.log(i.Error,`TransportSendQueue.stop() threw error '${t}'.`)}),this._sendQueue=void 0),this.connectionId=void 0,this._connectionState=`Disconnected`,this._connectionStarted){this._connectionStarted=!1;try{this.onclose&&this.onclose(e)}catch(t){this._logger.log(i.Error,`HttpConnection.onclose(${e}) threw error '${t}'.`)}}}_resolveUrl(e){if(e.lastIndexOf(`https://`,0)===0||e.lastIndexOf(`http://`,0)===0)return e;if(!p$1.isBrowser)throw new Error(`Cannot resolve '${e}'.`);let t=window.document.createElement(`a`);return t.href=e,this._logger.log(i.Information,`Normalizing '${e}' to '${t.href}'.`),t.href}_resolveNegotiateUrl(e){let t=new URL(e);t.pathname.endsWith(`/`)?t.pathname+=`negotiate`:t.pathname+=`/negotiate`;let n=new URLSearchParams(t.searchParams);return n.has(`negotiateVersion`)||n.append(`negotiateVersion`,this._negotiateVersion.toString()),n.has(`useStatefulReconnect`)?n.get(`useStatefulReconnect`)===`true`&&(this._options._useStatefulReconnect=!0):this._options._useStatefulReconnect===!0&&n.append(`useStatefulReconnect`,`true`),t.search=n.toString(),t.toString()}};function He$1(r,e){return!r||(e&r)!==0}var de$2=class r{constructor(e){this._transport=e,this._buffer=[],this._executing=!0,this._sendBufferedData=new M,this._transportResult=new M,this._sendLoopPromise=this._sendLoop()}send(e){return this._bufferData(e),this._transportResult||(this._transportResult=new M),this._transportResult.promise}stop(){return this._executing=!1,this._sendBufferedData.resolve(),this._sendLoopPromise}_bufferData(e){if(this._buffer.length&&typeof this._buffer[0]!=typeof e)throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);this._buffer.push(e),this._sendBufferedData.resolve()}_sendLoop(){return Mt(this,null,function*(){for(;;){if(yield this._sendBufferedData.promise,!this._executing){this._transportResult&&this._transportResult.reject(`Connection stopped.`);break}this._sendBufferedData=new M;let e=this._transportResult;this._transportResult=void 0;let t=typeof this._buffer[0]==`string`?this._buffer.join(``):r._concatBuffers(this._buffer);this._buffer.length=0;try{yield this._transport.send(t),e.resolve()}catch(n){e.reject(n)}}})}static _concatBuffers(e){let t=e.map(s=>s.byteLength).reduce((s,c)=>s+c),n=new Uint8Array(t),o=0;for(let s of e)n.set(new Uint8Array(s),o),o+=s.byteLength;return n.buffer}};var M=class{constructor(){this.promise=new Promise((e,t)=>[this._resolver,this._rejecter]=[e,t])}resolve(){this._resolver()}reject(e){this._rejecter(e)}};var Me$1=`json`;var le$2=class{constructor(){this.name=Me$1,this.version=2,this.transferFormat=w$3.Text}parseMessages(e,t){if(typeof e!=`string`)throw new Error(`Invalid input for JSON hub protocol. Expected a string.`);if(!e)return[];t===null&&(t=E.instance);let n=y$1.parse(e),o=[];for(let s of n){let c=JSON.parse(s);if(typeof c.type!=`number`)throw new Error(`Invalid payload.`);switch(c.type){case h.Invocation:this._isInvocationMessage(c);break;case h.StreamItem:this._isStreamItemMessage(c);break;case h.Completion:this._isCompletionMessage(c);break;case h.Ping:break;case h.Close:break;case h.Ack:this._isAckMessage(c);break;case h.Sequence:this._isSequenceMessage(c);break;default:t.log(i.Information,`Unknown message type '`+c.type+`' ignored.`);continue}o.push(c)}return o}writeMessage(e){return y$1.write(JSON.stringify(e))}_isInvocationMessage(e){this._assertNotEmptyString(e.target,`Invalid payload for Invocation message.`),e.invocationId!==void 0&&this._assertNotEmptyString(e.invocationId,`Invalid payload for Invocation message.`)}_isStreamItemMessage(e){if(this._assertNotEmptyString(e.invocationId,`Invalid payload for StreamItem message.`),e.item===void 0)throw new Error(`Invalid payload for StreamItem message.`)}_isCompletionMessage(e){if(e.result&&e.error)throw new Error(`Invalid payload for Completion message.`);!e.result&&e.error&&this._assertNotEmptyString(e.error,`Invalid payload for Completion message.`),this._assertNotEmptyString(e.invocationId,`Invalid payload for Completion message.`)}_isAckMessage(e){if(typeof e.sequenceId!=`number`)throw new Error(`Invalid SequenceId for Ack message.`)}_isSequenceMessage(e){if(typeof e.sequenceId!=`number`)throw new Error(`Invalid SequenceId for Sequence message.`)}_assertNotEmptyString(e,t){if(typeof e!=`string`||e===``)throw new Error(t)}};var Ue$1={trace:i.Trace,debug:i.Debug,info:i.Information,information:i.Information,warn:i.Warning,warning:i.Warning,error:i.Error,critical:i.Critical,none:i.None};function Ne(r){let e=Ue$1[r.toLowerCase()];if(typeof e<`u`)return e;throw new Error(`Unknown log level: ${r}`)}var B=class{configureLogging(e){if(f$2.isRequired(e,`logging`),Le$3(e))this.logger=e;else if(typeof e==`string`){let t=Ne(e);this.logger=new R(t)}else this.logger=new R(e);return this}withUrl(e,t){return f$2.isRequired(e,`url`),f$2.isNotEmpty(e,`url`),this.url=e,typeof t==`object`?this.httpConnectionOptions=G$3(G$3({},this.httpConnectionOptions),t):this.httpConnectionOptions=W$2(G$3({},this.httpConnectionOptions),{transport:t}),this}withHubProtocol(e){return f$2.isRequired(e,`protocol`),this.protocol=e,this}withAutomaticReconnect(e){if(this.reconnectPolicy)throw new Error(`A reconnectPolicy has already been set.`);return e?Array.isArray(e)?this.reconnectPolicy=new L(e):this.reconnectPolicy=e:this.reconnectPolicy=new L,this}withServerTimeout(e){return f$2.isRequired(e,`milliseconds`),this._serverTimeoutInMilliseconds=e,this}withKeepAliveInterval(e){return f$2.isRequired(e,`milliseconds`),this._keepAliveIntervalInMilliseconds=e,this}withStatefulReconnect(e){return this.httpConnectionOptions===void 0&&(this.httpConnectionOptions={}),this.httpConnectionOptions._useStatefulReconnect=!0,this._statefulReconnectBufferSize=e?.bufferSize,this}build(){let e=this.httpConnectionOptions||{};if(e.logger===void 0&&(e.logger=this.logger),!this.url)throw new Error(`The 'HubConnectionBuilder.withUrl' method must be called before building the connection.`);let t=new ae$1(this.url,e);return N.create(t,this.logger||E.instance,this.protocol||new le$2,this.reconnectPolicy,this._serverTimeoutInMilliseconds,this._keepAliveIntervalInMilliseconds,this._statefulReconnectBufferSize)}};function Le$3(r){return r.log!==void 0}var he$3=class r{hubUrl=ov.hubUrl;hubConnection;orderSignal=gi$1(null);createHubConnection(){this.hubConnection=new B().withUrl(this.hubUrl,{withCredentials:!0}).withAutomaticReconnect().build(),this.hubConnection.start().catch(e=>console.log(e)),this.hubConnection.on(`OrderCompleteNotification`,e=>{this.orderSignal.set(e)})}stopHubConnection(){this.hubConnection?.state===_$2.Connected&&this.hubConnection.stop().catch(e=>console.log(e))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$2({token:r,factory:r.ɵfac,providedIn:`root`})};var ke$2=class r{baseUrl=ov.apiUrl;http=v$1(Rs);signalRService=v$1(he$3);currentUser=gi$1(null);isAdmin=Nb(()=>{let e=this.currentUser()?.roles;return Array.isArray(e)?e.includes(`Admin`):e===`Admin`});login(e){let t=new je$3;return t=t.append(`useCookies`,!0),this.http.post(this.baseUrl+`login`,e,{params:t}).pipe(ud(()=>this.signalRService.createHubConnection()))}register(e){return this.http.post(this.baseUrl+`account/register`,e)}getUserInfo(){return this.http.get(this.baseUrl+`account/user-info`).pipe(Fe(e=>(this.currentUser.set(e),e)))}logout(){return this.http.post(this.baseUrl+`account/logout`,{}).pipe(ud(()=>this.signalRService.stopHubConnection()))}updateAddress(e){return this.http.post(this.baseUrl+`account/address`,e).pipe(ud(()=>{this.currentUser.update(t=>(t&&(t.address=e),t))}))}getAuthState(){return this.http.get(this.baseUrl+`account/auth-status`)}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$2({token:r,factory:r.ɵfac,providedIn:`root`})};function K(r){return Error(`Unable to find icon with the name "${r}"`)}function se(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function G(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function X(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var f$1=class{url;svgText;options;svgElement=null;constructor(s,e,t){this.url=s,this.svgText=e,this.options=t}};var te=(()=>{class r{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(e,t,n,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace(``,e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace(``,e,t,n)}addSvgIconInNamespace(e,t,n,i){return this._addSvgIconConfig(e,t,new f$1(n,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,i){let o=this._sanitizer.sanitize(Q$1.HTML,n);if(!o)throw X(n);let c=sf(o);return this._addSvgIconConfig(e,t,new f$1(``,c,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace(``,e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace(``,e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new f$1(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let i=this._sanitizer.sanitize(Q$1.HTML,t);if(!i)throw X(t);let o=sf(i);return this._addSvgIconSetConfig(e,new f$1(``,o,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Q$1.RESOURCE_URL,e);if(!t)throw G(e);let n=this._cachedIconsByUrl.get(t);return n?Gv(C$1(n)):this._loadSvgIconFromConfig(new f$1(e,null)).pipe(ud(i=>this._cachedIconsByUrl.set(t,i)),Fe(i=>C$1(i)))}getNamedSvgIcon(e,t=``){let n=Z$1(t,e),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(t);return o?this._getSvgFromIconSetConfigs(e,o):Wv(K(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Gv(C$1(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Fe(t=>C$1(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return Gv(n);return sy(t.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(Ks(c=>{let a=`Loading icon set URL: ${this._sanitizer.sanitize(Q$1.RESOURCE_URL,o.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(a)),Gv(null)})))).pipe(Fe(()=>{let o=this._extractIconWithNameFromAnySet(e,t);if(!o)throw K(e);return o}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let i=t[n];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(o,e,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ud(t=>e.svgText=t),Fe(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Gv(null):this._fetchIcon(e).pipe(ud(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute(`id`),o.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(o),n);let c=this._svgElementFromString(sf(`<svg></svg>`));return c.appendChild(o),this._setSvgAttributes(c,n)}_svgElementFromString(e){let t=this._document.createElement(`DIV`);t.innerHTML=e;let n=t.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(e){let t=this._svgElementFromString(sf(`<svg></svg>`)),n=e.attributes;for(let i=0;i<n.length;i++){let{name:o,value:c}=n[i];o!==`id`&&t.setAttribute(o,c)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),t&&t.viewBox&&e.setAttribute(`viewBox`,t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,i=n?.withCredentials??!1;if(!this._httpClient)throw se();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let o=this._sanitizer.sanitize(Q$1.RESOURCE_URL,t);if(!o)throw G(t);let c=this._inProgressUrlFetches.get(o);if(c)return c;let l=this._httpClient.get(o,{responseType:`text`,withCredentials:i}).pipe(Fe(a=>sf(a)),ld(()=>this._inProgressUrlFetches.delete(o)),ea$1());return this._inProgressUrlFetches.set(o,l),l}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(Z$1(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](t,e);if(i)return oe(i)?new f$1(i.url,null,i.options):new f$1(i,null)}}static ɵfac=function(t){return new(t||r)(je$2(Rs,8),je$2(to),je$2(Kt,8),je$2(Xe$3))};static ɵprov=ie$2({token:r,factory:r.ɵfac,providedIn:`root`})}return r})();function C$1(r){return r.cloneNode(!0)}function Z$1(r,s){return r+`:`+s}function oe(r){return!!(r.url&&r.options)}var re=[`*`];var ce$1=new S$2(`MAT_ICON_DEFAULT_OPTIONS`);var ae=new S$2(`mat-icon-location`,{providedIn:`root`,factory:()=>{let r=v$1(Kt),s=r?r.location:null;return{getPathname:()=>s?s.pathname+s.search:``}}});var ne=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var le$1=ne.map(r=>`[${r}]`).join(`, `);var he$2=/^url\(['"]?#(.*?)['"]?\)$/;var be$2=(()=>{class r{_elementRef=v$1(Br);_iconRegistry=v$1(te);_location=v$1(ae);_errorHandler=v$1(Xe$3);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=j$1.EMPTY;constructor(){let e=v$1(new rv(`aria-hidden`),{optional:!0}),t=v$1(ce$1,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let t=e.split(`:`);switch(t.length){case 1:return[``,t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(le$1),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<t.length;i++)ne.forEach(o=>{let c=t[i],l=c.getAttribute(o),a=l?l.match(he$2):null;if(a){let h=n.get(c);h||(h=[],n.set(c,h)),h.push({name:o,value:a[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Dn$1(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${t}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}static ɵfac=function(t){return new(t||r)};static ɵcmp=gC({type:r,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(t,n){t&2&&(Yg(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),Gw(n.color?`mat-`+n.color:``),gm(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,HV],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:re,decls:1,vars:0,template:function(t,n){t&1&&(Sw(),Nw(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return r})();var xe$2=(()=>{class r{static ɵfac=function(t){return new(t||r)};static ɵmod=vC({type:r});static ɵinj=vd({imports:[ei$1]})}return r})();var w$2=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new X$2;bulk={select:s=>this._select(s),deselect:s=>this._deselect(s),setSelection:s=>this._setSelection(s)};constructor(s=!1,e,t=!0,n){this._multiple=s,this._emitChanges=t,this.compareWith=n,e&&e.length&&(s?e.forEach(i=>this._markSelected(i)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...s){return this._select(s)}deselect(...s){return this._deselect(s)}setSelection(...s){return this._setSelection(s)}toggle(s){return this.isSelected(s)?this.deselect(s):this.select(s)}clear(s=!0){this._unmarkAll();let e=this._hasQueuedChanges();return s&&this._emitChangeEvent(),e}isSelected(s){return this._selection.has(this._getConcreteValue(s))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(s){this._multiple&&this.selected&&this._selected.sort(s)}isMultipleSelection(){return this._multiple}_select(s){this._verifyValueAssignment(s),s.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(s){this._verifyValueAssignment(s),s.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(s){this._verifyValueAssignment(s);let e=this.selected,t=new Set(s.map(i=>this._getConcreteValue(i)));s.forEach(i=>this._markSelected(i)),e.filter(i=>!t.has(this._getConcreteValue(i,t))).forEach(i=>this._unmarkSelected(i));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(s){s=this._getConcreteValue(s),this.isSelected(s)||(this._multiple||this._unmarkAll(),this.isSelected(s)||this._selection.add(s),this._emitChanges&&this._selectedToEmit.push(s))}_unmarkSelected(s){s=this._getConcreteValue(s),this.isSelected(s)&&(this._selection.delete(s),this._emitChanges&&this._deselectedToEmit.push(s))}_unmarkAll(){this.isEmpty()||this._selection.forEach(s=>this._unmarkSelected(s))}_verifyValueAssignment(s){s.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(s,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(s,t))return t;return s}else return s}};var fe$1=(()=>{class r{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||r)};static ɵprov=cn$1({token:r,factory:r.ɵfac})}return r})();var ie=class{applyChanges(s,e,t,n,i){s.forEachOperation((o,c,l)=>{let a,h;if(o.previousIndex==null){let F=t(o,c,l);a=e.createEmbeddedView(F.templateRef,F.context,F.index),h=ke$3.INSERTED}else l==null?(e.remove(c),h=ke$3.REMOVED):(a=e.get(c),e.move(a,l),h=ke$3.MOVED);i&&i({context:a?.context,operation:h,record:o})})}detach(){}};var pe$1=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`;var ue$1=(i=21)=>{let e=``,t=crypto.getRandomValues(new Uint8Array(i|=0));for(;i--;)e+=pe$1[t[i]&63];return e};var P=class{id=ue$1();items=[];deliveryMethodId;paymentIntentId;clientSecret;coupon};var y=class i{baseUrl=ov.apiUrl;http=v$1(Rs);cart=gi$1(null);itemCount=Nb(()=>this.cart()?.items.reduce((e,t)=>e+t.quantity,0));selectedDelivery=gi$1(null);totals=Nb(()=>{let e=this.cart(),t=this.selectedDelivery();if(!e)return null;let r=e.items.reduce((d,h)=>d+h.price*h.quantity,0),n=0;e.coupon&&(e.coupon.amountOff?n=e.coupon.amountOff:e.coupon.percentOff&&(n=r*(e.coupon.percentOff/100)));let s=t?t.price:0;return{subtotal:r,shipping:s,discount:n,total:r+s-n}});getCart(e){return this.http.get(this.baseUrl+`cart?id=`+e).pipe(Fe(t=>(this.cart.set(t),t)))}getCartItems(e){return this.http.get(this.baseUrl+`cart?id=`+e).pipe(Fe(t=>(this.cart.set(t),t.items)))}setCart(e){return this.http.post(this.baseUrl+`cart`,e).pipe(ud(t=>{this.cart.set(t)}))}applyDiscount(e){return this.http.get(this.baseUrl+`coupons/`+e)}addItemToCart(e,t=1){return Mt(this,null,function*(){let r=this.cart()??this.createCart();this.isProduct(e)&&(e=this.mapProductToCartItem(e)),r.items=this.addOrUpdateItem(r.items,e,t),yield Yv(this.setCart(r))})}removeItemFromCart(e,t=1){return Mt(this,null,function*(){let r=this.cart();if(!r)return;let n=r.items.findIndex(s=>s.productId===e);n!==-1&&(r.items[n].quantity>t?r.items[n].quantity-=t:r.items.splice(n,1),r.items.length===0?this.deleteCart():yield Yv(this.setCart(r)))})}deleteCart(){this.http.delete(this.baseUrl+`cart?id=`+this.cart()?.id).subscribe({next:()=>{localStorage.removeItem(`cart_id`),this.cart.set(null)}})}addOrUpdateItem(e,t,r){let n=e.findIndex(s=>s.productId===t.productId);return n===-1?(t.quantity=r,e.push(t)):e[n].quantity+=r,e}mapProductToCartItem(e){return{productId:e.id,productName:e.name,price:e.price,quantity:0,pictureUrl:e.pictureUrl,brand:e.brand,type:e.type}}isProduct(e){return e.id!==void 0}createCart(){let e=new P;return localStorage.setItem(`cart_id`,e.id),e}static ɵfac=function(t){return new(t||i)};static ɵprov=ie$2({token:i,factory:i.ɵfac,providedIn:`root`})};function T(i){"@babel/helpers - typeof";return typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},T(i)}var ve$1=`dahlia`;var Ee=function(e){return e===3?`v3`:e};var Se=`https://js.stripe.com`;var Ie=``.concat(Se,`/`).concat(ve$1,`/stripe.js`);var xe$1=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var Pe=/^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;var ye$1=`loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used`;var _e$1=function(e){return xe$1.test(e)||Pe.test(e)};var Ue=function(){for(var e=document.querySelectorAll(`script[src^="`.concat(Se,`"]`)),t=0;t<e.length;t++){var r=e[t];if(_e$1(r.src))return r}return null};var he$1=function(e){var t=e&&!e.advancedFraudSignals?`?advancedFraudSignals=false`:``,r=document.createElement(`script`);r.src=``.concat(Ie).concat(t);var n=document.head||document.body;if(!n)throw new Error(`Expected document.body not to be null. Stripe.js requires a <body> element.`);return n.appendChild(r),r};var Te=function(e,t){!e||!e._registerWrapper||e._registerWrapper({name:`stripe-js`,version:`9.14.0`,startTime:t})};var w$1=null;var _$1=null;var U=null;var je=function(e){return function(t){e(new Error(`Failed to load Stripe.js`,{cause:t}))}};var Oe$1=function(e,t){return function(){window.Stripe?e(window.Stripe):t(new Error(`Stripe.js not available`))}};var Me=function(e){return w$1!==null?w$1:(w$1=new Promise(function(t,r){if(typeof window>`u`||typeof document>`u`){t(null);return}if(window.Stripe&&e&&console.warn(ye$1),window.Stripe){t(window.Stripe);return}try{var n=Ue();if(n&&e)console.warn(ye$1);else if(!n)n=he$1(e);else if(n&&U!==null&&_$1!==null){var s;n.removeEventListener(`load`,U),n.removeEventListener(`error`,_$1),(s=n.parentNode)===null||s===void 0||s.removeChild(n),n=he$1(e)}U=Oe$1(t,r),_$1=je(r),n.addEventListener(`load`,U),n.addEventListener(`error`,_$1)}catch(d){r(d);return}}),w$1.catch(function(t){return w$1=null,Promise.reject(t)}))};var Ve$1=function(e,t,r){if(e===null)return null;var n=t[0];if(typeof n!=`string`)throw new Error(`Expected publishable key to be of type string, got type `.concat(T(n),` instead.`));var s=n.match(/^pk_test/),d=Ee(e.version),h=ve$1;s&&d!==h&&console.warn(`Stripe.js@`.concat(d,` was loaded on the page, but @stripe/stripe-js@`).concat(`9.14.0`,` expected Stripe.js@`).concat(h,`. This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning`));var D=e.apply(void 0,t);return Te(D,r),D};var C;var ge$1=!1;var be$1=function(){return C||(C=Me(null).catch(function(e){return C=null,Promise.reject(e)}),C)};Promise.resolve().then(function(){return be$1()}).catch(function(i){ge$1||console.warn(i)});var we=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];ge$1=!0;var n=Date.now();return be$1().then(function(s){return Ve$1(s,t,n)})};var j=class i{baseUrl=ov.apiUrl;http=v$1(Rs);cartService=v$1(y);accountService=v$1(ke$2);stripePromise;elements;addressElement;paymentElement;constructor(){this.stripePromise=we(ov.stripePublicKey)}getStripeInstance(){return this.stripePromise}initializeElements(){return Mt(this,null,function*(){if(!this.elements){let e=yield this.getStripeInstance();if(e){let t=yield Yv(this.createOrUpdatePaymentIntent());this.elements=e.elements({clientSecret:t.clientSecret,appearance:{labels:`floating`}})}else throw new Error(`Stripe has not been loaded`)}return this.elements})}createPaymentElement(){return Mt(this,null,function*(){if(!this.paymentElement){let e=yield this.initializeElements();if(e)this.paymentElement=e.create(`payment`);else throw new Error(`Elements instance has not been initialized`)}return this.paymentElement})}createAddressElement(){return Mt(this,null,function*(){if(!this.addressElement){let e=yield this.initializeElements();if(e){let t=this.accountService.currentUser(),r={};t&&(r.name=t.firstName+` `+t.lastName),t?.address&&(r.address={line1:t.address.line1,line2:t.address.line2,city:t.address.city,country:t.address.country,state:t.address.state,postal_code:t.address.postalCode});let n={mode:`shipping`,defaultValues:r};this.addressElement=e.create(`address`,n)}else throw new Error(`Elements instance has not been loaded`)}return this.addressElement})}createConfirmationToken(){return Mt(this,null,function*(){let e=yield this.getStripeInstance(),t=yield this.initializeElements(),r=yield t.submit();if(r.error)throw new Error(r.error.message);if(e)return yield e.createConfirmationToken({elements:t});throw new Error(`Stripe not available`)})}confirmPayment(e){return Mt(this,null,function*(){let t=yield this.getStripeInstance(),n=yield(yield this.initializeElements()).submit();if(n.error)throw new Error(n.error.message);let s=this.cartService.cart()?.clientSecret;if(t&&s)return yield t.confirmPayment({clientSecret:s,confirmParams:{confirmation_token:e.id},redirect:`if_required`});throw new Error(`Unable to load stripe`)})}createOrUpdatePaymentIntent(){let e=this.cartService.cart(),t=!!e?.clientSecret;if(!e)throw new Error(`Problem with cart`);return this.http.post(this.baseUrl+`payments/`+e.id,{}).pipe(Fe(r=>Mt(this,null,function*(){return t||(yield Yv(this.cartService.setCart(r))),r})))}disposeElements(){this.elements=void 0,this.addressElement=void 0,this.paymentElement=void 0}static ɵfac=function(t){return new(t||i)};static ɵprov=ie$2({token:i,factory:i.ɵfac,providedIn:`root`})};function Le$2(i,e){i&1&&(Ki$1(0,`div`,11)(1,`button`,19),nb(2,`Checkout`),Gl(),Ki$1(3,`button`,20),nb(4,`Continue Shopping`),Gl()())}function ke$1(i,e){if(i&1){let t=yw();Ki$1(0,`div`,21)(1,`span`,22),nb(2),Gl(),Ki$1(3,`button`,23),im(`click`,function(){Ud(t);return $d(_w().removeCouponCode())}),Ki$1(4,`mat-icon`,24),nb(5,`delete`),Gl()()()}if(i&2){let t=e.ngIf;ND(2),Kl(``,t.name,` applied`)}}var Ce=class i{cartService=v$1(y);stripeService=v$1(j);location=v$1(xt);code;applyCouponCode(){this.code&&this.cartService.applyDiscount(this.code).subscribe({next:e=>Mt(this,null,function*(){let t=this.cartService.cart();t&&(t.coupon=e,yield Yv(this.cartService.setCart(t)),this.code=void 0,this.location.path()===`/checkout`&&(yield Yv(this.stripeService.createOrUpdatePaymentIntent())))})})}removeCouponCode(){return Mt(this,null,function*(){let e=this.cartService.cart();e&&(e.coupon&&(e.coupon=void 0),yield Yv(this.cartService.setCart(e)),this.location.path()===`/checkout`&&(yield Yv(this.stripeService.createOrUpdatePaymentIntent())))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`app-order-summary`]],decls:43,vars:17,consts:[[`form`,`ngForm`],[1,`mx-auto`,`max-w-4xl`,`flex-1`,`space-y-6`,`w-full`],[1,`space-y-4`,`rounded-lg`,`border`,`border-gray-200`,`p-4`,`bg-white`,`shadow-sm`],[1,`text-xl`,`font-semibold`],[1,`space-y-4`],[1,`space-y-2`],[1,`flex`,`items-center`,`justify-between`,`gap-4`],[1,`font-medium`,`text-gray-500`],[1,`font-medium`,`text-gray-900`],[1,`font-medium`,`text-green-500`],[1,`flex`,`items-center`,`justify-between`,`gap-4`,`border-t`,`border-gray-200`,`pt-2`],[1,`flex`,`flex-col`,`gap-2`],[1,`space-y-4`,`rounded-lg`,`border`,`border-gray-200`,`bg-white`,`shadow-sm`],[1,`space-y-2`,`flex`,`flex-col`,`p-2`,3,`ngSubmit`],[1,`mb-2`,`block`,`text-sm`,`font-mediem`],[`class`,`flex justify-between items-center`,4,`ngIf`],[`appearance`,`outline`],[`type`,`text`,`matInput`,``,`name`,`code`,3,`ngModelChange`,`disabled`,`ngModel`],[`mat-flat-button`,``,`type`,`submit`,3,`disabled`],[`routerLink`,`/checkout`,`mat-flat-button`,``],[`routerLink`,`/shop`,`mat-button`,``],[1,`flex`,`justify-between`,`items-center`],[1,`text-sm`,`font-semibold`],[`mat-icon-button`,``,3,`click`],[`color`,`warn`]],template:function(t,r){if(t&1){let n=yw();Ki$1(0,`div`,1)(1,`div`,2)(2,`p`,3),nb(3,`Order summary`),Gl(),Ki$1(4,`div`,4)(5,`div`,5)(6,`dl`,6)(7,`dt`,7),nb(8,`Subtotal`),Gl(),Ki$1(9,`dd`,8),nb(10),Eb(11,`currency`),Gl()(),Ki$1(12,`dl`,6)(13,`dt`,7),nb(14,`Discount`),Gl(),Ki$1(15,`dd`,9),nb(16),Eb(17,`currency`),Gl()(),Ki$1(18,`dl`,6)(19,`dt`,7),nb(20,`Delivery fee`),Gl(),Ki$1(21,`dd`,8),nb(22),Eb(23,`currency`),Gl()()(),Ki$1(24,`dl`,10)(25,`dt`,7),nb(26,`Total`),Gl(),Ki$1(27,`dd`,8),nb(28),Eb(29,`currency`),Gl()()(),sw(30,Le$2,5,0,`div`,11),Gl(),Ki$1(31,`div`,12)(32,`form`,13,0),im(`ngSubmit`,function(){return r.applyCouponCode()}),Ki$1(34,`label`,14),nb(35,` Do you have a voucher code? `),Gl(),Fg(36,ke$1,6,1,`div`,15),Ki$1(37,`mat-form-field`,16)(38,`mat-label`),nb(39,`Voucher code`),Gl(),Ki$1(40,`input`,17),Sm(`ngModelChange`,function(d){return Ud(n),ib(r.code,d)||(r.code=d),$d(d)}),Gl(),_T(),Gl(),Ki$1(41,`button`,18),nb(42,`Apply code`),Gl()()()()}t&2&&(ND(10),Kl(` `,Db(11,9,r.cartService.totals()?.subtotal),` `),ND(6),Kl(` -`,Db(17,11,r.cartService.totals()?.discount),` `),ND(6),Kl(` `,Db(23,13,r.cartService.totals()?.shipping),` `),ND(6),Kl(` `,Db(29,15,r.cartService.totals()?.total),` `),ND(2),aw(r.location.path()!==`/checkout`?30:-1),ND(6),Zg(`ngIf`,r.cartService.cart()?.coupon),ND(4),Zg(`disabled`,!!r.cartService.cart()?.coupon),Mm(`ngModel`,r.code),ST(),ND(),Zg(`disabled`,!!r.cartService.cart()?.coupon))},dependencies:[_0,Qr$1,rn$1,Ut$1,Nt,Ka$1,Za$1,Tn$1,Ya$1,Xa$1,No$1,Co,Ku,be$2,Qu],encapsulation:2})};var A$1=(m,a)=>{let r=v$1(ke$2),c=v$1(ft);return r.currentUser()?Gv(!0):r.getAuthState().pipe(Fe(i=>i.isAuthenticated?!0:(c.navigate([`/account/login`],{queryParams:{returnUrl:a.url}}),!1)))};var p=[`*`];var f=new S$2(`MAT_CARD_CONFIG`);var w=(()=>{class t{appearance;constructor(){let e=v$1(f,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(a){return new(a||t)};static ɵcmp=gC({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(a,r){a&2&&gm(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:p,decls:1,vars:0,template:function(a,r){a&1&&(Sw(),Nw(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var A=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵdir=IC({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var I=(()=>{class t{align=`start`;static ɵfac=function(a){return new(a||t)};static ɵdir=IC({type:t,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(a,r){a&2&&gm(`mat-mdc-card-actions-align-end`,r.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return t})();var _=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=vC({type:t});static ɵinj=vd({imports:[ei$1]})}return t})();var $t=(()=>{class n{_animationsDisabled=Jt$1();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,i){t&2&&gm(`mat-pseudo-checkbox-indeterminate`,i.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,i.state===`checked`)(`mat-pseudo-checkbox-disabled`,i.disabled)(`mat-pseudo-checkbox-minimal`,i.appearance===`minimal`)(`mat-pseudo-checkbox-full`,i.appearance===`full`)(`_mat-animation-noopable`,i._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return n})();var hi=[`text`];var ui=[[[`mat-icon`]],`*`];var gi=[`mat-icon`,`*`];function fi(n,s){if(n&1&&Kg(0,`mat-pseudo-checkbox`,1),n&2){let e=_w();Zg(`disabled`,e.disabled)(`state`,e.selected?`checked`:`unchecked`)}}function _i(n,s){if(n&1&&Kg(0,`mat-pseudo-checkbox`,3),n&2)Zg(`disabled`,_w().disabled)}function bi(n,s){if(n&1&&(Ki$1(0,`span`,4),nb(1),Gl()),n&2){let e=_w();ND(),Kl(`(`,e.group.label,`)`)}}var qe=new S$2(`MAT_OPTION_PARENT_COMPONENT`);var Xe$1=new S$2(`MatOptgroup`);var Qe=class{source;isUserInput;constructor(s,e=!1){this.source=s,this.isUserInput=e}};var de$1=(()=>{class n{_element=v$1(Br);_changeDetectorRef=v$1(FV);_parent=v$1(qe,{optional:!0});group=v$1(Xe$1,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=v$1(zo).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=gi$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new Ye$1;_text;_stateChanges=new X$2;constructor(){let e=v$1(Ve$3);e.load(fu),e.load(oi$1),this._signalDisableRipple=!!this._parent&&Ei$1(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!eu(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Qe(this,e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-option`]],viewQuery:function(t,i){if(t&1&&lm(hi,7),t&2){let a;Aw(a=Ow())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(t,i){t&1&&im(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(o){return i._handleKeydown(o)}),t&2&&(rm(`id`,i.id),Yg(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),gm(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,HV]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:gi,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(t,i){t&1&&(Sw(ui),sw(0,fi,1,2,`mat-pseudo-checkbox`,1),Nw(1),Ki$1(2,`span`,2,0),Nw(4,1),Gl(),sw(5,_i,1,1,`mat-pseudo-checkbox`,3),sw(6,bi,2,1,`span`,4),Kg(7,`div`,5)),t&2&&(aw(i.multiple?0:-1),ND(5),aw(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),ND(),aw(i.group&&i.group._inert?6:-1),ND(),Zg(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[$t,K_],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return n})();function Zt(n,s,e){if(e.length){let t=s.toArray(),i=e.toArray(),a=0;for(let o=0;o<n+1;o++)t[o].group&&t[o].group===i[a]&&a++;return a}return 0}function Jt(n,s,e,t){return n<e?n:n+s>e+t?Math.max(0,n-t+s):e}var ei=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[ei$1]})}return n})();var $e=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[pu,ei,de$1,ei$1]})}return n})();var Si=[`trigger`];var xi=[`panel`];var Di=[[[`mat-select-trigger`]],`*`];var ki=[`mat-select-trigger`,`*`];function wi(n,s){if(n&1&&(Ki$1(0,`span`,4),nb(1),Gl()),n&2){let e=_w();ND(),wm(e.placeholder)}}function Oi(n,s){n&1&&Nw(0)}function Ti(n,s){if(n&1&&(Ki$1(0,`span`,11),nb(1),Gl()),n&2){let e=_w(2);ND(),wm(e.triggerValue)}}function Mi(n,s){if(n&1&&(Ki$1(0,`span`,5),sw(1,Oi,1,0)(2,Ti,2,1,`span`,11),Gl()),n&2){let e=_w();ND(),aw(e.customTrigger?1:2)}}function Ii(n,s){if(n&1){let e=yw();Ki$1(0,`div`,12,1),im(`keydown`,function(i){Ud(e);return $d(_w()._handleKeydown(i))}),Nw(2,1),Gl()}if(n&2){let e=_w();Gw(e.panelClass),gm(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Yg(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ai=new S$2(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=v$1(ye$3);return()=>ei$2(n)}});var Pi=new S$2(`MAT_SELECT_CONFIG`);var Ni=new S$2(`MatSelectTrigger`);var Ze=class{source;value;constructor(s,e){this.source=s,this.value=e}};var ni=(()=>{class n{_viewportRuler=v$1(Ce$2);_changeDetectorRef=v$1(FV);_elementRef=v$1(Br);_dir=v$1(nf$1,{optional:!0});_idGenerator=v$1(zo);_renderer=v$1(xc);_parentFormField=v$1(Vr,{optional:!0});ngControl=v$1(Z$4,{self:!0,optional:!0});_liveAnnouncer=v$1(wf);_defaultOptions=v$1(Pi,{optional:!0});_animationsDisabled=Jt$1();_popoverLocation;_initialized=new X$2;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=Zt(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Jt(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ze(this,e)}_scrollStrategyFactory=v$1(Ai);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new X$2;_errorStateTracker;stateChanges=new X$2;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=gi$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(oi$2.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=iy(()=>{let e=this.options;return e?e.changes.pipe(Iy(e),Dy(()=>ay(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Dy(()=>this.optionSelectionChanges))});openedChange=new Ye$1;_openedStream=this.openedChange.pipe(lr(e=>e),Fe(()=>{}));_closedStream=this.openedChange.pipe(lr(e=>!e),Fe(()=>{}));selectionChange=new Ye$1;valueChange=new Ye$1;constructor(){let e=v$1(yl$1),t=v$1(Co,{optional:!0}),i=v$1(Do,{optional:!0}),a=v$1(new rv(`tabindex`),{optional:!0}),o=v$1(ni$2,{optional:!0}),l=v$1(gl,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new rr(e,l||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new w$2(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Ty(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Ty(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Iy(null),Ty(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Dn$1(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!eu(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let p=this.selected;p&&l!==p&&this._liveAnnouncer.announce(p.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!eu(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(p=>!p.disabled&&!p.selected);this.options.forEach(p=>{p.disabled||(l?p.select():p.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!eu(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch(a){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof Jt$2?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new jo(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ay(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Ty(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ay(...this.options.map(t=>t._stateChanges)).pipe(Ty(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=Ie$2(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&cm(a,Ni,5)(a,de$1,5)(a,Xe$1,5),t&2){let o;Aw(o=Ow())&&(i.customTrigger=o.first),Aw(o=Ow())&&(i.options=o),Aw(o=Ow())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&lm(Si,5)(xi,5)(Wr,5),t&2){let a;Aw(a=Ow())&&(i.trigger=a.first),Aw(a=Ow())&&(i.panel=a.first),Aw(a=Ow())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&im(`keydown`,function(o){return i._handleKeydown(o)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Yg(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),gm(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,HV],disableRipple:[2,`disableRipple`,`disableRipple`,HV],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:BV(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,HV],placeholder:`placeholder`,required:[2,`required`,`required`,HV],multiple:[2,`multiple`,`multiple`,HV],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,HV],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,BV],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,HV]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[db([{provide:Or,useExisting:n},{provide:qe,useExisting:n}]),IE],ngContentSelectors:ki,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(Sw(Di),Ki$1(0,`div`,2,0),im(`click`,function(){return i.open()}),Ki$1(3,`div`,3),sw(4,wi,2,1,`span`,4)(5,Mi,3,1,`span`,5),Gl(),Ki$1(6,`div`,6)(7,`div`,7),nf(),Ki$1(8,`svg`,8),Kg(9,`path`,9),Gl()()()(),Fg(10,Ii,3,16,`ng-template`,10),im(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(o){return i._handleOverlayKeydown(o)})),t&2){let a=kw(1);ND(3),Yg(`id`,i._valueId),ND(),aw(i.empty?4:5),ND(6),Zg(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[Jt$2,Wr],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var ai=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[Gr,$e,ei$1,Yt,Ml,$e]})}return n})();var Ei=[`tooltip`];var Ri=20;var Li=new S$2(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=v$1(ye$3);return()=>ei$2(n,{scrollThrottle:Ri})}});var Fi=new S$2(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var oi=`tooltip-panel`;var zi={passive:!0};var Bi=8;var Vi=8;var ji=24;var Hi=200;var Je=(()=>{class n{_elementRef=v$1(Br);_ngZone=v$1(Z$3);_platform=v$1(ne$2);_ariaDescriber=v$1(u_);_focusMonitor=v$1(ni$1);_dir=v$1(nf$1);_injector=v$1(ye$3);_viewContainerRef=v$1(vs);_mediaMatcher=v$1(ai$1);_document=v$1(Kt);_renderer=v$1(xc);_animationsDisabled=Jt$1();_defaultOptions=v$1(Fi,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=si;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=P_(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=P_(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Po(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Po(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new X$2;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Bi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ty(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new $t$1(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(Ty(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof Br)return this._overlayRef;this._detach()}let t=this._injector.get(Pe$4).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${oi}`,a=ii(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return a.positionChanges.pipe(Ty(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ri$1(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(Li)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ty(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ty(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ty(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ty(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(G$3(G$3({},i.main),a.main)),this._addOffset(G$3(G$3({},i.fallback),a.fallback))])}_addOffset(e){let t=Vi,i=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=i?-t:t:e.originX===`end`&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`||t==`below`?i={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={originX:`end`,originY:`center`});let{x:a,y:o}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,i;t==`above`?i={overlayX:`center`,overlayY:`bottom`}:t==`below`?i={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?i={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(i={overlayX:`start`,overlayY:`center`});let{x:a,y:o}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),bh(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,o;if(t===`center`?this._dir&&this._dir.value===`rtl`?o=i===`end`?`left`:`right`:o=i===`start`?`left`:`right`:o=t===`bottom`&&a===`top`?`above`:`below`,o!==this._currentPosition){let l=this._overlayRef;if(l){let p=`${this._cssClassPrefix}-${oi}-`;l.removePanelClass(p+this._currentPosition),l.addPanelClass(p+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,zi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,i=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(i.webkitUserDrag=`none`),i.touchAction=`none`,i.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||bh({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!eu(e):!0;static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,i){t&2&&gm(`mat-mdc-tooltip-disabled`,i.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return n})();var si=(()=>{class n{_changeDetectorRef=v$1(FV);_elementRef=v$1(Br);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Jt$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new X$2;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>ji&&e.width>=Hi}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let o=getComputedStyle(t);(o.getPropertyValue(`animation-duration`)===`0s`||o.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,i){if(t&1&&lm(Ei,7),t&2){let a;Aw(a=Ow())&&(i._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,i){t&1&&im(`mouseleave`,function(o){return i._handleMouseLeave(o)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,i){t&1&&(Wl(0,`div`,1,0),sm(`animationend`,function(o){return i._handleAnimationEnd(o)}),Wl(2,`div`,2),nb(3),zl()()),t&2&&(Gw(i.tooltipClass),gm(`mdc-tooltip--multiline`,i._isMultiline),ND(3),wm(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return n})();var ri=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[Ef,Gr,ei$1,Yt]})}return n})();function Gi(n,s){if(n&1&&(Ki$1(0,`mat-option`,17),nb(1),Gl()),n&2){let e=s.$implicit;Zg(`value`,e),ND(),Kl(` `,e,` `)}}function Wi(n,s){if(n&1){let e=yw();Ki$1(0,`mat-form-field`,14)(1,`mat-select`,16,0),im(`selectionChange`,function(i){Ud(e);return $d(_w(2)._changePageSize(i.value))}),uw(3,Gi,2,2,`mat-option`,17,lw),Gl(),Ki$1(5,`div`,18),im(`click`,function(){Ud(e);return $d(kw(2).open())}),Gl()()}if(n&2){let e=_w(2);Zg(`appearance`,e._formFieldAppearance)(`color`,e.color),ND(),Zg(`value`,e.pageSize)(`disabled`,e.disabled),Qg(`aria-labelledby`,e._pageSizeLabelId),Zg(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),ND(2),dw(e._displayedPageSizeOptions)}}function Yi(n,s){if(n&1&&(Ki$1(0,`div`,15),nb(1),Gl()),n&2){let e=_w(2);ND(),wm(e.pageSize)}}function Ki(n,s){if(n&1&&(Ki$1(0,`div`,3)(1,`div`,13),nb(2),Gl(),sw(3,Wi,6,7,`mat-form-field`,14),sw(4,Yi,2,1,`div`,15),Gl()),n&2){let e=_w();ND(),Yg(`id`,e._pageSizeLabelId),ND(),Kl(` `,e._intl.itemsPerPageLabel,` `),ND(),aw(e._displayedPageSizeOptions.length>1?3:-1),ND(),aw(e._displayedPageSizeOptions.length<=1?4:-1)}}function Ui(n,s){if(n&1){let e=yw();Ki$1(0,`button`,19),im(`click`,function(){Ud(e);let i=_w();return $d(i._buttonClicked(0,i._previousButtonsDisabled()))}),nf(),Ki$1(1,`svg`,8),Kg(2,`path`,20),Gl()()}if(n&2){let e=_w();Zg(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Yg(`aria-label`,e._intl.firstPageLabel)}}function Qi(n,s){if(n&1){let e=yw();Ki$1(0,`button`,21),im(`click`,function(){Ud(e);let i=_w();return $d(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),nf(),Ki$1(1,`svg`,8),Kg(2,`path`,22),Gl()()}if(n&2){let e=_w();Zg(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Yg(`aria-label`,e._intl.lastPageLabel)}}var qi=(()=>{class n{changes=new X$2;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,o=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${o} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();var Xi=50;var $i=new S$2(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var Zi=(()=>{class n{_intl=v$1(qi);_changeDetectorRef=v$1(FV);_formFieldAppearance;_pageSizeLabelId=v$1(zo).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new or(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>BV(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new Ye$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=v$1($i,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:o,showFirstLastButtons:l}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),o!=null&&(this.hidePageSize=o),l!=null&&(this.showFirstLastButtons=l)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Xi),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,BV],length:[2,`length`,`length`,BV],pageSize:[2,`pageSize`,`pageSize`,BV],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,HV],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,HV],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,HV]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,i){t&1&&(Ki$1(0,`div`,1)(1,`div`,2),sw(2,Ki,5,4,`div`,3),Ki$1(3,`div`,4)(4,`div`,5),nb(5),Gl(),sw(6,Ui,3,5,`button`,6),Ki$1(7,`button`,7),im(`click`,function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),nf(),Ki$1(8,`svg`,8),Kg(9,`path`,9),Gl()(),rf(),Ki$1(10,`button`,10),im(`click`,function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),nf(),Ki$1(11,`svg`,8),Kg(12,`path`,11),Gl()(),sw(13,Qi,3,5,`button`,12),Gl()()()),t&2&&(ND(2),aw(i.hidePageSize?-1:2),ND(3),Kl(` `,i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length),` `),ND(),aw(i.showFirstLastButtons?6:-1),ND(),Zg(`matTooltip`,i._intl.previousPageLabel)(`matTooltipDisabled`,i._previousButtonsDisabled())(`disabled`,i._previousButtonsDisabled())(`tabindex`,i._previousButtonsDisabled()?-1:null),Yg(`aria-label`,i._intl.previousPageLabel),ND(3),Zg(`matTooltip`,i._intl.nextPageLabel)(`matTooltipDisabled`,i._nextButtonsDisabled())(`disabled`,i._nextButtonsDisabled())(`tabindex`,i._nextButtonsDisabled()?-1:null),Yg(`aria-label`,i._intl.nextPageLabel),ND(3),aw(i.showFirstLastButtons?13:-1))},dependencies:[rn$1,ni,de$1,Bf,Je],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return n})();var so=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[D0,ai,ri,Zi]})}return n})();function en(n,s){}var Y=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var tt=(()=>{class n extends st{_elementRef=v$1(Br);_focusTrapFactory=v$1(Df);_config;_interactivityChecker=v$1(Zc);_ngZone=v$1(Z$3);_focusMonitor=v$1(ni$1);_renderer=v$1(xc);_changeDetectorRef=v$1(FV);_injector=v$1(ye$3);_platform=v$1(ne$2);_document=v$1(Kt);_portalOutlet;_focusTrapped=new X$2;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=v$1(Y,{optional:!0})||new Y,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),o(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,i),o=this._renderer.listen(e,`mousedown`,i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||bh(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let i=rf$1(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=rf$1();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=rf$1()))}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,i){if(t&1&&lm(zs,7),t&2){let a;Aw(a=Ow())&&(i._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,i){t&2&&Yg(`id`,i._config.id||null)(`role`,i._config.role)(`aria-modal`,i._config.ariaModal)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null)},features:[Lg],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&Fg(0,en,0,0,`ng-template`,0)},dependencies:[zs],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return n})();var Z=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new X$2;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(s,e){this.overlayRef=s,this.config=e,this.disableClose=e.disableClose,this.backdropClick=s.backdropClick(),this.keydownEvents=s.keydownEvents(),this.outsidePointerEvents=s.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!eu(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=s.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(s,e){if(this._canClose(s)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(s),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(s=``,e=``){return this.overlayRef.updateSize({width:s,height:e}),this}addPanelClass(s){return this.overlayRef.addPanelClass(s),this}removePanelClass(s){return this.overlayRef.removePanelClass(s),this}_canClose(s){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(s,e,this.componentInstance))}};var tn=new S$2(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let n=v$1(ye$3);return()=>pn$1(n)}});var nn=new S$2(`DialogData`);var an=new S$2(`DefaultDialogConfig`);function on(n){let s=gi$1(n),e=new Ye$1;return{valueSignal:s,get value(){return s()},change:e,ngOnDestroy(){e.complete()}}}var li=(()=>{class n{_injector=v$1(ye$3);_defaultOptions=v$1(an,{optional:!0});_parentDialog=v$1(n,{optional:!0,skipSelf:!0});_overlayContainer=v$1(xn);_idGenerator=v$1(zo);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new X$2;_afterOpenedAtThisLevel=new X$2;_ariaHiddenElements=new Map;_scrollStrategy=v$1(tn);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=iy(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Iy(void 0)));open(e,t){t=G$3(G$3({},this._defaultOptions||new Y),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),o=ri$1(this._injector,a),l=new Z(o,t),p=this._attachContainer(o,l,t);if(l.containerInstance=p,!this.openDialogs.length){let Fe=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(Dn$1(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Fe)}):this._hideNonDialogContentFromAssistiveTechnology(Fe)}return this._attachDialogContent(e,l,p,t),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){et$1(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){et$1(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),et$1(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Le$5({positionStrategy:e.positionStrategy||Sn$1().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,o=[{provide:Y,useValue:i},{provide:Z,useValue:t},{provide:ft$1,useValue:e}],l;i.container?typeof i.container==`function`?l=i.container:(l=i.container.type,o.push(...i.container.providers(i))):l=tt;let p=new $t$1(l,i.viewContainerRef,ye$3.create({parent:a||this._injector,providers:o}));return e.attach(p).instance}_attachDialogContent(e,t,i,a){if(e instanceof Lr){let o=this._createInjector(a,t,i,void 0),l={$implicit:a.data,dialogRef:t};a.templateContext&&(l=G$3(G$3({},l),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),i.attachTemplatePortal(new xe$4(e,null,l,o))}else{let o=this._createInjector(a,t,i,this._injector),l=i.attachComponentPortal(new $t$1(e,a.viewContainerRef,o,null,a.bindings));t.componentRef=l,t.componentInstance=l.instance}}_createInjector(e,t,i,a){let o=e.injector||e.viewContainerRef?.injector,l=[{provide:nn,useValue:e.data},{provide:Z,useValue:t}];return e.providers&&(typeof e.providers==`function`?l.push(...e.providers(t,e,i)):l.push(...e.providers)),e.direction&&(!o||!o.get(nf$1,null,{optional:!0}))&&l.push({provide:nf$1,useValue:on(e.direction)}),ye$3.create({parent:o||a,providers:l})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,o)=>{a?o.setAttribute(`aria-hidden`,a):o.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();function et$1(n,s){let e=n.length;for(;e--;)s(n[e])}function sn(n,s){}var Le$1=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var it$1=`mdc-dialog--open`;var ci=`mdc-dialog--opening`;var di=`mdc-dialog--closing`;var rn=150;var ln=75;var cn=(()=>{class n extends tt{_animationStateChanged=new Ye$1;_animationsEnabled=!Jt$1();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?pi(this._config.enterAnimationDuration)??rn:0;_exitAnimationDuration=this._animationsEnabled?pi(this._config.exitAnimationDuration)??ln:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(mi,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ci,it$1)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(it$1),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(it$1),this._animationsEnabled?(this._hostElement.style.setProperty(mi,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(di)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ci,di)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(i){return(e||(e=VE(n)))(i||n)}})();static ɵcmp=gC({type:n,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,i){t&2&&(rm(`id`,i._config.id),Yg(`aria-modal`,i._config.ariaModal)(`role`,i._config.role)(`aria-labelledby`,i._config.ariaLabel?null:i._ariaLabelledByQueue[0])(`aria-label`,i._config.ariaLabel)(`aria-describedby`,i._config.ariaDescribedBy||null),gm(`_mat-animation-noopable`,!i._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,i._actionSectionCount>0))},features:[Lg],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,i){t&1&&(Ki$1(0,`div`,0)(1,`div`,1),Fg(2,sn,0,0,`ng-template`,2),Gl()())},dependencies:[zs],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return n})();var mi=`--mat-dialog-transition-duration`;function pi(n){return n==null?null:typeof n==`number`?n:n.endsWith(`ms`)?Po(n.substring(0,n.length-2)):n.endsWith(`s`)?Po(n.substring(0,n.length-1))*1e3:n===`0`?0:null}var Re=(function(n){return n[n.OPEN=0]=`OPEN`,n[n.CLOSING=1]=`CLOSING`,n[n.CLOSED=2]=`CLOSED`,n})(Re||{});var nt$1=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new or(1);_beforeClosed=new or(1);_result;_closeFallbackTimeout;_state=Re.OPEN;_closeInteractionType;constructor(s,e,t){this._ref=s,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=s.id,s.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(lr(i=>i.state===`opened`),Dn$1(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(lr(i=>i.state===`closed`),Dn$1(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),s.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ay(this.backdropClick(),this.keydownEvents().pipe(lr(i=>i.keyCode===27&&!this.disableClose&&!eu(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),dn(this,i.type===`keydown`?`keyboard`:`mouse`))})}close(s){let e=this._config.closePredicate;e&&!e(s,this._config,this.componentInstance)||(this._result=s,this._containerInstance._animationStateChanged.pipe(lr(t=>t.state===`closing`),Dn$1(1)).subscribe(t=>{this._beforeClosed.next(s),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=Re.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(s){let e=this._ref.config.positionStrategy;return s&&(s.left||s.right)?s.left?e.left(s.left):e.right(s.right):e.centerHorizontally(),s&&(s.top||s.bottom)?s.top?e.top(s.top):e.bottom(s.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(s=``,e=``){return this._ref.updateSize(s,e),this}addPanelClass(s){return this._ref.addPanelClass(s),this}removePanelClass(s){return this._ref.removePanelClass(s),this}getState(){return this._state}_finishDialogClose(){this._state=Re.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function dn(n,s,e){return n._closeInteractionType=s,n.close(e)}var mn=new S$2(`MatMdcDialogData`);var pn=new S$2(`mat-mdc-dialog-default-options`);var hn=new S$2(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=v$1(ye$3);return()=>pn$1(n)}});var Qo=(()=>{class n{_defaultOptions=v$1(pn,{optional:!0});_scrollStrategy=v$1(hn);_parentDialog=v$1(n,{optional:!0,skipSelf:!0});_idGenerator=v$1(zo);_injector=v$1(ye$3);_dialog=v$1(li);_animationsDisabled=Jt$1();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new X$2;_afterOpenedAtThisLevel=new X$2;dialogConfigClass=Le$1;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=iy(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Iy(void 0)));constructor(){this._dialogRefConstructor=nt$1,this._dialogContainerType=cn,this._dialogDataToken=mn}open(e,t){let i;t=G$3(G$3({},this._defaultOptions||new Le$1),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,W$2(G$3({},t),{positionStrategy:Sn$1(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:Y,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(o,l,p)=>(i=new this._dialogRefConstructor(o,t,p),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:i},{provide:Z,useValue:null}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let o=this.openDialogs.indexOf(i);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||n)};static ɵprov=cn$1({token:n,factory:n.ɵfac})}return n})();var me=class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-home`]],decls:8,vars:0,consts:[[1,`max-w-screen-2xl`,`mx-auto`,`px-4`,`mt-32`],[1,`flex`,`flex-col`,`items-center`,`py-16`,`justify-center`,`mt-20`,`rounded-2xl`,`shadow-xl`,`relative`],[`src`,`../images/hero1.jpg`,`alt`,`ski resort image`,1,`absolute`,`inset-0`,`w-full`,`h-full`,`object-cover`,`rounded-2xl`],[1,`flex`,`flex-col`,`p-8`,`rounded-2xl`,`items-center`,`relative`],[1,`my-6`,`font-extrabold`,`text-white`,`text-6xl`],[`routerLink`,`/shop`,1,`bg-gradient-to-r`,`from-blue-600`,`to-cyan-500`,`font-semibold`,`text-2xl`,`text-white`,`rounded-2xl`,`px-8`,`py-4`,`border-2`,`border-transparent`,`mt-8`]],template:function(t,e){t&1&&(Ki$1(0,`div`,0)(1,`div`,1),Kg(2,`img`,2),Ki$1(3,`div`,3)(4,`h1`,4),nb(5,` Welcome to Skinet! `),Gl(),Ki$1(6,`button`,5),nb(7,`Go to shop`),Gl()()()())},dependencies:[Qr$1],encapsulation:2})};var et=class n{baseUrl=ov.apiUrl;http=v$1(Rs);types=[];brands=[];getProducts(a){let t=new je$3;return a.brands.length>0&&(t=t.append(`brands`,a.brands.join(`,`))),a.types.length>0&&(t=t.append(`types`,a.types.join(`,`))),a.sort&&(t=t.append(`sort`,a.sort)),a.search&&(t=t.append(`search`,a.search)),t=t.append(`pageSize`,a.pageSize),t=t.append(`pageIndex`,a.pageNumber),this.http.get(this.baseUrl+`products`,{params:t})}getProduct(a){return this.http.get(this.baseUrl+`products/`+a)}getBrands(){if(!(this.brands.length>0))return this.http.get(this.baseUrl+`products/brands`).subscribe({next:a=>this.brands=a})}getTypes(){if(!(this.types.length>0))return this.http.get(this.baseUrl+`products/types`).subscribe({next:a=>this.types=a})}static ɵfac=function(t){return new(t||n)};static ɵprov=ie$2({token:n,factory:n.ɵfac,providedIn:`root`})};function Vn(n,a){if(n&1){let t=yw();Ki$1(0,`mat-card`,0),Kg(1,`img`,1),Ki$1(2,`mat-card-content`,2)(3,`h2`,3),nb(4),Gl(),Ki$1(5,`p`,4),nb(6),Eb(7,`currency`),Gl()(),Ki$1(8,`mat-card-actions`,5),im(`click`,function(i){return i.stopPropagation()}),Ki$1(9,`button`,6),im(`click`,function(){Ud(t);let i=_w();return $d(i.cartService.addItemToCart(i.product))}),Ki$1(10,`mat-icon`),nb(11,`add_shopping_cart`),Gl(),nb(12,` Add to Cart `),Gl()()()}if(n&2){let t=_w();Zg(`routerLink`,ab(`/shop/`,t.product.id)),ND(),Zg(`src`,sb(t.product.pictureUrl),yh)(`alt`,ab(`image of `,t.product.name)),ND(3),wm(t.product.name),ND(2),wm(Db(7,8,t.product.price))}}var ce=class n{product;cartService=v$1(y);static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-product-item`]],inputs:{product:`product`},decls:1,vars:1,consts:[[`appearance`,`raised`,1,`product-card`,3,`routerLink`],[3,`src`,`alt`],[1,`mt-2`],[1,`text-sm`,`font-semibold`,`uppercase`],[1,`font-light`],[3,`click`],[`mat-stroked-button`,``,1,`w-full`,3,`click`]],template:function(t,e){t&1&&sw(0,Vn,13,10,`mat-card`,0),t&2&&aw(e.product?0:-1)},dependencies:[w,A,I,_0,be$2,Qr$1,Qu],styles:[`.product-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 4px 8px #0003}`]})};var Pt=(()=>{class n{get vertical(){return this._vertical}set vertical(t){this._vertical=P_(t)}_vertical=!1;get inset(){return this._inset}set inset(t){this._inset=P_(t)}_inset=!1;static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(e,i){e&2&&(Yg(`aria-orientation`,i.vertical?`vertical`:`horizontal`),gm(`mat-divider-vertical`,i.vertical)(`mat-divider-horizontal`,!i.vertical)(`mat-divider-inset`,i.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(e,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var Xn=[`*`];var Un=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`;var qn=[`unscopedContent`];var Qn=[[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[`mat-divider`]],[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]]];var Gn=[`[matListItemTitle]`,`[matListItemLine]`,`*`,`mat-divider`,`[matListItemAvatar],[matListItemIcon]`];function Wn(n,a){n&1&&Nw(0,4)}function Yn(n,a){if(n&1&&(Ki$1(0,`div`,11),Kg(1,`input`,12),Ki$1(2,`div`,13),nf(),Ki$1(3,`svg`,14),Kg(4,`path`,15),Gl(),rf(),Kg(5,`div`,16),Gl()()),n&2){let t=_w();gm(`mdc-checkbox--disabled`,t.disabled),ND(),Zg(`checked`,t.selected)(`disabled`,t.disabled)}}function Zn(n,a){if(n&1&&(Ki$1(0,`div`,17),Kg(1,`input`,18),Ki$1(2,`div`,19),Kg(3,`div`,20)(4,`div`,21),Gl()()),n&2){let t=_w();gm(`mdc-radio--disabled`,t.disabled),ND(),Zg(`checked`,t.selected)(`disabled`,t.disabled)}}function Kn(n,a){}function $n(n,a){if(n&1&&(Ki$1(0,`span`,4),Fg(1,Kn,0,0,`ng-template`,6),Gl()),n&2){_w();let t=kw(3);ND(),Zg(`ngTemplateOutlet`,t)}}function Jn(n,a){}function ta(n,a){if(n&1&&(Ki$1(0,`span`,5),Fg(1,Jn,0,0,`ng-template`,6),Gl()),n&2){_w();let t=kw(5);ND(),Zg(`ngTemplateOutlet`,t)}}function ea(n,a){}function ia(n,a){if(n&1&&Fg(0,ea,0,0,`ng-template`,6),n&2){_w();Zg(`ngTemplateOutlet`,kw(1))}}function na(n,a){}function aa(n,a){if(n&1&&(Ki$1(0,`span`,9),Fg(1,na,0,0,`ng-template`,6),Gl()),n&2){_w();let t=kw(3);ND(),Zg(`ngTemplateOutlet`,t)}}function ra(n,a){}function oa(n,a){if(n&1&&(Ki$1(0,`span`,9),Fg(1,ra,0,0,`ng-template`,6),Gl()),n&2){_w();let t=kw(5);ND(),Zg(`ngTemplateOutlet`,t)}}function sa(n,a){}function ma(n,a){if(n&1&&Fg(0,sa,0,0,`ng-template`,6),n&2){_w();Zg(`ngTemplateOutlet`,kw(1))}}var wn=new S$2(`ListOption`);var ca=(()=>{class n{_elementRef=v$1(Br);static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var la=(()=>{class n{_elementRef=v$1(Br);static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var Sn=(()=>{class n{_listOption=v$1(wn,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,hostVars:4,hostBindings:function(e,i){e&2&&gm(`mdc-list-item__start`,i._isAlignedAtStart())(`mdc-list-item__end`,!i._isAlignedAtStart())}})}return n})();var da=(()=>{class n extends Sn{static ɵfac=(()=>{let t;return function(i){return(t||(t=VE(n)))(i||n)}})();static ɵdir=IC({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[Lg]})}return n})();var pa=(()=>{class n extends Sn{static ɵfac=(()=>{let t;return function(i){return(t||(t=VE(n)))(i||n)}})();static ɵdir=IC({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[Lg]})}return n})();var ha=new S$2(`MAT_LIST_CONFIG`);var Le=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=P_(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(P_(t))}_disabled=gi$1(!1);_defaultOptions=v$1(ha,{optional:!0});static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,hostVars:1,hostBindings:function(e,i){e&2&&Yg(`aria-disabled`,i.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var kn=(()=>{class n{_elementRef=v$1(Br);_ngZone=v$1(Z$3);_listBase=v$1(Le,{optional:!0});_platform=v$1(ne$2);_hostElement;_isButtonElement;_noopAnimations=Jt$1();_avatars;_icons;set lines(t){this._explicitLines=Po(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=P_(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(P_(t))}_disabled=gi$1(!1);_subscriptions=new j$1;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){v$1(Ve$3).load(fu);let t=v$1(qo,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new zn$1(this,this._ngZone,this._hostElement,this._platform,v$1(ye$3)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ay(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let m=this._titles.length===0&&e===1;i.classList.toggle(`mdc-list-item__primary-text`,m),i.classList.toggle(`mdc-list-item__secondary-text`,!m)}else i.classList.remove(`mdc-list-item__primary-text`),i.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,contentQueries:function(e,i,m){if(e&1&&cm(m,da,4)(m,pa,4),e&2){let d;Aw(d=Ow())&&(i._avatars=d),Aw(d=Ow())&&(i._icons=d)}},hostVars:4,hostBindings:function(e,i){e&2&&(Yg(`aria-disabled`,i.disabled)(`disabled`,i._isButtonElement&&i.disabled||null),gm(`mdc-list-item--disabled`,i.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Cn=new S$2(`SelectionList`);var Vt=(()=>{class n extends kn{_selectionList=v$1(Cn);_changeDetectorRef=v$1(FV);_lines;_titles;_unscopedContent;selectedChange=new Ye$1;togglePosition=`after`;get color(){return this._color||this._selectionList.color}set color(t){this._color=t}_color;get value(){return this._value}set value(t){this.selected&&t!==this.value&&this._inputsInitialized&&(this.selected=!1),this._value=t}_value;get selected(){return this._selectionList.selectedOptions.isSelected(this)}set selected(t){let e=P_(t);e!==this._selected&&(this._setSelected(e),(e||this._selectionList.multiple)&&this._selectionList._reportValueChange())}_selected=!1;_inputsInitialized=!1;ngOnInit(){let t=this._selectionList;t._value&&t._value.some(i=>t.compareWith(this._value,i))&&this._setSelected(!0);let e=this._selected;Promise.resolve().then(()=>{(this._selected||e)&&(this.selected=!0,this._changeDetectorRef.markForCheck())}),this._inputsInitialized=!0}ngOnDestroy(){super.ngOnDestroy(),this.selected&&Promise.resolve().then(()=>{this.selected=!1})}toggle(){this.selected=!this.selected}focus(){this._hostElement.focus()}getLabel(){return(this._titles?.get(0)?._elementRef.nativeElement||this._unscopedContent?.nativeElement)?.textContent||``}_hasCheckboxAt(t){return this._selectionList.multiple&&this._getTogglePosition()===t}_hasRadioAt(t){return!this._selectionList.multiple&&this._getTogglePosition()===t&&!this._selectionList.hideSingleSelectionIndicator}_hasIconsOrAvatarsAt(t){return this._hasProjected(`icons`,t)||this._hasProjected(`avatars`,t)}_hasProjected(t,e){return this._getTogglePosition()!==e&&(t===`avatars`?this._avatars.length!==0:this._icons.length!==0)}_handleBlur(){this._selectionList._onTouched()}_getTogglePosition(){return this.togglePosition||`after`}_setSelected(t){return t===this._selected?!1:(this._selected=t,t?this._selectionList.selectedOptions.select(this):this._selectionList.selectedOptions.deselect(this),this.selectedChange.emit(t),this._changeDetectorRef.markForCheck(),!0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_toggleOnInteraction(){this.disabled||(this._selectionList.multiple?(this.selected=!this.selected,this._selectionList._emitChangeEvent([this])):this.selected||(this.selected=!0,this._selectionList._emitChangeEvent([this])))}_setTabindex(t){this._hostElement.setAttribute(`tabindex`,t+``)}_hasBothLeadingAndTrailing(){let t=this._hasProjected(`avatars`,`before`)||this._hasProjected(`icons`,`before`)||this._hasCheckboxAt(`before`)||this._hasRadioAt(`before`),e=this._hasProjected(`icons`,`after`)||this._hasProjected(`avatars`,`after`)||this._hasCheckboxAt(`after`)||this._hasRadioAt(`after`);return t&&e}static ɵfac=(()=>{let t;return function(i){return(t||(t=VE(n)))(i||n)}})();static ɵcmp=gC({type:n,selectors:[[`mat-list-option`]],contentQueries:function(e,i,m){if(e&1&&cm(m,la,5)(m,ca,5),e&2){let d;Aw(d=Ow())&&(i._lines=d),Aw(d=Ow())&&(i._titles=d)}},viewQuery:function(e,i){if(e&1&&lm(qn,5),e&2){let m;Aw(m=Ow())&&(i._unscopedContent=m.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-list-item`,`mat-mdc-list-option`,`mdc-list-item`],hostVars:27,hostBindings:function(e,i){e&1&&im(`blur`,function(){return i._handleBlur()})(`click`,function(){return i._toggleOnInteraction()}),e&2&&(Yg(`aria-selected`,i.selected),gm(`mdc-list-item--selected`,i.selected&&!i._selectionList.multiple&&i._selectionList.hideSingleSelectionIndicator)(`mdc-list-item--with-leading-avatar`,i._hasProjected(`avatars`,`before`))(`mdc-list-item--with-leading-icon`,i._hasProjected(`icons`,`before`))(`mdc-list-item--with-trailing-icon`,i._hasProjected(`icons`,`after`))(`mat-mdc-list-option-with-trailing-avatar`,i._hasProjected(`avatars`,`after`))(`mdc-list-item--with-leading-checkbox`,i._hasCheckboxAt(`before`))(`mdc-list-item--with-trailing-checkbox`,i._hasCheckboxAt(`after`))(`mdc-list-item--with-leading-radio`,i._hasRadioAt(`before`))(`mdc-list-item--with-trailing-radio`,i._hasRadioAt(`after`))(`mat-mdc-list-item-both-leading-and-trailing`,i._hasBothLeadingAndTrailing())(`mat-accent`,i.color!==`primary`&&i.color!==`warn`)(`mat-warn`,i.color===`warn`)(`_mat-animation-noopable`,i._noopAnimations))},inputs:{togglePosition:`togglePosition`,color:`color`,value:`value`,selected:`selected`},outputs:{selectedChange:`selectedChange`},exportAs:[`matListOption`],features:[db([{provide:kn,useExisting:n},{provide:wn,useExisting:n}]),Lg],ngContentSelectors:Gn,decls:20,vars:4,consts:[[`icons`,``],[`checkbox`,``],[`radio`,``],[`unscopedContent`,``],[1,`mdc-list-item__start`,`mat-mdc-list-option-checkbox-before`],[1,`mdc-list-item__start`,`mat-mdc-list-option-radio-before`],[3,`ngTemplateOutlet`],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mdc-list-item__end`],[1,`mat-focus-indicator`],[1,`mdc-checkbox`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`checked`,`disabled`],[1,`mdc-checkbox__background`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[1,`mdc-radio`],[`type`,`radio`,1,`mdc-radio__native-control`,3,`checked`,`disabled`],[1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`]],template:function(e,i){e&1&&(Sw(Qn),Fg(0,Wn,1,0,`ng-template`,null,0,Cb)(2,Yn,6,4,`ng-template`,null,1,Cb)(4,Zn,5,4,`ng-template`,null,2,Cb),sw(6,$n,2,1,`span`,4)(7,ta,2,1,`span`,5),sw(8,ia,1,1,null,6),Ki$1(9,`span`,7),Nw(10),Nw(11,1),Ki$1(12,`span`,8,3),im(`cdkObserveContent`,function(){return i._updateItemLines(!0)}),Nw(14,2),Gl()(),sw(15,aa,2,1,`span`,9)(16,oa,2,1,`span`,9),sw(17,ma,1,1,null,6),Nw(18,3),Kg(19,`div`,10)),e&2&&(ND(6),aw(i._hasCheckboxAt(`before`)?6:i._hasRadioAt(`before`)?7:-1),ND(2),aw(i._hasIconsOrAvatarsAt(`before`)?8:-1),ND(7),aw(i._hasCheckboxAt(`after`)?15:i._hasRadioAt(`after`)?16:-1),ND(2),aw(i._hasIconsOrAvatarsAt(`after`)?17:-1))},dependencies:[Zu,dy$1],styles:[`.mat-mdc-list-option-with-trailing-avatar.mdc-list-item, [dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
  width: 40px;
  height: 40px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end {
  border-radius: 50%;
}

.mat-mdc-list-option .mdc-checkbox {
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
.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control {
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
.mat-mdc-list-option .mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-list-option .mdc-checkbox__background {
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
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
.mat-mdc-list-option .mdc-checkbox__checkmark {
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
  .mat-mdc-list-option .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}
.mat-mdc-list-option .mdc-checkbox__mixedmark {
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
  .mat-mdc-list-option .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}
.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mat-mdc-list-option .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
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
.mat-mdc-list-option .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-list-option .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-list-option .mdc-radio__background::before {
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
.mat-mdc-list-option .mdc-radio__outer-circle {
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
.mat-mdc-list-option .mdc-radio__inner-circle {
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
  .mat-mdc-list-option .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-list-option .mdc-radio__native-control {
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
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-list-option .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-list-option .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__start > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark, .mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-list-option._mat-animation-noopable > .mdc-list-item__end > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-list-option .mdc-checkbox__native-control, .mat-mdc-list-option .mdc-radio__native-control {
  display: none;
}

@media (forced-colors: active) {
  .mat-mdc-list-option.mdc-list-item--%NS%selected::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}
`],encapsulation:2})}return n})();var ua={provide:Ue$3,useExisting:Uo(()=>Ht),multi:!0};var Oe=class{source;options;constructor(a,t){this.source=a,this.options=t}};var Ht=(()=>{class n extends Le{_element=v$1(Br);_ngZone=v$1(Z$3);_renderer=v$1(xc);_initialized=!1;_keyManager;_listenerCleanups;_destroyed=new X$2;_isDestroyed=!1;_onChange=t=>{};_items;selectionChange=new Ye$1;color=`accent`;compareWith=(t,e)=>t===e;get multiple(){return this._multiple}set multiple(t){let e=P_(t);e!==this._multiple&&(this._multiple=e,this.selectedOptions=new w$2(this._multiple,this.selectedOptions.selected))}_multiple=!0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=P_(t)}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;selectedOptions=new w$2(this._multiple);_value=null;_onTouched=()=>{};_changeDetectorRef=v$1(FV);constructor(){super(),this._isNonInteractive=!1}ngAfterViewInit(){this._initialized=!0,this._setupRovingTabindex(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(this._element.nativeElement,`focusin`,this._handleFocusin),this._renderer.listen(this._element.nativeElement,`focusout`,this._handleFocusout)]}),this._value&&this._setOptionsFromValues(this._value),this._watchForSelectionChange()}ngOnChanges(t){let e=t.disabled,i=t.disableRipple,m=t.hideSingleSelectionIndicator;(i&&!i.firstChange||e&&!e.firstChange||m&&!m.firstChange)&&this._markOptionsForCheck()}ngOnDestroy(){this._keyManager?.destroy(),this._listenerCleanups?.forEach(t=>t()),this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0}focus(t){this._element.nativeElement.focus(t)}selectAll(){return this._setAllOptionsSelected(!0)}deselectAll(){return this._setAllOptionsSelected(!1)}_reportValueChange(){if(this.options&&!this._isDestroyed){let t=this._getSelectedOptionValues();this._onChange(t),this._value=t}}_emitChangeEvent(t){this.selectionChange.emit(new Oe(this,t))}writeValue(t){this._value=t,this.options&&this._setOptionsFromValues(t||[])}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this._markOptionsForCheck()}get disabled(){return this._selectionListDisabled()}set disabled(t){this._selectionListDisabled.set(P_(t)),this._selectionListDisabled()&&this._keyManager?.setActiveItem(-1)}_selectionListDisabled=gi$1(!1);registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}_watchForSelectionChange(){this.selectedOptions.changed.pipe(Ty(this._destroyed)).subscribe(t=>{for(let e of t.added)e.selected=!0;for(let e of t.removed)e.selected=!1;this._containsFocus()||this._resetActiveOption()})}_setOptionsFromValues(t){this.options.forEach(e=>e._setSelected(!1)),t.forEach(e=>{let i=this.options.find(m=>m.selected?!1:this.compareWith(m.value,e));i&&i._setSelected(!0)})}_getSelectedOptionValues(){return this.options.filter(t=>t.selected).map(t=>t.value)}_markOptionsForCheck(){this.options&&this.options.forEach(t=>t._markForCheck())}_setAllOptionsSelected(t,e){let i=[];return this.options.forEach(m=>{(!e||!m.disabled)&&m._setSelected(t)&&i.push(m)}),i.length&&this._reportValueChange(),i}get options(){return this._items}_handleKeydown(t){let e=this._keyManager.activeItem;if(e&&(t.keyCode===40||t.keyCode===38)){let i=rf$1();if(!this._items.toArray().some(d=>d._elementRef.nativeElement===i)){t.preventDefault(),e.focus();return}}if((t.keyCode===13||t.keyCode===32)&&!this._keyManager.isTyping()&&e&&!e.disabled)t.preventDefault(),e._toggleOnInteraction();else if(t.keyCode===65&&this.multiple&&!this._keyManager.isTyping()&&eu(t,`ctrlKey`,`metaKey`)){let i=this.options.some(m=>!m.disabled&&!m.selected);t.preventDefault(),this._emitChangeEvent(this._setAllOptionsSelected(i,!0))}else this._keyManager.onKeydown(t)}_handleFocusout=()=>{setTimeout(()=>{this._containsFocus()||this._resetActiveOption()})};_handleFocusin=t=>{let e=this._items.toArray().findIndex(i=>i._elementRef.nativeElement.contains(t.target));e>-1?this._setActiveOption(e):this._resetActiveOption()};_setupRovingTabindex(){this._keyManager=new $o(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(()=>!1),this._resetActiveOption(),this._keyManager.change.subscribe(t=>this._setActiveOption(t)),this._items.changes.pipe(Ty(this._destroyed)).subscribe(()=>{let t=this._keyManager.activeItem;(!t||this._items.toArray().indexOf(t)===-1)&&this._resetActiveOption()})}_setActiveOption(t){this._items.forEach((e,i)=>{let m=-1;!this.disabled&&i===t&&(m=0),e._setTabindex(m)}),this._keyManager.updateActiveItem(t)}_resetActiveOption(){if(this.disabled){let e=this._items.find(m=>m.selected)||this._items.first,i=e?this._items.toArray().indexOf(e):-1;this._setActiveOption(i);return}let t=this._items.find(e=>e.selected&&!e.disabled)||this._items.first;this._setActiveOption(t?this._items.toArray().indexOf(t):-1)}_containsFocus(){let t=rf$1();return t&&this._element.nativeElement.contains(t)}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`mat-selection-list`]],contentQueries:function(e,i,m){if(e&1&&cm(m,Vt,5),e&2){let d;Aw(d=Ow())&&(i._items=d)}},hostAttrs:[`role`,`listbox`,1,`mat-mdc-selection-list`,`mat-mdc-list-base`,`mdc-list`],hostVars:1,hostBindings:function(e,i){e&1&&im(`keydown`,function(d){return i._handleKeydown(d)}),e&2&&Yg(`aria-multiselectable`,i.multiple)},inputs:{color:`color`,compareWith:`compareWith`,multiple:`multiple`,hideSingleSelectionIndicator:`hideSingleSelectionIndicator`,disabled:`disabled`},outputs:{selectionChange:`selectionChange`},exportAs:[`matSelectionList`],features:[db([ua,{provide:Le,useExisting:n},{provide:Cn,useExisting:n}]),Lg,IE],ngContentSelectors:Xn,decls:1,vars:0,template:function(e,i){e&1&&(Sw(),Nw(0))},styles:[Un],encapsulation:2})}return n})();function ga(n,a){if(n&1&&(Ki$1(0,`mat-list-option`,5),nb(1),Gl()),n&2){let t=a.$implicit;Zg(`value`,t),ND(),wm(t)}}function _a(n,a){if(n&1&&(Ki$1(0,`mat-list-option`,5),nb(1),Gl()),n&2){let t=a.$implicit;Zg(`value`,t),ND(),wm(t)}}var le=class n{shopService=v$1(et);dialogRef=v$1(nt$1);data=v$1(mn);selectedBrands=this.data.selectedBrands;selectedTypes=this.data.selectedTypes;applyFilters(){this.dialogRef.close({selectedBrands:this.selectedBrands,selectedTypes:this.selectedTypes})}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-filters-dialog`]],decls:20,vars:4,consts:[[1,`text-3xl`,`text-center`,`pt-6`,`mb-3`],[1,`flex`,`p-4`],[1,`w-1/2`],[1,`font-semibold`,`text-xl`,`text-primary`],[3,`ngModelChange`,`ngModel`,`multiple`],[3,`value`],[1,`flex`,`justify-end`,`p-4`],[`mat-flat-button`,``,3,`click`]],template:function(t,e){t&1&&(Ki$1(0,`div`)(1,`h3`,0),nb(2,`Filters`),Gl(),Kg(3,`mat-divider`),Ki$1(4,`div`,1)(5,`div`,2)(6,`h4`,3),nb(7,`Brands`),Gl(),Ki$1(8,`mat-selection-list`,4),Sm(`ngModelChange`,function(m){return ib(e.selectedBrands,m)||(e.selectedBrands=m),m}),uw(9,ga,2,2,`mat-list-option`,5,cw),Gl(),_T(),Gl(),Ki$1(11,`div`,2)(12,`h4`,3),nb(13,`Types`),Gl(),Ki$1(14,`mat-selection-list`,4),Sm(`ngModelChange`,function(m){return ib(e.selectedTypes,m)||(e.selectedTypes=m),m}),uw(15,_a,2,2,`mat-list-option`,5,cw),Gl(),_T(),Gl()(),Ki$1(17,`div`,6)(18,`button`,7),im(`click`,function(){return e.applyFilters()}),nb(19,`Apply Filters`),Gl()()()),t&2&&(ND(8),Mm(`ngModel`,e.selectedBrands),Zg(`multiple`,!0),ST(),ND(),dw(e.shopService.brands),ND(5),Mm(`ngModel`,e.selectedTypes),Zg(`multiple`,!0),ST(),ND(),dw(e.shopService.types))},dependencies:[Pt,Ht,Vt,_0,Ka$1,Ya$1,No$1],encapsulation:2})};var ba=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var va=[`mat-icon, [matMenuItemIcon]`,`*`];function ya(n,a){n&1&&(nf(),Ki$1(0,`svg`,2),Kg(1,`polygon`,3),Gl())}var xa=[`*`];function ka(n,a){if(n&1){let t=yw();Wl(0,`div`,0),sm(`click`,function(){Ud(t);return $d(_w().closed.emit(`click`))})(`animationstart`,function(i){Ud(t);return $d(_w()._onAnimationStart(i.animationName))})(`animationend`,function(i){Ud(t);return $d(_w()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){Ud(t);return $d(_w()._onAnimationDone(i.animationName))}),Wl(1,`div`,1),Nw(2),zl()()}if(n&2){let t=_w();Gw(t._classList),gm(`mat-menu-panel-animations-disabled`,t._animationsDisabled)(`mat-menu-panel-exit-animation`,t._panelAnimationState===`void`)(`mat-menu-panel-animating`,t._isAnimating()),rm(`id`,t.panelId),Yg(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t.ariaLabelledby||null)(`aria-describedby`,t.ariaDescribedby||null)}}var He=new S$2(`MAT_MENU_PANEL`);var Xt=(()=>{class n{_elementRef=v$1(Br);_document=v$1(Kt);_focusMonitor=v$1(ni$1);_parentMenu=v$1(He,{optional:!0});_changeDetectorRef=v$1(FV);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new X$2;_focused=new X$2;_highlighted=!1;_triggersSubmenu=!1;constructor(){v$1(Ve$3).load(fu),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||``}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(e,i){e&1&&im(`click`,function(d){return i._checkDisabled(d)})(`mouseenter`,function(){return i._handleMouseEnter()}),e&2&&(Yg(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),gm(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,HV],disableRipple:[2,`disableRipple`,`disableRipple`,HV]},exportAs:[`matMenuItem`],ngContentSelectors:va,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(e,i){e&1&&(Sw(ba),Nw(0),Ki$1(1,`span`,0),Nw(2,1),Gl(),Kg(3,`div`,1),sw(4,ya,2,0,`:svg:svg`,2)),e&2&&(ND(3),Zg(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),ND(),aw(i._triggersSubmenu?4:-1))},dependencies:[K_],encapsulation:2})}return n})();var wa=new S$2(`MatMenuContent`);var Sa=new S$2(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Ve=`_mat-menu-enter`;var de=`_mat-menu-exit`;var it=(()=>{class n{_elementRef=v$1(Br);_changeDetectorRef=v$1(FV);_injector=v$1(ye$3);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=Jt$1();_allItems;_directDescendantItems=new ji$1;_classList={};_panelAnimationState=`void`;_animationDone=new X$2;_isAnimating=gi$1(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let e=this._previousPanelClass,i=G$3({},this._classList);e&&e.length&&e.split(` `).forEach(m=>{i[m]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(` `).forEach(m=>{i[m]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Ye$1;close=this.closed;panelId=v$1(zo).getId(`mat-menu-panel-`);constructor(){let t=v$1(Sa);this.overlayPanelClass=t.overlayPanelClass||``,this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new $o(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Iy(this._directDescendantItems),Dy(t=>ay(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState===`enter`&&e.activeItem?._hasFocus()){let i=t.toArray(),m=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[m]&&!i[m].disabled?e.setActiveItem(m):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Iy(this._directDescendantItems),Dy(e=>ay(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:eu(t)||(t.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(e===38||e===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(t);return}}focusFirstItem(t=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=bh(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=W$2(G$3({},this._classList),{"mat-menu-before":t===`before`,"mat-menu-after":t===`after`,"mat-menu-above":e===`above`,"mat-menu-below":e===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===de;(e||t===Ve)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Ve||t===de)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?`enter`:`void`,t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(de),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Ve:de)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Iy(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),t}static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`mat-menu`]],contentQueries:function(e,i,m){if(e&1&&cm(m,wa,5)(m,Xt,5)(m,Xt,4),e&2){let d;Aw(d=Ow())&&(i.lazyContent=d.first),Aw(d=Ow())&&(i._allItems=d),Aw(d=Ow())&&(i.items=d)}},viewQuery:function(e,i){if(e&1&&lm(Lr,5),e&2){let m;Aw(m=Ow())&&(i.templateRef=m.first)}},hostVars:3,hostBindings:function(e,i){e&2&&Yg(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,HV],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,t=>t==null?null:HV(t)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[db([{provide:He,useExisting:n}])],ngContentSelectors:xa,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(e,i){e&1&&(Sw(),jg(0,ka,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})();var Ca=new S$2(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=v$1(ye$3);return()=>ei$2(n)}});var Rt=new WeakMap;var Ma=(()=>{class n{_canHaveBackdrop;_element=v$1(Br);_viewContainerRef=v$1(vs);_menuItemInstance=v$1(Xt,{optional:!0,self:!0});_dir=v$1(nf$1,{optional:!0});_focusMonitor=v$1(ni$1);_ngZone=v$1(Z$3);_injector=v$1(ye$3);_scrollStrategy=v$1(Ca);_changeDetectorRef=v$1(FV);_animationsDisabled=Jt$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=j$1.EMPTY;_menuCloseSubscription=j$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e===`click`||e===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=v$1(He,{optional:!0});this._parentMaterialMenu=e instanceof it?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Rt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=Rt.get(e);Rt.set(e,this),i&&i!==this&&i._closeMenu();let m=this._createOverlay(e),d=m.getConfig(),j=d.positionStrategy;this._setPosition(e,j),this._canHaveBackdrop?d.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:d.hasBackdrop=e.hasBackdrop??!1,m.hasAttached()||(m.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),e instanceof it&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Ty(e.close)).subscribe(()=>{j.withLockedPosition(!1).reapplyLastPosition(),j.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof it&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Dn$1(1)).subscribe(()=>{e.detach(),Rt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Rt.delete(i),this.restoreFocus&&(t===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=ri$1(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof it&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new Le$5({positionStrategy:ii(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:t.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let m=i.connectionPair.overlayX===`start`?`after`:`before`,d=i.connectionPair.overlayY===`top`?`below`:`above`;t.setPositionClasses(m,d)})})}_setPosition(t,e){let[i,m]=t.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[d,j]=t.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[Se,Ce]=[d,j],[Me,Ne]=[i,m],Ot=0;if(this._triggersSubmenu()){if(Ne=i=t.xPosition===`before`?`start`:`end`,m=Me=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Ue=this._parentMaterialMenu.items.first;this._parentInnerPadding=Ue?Ue._getHostElement().offsetTop:0}Ot=d===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(Se=d===`top`?`bottom`:`top`,Ce=j===`top`?`bottom`:`top`);e.withPositions([{originX:i,originY:Se,overlayX:Me,overlayY:d,offsetY:Ot},{originX:m,originY:Se,overlayX:Ne,overlayY:d,offsetY:Ot},{originX:i,originY:Ce,overlayX:Me,overlayY:j,offsetY:-Ot},{originX:m,originY:Ce,overlayX:Ne,overlayY:j,offsetY:-Ot}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments();return ay(t,this._parentMaterialMenu?this._parentMaterialMenu.closed:Gv(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(lr(d=>this._menuOpen&&d!==this._menuItemInstance)):Gv(),e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new xe$4(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Rt.get(t)===this}_triggerIsAriaDisabled(){return HV(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(e){kT()};static ɵdir=IC({type:n})}return n})();var pe=(()=>{class n extends Ma{_cleanupTouchstart;_hoverSubscription=j$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Ye$1;onMenuOpen=this.menuOpened;menuClosed=new Ye$1;onMenuClose=this.menuClosed;constructor(){super(!0);let t=v$1(xc);this._cleanupTouchstart=t.listen(this._element.nativeElement,`touchstart`,e=>{kn$1(e)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){Ln$1(t)||(this._openedBy=t.button===0?`mouse`:void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(e===39&&this.dir===`ltr`||e===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(e,i){e&1&&im(`click`,function(d){return i._handleClick(d)})(`mousedown`,function(d){return i._handleMousedown(d)})(`keydown`,function(d){return i._handleKeydown(d)}),e&2&&Yg(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Lg]})}return n})();var En=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=vC({type:n});static ɵinj=vd({imports:[pu,Gr,ei$1,Yt]})}return n})();var Ut=class{brands=[];types=[];sort=`name`;pageNumber=1;pageSize=10;search=``};var nt=class n{loading=!1;busyRequestCount=0;busy(){this.busyRequestCount++,this.loading=!0}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.loading=!1)}static ɵfac=function(t){return new(t||n)};static ɵprov=ie$2({token:n,factory:n.ɵfac,providedIn:`root`})};function Ia(n,a){if(n&1){let t=yw();Ki$1(0,`div`,0)(1,`div`,1)(2,`mat-icon`,2),nb(3),Gl(),Ki$1(4,`p`,3),nb(5),Gl(),Ki$1(6,`button`,4),im(`click`,function(){Ud(t);return $d(_w().onAction())}),nb(7),Gl()()()}if(n&2){let t=_w();ND(3),wm(t.icon()),ND(2),Kl(` `,t.message(),` `),ND(2),wm(t.actionText())}}var Lt=class n{busyService=v$1(nt);message=AV.required();icon=AV.required();actionText=AV.required();action=xV();onAction(){this.action.emit()}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-empty-state`]],inputs:{message:[1,`message`],icon:[1,`icon`],actionText:[1,`actionText`]},outputs:{action:`action`},decls:1,vars:1,consts:[[1,`max-w-screen-xl`,`mx-auto`,`mt-32`,`px-10`,`py-4`,`bg-white`,`rounded-lg`,`shadow-md`,`w-full`],[1,`flex`,`flex-col`,`items-center`,`justify-center`,`py-12`,`w-full`],[1,`icon-display`,`mb-8`],[1,`text-gray-600`,`text-lg`,`font-semibold`,`mb-4`],[`mat-flat-button`,``,3,`click`]],template:function(t,e){t&1&&sw(0,Ia,8,3,`div`,0),t&2&&aw(e.busyService.busyRequestCount===0?0:-1)},dependencies:[be$2,_0],styles:[`.icon-display[_ngcontent-%COMP%]{transform:scale(3)}`]})};var Ea=(n,a)=>a.id;function Da(n,a){if(n&1&&Kg(0,`app-product-item`,13),n&2){let t=a.$implicit;Zg(`product`,t)}}function Ta(n,a){if(n&1&&(Ki$1(0,`mat-list-option`,15),nb(1),Gl()),n&2){let t=a.$implicit,e=_w(2);Zg(`value`,t.value)(`selected`,e.shopParams.sort),ND(),wm(t.name)}}function Aa(n,a){if(n&1){let t=yw();Ki$1(0,`div`,3)(1,`div`,4)(2,`mat-paginator`,5),im(`page`,function(i){Ud(t);return $d(_w().handlePageEvent(i))}),Gl(),Ki$1(3,`form`,6,0),im(`ngSubmit`,function(){Ud(t);return $d(_w().onSearchChange())}),Ki$1(5,`input`,7),Sm(`ngModelChange`,function(i){Ud(t);let m=_w();return ib(m.shopParams.search,i)||(m.shopParams.search=i),$d(i)}),Gl(),_T(),Ki$1(6,`button`,8)(7,`mat-icon`),nb(8,`search`),Gl()()(),Ki$1(9,`div`,9)(10,`button`,10),im(`click`,function(){Ud(t);return $d(_w().openFiltersDialog())}),Ki$1(11,`mat-icon`),nb(12,`filter_list`),Gl(),nb(13,` Filters `),Gl(),Ki$1(14,`button`,11)(15,`mat-icon`),nb(16,`swap_vert`),Gl(),nb(17,` Sort `),Gl()()(),Ki$1(18,`div`,12),uw(19,Da,1,1,`app-product-item`,13,Ea),Gl()(),Ki$1(21,`mat-menu`,null,1)(23,`mat-selection-list`,14),im(`selectionChange`,function(i){Ud(t);return $d(_w().onSortChange(i))}),uw(24,Ta,2,3,`mat-list-option`,15,cw),Gl()()}if(n&2){let t=kw(22),e=_w();ND(2),Zg(`length`,e.products.count)(`pageSize`,e.shopParams.pageSize)(`showFirstLastButtons`,!0)(`pageSizeOptions`,e.pageSizeOptions)(`pageIndex`,e.shopParams.pageNumber-1),ND(3),Mm(`ngModel`,e.shopParams.search),ST(),ND(9),Zg(`matMenuTriggerFor`,t),ND(5),dw(e.products.data),ND(4),Zg(`multiple`,!1),ND(),dw(e.sortOptions)}}function Pa(n,a){if(n&1){let t=yw();Ki$1(0,`app-empty-state`,16),im(`action`,function(){Ud(t);return $d(_w().resetFilters())}),Gl()}}var he=class n{shopService=v$1(et);dialogService=v$1(Qo);products;sortOptions=[{name:`Alphabetical`,value:`name`},{name:`Price: Low-High`,value:`priceAsc`},{name:`Pricec: High-Low`,value:`priceDesc`}];shopParams=new Ut;pageSizeOptions=[5,10,15,20];ngOnInit(){this.initializeShop()}initializeShop(){this.shopService.getBrands(),this.shopService.getTypes(),this.getProducts()}resetFilters(){this.shopParams=new Ut,this.getProducts()}getProducts(){this.shopService.getProducts(this.shopParams).subscribe({next:a=>this.products=a,error:a=>console.log(a)})}onSearchChange(){this.shopParams.pageNumber=1,this.getProducts()}handlePageEvent(a){this.shopParams.pageNumber=a.pageIndex+1,this.shopParams.pageSize=a.pageSize,this.getProducts()}onSortChange(a){let t=a.options[0];t&&(this.shopParams.sort=t.value,this.shopParams.pageNumber=1,this.getProducts())}openFiltersDialog(){this.dialogService.open(le,{minWidth:`500px`,data:{selectedBrands:this.shopParams.brands,selectedTypes:this.shopParams.types}}).afterClosed().subscribe({next:t=>{t&&(this.shopParams.brands=t.selectedBrands,this.shopParams.types=t.selectedTypes,this.shopParams.pageNumber=1,this.shopService.getProducts(this.shopParams).subscribe({next:e=>this.products=e,error:e=>console.log(e)}))}})}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-shop`]],decls:2,vars:1,consts:[[`searchForm`,`ngForm`],[`sortMenu`,`matMenu`],[`message`,`No products match this filter`,`icon`,`filter_alt_off`,`,`,``,`actionText`,`Reset filters`],[1,`flex`,`flex-col`,`gap-3`],[1,`flex`,`justify-between`],[`aria-label`,`Select page`,3,`page`,`length`,`pageSize`,`showFirstLastButtons`,`pageSizeOptions`,`pageIndex`],[1,`relative`,`flex`,`items-center`,`w-full`,`max-w-md`,`mx-4`,3,`ngSubmit`],[`type`,`search`,`placeholder`,`Search`,`name`,`search`,1,`block`,`w-full`,`p-4`,`text-sm`,`text-gray-900`,`border-gray-300`,`rounded-lg`,2,`border`,`1px solid gray !important`,3,`ngModelChange`,`ngModel`],[`mat-icon-button`,``,`type`,`submit`,1,`absolute`,`inset-y-0`,`right-8`,`top-2`,`flex`,`items-center`,`pl-3`],[1,`flex`,`gap-3`],[1,`match-input-height`,3,`click`],[`mat-stroked-button`,``,1,`match-input-height`,3,`matMenuTriggerFor`],[1,`grid`,`grid-cols-5`,`gap-4`],[3,`product`],[3,`selectionChange`,`multiple`],[3,`value`,`selected`],[`message`,`No products match this filter`,`icon`,`filter_alt_off`,`,`,``,`actionText`,`Reset filters`,3,`action`]],template:function(t,e){t&1&&sw(0,Aa,26,8)(1,Pa,1,0,`app-empty-state`,2),t&2&&aw(e.products&&e.products.count>0?0:1)},dependencies:[ce,_0,be$2,Ht,Vt,pe,En,it,Zi,Ka$1,Za$1,Tn$1,Ya$1,Xa$1,No$1,Co,Lt],encapsulation:2})};function Ra(n,a){if(n&1){let t=yw();Ki$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3),Kg(4,`img`,4),Gl(),Ki$1(5,`div`)(6,`h1`,5),nb(7),Gl(),Ki$1(8,`p`),nb(9),Gl(),Ki$1(10,`div`,6)(11,`p`,7),nb(12),Eb(13,`currency`),Gl()(),Ki$1(14,`div`,8)(15,`button`,9),im(`click`,function(){Ud(t);return $d(_w().updateCart())}),Ki$1(16,`mat-icon`),nb(17,`shopping_cart`),Gl(),nb(18),Gl(),Ki$1(19,`mat-form-field`,10)(20,`mat-label`),nb(21,`Quantity`),Gl(),Ki$1(22,`input`,11),Sm(`ngModelChange`,function(i){Ud(t);let m=_w();return ib(m.quantity,i)||(m.quantity=i),$d(i)}),Gl(),_T(),Gl()(),Kg(23,`mat-divider`),Ki$1(24,`p`,12),nb(25),Gl()()()()()}if(n&2){let t=_w();ND(4),Zg(`src`,sb(t.product.pictureUrl),yh)(`alt`,ab(`image of `,t.product.name)),ND(3),wm(t.product.name),ND(2),Kl(`You have `,t.quantityInCart,` of this item in your cart`),ND(3),Kl(` `,Db(13,11,t.product.price),` `),ND(3),Zg(`disabled`,t.quantity===t.quantityInCart),ND(3),Kl(` `,t.getButtonText(),` `),ND(4),Mm(`ngModel`,t.quantity),ST(),ND(3),Kl(` `,t.product.description,` `)}}var ue=class n{shopService=v$1(et);activatedRoute=v$1(He$3);cartService=v$1(y);product;quantityInCart=0;quantity=1;ngOnInit(){this.loadProduct()}loadProduct(){let a=this.activatedRoute.snapshot.paramMap.get(`id`);a&&this.shopService.getProduct(+a).subscribe({next:t=>{this.product=t,this.updateQuantityInCart()},error:t=>console.log(t)})}updateCart(){if(this.product)if(this.quantity>this.quantityInCart){let a=this.quantity-this.quantityInCart;this.quantityInCart+=a,this.cartService.addItemToCart(this.product,a)}else{let a=this.quantityInCart-this.quantity;this.quantityInCart-=a,this.cartService.removeItemFromCart(this.product.id,a)}}updateQuantityInCart(){this.quantityInCart=this.cartService.cart()?.items.find(a=>a.productId===this.product?.id)?.quantity||0,this.quantity=this.quantityInCart||1}getButtonText(){return this.quantityInCart>0?`Update cart`:`Add to cart`}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-product-details`]],decls:1,vars:1,consts:[[1,`py-8`],[1,`max-w-screen-2xl`,`px-4`,`mx-auto`],[1,`grid`,`grid-cols-2`,`gap-8`],[1,`max-w-xl`,`mx-auto`],[1,`w-full`,3,`src`,`alt`],[1,`text-2xl`,`font-semibold`,`text-gray-900`],[1,`mt-4`,`items-center`,`gap-4`,`flex`],[1,`text-3xl`,`font-extrabold`,`text-gray-900`],[1,`flex`,`gap-4`,`mt-6`],[`mat-flat-button`,``,1,`match-input-height`,3,`click`,`disabled`],[`appearance`,`outline`,1,`flex`],[`type`,`number`,`matInput`,``,`min`,`0`,3,`ngModelChange`,`ngModel`],[1,`mt-6`,`text-gray-500`]],template:function(t,e){t&1&&sw(0,Ra,26,13,`section`,0),t&2&&aw(e.product?0:-1)},dependencies:[_0,be$2,rn$1,Nt,Ut$1,Pt,Ka$1,Tn$1,Fo,Ya$1,lo,No$1,Qu],encapsulation:2})};function La(n,a){if(n&1&&(Ki$1(0,`li`,4),nb(1),Gl()),n&2){let t=a.$implicit;ND(),wm(t)}}function Oa(n,a){if(n&1&&(Ki$1(0,`div`,2)(1,`ul`,3),uw(2,La,2,1,`li`,4,cw),Gl()()),n&2){let t=_w();ND(2),dw(t.validationErrors)}}var ge=class n{baseUrl=ov.apiUrl;http=v$1(Rs);validationErrors;get404Error(){this.http.get(this.baseUrl+`buggy/notfound`).subscribe({next:a=>console.log(a),error:a=>console.log(a)})}get400Error(){this.http.get(this.baseUrl+`buggy/badrequest`).subscribe({next:a=>console.log(a),error:a=>console.log(a)})}get401Error(){this.http.get(this.baseUrl+`buggy/unauthorized`).subscribe({next:a=>console.log(a),error:a=>console.log(a)})}get500Error(){this.http.get(this.baseUrl+`buggy/internalerror`).subscribe({next:a=>console.log(a),error:a=>console.log(a)})}get400ValidationError(){this.http.post(this.baseUrl+`buggy/validationerror`,{}).subscribe({next:a=>console.log(a),error:a=>this.validationErrors=a})}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-test-error`]],decls:12,vars:1,consts:[[1,`mt-5`,`flex`,`justify-center`,`gap-4`],[`mat-stroked-button`,``,3,`click`],[1,`mx-auto`,`max-w-lg`,`mt-5`,`bg-red-100`],[1,`space-y-2`,`p-2`],[1,`text-red-800`]],template:function(t,e){t&1&&(Ki$1(0,`div`,0)(1,`button`,1),im(`click`,function(){return e.get500Error()}),nb(2,`Test 500 error`),Gl(),Ki$1(3,`button`,1),im(`click`,function(){return e.get400Error()}),nb(4,`Test 400 error`),Gl(),Ki$1(5,`button`,1),im(`click`,function(){return e.get401Error()}),nb(6,`Test 401 error`),Gl(),Ki$1(7,`button`,1),im(`click`,function(){return e.get404Error()}),nb(8,`Test 404 error`),Gl(),Ki$1(9,`button`,1),im(`click`,function(){return e.get400ValidationError()}),nb(10,`Test Validation error`),Gl()(),sw(11,Oa,4,0,`div`,2)),t&2&&(ND(11),aw(e.validationErrors?11:-1))},dependencies:[_0],encapsulation:2})};var _e=class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-not-found`]],decls:10,vars:0,consts:[[1,`flex`,`items-center`,`justify-center`,`min-h-96`,`bg-gray-100`],[1,`text-center`],[1,`text-purple-700`,`icon-display`],[1,`text-4xl`,`font-bold`,`text-gray-800`,`mt-4`],[1,`text-lg`,`text-gray-600`,`mt-2`],[`routerLink`,`/shop`,`mat-flat-button`,``,1,`mt-4`]],template:function(t,e){t&1&&(Ki$1(0,`div`,0)(1,`div`,1)(2,`mat-icon`,2),nb(3,`error_outline`),Gl(),Ki$1(4,`h1`,3),nb(5,`404`),Gl(),Ki$1(6,`p`,4),nb(7,`Page Not Found`),Gl(),Ki$1(8,`button`,5),nb(9,`Back to shop `),Gl()()())},dependencies:[be$2,_0,Qr$1],styles:[`.icon-display[_ngcontent-%COMP%]{transform:scale(3)}`]})};function Fa(n,a){if(n&1&&(Ki$1(0,`h5`,2),nb(1),Gl(),Ki$1(2,`p`,3),nb(3,`This error comes from the server, not Angular`),Gl(),Ki$1(4,`p`,4),nb(5,`What to do next?`),Gl(),Ki$1(6,`ol`,5)(7,`li`,6),nb(8,`Check the network tab in chrome dev tools`),Gl(),Ki$1(9,`li`,6),nb(10,`Reproduce the error in postman. If same error, don't waste time troubleshooting angualr code`),Gl()(),Ki$1(11,`h5`,7),nb(12,`Stack trace`),Gl(),Ki$1(13,`mat-card`,8)(14,`code`,9),nb(15),Gl()()),n&2){let t=_w();ND(),Kl(`Error: `,t.error.message),ND(14),wm(t.error.details)}}var fe=class n{constructor(a){this.router=a;let t=this.router.getCurrentNavigation();this.error=t?.extras.state?.error}router;error;static ɵfac=function(t){return new(t||n)(Qr(ft))};static ɵcmp=gC({type:n,selectors:[[`app-server-error`]],decls:4,vars:1,consts:[[1,`container`,`mt-5`,`p-4`,`bg-gray-100`,`rounded`,`shadow-lg`],[1,`text-2xl`,`font-semibold`,`mb-4`],[1,`text-red-600`],[1,`font-bold`,`mb-2`],[1,`mb-2`],[1,`list-decimal`,`ml-5`,`mb-4`],[1,`mb-1`],[1,`text-lg`,`font-semibold`,`mb-2`],[1,`p-4`,`bg-white`],[1,`block`,`whitespace-pre-wrap`]],template:function(t,e){t&1&&(Ki$1(0,`div`,0)(1,`h1`,1),nb(2,`Internal Server Error`),Gl(),sw(3,Fa,16,2),Gl()),t&2&&(ND(3),aw(e.error?3:-1))},dependencies:[w],encapsulation:2})};var be=class n{item=AV.required();cartService=v$1(y);incrementQuantity(){this.cartService.addItemToCart(this.item())}decrementQuantity(){this.cartService.removeItemFromCart(this.item().productId)}removeItemFromCart(){this.cartService.removeItemFromCart(this.item().productId,this.item().quantity)}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-cart-item`]],inputs:{item:[1,`item`]},decls:26,vars:11,consts:[[1,`rounded-lg`,`border`,`border-gray-200`,`bg-white`,`p-4`,`shadow-sm`,`mb-4`],[1,`flex`,`items-center`,`justify-between`,`gap-6`],[1,`shrink`,`order-1`,3,`routerLink`],[`alt`,`product image`,1,`h-20`,`w-20`,3,`src`],[1,`flex`,`items-center`,`justify-between`,`order-3`],[1,`flex`,`items-center`,`align-middle`,`gap-3`],[`mat-icon-button`,``,3,`click`],[1,`text-red-600`],[1,`font-semibold`,`text-xl`,`mb-1`],[1,`text-green-600`],[1,`text-end`,`order-4`,`w-32`],[1,`font-bold`,`text-xl`],[1,`w-full`,`flex-1`,`space-y-4`,`order-2`,`max-w-md`],[1,`font-medium`,3,`routerLink`],[1,`flex`,`items-center`,`gap-4`],[`mat-button`,``,`color`,`warn`,3,`click`]],template:function(t,e){t&1&&(Ki$1(0,`div`,0)(1,`div`,1)(2,`a`,2),Kg(3,`img`,3),Gl(),Ki$1(4,`div`,4)(5,`div`,5)(6,`button`,6),im(`click`,function(){return e.decrementQuantity()}),Ki$1(7,`mat-icon`,7),nb(8,`remove`),Gl()(),Ki$1(9,`div`,8),nb(10),Gl(),Ki$1(11,`button`,6),im(`click`,function(){return e.incrementQuantity()}),Ki$1(12,`mat-icon`,9),nb(13,`add`),Gl()()(),Ki$1(14,`div`,10)(15,`p`,11),nb(16),Eb(17,`currency`),Gl()()(),Ki$1(18,`div`,12)(19,`a`,13),nb(20),Gl(),Ki$1(21,`div`,14)(22,`button`,15),im(`click`,function(){return e.removeItemFromCart()}),Ki$1(23,`mat-icon`),nb(24,`delete`),Gl(),nb(25,` Delete `),Gl()()()()()),t&2&&(ND(2),Zg(`routerLink`,ab(`/shop/`,e.item().productId)),ND(),Zg(`src`,sb(e.item().pictureUrl),yh),ND(7),wm(e.item().quantity),ND(6),wm(Db(17,9,e.item().price)),ND(3),Zg(`routerLink`,ab(`/shop/`,e.item().productId)),ND(),Kl(` `,e.item().productName,` `))},dependencies:[Qr$1,_0,be$2,Qu],encapsulation:2})};var za=(n,a)=>a.productId;function Ba(n,a){if(n&1&&Kg(0,`app-cart-item`,3),n&2){let t=a.$implicit;Zg(`item`,t)}}function ja(n,a){if(n&1&&(Ki$1(0,`div`,0)(1,`div`,2),uw(2,Ba,1,1,`app-cart-item`,3,za),Gl(),Ki$1(4,`div`,4),Kg(5,`app-order-summary`),Gl()()),n&2){let t=_w();ND(2),dw(t.cartService.cart()?.items)}}function Va(n,a){if(n&1){let t=yw();Ki$1(0,`app-empty-state`,5),im(`action`,function(){Ud(t);return $d(_w().onAction())}),Gl()}}var ve=class n{router=v$1(ft);cartService=v$1(y);onAction(){this.router.navigateByUrl(`/shop`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-cart`]],decls:3,vars:1,consts:[[1,`flex`,`w-full`,`items-start`,`gap-6`,`mt-32`],[`message`,`Your shopping cart is empty`,`icon`,`remove_shopping_cart`,`actionText`,`Go to shop`],[1,`w-3/4`],[3,`item`],[1,`w-1/4`],[`message`,`Your shopping cart is empty`,`icon`,`remove_shopping_cart`,`actionText`,`Go to shop`,3,`action`]],template:function(t,e){t&1&&(Ki$1(0,`section`),sw(1,ja,6,0,`div`,0)(2,Va,1,0,`app-empty-state`,1),Gl()),t&2&&(ND(),aw(e.cartService.cart()?.items?.length>0?1:2))},dependencies:[be,Ce,Lt],encapsulation:2})};var Dn=(n,a)=>{let t=v$1(ke$2),e=v$1(ft),i=v$1(Ve$2);return t.isAdmin()?!0:(i.error(`Nope`),e.navigateByUrl(`/shop`),!1)};var Tn=[{path:``,component:me},{path:`shop`,component:he},{path:`shop/:id`,component:ue},{path:`cart`,component:ve},{path:`checkout`,loadChildren:()=>import(`./chunk-BBn7o00M.js`).then(n=>n.checkoutRoutes)},{path:`orders`,loadChildren:()=>import(`./chunk-Buq7ebDB.js`).then(n=>n.orderRoutes)},{path:`account`,loadChildren:()=>import(`./chunk-CJQjc7kN.js`).then(n=>n.accountRoutes)},{path:`test-error`,component:ge},{path:`not-found`,component:_e},{path:`server-error`,component:fe},{path:`admin`,loadComponent:()=>import(`./chunk-BJ0rDYl8.js`).then(n=>n.AdminComponent),canActivate:[A$1,Dn]},{path:`**`,redirectTo:`not-found`,pathMatch:`full`}];var Ha=`@`;var Xa=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=v$1(ye$3);loadingSchedulerFn=v$1(Ua,{optional:!0});_engine;constructor(t,e,i,m,d){this.doc=t,this.delegate=e,this.zone=i,this.animationType=m,this.moduleImpl=d}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import(`./chunk-C1OpeYzO.js`).then(i=>i),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(i=>{throw new b$2(5300,!1)}).then(({ɵcreateEngine:i,ɵAnimationRendererFactory:m})=>{this._engine=i(this.animationType,this.doc);let d=new m(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(i.ɵtype===0)return i;typeof i.throwOnSyntheticProps==`boolean`&&(i.throwOnSyntheticProps=!1);let m=new Xe(i);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let j=d.createRenderer(t,e);m.use(j),this.scheduler??=this.injector.get(Ee$2,null,{optional:!0}),this.scheduler?.notify(10)}).catch(d=>{m.use(i)}),m}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static ɵfac=function(e){kT()};static ɵprov=ie$2({token:n,factory:n.ɵfac})}return n})();var Xe=class{delegate;replay=[];ɵtype=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let t of this.replay)t(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,t){return this.delegate.createElement(a,t)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,t){this.delegate.appendChild(a,t)}insertBefore(a,t,e,i){this.delegate.insertBefore(a,t,e,i)}removeChild(a,t,e,i){this.delegate.removeChild(a,t,e,i)}selectRootElement(a,t){return this.delegate.selectRootElement(a,t)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,t,e,i){this.delegate.setAttribute(a,t,e,i)}removeAttribute(a,t,e){this.delegate.removeAttribute(a,t,e)}addClass(a,t){this.delegate.addClass(a,t)}removeClass(a,t){this.delegate.removeClass(a,t)}setStyle(a,t,e,i){this.delegate.setStyle(a,t,e,i)}removeStyle(a,t,e){this.delegate.removeStyle(a,t,e)}setProperty(a,t,e){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(a,t,e)),this.delegate.setProperty(a,t,e)}setValue(a,t){this.delegate.setValue(a,t)}listen(a,t,e,i){return this.shouldReplay(t)&&this.replay.push(m=>m.listen(a,t,e,i)),this.delegate.listen(a,t,e,i)}shouldReplay(a){return this.replay!==null&&a.startsWith(Ha)}};var Ua=new S$2(``);function An(n=`animations`){return Oe$3(`NgAsyncAnimations`),Zo([{provide:Fr,useFactory:()=>new Xa(v$1(Kt),v$1(Gi$1),v$1(Z$3),n)},{provide:oE,useValue:n===`noop`?`NoopAnimations`:`BrowserAnimations`}])}var Pn=(n,a)=>{let t=v$1(ft),e=v$1(Ve$2);return a(n).pipe(Ks(i=>{if(i.status===400)if(i.error.errors){let m=[];for(let d in i.error.errors)i.error.errors[d]&&m.push(i.error.errors[d]);throw m.flat()}else e.error(i.error.title||i.error);if(i.status===401&&e.error(i.error.title||i.error),i.status===403&&e.error(`Forbidden`),i.status===404&&t.navigateByUrl(`/not-found`),i.status===500){let m={state:{error:i}};t.navigateByUrl(`/server-error`,m)}return Wv(()=>i)}))};var Rn=(n,a)=>{let t=v$1(nt);return t.busy(),a(n).pipe(ov.production?ue$2:dy(500),ld(()=>t.idle()))};var ye=class n{cartService=v$1(y);accountService=v$1(ke$2);signalRService=v$1(he$3);init(){let a=localStorage.getItem(`cart_id`);return sy({cart:a?this.cartService.getCart(a):Gv(null),user:this.accountService.getUserInfo().pipe(ud(e=>{e&&this.signalRService.createHubConnection()}))})}static ɵfac=function(t){return new(t||n)};static ɵprov=ie$2({token:n,factory:n.ɵfac,providedIn:`root`})};var Ln=(n,a)=>{return a(n.clone({withCredentials:!0}))};function qa(n){return()=>Qv(n.init()).finally(()=>{let a=document.getElementById(`initial-splash`);a&&a.remove()})}var On={providers:[{provide:Ct,useValue:`app-skinet-`+Math.random().toString(36).substring(2,9)},$g(jg$1()),jV({eventCoalescing:!0}),Kh(Tn),An(),Gl$1(Wl$1([Pn,Rn,Ln])),{provide:kg,useFactory:qa,multi:!0,deps:[ye]}]};var Qa=new S$2(`MAT_BADGE_CONFIG`);var Fn=`mat-badge-content`;var Ga=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`ng-component`]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return n})();var zn=(()=>{class n{_ngZone=v$1(Z$3);_elementRef=v$1(Br);_ariaDescriber=v$1(u_);_renderer=v$1(xc);_animationsDisabled=Jt$1();_idGenerator=v$1(zo);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color;overlap;disabled=!1;position;get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=v$1(Zc);_document=v$1(Kt);constructor(){let t=v$1(Qa,{optional:!0}),e=v$1(Ve$3);e.load(Ga),e.load(oi$1),this._color=t?.color||`primary`,this.overlap=t?.overlap??!0,this.position=t?.position||`above after`,this.size=t?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement(`span`),e=`mat-badge-active`;return t.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),t.setAttribute(`aria-hidden`,`true`),t.classList.add(Fn),this._animationsDisabled&&t.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??``}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Fn}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static ɵfac=function(e){return new(e||n)};static ɵdir=IC({type:n,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(e,i){e&2&&gm(`mat-badge-overlap`,i.overlap)(`mat-badge-above`,i.isAbove())(`mat-badge-below`,!i.isAbove())(`mat-badge-before`,!i.isAfter())(`mat-badge-after`,i.isAfter())(`mat-badge-small`,i.size===`small`)(`mat-badge-medium`,i.size===`medium`)(`mat-badge-large`,i.size===`large`)(`mat-badge-hidden`,i.hidden||!i.content)(`mat-badge-disabled`,i.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,HV],disabled:[2,`matBadgeDisabled`,`disabled`,HV],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,HV]}})}return n})();function Wa(n,a){n&1&&Jg(0,`div`,2)}var Ya=new S$2(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var jn=(()=>{class n{_elementRef=v$1(Br);_ngZone=v$1(Z$3);_changeDetectorRef=v$1(FV);_renderer=v$1(xc);_cleanupTransitionEnd;constructor(){let t=Tf(),e=v$1(Ya,{optional:!0});this._isNoopAnimation=t===`di-disabled`,t===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),this.mode=e.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor=`primary`;get value(){return this._value}set value(t){this._value=Bn(t||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(t){this._bufferValue=Bn(t||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Ye$1;get mode(){return this._mode}set mode(t){this._mode=t,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=t=>{this.animationEnd.observers.length===0||!t.target||!t.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(e){return new(e||n)};static ɵcmp=gC({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(e,i){e&2&&(Yg(`aria-valuenow`,i._isIndeterminate()?null:i.value)(`mode`,i.mode),Gw(`mat-`+i.color),gm(`_mat-animation-noopable`,i._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!i._isNoopAnimation)(`mdc-linear-progress--indeterminate`,i._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,BV],bufferValue:[2,`bufferValue`,`bufferValue`,BV],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(e,i){e&1&&(Wl(0,`div`,0),Jg(1,`div`,1),sw(2,Wa,1,0,`div`,2),zl(),Wl(3,`div`,3),Jg(4,`span`,4),zl(),Wl(5,`div`,5),Jg(6,`span`,4),zl()),e&2&&(ND(),hm(`flex-basis`,i._getBufferBarFlexBasis()),ND(),aw(i.mode===`buffer`?2:-1),ND(),hm(`transform`,i._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function Bn(n,a=0,t=100){return Math.max(a,Math.min(t,n))}var xe=class n{accountService=v$1(ke$2);viewContainerRef=v$1(vs);templateRef=v$1(Lr);constructor(){ff(()=>{this.accountService.isAdmin()?this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear()})}static ɵfac=function(t){return new(t||n)};static ɵdir=IC({type:n,selectors:[[``,`appIsAdmin`,``]]})};var Za=()=>({exact:!0});function Ka(n,a){n&1&&(Ki$1(0,`a`,17),nb(1,`Admin`),Gl())}function $a(n,a){if(n&1&&(Ki$1(0,`button`,11)(1,`mat-icon`),nb(2,`arrow_drop_down`),Gl(),Ki$1(3,`span`),nb(4),Gl()()),n&2){let t=_w();Zg(`matMenuTriggerFor`,kw(19)),ND(4),wm(t.accountService.currentUser()?.email)}}function Ja(n,a){n&1&&(Ki$1(0,`button`,18),nb(1,`Login`),Gl(),Ki$1(2,`button`,19),nb(3,`Register`),Gl())}function tr(n,a){n&1&&Kg(0,`mat-progress-bar`,12)}var ke=class n{busyService=v$1(nt);cartService=v$1(y);accountService=v$1(ke$2);router=v$1(ft);logout(){this.accountService.logout().subscribe({next:()=>{this.accountService.currentUser.set(null),this.router.navigateByUrl(`/`)}})}static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-header`]],decls:33,vars:6,consts:[[`menu`,`matMenu`],[1,`border-b`,`shadow-md`,`p-3`,`w-full`,`max-h-20`,`fixed`,`top-0`,`z-50`,`bg-white`],[1,`flex`,`align-middle`,`items-center`,`justify-between`,`max-w-screen-2xl`,`mx-auto`],[`routerLink`,`/`,`src`,`/images/logo.jpg`,`alt`,`App Logo`,1,`max-h-16`],[1,`flex`,`gap-3`,`my-2`,`uppercase`,`text-2xl`],[`routerLink`,`/`,`routerLinkActive`,`active`,3,`routerLinkActiveOptions`],[`routerLink`,`/shop`,`routerLinkActive`,`active`],[`routerLink`,`/test-error`,`routerLinkActive`,`active`],[`routerLink`,`/admin`,`routerLinkActive`,`active`,4,`appIsAdmin`],[1,`flex`,`gap-3`,`align-middle`],[`routerLink`,`/cart`,`routerLinkActive`,`active`,`matBadgeSize`,`large`,1,`custom-badge`,`mt-2`,`mr-2`,3,`matBadge`],[`mat-button`,``,3,`matMenuTriggerFor`],[`mode`,`indeterminate`,1,`fixed`,`top-20`,`z-50`],[1,`px-5`],[`mat-menu-item`,``,`routerLink`,`/cart`,1,`px-3`],[`mat-menu-item`,``,`routerLink`,`/orders`,1,`px-3`],[`mat-menu-item`,``,1,`px-3`,3,`click`],[`routerLink`,`/admin`,`routerLinkActive`,`active`],[`routerLink`,`/account/login`,`mat-stroked-button`,``],[`routerLink`,`/account/register`,`mat-stroked-button`,``]],template:function(t,e){t&1&&(Ki$1(0,`header`,1)(1,`div`,2),Kg(2,`img`,3),Ki$1(3,`nav`,4)(4,`a`,5),nb(5,`Home`),Gl(),Ki$1(6,`a`,6),nb(7,`Shop`),Gl(),Ki$1(8,`a`,7),nb(9,`Errors`),Gl(),Fg(10,Ka,2,0,`a`,8),Gl(),Ki$1(11,`div`,9)(12,`a`,10)(13,`mat-icon`),nb(14,`shopping_cart`),Gl()(),sw(15,$a,5,2,`button`,11)(16,Ja,4,0),Gl()()(),sw(17,tr,1,0,`mat-progress-bar`,12),Ki$1(18,`mat-menu`,13,0)(20,`button`,14)(21,`mat-icon`),nb(22,`shopping_cart`),Gl(),nb(23,` My cart `),Gl(),Ki$1(24,`button`,15)(25,`mat-icon`),nb(26,`history`),Gl(),nb(27,` My orders `),Gl(),Kg(28,`mat-divider`),Ki$1(29,`button`,16),im(`click`,function(){return e.logout()}),Ki$1(30,`mat-icon`),nb(31,`logout`),Gl(),nb(32,` Logout `),Gl()()),t&2&&(ND(4),Zg(`routerLinkActiveOptions`,hb(5,Za)),ND(8),Zg(`matBadge`,sb(e.cartService.itemCount())),ND(3),aw(e.accountService.currentUser()?15:16),ND(2),aw(e.busyService.loading?17:-1))},dependencies:[be$2,_0,zn,Qr$1,Gh,jn,pe,it,Pt,Xt,xe],styles:[`.custom-badge[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{width:24px;height:24px;font-size:14px;line-height:24px}.custom-badge[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:32px;width:32px;height:32px}a.active[_ngcontent-%COMP%]{color:#7d00fa}`]})};yl(class n{title=`Skinet`;static ɵfac=function(t){return new(t||n)};static ɵcmp=gC({type:n,selectors:[[`app-root`]],decls:3,vars:0,consts:[[1,`container`,`mt-24`]],template:function(t,e){t&1&&(Kg(0,`app-header`),Ki$1(1,`div`,0),Kg(2,`router-outlet`),Gl())},dependencies:[No,ke],encapsulation:2})},On).catch(n=>console.error(n));export{Nt as C,ke$2 as S,be$2 as _,de$1 as a,xe$2 as b,nt$1 as c,_ as d,w as f,y as g,j as h,ai as i,ri as l,Ce as m,Qo as n,mn as o,A$1 as p,Zi as r,ni as s,Je as t,so as u,fe$1 as v,Ve$2 as w,he$3 as x,ie as y};