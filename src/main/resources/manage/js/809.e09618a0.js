"use strict";(self["webpackChunkvue3_nb0"]=self["webpackChunkvue3_nb0"]||[]).push([[809],{42809:(e,n,i)=>{i.r(n),i.d(n,{default:()=>U});i(59532),i(14580),i(39120);var t=i(44401),u=i(28849),a=i(71066),c=i(94899),s={class:"home_view"},l={class:"projectTitle"},o={class:"count_list"},r={class:"index_card_head"},d=(0,t._)("div",{class:"card_head_title"}," 成绩信息 ",-1),h={class:"card_head_right"},x={class:"count_item"},_=(0,t._)("div",{class:"count_title"},"成绩信息总数",-1),f={class:"count_num"},p={class:"index_card_head"},v=(0,t._)("div",{class:"card_head_title"}," 学习趋势 ",-1),w={class:"card_head_right"},y={class:"count_item"},g=(0,t._)("div",{class:"count_title"},"学习趋势总数",-1),m={class:"count_num"},C={class:"card_list"},j={class:"index_card_head"},T=(0,t._)("div",{class:"card_head_title"}," 成绩信息 ",-1),q={class:"card_head_right"},W={class:"card_item"},k=(0,t._)("div",{id:"chengjixinxifenshuEchart1",style:{width:"100%",height:"400px"}},null,-1),F=[k],I={class:"index_card_head"},b=(0,t._)("div",{class:"card_head_title"}," 学习趋势 ",-1),A={class:"card_head_right"},E={class:"card_item"},$=(0,t._)("div",{id:"xuexiqushipingjunfenEchart1",style:{width:"100%",height:"400px"}},null,-1),z=[$];const H={__name:"HomeView",setup:function(e){var n,i=null===(n=(0,t.FN)())||void 0===n?void 0:n.appContext.config.globalProperties,k=i.$project.projectName,$=(0,a.iH)({}),H=function(){$.value.closechengjixinxiCountType=!0,$.value.hiddenchengjixinxiCountType=!0,D("chengjixinxi","首页总数")&&U(),$.value.closexuexiqushiCountType=!0,$.value.hiddenxuexiqushiCountType=!0,D("xuexiqushi","首页总数")&&O()},B=(0,a.iH)(0),U=function(){null===i||void 0===i||i.$http({url:"chengjixinxi/count",method:"get"}).then((function(e){B.value=e.data.data}))},N=(0,a.iH)(0),O=function(){null===i||void 0===i||i.$http({url:"xuexiqushi/count",method:"get"}).then((function(e){N.value=e.data.data}))},S=function(e){$.value[e]=!$.value[e]},Y=function(){H(),V()},D=function(e,n){return null===i||void 0===i?void 0:i.$toolUtil.isAuth(e,n)},G=(0,t.f3)("echarts"),L=function(e){P.value[e]=!P.value[e],setTimeout((function(){V()}),1e3)},P=(0,a.iH)({closechengjixinxiChartType1:!0,hiddenchengjixinxiChartType1:!0,closexuexiqushiChartType1:!0,hiddenxuexiqushiChartType1:!0}),V=function(){D("chengjixinxi","首页统计")&&J(),D("xuexiqushi","首页统计")&&K()},J=function(){(0,t.Y3)((function(){var e=G.init(document.getElementById("chengjixinxifenshuEchart1"),"macarons");null===i||void 0===i||i.$http({url:"chengjixinxi/sectionStat/fenshu/kaoshimingcheng",method:"get"}).then((function(n){for(var i=n.data.data,t=[],u=[],a=[],c=[],s=[],l=[],o=0;o<i.length;o++)t.push(i[o].kaoshimingcheng),u.push(parseFloat(i[o].不及格)),a.push(parseFloat(i[o].及格)),c.push(parseFloat(i[o].良)),s.push(parseFloat(i[o].优秀)),l.push({name:i[o].fenshu});var r={};r={title:{text:"成绩统计",left:"center"},legend:{data:["不及格","及格","良","优秀"],left:"center",bottom:10},tooltip:{trigger:"axis"},xAxis:{type:"category",data:t,axisLabel:{rotate:40}},yAxis:{type:"value"},series:[{name:"不及格",data:u,type:"bar"},{name:"及格",data:a,type:"bar"},{name:"良",data:c,type:"bar"},{name:"优秀",data:s,type:"bar"}]},e.clear(),e.setOption(r),e.resize()}))}))},K=function(){(0,t.Y3)((function(){var e=G.init(document.getElementById("xuexiqushipingjunfenEchart1"),"macarons");null===i||void 0===i||i.$http({url:"xuexiqushi/value/xuenianxueqi/pingjunfen",method:"get"}).then((function(n){for(var i=n.data.data,t=[],u=[],a=[],c=0;c<i.length;c++)t.push(i[c].xuenianxueqi),u.push(parseFloat(i[c].total)),a.push({value:parseFloat(i[c].total),name:i[c].xuenianxueqi});var s={};s={title:{text:"平均分趋势",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{type:"category",boundaryGap:!1,data:t},yAxis:{type:"value"},series:[{data:u,type:"line"}]},e.clear(),e.setOption(s),e.resize()}))}))};return Y(),function(e,n){var i=(0,t.up)("ArrowUpBold"),H=(0,t.up)("el-icon"),U=(0,t.up)("CloseBold"),O=(0,t.up)("el-collapse-transition"),Y=(0,t.up)("el-card");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",l,"欢迎使用 "+(0,u.zw)((0,a.SU)(k)),1),(0,t._)("div",o,[D("chengjixinxi","首页总数")?((0,t.wg)(),(0,t.j4)(O,{key:0},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(Y,{class:"card_view"},{header:(0,t.w5)((function(){return[(0,t._)("div",r,[d,(0,t._)("div",h,[(0,t.Wm)(H,{onClick:n[0]||(n[0]=function(e){return S("hiddenchengjixinxiCountType")}),class:(0,u.C_)(["showIcons",$.value.hiddenchengjixinxiCountType?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(i)]})),_:1},8,["class"]),(0,t.Wm)(H,{onClick:n[1]||(n[1]=function(e){return S("closechengjixinxiCountType")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(U)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(O,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",x,[_,(0,t._)("div",f,(0,u.zw)(B.value),1)],512),[[c.F8,$.value.hiddenchengjixinxiCountType]])]})),_:1})]})),_:1},512),[[c.F8,$.value.closechengjixinxiCountType]])]})),_:1})):(0,t.kq)("",!0),D("xuexiqushi","首页总数")?((0,t.wg)(),(0,t.j4)(O,{key:1},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(Y,{class:"card_view"},{header:(0,t.w5)((function(){return[(0,t._)("div",p,[v,(0,t._)("div",w,[(0,t.Wm)(H,{onClick:n[2]||(n[2]=function(e){return S("hiddenxuexiqushiCountType")}),class:(0,u.C_)(["showIcons",$.value.hiddenxuexiqushiCountType?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(i)]})),_:1},8,["class"]),(0,t.Wm)(H,{onClick:n[3]||(n[3]=function(e){return S("closexuexiqushiCountType")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(U)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(O,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",y,[g,(0,t._)("div",m,(0,u.zw)(N.value),1)],512),[[c.F8,$.value.hiddenxuexiqushiCountType]])]})),_:1})]})),_:1},512),[[c.F8,$.value.closexuexiqushiCountType]])]})),_:1})):(0,t.kq)("",!0)]),(0,t._)("div",C,[D("chengjixinxi","首页统计")?((0,t.wg)(),(0,t.j4)(O,{key:0},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(Y,{class:"card_view"},{header:(0,t.w5)((function(){return[(0,t._)("div",j,[T,(0,t._)("div",q,[(0,t.Wm)(H,{onClick:n[4]||(n[4]=function(e){return L("hiddenchengjixinxiChartType1")}),class:(0,u.C_)(["showIcons",P.value.hiddenchengjixinxiChartType1?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(i)]})),_:1},8,["class"]),(0,t.Wm)(H,{onClick:n[5]||(n[5]=function(e){return L("closechengjixinxiChartType1")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(U)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(O,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",W,F,512),[[c.F8,P.value.hiddenchengjixinxiChartType1]])]})),_:1})]})),_:1},512),[[c.F8,P.value.closechengjixinxiChartType1]])]})),_:1})):(0,t.kq)("",!0),D("xuexiqushi","首页统计")?((0,t.wg)(),(0,t.j4)(O,{key:1},{default:(0,t.w5)((function(){return[(0,t.wy)((0,t.Wm)(Y,{class:"card_view"},{header:(0,t.w5)((function(){return[(0,t._)("div",I,[b,(0,t._)("div",A,[(0,t.Wm)(H,{onClick:n[6]||(n[6]=function(e){return L("hiddenxuexiqushiChartType1")}),class:(0,u.C_)(["showIcons",P.value.hiddenxuexiqushiChartType1?"showIcons1":""])},{default:(0,t.w5)((function(){return[(0,t.Wm)(i)]})),_:1},8,["class"]),(0,t.Wm)(H,{onClick:n[7]||(n[7]=function(e){return L("closexuexiqushiChartType1")}),class:"closeIcons"},{default:(0,t.w5)((function(){return[(0,t.Wm)(U)]})),_:1})])])]})),default:(0,t.w5)((function(){return[(0,t.Wm)(O,null,{default:(0,t.w5)((function(){return[(0,t.wy)((0,t._)("div",E,z,512),[[c.F8,P.value.hiddenxuexiqushiChartType1]])]})),_:1})]})),_:1},512),[[c.F8,P.value.closexuexiqushiChartType1]])]})),_:1})):(0,t.kq)("",!0)])])}}},B=H,U=B}}]);
//# sourceMappingURL=809.e09618a0.js.map