var dhxLayout, dhxLayout1 ;
var dhxTreeView, dhxTreeViewOrg ;
var dhxToolbar, dhxToolbar0, dhxToolbar1, dhxToolbar2, dhxToolbarP ;
var dhxCombo;
var dhxWins, dhxWinsView, dhxWinsAuth, dhxWinsDoc, dhxWinsEva, dhxWinsObj, dhxWinsExcel, dhxWinsMbo, dhxWinsMboAble;
var dhxTabbar, dhxTabbarView ;
var dhxGrid1, dhxGrid2, dhxGrid3, dhxGrid4, dhxGridReply, dhxGridAuthY, dhxGridAuthN, dhxGridY, dhxGridN ;
var dhxGridMenu, dhxGridUser, dhxTreeGrid ;
var dhxList, dhxListReply, dhxListLog ;
var dhxTree, dhxTree1 ;
var dhxMenu, dhxMenuO, dhxMenuA ;
var dhxPop ;
var dhxTabbar, dhxTabbar1 ;
var dhxDataView ;
var dhxForm, dhxFormP ;


	//박진희테스트-레이아웃
	function DhxLayout_testLayout(){
		dhxLayout = new dhtmlXLayoutObject({
			parent: document.body,
			pattern: "2U",
			skin:"material",
			cells:[
				{id:"a", text : "Todo", collapsed_text:"", header: true,width: 810},
				{id:"b", text : "-", collapsed_text:"", header: true}
			]
		});		
		//Toolbar
		dhxLayout.attachToolbar({
			skin:"material",
			items: [
				{ id: "google", type: "button", text: "Google", img: "/IMAGES/ICO/Dhx/googlelogo.png", img_disabled: "" },
				{ type: "separator", id: "sep" },
				{ id: "naver", type: "button", text: "NAVER", img: "/IMAGES/ICO/Dhx/naverlogo.png", img_disabled: "" },
				{ type: "separator", id: "sep" }
			],
			onclick: function(id){
				switch(id){
					case "google" :
						  window.open("https://www.google.co.kr/");
					break;
					case "naver" : 
					      window.open("https://www.naver.com/");
					break;	

				}		
			}
		});	
		dhxLayout.cells("a").attachURL("/MODULE/BPS/Todo_List.html");

	}
    //박진희 투두 리스트 목록 Toolbar
	function DhxToolbarTodoListSet(){
		dhxToolbar = new dhtmlXToolbarObject({
			parent: "objToolbar",
			skin:"dhx_terrace"
		
		});
		dhxToolbar.setIconSize(34);
		dhxToolbar.addButton("Excel", 0, "Excel","/IMAGES/ICO/32/1092.png")
		dhxToolbar.addButton("Reg",1 , "추가", "/IMAGES/ICO/32/754.png", "")
		dhxToolbar.addSpacer("Reg");    
		dhxToolbar.addButton("Complete",2 , "완료", "/IMAGES/ICO/Check.png", "")
		dhxToolbar.addButton("Delete",3, "삭제", "/IMAGES/ICO/32/151.png", "")	
		dhxToolbar.addButton("Reload",4,"","/IMAGES/ICO/32/803.png","");
		dhxToolbar.attachEvent("onClick", function(id){
			switch(id){
				case "Excel" :
					dhxGrid.toExcel("https://dhtmlxgrid.appspot.com/export/excel");	
			    break;
				case "Reg" : 
					var nUrl = "/MODULE/BPS/Todo_Reg.html?Reg/";
					DhxBaseCreateWindowObj('dhxWin_RegRequest','TO DO',nUrl,10,10,700,350,true,true,'N','Y');
					break;
				case "Complete" :
					dhxGrid.forEachRow(function (id) {
						if (dhxGrid.cells(id,1).getValue() == 1){
							var nSeq_No = dhxGrid.cells(id, 0).getValue();
							Jq__AjaxTodoComplete(nSeq_No);
						}else{
							return
						}
					});	
          
       //조건에 맞는 변수를 문자열로 담고 싶을 때 
//         var n_CHK_USER_ID ="";
//         for(i = 1; i <= dhxGrid.getRowsNum(); i++){ 
//             if (dhxGrid.cells(i, 0).getValue() == 1){    
//                 n_CHK_USER_ID += dhxGrid.cells(i,1).getValue() + "|";                                           
//             }                                     
//         }  

				break;
				case "Delete" : 
				var chk = ""
					top.dhtmlx.confirm({
						title:"삭제",
						type:"confirm-error", 
						text: "삭제하시겠습니까?",
						ok: "확인",
						cancel: "취소",
						callback: 
						function(result) {
							if (result == true) {								
								for (i = 1; i <= dhxGrid.getRowsNum() ; i++) {
									if (dhxGrid.cells(i,1).getValue() == 1) {
										var nSeq_No = dhxGrid.cells(i, 0).getValue();					
									 	Jq_AjaxTodoDelete(nSeq_No);
									}
								}
								DhxGridTodoListLoad();
							}else {
								return;
							}
						}
					});
				break;
				case "Reload":
					location.reload();			 	
				break;
			}

		});
		/* 페이징 처리 ,,,?
		var nPages = $("#PAGE_SIZE").val();
		var nPage = $("#PAGE").val();
		var nPageCnt = $("#PAGE_CNT").val();
		var nTotal = $("#TOTAL_CNT").val();
		*/
	}
	//박진희 투두 리스트 목록  Grid 세팅
	function DhxGridTodoListSet(){
		dhxGrid = new dhtmlXGridObject('objGrid');
		dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
		dhxGrid.setHeader("Key,Chk,No,To do,Date",null, ["text-align:center;","text-align:center;","text-align:left;","text-align:center;"]);
		dhxGrid.setInitWidthsP("0,5,5,75,15");
		dhxGrid.setColAlign("center,center,center,left,center");
		dhxGrid.setColTypes("ro,ch,ro,ro,ro");
		dhxGrid.setColSorting("int,int,int,str,date");
		dhxGrid.enableRowsHover(true, "grid_hover");	
		dhxGrid.enableCollSpan(true);
		dhxGrid.enableHeaderMenu();
		dhxGrid.init();
		dhxGrid.setColLabel(1, "img:[/images/Ico/item_chk.gif]");
		$("img[src^='/images/Ico/item_chk.gif']").attr('id', 'ChkAll');  // 이미지에 아이디 속성을 추가하고 속성의 값은 ChkAll 이라는 뜻
		$('#ChkAll').click(function () {
			var checked = dhxGrid.getCheckedRows(0);
			(checked == "") ? dhxGrid.checkAll(true) : dhxGrid.checkAll(false);
		});
		
		dhxGrid.attachEvent("onRowDblClicked",function(id, idd){
			var nSeq_No = dhxGrid.cells(dhxGrid.getSelectedId(), 0).getValue();
			var nUrl = "/MODULE/BPS/Todo_Reg.html?Mod/" + nSeq_No +"";
            DhxBaseCreateWindowObj('dhxWin_ModRequestY','TO DO',nUrl,10,10,700,350,true,true,'N','Y');
			
		});	

		dhxGrid.i18n.paging={
			results:"Results",
			records:"Records from ",
			to:" to ",
			page:"Page ",
			perpage:"rows per page",
			first:"To first Page",
			previous:"Previous Page",
			found:"Found records",
			next:"Next Page",
			last:"To last Page",
			of:" of ",
			notfound:"No Records Found" 
	    };	
		dhxGrid.enablePaging(true,15,5,"objPaging",true);
		dhxGrid.setPagingSkin("bricks");
		
		DhxGridTodoListLoad();	
		
	}
	//박진희 투두 리스트 목록  Grid 로딩
	function DhxGridTodoListLoad(){
		var nPages = $("#PAGE_SIZE").val ();
		var nPage = $("#PAGE").val ();
		//var nUserId = $.cookie('ck_Cd_Emp');
		var loadUrl = "/MODULE/BPS/Todo_List.asp?PAGE_SIZE=" + nPages + "&PAGE=" + nPage + "";
		dhxGrid.clearAndLoad(loadUrl, function() {				

			});	


	}
	
	//박진희 투두 등록
	function DhxForTodoReg() {
		$("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
		$("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Reg" class="objhide" />');
		$("#Frm").append('<input type="text" name="SEQ_NO" id="SEQ_NO" value="0" class="objhide" />');

		var dhxToolbarSubmit = new dhtmlXToolbarObject({
			parent : "objToolbarSubmit",
			align:"right"
		});

		dhxToolbarSubmit.setIconSize(24);
		dhxToolbarSubmit.addButton("Submit",1, "<strong>등록</strong>","","");
		dhxToolbarSubmit.addButton ("Cancel", 2,"<strong>취소</strong>","","");
		dhxToolbarSubmit.attachEvent("onClick", function (id){
			if(id == "Submit"){
				Jq_TodoReg();
				parent.DhxBaseCloseWindowObj("dhxWin_RegRequest", "N");
				DhxGridTodoListLoad;
			}
			else{
				parent.DhxBaseCloseWindowObj("dhxWin_RegRequest", "Y");
			}
			
		});
	}

	//TODO 수정
	function DhxForTodoMod(nSeq_No){
		$("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
		$("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Mod" class="objhide" />');
		$("#Frm").append('<input type="text" name="SEQ_NO" id="SEQ_NO" value="' + nSeq_No + '" class="objhide" />');


		var dhxToolbarSubmit = new dhtmlXToolbarObject({
			parent : "objToolbarSubmit",
			align:"right"
		});

		dhxToolbarSubmit.setIconSize(24);
		dhxToolbarSubmit.addButton("Submit",1, "<strong>등록</strong>","","");
		dhxToolbarSubmit.addButton ("Cancel", 2,"<strong>취소</strong>","","");
		dhxToolbarSubmit.attachEvent("onClick", function (id){
			if(id == "Submit"){
				Jq_TodoReg();				
				parent.DhxBaseCloseWindowObj("dhxWin_ModRequest", "N");
			}
			else{
				parent.DhxBaseCloseWindowObj("dhxWin_ModRequest", "Y");
			}
			
		});
		
	}
// 박진희 편집
