!function(e){var t="ND",a="ND",o="ND",i="ND",d="ND",r="ND";e.fn.modalHandler=function(s){var n=e(this);if("ND"===a&&((a={}).personal="$3",a.biz="$5"),"ND"===i&&((i={}).about="H:About~T:SQAbstractPlus~ST:Creating emotional connnect~topicData:The impulsive power strokes create beautiful rhythmic forms and impactful patterns to catch visitors attention and make forever emotional bond.",i.abtme="H:ME~T:Shamim Qureshi~ST:A passionate abstract artist.~topicData:Me,Me,Me,Me",i.prmWork="H:MY PROMINENT WORK~topicData:gOOD WORKD, GOOD WORK, good work. good work",i.pd_n="H:PD~T:Design Details~ST: ~topicData:pd_n",i.others="H:Other sections~T:${topic}~ST:${subT}~topicData:others"),"ND"===t){(t={}).templ='<div class="card-header bg-transparent fs_resp_SL fontW2 fs_lineHeight fs_GlassBg  a-left fsC_none_brdr p-0 mb-3">$keyValData</div>',t.fragment='<div class="d-block mb-2" style="font-size:15px;font-weight: 700;">                <div>$key</div><div style="font-weight: 400;">$value</div></div>'}if("ND"===o&&((o={}).svgArrow='<svg  ang="0" id="accordion_pdFAQSVG" fill="blue" width="100%" height="100%"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n           viewBox="0 0 404.308 404.309" style="enable-background:new 0 0 404.308 404.309;transition: transform .2s ease-in-out;transform-origin:center;transform:rotate(0deg);pointer-events: none;"\n            xml:space="preserve"><g><path d="M0,101.08h404.308L202.151,303.229L0,101.08z"/></g></svg>',o.pdQuickFAQBodyTempl='<div class="d_pdFAQBody collapse" data-parent="#accordion_pdFAQ" id="pdFAQBody">\n                    <div class="fs_resp_SL" id="accordion_pdDetails">$keys.Values</div>\n            </div>',o.pdQuickFAQTempl='<div class="w-100 d_PDFAQ mx-auto text-center" id="accordion_pdFAQ"><div id="accordion_pdFAQbtn" data-toggle="collapse" data-target="#pdFAQBody" aria-expanded="true"  aria-controls="pdFAQBody" style="font-size: 15px;display: inline-block;"> <div id="accordion_pdFAQtxt" class="fs_relative" style="font-weight: 700;color: blue;float:left;">$faq.name card FAQ</div> <div id="accordion_pdFAQicon" class="fs_relative" style="color: blue;width:12px;height:12px;float:left;left:12px;">'+o.svgArrow+"</div></div>$faq.body</div>",o.pdCardFragment='<div class="card fs_card_HL"><div class="card-header productCard_Header $collapsedClass" data-toggle="collapse" data-target="#collapse_$card.counter" aria-expanded="$expanded" aria-controls="collapse_$card.counter"><span class="title">$card.key</span><span class="accicon  rotate-icon" style="font-size:35px;">^</span></div><div id="collapse_$card.counter" class="collapse $showStatus" data-parent="#accordion_pdDetails"><div class="productCard_Body card-body">$card.body </div></div></div>'),"ND"===d){(d={}).id="PRODUCT ID",d.custom="Customization allowed",d.desc="Description",d["---pers"]="Personal card allows changing of background & other colors, images and text contents.",d["---biz"]="Business card allows changing of business specific details like logo, company & contact details alongwith  background & other colors, images and text contents.",d["---when"]="After payment confirmation a email is sent listing <span class='text-blue'>complete content detail requirements.</span> Content must be provided within <span class='text-blue'>3 working days.</span> Buyer must also check draft design for message, color and images correction. ",d.d2send="Buyer's work",d.tat="When do I received ordered item?",d["---tatp"]="After content is received expect first draft design between <span style='color:#021dff;'>6 to 12 working hours.</span> The final finished card may take one to three days. Please plan accordingly.",d["---tatb"]="After content is received expect first draft design between <span style='color:#021dff;'>6 to 12 working hours.</span> The final finished card may take two to three days. Please plan accordingly.",d["---cType"]="Only <span style='color:#021dff;'>Made-to-orders</span> accepted. No <span style='color:#021dff;'>DIY (Do it yourself) </span> option at this moment.",d.cType="How to create?",d.dType="What I get?";var l="By default a WhatsApp image card and other social media images ordered for auto generation. All in .PNG format.";d["---pdType"]=l,d["---bdType"]=l}var c=!1,p=function(e){var t=d[e];return void 0===t?e:t},m=function(i){if(-1!==i.target.id.indexOf("img_")){if(0===e(i.target).attr("modal-key").length)return!1}else{if("iconImgExp"===i.target.id)return function(t){var a=e("#iconImgExp").attr("clone-id"),o='<div id="expTitle" style="position: relative;top:-26px;left: 50%;transform: translate(-50%,0);width: max-content;height:auto;z-index:200";">\n            <div class="mx-auto" style="font-size: 19px;font-weight:700;color:orange;border-bottom: 1px solid #9b9696;ext-align: center;">WhatsApp view</div>\n        </div>'.trim(),i='<div id="closeExpImg" class="modalButton" style="position: relative;top: 95%;left: 50%;width: 35px;height: 35px;padding:1px;cursor: pointer;z-index:200";">\n                <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="minMaxIcon"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></g></svg>\n            </div>'.trim(),d=e("#"+a).get(0).outerHTML;d=d.replace(""+a,"i-expanded");var r='<div id="mExpanded" style="position:absolute;width:100%;height:100%;overflow:visible;background-color:#fff;z-index:200;">\n                    <div style="position:relative;width:380px;height:480px;z-index:2000;top:50%;left: 50%;transform: translate(-50%,-50%);">\n                        $cloneSnp\n                    </div>\n                    </div>'.trim();r=r.replace("$cloneSnp",d),e("#modContent").prepend(r),e("#i-expanded").prepend(o),e("#i-expanded").append(i)}(),!1;if("closeExpImg"===i.target.id)return e("#closeExpImg").remove(),e("#mExpanded").remove(),e("#expTitle").remove(),!1;if("expImgCloned"===i.target.id)return!1}"ND"===r&&(r=e("#myModal").html()),e("#myModal").empty().append(r);var d=function(t){var a="";return void 0!==e(t.target).attr("clone")&&(c=!0,-1!==t.target.id.indexOf("img_")?((a=e(t.target).parent().clone().attr("id","imgCloned")).attr("orig",t.target.id),a.addClass("mx-auto mb-1 fs_cardImageModal")):(a=e(t.target).parent().prev().clone().attr("id","imgCloned")).addClass("mx-auto mb-1 fs_cardImageModal")),a}(i),s=e(i.target).attr("modal-key"),n=s,l=(e(i.target).attr("q_id"),"");-1!==s.indexOf("pd_")?l="pd_n":-1!==s.indexOf("others")?l="others":-1!==s.indexOf("exp_img_")&&(l="expImg");var m=h(i,l),f=m.header,v=m.subHeaderData,u=m.bodyData;if(e("#modHeader").html('<div style="font-size:20px;">'+f+' <span style="font-size: 29px;color: orange;">'+v+"</span></div>"),c){e("#modHeader").prepend(d);var y=i.target.id;if(-1!==y.indexOf("img_")){var x=y.substring(y.indexOf("_")+1);e("#imgCloned").css("cssText",e("#imgCloned").attr("style")+" overflow: visible !important;");var b=e("#imgCloned :first-child");b.removeAttr("clone"),b.attr("amCloned","true"),b.attr("modal-key","exp_img_"+x),b.removeClass("modalButton"),e("#imgCloned").append('<div id="iconImgExp" clone="true" class="modalButton" style="position: absolute;top: 50%;left: 101%;width: 30px;height: 30px;cursor: pointer;">\n                        <svg width="100%" height="100%"  viewBox="0 0 1024 1024" t="1569683683230" class="icon minMaxIcon" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13542" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><path d="M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM920 664h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z" p-id="13543"></path></svg>\n                            </div>'.trim());var _=e("#iconImgExp");_.attr("clone","true"),_.attr("modal-key","exp_img_"+x),_.attr("clone-id",y)}}if("expImg"===l){var w=e(i.target).clone().attr("id","expImgCloned");w.attr("orig",i.target.id),w.removeAttr("modal-key"),w.addClass("mx-auto justify-content-center mb-1 fs_cardImageModal"),e("#modHeader").remove(),e("#modBody").append(w),e("#modBody").css({height:"500px",width:"380px",position:"relative",transform:"translate(-50%, 0px)",left:"50%"}),w.css({width:"100%",top:"0px",left:"0px"}),w.css("cssText",w.attr("style")+"height:100% !important;"),e(".modal-header").prepend('<div class="mx-auto" style="font-size: 19px;font-weight:700;color:orange;padding:0.5rem 1rem 0.3rem 1rem;text-align: center;">WhatsApp view</div>'.trim()),e("#dialogueWidth").removeClass("fs_modalWidth_Big").addClass("fs_modalWidth_Small")}else if("others"===s)g(i,s);else if(-1!==s.indexOf("pd_")){var C,D=e().catalogueManager().getSelCat(),$="pd",k=e().csvDB().getRecord($,D,n),A=e().csvDB().getQuickFAQ($,D),T=e().csvDB().getColumnNames($),B={};B.keys=T,B.values=k,C=function(a,i,d){var r="",s="true",n="show",l="",c="",m="",g="",f="",v="",u=i.values,h="",y="";e(i.keys).each((function(e,o){"imgFN"!==(y=o)&&("pd"===a&&(c=t.fragment),o=p(o),-1!==(h=u[e]).indexOf("---")&&(h=p(h)),c=c.replace("$key",o),"id"===y&&(h=h.substring(0,h.indexOf("~"))),c=c.replace("$value",h),m+=c)})),u=d.values,h="";var x=1;y="",e(d.keys).each((function(e,t){y=t,"pd"===a&&(f=o.pdCardFragment),t=p(t),-1!==(h=u[e]).indexOf("---")&&(h=p(h)),f=(f=(f=(f=(f=f.replace("$card.key",t)).replace("$collapsedClass",r)).replaceAll("$card.counter",x)).replaceAll("$expanded",s)).replaceAll("$showStatus",n),1===x&&(r="collapsed",s="false",n=""),x++,f=f.replace("$card.body",h),v+=f})),"pd"===a&&(l=t.templ.replace("$keyValData",m),g=o.pdQuickFAQBodyTempl.replace("$keys.Values",v));var b=o.pdQuickFAQTempl.replace("$faq.body",g),_=e().catalogueManager().getSelCat();return"biz"===_?_="Business":"personal"===_&&(_="Personal"),l+b.replace("$faq.name",_)}($,B,A),e("#modBody").html("<div style='font-size: 18px;padding: 15px;'>"+C+"</div>"),e("#dialogueWidth").removeClass("fs_modalWidth_Big").addClass("fs_modalWidth_Small");var I=e().templE().getFragment("cardPrice");I=I.replace("${PRICE}",a[D]);var F=e().templE().getFragment("buy");F=F.replace("$id",e().DB().getID),I=I.replace("${buyBtn}",F),e("#modBody").prepend(I)}else e("#modBody").html("<p class='fs_bdyTxt' style='padding: 15px;'>"+u+"</p>"),e("#dialogueWidth").removeClass("fs_modalWidth_Big").addClass("fs_modalWidth_Small");e("#myModal").modal("show"),e().DB().delete("modal_close_ids"),e().DB().store("modal_close_ids","myModal"),e("#modalClose_back").css({display:"none"}),e("#modalClose_def").css({display:"block"});e("#dialogueWidth").removeClass("slideOutRight animated").addClass("slideInLeft  animated");var Q=e(".modal-content");Q.css({"margin-top":"0"});e().elemUtil().getElemPosition(Q,"ALL");var M=e(window).scrollTop();Q.scrollTop();let H=Q[0].getBoundingClientRect();var O=((new _windowDims).getWindow_Height()-(H.height+H.top))/2;O<0&&(O=0),Q.css({"margin-top":O+"px"})};var g=function(t,a){var o=e(t.target).attr("q_id"),i="",d=e().templE().getFragment(a+"~"+o);"FQ"===o?i=u(d):"HIW"===o?i=v(d):"PRC"===o&&(i=f(d)),e("#modBody").html("<div style='font-size: 18px;padding: 15px;'>"+i+"</div>"),e("#dialogueWidth").removeClass("fs_modalWidth_Small").addClass("fs_modalWidth_Big")},f=function(e){e.body;return e.body},v=function(t){var a=t.container,o=t.body,i="",d=e().DB().getRecords("HIW");return e(d).each((function(e,a){o=t.body,a=a.split(":"),o=(o=(o=o.replaceAll("$step.no",a[0])).replaceAll("$step.title",a[1])).replaceAll("$step.name",a[2]),i+=o})),a.replace("$hiw.body",i)},u=function(t){var a=t.container,o=t.body,i=1,d="",r=e().DB().getRecords("FAQ_QA");return e(r).each((function(e,a){o=t.body,a=a.split(":"),o=o.replaceAll("$counter",""+i),i++,o=(o=o.replaceAll("$faq.Q",a[0])).replaceAll("$faq.A",a[1]),d+=o})),a.replace("$faq.body",d)},h=function(t,a){var o={},d="",r="",s="",n="";if("expImg"===a)return o.header=r,o.subHeaderData="",o.bodyData=n,o;d=i[a].split("~");for(var l="",c=0;c<d.length;c++)"T"===(l=d[c].split(":"))[0]?r=l[1]:"ST"===l[0]?s=l[1]:"topicData"===l[0]&&(n=l[1]);var p="";if("${topic}"===r){var m=e(t.target).attr("q_id");"FQ"===m?(r="Frequently Asked Questions","${subT}"===s&&(p=" (FAQ)")):"PRC"===m?(r="Pricing & refunds","${subT}"===s&&(p="")):"HIW"===m&&(r="How it works?".trim(),"${subT}"===s&&(p="<br>Made to order"))}return s=p,o.header=r,o.subHeaderData=s,o.bodyData=n,o};return n.create=function(e){return m(e)},n.destroy=function(t){return e("#imgCloned").remove(),e("#dialogueWidth").removeClass("slideInLeft animated").addClass("slideOutRight  animated"),void e("#myModal").modal("hide")},n.animateModal=function(t){e(".modal .modal-dialog").attr("class","modal-dialog  "+t+"  animated")},n}}(jQuery),function(e){var t="ND",a="",o=0;e.fn.popup=function(){var i=e(this),d="ND";"ND"===t&&(t='<div id="pop_$id" class="messagepop $class pop container-fluid form-text" style="width" >\n                        <div class="row mx-auto justify-content-center" style="font-weight:200;">$pop.body</div>\n                        $pop.footer                       \n                    </div>',a="<div class=\"col-12 mb-3 fs_resp_Sub_Sub_SL text-center\" style=\"font-weight:bold;\">INCONVENIENCE REGRETTED.</div>\n            <div class=\"col-12 mb-1 fs_bdyTxt text-center\">New payment gateway being integrated. To buy this asset please write at 'design@quicks.io' with 'product id' and names of all the social media for which you want to purchase designs.\n            </div>\n            <div class=\"col-12 mb-1 fs_bdyTxt text-center\">First time buyer please read 'Pricing', 'FAQ' and 'How it works' link at bottom of  this page for details.</div>\n            <div class=\"col-12 mb-1 fs_bdyTxt text-center\">Your kind support is really appreciated.\n            </div>".trim(),popFooter='<div class="row mt-2 mx-auto text-center justify-content-center"><button class="col-3 popupClose fs_bdyTxt btn px-2 text-center" id="$id_close" style="" >Close</button>\n            <button class="col-4 popupClose fs_bdyTxt btn px-2 text-center d-Checkout" id="$id_2Checkout" style="width:max-content;cursor; background-color: #0275d8;border-color: #0275d8;color:white;" >Proceed</button>\n            </div>'.trim(),t=t.trim().replace("$pop.footer",popFooter));var r=function(t){return function(t){var a="pop_"+t.substring(0,t.indexOf("_close"));d=e("#"+a).attr("caller"),e("#modContent").removeAttr("popID"),e("#"+a).slideFadeToggle((function(){return e("#"+d).removeClass("selected"),e("#"+d).removeAttr("popID"),e("#"+a).remove(),d="ND",!1}))}(t)};return i.create=function(i,r){return function(i,r){var s,n=t,l="";if(void 0===r);else if("cart_img"===r){var c=r.substring(r.indexOf("_")+1);l=e().cart().get(c)}d=i.attr("id");var p=(n=l.length>0?(n=n.replace("$pop.body",l)).replace("$class","cartContainer"):(n=n.replace("$pop.body",a.trim())).replace("$class","")).replaceAll("$id",o+"");if(s="pop_"+o,e("#modContent").append(p),e("#modContent").attr("popID",s),l.length>0){var m=e().emailUtil().getUserEmail();m.length>0&&e("#custEmail").val(m)}return e("#"+d).attr("popID",s),e("#"+s).attr("caller",d),e().DB().store("modal_close_ids",s),e("#modalClose_def").css({display:"none"}),e("#modalClose_back").css({display:"block"}),o++,-1===i.attr("class").indexOf("selected")&&(i.addClass("selected"),e("#"+e("#"+d).attr("popID")).slideFadeToggle()),s}(i,r)},i.destroy=function(e){return r(e)},i}}(jQuery),$.fn.slideFadeToggle=function(e,t){return this.animate({opacity:"toggle",height:"toggle"},"fast",e,t)};
!function(t){var e="ND",r="ND",l="ND",a=-1,i=["Facebook post","Instagram post","Twitter in-stream","Twitter post","Pinterest open","Pinterest fleet","Pinterest card"],c="ND";t.fn.cart=function(){var o=t(this);"ND"===e&&((r={}).WA=5,r.others=3,(l={}).WA=3,l.others=2,e='<div class="col-12 mb-3 fs_resp_Sub_Sub_SL text-center cartBody" style="font-weight:bold;">$cart.header</div>\n            $cart.toggle\n            $cart.smList\n\t\t\t$cart.total\n            $cart.emailid\n\t\t\t'.trim(),"ND"===c&&((c={}).header="Please select for auto generation",c.toggle='<div class="col-12 mb-2 form-check" style="border: 1px solid rgb(246 246 246);" >\n                <div class="row mx-auto fontW7 text-center justify-content-center text-21"><input type="checkbox" class="col-1 d_sm_price"  name="toggle-all" id="toggle-smlist" />\n                <label class="d-flex" for="toggle-smlist" style="color:#0077d8; text-align:left;width:max-content;" >(Un)Check all</label></div>\n              </div>'.trim(),c.WA='<div class="col-12 form-check fs_bdyTxt" style="border: 1px solid rgb(246 246 246);border-radius: 8px;margin-bottom: 1px;" >\n\t\t\t  <input type="checkbox" price="$price" class="col-1 form-check-input d_sm_price" id="WA_Price" disabled checked>\n\t\t\t  <label class="col-8" for="WAPrice">WhatsApp (Customized)</label>\n\t\t\t  <label class="col-2" for="WAPrice">$$price</label>\n\t\t\t</div>'.trim(),c.item='<div class="col-12 form-check fs_bdyTxt " style="border: 1px solid rgb(246 246 246);border-radius: 8px;margin-bottom: 1px;">\n\t\t\t\t\t\t\t  <input type="checkbox" price="$price" class="col-1 form-check-input d_sm_price" id="$smIDName_Price">\n\t\t\t\t\t\t\t  <label class="col-8" for="$smIDName_Price">$smName</label>\n\t\t\t\t\t\t\t  <label class="col-2" for="$smIDName_Price">$$price</label>\n\t\t\t\t\t\t\t</div>'.trim(),c.email='<div class="col-12 mt-3 fs_bdyTxt" style="border: 1px solid rgb(246 246 246);border-radius: 8px;">\n\t\t\t\t\t\t\t<input type="email" class="form-control " id="custEmail" aria-describedby="emailHelp" placeholder="Enter valid email">\n\t\t\t\t\t\t\t<div id="emailHelp" class="form-text fs_bdyTxt" style="color:#0077d8!important;">\n                            Ensure same email as <span class="text-red" style="font-weight:700;">payment gateway</span>. Email is never shared.\n                            </div>\n\t\t\t\t\t\t  </div>'.trim(),c.total='<div class="col-12 fs_bdyTxt">\n\t\t\t\t\t\t\t\t\t\t<div class="row flex-row justify-content-end align-items-end" style="padding-right: 2rem;">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-lg-3 col-4 px-4" style="background-color:#544f4f;color:white;border:1px solid #544f4f;">TOTAL</div>\n\t\t\t\t\t\t\t\t\t\t\t<div id="cart_total" class="col-lg-1 col-2 pl-1 mr-3" style="font-weight:700;border:1px solid #544f4f;">$$total</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t             </div>'.trim()));var n=function(e){var i=t().catalogueManager().getSelCat();return"biz"===i?a="WA"===e?r.WA:r.others:"personal"===i&&(a="WA"===e?l.WA:l.others),a};return o.get=function(r){return function(r){var l=e;l=(l=(l=l.replace("$cart.header",c.header)).replace("$cart.toggle",c.toggle)).replace("$cart.emailid",c.email);var a="",o=0,s="",d=n("WA");return s=c.WA.replaceAll("$price",d),a+=s,o+=d,t(i).each((function(t,e){s="",s=c.item,d=n(e),s=(s=(s=s.replaceAll("$price",d)).replaceAll("$smName",e)).replaceAll("$smIDName",e.replace(" ","9")),a+=s})),(l=l.replace("$cart.smList",a)).replace("$cart.total",c.total.replace("$total",o))}()},o.update=function(e){!function(e){var r,l=t("#cart_total").text();l=1*l.substring(1);var a=document.getElementById("cart_total");a.style.opacity=0,a.style.transition="";var i=e.target.id,c=i.substring(0,i.indexOf("_Price"));c=c.replace("9"," "),r=t(e.target).is(":checked")?l+n(c):l-n(c),t("#cart_total").text("$"+r),setTimeout((()=>{a.style.transition="opacity 1000ms",a.style.opacity=1}),100)}(e)},o.all=function(e){!function(e){var r=0,l=document.getElementById("cart_total");l.style.opacity=0,l.style.transition="",r+=n("WA");var a="";t(e.target).is(":checked")?t(i).each((function(e,l){a=l.replace(" ","9")+"_Price",t("#"+a).prop("checked",!0),r+=n(l)})):t(i).each((function(e,r){a=r.replace(" ","9")+"_Price",t("#"+a).prop("checked",!1)})),t("#cart_total").text("$"+r),setTimeout((()=>{l.style.transition="opacity 1000ms",l.style.opacity=1}),100)}(e)},o.pay=function(){},o.remove=function(t){return lDestroy(t)},o}}(jQuery),function(t){t.fn.elemUtil=function(){var e=t(this);return e.getElemPosition=function(t,e){return function(t,e){var r={},l=t[0].getBoundingClientRect();return"L"===e?r.left=l.left:"R"===e?r.right=l.right:"T"===e?r.top=l.top:"B"===e?r.bottom=l.bottom:"ALL"===e&&(r.left=l.left,r.right=l.right,r.top=l.top,r.bottom=l.bottom),r}(t,e)},e}}(jQuery),function(t){var e="";t.fn.emailUtil=function(){var r=t(this),l=function(r,l){e="";var a=t("#"+r);return a.val(""),a.removeClass("d-cust_email"),void 0!==l?a.val(l):a.attr("placeholder","Enter valid email"),a.focus(),!1},a=function(e,r,a){var i=t("#"+e);i.val(""),i.addClass("d-cust_email"),i.attr("placeholder",r),setTimeout((()=>{l(e,a)}),2e3)};return r.validate=function(r){return 0===(c=(i=t("#"+(l=r))).val()).length?(a(l,"Email can't be empty."),!1):/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(c)?(e=c,!0):(e="",a(l,"INVALID EMAIL ID",i.val()),!1);var l,i,c},r.removeErrorHighlight=function(t){l(t)},r.getUserEmail=function(){return e},r}}(jQuery);