"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[823],{9823:(nt,f,a)=>{a.r(f),a.d(f,{NewInvoiceModule:()=>tt});var u=a(6814),t=a(5879),p=a(7285),T=a(6676),A=a.n(T),m=a(1076),b=a(3780),Z=a(4087),v=a(2425),y=a(6593),x=a(342),r=a(95),_=a(7741);function w(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"button",38),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,s=t.oxw();return t.KtG(s.navigateTo("/default/new-invoice/form",n._id,"update"))}),t._UZ(1,"i",39),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("disabled","Created"!==e.status)}}function N(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"button",40),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,s=t.oxw();return t.KtG(s.updateStatus(n._id,"Generated","update"))}),t._UZ(1,"i",41),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("disabled","Generated"==e.status)}}function U(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"button",42),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,s=t.oxw();return t.KtG(s.updateStatus(n._id,"Created","reset"))}),t._UZ(1,"i",43),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("disabled","Created"==e.status)}}function q(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",27),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"date"),t.TgZ(5,"td",28)(6,"span",29),t._uU(7),t.qZA()(),t.TgZ(8,"td",30),t._uU(9),t.qZA(),t.TgZ(10,"td",27),t._uU(11),t.qZA(),t.TgZ(12,"td",30)(13,"span"),t._uU(14),t.ALo(15,"titlecase"),t.qZA()(),t.TgZ(16,"td",30),t.YNc(17,w,2,1,"button",31),t.YNc(18,N,2,1,"button",32),t.YNc(19,U,2,1,"button",33),t.TgZ(20,"button",34),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.navigateToInvoice("/invoice",s))}),t._UZ(21,"i",35),t.qZA(),t.TgZ(22,"button",36),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.sendMessage(s))}),t._UZ(23,"i",37),t.qZA()()()}if(2&o){const e=c.$implicit,i=t.oxw();t.xp6(2),t.Oqu(e.invoiceNo),t.xp6(1),t.hij(" ",t.xi3(4,15,e.createdAt,"dd-MM-yyyy hh:mm a")," "),t.xp6(3),t.Q6J("ngbTooltip",e.name),t.xp6(1),t.hij(" ",e.customerName,""),t.xp6(2),t.Oqu(e.mobile),t.xp6(2),t.hij(" ",e.netValue," "),t.xp6(2),t.Gre("badge rounded-pill  text-bg-","Generated"==e.status?"success":"warning"," px-2"),t.xp6(1),t.hij(" ",t.lcZ(15,18,e.status),""),t.xp6(3),t.Q6J("ngIf","report"!=i.isReportTab),t.xp6(1),t.Q6J("ngIf","report"!=i.isReportTab),t.xp6(1),t.Q6J("ngIf","report"!=i.isReportTab),t.xp6(1),t.Q6J("disabled","Generated"!=e.status),t.xp6(2),t.Q6J("disabled","Generated"!=e.status)}}function F(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",44)(1,"button",45),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("Cross click"))}),t.qZA()(),t.TgZ(2,"div",46)(3,"h3",47),t._uU(4),t.ALo(5,"uppercase"),t.qZA(),t.TgZ(6,"h4",48),t._uU(7," Are you sure you want to Delete ? "),t.qZA()(),t.TgZ(8,"div",49)(9,"button",50),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.delete(n.selectedRow._id))}),t._uU(10," YES "),t.qZA(),t.TgZ(11,"button",51),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("Cross click"))}),t._uU(12," NO "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(4),t.AsE(" ",e.selectedRow.code," - ",t.lcZ(5,2,e.selectedRow.name)," ")}}let M=(()=>{class o{constructor(e,i,n,s,l,d,h){this.router=e,this.service=i,this.spinner=n,this.toastService=s,this.actRoute=l,this.title=d,this.clipboard=h,this.page=1,this.pageSize=25,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.products=[],this.statusArray=["Created","Generated"],this.isReportTab="",this.modalService=(0,t.f3M)(p.FF)}updateUser(e){}ngOnInit(){this.actRoute.queryParams.subscribe(e=>{e.id?(this.isReportTab=e.id,this.getAll(["Generated"])):(this.isReportTab="",this.getAll(this.statusArray))})}onChangePage(e){e>0&&(this.page=e),this.getAll(this.statusArray)}searchFn(){(this.search.toString().length>=1||0==this.search.toString().length)&&this.getAll(this.statusArray)}open(e,i){this.selectedRow=e,this.modalService.open(i,{centered:!0})}add(){this.router.navigate(["/default/product/product-form"])}delete(e){this.spinner.show(),this.service.deleteById(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.modalService.dismissAll(),this.getAll(this.statusArray)})}updateStatus(e,i,n){this.spinner.show(),this.service.updateStatus(e,{status:i,action:n}).subscribe(l=>{this.spinner.hide(),this.toastService.success(l.message),this.modalService.dismissAll(),"reset"==n?this.router.navigate(["/default/new-invoice/form"],{queryParams:{id:e,action:"update"}}):this.getAll(this.statusArray)})}getAll(e){this.spinner.show(),this.service.getAllNew({page:this.page,pageSize:this.pageSize,search:this.search,statusArray:e}).subscribe(n=>{this.spinner.hide(),this.products=n.rows,this.collection=n.count})}navigateToInvoice(e,i){this.spinner.show(),this.service.getInvoiceDetails(i._id).subscribe(n=>{this.spinner.hide(),n?this.router.navigate([e],{state:{data:JSON.stringify(n)}}):this.toastService.warning("No invoice exists")}),this.title.setTitle(`${i.invoiceNo}_${i.customer.mobile}_${A()().format("D MMM, YYYY")}`)}navigateTo(e,i,n){this.router.navigate([e],i?{queryParams:{id:i,action:n}}:{queryParams:{action:n}})}sendMessage(e){const n=`Hi ${e.customerName}!  Thank You for Shopping with Jhumka Planet. Your invoice is now ready. Do visit us again \u{1f642}.\nRegards\nRucha, Jhumka Planet`,s=`https://wa.me/91${e.customer.mobile}?text=${encodeURIComponent(n)}`;this.clipboard.copy(n),window.open(s,"_blank")}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(m.F0),t.Y36(b.q),t.Y36(Z.V),t.Y36(v._W),t.Y36(m.gz),t.Y36(y.Dx),t.Y36(x.TU))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:42,vars:5,consts:[[1,"table-container"],[1,"card","table-card"],[1,"card-title"],[1,"card-header"],[1,"row","justify-content-between"],[1,"col-4"],[1,"input-icons"],[1,"input-group","input-group-sm"],["type","search","aria-label","Small","placeholder","Search","aria-describedby","inputGroup-sizing-sm",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-append"],["id","inputGroup-sizing-sm",1,"input-group-text","h-100"],[1,"ti","ti-search"],[1,"col-md-4","col-3","text-right"],[1,"btn","add-btn",3,"click"],[1,"ti","ti-plus","me-1"],[1,"card-body","p-3"],[1,"table-responsive"],[1,"table","table-hover","table-bordered"],[1,"thead"],[1,"table-secondary"],["scope","col"],["scope","col",1,"text-start"],["scope","col",1,"mx-auto","text-center"],[1,"tbody","mt-3"],[4,"ngFor","ngForOf"],[3,"page","pageSize","collection","pageChange","pageSizeChange","collectionChange","myOutput"],["deleteModal",""],["scope","row"],["scope","row",1,"text-start"],["placement","top",3,"ngbTooltip"],["scope","row",1,"text-center"],["class","btn action-btn btn-sm me-2","ngbTooltip","Update",3,"disabled","click",4,"ngIf"],["class","btn action-btn btn-sm me-2","ngbTooltip","Generated",3,"disabled","click",4,"ngIf"],["class","btn action-btn btn-sm me-2","ngbTooltip","Reset",3,"disabled","click",4,"ngIf"],["ngbTooltip","Print",1,"btn","action-btn","btn-sm","me-2",3,"disabled","click"],[1,"fas","fa-eye"],["ngbTooltip","Print",1,"btn","action-btn","btn-sm",3,"disabled","click"],[1,"fa-brands","fa-whatsapp"],["ngbTooltip","Update",1,"btn","action-btn","btn-sm","me-2",3,"disabled","click"],[1,"ti","ti-edit-circle"],["ngbTooltip","Generated",1,"btn","action-btn","btn-sm","me-2",3,"disabled","click"],[1,"fas","fa-file-alt"],["ngbTooltip","Reset",1,"btn","action-btn","btn-sm","me-2",3,"disabled","click"],[1,"fas","fa-rotate-left"],[1,"modal-header","border-0"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","border-0"],["id","modal-basic-title",1,"modal-title","text-center","text-primary"],["id","modal-basic-title",1,"modal-title","text-center"],[1,"modal-footer","justify-content-center","border-0"],[1,"btn","px-4","btn-outline-danger",3,"click"],["type","button",1,"btn","px-4","btn-outline-primary",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4,"New Invoice List"),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"input",8),t.NdJ("ngModelChange",function(l){return n.search=l})("input",function(){return n.searchFn()}),t.qZA(),t.TgZ(11,"div",9)(12,"span",10),t._UZ(13,"i",11),t.qZA()()()()(),t.TgZ(14,"div",12)(15,"button",13),t.NdJ("click",function(){return n.navigateTo("/default/new-invoice/form",null,"create")}),t._UZ(16,"i",14),t._uU(17," Add Invoice "),t.qZA()()()(),t.TgZ(18,"div",15)(19,"div",16)(20,"table",17)(21,"thead",18)(22,"tr",19)(23,"th",20),t._uU(24,"Invoice no."),t.qZA(),t.TgZ(25,"th",20),t._uU(26,"Invoice Date"),t.qZA(),t.TgZ(27,"th",21),t._uU(28,"Customer Name"),t.qZA(),t.TgZ(29,"th",20),t._uU(30,"Mobile"),t.qZA(),t.TgZ(31,"th",20),t._uU(32,"Total Price"),t.qZA(),t.TgZ(33,"th",20),t._uU(34,"Status"),t.qZA(),t.TgZ(35,"th",22),t._uU(36,"Action"),t.qZA()()(),t.TgZ(37,"tbody",23),t.YNc(38,q,24,20,"tr",24),t.qZA()()(),t.TgZ(39,"app-custom-pagination",25),t.NdJ("pageChange",function(l){return n.page=l})("pageSizeChange",function(l){return n.pageSize=l})("collectionChange",function(l){return n.collection=l})("myOutput",function(){return n.onChangePage(n.page)}),t.qZA()()()(),t.YNc(40,F,13,4,"ng-template",null,26,t.W1O)),2&i&&(t.xp6(10),t.Q6J("ngModel",n.search),t.xp6(28),t.Q6J("ngForOf",n.products),t.xp6(1),t.Q6J("page",n.page)("pageSize",n.pageSize)("collection",n.collection))},dependencies:[u.sg,u.O5,r.Fj,r.JJ,r.On,p._L,_.W,u.gd,u.rS,u.uU]})}return o})();var I=a(485),C=a(6857),O=a(503);let k=(()=>{class o{constructor(e,i,n,s,l,d){this.router=e,this.spinner=i,this.validationService=n,this.customerService=s,this.toastService=l,this.modelService=d,this.submitted=!1,this.userId=null,this.customerForm=new r.cw({_id:new r.NI(null),customerName:new r.NI(null,[r.kI.required]),mobile:new r.NI(null,[r.kI.required]),whatsUp:new r.NI(null),email:new r.NI(null),DOB:new r.NI(null),currency:new r.NI("INR"),address:new r.cw({line1:new r.NI(null),line2:new r.NI(null),city:new r.NI(null),state:new r.NI(null),country:new r.NI("India"),pinCode:new r.NI(null)})}),this.FORM_ERRORS=[{message:"Name is Required",key:"customerName"},{message:"Mobile is Required",key:"mobile"}]}get f(){return this.customerForm.controls}ngOnInit(){this.customerObj.customerName&&this.f.customerName.setValue(this.customerObj.customerName),this.customerObj.mobile&&this.f.mobile.setValue(this.customerObj.mobile)}navigateTo(e){this.router.navigate([e])}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.customerForm,this.FORM_ERRORS))return;let e=this.customerForm.value;e.role="Admin",this.create(e)}create(e){this.spinner.show(),this.customerService.create(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.modelService.close(i.customerDetails)})}reset(){this.customerForm.reset()}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(m.F0),t.Y36(Z.V),t.Y36(C.R),t.Y36(O.v),t.Y36(I.k),t.Y36(p.Kz))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-model"]],inputs:{customerObj:"customerObj"},decls:35,vars:1,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-header","p-3","d-flex","justify-content-between"],[1,"btn","btn-white","border","border-0",3,"click"],[1,"fa","fa-md","text-primary","fa-xmark","align-self-center","shadow","p-1","mb-2","bg-white","rounded"],[1,"card-body","p-4"],[3,"formGroup"],[1,"col-md-6","mb-2"],[1,"form-label"],[1,"text-danger"],["formControlName","customerName","placeholder","Full Name","type","text",1,"form-control"],["formControlName","mobile","placeholder","Mobile","type","text",1,"form-control"],[1,"my-3"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","reset-btn","btn-primary","mx-2",3,"click"],[1,"fa-solid","fa-arrows-rotate","me-2"],["type","submit",1,"btn","submit-btn","btn-success",3,"click"],[1,"fa-solid","fa-plus","me-2"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3"),t._uU(6,"Create Customer"),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.modelService.dismiss()}),t._UZ(8,"i",6),t.qZA()(),t.TgZ(9,"div",7)(10,"form",8)(11,"div",1)(12,"div",9)(13,"label",10),t._uU(14," Name "),t.TgZ(15,"span",11),t._uU(16,"*"),t.qZA()(),t._UZ(17,"input",12)(18,"div"),t.qZA(),t.TgZ(19,"div",9)(20,"label",10),t._uU(21," Mobile Number "),t.TgZ(22,"span",11),t._uU(23,"*"),t.qZA()(),t._UZ(24,"input",13),t.qZA()(),t._UZ(25,"hr",14),t.TgZ(26,"div",1)(27,"div",2)(28,"div",15)(29,"button",16),t.NdJ("click",function(){return n.reset()}),t._UZ(30,"i",17),t._uU(31," Reset "),t.qZA(),t.TgZ(32,"button",18),t.NdJ("click",function(){return n.submit()}),t._UZ(33,"i",19),t._uU(34," Save "),t.qZA()()()()()()()()()()),2&i&&(t.xp6(10),t.Q6J("formGroup",n.customerForm))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return o})();var S=a(9769),J=a(2096),D=a(8672),V=a(4807),P=a(1998);const g=function(){return{standalone:!0}};function R(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",55),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"input",56),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.salePrice=n)})("input",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.lineValueRate(s))}),t.qZA()(),t.TgZ(9,"td")(10,"input",56),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.quantity=n)})("input",function(){const s=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.lineValueRate(s))}),t.qZA()(),t.TgZ(11,"td"),t._uU(12),t.qZA()()}if(2&o){const e=c.$implicit;t.xp6(2),t.Oqu(null==e?null:e.productCode),t.xp6(2),t.Oqu(null==e?null:e.productName),t.xp6(2),t.Oqu(null==e?null:e.balanceQuantity),t.xp6(2),t.Q6J("ngModel",e.salePrice)("ngModelOptions",t.DdM(8,g)),t.xp6(2),t.Q6J("ngModel",e.quantity)("ngModelOptions",t.DdM(9,g)),t.xp6(2),t.Oqu(null==e?null:e.totalValue)}}function Y(o,c){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.discountPercentage,"% ")}}function L(o,c){if(1&o&&(t._uU(0),t.ALo(1,"currency")),2&o){const e=t.oxw().$implicit;t.hij(" ",t.xi3(1,1,null==e?null:e.discountAmount,"INR")," ")}}function G(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",67)(2,"input",68),t.NdJ("ngModelChange",function(n){const l=t.CHM(e).$implicit;return t.KtG(l.isApply=n)}),t.qZA()(),t.TgZ(3,"td",67),t._uU(4),t.qZA(),t.TgZ(5,"td",67),t._uU(6),t.qZA(),t.TgZ(7,"td",67),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",67),t.YNc(11,Y,2,1,"span",69),t.YNc(12,L,2,4,"ng-template",null,70,t.W1O),t.qZA()()}if(2&o){const e=c.$implicit,i=t.MAs(13);t.xp6(2),t.Q6J("ngModel",e.isApply),t.xp6(2),t.Oqu(null==e?null:e.couponCode),t.xp6(2),t.Oqu(null==e?null:e.description),t.xp6(2),t.Oqu(t.lcZ(9,6,null==e?null:e.expirationDate)),t.xp6(3),t.Q6J("ngIf",null==e?null:e.discountPercentage)("ngIfElse",i)}}function Q(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",57)(1,"h4",58),t._uU(2,"Apply Coupons"),t.qZA(),t.TgZ(3,"button",59),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("Cross click"))}),t.qZA()(),t.TgZ(4,"div",60)(5,"div",61)(6,"table",62)(7,"thead",26)(8,"tr",63)(9,"th",28),t._uU(10,"Select"),t.qZA(),t.TgZ(11,"th",28),t._uU(12,"Coupon Code"),t.qZA(),t.TgZ(13,"th",28),t._uU(14,"Description"),t.qZA(),t.TgZ(15,"th",28),t._uU(16,"Expiration Date"),t.qZA(),t.TgZ(17,"th",28),t._uU(18,"Discount"),t.qZA()()(),t.TgZ(19,"tbody",64),t.YNc(20,G,14,8,"tr",31),t.qZA()()()(),t.TgZ(21,"div",65)(22,"button",66),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.applyCoupon())}),t._uU(23," Apply "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",e.coupons)}}function $(o,c){1&o&&(t.TgZ(0,"span"),t._uU(1,","),t.qZA())}function j(o,c){if(1&o&&(t.ynx(0),t._uU(1),t.YNc(2,$,2,0,"span",71),t.BQk()),2&o){const e=c.$implicit,i=c.index,n=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.code," "),t.xp6(1),t.Q6J("ngIf",i!=(null==n?null:n.products.length)-1)}}function z(o,c){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",null==e?null:e.discountPercentage,"% ")}}function E(o,c){if(1&o&&(t._uU(0),t.ALo(1,"currency")),2&o){const e=t.oxw().$implicit;t.hij(" ",t.xi3(1,1,null==e?null:e.discountAmount,"INR")," ")}}function K(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td",67),t._uU(2),t.qZA(),t.TgZ(3,"td",67),t._uU(4),t.qZA(),t.TgZ(5,"td",67),t.YNc(6,j,3,2,"ng-container",31),t.qZA(),t.TgZ(7,"td",67),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",67),t.YNc(11,z,2,1,"span",69),t.YNc(12,E,2,4,"ng-template",null,70,t.W1O),t.qZA()()),2&o){const e=c.$implicit,i=c.index,n=t.MAs(13);t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(null==e?null:e.title),t.xp6(2),t.Q6J("ngForOf",null==e?null:e.products),t.xp6(2),t.Oqu(t.lcZ(9,6,null==e?null:e.expirationDate)),t.xp6(3),t.Q6J("ngIf",null==e?null:e.discountPercentage)("ngIfElse",n)}}function H(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",57)(1,"h4",58),t._uU(2,"View Offers"),t.qZA(),t.TgZ(3,"button",59),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.KtG(s.dismiss("Cross click"))}),t.qZA()(),t.TgZ(4,"div",60)(5,"div",61)(6,"table",62)(7,"thead",26)(8,"tr",63)(9,"th",28),t._uU(10,"Sr. No."),t.qZA(),t.TgZ(11,"th",28),t._uU(12,"Title"),t.qZA(),t.TgZ(13,"th",28),t._uU(14,"Products"),t.qZA(),t.TgZ(15,"th",28),t._uU(16,"Expiration Date"),t.qZA(),t.TgZ(17,"th",28),t._uU(18,"Discount"),t.qZA()()(),t.TgZ(19,"tbody",64),t.YNc(20,K,14,8,"tr",31),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",e.offers)}}let B=(()=>{class o{constructor(e,i,n,s,l,d,h,et){this.location=e,this.modelService=i,this.service=n,this.validationService=s,this.spinner=l,this.router=d,this.actRoute=h,this.toastService=et,this.page=1,this.pageSize=8,this.collection=0,this.customerOption=[],this.coupons=[],this.offers=[],this.saleProducts=[],this.productDetails=[],this.paymentOptions=[{label:"Cash",value:"Cash"},{label:"UPI",value:"UPI"}],this.submitted=!1,this.isPreview=!1,this.action="create",this.search="",this.masterData=[],this.customerObj={},this.form=new r.cw({_id:new r.p4(null),invoiceNo:new r.p4(null),customerId:new r.p4(null,[r.kI.required]),customerName:new r.p4(null),mobile:new r.p4(null),whatsUp:new r.p4(null),email:new r.p4(null),productDetails:new r.cw([]),gst:new r.p4(0),lineValue:new r.p4(0),totalPrice:new r.p4(0),coupon_offersAmount:new r.p4(0),netValue:new r.p4(0),netPPV:new r.p4(0),paymentType:new r.p4("Cash")}),this.FORM_ERRORS=[{message:"Customer is required",key:"customerId"},{message:"Net Value is required",key:"netValue"}]}get f(){return this.form.controls}ngOnInit(){this.getInitialData()}openCustomerModel(){const e=this.modelService.open(k,{size:"xl"});e.componentInstance.customerObj=this.customerObj,e.result.then(i=>{i&&i._id&&this.getInitialData(i)},i=>{}).finally(()=>{this.customerObj={}})}getInitialData(e=null){this.service.getAllMasterData({}).subscribe(i=>{this.f.invoiceNo.setValue(i.invoiceNo),this.customerOption=i.customers,this.coupons=i.coupons.map(n=>(n.isApply=!1,n)),this.offers=i.offers,e&&(this.f.customerId.setValue(e._id),this.f.customerName.setValue(e.customerName),this.f.whatsUp.setValue(e.whatsUp),this.f.mobile.setValue(e.mobile),this.f.email.setValue(e.email)),this.productDetails=i.saleProducts,this.masterData=i.saleProducts,this.collection=this.productDetails?.length,this.actRoute.queryParams.pipe((0,S.z)(n=>(this.action=n.action,n.id?this.service.getById(n.id):(0,J.of)({})))).subscribe(n=>{n.productDetails&&(this.productDetails=n.productDetails,this.collection=this.productDetails?.length),this.form.patchValue(n)})})}openModel(e){this.modelService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}).result.then(i=>{console.log("`Closed with: ${result}`",`Closed with: ${i}`)},i=>{console.log(`Dismissed ${this.getDismissReason(i)}`)})}getDismissReason(e){return e===p.If.ESC?"by pressing ESC":e===p.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${e}`}setCustomerInfo(e){this.f.customerId.setValue(e._id),this.f.customerName.setValue(e.customerName),this.f.whatsUp.setValue(e.whatsUp),this.f.mobile.setValue(e.mobile),this.f.email.setValue(e.email)}detectChange(e,i){"customerName"==i?this.customerObj.customerName=e.target.value:this.customerObj.mobile=e.target.value}onChangePage(e){e>0&&(this.page=e)}lineValueRate(e){let i=this.productDetails.map(s=>s.productId).indexOf(e.productId);this.saleProducts.find(s=>s.productId===e.productId)?.balanceQuantity<e.quantity&&this.toastService.warning("Enter quantity is greater quantity than balanced quantity"),this.productDetails[i].lineValue=Number((e.quantity*e.salePrice).toFixed(2)),this.productDetails[i].PPV=Number((e.quantity*e.salePrice-e.quantity*e.purchaseRate).toFixed(2)),this.productDetails[i].totalValue=this.productDetails[i].lineValue+0*this.productDetails[i].lineValue,this.productDetails[i].appliedGst=0,this.setNetValue()}setNetValue(){this.f.lineValue.setValue(+this.productDetails.reduce((e,i)=>e+i.lineValue,0).toFixed(2)),this.f.netPPV.setValue(+this.productDetails.reduce((e,i)=>e+i.PPV,0).toFixed(2)),this.f.gst.setValue(+this.productDetails.reduce((e,i)=>e+i.appliedGst,0).toFixed(2)),this.f.totalPrice.setValue(this.productDetails.reduce((e,i)=>e+i.totalValue,0).toFixed(2)),this.f.netValue.setValue(+this.f.lineValue.value+ +this.f.gst.value-+this.f.coupon_offersAmount.value)}resetForm(){this.form.reset(),this.getInitialData()}preview(){this.productDetails=this.productDetails.filter(e=>e.quantity>0),this.isPreview=!0}onSubmit(){if(this.submitted=!0,this.validationService.checkErrors(this.form,this.FORM_ERRORS))return;let e=this.form.value;e.productDetails=this.productDetails,e._id?this.update(e._id,e):(delete e._id,this.create(e))}create(e){this.spinner.show(),this.service.create(e).subscribe(i=>{this.spinner.hide(),this.router.navigate(["/default/new-invoice/list"])})}update(e,i){this.spinner.show(),this.service.updateById(e,i).subscribe(n=>{this.spinner.hide(),this.router.navigate(["/default/new-invoice/list"])})}back(){this.location.back()}applyCoupon(){this.modelService.dismissAll()}applyDiscount(e){this.f.netValue.setValue(this.f.lineValue.value-e.target.value)}addProduct(){for(const e of this.masterData){let i=this.productDetails.some(n=>e.productId===n.productId);console.log("ele",e),i||this.productDetails.push(e)}this.collection=this.productDetails?.length}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(u.Ye),t.Y36(p.FF),t.Y36(b.q),t.Y36(C.R),t.Y36(D.t2),t.Y36(m.F0),t.Y36(m.gz),t.Y36(v._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-form"]],decls:99,vars:30,consts:[[1,"card","form-card"],[1,"card-header"],[1,"card-header-items"],[1,"back-btn","btn","btn-primary",3,"click"],[1,"ti","ti-arrow-left","me-1"],[1,"card-body","justify-content-center","py-2"],[3,"formGroup"],[1,"row"],[1,"col-3"],[1,"form-label"],["readonly","","formControlName","invoiceNo","type","text",1,"form-control","form-control-sm"],[1,"input-group","d-flex","flex-nowrap"],["placeholder","Select Customer","bindLabel","customerName","bindValue","_id","formControlName","customerId",1,"ng-select-sm","w-100",3,"items","clearable","change","input"],["role","button",1,"input-group-text","bg-danger",3,"click"],[1,"fa","fa-lg","text-white","fa-plus","align-self-center"],["placeholder","Select Mobile","bindLabel","mobile","bindValue","_id","formControlName","customerId",1,"ng-select-sm","w-100",3,"items","clearable","multiple","change","input"],["placeholder","Select Payment Type","bindLabel","label","bindValue","value","formControlName","paymentType",1,"ng-select-sm","w-100",3,"items","clearable","multiple"],[1,"my-2"],[1,"row","my-1","justify-content-start"],[1,"input-group","input-group-sm"],["type","search","aria-describedby","inputGroup-sizing-sm","aria-label","Small",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],[1,"input-group-append"],["id","inputGroup-sizing-sm",1,"input-group-text","h-100"],[1,"ti","ti-search"],[1,"table-responsive",2,"min-height","41.7vh"],[1,"table","table-hover","table-sm","table-bordered","text-center"],[1,"thead"],[1,"table-primary"],["scope","col"],["scope","col",1,"text-start"],[1,"tbody"],[4,"ngFor","ngForOf"],[3,"page","pageSize","collection","pageChange","pageSizeChange","collectionChange","myOutput"],[1,"row","justify-content-between"],[1,"col-12","d-flex","pe-0"],[1,"input-group","d-flex"],[1,"input-group-text"],["type","text","readonly","","formControlName","lineValue",1,"form-control","form-control-sm","d-inline","w-25"],[1,"fa","fa-lg","text-primary","fa-minus","mx-2","align-self-center"],["type","number","formControlName","coupon_offersAmount",1,"form-control","form-control-sm","d-inline","w-25",3,"input"],[1,"fa","fa-lg","text-danger","fa-equals","mx-2","align-self-center"],["type","number","formControlName","netValue","readonly","",1,"form-control","form-control-sm","d-inline","w-25"],[1,"mx-2"],[1,"col-12"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","reset-btn","btn-primary",3,"click"],[1,"fa-solid","fa-arrows-rotate","me-2"],["type","submit",1,"btn","reset-btn","btn-secondary",3,"click"],["aria-hidden","true",1,"fa","fa-plus-circle","me-2"],["type","submit",1,"btn","reset-btn","btn-info",3,"click"],[1,"fa-solid","fa-eye","me-2"],["type","submit",1,"btn","submit-btn",3,"disabled","click"],[1,"fa-solid","me-2"],["couponModel",""],["offersModel",""],[1,"text-start"],["type","number",1,"form-control","form-control-sm","d-inline","input",3,"ngModel","ngModelOptions","ngModelChange","input"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"table-responsive","text-center"],[1,"table","table-striped"],[1,"table-secondary"],[1,"tbody","mt-3"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-primary",3,"click"],["scope","row"],["type","checkbox",1,"form-check-input",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfElse"],["elseBlock",""],[4,"ngIf"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"a",3),t.NdJ("click",function(){return n.back()}),t._UZ(7,"i",4),t._uU(8," Back"),t.qZA()()()(),t.TgZ(9,"div",5)(10,"form",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14,"Invoice Number"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",8)(17,"label",9),t._uU(18,"Customer"),t.qZA(),t.TgZ(19,"div",11)(20,"ng-select",12),t.NdJ("change",function(l){return n.setCustomerInfo(l)})("input",function(l){return n.detectChange(l,"customerName")}),t.qZA(),t.TgZ(21,"span",13),t.NdJ("click",function(){return n.openCustomerModel()}),t._UZ(22,"i",14),t.qZA()()(),t.TgZ(23,"div",8)(24,"label",9),t._uU(25,"Mobile"),t.qZA(),t.TgZ(26,"ng-select",15),t.NdJ("change",function(l){return n.setCustomerInfo(l)})("input",function(l){return n.detectChange(l,"mobile")}),t.qZA()(),t.TgZ(27,"div",8)(28,"label",9),t._uU(29,"Payment Type"),t.qZA(),t._UZ(30,"ng-select",16),t.qZA()(),t._UZ(31,"hr",17),t.TgZ(32,"div",18)(33,"div",8)(34,"div",19)(35,"input",20),t.NdJ("ngModelChange",function(l){return n.search=l}),t.qZA(),t.TgZ(36,"div",21)(37,"span",22),t._UZ(38,"i",23),t.qZA()()()()(),t._UZ(39,"hr",17),t.TgZ(40,"div",24)(41,"table",25)(42,"thead",26)(43,"tr",27)(44,"th",28),t._uU(45,"Product Code"),t.qZA(),t.TgZ(46,"th",29),t._uU(47,"Product Name"),t.qZA(),t.TgZ(48,"th",28),t._uU(49,"Bal. Quantity"),t.qZA(),t.TgZ(50,"th",28),t._uU(51,"Sale Price"),t.qZA(),t.TgZ(52,"th",28),t._uU(53,"Quantity"),t.qZA(),t.TgZ(54,"th",28),t._uU(55,"Total Price"),t.qZA()()(),t.TgZ(56,"tbody",30),t.YNc(57,R,13,10,"tr",31),t.ALo(58,"slice"),t.ALo(59,"searchFi1ter"),t.qZA()()(),t.TgZ(60,"app-custom-pagination",32),t.NdJ("pageChange",function(l){return n.page=l})("pageSizeChange",function(l){return n.pageSize=l})("collectionChange",function(l){return n.collection=l})("myOutput",function(){return n.onChangePage(n.page)}),t.qZA(),t._UZ(61,"hr",17),t.TgZ(62,"div",33)(63,"div",34)(64,"div",35)(65,"span",36),t._uU(66,"Total Prize"),t.qZA(),t._UZ(67,"input",37)(68,"i",38),t.qZA(),t.TgZ(69,"div",35)(70,"span",36),t._uU(71,"Discount Rupees"),t.qZA(),t.TgZ(72,"input",39),t.NdJ("input",function(l){return n.applyDiscount(l)}),t.qZA(),t._UZ(73,"i",40),t.qZA(),t.TgZ(74,"div",35)(75,"span",36),t._uU(76,"Net Value"),t.qZA(),t._UZ(77,"input",41)(78,"span",42),t.qZA()()(),t._UZ(79,"hr",17),t.TgZ(80,"div",7)(81,"div",43)(82,"div",44)(83,"button",45),t.NdJ("click",function(){return n.resetForm()}),t._UZ(84,"i",46),t._uU(85," Reset "),t.qZA(),t.TgZ(86,"button",47),t.NdJ("click",function(){return n.addProduct()}),t._UZ(87,"i",48),t._uU(88," Esc "),t.qZA(),t.TgZ(89,"button",49),t.NdJ("click",function(){return n.preview()}),t._UZ(90,"i",50),t._uU(91," Preview "),t.qZA(),t.TgZ(92,"button",51),t.NdJ("click",function(){return n.onSubmit()}),t._UZ(93,"i",52),t._uU(94),t.qZA()()()()()()(),t.YNc(95,Q,24,1,"ng-template",null,53,t.W1O),t.YNc(97,H,21,1,"ng-template",null,54,t.W1O)),2&i&&(t.xp6(4),t.hij("",n.f._id.value?"Update":"Create"," New Invoice"),t.xp6(6),t.Q6J("formGroup",n.form),t.xp6(10),t.Q6J("items",n.customerOption)("clearable",!1),t.xp6(6),t.Q6J("items",n.customerOption)("clearable",!1)("multiple",!1),t.xp6(4),t.Q6J("items",n.paymentOptions)("clearable",!1)("multiple",!1),t.xp6(5),t.Q6J("ngModel",n.search)("ngModelOptions",t.DdM(29,g)),t.xp6(22),t.Q6J("ngForOf",t.Dn7(58,22,t.xi3(59,26,n.productDetails,n.search),n.page*n.pageSize-n.pageSize,n.page*n.pageSize)),t.xp6(3),t.Q6J("page",n.page)("pageSize",n.pageSize)("collection",n.collection),t.xp6(32),t.Tol(n.f._id.value?"btn-warning":"btn-success"),t.Q6J("disabled",!n.isPreview),t.xp6(1),t.Tol(n.f._id.value?"fa-pen-to-square":"fa-plus"),t.xp6(1),t.hij(" ",n.f._id.value?"Update":"Create"," "))},dependencies:[u.sg,u.O5,V.w9,r._Y,r.Fj,r.wV,r.Wl,r.JJ,r.JL,r.On,r.sg,r.u,_.W,u.OU,u.H9,u.uU,P.G],styles:[".form-label[_ngcontent-%COMP%]{margin-bottom:0}.input[_ngcontent-%COMP%]{height:1.4rem!important;min-height:1.4rem!important;width:5rem!important}"]})}return o})();var W=a(4086);const X=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:M},{path:"form",component:B}];let tt=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[u.ez,m.Bz.forChild(X),W.m,_.W]})}return o})()}}]);