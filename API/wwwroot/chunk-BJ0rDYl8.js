import{$ as Lg,$n as kw,An as gC,At as Ty,B as IC,Bn as ie,Cr as rv,D as FV,Dr as sw,Dt as Tb,E as Ey,Et as Sw,F as Gw,Fn as hb,Fr as uy,Ft as VE,Gt as Ye$1,Ht as X,Ir as v,J as Kl,Jr as ye,Jt as Yv,K as Kg,Kn as jg,Kr as xc,Kt as Yg,L as HV,Ln as hm,Lr as vC,Mt as Ud,N as Gl,Nn as gm,O as Fe,P as Gv,Pr as uw,Rr as vd,S as Eb,Sn as dw,St as S,Tn as em,U as Iy,Un as j,V as IE,Vn as im,Vr as w_,Wr as wm,Xr as yw,Xt as Zg,Yn as jt,Yt as Z,Z as Kt,Zt as Zl,_n as cw,ar as lw,bn as db,cn as ay,ct as Nw,dn as bh,dt as Ow,et as Lr,fr as nr,g as Db,gn as cr,gt as Qg,ir as lr,it as ND,j as Fv,k as Fg,mn as cm,n as $d,nr as lm,nt as Mt,o as Aw,pt as Pv,q as Ki$1,qn as ji$1,qt as Yl,rn as ab,rt as N,s as BV,sn as aw,ti as zv,tn as _w,u as Br,ur as nb,vn as cy,wr as ry,x as Dy,zr as vs}from"./chunk-CKJRNAL7.js";import{$ as ne,D as Qu,E as Qr,F as Xu,H as dy,K as fu,N as Ve,R as _0,S as Oc,U as ei$1,W as eu,et as nf,gt as zo,h as K_,n as $o,nt as of,p as Jt}from"./chunk-wJ6ehkWR.js";import{A as Xt,D as Vs,G as on,K as os,T as Ut,V as ke$1,Y as rn,Z as sn,c as Gi$1,et as xe,i as Ce,r as Bs,rt as zs,u as Ir}from"./chunk-CysTuair.js";import{_ as be,a as de,c as nt$1,i as ai$1,l as ri$1,n as Qo,o as mn,r as Zi$1,s as ni$1,t as Je$1,u as so,y as ie$1}from"./main-6QENF3DC.js";import{t as s}from"./chunk-BA4FtDYl.js";var Yn=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var Xn=[`caption`,`colgroup, col`,`*`];function Jn(i,o){i&1&&Nw(0,2)}function ei(i,o){i&1&&(Ki$1(0,`thead`,0),em(1,1),Gl(),Ki$1(2,`tbody`,0),em(3,2)(4,3),Gl(),Ki$1(5,`tfoot`,0),em(6,4),Gl())}function ti(i,o){i&1&&em(0,1)(1,2)(2,3)(3,4)}var z=new S(`CDK_TABLE`);var Be=(()=>{class i{template=v(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`cdkCellDef`,``]]})}return i})();var Le=(()=>{class i{template=v(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`cdkHeaderCellDef`,``]]})}return i})();var Rn=(()=>{class i{template=v(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`cdkFooterCellDef`,``]]})}return i})();var fe=(()=>{class i{_table=v(z,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,n,a){if(t&1&&cm(a,Be,5)(a,Le,5)(a,Rn,5),t&2){let r;Aw(r=Ow())&&(n.cell=r.first),Aw(r=Ow())&&(n.headerCell=r.first),Aw(r=Ow())&&(n.footerCell=r.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,HV],stickyEnd:[2,`stickyEnd`,`stickyEnd`,HV]}})}return i})();var Ae=class{constructor(o,e){e.nativeElement.classList.add(...o._columnCssClassName)}};var xn=(()=>{class i extends Ae{constructor(){super(v(fe),v(Br))}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Lg]})}return i})();var Tn=(()=>{class i extends Ae{constructor(){let e=v(fe),t=v(Br);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute(`role`,n)}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Lg]})}return i})();var Xe=(()=>{class i{template=v(Lr);_differs=v(w_);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ke?e.headerCell.template:this instanceof Je?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,features:[IE]})}return i})();var ke=(()=>{class i extends Xe{_table=v(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,HV]},features:[Lg,IE]})}return i})();var Je=(()=>{class i extends Xe{_table=v(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,HV]},features:[Lg,IE]})}return i})();var Oe=(()=>{class i extends Xe{_table=v(z,{optional:!0});when;static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Lg]})}return i})();var le=(()=>{class i{_viewContainer=v(vs);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`cdkCellOutlet`,``]]})}return i})();var et=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&em(0,0)},dependencies:[le],encapsulation:2,changeDetection:1})}return i})();var tt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&em(0,0)},dependencies:[le],encapsulation:2,changeDetection:1})}return i})();var In=(()=>{class i{templateRef=v(Lr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return i})();var Dn=[`top`,`bottom`,`left`,`right`];var Ye=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(o=>this._updateCachedSizes(o)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(o,e,t=!0,n=!0,a,r,l){this._isNativeHtmlTable=o,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=a,this._positionListener=r,this._tableInjector=l,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(o,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(o);let t=[];for(let n of o)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));bh({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(o,e,t,n=!0,a=!0){if(!o.length||!this._isBrowser||!(e.some(H=>H)||t.some(H=>H))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let r=o[0],l=r.children.length,c=this.direction===`rtl`,u=c?`right`:`left`,p=c?`left`:`right`,w=e.lastIndexOf(!0),D=t.indexOf(!0),k,ft,bt;a&&this._updateStickyColumnReplayQueue({rows:[...o],stickyStartStates:[...e],stickyEndStates:[...t]}),bh({earlyRead:()=>{k=this._getCellWidths(r,n),ft=this._getStickyStartColumnPositions(k,e),bt=this._getStickyEndColumnPositions(k,t)},write:()=>{for(let H of o)for(let F=0;F<l;F++){let pt=H.children[F];e[F]&&this._addStickyStyle(pt,u,ft[F],F===w),t[F]&&this._addStickyStyle(pt,p,bt[F],F===D)}this._positionListener&&k.some(H=>!!H)&&(this._positionListener.stickyColumnsUpdated({sizes:w===-1?[]:k.slice(0,w+1).map((H,F)=>e[F]?H:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:D===-1?[]:k.slice(D).map((H,F)=>t[F+D]?H:null).reverse()}))}},{injector:this._tableInjector})}stickRows(o,e,t){if(!this._isBrowser)return;let n=t===`bottom`?o.slice().reverse():o,a=t===`bottom`?e.slice().reverse():e,r=[],l=[],c=[];bh({earlyRead:()=>{for(let u=0,p=0;u<n.length;u++){if(!a[u])continue;r[u]=p;let w=n[u];c[u]=this._isNativeHtmlTable?Array.from(w.children):[w];let D=this._retrieveElementSize(w).height;p+=D,l[u]=D}},write:()=>{let u=a.lastIndexOf(!0);for(let p=0;p<n.length;p++){if(!a[p])continue;let w=r[p],D=p===u;for(let k of c[p])this._addStickyStyle(k,t,w,D)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:l,offsets:r,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:l,offsets:r,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(o,e){this._isNativeHtmlTable&&bh({write:()=>{let t=o.querySelector(`tfoot`);t&&(e.some(n=>!n)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(o,e){if(!o.classList.contains(this._stickCellCss))return;for(let n of e)o.style[n]=``,o.classList.remove(this._borderCellCss[n]);Dn.some(n=>e.indexOf(n)===-1&&o.style[n])?o.style.zIndex=this._getCalculatedZIndex(o):(o.style.zIndex=``,this._needsPositionStickyOnElement&&(o.style.position=``),o.classList.remove(this._stickCellCss))}_addStickyStyle(o,e,t,n){o.classList.add(this._stickCellCss),n&&o.classList.add(this._borderCellCss[e]),o.style[e]=`${t}px`,o.style.zIndex=this._getCalculatedZIndex(o),this._needsPositionStickyOnElement&&(o.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(o){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of Dn)o.style[n]&&(t+=e[n]);return t?`${t}`:``}_getCellWidths(o,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=o.children;for(let a=0;a<n.length;a++){let r=n[a];t.push(this._retrieveElementSize(r).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(o,e){let t=[],n=0;for(let a=0;a<o.length;a++)e[a]&&(t[a]=n,n+=o[a]);return t}_getStickyEndColumnPositions(o,e){let t=[],n=0;for(let a=o.length;a>0;a--)e[a]&&(t[a]=n,n+=o[a]);return t}_retrieveElementSize(o){let e=this._elemSizeCache.get(o);if(e)return e;let t=o.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(o,n),this._resizeObserver.observe(o,{box:`border-box`})),n}_updateStickyColumnReplayQueue(o){this._removeFromStickyColumnReplayQueue(o.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(o)}_removeFromStickyColumnReplayQueue(o){let e=new Set(o);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(o){let e=!1;for(let t of o){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&ni(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function ni(i){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(o=>i.classList.contains(o))}function kn(i){return Error(`Could not find column with id "${i}".`)}var we=new S(`STICKY_POSITIONING_LISTENER`);var nt=(()=>{class i{viewContainer=v(vs);elementRef=v(Br);constructor(){let e=v(z);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`rowOutlet`,``]]})}return i})();var it=(()=>{class i{viewContainer=v(vs);elementRef=v(Br);constructor(){let e=v(z);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`headerRowOutlet`,``]]})}return i})();var at=(()=>{class i{viewContainer=v(vs);elementRef=v(Br);constructor(){let e=v(z);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`footerRowOutlet`,``]]})}return i})();var ot=(()=>{class i{viewContainer=v(vs);elementRef=v(Br);constructor(){let e=v(z);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`noDataRowOutlet`,``]]})}return i})();var rt=(()=>{class i{_differs=v(w_);_changeDetectorRef=v(FV);_elementRef=v(Br);_dir=v(nf,{optional:!0});_platform=v(ne);_viewRepeater;_viewportRuler=v(Ce);_injector=v(ye);_virtualScrollViewport=v(Vs,{optional:!0,host:!0});_positionListener=v(we,{optional:!0})||v(we,{optional:!0,skipSelf:!0});_document=v(Kt);_data;_renderedRange;_onDestroy=new X;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new X;_footerRowStickyUpdates=new X;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new X;_dataStream=new X;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Ye$1;viewChange=new nr({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){v(new rv(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(Ty(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new sn:new ie$1,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),os(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,a,r)=>this._getEmbeddedViewArgs(n.item,r),n=>n.item.data,n=>{n.operation===ke$1.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let a=t.get(n.currentIndex);a.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=Sn(this._headerRowOutlet,`thead`);n&&(n.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=Sn(this._footerRowOutlet,`tfoot`);n&&(n.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,r)=>{this._addStickyColumnStyles([a],this._headerRowDefs[r])}),this._rowDefs.forEach(a=>{let r=[];for(let l=0;l<t.length;l++)this._renderRows[l].rowDef===a&&r.push(t[l]);this._addStickyColumnStyles(r,a)}),n.forEach((a,r)=>{this._addStickyColumnStyles([a],this._footerRowDefs[r])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let r=this._data[a],l=this._getRenderRowsForData(r,a,n.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let c=0;c<l.length;c++){let u=l[c],p=this._cachedRenderRowsMap.get(u.data);p.has(u.rowDef)?p.get(u.rowDef).push(u):p.set(u.rowDef,[u]),e.push(u)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(r=>{let l=n&&n.has(r)?n.get(r):[];if(l.length){let c=l.shift();return c.dataIndex=t,c}else return{data:e,rowDef:r,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Pe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Pe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Pe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Pe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(r,l)=>{let c=!!l.getColumnsDiff();return r||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||n||a}_switchDataSource(e){this._data=[],os(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;os(this.dataSource)?e=this.dataSource.connect(this):zv(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Gv(this.dataSource)),this._renderChangeSubscription=ry([e,this.viewChange]).pipe(Ty(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(l=>{let c=this._columnDefsByName.get(l);if(!c)throw kn(l);return c}),a=n.map(l=>l.sticky),r=n.map(l=>l.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,r,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let a=e.viewContainer.get(n);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(r=>r.when&&r.when(t,e))||this._defaultRowDef;a&&n.push(a)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,a={$implicit:e.data};return{templateRef:n.template,context:a,index:t}}_renderRow(e,t,n,a={}){let r=e.viewContainer.createEmbeddedView(t.template,a,n);return this._renderCellTemplateForItem(t,a),r}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))le.mostRecentCellOutlet&&le.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let r=e.get(t).context;r.count=n,r.first=t===0,r.last=t===n-1,r.even=t%2===0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[t].dataIndex,r.renderIndex=t):r.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);if(!n)throw kn(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new Ye(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Gv()).pipe(Ty(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?Fv:Pv;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(cy(0,t),Ty(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,a)=>this._measureRangeSize(n,a)}),ry([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(Ty(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l){let c=a.offsets[r],u=n!==0?Math.max(n-c,c):-c;for(let p of l)p.style.top=`${-u}px`}}}),ry([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(Ty(this._onDestroy)).subscribe(([n,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let r=0;r<a.elements.length;r++){let l=a.elements[r];if(l)for(let c of l)c.style.bottom=`${n+a.offsets[r]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let a=n.createEmbeddedView(e.templateRef),r=a.rootNodes[0];if(a.rootNodes.length===1&&r?.nodeType===this._document.ELEMENT_NODE){r.setAttribute(`role`,`row`),r.classList.add(...e._contentClassNames);let l=r.querySelectorAll(e._cellSelector);for(let c=0;c<l.length;c++)l[c].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let n=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<n.start||(e.end,n.end);let r=e.start-n.start,l=e.end-e.start,c,u;for(let D=0;D<l;D++){let k=a.get(D+r);if(k&&k.rootNodes.length){c=u=k.rootNodes[0];break}}for(let D=l-1;D>-1;D--){let k=a.get(D+r);if(k&&k.rootNodes.length){u=k.rootNodes[k.rootNodes.length-1];break}}let p=c?.getBoundingClientRect?.(),w=u?.getBoundingClientRect?.();return p&&w?w.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,n,a){if(t&1&&cm(a,In,5)(a,fe,5)(a,Oe,5)(a,ke,5)(a,Je,5),t&2){let r;Aw(r=Ow())&&(n._noDataRow=r.first),Aw(r=Ow())&&(n._contentColumnDefs=r),Aw(r=Ow())&&(n._contentRowDefs=r),Aw(r=Ow())&&(n._contentHeaderRowDefs=r),Aw(r=Ow())&&(n._contentFooterRowDefs=r)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,n){t&2&&gm(`cdk-table-fixed-layout`,n.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,HV],fixedLayout:[2,`fixedLayout`,`fixedLayout`,HV],recycleRows:[2,`recycleRows`,`recycleRows`,HV]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[db([{provide:z,useExisting:i},{provide:we,useValue:null}])],ngContentSelectors:Xn,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(Sw(Yn),Nw(0),Nw(1,1),sw(2,Jn,1,0),sw(3,ei,7,0)(4,ti,4,0)),t&2&&(ND(2),aw(n._isServer?2:-1),ND(),aw(n._isNativeHtmlTable?3:4))},dependencies:[it,nt,ot,at],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return i})();function Pe(i,o){return i.concat(Array.from(o))}function Sn(i,o){let e=o.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n===`TABLE`)break;t=t.parentNode}return null}var Mn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=vC({type:i});static ɵinj=vd({imports:[Xt]})}return i})();var ii=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var ai=[`caption`,`colgroup, col`,`*`];function oi(i,o){i&1&&Nw(0,2)}function ri(i,o){i&1&&(Ki$1(0,`thead`,0),em(1,1),Gl(),Ki$1(2,`tbody`,2),em(3,3)(4,4),Gl(),Ki$1(5,`tfoot`,0),em(6,5),Gl())}function si(i,o){i&1&&em(0,1)(1,3)(2,4)(3,5)}var Nn=(()=>{class i extends rt{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵcmp=gC({type:i,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,n){t&2&&gm(`mat-table-fixed-layout`,n.fixedLayout)},exportAs:[`matTable`],features:[db([{provide:rt,useExisting:i},{provide:z,useExisting:i},{provide:we,useValue:null}]),Lg],ngContentSelectors:ai,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,n){t&1&&(Sw(ii),Nw(0),Nw(1,1),sw(2,oi,1,0),sw(3,ri,7,0)(4,si,4,0)),t&2&&(ND(2),aw(n._isServer?2:-1),ND(),aw(n._isNativeHtmlTable?3:4))},dependencies:[it,nt,ot,at],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return i})();var En=(()=>{class i extends Be{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matCellDef`,``]],features:[db([{provide:Be,useExisting:i}]),Lg]})}return i})();var Fn=(()=>{class i extends Le{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matHeaderCellDef`,``]],features:[db([{provide:Le,useExisting:i}]),Lg]})}return i})();var Pn=(()=>{class i extends fe{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[db([{provide:fe,useExisting:i}]),Lg]})}return i})();var An=(()=>{class i extends xn{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Lg]})}return i})();var Bn=(()=>{class i extends Tn{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Lg]})}return i})();var Ln=(()=>{class i extends ke{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,HV]},features:[db([{provide:ke,useExisting:i}]),Lg]})}return i})();var On=(()=>{class i extends Oe{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[db([{provide:Oe,useExisting:i}]),Lg]})}return i})();var Hn=(()=>{class i extends et{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵcmp=gC({type:i,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[db([{provide:et,useExisting:i}]),Lg],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&em(0,0)},dependencies:[le],encapsulation:2,changeDetection:1})}return i})();var zn=(()=>{class i extends tt{static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵcmp=gC({type:i,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[db([{provide:tt,useExisting:i}]),Lg],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,n){t&1&&em(0,0)},dependencies:[le],encapsulation:2,changeDetection:1})}return i})();var jn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=vC({type:i});static ɵinj=vd({imports:[Mn,ei$1]})}return i})();var li=9007199254740991;var He=class extends on{_data;_renderData=new nr([]);_filter=new nr(``);_internalPageChanges=new X;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(o){o=Array.isArray(o)?o:[],this._data.next(o),this._renderChangesSubscription||this._filterData(o)}get filter(){return this._filter.value}set filter(o){this._filter.next(o),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(o){this._sort=o,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(o){this._paginator=o,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(o,e)=>{let t=o[e];if(Oc(t)){let n=Number(t);return n<li?n:t}return t};sortData=(o,e)=>{let t=e.active,n=e.direction;return!t||n==``?o:o.sort((a,r)=>{let l=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(r,t),u=typeof l,p=typeof c;u!==p&&(u===`number`&&(l+=``),p===`number`&&(c+=``));let w=0;return l!=null&&c!=null?l>c?w=1:l<c&&(w=-1):l!=null?w=1:c!=null&&(w=-1),w*(n==`asc`?1:-1)})};filterPredicate=(o,e)=>{let t=e.trim().toLowerCase();return Object.values(o).some(n=>`${n}`.toLowerCase().includes(t))};constructor(o=[]){super(),this._data=new nr(o),this._updateChangeSubscription()}_updateChangeSubscription(){let o=this._sort?ay(this._sort.sortChange,this._sort.initialized):Gv(null),e=this._paginator?ay(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Gv(null),t=this._data,r=ry([ry([ry([t,this._filter]).pipe(Fe(([l])=>this._filterData(l))),o]).pipe(Fe(([l])=>this._orderData(l))),e]).pipe(Fe(([l])=>this._pageData(l)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=r.subscribe(l=>this._renderData.next(l))}_filterData(o){return this.filteredData=this.filter==null||this.filter===``?o:o.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(o){return this.sort?this.sortData(o.slice(),this.sort):o}_pageData(o){if(!this.paginator)return o;let e=this.paginator.pageIndex*this.paginator.pageSize;return o.slice(e,e+this.paginator.pageSize)}_updatePaginator(o){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=o,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var ze=class{pageNumber=1;pageSize=10;filter=``};var ht=[`*`];function hi(i,o){i&1&&Nw(0)}var ui=[`tabListContainer`];var fi=[`tabList`];var bi=[`tabListInner`];var pi=[`nextPaginator`];var _i=[`previousPaginator`];var gi=[`content`];function yi(i,o){}var vi=[`tabBodyWrapper`];var Ci=[`tabHeader`];function wi(i,o){}function Di(i,o){if(i&1&&Fg(0,wi,0,0,`ng-template`,12),i&2){let e=_w().$implicit;Zg(`cdkPortalOutlet`,e.templateLabel)}}function ki(i,o){if(i&1&&nb(0),i&2){let e=_w().$implicit;wm(e.textLabel)}}function Si(i,o){if(i&1){let e=yw();Ki$1(0,`div`,7,2),im(`click`,function(){let n=Ud(e),a=n.$implicit,r=n.$index,l=_w(),c=kw(1);return $d(l._handleClick(a,c,r))})(`cdkFocusChange`,function(n){let a=Ud(e).$index;return $d(_w()._tabFocusChanged(n,a))}),Kg(2,`span`,8)(3,`div`,9),Ki$1(4,`span`,10)(5,`span`,11),sw(6,Di,1,1,null,12)(7,ki,1,1),Gl()()()}if(i&2){let e=o.$implicit,t=o.$index,n=kw(1),a=_w();Gw(e.labelClass),gm(`mdc-tab--active`,a.selectedIndex===t),Zg(`id`,a._getTabLabelId(e,t))(`disabled`,e.disabled)(`fitInkBarToContent`,a.fitInkBarToContent),Yg(`tabIndex`,a._getTabIndex(t))(`aria-posinset`,t+1)(`aria-setsize`,a._tabs.length)(`aria-controls`,a._getTabContentId(t))(`aria-selected`,a.selectedIndex===t)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),ND(3),Zg(`matRippleTrigger`,n)(`matRippleDisabled`,e.disabled||a.disableRipple),ND(3),aw(e.templateLabel?6:7)}}function Ri(i,o){i&1&&Nw(0)}function xi(i,o){if(i&1){let e=yw();Ki$1(0,`mat-tab-body`,13),im(`_onCentered`,function(){Ud(e);return $d(_w()._removeTabBodyWrapperHeight())})(`_onCentering`,function(n){Ud(e);return $d(_w()._setTabBodyWrapperHeight(n))})(`_beforeCentering`,function(n){Ud(e);return $d(_w()._bodyCentered(n))}),Gl()}if(i&2){let e=o.$implicit,t=o.$index,n=_w();Gw(e.bodyClass),Zg(`id`,n._getTabContentId(t))(`content`,e.content)(`position`,e.position)(`animationDuration`,n._bodyAnimationDuration)(`preserveContent`,n.preserveContent),Yg(`tabindex`,n.contentTabIndex!=null&&n.selectedIndex===t?n.contentTabIndex:null)(`aria-labelledby`,n._getTabLabelId(e,t))(`aria-hidden`,n.selectedIndex!==t)}}var Ti=new S(`MatTabContent`);var Ii=(()=>{class i{template=v(Lr);static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,selectors:[[``,`matTabContent`,``]],features:[db([{provide:Ti,useExisting:i}])]})}return i})();var Mi=new S(`MatTabLabel`);var $n=new S(`MAT_TAB`);var Ni=(()=>{class i extends Bs{_closestTab=v($n,{optional:!0});static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[db([{provide:Mi,useExisting:i}]),Lg]})}return i})();var Un=new S(`MAT_TAB_GROUP`);var ut=(()=>{class i{_viewContainerRef=v(vs);_closestTabGroup=v(Un,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new X;position=null;origin=null;isActive=!1;constructor(){v(Ve).load(fu)}ngOnChanges(e){(e.hasOwnProperty(`textLabel`)||e.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new xe(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`mat-tab`]],contentQueries:function(t,n,a){if(t&1&&cm(a,Ni,5)(a,Ii,7,Lr),t&2){let r;Aw(r=Ow())&&(n.templateLabel=r.first),Aw(r=Ow())&&(n._explicitContent=r.first)}},viewQuery:function(t,n){if(t&1&&lm(Lr,7),t&2){let a;Aw(a=Ow())&&(n._implicitContent=a.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(t,n){t&2&&Yg(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,HV],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[db([{provide:$n,useExisting:i}]),IE],ngContentSelectors:ht,decls:1,vars:0,template:function(t,n){t&1&&(Sw(),jg(0,hi,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return i})();var st=`mdc-tab-indicator--active`;var Qn=`mdc-tab-indicator--no-transition`;var dt=class{_items;_currentItem;constructor(o){this._items=o}hide(){this._items.forEach(o=>o.deactivateInkBar()),this._currentItem=void 0}alignToElement(o){let e=this._items.find(n=>n.elementRef.nativeElement===o),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}};var Ei=(()=>{class i{_elementRef=v(Br);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(st);return}let n=t.getBoundingClientRect(),a=e.width/n.width,r=e.left-n.left;t.classList.add(Qn),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${r}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(Qn),t.classList.add(st),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(st)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement(`span`),n=this._inkBarContentElement=e.createElement(`span`);t.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,HV]}})}return i})();var qn=(()=>{class i extends Ei{elementRef=v(Br);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(t,n){t&2&&(Yg(`aria-disabled`,!!n.disabled),gm(`mat-mdc-tab-disabled`,n.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,HV]},features:[Lg]})}return i})();var Vn={passive:!0};var Fi=650;var Pi=100;function lt(i){let o=i+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(o)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(o)?o:``}var Ai=(()=>{class i{_elementRef=v(Br);_changeDetectorRef=v(FV);_viewportRuler=v(Ce);_dir=v(nf,{optional:!0});_ngZone=v(Z);_platform=v(ne);_sharedResizeObserver=v(Gi$1);_injector=v(ye);_renderer=v(xc);_animationsDisabled=Jt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new X;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new X;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new Ye$1;indexFocused=new Ye$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Vn),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Vn))}ngAfterContentInit(){let e=this._dir?this._dir.change:Gv(`ltr`),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(uy(32),Ty(this._destroyed)),n=this._viewportRuler.change(150).pipe(Ty(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new $o(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),bh(a,{injector:this._injector}),ay(e,n,t,this._items.changes,this._itemsResized()).pipe(Ty(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!=`function`?jt:this._items.changes.pipe(Iy(this._items),Dy(e=>new N(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>t.next(a));return e.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ey(1),lr(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!eu(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e==`before`?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:r}=t.elementRef.nativeElement,l,c;this._getLayoutDirection()==`ltr`?(l=a,c=l+r):(c=this._tabListInner.nativeElement.offsetWidth-a,l=c-r);let u=this.scrollDistance,p=this.scrollDistance+n;l<u?this.scrollDistance-=u-l:c>p&&(this.scrollDistance+=Math.min(c-p,l-u))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),cr(Fi,Pi).pipe(Ty(ay(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(e);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static ɵfac=function(t){return new(t||i)};static ɵdir=IC({type:i,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,HV],selectedIndex:[2,`selectedIndex`,`selectedIndex`,BV]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return i})();var Bi=(()=>{class i extends Ai{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new dt(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵcmp=gC({type:i,selectors:[[`mat-tab-header`]],contentQueries:function(t,n,a){if(t&1&&cm(a,qn,4),t&2){let r;Aw(r=Ow())&&(n._items=r)}},viewQuery:function(t,n){if(t&1&&lm(ui,7)(fi,7)(bi,7)(pi,5)(_i,5),t&2){let a;Aw(a=Ow())&&(n._tabListContainer=a.first),Aw(a=Ow())&&(n._tabList=a.first),Aw(a=Ow())&&(n._tabListInner=a.first),Aw(a=Ow())&&(n._nextPaginator=a.first),Aw(a=Ow())&&(n._previousPaginator=a.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(t,n){t&2&&gm(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,HV]},features:[Lg],ngContentSelectors:ht,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(t,n){t&1&&(Sw(),Ki$1(0,`div`,5,0),im(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(r){return n._handlePaginatorPress(`before`,r)})(`touchend`,function(){return n._stopInterval()}),Kg(2,`div`,6),Gl(),Ki$1(3,`div`,7,1),im(`keydown`,function(r){return n._handleKeydown(r)}),Ki$1(5,`div`,8,2),im(`cdkObserveContent`,function(){return n._onContentChanges()}),Ki$1(7,`div`,9,3),Nw(9),Gl()()(),Ki$1(10,`div`,10,4),im(`mousedown`,function(r){return n._handlePaginatorPress(`after`,r)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),Kg(12,`div`,6),Gl()),t&2&&(gm(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),Zg(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),ND(3),gm(`_mat-animation-noopable`,n._animationsDisabled),ND(2),Yg(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby||null),ND(5),gm(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),Zg(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[K_,dy],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return i})();var Li=new S(`MAT_TABS_CONFIG`);var Wn=(()=>{class i extends zs{_host=v(ct);_ngZone=v(Z);_centeringSub=j.EMPTY;_leavingSub=j.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Iy(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let e;return function(n){return(e||(e=VE(i)))(n||i)}})();static ɵdir=IC({type:i,selectors:[[``,`matTabBodyHost`,``]],features:[Lg]})}return i})();var ct=(()=>{class i{_elementRef=v(Br);_dir=v(nf,{optional:!0});_ngZone=v(Z);_injector=v(ye);_renderer=v(xc);_diAnimationsDisabled=Jt();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=j.EMPTY;_position;_previousPosition;_onCentering=new Ye$1;_beforeCentering=new Ye$1;_afterLeavingCenter=new Ye$1;_onCentered=new Ye$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=v(FV);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),bh(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),n.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,`transitionstart`,n=>{n.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(e,`transitionend`,t),this._renderer.listen(e,`transitioncancel`,t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position===`center`;this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,e)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e==`ltr`?`left`:`right`:this._positionIndex>0?this._position=e==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),bh(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`mat-tab-body`]],viewQuery:function(t,n){if(t&1&&lm(Wn,5)(gi,5),t&2){let a;Aw(a=Ow())&&(n._portalHost=a.first),Aw(a=Ow())&&(n._contentElement=a.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(t,n){t&2&&Yg(`inert`,n._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(t,n){t&1&&(Ki$1(0,`div`,1,0),Fg(2,yi,0,0,`ng-template`,2),Gl()),t&2&&gm(`mat-tab-body-content-left`,n._position===`left`)(`mat-tab-body-content-right`,n._position===`right`)(`mat-tab-body-content-can-animate`,n._position===`center`||n._previousPosition===`center`)},dependencies:[Wn,Ir],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return i})();var Gn=(()=>{class i{_elementRef=v(Br);_changeDetectorRef=v(FV);_ngZone=v(Z);_tabsSubscription=j.EMPTY;_tabLabelSubscription=j.EMPTY;_tabBodySubscription=j.EMPTY;_diAnimationsDisabled=Jt();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new ji$1;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e==`object`?(this._bodyAnimationDuration=lt(e.body),this._headerAnimationDuration=lt(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=lt(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&t.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new Ye$1;focusChange=new Ye$1;animationDone=new Ye$1;selectedTabChange=new Ye$1(!0);_groupId;_isServer=!v(ne).isBrowser;constructor(){let e=v(Li,{optional:!0});this._groupId=v(zo).getId(`mat-tab-group-`),this.animationDuration=e&&e.animationDuration?e.animationDuration:`500ms`,this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((n,a)=>n.isActive=a===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((t,n)=>{t.position=n-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),n;for(let a=0;a<t.length;a++)if(t[a].isActive){this._indexToSelect=this._selectedIndex=a,this._lastFocusedTabIndex=null,n=t[a];break}!n&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Iy(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new mt;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ay(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+`px`)}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,n){t.focusIndex=n,e.disabled||(this.selectedIndex=n)}_getTabIndex(e){return e===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(e,t){e&&e!==`mouse`&&e!==`touch`&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,n)=>t._setActiveClass(n===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(t){return new(t||i)};static ɵcmp=gC({type:i,selectors:[[`mat-tab-group`]],contentQueries:function(t,n,a){if(t&1&&cm(a,ut,5),t&2){let r;Aw(r=Ow())&&(n._allTabs=r)}},viewQuery:function(t,n){if(t&1&&lm(vi,5)(Ci,5)(ct,5),t&2){let a;Aw(a=Ow())&&(n._tabBodyWrapper=a.first),Aw(a=Ow())&&(n._tabHeader=a.first),Aw(a=Ow())&&(n._tabBodies=a)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(t,n){t&2&&(Yg(`mat-align-tabs`,n.alignTabs),Gw(`mat-`+(n.color||`primary`)),hm(`--%NS%mat-tab-body-animation-duration`,n._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,n._headerAnimationDuration),gm(`mat-mdc-tab-group-dynamic-height`,n.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,n.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,n.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,HV],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,HV],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,HV],selectedIndex:[2,`selectedIndex`,`selectedIndex`,BV],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,BV],disablePagination:[2,`disablePagination`,`disablePagination`,HV],disableRipple:[2,`disableRipple`,`disableRipple`,HV],preserveContent:[2,`preserveContent`,`preserveContent`,HV],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[db([{provide:Un,useExisting:i}])],ngContentSelectors:ht,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(t,n){t&1&&(Sw(),Ki$1(0,`mat-tab-header`,3,0),im(`indexFocused`,function(r){return n._focusChanged(r)})(`selectFocusedIndex`,function(r){return n.selectedIndex=r}),uw(2,Si,8,17,`div`,4,lw),Gl(),sw(4,Ri,1,0),Ki$1(5,`div`,5,1),uw(7,xi,1,10,`mat-tab-body`,6,lw),Gl()),t&2&&(Zg(`selectedIndex`,n.selectedIndex||0)(`disableRipple`,n.disableRipple)(`disablePagination`,n.disablePagination),Qg(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby),ND(2),dw(n._tabs),ND(2),aw(n._isServer?4:-1),ND(),gm(`_mat-animation-noopable`,n._bodyAnimationsDisabled()),ND(2),dw(n._tabs))},dependencies:[Bi,qn,of,K_,zs,ct],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return i})();var mt=class{index;tab};var Kn=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=vC({type:i});static ɵinj=vd({imports:[ei$1]})}return i})();var je=class i{dialogref=v(nt$1);data=v(mn);onConfirm(){this.dialogref.close(!0)}onCancel(){this.dialogref.close()}static ɵfac=function(e){return new(e||i)};static ɵcmp=gC({type:i,selectors:[[`app-confirmation-dialog`]],decls:10,vars:2,consts:[[1,`p-4`],[1,`text-lg`,`font-semibold`,`mb-4`],[1,`mb-4`],[1,`flex`,`justify-end`,`gap-2`],[`mat-stroked-button`,``,`color`,`warn`,3,`click`],[`mat-stroked-button`,``,3,`click`]],template:function(e,t){e&1&&(Ki$1(0,`div`,0)(1,`h2`,1),nb(2),Gl(),Ki$1(3,`p`,2),nb(4),Gl(),Ki$1(5,`div`,3)(6,`button`,4),im(`click`,function(){return t.onCancel()}),nb(7,`Cancel`),Gl(),Ki$1(8,`button`,5),im(`click`,function(){return t.onConfirm()}),nb(9,`Confirm`),Gl()()()),e&2&&(ND(2),wm(t.data.title),ND(2),wm(t.data.message))},dependencies:[_0],encapsulation:2})};var Qe=class i{dialog=v(Qo);confirm(o,e){return Yv(this.dialog.open(je,{width:`400px`,data:{title:o,message:e}}).afterClosed())}static ɵfac=function(e){return new(e||i)};static ɵprov=ie({token:i,factory:i.ɵfac,providedIn:`root`})};var zi=()=>[5,10,20];function ji(i,o){if(i&1&&(Ki$1(0,`mat-option`,7),nb(1),Gl()),i&2){let e=o.$implicit;Zg(`value`,e),ND(),wm(e)}}function Qi(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` No. `),Gl())}function Vi(i,o){if(i&1&&(Ki$1(0,`td`,25),nb(1),Gl()),i&2){let e=o.$implicit;ND(),Kl(` `,e.id,` `)}}function Wi(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` Buyer email `),Gl())}function $i(i,o){if(i&1&&(Ki$1(0,`td`,25),nb(1),Gl()),i&2){let e=o.$implicit;ND(),Kl(` `,e.buyerEmail,` `)}}function Ui(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` Date `),Gl())}function qi(i,o){if(i&1&&(Ki$1(0,`td`,25),nb(1),Eb(2,`date`),Gl()),i&2){let e=o.$implicit;ND(),Kl(` `,Tb(2,1,e.orderDate,`short`),` `)}}function Gi(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` Total `),Gl())}function Ki(i,o){if(i&1&&(Ki$1(0,`td`,25),nb(1),Eb(2,`currency`),Gl()),i&2){let e=o.$implicit;ND(),Kl(` `,Db(2,1,e.total),` `)}}function Zi(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` Status `),Gl())}function Yi(i,o){if(i&1&&(Ki$1(0,`td`,25),nb(1),Gl()),i&2){let e=o.$implicit;ND(),Kl(` `,e.status,` `)}}function Xi(i,o){i&1&&(Ki$1(0,`th`,24),nb(1,` Actions `),Gl())}function Ji(i,o){if(i&1){let e=yw();Ki$1(0,`td`,25)(1,`div`,26)(2,`button`,27)(3,`mat-icon`,28),nb(4,`Visibility`),Gl()(),Ki$1(5,`button`,29),im(`click`,function(){let n=Ud(e).$implicit;return $d(_w().openConfirmDialog(n.id))}),Ki$1(6,`mat-icon`,30),nb(7,`undo`),Gl()()()()}if(i&2){let e=o.$implicit;ND(2),Zg(`routerLink`,ab(`/orders/`,e.id)),ND(3),Zg(`disabled`,e.status===`Refunded`)}}function ea(i,o){i&1&&Kg(0,`tr`,31)}function ta(i,o){i&1&&Kg(0,`tr`,32)}var Zn=class i{displayedColumns=[`id`,`buyerEmail`,`orderDate`,`total`,`status`,`action`];adminService=v(s);dialogService=v(Qe);dataSource=new He([]);orderParams=new ze;totalItems=0;statusOptions=[`All`,`PaymentReceived`,`PaymentMismatch`,`Refunded`,`Pending`];ngOnInit(){this.loadOrders()}loadOrders(){this.adminService.getOrders(this.orderParams).subscribe({next:o=>{o.data&&(this.dataSource.data=o.data,this.totalItems=o.count)}})}onPageChange(o){this.orderParams.pageNumber=o.pageIndex+1,this.orderParams.pageSize=o.pageSize,this.loadOrders()}onFilterSelect(o){this.orderParams.filter=o.value,this.orderParams.pageNumber=1,this.loadOrders()}openConfirmDialog(o){return Mt(this,null,function*(){(yield this.dialogService.confirm(`Confirm refund`,`Are you sure you want to issue this refund? This cannot be undone`))&&this.refundOrder(o)})}refundOrder(o){this.adminService.refundOrder(o).subscribe({next:e=>{this.dataSource.data=this.dataSource.data.map(t=>t.id===o?e:t)}})}static ɵfac=function(e){return new(e||i)};static ɵcmp=gC({type:i,selectors:[[`app-admin`]],decls:40,vars:7,consts:[[1,`min-h-screen`],[1,`bg-whitemat-tab`],[`label`,`Orders`],[1,`flex`,`justify-between`,`items-center`,`mt-2`,`max-w-screen-2xl`,`mx-auto`],[1,`text-2xl`,`font-semibold`],[`appearance`,`outline`,1,`mt-2`],[3,`selectionChange`],[3,`value`],[1,`p-4`],[1,`mat-elevation-z8`],[`mat-table`,``,1,`bg-white`,3,`dataSource`],[`matColumnDef`,`id`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`matColumnDef`,`buyerEmail`],[`matColumnDef`,`orderDate`],[`matColumnDef`,`total`],[`matColumnDef`,`status`],[`matColumnDef`,`action`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,1,`bg-white`,3,`page`,`pageSizeOptions`,`length`,`pageSize`],[`label`,`Catalog`],[`label`,`Customer Service`],[`mat-header-cell`,``],[`mat-cell`,``],[1,`flex`,`gap-2`],[`matTooltip`,`View`,`mat-icon-button`,``,3,`routerLink`],[`color`,`accent`],[`matTooltip`,`Refund`,`mat-icon-button`,``,3,`click`,`disabled`],[`color`,`warn`],[`mat-header-row`,``],[`mat-row`,``]],template:function(e,t){e&1&&(Ki$1(0,`div`,0)(1,`mat-tab-group`,1)(2,`mat-tab`,2)(3,`div`,3)(4,`h2`,4),nb(5,`Customer Orders`),Gl(),Ki$1(6,`mat-form-field`,5)(7,`mat-label`),nb(8,`Filter by status`),Gl(),Ki$1(9,`mat-select`,6),im(`selectionChange`,function(a){return t.onFilterSelect(a)}),uw(10,ji,2,2,`mat-option`,7,cw),Gl()()(),Ki$1(12,`div`,8)(13,`div`,9)(14,`table`,10),Yl(15,11),Fg(16,Qi,2,0,`th`,12)(17,Vi,2,1,`td`,13),Zl(),Yl(18,14),Fg(19,Wi,2,0,`th`,12)(20,$i,2,1,`td`,13),Zl(),Yl(21,15),Fg(22,Ui,2,0,`th`,12)(23,qi,3,4,`td`,13),Zl(),Yl(24,16),Fg(25,Gi,2,0,`th`,12)(26,Ki,3,3,`td`,13),Zl(),Yl(27,17),Fg(28,Zi,2,0,`th`,12)(29,Yi,2,1,`td`,13),Zl(),Yl(30,18),Fg(31,Xi,2,0,`th`,12)(32,Ji,8,3,`td`,13),Zl(),Fg(33,ea,1,0,`tr`,19)(34,ta,1,0,`tr`,20),Gl(),Ki$1(35,`mat-paginator`,21),im(`page`,function(a){return t.onPageChange(a)}),Gl()()()(),Ki$1(36,`mat-tab`,22),nb(37,`Catalog placeholder`),Gl(),Ki$1(38,`mat-tab`,23),nb(39,`Customer service`),Gl()()()),e&2&&(ND(10),dw(t.statusOptions),ND(4),Zg(`dataSource`,t.dataSource),ND(19),Zg(`matHeaderRowDef`,t.displayedColumns),ND(),Zg(`matRowDefColumns`,t.displayedColumns),ND(),Zg(`pageSizeOptions`,hb(6,zi))(`length`,t.totalItems)(`pageSize`,t.orderParams.pageSize))},dependencies:[jn,Nn,Fn,Ln,Pn,En,On,An,Bn,Hn,zn,so,Zi$1,ai$1,rn,Ut,ni$1,de,ri$1,Je$1,Kn,ut,Gn,be,Qr,Xu,Qu],encapsulation:2})};export{Zn as AdminComponent};