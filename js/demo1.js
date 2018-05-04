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
            colNames : [ '数量', '出租车','方式', '原因','星期一', '时间', '价钱', '数量', '出租车','方式'],//jqGrid的列显示名字
            colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                {name : 'id',index : 'id',width : 100},
                {name : 'invdate',index : 'invdate',width : 90},
                {name : 'name',index : 'name asc, invdate',width : 100},
                {name : 'amount',index : 'amount',width : 80,align : "center"},
                {name : 'tax',index : 'tax',width : 80,align : "center"},
                {name : 'total',index : 'total',width : 80,align : "center"},
                {name : 'note',index : 'note',width : 150,sortable : false},
                {name : 'invdate',index : 'invdate',width : 90},
                {name : 'invdate',index : 'invdate',width : 90},
                {name : 'name',index : 'name asc, invdate',width : 100}



            ],
            rowNum : 10,//一页显示多少条
            rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
            pager : '#pager2',//表格页脚的占位符(一般是div)的id
            sortname : 'id',//初始化的时候排序的字段
            sortorder : "asc",//排序方式,可选desc,asc
            mtype : "post",//向后台请求数据的ajax的类型。可选post,get
            viewrecords : false,
            caption : "练习",//表格的标题名字
           // rownumbers:"false",
           // rownumWidth:"false",

            subGridWidth:"60",
            gridComplete:[function () {

                $(this).closest('.ui-jqgrid-view').find('div.ui-jqgrid-hdiv').hide()

            }]


        });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#list2 ").jqGrid('navGrid','#pcmtmpl',{edit:false,add:false,del:false});
   $("#list2").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });

    $(window).resize(function(){
        $("#list2").setGridWidth($(window).width())
    });

   /* $("#jqGridId").closest(".ui-jqgrid-bdiv").css({ 'overflow-y' : 'scroll' });*/

}

