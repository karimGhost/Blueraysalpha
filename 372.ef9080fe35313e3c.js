"use strict";(self.webpackChunkbluerays_alpha=self.webpackChunkbluerays_alpha||[]).push([[372],{8372:(v,g,n)=>{n.r(g),n.d(g,{BlogModule:()=>h});var r=n(9808),l=n(832),t=n(5e3),u=n(7556),Z=n(7274);let d=(()=>{class o{constructor(e,i){this.route=e,this.auth=i,this.route.params.subscribe(T=>{this.auth.getBlog(T.id).subscribe(b=>{this.blog=b})})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.gz),t.Y36(u.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-article"]],decls:28,vars:25,consts:[[1,"container",2,"padding-top","5%","padding-bottom","5%"],[1,"row"],[1,"col-sm-1"],[1,"col-sm-10"],[1,"badge","bg-custom",2,"text-align","center"],[1,"subtitle",2,"margin","0%","padding","4%"],[1,"title",2,"font-size","50px","margin-top","4%"],[1,"subtitle","margin-top","ellipsis3"],[1,"subtitle",2,"font-weight","bold"],[1,"subtitle",2,"color","var(--medium)","font-weight","bold"],[1,"container-fluid","bannerBlog"],[1,"container",2,"margin-top","8%","margin-bottom","8%"],[1,"innhtml",3,"innerHTML"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"span",4)(5,"h3",5),t._uU(6),t.qZA()(),t.TgZ(7,"h1",6),t._uU(8),t.ALo(9,"titlecase"),t.qZA(),t.TgZ(10,"p",7),t._uU(11),t.qZA(),t.TgZ(12,"p")(13,"small",8),t._uU(14),t.ALo(15,"date"),t.qZA(),t._UZ(16,"br"),t.TgZ(17,"small",9),t._uU(18),t.ALo(19,"timeago"),t.qZA()()(),t._UZ(20,"div",2),t.qZA()(),t._UZ(21,"div",10),t.TgZ(22,"div",11)(23,"div",1),t._UZ(24,"div",2),t.TgZ(25,"div",3),t._UZ(26,"div",12),t.qZA(),t._UZ(27,"div",2),t.qZA()()),2&e&&(t.xp6(6),t.Oqu(i.blog.category),t.xp6(2),t.Oqu(t.lcZ(9,18,i.blog.title)),t.xp6(3),t.Oqu(i.blog.description),t.xp6(3),t.Oqu(t.xi3(15,20,i.blog.uploaded.toDate(),"medium")),t.xp6(4),t.Oqu(t.lcZ(19,23,i.blog.uploaded.toDate())),t.xp6(3),t.Udp("background","url("+i.blog.cover_image+")")("background-size","contain")("background-position","top")("background-repeat","no-repeat")("height","100vh")("width","100%"),t.xp6(5),t.Q6J("innerHTML",i.blog.htmlContent,t.oJD))},pipes:[r.rS,r.uU,Z.wr],styles:[""],encapsulation:2}),o})();var c=n(793);const s=function(o){return["/blog",o]};function p(o,a){if(1&o&&(t.TgZ(0,"div",35)(1,"article",36)(2,"div",37)(3,"a",38),t._UZ(4,"img",39),t.ALo(5,"sanitizeHtml"),t.qZA()(),t.TgZ(6,"div",40)(7,"h5",41)(8,"a",38),t._uU(9),t.qZA()(),t.TgZ(10,"p",42),t._uU(11),t.qZA(),t.TgZ(12,"div",43)(13,"a",44),t._uU(14,"Read More"),t.qZA(),t.TgZ(15,"div",45)(16,"p")(17,"small",46),t._uU(18),t.ALo(19,"date"),t.qZA()()()()()()()),2&o){const e=a.$implicit;t.xp6(3),t.Q6J("routerLink",t.VKq(12,s,e.id)),t.xp6(1),t.Q6J("src",t.lcZ(5,7,e.cover_image),t.LSH),t.xp6(4),t.Q6J("routerLink",t.VKq(14,s,e.id)),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.hij(" ",e.description," "),t.xp6(2),t.Q6J("routerLink",t.VKq(16,s,e.id)),t.xp6(5),t.Oqu(t.xi3(19,9,e.uploaded.toDate(),"medium"))}}const m=[{path:"",component:(()=>{class o{constructor(e){this.auth=e,this.blogs=[],this.loader=!0,e.getBlogs().subscribe(i=>{this.blogs=i})}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog"]],decls:147,vars:1,consts:[[1,"subheader","bg-cover","bg-center","dark-overlay",2,"background-image","url('https://via.placeholder.com/1920x1280')"],[1,"container"],[1,"subheader-inner"],[1,"text-white"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],[1,"fas","fa-home"],["aria-current","page",1,"breadcrumb-item","active"],[1,"section","posts"],[1,"row"],[1,"col-lg-8"],[1,"row","masonry"],["class","col-md-6 masonry-item",4,"ngFor","ngForOf"],[1,"pagination"],[1,"page-item"],["href","#",1,"page-link"],[1,"fas","fa-chevron-left"],[1,"page-item","active"],[1,"sr-only"],[1,"fas","fa-chevron-right"],[1,"col-lg-4"],[1,"sidebar"],[1,"sidebar-widget"],["method","post"],[1,"search-wrapper"],["type","text","placeholder","Search","name","sidebar-search","value","",1,"form-control"],["type","submit","name","button",1,"btn-custom"],[1,"flaticon-search"],[1,"media"],["src","https://via.placeholder.com/300","alt","post"],[1,"media-body"],[1,"sidebar-widget","sidebar-list"],[1,"sidebar-widget","tags"],[1,"col-md-6","masonry-item"],[1,"post"],[1,"post-thumbnail"],[3,"routerLink"],["alt","blog post",2,"height","160px","background-size","cover",3,"src"],[1,"post-body"],[1,"post-title"],[1,"post-text","ellipsis2"],[1,"post-controls"],[1,"btn-custom","secondary","btn-sm",3,"routerLink"],[1,"post-comment-authors"],[2,"font-size","10px"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Blog Grid"),t.qZA(),t.TgZ(5,"nav",4)(6,"ol",5)(7,"li",6)(8,"a",7),t._UZ(9,"i",8),t.qZA()(),t.TgZ(10,"li",6)(11,"a",7),t._uU(12,"Blog"),t.qZA()(),t.TgZ(13,"li",9),t._uU(14,"Blog Grid"),t.qZA()()()()()(),t.TgZ(15,"div",10)(16,"div",1)(17,"div",11)(18,"div",12)(19,"div",13),t.YNc(20,p,20,18,"div",14),t.qZA(),t.TgZ(21,"ul",15)(22,"li",16)(23,"a",17),t._UZ(24,"i",18),t.qZA()(),t.TgZ(25,"li",16)(26,"a",17),t._uU(27,"1"),t.qZA()(),t.TgZ(28,"li",19)(29,"a",17),t._uU(30,"2 "),t.TgZ(31,"span",20),t._uU(32,"(current)"),t.qZA()()(),t.TgZ(33,"li",16)(34,"a",17),t._uU(35,"3"),t.qZA()(),t.TgZ(36,"li",16)(37,"a",17),t._UZ(38,"i",21),t.qZA()()()(),t.TgZ(39,"div",22)(40,"div",23)(41,"div",24)(42,"form",25)(43,"h5"),t._uU(44,"Search Posts"),t.qZA(),t.TgZ(45,"div",26),t._UZ(46,"input",27),t.TgZ(47,"button",28),t._UZ(48,"i",29),t.qZA()()()(),t.TgZ(49,"div",24)(50,"h5"),t._uU(51,"Recent Posts"),t.qZA(),t.TgZ(52,"article",30)(53,"a",7),t._UZ(54,"img",31),t.qZA(),t.TgZ(55,"div",32)(56,"h6")(57,"a",7),t._uU(58,"Green neighborhood starts tomorrow"),t.qZA()(),t.TgZ(59,"span"),t._uU(60,"January 22, 2020"),t.qZA()()(),t.TgZ(61,"article",30)(62,"a",7),t._UZ(63,"img",31),t.qZA(),t.TgZ(64,"div",32)(65,"h6")(66,"a",7),t._uU(67,"How to enable better agents in an agency"),t.qZA()(),t.TgZ(68,"span"),t._uU(69,"January 24, 2020"),t.qZA()()(),t.TgZ(70,"article",30)(71,"a",7),t._UZ(72,"img",31),t.qZA(),t.TgZ(73,"div",32)(74,"h6")(75,"a",7),t._uU(76,"Real estate is booming in the west and east"),t.qZA()(),t.TgZ(77,"span"),t._uU(78,"January 26, 2020"),t.qZA()()(),t.TgZ(79,"article",30)(80,"a",7),t._UZ(81,"img",31),t.qZA(),t.TgZ(82,"div",32)(83,"h6")(84,"a",7),t._uU(85,"What agencies are looking for in an agent"),t.qZA()(),t.TgZ(86,"span"),t._uU(87,"January 28, 2020"),t.qZA()()()(),t.TgZ(88,"div",33)(89,"h5"),t._uU(90,"Popular Categories"),t.qZA(),t.TgZ(91,"ul")(92,"li")(93,"a",7),t._uU(94," Living Rooms "),t.TgZ(95,"span"),t._uU(96,"(24)"),t.qZA(),t._UZ(97,"i",21),t.qZA()(),t.TgZ(98,"li")(99,"a",7),t._uU(100," Real Estate "),t.TgZ(101,"span"),t._uU(102,"(16)"),t.qZA(),t._UZ(103,"i",21),t.qZA()(),t.TgZ(104,"li")(105,"a",7),t._uU(106," Kitchens "),t.TgZ(107,"span"),t._uU(108,"(32)"),t.qZA(),t._UZ(109,"i",21),t.qZA()(),t.TgZ(110,"li")(111,"a",7),t._uU(112," Flats "),t.TgZ(113,"span"),t._uU(114,"(22)"),t.qZA(),t._UZ(115,"i",21),t.qZA()(),t.TgZ(116,"li")(117,"a",7),t._uU(118," Luxury "),t.TgZ(119,"span"),t._uU(120,"(15)"),t.qZA(),t._UZ(121,"i",21),t.qZA()(),t.TgZ(122,"li")(123,"a",7),t._uU(124," Bed Rooms "),t.TgZ(125,"span"),t._uU(126,"(8)"),t.qZA(),t._UZ(127,"i",21),t.qZA()()()(),t.TgZ(128,"div",34)(129,"h5"),t._uU(130,"Popular Tags"),t.qZA(),t.TgZ(131,"a",7),t._uU(132,"House"),t.qZA(),t.TgZ(133,"a",7),t._uU(134,"Real Estate"),t.qZA(),t.TgZ(135,"a",7),t._uU(136,"Building"),t.qZA(),t.TgZ(137,"a",7),t._uU(138,"Agency"),t.qZA(),t.TgZ(139,"a",7),t._uU(140,"Family"),t.qZA(),t.TgZ(141,"a",7),t._uU(142,"Acres"),t.qZA(),t.TgZ(143,"a",7),t._uU(144,"Baths"),t.qZA(),t.TgZ(145,"a",7),t._uU(146,"Rooms"),t.qZA()()()()()()()),2&e&&(t.xp6(20),t.Q6J("ngForOf",i.blogs))},directives:[r.sg,l.yS],pipes:[c.A,r.uU],styles:[""]}),o})()},{path:":id",component:d}];let A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(m)],l.Bz]}),o})();var U=n(4466);let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,A,U.m]]}),o})()}}]);