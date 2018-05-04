$(function(){
	//页面加载完成之后执行
	pageInit();
});
function pageInit(){
	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				url : 'data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ '星期一', '时间', '价钱', '数量', '出租车','方式', '原因' ,'星期一', '时间', '价钱', '数量', '出租车','方式', '原因', '时间', '价钱', '数量', '出租车' ],//jqGrid的列显示名字
				colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'id',index : 'id',width : 400},
				             {name : 'invdate',index : 'invdate',width : 400},
				             {name : 'name',index : 'name asc, invdate',width : 400},
				             {name : 'amount',index : 'amount',width : 400,align : "center"},
				             {name : 'tax',index : 'tax',width : 400,align : "center"},
				             {name : 'total',index : 'total',width :400,align : "center"},
				             {name : 'note',index : 'note',width :250,sortable : false},
							 {name : 'id',index : 'id',width : 255},
							 {name : 'invdate',index : 'invdate',width : 390},
							 {name : 'name',index : 'name asc, invdate',width :210},
							 {name : 'amount',index : 'amount',width :280,align : "center"},
							 {name : 'tax',index : 'tax',width : 180,align : "center"},
							 {name : 'total',index : 'total',width : 280,align : "center"},
							 {name : 'note',index : 'note',width : 400,sortable : false},
					         {name : 'tax',index : 'tax',width : 180,align : "center"},
					         {name : 'total',index : 'total',width : 380,align : "center"},
					          {name : 'note',index : 'note',width : 450,sortable : false},
					          {name : 'note',index : 'note',width : 350,sortable : false}
				],
				rowNum : 20,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				sortname : 'id',//初始化的时候排序的字段
				sortorder : "desc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				caption : "练习",//表格的标题名字
				rownumbers:"true",
				rownumWidth:"true",
				autowidth:true,
				width:window.screen.availWidth,
				subGridWidth:"60"


			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2 ").jqGrid('navGrid','#pcmtmpl',{edit:false,add:false,del:false});
	//$("#list2").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });
	//$("#jqGridId").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });

}



/*jQuery.extend(jQuery.jgrid.defaults,
	{
		altRows:true,
		altclass:'ui-jqgrid-rowbackgroundColor',

		rownumbers:true,
		autowidth:true,
		height:'auto',
		//shrinkToFit:false,
		gridComplete: function() {
		}
	});
var ctx = '${ctx}';
var reqUrl = '${requestURI}';*/
