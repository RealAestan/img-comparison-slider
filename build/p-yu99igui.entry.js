import{r as i,h as t,g as e}from"./p-6e07071d.js";const s=(i,t,e)=>i<t?t:i>e?e:i,o={ArrowLeft:-1,ArrowRight:1};class n{constructor(t){i(this,t),this.exposure=50,this.isMouseDown=!1}componentWillLoad(){this.el.querySelectorAll("img").forEach(i=>{i.addEventListener("dragstart",i=>{i.preventDefault()})})}componentDidRender(){this.slide(0),this.updateAfterWidth(),this.el.setAttribute("tabindex","0")}componentDidUnload(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}slide(i=0,t=!1){if(this.exposure=s(this.exposure+i,0,100),t){const i=100;this.after.style.transition=`width ${i}ms`,this.transitionTimer=window.setTimeout(()=>{this.after.style.transition=null,this.transitionTimer=null},i)}this.after.style.width=`${this.exposure}%`}onKeyDown(i){if(this.keyboardSlideAnimationTimeoutId)return;const t=i.key;Object.keys(o).includes(t)&&this.startSlideAnimation(o[t])}onKeyUp(i){this.keyboardSlideAnimationTimeoutId&&Object.keys(o).includes(i.key)&&this.stopSlideAnimation()}onMouseDown(i){this.isMouseDown=!0,this.slideToEvent(i,!0),this.el.focus()}onMouseUp(i){this.isMouseDown=!1}onMouseMove(i){this.isMouseDown&&this.slideToEvent(i)}onBlur(){this.stopSlideAnimation()}updateAfterWidth(){this.imageWidth=this.el.offsetWidth,this.afterImageContainer.style.width=`${this.el.offsetWidth}px`}slideToEvent(i,t=!1){this.exposure=(i.pageX-this.el.offsetLeft)/this.imageWidth*100,this.slide(0,t)}startSlideAnimation(i){const t=1*i,e=()=>{this.keyboardSlideAnimationTimeoutId=window.setTimeout(()=>{this.animationRequestId=window.requestAnimationFrame(e)},1e3/120),this.slide(t)};e()}stopSlideAnimation(){this.keyboardSlideAnimationTimeoutId&&(window.clearTimeout(this.keyboardSlideAnimationTimeoutId),window.cancelAnimationFrame(this.animationRequestId),this.keyboardSlideAnimationTimeoutId=null,this.animationRequestId=null)}render(){return t("div",null,t("div",{ref:i=>this.before=i},t("slot",{name:"before"})),t("div",{class:"after",ref:i=>this.after=i},t("div",{class:"hint"}),t("div",{class:"after-overlay"},t("div",{ref:i=>this.afterImageContainer=i},t("slot",{name:"after"})))))}get el(){return e(this)}static get style(){return":host{--divider:1px solid #d7d7d7;--hint-size:40px;--hint-color:#d7d7d7;--hint-opacity:0.5;--hint-opacity-active:0;position:relative;display:inline-block;font-size:0;overflow:hidden}::slotted(img){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.component:hover .hint{opacity:var(--hint-opacity-active)}.after{position:absolute;left:0;top:0;bottom:0;border-right:var(--divider)}.after .after-overlay{overflow:hidden}.hint{position:absolute;width:var(--hint-size);height:var(--hint-size);background-color:var(--hint-color);top:50%;right:0;margin-top:calc(var(--hint-size) / (-2));margin-right:calc(var(--hint-size) / (-2));-webkit-transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,-webkit-transform 1s;transition:opacity 1s,transform 1s;transition:opacity 1s,transform 1s,-webkit-transform 1s;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0 0 15px 0 rgba(0,0,0,.75);box-shadow:0 0 15px 0 rgba(0,0,0,.75);pointer-events:none;opacity:var(--hint-opacity);-webkit-transform:rotate(45deg);transform:rotate(45deg)}.focused .hint{-webkit-transform:rotate(45deg) scale(1.5);transform:rotate(45deg) scale(1.5)}"}}export{n as img_comparison_slider};