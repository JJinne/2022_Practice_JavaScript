
//박진희 편집 
//Todo 등록
function Jq_TodoReg(){
	var n_FLAG 	  = $("#FLAG").val();
	var n_SEQ_NO  =$("#SEQ_NO").val();
	var n_CONTENTS = $("#CONTENTS").val();

	var AjaxUrl = "/BPS/Todo_Reg.asp"

	$.ajax({
		type: "POST",
		url:AjaxUrl,
		async:false,
		data:'FLAG=' + n_FLAG 
			+'&SEQ_NO=' + n_SEQ_NO
		    +'&CONTENTS=' + n_CONTENTS
		,
		success: 
			function(ReqData){

			},
		error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
	});
}
//Todo 수정 
function Jq_AjaxTodoModGetView(nSeq_No){

	var AjaxUrl = "/BPS/Todo_ModGetView.asp";
    $.ajax({
        type: 'POST',
        url: AjaxUrl,
        async: false,
        data: 'SEQ_NO=' + nSeq_No,
        success: // 성공
            function (ReqData) {
                Jq_AjaxTodoModBind(ReqData);
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
}
//Todo 수정 데이터 바인딩
function Jq_AjaxTodoModBind(ReqData){
	var nCol = ReqData.split("</>");
	var s_SEQ_NO = nCol[0];
	var s_CONTENTS = nCol[1];

	$("#SEQ_NO").val(s_SEQ_NO);
	$("#CONTENTS").val(s_CONTENTS);

}
//Todo 완료 체크
function Jq__AjaxTodoComplete(nSeq_No){
	var AjaxUrl = "/BPS/Todo_Complete.asp"
	
	$.ajax({
		type: "POST",
		url: AjaxUrl,
		async: false,
		data:'SEQ_NO='+ nSeq_No,
		success:
		function (ReqData){	
		},error:
		function (request, status, error) {
			alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
		}	
	});
}
//Todo 삭제
function Jq_AjaxTodoDelete(nSeq_No){
	var AjaxUrl = "/BPS/Todo_Delete.asp";
	$.ajax({
		type: "POST",
		url: AjaxUrl,
		async:false,
		data: 'SEQ_NO=' + nSeq_No,
		success:
			function(ReqData){

			},
		error: 
			function (request, status, error) {
				alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
			}
	});
}
