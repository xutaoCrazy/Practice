$(function(){
    $("#newPatientContainer").on("keydown","input.NPKeyList",function(){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.stopPropagation) {
            // this code is for Mozilla and Opera
            e.stopPropagation();
        } else if (window.event) {
            // this code is for IE
            window.event.cancelBubble = true;
        }
        var nextFocus;
        if($(this).parents(".col-md-6").next(".col-md-6").find(".NPKeyList").length > 0){
            nextFocus = $(this).parents(".col-md-6").next(".col-md-6").find(".NPKeyList");
        }else if($(this).parents(".noBorder").next(".noBorder").find(".col-md-6").eq(0).find(".NPKeyList").length > 0){
            nextFocus = $(this).parents(".noBorder").next(".noBorder").find(".col-md-6").eq(0).find(".NPKeyList")
        }
        if(e && e.keyCode === 13 && $(this).is(":focus") == true && nextFocus != undefined){
            debugger;
            event.preventDefault();
            if(nextFocus[0].nodeName == "INPUT" || nextFocus[0].nodeName == "input"){
                $(this).blur();
                nextFocus.focus();
            }else if(nextFocus[0].nodeName == "SELECT" ||nextFocus[0].nodeName == "select"){
                $(this).blur();
                nextFocus.select2("open");
            }
        }
    })
    $("#newPatientContainer").on("select2:close","select.NPKeyList",function(){
        debugger;
        var nextFocus;
        if($(this).parents(".col-md-6").next(".col-md-6").find(".NPKeyList").length > 0){
            nextFocus = $(this).parents(".col-md-6").next(".col-md-6").find(".NPKeyList");
        }else if($(this).parents(".noBorder").next(".noBorder").find(".col-md-6").eq(0).find(".NPKeyList").length > 0){
            nextFocus = $(this).parents(".noBorder").next(".noBorder").find(".col-md-6").eq(0).find(".NPKeyList")
        }
        if(nextFocus != undefined){
            if(nextFocus[0].nodeName == "INPUT" || nextFocus[0].nodeName == "input"){
                nextFocus.focus();
            }else if(nextFocus[0].nodeName == "SELECT" || nextFocus[0].nodeName == "select"){
                nextFocus.select2("open");
            }
        }
    })
})
