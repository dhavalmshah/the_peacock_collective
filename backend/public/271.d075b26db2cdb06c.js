"use strict";(self.webpackChunkmantis_free_version=self.webpackChunkmantis_free_version||[]).push([[271],{4495:(w,y,a)=>{a.d(y,{s:()=>C});var f=a(9862),m=a(3997),n=a(7398),t=a(8645),Z=a(4552);class g extends t.x{constructor(p=1/0,l=1/0,o=Z.l){super(),this._bufferSize=p,this._windowTime=l,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=l===1/0,this._bufferSize=Math.max(1,p),this._windowTime=Math.max(1,l)}next(p){const{isStopped:l,_buffer:o,_infiniteTimeWindow:c,_timestampProvider:_,_windowTime:v}=this;l||(o.push(p),!c&&o.push(_.now()+v)),this._trimBuffer(),super.next(p)}_subscribe(p){this._throwIfClosed(),this._trimBuffer();const l=this._innerSubscribe(p),{_infiniteTimeWindow:o,_buffer:c}=this,_=c.slice();for(let v=0;v<_.length&&!p.closed;v+=o?1:2)p.next(_[v]);return this._checkFinalizedStatuses(p),l}_trimBuffer(){const{_bufferSize:p,_timestampProvider:l,_buffer:o,_infiniteTimeWindow:c}=this,_=(c?1:2)*p;if(p<1/0&&_<o.length&&o.splice(0,o.length-_),!c){const v=l.now();let A=0;for(let b=1;b<o.length&&o[b]<=v;b+=2)A=b;A&&o.splice(0,A+1)}}}var I=a(3020);function U(d,p,l){let o,c=!1;return d&&"object"==typeof d?({bufferSize:o=1/0,windowTime:p=1/0,refCount:c=!1,scheduler:l}=d):o=d??1/0,(0,I.B)({connector:()=>new g(o,p,l),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:c})}var T=a(5879);let C=(()=>{class d{constructor(l){this.httpClient=l,this.options={headers:(new f.WM).set("Content-Type","application/json")}}private(){return`${location.protocol}//${location.hostname+(location.port?":"+location.port:"")}/`}get(l,o=new f.LE){return(0,m.x)(),this.httpClient.get(l,{params:o}).pipe((0,n.U)(c=>c.result),U())}put(l,o={}){return(0,m.x)(),this.httpClient.put(l,o).pipe((0,n.U)(c=>c.result))}post(l,o={}){return(0,m.x)(),this.httpClient.post(l,o).pipe((0,n.U)(c=>c.result))}delete(l){return(0,m.x)(),this.httpClient.delete(l).pipe((0,n.U)(o=>o.result),U())}getFile(l,o=new f.LE){return this.httpClient.get(l,{responseType:"blob",headers:(new f.WM).append("Content-Type","application/json")})}getIp(){return(0,m.x)(),this.httpClient.get("https://ipapi.co/json/").pipe(U())}static#t=this.\u0275fac=function(o){return new(o||d)(T.LFG(f.eN))};static#e=this.\u0275prov=T.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},7877:(w,y,a)=>{a.r(y),a.d(y,{UsersModule:()=>x});var f=a(6814),m=a(1076),n=a(95),t=a(5879),Z=a(7285),g=a(7398),I=a(4495);let U=(()=>{class r{constructor(e){this.http=e,this.BASE_URL="user",this.routes={createPath:"user/signup",getAllPath:this.BASE_URL,updatePath:i=>this.BASE_URL+"/"+i,getByIdPath:i=>`user/profile/${i}`,deletePath:i=>`user/${i}`}}createUser(e){return this.http.post(this.BASE_URL+"/signup",e).pipe((0,g.U)(i=>i))}login(e){return this.http.post(this.BASE_URL+"/login",e).pipe((0,g.U)(i=>i))}getAllUsers(e){return this.http.get(this.BASE_URL,e).pipe((0,g.U)(i=>i))}update(e,i){return this.http.put(this.BASE_URL+"/"+e,i).pipe((0,g.U)(s=>s))}getById(e){return this.http.get(this.BASE_URL+"/profile",e).pipe((0,g.U)(i=>i))}delete(e){return this.http.delete(this.BASE_URL+"/"+e).pipe((0,g.U)(i=>i))}getAddressByIdPath(e){return this.http.get(this.routes.getAddressByIdPath(e)).pipe((0,g.U)(i=>i))}getAllCustomerAddressById(e){return this.http.get(this.routes.getAllCustomerAddressById(e)).pipe((0,g.U)(i=>i))}static#t=this.\u0275fac=function(i){return new(i||r)(t.LFG(I.s))};static#e=this.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var T=a(4087),C=a(485),d=a(7741);function p(r,S){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",31),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,u=t.oxw();return t.KtG(u.navigateTo("/default/user/user-form",null==s?null:s.id))}),t._UZ(2,"i",32),t.qZA(),t.TgZ(3,"button",33),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,u=t.oxw(),h=t.MAs(41);return t.KtG(u.open(s,h))}),t._UZ(4,"i",34),t.qZA(),t.BQk()}}function l(r,S){if(1&r&&(t.TgZ(0,"tr")(1,"td",28),t._uU(2),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t.TgZ(5,"td",28),t._uU(6),t.qZA(),t.TgZ(7,"td",28),t._uU(8),t.qZA(),t.TgZ(9,"td",28),t._uU(10),t.qZA(),t.TgZ(11,"td",29),t.YNc(12,p,5,0,"ng-container",30),t.qZA()()),2&r){const e=S.$implicit,i=S.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(2),t.Oqu(null==e?null:e.email),t.xp6(2),t.Oqu(null==e?null:e.mobile),t.xp6(2),t.Oqu(null==e?null:e.role),t.xp6(2),t.Q6J("ngIf","Super_Admin"!=(null==e?null:e.role))}}function o(r,S){if(1&r){const e=t.EpF();t.TgZ(0,"div",35)(1,"button",36),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.KtG(u.dismiss("Cross click"))}),t.qZA()(),t.TgZ(2,"div",37)(3,"h4",38),t._uU(4," Are you sure you want to Delete ? "),t.qZA()(),t.TgZ(5,"div",39)(6,"button",40),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.deleteUser(null==s.selectedRow?null:s.selectedRow.id))}),t._uU(7," YES "),t.qZA(),t.TgZ(8,"button",41),t.NdJ("click",function(){const u=t.CHM(e).$implicit;return t.KtG(u.dismiss("Cross click"))}),t._uU(9," NO "),t.qZA()()}}let c=(()=>{class r{constructor(e,i,s,u,h){this.router=e,this.userService=i,this.activated=s,this.spinner=u,this.toastService=h,this.modalService=(0,t.f3M)(Z.FF),this.page=1,this.pageSize=25,this.collection=0,this.column="createdAt",this.direction=-1,this.search="",this.users=[],this.address=""}ngOnInit(){this.activated.queryParams.subscribe(e=>{e.id&&(this.getAddressById(e.id),this.address=e.id)}),this.getAll()}navigateTo(e,i){i?this.router.navigate([e],{queryParams:{id:i}}):this.router.navigate([e])}open(e,i){this.selectedRow=e,this.modalService.open(i,{centered:!0})}searchFn(){(this.search.toString().length>=3||0==this.search.toString().length)&&this.getAll()}deleteUser(e){this.spinner.show(),this.userService.delete(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.modalService.dismissAll(),this.getAll()})}onChangePage(e){e>0&&(this.page=e),this.getAll()}getAll(){this.spinner.show(),this.userService.getAllUsers({page:this.page,pageSize:this.pageSize,search:this.search}).subscribe(i=>{this.spinner.hide(),this.users=i.rows,this.collection=i.count})}getAddressById(e){this.spinner.show(),this.userService.getAddressByIdPath(e).subscribe(i=>{this.spinner.hide(),this.router.navigate(["/default/user/customer-address"],{queryParams:{id:e}})})}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(m.F0),t.Y36(U),t.Y36(m.gz),t.Y36(T.V),t.Y36(C.k))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-user-list"]],decls:42,vars:5,consts:[[1,"table-container"],[1,"card","table-card"],[1,"card-title"],[1,"card-header"],[1,"row"],[1,"col-12"],[1,"row","justify-content-between"],[1,"col-4"],[1,"input-icons"],[1,"input-group","input-group-sm"],["type","search","aria-label","Small","placeholder","Search","aria-describedby","inputGroup-sizing-sm",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-append"],["id","inputGroup-sizing-sm",1,"input-group-text","h-100"],[1,"ti","ti-search"],[1,"col-md-4","col-3","text-right"],[1,"btn","add-btn",3,"click"],[1,"ti","ti-plus","me-1"],[1,"card-body","p-3"],[1,"table-responsive"],[1,"table","table-hover","table-bordered"],[1,"thead"],[1,"table-secondary"],["scope","col"],["scope","col",1,"mx-auto","text-center"],[1,"tbody","mt-3"],[4,"ngFor","ngForOf"],[3,"page","pageSize","collection","pageChange","pageSizeChange","collectionChange","myOutput"],["deleteModal",""],["scope","row"],["scope","row",1,"text-center"],[4,"ngIf"],["ngbTooltip","Update",1,"btn","action-btn","btn-sm","mx-2",3,"click"],[1,"ti","ti-edit-circle"],["ngbTooltip","Delete",1,"btn","action-btn","btn-sm",3,"click"],[1,"ti","ti-trash"],[1,"modal-header","border-0"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body","border-0"],["id","modal-basic-title",1,"modal-title","text-center"],[1,"modal-footer","justify-content-center","border-0"],["type","button",1,"btn","px-4","btn-outline-danger",3,"click"],["type","button",1,"btn","px-4","btn-outline-primary",3,"click"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4,"Users List"),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4),t._UZ(7,"div",5),t.qZA(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"input",10),t.NdJ("ngModelChange",function(h){return s.search=h})("input",function(){return s.searchFn()}),t.qZA(),t.TgZ(13,"div",11)(14,"span",12),t._UZ(15,"i",13),t.qZA()()()()(),t.TgZ(16,"div",14)(17,"button",15),t.NdJ("click",function(){return s.navigateTo("/default/user/user-form",null)}),t._UZ(18,"i",16),t._uU(19," Add User "),t.qZA()()()(),t.TgZ(20,"div",17)(21,"div",18)(22,"table",19)(23,"thead",20)(24,"tr",21)(25,"th",22),t._uU(26,"Sr. No."),t.qZA(),t.TgZ(27,"th",22),t._uU(28,"Name"),t.qZA(),t.TgZ(29,"th",22),t._uU(30,"Email"),t.qZA(),t.TgZ(31,"th",22),t._uU(32,"Mobile No."),t.qZA(),t.TgZ(33,"th",22),t._uU(34,"Role"),t.qZA(),t.TgZ(35,"th",23),t._uU(36,"Action"),t.qZA()()(),t.TgZ(37,"tbody",24),t.YNc(38,l,13,6,"tr",25),t.qZA()()(),t.TgZ(39,"app-custom-pagination",26),t.NdJ("pageChange",function(h){return s.page=h})("pageSizeChange",function(h){return s.pageSize=h})("collectionChange",function(h){return s.collection=h})("myOutput",function(){return s.onChangePage(s.page)}),t.qZA()()()(),t.YNc(40,o,10,0,"ng-template",null,27,t.W1O)),2&i&&(t.xp6(12),t.Q6J("ngModel",s.search),t.xp6(26),t.Q6J("ngForOf",s.users),t.xp6(1),t.Q6J("page",s.page)("pageSize",s.pageSize)("collection",s.collection))},dependencies:[f.sg,f.O5,Z._L,n.Fj,n.JJ,n.On,d.W],styles:[".addbtn[_ngcontent-%COMP%]{position:absolute;top:70px;right:10px}"]})}return r})();var _=function(r){return r.SUPER_ADMIN="SUPER_ADMIN",r.EMPLOYEE="EMPLOYEE",r}(_||{});const v=_;var A=a(6857);let b=(()=>{class r{constructor(e,i,s,u,h,N,R){this.formBuilder=e,this.router=i,this.spinner=s,this.validationService=u,this.activated=h,this.userService=N,this.toastService=R,this.submitted=!1,this.userId=null,this.userRole=v,this.userForm=new n.cw({id:new n.NI(null),name:new n.NI(null,[n.kI.required]),email:new n.NI(null,[n.kI.required]),role:new n.NI(null),mobile:new n.NI(null),password:new n.NI(null,[n.kI.required])}),this.FORM_ERRORS=[{message:"Name is Required",key:"name"},{message:"Email is Required",key:"email"},{message:"Password is Required",key:"password"},{message:"Mobile No..0 is Required",key:"mobile"}]}get f(){return this.userForm.controls}ngOnInit(){this.activated.queryParams.subscribe(e=>{null!=e.id&&(this.userId=e.id,this.getDataById(e.id))})}navigateTo(e){this.router.navigate([e])}submit(){if(this.submitted=!0,this.validationService.checkErrors(this.userForm,this.FORM_ERRORS))return;let e=this.userForm.value;e.id?this.update(e):(delete e.id,this.create(e))}create(e){this.spinner.show(),this.userService.createUser(e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["default/user/user-list"])})}update(e){this.spinner.show(),this.userService.update(e.id,e).subscribe(i=>{this.spinner.hide(),this.toastService.success(i.message),this.router.navigate(["/default/user/user-list"])})}getDataById(e){this.spinner.show(),this.userService.getById({id:e}).subscribe(i=>{this.userForm.patchValue(i),this.userForm.controls.password.setValidators(null),this.userForm.controls.password.updateValueAndValidity(),this.spinner.hide()})}reset(){this.userForm.reset(),this.userId&&this.getDataById(this.userId)}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(n.qu),t.Y36(m.F0),t.Y36(T.V),t.Y36(A.R),t.Y36(m.gz),t.Y36(U),t.Y36(C.k))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-user-form"]],decls:62,vars:10,consts:[[1,"card","form-card"],[1,"card-header"],[1,"card-header-items"],[1,"back-btn","btn","btn-primary",3,"click"],[1,"ti","ti-arrow-left","me-1"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-md-6","mb-2"],[1,"form-label"],[1,"text-danger"],["formControlName","name","placeholder","Full Name","type","text",1,"form-control"],["formControlName","mobile","placeholder","Mobile","type","number",1,"form-control"],["formControlName","email","placeholder","Email","type","text",1,"form-control"],["formControlName","role",1,"form-select"],[3,"value"],[1,"input-group"],["type","password","formControlName","password","placeholder","Password",1,"input","form-control","input-inner-shadow"],[1,"col-12"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","reset-btn","btn-primary",3,"click"],[1,"fa-solid","fa-arrows-rotate","me-2"],["type","submit",1,"btn","submit-btn",3,"click"],[1,"fa-solid","me-2"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),t._uU(4),t.qZA(),t.TgZ(5,"div")(6,"a",3),t.NdJ("click",function(){return s.navigateTo("/default/user/user-list")}),t._UZ(7,"i",4),t._uU(8," Back"),t.qZA()()()(),t.TgZ(9,"div",5)(10,"form",6)(11,"div",7)(12,"div",8)(13,"label",9),t._uU(14," Name "),t.TgZ(15,"span",10),t._uU(16,"*"),t.qZA()(),t._UZ(17,"input",11)(18,"div"),t.qZA(),t.TgZ(19,"div",8)(20,"label",9),t._uU(21," Mobile Number "),t.TgZ(22,"span",10),t._uU(23,"*"),t.qZA()(),t._UZ(24,"input",12),t.qZA()(),t.TgZ(25,"div",7)(26,"div",8)(27,"label",9),t._uU(28," Email "),t.TgZ(29,"span",10),t._uU(30,"*"),t.qZA()(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"div",8)(33,"label",9),t._uU(34," Role "),t.TgZ(35,"span",10),t._uU(36,"*"),t.qZA()(),t.TgZ(37,"select",14)(38,"option",15),t._uU(39,"Select Role"),t.qZA(),t.TgZ(40,"option",15),t._uU(41,"Owner"),t.qZA(),t.TgZ(42,"option",15),t._uU(43,"Employee"),t.qZA()()(),t.TgZ(44,"div",8)(45,"label",9),t._uU(46," Password "),t.TgZ(47,"span",10),t._uU(48,"*"),t.qZA()(),t.TgZ(49,"div",16),t._UZ(50,"input",17),t.qZA()()(),t._UZ(51,"hr"),t.TgZ(52,"div",7)(53,"div",7)(54,"div",18)(55,"div",19)(56,"button",20),t.NdJ("click",function(){return s.reset()}),t._UZ(57,"i",21),t._uU(58," Reset "),t.qZA(),t.TgZ(59,"button",22),t.NdJ("click",function(){return s.submit()}),t._UZ(60,"i",23),t._uU(61),t.qZA()()()()()()()()),2&i&&(t.xp6(4),t.hij("",s.userId?"Update":"Create"," User"),t.xp6(6),t.Q6J("formGroup",s.userForm),t.xp6(28),t.Q6J("value",null),t.xp6(2),t.Q6J("value",s.userRole.SUPER_ADMIN),t.xp6(2),t.Q6J("value",s.userRole.EMPLOYEE),t.xp6(17),t.Tol(s.userId?"btn-warning":"btn-success"),t.xp6(1),t.Tol(s.userId?"fa-pen-to-square":"fa-plus"),t.xp6(1),t.hij(" ",s.userId?"Update":"Create"," "))},dependencies:[n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.sg,n.u],encapsulation:2})}return r})();var q=a(8672);const F=[{path:"",redirectTo:"user-list",pathMatch:"full"},{path:"user-list",component:c},{path:"user-form",component:b}];let x=(()=>{class r{static#t=this.\u0275fac=function(i){return new(i||r)};static#e=this.\u0275mod=t.oAB({type:r});static#i=this.\u0275inj=t.cJS({imports:[f.ez,Z.HK,q.ef,m.Bz.forChild(F),n.u5,n.UX,d.W]})}return r})()}}]);