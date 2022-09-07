function Jq_PcMstRegValidity() {
    var nPC_USE = dhxToolbar1.getListOptionSelected("Status");  // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
    var nCD_TYPE = dhxCombo_Type.getSelectedValue();            // 구분
    var nSTR_MAKER = $("#STR_MAKER").val();                     // 제조사
    var nDATE_BUY = $("#DATE_BUY").val();                       // 구입일
    var nNO_MODEL = $("#NO_MODEL").val();                       // 모델명
    var nDIV = dhxCombo_Div.getSelectedValue();                 // 용도
    var nCombo_Charge = dhxCombo_Charge.getSelectedValue();     // 관리책임자
    var nUSER = dhxCombo_User.getSelectedValue();               // 사용자
    var nORG = dhxCombo_Org.getSelectedValue();                 // 사용부서
    var nUSE = $("#STR_USE").val();                             // 사용목적
        
    if (nCD_TYPE == "" || nSTR_MAKER == "" || nDATE_BUY == "" || nNO_MODEL == "") {
        DhxMessageObj('필수 항목을 입력해 주세요.', '');
        return false;
    } else if (nCombo_Charge == "") {
        DhxMessageObj('관리책임자를 선택하세요.', '');
        return false;
    }
    else {
        if (nPC_USE == "Y") {
            if (nDIV == "") {
                DhxMessageObj('용도를 선택하세요.', '');
                return false;
            }
            if (nDIV != "") {
                if (nDIV == "개인업무") {
                    if (nUSER == "") {
                        DhxMessageObj('사용자를 선택하세요.', '');
                        return false;
                    }
                }
                else {
                    if (nUSE == "" || nORG == "") {
                        DhxMessageObj('사용부서 및 사용목적을 입력하세요.', '#STR_USE');
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

function Jq_PcMstRegSubmit() {    
    var uploadID = "dext5upload";
    var newFile = DEXT5UPLOAD.GetNewUploadListForJson(uploadID);
    var delFile = DEXT5UPLOAD.GetDeleteListForJson(uploadID);
    (newFile != null || delFile != null) ? fn_transfer() : Jq_PcMstRegSave();
}

function Jq_PcMstRegSave() {
    var nFLAG = $('#CD_FLAG').val();                                    // 저장구분(REG:추가, UPDATE:수정)
    var nCD_PC = $('#CD_PC').val();
    var nCD_MST = $("#CD_MST").val();
    var nPC_USE = dhxToolbar1.getListOptionSelected("Status");          // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
    var nCD_TYPE = dhxCombo_Type.getSelectedValue();                    // 구분
    var nDATE_BUY = $("#DATE_BUY").val();                               // 구입일
    var nSTR_MAKER = $("#STR_MAKER").val();                             // 제조사
    var nNO_MODEL = $("#NO_MODEL").val();                               // 모델명
    var nCPU = $("#CPU").val();                                         // CPU
    var nMEMORY = $("#MEMORY").val();                                   // MEMORY
    var nMEMORY_SIZE = $("#MEMORY_SIZE").val();                         // MEMORY_SIZE
    var nSSD = $("#SSD").val();                                         // SSD
    var nSSD_SIZE = $("#SSD_SIZE").val();                               // SSD_SIZE
    var nHDD = $("#HDD").val();                                         // HDD
    var nHDD_SIZE = $("#HDD_SIZE").val();                               // HDD_SIZE
    var nVGA = $("#VGA").val();                                         // VGA
    var nMONITOR_CNT = $("#MONITOR_CNT").val();                          // 모니터 사용 수량

    var nDIV = dhxCombo_Div.getSelectedValue();                         // 용도
    var nDATE_SET = $("#DATE_SET").val();                               // 취득일
    var nCHARGE = dhxCombo_Charge.getSelectedValue();                   // 관리책임자
    var nUSER = dhxCombo_User.getSelectedValue();                       // 사용자
    var nORG = dhxCombo_Org.getSelectedValue();                         // 사용부서
    var nUSE = $("#STR_USE").val();                                     // 사용목적
    var nPOSITION = $("#STR_POSITION").val().replace(/\n/g, "<br/>");   // 위치
    var nNOTE = $("#STR_NOTE").val().replace(/\n/g, "<br/>");           // 비고

    var nLog = $("#STR_LOG").val().replace(/\n/g, "<br/>");             // 로그정보

    var uploadID = "dext5upload";
    var newFile = $("#NEW_FILELIST").val();    
    var delFile = $("#DEL_FILELIST").val();

    if (nMONITOR_CNT == "") {
        nMONITOR_CNT = 0;
    }

    var AjaxUrl = "/MODULE/ITMS/DATA/AjaxPcMstRegProc.asp";
    $.ajax({
        type: 'POST',
        url: AjaxUrl,
        async: false,
        data: 'CD_FLAG=' + nFLAG
            + '&CD_PC=' + nCD_PC
            + '&CD_MST=' + nCD_MST
            + '&PC_USE=' + nPC_USE
            + '&CD_TYPE=' + encodeURIComponent(nCD_TYPE)
            + '&DATE_BUY=' + encodeURIComponent(nDATE_BUY)
            + '&STR_MAKER=' + encodeURIComponent(nSTR_MAKER)
            + '&NO_MODEL=' + encodeURIComponent(nNO_MODEL)
            + '&CPU=' + encodeURIComponent(nCPU)
            + '&MEMORY=' + encodeURIComponent(nMEMORY)
            + '&MEMORY_SIZE=' + encodeURIComponent(nMEMORY_SIZE)
            + '&SSD=' + encodeURIComponent(nSSD)
            + '&SSD_SIZE=' + encodeURIComponent(nSSD_SIZE)
            + '&HDD=' + encodeURIComponent(nHDD)
            + '&HDD_SIZE=' + encodeURIComponent(nHDD_SIZE)
            + '&VGA=' + encodeURIComponent(nVGA)
            + '&MONITOR_CNT=' + encodeURIComponent(nMONITOR_CNT)
            + '&CD_DIV=' + encodeURIComponent(nDIV)
            + '&DATE_SET=' + encodeURIComponent(nDATE_SET)
            + '&ID_CHARGE=' + encodeURIComponent(nCHARGE)
            + '&USE_ID=' + encodeURIComponent(nUSER)
            + '&USE_ORG=' + encodeURIComponent(nORG)
            + '&USE_STR=' + encodeURIComponent(nUSE)
            + '&POSITION=' + encodeURIComponent(nPOSITION)
            + '&STR_NOTE=' + encodeURIComponent(nNOTE)
            + '&STR_LOG=' + encodeURIComponent(nLog)
            + '&NEW_FILE=' + encodeURIComponent(newFile)
            + '&DEL_FILE=' + encodeURIComponent(delFile)
            + '&REG_USER=' + $.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                if (ReqData == "0") {
                    console.log(ReqData);
                    dhtmlx.alert({
                        title: "완료", type: "alert", text: "처리가 완료 되었습니다.",
                        callback:
                            function (result) {
                                setTimeout(function () {
                                    parent.dhxTree.selectItem("M050202", true);
                                    parent.DhxBaseCloseWindowObj('DhxWinPcMstReg', 'N');
                                }, 100);
                            }
                    });
                }
                else {
                    console.log(ReqData);
                    DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                }
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
}

	function Ajax_PcMstView(nCD){
		var nReturn;
		var AjaxUrl = "/MODULE/ITMS/DATA/AjaxPcMstView.asp";
		$.ajax({
			type: 'POST',
			url: AjaxUrl,
			async: false,
			data: 'CD_PC='+encodeURIComponent(nCD)+'',
			success: // 성공
				function (ReqData) {
					nReturn = ReqData;
				},
			error:
				function (request, status, error) {
					alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
				}
		});
		return nReturn;
	}

    function Jq_PcMstViewSet(nCD) {
		var ReqData				= Ajax_PcMstView(nCD);
        var nCol = ReqData.split("<,>");

        var s_SEQ_NO = nCol[0];
        var s_CD_PC = nCol[1];
        var s_CD_MST = nCol[2];
        var s_PC_USE = nCol[3];
        var s_CD_TYPE = nCol[4];
        var s_DATE_BUY = nCol[5];
        var s_STR_MAKER = nCol[6];
        var s_NO_MODEL = nCol[7];
        var s_CPU = nCol[8];
        var s_MEMORY = nCol[9];
        var s_MEMORY_SIZE = nCol[10];
        var s_SSD = nCol[11];
        var s_SSD_SIZE = nCol[12];
        var s_HDD = nCol[13];
        var s_HDD_SIZE = nCol[14];
        var s_VGA = nCol[15];
        var s_MONITOR_CNT = nCol[16];
        var s_CD_DIV = nCol[17];
        var s_DATE_SET = nCol[18];
        var s_ID_CHARGE = nCol[19];
        var s_USE_ID = nCol[20];
        var s_USE_ORG = nCol[21];
        var s_USE_STR = nCol[22];
        var s_POSITION = nCol[23];
        var s_STR_NOTE = nCol[24];
        var s_STR_LOG = nCol[25];

        var nNOTE = s_STR_NOTE.replace(/<br\/>/g, "\n");
        var nLOG = s_STR_LOG.replace(/<br\/>/g, "\n");
        var nPOISTION = s_POSITION.replace(/<br\/>/g, "\n");
        
        if (s_CD_MST != "") {
            $("#CD_MST").val(s_CD_MST);
        } else {
            $("#CD_MST").val(Math.uuid());            
        }
        $("#CD_PC").val(s_CD_PC);
        dhxToolbar2.setItemText("CD_PC", s_CD_PC);                                  // 메인 - 관리번호        
        dhxToolbar2.setListOptionSelected("Status", s_PC_USE);                      // 메인 - 사용여부(Y:사용, N:미사용, D:폐기)                
        dhxCombo_Type.setComboValue(s_CD_TYPE);                                     // 기본정보 - 구분
        $("#DATE_BUY").val(s_DATE_BUY);                                             // 기본정보 - 구입일
        $("#STR_MAKER").val(s_STR_MAKER);                                           // 기본정보 - 제조사
        $("#NO_MODEL").val(s_NO_MODEL);                                             // 기본정보 - 모델명
        $("#CPU").val(s_CPU);                                                       // 기본정보 - CPU
        $("#MEMORY").val(s_MEMORY);                                                 // 기본정보 - MEMORY
        $("#MEMORY_SIZE").val(s_MEMORY_SIZE);                                       // 기본정보 - MEMORY_SIZE
        $("#SSD").val(s_SSD);                                                       // 기본정보 - SSD
        $("#SSD_SIZE").val(s_SSD_SIZE);                                             // 기본정보 - SSD_SIZE
        $("#HDD").val(s_HDD);                                                       // 기본정보 - HDD
        $("#HDD_SIZE").val(s_HDD_SIZE);                                             // 기본정보 - HDD_SIZE
        $("#VGA").val(s_VGA);                                                       // 기본정보 - VGA
        $("#MONITOR_CNT").val(s_MONITOR_CNT);                                       // 기본정보 - 모니터 수량

        (s_CD_DIV != "") ? dhxCombo_Div.setComboValue(s_CD_DIV) : '';               // 사용정보 - 용도
        $("#DATE_SET").val(s_DATE_SET);                                             // 사용정보 - 취득일
        (s_ID_CHARGE != "") ? dhxCombo_Charge.setComboValue(s_ID_CHARGE) : '';      // 사용정보 - 관리책임자
        (s_USE_ID != "") ? dhxCombo_User.setComboValue(s_USE_ID) : '';              // 사용정보 - 사용자
        (s_USE_ORG != "") ? dhxCombo_Org.setComboValue(s_USE_ORG) : '';             // 사용정보 - 부서
        $("#STR_USE").val(s_USE_STR);                                               // 사용정보 - 사용목적
        $("#STR_POSITION").val(s_POSITION);                                         // 사용정보 - 위치
        $("#STR_NOTE").val(nNOTE);                                                  // 사용정보 - 비고
        
        $("#STR_LOG").val(nLOG);                                                    // 로그정보

	}

// PC 목록 View 저장
function Jq_PcMstRegModifyValidity() {
    var nPC_USE = dhxToolbar2.getListOptionSelected("Status");  // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
    var nCD_TYPE = dhxCombo_Type.getSelectedValue();            // 구분
    var nSTR_MAKER = $("#STR_MAKER").val();                     // 제조사
    var nDATE_BUY = $("#DATE_BUY").val();                       // 구입일
    var nNO_MODEL = $("#NO_MODEL").val();                       // 모델명
    var nDIV = dhxCombo_Div.getSelectedValue();                 // 용도
    var nCombo_Charge = dhxCombo_Charge.getSelectedValue();     // 관리책임자
    var nUSER = dhxCombo_User.getSelectedValue();               // 사용자
    var nORG = dhxCombo_Org.getSelectedValue();                 // 사용부서
    var nUSE = $("#STR_USE").val();                             // 사용목적

    var nMain_Date = $("#DATE_MAIN").val();                 // 정비이력 - 정비일
    var nMain_User = dhxCombo_Main_User.getSelectedValue(); // 정비이력 - 담당자
    var nMain_Type = dhxCombo_Main_Type.getSelectedValue(); // 정비이력 - 구분
    var nMain_Desc = $("#Str_Main_Desc").val().replace(/\n/g, "<br/>");;              // 정비이력 - 설명

    if (nCD_TYPE == "" || nSTR_MAKER == "" || nDATE_BUY == "" || nNO_MODEL == "") {
        DhxMessageObj('필수 항목을 입력해 주세요.', '');
        return false;
    } else if (nCombo_Charge == "") {
        DhxMessageObj('관리책임자를 선택하세요.', '');
        return false;
    }
    else {
        if (nPC_USE == "Y") {
            if (nDIV == "") {
                DhxMessageObj('용도를 선택하세요.', '');
                return false;
            }
            if (nDIV != "") {
                if (nDIV == "개인업무") {
                    if (nUSER == "") {
                        DhxMessageObj('사용자를 선택하세요.', '');
                        return false;
                    }
                }
                else {
                    if (nUSE == "" || nORG == "") {
                        DhxMessageObj('사용부서 및 사용목적을 입력하세요.', '#STR_USE');
                        return false;
                    }
                }
            }
        }
    }

    if (nMain_Date != "") {
        if (nMain_User == "" || nMain_Type == "" || nMain_Desc == "") {
            DhxMessageObj('정비 내역을 입력해 주세요.', '');
            return false;
        }
    }
    if (nMain_Type != "") {
        if (nMain_User == "" || nMain_Date == "" || nMain_Desc == "") {
            DhxMessageObj('정비 내역을 입력해 주세요.', '');
            return false;
        }
    }
    if (nMain_Desc != "") {
        if (nMain_User == "" || nMain_Type == "" || nMain_User == "") {
            DhxMessageObj('정비 내역을 입력해 주세요.', '');
            return false;
        }
    }

    return true;
}
function Jq_PcMstRegModify() {
    var uploadID = "dext5upload";
    var newFile = DEXT5UPLOAD.GetNewUploadListForJson(uploadID);
    var delFile = DEXT5UPLOAD.GetDeleteListForJson(uploadID);
    (newFile != null || delFile != null) ? fn_transfer() : Jq_PcMstModifySave();
}

    function Jq_PcMstModifySave() {
        var nFLAG = $('#CD_FLAG').val();                                    // 저장구분(REG:추가, UPDATE:수정)
        var nCD_PC = $('#CD_PC').val();
        var nCD_MST = $("#CD_MST").val();
        var nPC_USE = dhxToolbar2.getListOptionSelected("Status");          // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
        var nCD_TYPE = dhxCombo_Type.getSelectedValue();                    // 구분
        var nDATE_BUY = $("#DATE_BUY").val();                               // 구입일
        var nSTR_MAKER = $("#STR_MAKER").val();                             // 제조사
        var nNO_MODEL = $("#NO_MODEL").val();                               // 모델명
        var nCPU = $("#CPU").val();                                         // CPU
        var nMEMORY = $("#MEMORY").val();                                   // MEMORY
        var nMEMORY_SIZE = $("#MEMORY_SIZE").val();                         // MEMORY_SIZE
        var nSSD = $("#SSD").val();                                         // SSD
        var nSSD_SIZE = $("#SSD_SIZE").val();                               // SSD_SIZE
        var nHDD = $("#HDD").val();                                         // HDD
        var nHDD_SIZE = $("#HDD_SIZE").val();                               // HDD_SIZE
        var nVGA = $("#VGA").val();                                         // VGA
        var nMONITOR_CNT = $("#MONITOR_CNT").val();                          // 모니터 사용 수량
        var newFile = $("#NEW_FILELIST").val();
        var delFile = $("#DEL_FILELIST").val();         

        var nDIV = dhxCombo_Div.getSelectedValue();                         // 용도
        var nDATE_SET = $("#DATE_SET").val();                               // 취득일
        var nCHARGE = dhxCombo_Charge.getSelectedValue();                   // 관리책임자
        var nUSER = dhxCombo_User.getSelectedValue();                       // 사용자
        var nORG = dhxCombo_Org.getSelectedValue();                         // 사용부서
        var nUSE = $("#STR_USE").val();                                     // 사용목적
        var nPOSITION = $("#STR_POSITION").val().replace(/\n/g, "<br/>");   // 위치
        var nNOTE = $("#STR_NOTE").val().replace(/\n/g, "<br/>");           // 비고
        var nLog = $("#STR_LOG").val().replace(/\n/g, "<br/>");             // 로그정보

        var nMain_Date = $("#DATE_MAIN").val();                             // 정비이력 - 정비일
        var nMain_User = dhxCombo_Main_User.getSelectedValue();             // 정비이력 - 담당자
        var nMain_Type = dhxCombo_Main_Type.getSelectedValue();             // 정비이력 - 구분
        var nMain_Desc = $("#Str_Main_Desc").val().replace(/\n/g, "<br/>"); // 정비이력 - 설명
        if (nMONITOR_CNT == "") {
            nMONITOR_CNT = 0;
        }

        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxPcMstRegProc.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_FLAG=' + nFLAG
                + '&CD_PC=' + nCD_PC
                + '&CD_MST=' + nCD_MST
                + '&PC_USE=' + nPC_USE
                + '&CD_TYPE=' + encodeURIComponent(nCD_TYPE)
                + '&DATE_BUY=' + encodeURIComponent(nDATE_BUY)
                + '&STR_MAKER=' + encodeURIComponent(nSTR_MAKER)
                + '&NO_MODEL=' + encodeURIComponent(nNO_MODEL)
                + '&CPU=' + encodeURIComponent(nCPU)
                + '&MEMORY=' + encodeURIComponent(nMEMORY)
                + '&MEMORY_SIZE=' + encodeURIComponent(nMEMORY_SIZE)
                + '&SSD=' + encodeURIComponent(nSSD)
                + '&SSD_SIZE=' + encodeURIComponent(nSSD_SIZE)
                + '&HDD=' + encodeURIComponent(nHDD)
                + '&HDD_SIZE=' + encodeURIComponent(nHDD_SIZE)
                + '&VGA=' + encodeURIComponent(nVGA)
                + '&MONITOR_CNT=' + encodeURIComponent(nMONITOR_CNT)
                + '&CD_DIV=' + encodeURIComponent(nDIV)
                + '&DATE_SET=' + encodeURIComponent(nDATE_SET)
                + '&ID_CHARGE=' + encodeURIComponent(nCHARGE)
                + '&USE_ID=' + encodeURIComponent(nUSER)
                + '&USE_ORG=' + encodeURIComponent(nORG)
                + '&USE_STR=' + encodeURIComponent(nUSE)
                + '&POSITION=' + encodeURIComponent(nPOSITION)
                + '&STR_NOTE=' + encodeURIComponent(nNOTE)
                + '&STR_LOG=' + encodeURIComponent(nLog)
                + '&NEW_FILE=' + encodeURIComponent(newFile)
                + '&DEL_FILE=' + encodeURIComponent(delFile)
                + '&MAIN_DATE=' + encodeURIComponent(nMain_Date)
                + '&MAIN_USER=' + encodeURIComponent(nMain_User)
                + '&MAIN_TYPE=' + encodeURIComponent(nMain_Type)
                + '&MAIN_DESC=' + encodeURIComponent(nMain_Desc)
                + '&REG_USER=' + $.cookie('ck_Cd_Emp'),
			success: // 성공
				function (ReqData) {
					if (ReqData == "0") {
						dhtmlx.alert({
							title:"완료", type:"alert", text:"처리가 완료 되었습니다.",
							callback	:
								function(result) {
									setTimeout(function () {
										parent.dhxTree.selectItem("M050202", true);
										},100);
								}
						});
					}
					else {
						DhxMessageObj('처리중 오류가 발생했습니다 ('+ReqData+')', '');
					}
				},
			error:
				function (request, status, error) {
					alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
				}
		});

	}

	function Ajax_ComboListUser(){
		var nReturn;
		var AjaxUrl = "/MODULE/ITMS/DATA/AjaxComboUserGetList.asp";
		$.ajax({
			type: 'POST',
			url: AjaxUrl,
			async: false,
			data: 'CD_MODULE=',
			success:
				function (ReqData) {
					nReturn = ReqData;
				},
			error:
				function (request, status, error) {
					alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
				}
		});
		return nReturn;
	}

	function Ajax_ComboListOrg(){
		var nReturn;
		var AjaxUrl = "/MODULE/ITMS/DATA/AjaxComboOrgGetList.asp";
		$.ajax({
			type: 'POST',
			url: AjaxUrl,
			async: false,
			data: 'CD_MODULE=',
			success:
				function (ReqData) {
					nReturn = ReqData;
				},
			error:
				function (request, status, error) {
					alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
				}
		});
		return nReturn;
	}

    function Jq_MonitorMstRegSubmit() {
        var nResult = "Y";
        var nCD_PC = $("#CD_PC").val();
        var nCD_MONITOR = $("#CD_MONITOR").val().replace(/\n/g, "<br/>");
        var nNO_MODEL = $("#NO_MODEL").val().replace(/\n/g, "<br/>");
        var nSTR_MAKER = $("#STR_MAKER").val().replace(/\n/g, "<br/>");
        var nMONITOR_SIZE = $("#MONITOR_SIZE").val().replace(/\n/g, "<br/>");

        if (nCD_MONITOR == "" || nSTR_MAKER == "" || nMONITOR_SIZE == "") {
            DhxMessageObj('필수 항목을 입력해 주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMonitorMstRegProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'CD_PC=' + nCD_PC
                + '&CD_MONITOR=' + nCD_MONITOR
                + '&NO_MODEL=' + encodeURIComponent(nNO_MODEL)
                + '&STR_MAKER=' + encodeURIComponent(nSTR_MAKER)
                + '&MONITOR_SIZE=' + encodeURIComponent(nMONITOR_SIZE)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.DhxLayout_MonitorList();
                            parent.DhxBaseCloseWindowObj('DhxWinMonitorMstReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    function Jq_MonitorMstDelSubmit(nCD_PC, nCD_MONITOR) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMonitorMstDelProc.asp";

        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_MONITOR=' + encodeURIComponent(nCD_MONITOR) + '&CD_PC=' + encodeURIComponent(nCD_PC) + '',
            success: // 성공
            function (ReqData) {

            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    function Jq_EtcMstRegSubmit() {
        var nResult = "Y";
        var nCD_PC = $("#CD_PC").val();
        var nSTR_ETC = $("#STR_ETC").val().replace(/\n/g, "<br/>");

        if (nSTR_ETC == "") {
            DhxMessageObj('내용을 입력해 주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxEtcMstRegProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'CD_PC=' + nCD_PC
                + '&STR_ETC=' + nSTR_ETC
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.DhxLayout_EtcList();
                            parent.DhxBaseCloseWindowObj('DhxWinEtcMstReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    function Jq_EtcMstDelSubmit(nCD_PC, nSEQ_NO) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxEtcMstDelProc.asp";

        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + encodeURIComponent(nSEQ_NO) + '&CD_PC=' + encodeURIComponent(nCD_PC) + '',
            success: // 성공
            function (ReqData) {

            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }


    // PC관리대장 -> 상세 저장
function Jq_PcDetailValidity() {
    var nPC_USE = dhxToolbar2.getListOptionSelected("Status");  // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
    var nCD_TYPE = dhxCombo_Type.getSelectedValue();            // 구분
    var nSTR_MAKER = $("#STR_MAKER").val();                     // 제조사
    var nDATE_BUY = $("#DATE_BUY").val();                       // 구입일
    var nNO_MODEL = $("#NO_MODEL").val();                       // 모델명
    var nDIV = dhxCombo_Div.getSelectedValue();                 // 용도
    var nCombo_Charge = dhxCombo_Charge.getSelectedValue();     // 관리책임자
    var nUSER = dhxCombo_User.getSelectedValue();               // 사용자
    var nORG = dhxCombo_Org.getSelectedValue();                 // 사용부서
    var nUSE = $("#STR_USE").val();                             // 사용목적

    if (nCD_TYPE == "" || nSTR_MAKER == "" || nDATE_BUY == "" || nNO_MODEL == "") {
        DhxMessageObj('필수 항목을 입력해 주세요.', '');
        return false;
    } else if (nCombo_Charge == "") {
        DhxMessageObj('관리책임자를 선택하세요.', '');
        return false;
    }
    else {
        if (nPC_USE == "Y") {
            if (nDIV == "") {
                DhxMessageObj('용도를 선택하세요.', '');
                return false;
            }
            if (nDIV != "") {
                if (nDIV == "개인업무") {
                    if (nUSER == "") {
                        DhxMessageObj('사용자를 선택하세요.', '');
                        return false;
                    }
                }
                else {
                    if (nUSE == "" || nORG == "") {
                        DhxMessageObj('사용부서 및 사용목적을 입력하세요.', '#STR_USE');
                        return false;
                    }
                }
            }
        }        
    }    
    return true;
}

function Jq_PcDetailModify() {
    var uploadID = "dext5upload";
    var newFile = DEXT5UPLOAD.GetNewUploadListForJson(uploadID);
    var delFile = DEXT5UPLOAD.GetDeleteListForJson(uploadID);
    (newFile != null || delFile != null) ? fn_transfer() : Jq_PcDetailSave();
}

    function Jq_PcDetailSave() {
        var nFLAG = $('#CD_FLAG').val();                                    // 저장구분(REG:추가, UPDATE:수정)
        var nCD_PC = $('#CD_PC').val();
        var nCD_MST = $("#CD_MST").val();
        var nPC_USE = dhxToolbar2.getListOptionSelected("Status");          // PC 사용여부(사용:Y, 미사용:N, 폐기:D)
        var nCD_TYPE = dhxCombo_Type.getSelectedValue();                    // 구분
        var nDATE_BUY = $("#DATE_BUY").val();                               // 구입일
        var nSTR_MAKER = $("#STR_MAKER").val();                             // 제조사
        var nNO_MODEL = $("#NO_MODEL").val();                               // 모델명
        var nCPU = $("#CPU").val();                                         // CPU
        var nMEMORY = $("#MEMORY").val();                                   // MEMORY
        var nMEMORY_SIZE = $("#MEMORY_SIZE").val();                         // MEMORY_SIZE
        var nSSD = $("#SSD").val();                                         // SSD
        var nSSD_SIZE = $("#SSD_SIZE").val();                               // SSD_SIZE
        var nHDD = $("#HDD").val();                                         // HDD
        var nHDD_SIZE = $("#HDD_SIZE").val();                               // HDD_SIZE
        var nVGA = $("#VGA").val();                                         // VGA
        var nMONITOR_CNT = $("#MONITOR_CNT").val();                          // 모니터 사용 수량
        var newFile = $("#NEW_FILELIST").val();
        var delFile = $("#DEL_FILELIST").val();

        var nDIV = dhxCombo_Div.getSelectedValue();                         // 용도
        var nDATE_SET = $("#DATE_SET").val();                               // 취득일
        var nCHARGE = dhxCombo_Charge.getSelectedValue();                   // 관리책임자
        var nUSER = dhxCombo_User.getSelectedValue();                       // 사용자
        var nORG = dhxCombo_Org.getSelectedValue();                         // 사용부서
        var nUSE = $("#STR_USE").val();                                     // 사용목적
        var nPOSITION = $("#STR_POSITION").val().replace(/\n/g, "<br/>");   // 위치
        var nNOTE = $("#STR_NOTE").val().replace(/\n/g, "<br/>");           // 비고
        var nLog = $("#STR_LOG").val().replace(/\n/g, "<br/>");             // 로그정보
        
        var nMain_Date = "";                                    // 정비이력 - 정비일
        var nMain_User = "";                                    // 정비이력 - 담당자
        var nMain_Type = "";                                    // 정비이력 - 구분
        var nMain_Desc = "";                                    // 정비이력 - 설명

        if (nMONITOR_CNT == "") {
            nMONITOR_CNT = 0;
        }

        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxPcMstRegProc.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_FLAG=' + nFLAG
                + '&CD_PC=' + nCD_PC
                + '&CD_MST=' + nCD_MST
                + '&PC_USE=' + nPC_USE
                + '&CD_TYPE=' + encodeURIComponent(nCD_TYPE)
                + '&DATE_BUY=' + encodeURIComponent(nDATE_BUY)
                + '&STR_MAKER=' + encodeURIComponent(nSTR_MAKER)
                + '&NO_MODEL=' + encodeURIComponent(nNO_MODEL)
                + '&CPU=' + encodeURIComponent(nCPU)
                + '&MEMORY=' + encodeURIComponent(nMEMORY)
                + '&MEMORY_SIZE=' + encodeURIComponent(nMEMORY_SIZE)
                + '&SSD=' + encodeURIComponent(nSSD)
                + '&SSD_SIZE=' + encodeURIComponent(nSSD_SIZE)
                + '&HDD=' + encodeURIComponent(nHDD)
                + '&HDD_SIZE=' + encodeURIComponent(nHDD_SIZE)
                + '&VGA=' + encodeURIComponent(nVGA)
                + '&MONITOR_CNT=' + encodeURIComponent(nMONITOR_CNT)
                + '&CD_DIV=' + encodeURIComponent(nDIV)
                + '&DATE_SET=' + encodeURIComponent(nDATE_SET)
                + '&ID_CHARGE=' + encodeURIComponent(nCHARGE)
                + '&USE_ID=' + encodeURIComponent(nUSER)
                + '&USE_ORG=' + encodeURIComponent(nORG)
                + '&USE_STR=' + encodeURIComponent(nUSE)
                + '&POSITION=' + encodeURIComponent(nPOSITION)
                + '&STR_NOTE=' + encodeURIComponent(nNOTE)
                + '&STR_LOG=' + encodeURIComponent(nLog)
                + '&NEW_FILE=' + encodeURIComponent(newFile)
                + '&DEL_FILE=' + encodeURIComponent(delFile)
                + '&MAIN_DATE=' + encodeURIComponent(nMain_Date)
                + '&MAIN_USER=' + encodeURIComponent(nMain_User)
                + '&MAIN_TYPE=' + encodeURIComponent(nMain_Type)
                + '&MAIN_DESC=' + encodeURIComponent(nMain_Desc)
                + '&REG_USER=' + $.cookie('ck_Cd_Emp'),
            success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        dhtmlx.alert({
                            title: "완료", type: "alert", text: "처리가 완료 되었습니다.",
                            callback:
                                function (result) {
                                }
                        });
                    }
                    else {
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });

    }

    function Jq_MaintenanceMstRegSubmit() {
        var nResult = "Y";
        var nCD_PC = $("#CD_PC").val();
        var nMain_Date = $("#DATE_MAIN").val();                                 // 정비이력 - 정비일
        var nMain_User = dhxCombo_Main_User.getSelectedValue();                 // 정비이력 - 담당자
        var nMain_Type = dhxCombo_Main_Type.getSelectedValue();                 // 정비이력 - 구분
        var nMain_Desc = $("#Str_Main_Desc").val().replace(/\n/g, "<br/>");;    // 정비이력 - 설명

        if (nMain_Date != "") {
            if (nMain_User == "" || nMain_Type == "" || nMain_Desc == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }
        if (nMain_Type != "") {
            if (nMain_User == "" || nMain_Date == "" || nMain_Desc == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }
        if (nMain_Desc != "") {
            if (nMain_User == "" || nMain_Type == "" || nMain_User == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMaintenanceMstRegProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'CD_PC=' + nCD_PC
                + '&MAIN_DATE=' + nMain_Date
                + '&MAIN_USER=' + nMain_User
                + '&MAIN_TYPE=' + encodeURIComponent(nMain_Type)
                + '&MAIN_DESC=' + encodeURIComponent(nMain_Desc)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.DhxLayout_MaintenanceList();
                            parent.DhxBaseCloseWindowObj('DhxWinMaintenanceMstReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    function Jq_MaintenanceMstDelSubmit(nCD_PC, nSEQ_NO) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMaintenanceMstDelProc.asp";

        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + encodeURIComponent(nSEQ_NO) + '&CD_PC=' + encodeURIComponent(nCD_PC) + '',
            success: // 성공
            function (ReqData) {

            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    function Jq_MaintenanceMstViewSet(nSeqNo) {
        var ReqData = Ajax_MaintenanceMstView(nSeqNo);
        var nCol = ReqData.split("<,>");
        var s_MAIN_DATE = nCol[0];
        var s_MAIN_USER = nCol[1];
        var s_MAIN_TYPE = nCol[2];
        var s_MAIN_DESC = nCol[3];
        var n_MAIN_DESC = s_MAIN_DESC.replace(/<br\/>/g, "\n");

        $('#SEQ_NO').val(nSeqNo);
        $("#DATE_MAIN").val(s_MAIN_DATE);                     // 정비일자
        dhxCombo_Main_User.setComboValue(s_MAIN_USER);        // 담당자
        dhxCombo_Main_Type.setComboValue(s_MAIN_TYPE);        // 구분
        $("#Str_Main_Desc").val(n_MAIN_DESC);                 // 설명
    }

    function Ajax_MaintenanceMstView(nSeqNo) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMaintenanceMstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + encodeURIComponent(nSeqNo) + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_MaintenanceMstModifySubmit() {
        var nResult = "Y";
        var nSEQ_NO = $("#SEQ_NO").val();
        var nMain_Date = $("#DATE_MAIN").val();                                 // 정비이력 - 정비일
        var nMain_User = dhxCombo_Main_User.getSelectedValue();                 // 정비이력 - 담당자
        var nMain_Type = dhxCombo_Main_Type.getSelectedValue();                 // 정비이력 - 구분
        var nMain_Desc = $("#Str_Main_Desc").val().replace(/\n/g, "<br/>");;    // 정비이력 - 설명

        if (nMain_Date != "") {
            if (nMain_User == "" || nMain_Type == "" || nMain_Desc == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }
        if (nMain_Type != "") {
            if (nMain_User == "" || nMain_Date == "" || nMain_Desc == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }
        if (nMain_Desc != "") {
            if (nMain_User == "" || nMain_Type == "" || nMain_User == "") {
                DhxMessageObj('정비 내역을 입력해 주세요.', '');
                nResult = "N";
            }
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxMaintenanceMstModifyProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'SEQ_NO=' + nSEQ_NO
                + '&MAIN_DATE=' + nMain_Date
                + '&MAIN_USER=' + nMain_User
                + '&MAIN_TYPE=' + encodeURIComponent(nMain_Type)
                + '&MAIN_DESC=' + encodeURIComponent(nMain_Desc)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.DhxLayout_MaintenanceList();
                            parent.DhxBaseCloseWindowObj('DhxWinMaintenanceMstReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    // IP 상세 정보 가져오기
    function Jq_IPMstViewSet(nCD) {
        var ReqData = Ajax_IPMstView(nCD);
        var nCol = ReqData.split("<,>");
        var s_ID_USER = nCol[0];
        var s_STR_ETC = nCol[1];
        var s_STR_NOTE = nCol[2];
        var nSTR_NOTE = s_STR_NOTE.replace(/<br\/>/g, "\n");

        if (s_ID_USER != "ETC") {
            dhxCombo_User.setComboValue(s_ID_USER);
            $("#obj_Etc").hide();
        } else {
            dhxCombo_User.setComboValue("ETC");
            $("#STR_ETC").val(s_STR_ETC);
            $("#obj_Etc").show();
        }
        $("#STR_NOTE").val(nSTR_NOTE);                      // 기본정보 - 비고
    }

    function Ajax_IPMstView(nIP) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxIPMstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'STR_IP=' + encodeURIComponent(nIP) + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_IPMstRegSubmit(nIP) {
        var nResult = "Y";
        var nSTR_USER = dhxCombo_User.getSelectedValue();
        var nSTR_ETC = $("#STR_ETC").val();
        var nSTR_NOTE = $("#STR_NOTE").val().replace(/\n/g, "<br/>");

        if (nSTR_USER == "") {
            DhxMessageObj('사용자를 선택해 주세요..', '');
            nResult = "N";
        }
        if (nSTR_USER == "ETC" && nSTR_ETC == "") {
            DhxMessageObj('기타 사용처를 입력해주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxIPMstSaveProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'STR_IP=' + nIP
                + '&STR_USER=' + nSTR_USER
                + '&STR_ETC=' + encodeURIComponent(nSTR_ETC)
                + '&STR_NOTE=' + encodeURIComponent(nSTR_NOTE)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.parent.dhxTree.selectItem("M050101", true);
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
}

function Jq_IPMstDelSubmit(nIP) {
    parent.dhtmlx.confirm({
        title: "Warning",
        type: "confirm-error",
        text: "삭제 하겠습니까?",
        ok: "확인",
        cancel: "취소",
        callback:
            function (result) {
                if (result == true) {
                    var AjaxUrl = "/MODULE/ITMS/DATA/AjaxIPMstDeleteProc.asp";
                    $.ajax({
                        type: 'POST',
                        url: AjaxUrl,
                        async: false,
                        data: 'STR_IP=' + nIP
                            + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                        success: // 성공
                            function (ReqData) {
                                if (ReqData == "0") {
                                    console.log(ReqData);
                                    setTimeout(function () {
                                        parent.parent.dhxTree.selectItem("M050101", true);
                                    }, 100);
                                }
                                else {
                                    console.log(ReqData);
                                    DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                                }
                            },
                        error:
                            function (request, status, error) {
                                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                            }
                    });
                }
            }
    });
}


    function Ajax_ComboListIP() {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxComboIPGetList.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            success:
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    // NAT 상세 정보 가져오기
    function Jq_NATMstViewSet(nIP) {
        var ReqData = Ajax_NATMstView(nIP);
        var nCol = ReqData.split("<,>");
        var s_IN_IP = nCol[0];
        var s_STR_USER = nCol[1];
        var s_STR_NOTE = nCol[2];
        var nSTR_NOTE = s_STR_NOTE.replace(/<br\/>/g, "\n");

        dhxCombo_IP.setComboValue(s_IN_IP);
        dhxCombo_User.setComboValue(s_STR_USER);
        $("#STR_NOTE").val(nSTR_NOTE);
    }

    function Ajax_NATMstView(nIP) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxNATMstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'STR_IP=' + encodeURIComponent(nIP) + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_NATMstRegSubmit(nIP) {
        var nResult = "Y";
        var nIP_SEQ_NO = dhxCombo_IP.getSelectedValue();
        var nSTR_IP = dhxCombo_IP.getSelectedText();
        var nSTR_USER = dhxCombo_User.getSelectedValue();
        var nSTR_NOTE = $("#STR_NOTE").val().replace(/\n/g, "<br/>");;    // 정비이력 - 설명

        if (nSTR_IP == "") {
            DhxMessageObj('연결할 내부 IP를 선택해 주세요.', '');
            nResult = "N";
        }
        if (nSTR_USER == "") {
            DhxMessageObj('사용자를 선택해 주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxNATMstSaveProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'OUT_IP=' + nIP
                + '&IP_SEQ_NO=' + nIP_SEQ_NO
                + '&IN_IP=' + nSTR_IP
                + '&STR_USER=' + nSTR_USER
                + '&STR_NOTE=' + encodeURIComponent(nSTR_NOTE)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.parent.dhxTree.selectItem("M050102", true);
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    // Table 상세 정보 가져오기
    function Jq_TableMstViewSet(nTable) {
        var ReqData = Ajax_TableMstView(nTable);
        var nCol = ReqData.split("<,>");
        var s_CD_TYPE = nCol[0];
        var nSTR_COMMENT = nCol[1];
        if (s_CD_TYPE != "") {
            dhxCombo_Type.setComboValue(s_CD_TYPE);
        }        
        $("#STR_COMMENT").val(nSTR_COMMENT);                      // 기본정보 - 비고
    }

    // Table 상세 정보 가져오기
    function Ajax_TableMstView(nTable) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxTableMstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'STR_TABLE=' + encodeURIComponent(nTable) + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    // Table 정보 저장
    function Jq_TableMstRegSubmit(nTable) {
        var nResult = "Y";
        var nCD_TYPE = dhxCombo_Type.getSelectedValue();
        var nSTR_TYPE = dhxCombo_Type.getSelectedText();
        var nSTR_COMMENT = $("#STR_COMMENT").val().replace(/\n/g, "<br/>");

        if (nCD_TYPE == "" && nSTR_COMMENT == "") {
            DhxMessageObj('테이블 정보를 확인해주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxTableMstSaveProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'STR_TABLE_NM=' + nTable
                + '&STR_TYPE=' + nSTR_TYPE
                + '&CD_TYPE=' + nCD_TYPE
                + '&STR_COMMENT=' + encodeURIComponent(nSTR_COMMENT)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.parent.dhxTree.selectItem("M050501", true);                            
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    // Column 정보 저장
    function Jq_TableColumnRegSubmit(nTable, nColumn_NM, nComment) {
        var nResult = "Y";
        
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxTableColumnSaveProc.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'STR_TABLE_NM=' + nTable
            + '&COLUMN_NM=' + nColumn_NM
            + '&STR_COMMENT=' + encodeURIComponent(nComment)
            + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
            success: // 성공
            function (ReqData) {                
                if (ReqData == "0") {
                    console.log(ReqData);
                }
                else {
                    console.log(ReqData);
                    DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                }
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    // 소프트웨어 라이센스 수정    
    function Jq_SoftwareMstModifySubmit(nSEQ_NO) {
        var nResult = "Y";
        var nSTR_SOFTWARE = $('#STR_SOFTWARE').val();
        var nOWN_VOLUME = $('#OWN_VOLUME').val();
        var nEND_DATE = $('#END_DATE').val();
        var nETERNALLY_FLAG = ETERNALLY_FLAG.checked;

        if (nSTR_SOFTWARE == "" || nOWN_VOLUME == "" || (nETERNALLY_FLAG == false && nEND_DATE == "")) {
            DhxMessageObj('필수 항목을 입력해 주세요.', '');
            nResult = "N";
            return;
        }
        if (isNaN(nOWN_VOLUME) == true) {
            DhxMessageObj('구매수량은 숫자만 입력 가능합니다.', '');
            nResult = "N";
            return;
        }

        if (nETERNALLY_FLAG == false) {
            nETERNALLY_FLAG = "N";
        } else {
            nETERNALLY_FLAG = "Y";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxSoftwareMstModifyProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'SEQ_NO=' + nSEQ_NO
                + '&STR_SOFTWARE=' + encodeURIComponent(nSTR_SOFTWARE)
                + '&OWN_VOLUME=' + nOWN_VOLUME
                + '&END_DATE=' + nEND_DATE
                + '&ETERNALLY_FLAG=' + nETERNALLY_FLAG,
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        setTimeout(function () {
                            parent.DhxGrid_SoftwareList();
                            parent.DhxBaseCloseWindowObj('dhxWin_SoftwareReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    // 소프트웨어 라이센스 등록
    function Jq__SoftwareMstRegSubmit() {
        var nResult = "Y";
        var nSTR_SOFTWARE = $('#STR_SOFTWARE').val();
        var nOWN_VOLUME = $('#OWN_VOLUME').val();
        var nEND_DATE = $('#END_DATE').val();
        var nETERNALLY_FLAG = ETERNALLY_FLAG.checked;
        
        if (nSTR_SOFTWARE == "" || nOWN_VOLUME == "" || (nETERNALLY_FLAG == false && nEND_DATE == "")) {
            DhxMessageObj('필수 항목을 입력해 주세요.', '');
            nResult = "N";
            return;
        }
        if (isNaN(nOWN_VOLUME) == true) {
            DhxMessageObj('구매수량은 숫자만 입력 가능합니다.', '');
            nResult = "N";
            return;
        }

        if (nETERNALLY_FLAG == false) {
            nETERNALLY_FLAG = "N";
        } else {
            nETERNALLY_FLAG = "Y";
        }


        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxSoftwareMstRegProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'STR_SOFTWARE=' + encodeURIComponent(nSTR_SOFTWARE)
                + '&OWN_VOLUME=' + nOWN_VOLUME
                + '&END_DATE=' + nEND_DATE
                + '&ETERNALLY_FLAG=' + nETERNALLY_FLAG
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        setTimeout(function () {
                            parent.DhxGrid_SoftwareList();
                            parent.DhxBaseCloseWindowObj('dhxWin_SoftwareReg', 'N');
                        }, 100);
                    } else if (ReqData == "99") {
                        console.log(ReqData);
                        DhxMessageObj('등록된 소프트웨어입니다.', '');
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    function Jq_SoftwareMstViewSet(nSeqNo) {
        var ReqData = Ajax_SoftwareMstView(nSeqNo);
        var nCol = ReqData.split("<,>");
        var s_STR_SOFTWARE = nCol[0];
        var s_OWN_VOLUME = nCol[1];
        var s_END_DATE = nCol[2];
        var s_ETERNALLY_FLAG = nCol[3];
        
        $('#SEQ_NO').val(nSeqNo);
        $("#STR_SOFTWARE").val(s_STR_SOFTWARE);
        $("#OWN_VOLUME").val(s_OWN_VOLUME);
        if (s_ETERNALLY_FLAG == "Y") {
            ETERNALLY_FLAG.checked = true;
            $("#END_DATE").val("");
        } else {
            ETERNALLY_FLAG.checked = false;
            $("#END_DATE").val(s_END_DATE);
        }        
    }

    function Ajax_SoftwareMstView(nSeqNo) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxSoftwareMstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + encodeURIComponent(nSeqNo) + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_UseSoftwareEtcRegSubmit(nSEQ_NO) {
        var nResult = "Y";        
        var nSTR_TYPE = dhxCombo_Flag.getSelectedValue();
        var nSTR_ORG = dhxCombo_Org.getSelectedValue();
        var nSTR_USE = $("#STR_USE").val();
        
        if (nSTR_TYPE == "" || nSTR_USE == "") {
            DhxMessageObj('입력값을 확인해주세요.', '');
            nResult = "N";
        }

        if (nResult == "Y") {
            var AjaxUrl = "/MODULE/ITMS/DATA/AjaxUseSoftwareSaveProc.asp";
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'SEQ_NO=' + nSEQ_NO
                + '&STR_TYPE=' + nSTR_TYPE
                + '&STR_ORG=' + nSTR_ORG
                + '&STR_USE=' + encodeURIComponent(nSTR_USE)
                + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
                success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        console.log(ReqData);
                        setTimeout(function () {
                            parent.dhxTree.selectItem("M050601", true);
                            parent.DhxBaseCloseWindowObj('dhxWin_SoftwareUseReg', 'N');
                        }, 100);
                    }
                    else {
                        console.log(ReqData);
                        DhxMessageObj('처리중 오류가 발생했습니다 (' + ReqData + ')', '');
                    }
                },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
            });
        }
    }

    function Jq_UseSoftwareUserRegSubmit(nSEQ_NO, nUserID, nCdOrg) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxUseSoftwareSaveProc.asp";

        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSEQ_NO
            + '&STR_TYPE=' + nUserID
            + '&STR_ORG=' + nCdOrg
            + '&STR_USE=' + '개인'
            + '&ID_USER=' + $.cookie('ck_Cd_Emp'),
            success: // 성공
            function (ReqData) {

            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    function Jq_UseSoftwareMstDelSubmit(nSEQ_NO) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxUseSoftwareMstDelProc.asp";

        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSEQ_NO,
            success: // 성공
            function (ReqData) {
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    // IT구매/계약 관리 등록
    function Jq_IT_DealRegSave(){
        var nResult = "Y";
        var nFLAG           = dhxForm.getItemValue("FLAG");
        var nCD_MST         = dhxForm.getItemValue("CD_MST");
        var nSTR_TITLE      = dhxForm.getItemValue("STR_TITLE");
        var nOWN_VOLUME     = dhxForm.getItemValue("OWN_VOLUME");
        var nEND_DATE       = dhxForm.getItemValue("END_DATE",true);
        var REG_USER        = $.cookie('ck_Cd_Emp');  

        if (nSTR_TITLE == "" || nOWN_VOLUME == "" ||nEND_DATE =="") {
            top.dhtmlx.alert({
                title:"알림",
                type:"alert-error",
                text:"필수 항목을 입력해주세요. "
            });
            nResult = "N";
            return;
        }
        if(nResult = "Y"){
            var AjaxUrl = "/MODULE/ITMS/DATA/Proc_IT_DealReg.asp";
            $.ajax({
                type: "POST",
                url:AjaxUrl,
                async:false,
                data:'FLAG='        + nFLAG
                    +'&CD_MST='     + nCD_MST 
                    +'&STR_TITLE='  + nSTR_TITLE
                    +'&OWN_VOLUME=' + nOWN_VOLUME
                    +'&END_DATE='   + nEND_DATE
                    +'&REG_USER='   + REG_USER
                ,
                success: 
                    function(ReqData){
                        if(ReqData == "0"){
                            top.dhtmlx.alert({
                                title:"Message",
                                type:"alert",
                                text:"저장이 완료되었습니다."
                            });   
                            dhxWinsView.window("dhxWin_IT_DealReg").close();                   
                            parent.dhxTreeView.selectItem("0701", true);
                            
                        }else{
                            top.dhtmlx.alert({
                                title:"오류",
                                type:"alert-error",
                                text:"저장 중 오류가 발생하였습니다. "
                            });
                        } 
                        
                    },
                error:
                    function (request, status, error) {
                        alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                    }
            });
        }
    }
    // IT구매/계약 관리 수정
    function Jq_Ajax_IT_DealModGetView(nCdMst){
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Deal_ModGetView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_MST=' + nCdMst + '',
            success: // 성공
                function (ReqData) {
                    Jq_Ajax_IT_DealViewBind(ReqData);
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }
     // IT구매/계약 관리 수정 바인딩
    function Jq_Ajax_IT_DealViewBind(ReqData){
        var nCol = ReqData.split("</>");
        var s_CD_MST        = nCol[0]
        var s_STR_TITLE     = nCol[1];
        var s_OWN_VOLUME    = nCol[2];
        var s_END_DATE      = nCol[3];
        
        dhxForm.setItemValue("CD_MST",s_CD_MST);
        dhxForm.setItemValue("STR_TITLE",s_STR_TITLE);
        dhxForm.setItemValue("OWN_VOLUME",s_OWN_VOLUME);
        dhxForm.setItemValue("END_DATE",s_END_DATE);

    }
    // IT구매/계약 관리 삭제
    function Jq_Ajax_IT_Deal_Delete(nCdMst){

        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Deal_Delete.asp"; 
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_MST=' + nCdMst,
            success: // 성공
                function (ReqData) {
                    if(ReqData == "0"){
                        top.dhtmlx.alert({
                            title:"Message",
                            type:"alert",
                            text:"삭제가 완료되었습니다."
                        });
                        DhxGrid_IT_DealListLoad();
                        DhxLayout_IT_Deal_Record();
                    }else{
                        top.dhtmlx.alert({
                            title:"오류",
                            type:"alert-error",
                            text:"삭제 중 오류가 발생하였습니다. "
                        });
                    }
    
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });

    }
    
    //IT 구매/계약 관리 상세 이력 등록
    function Jq_Ajax_IT_Deal_RecordgAdd(nCdMst){     
        var nResult = "Y";  
        var nFLAG               = dhxForm.getItemValue("FLAG");
        var nSEQ_NO             = dhxForm.getItemValue("SEQ_NO");
        var nCUS_NAME           = dhxForm.getItemValue("CUS_NAME");
        var nCUS_USER           = dhxForm.getItemValue("CUS_USER");  
        var nCUS_PHONE          = dhxForm.getItemValue("CUS_PHONE");
        var nCUS_MAIL           = dhxForm.getItemValue("CUS_MAIL");
        var nSTART_DATE         = dhxForm.getItemValue("START_DATE",true);
        var nOWN_VOLUME         = dhxForm.getItemValue("OWN_VOLUME");      
        var nPRICE              = dhxForm.getItemValue("PRICE");

        if(nCUS_NAME == "" || nCUS_USER == "" ||  nSTART_DATE == "" || nOWN_VOLUME == "" || nPRICE == ""){
            top.dhtmlx.alert({
                title:"알림",
                type:"alert-error",
                text:"필수 항목을 입력해주세요. "
            });
            nResult = "N";
            return;
        }
        if(nResult = "Y"){
            
            var AjaxUrl = "/MODULE/ITMS/DATA/Proc_IT_DealRecordAdd.asp";  
            $.ajax({
                type: 'POST',
                url: AjaxUrl,
                async: false,
                data: 'CD_MST=' + nCdMst     
                + '&FLAG=' + nFLAG
                + '&SEQ_NO=' + nSEQ_NO
                + '&CUS_NAME=' + nCUS_NAME
                + '&CUS_USER=' + nCUS_USER
                + '&CUS_PHONE=' + nCUS_PHONE       
                + '&CUS_MAIL=' + encodeURIComponent(nCUS_MAIL)
                + '&START_DATE=' + nSTART_DATE   
                + '&OWN_VOLUME=' + nOWN_VOLUME
                + '&PRICE=' + nPRICE
                + '&REG_USER=' + $.cookie('ck_Cd_Emp')
                 ,
                success: // 성공
                    function (ReqData) {
                            if(ReqData == 0){
                                top.dhtmlx.alert({
                                    title:"Message",
                                    type:"alert",
                                    text:"저장이 완료되었습니다."
                                });
                                dhxWinsView.window("dhxWin_IT_DealRecord_Add").close();                   
                                DhxLayout_IT_Deal_RecordListLoad();
                                    
                            }else{
                                top.dhtmlx.alert({
                                    title:"오류",
                                    type:"alert-error",
                                    text:"저장 중 오류가 발생하였습니다. "
                                });
                            } 
                    },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                    }
            });
        }


    }
     //IT 구매/계약 관리 상세 이력 수정 
    function Jq_Ajax_IT_Deal_Record_ModGetView(nSeqNo){
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_DealRecord_ModGetView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSeqNo + '',
            success: // 성공
                function (ReqData) {
                    Jq_Ajax_IT_Deal_RecordViewBind(ReqData);
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }
    //IT 구매/계약 관리 상세 이력 수정 바인딩
    function Jq_Ajax_IT_Deal_RecordViewBind(ReqData){
        var nCol = ReqData.split("</>");
        var s_SEQ_NO             = nCol[0];
        var s_CUS_NAME           = nCol[1];
        var s_CUS_USER           = nCol[2];
        var s_CUS_PHONE          = nCol[3];
        var s_CUS_MAIL           = nCol[4];
        var s_START_DATE         = nCol[5];
        var s_OWN_VOLUME         = nCol[6];
        var s_PRICE              = nCol[7];

        dhxForm.setItemValue("SEQ_NO",s_SEQ_NO);
        dhxForm.setItemValue("CUS_NAME",s_CUS_NAME);
        dhxForm.setItemValue("CUS_USER",s_CUS_USER);
        dhxForm.setItemValue("CUS_PHONE",s_CUS_PHONE);
        dhxForm.setItemValue("CUS_MAIL",s_CUS_MAIL);
        dhxForm.setItemValue("START_DATE",s_START_DATE);
        dhxForm.setItemValue("OWN_VOLUME",s_OWN_VOLUME);
        dhxForm.setItemValue("PRICE",s_PRICE);
    }
    //IT 구매/계약 관리 상세 이력 다중 삭제
    function Jq_Ajax_IT_Deal_RecordDelete(nSeqNo){
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_DealRecord_Delete.asp"; 
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSeqNo,
            success: // 성공
                function (ReqData) {
                    if(ReqData == 0){
                        top.dhtmlx.alert({
                            title:"Message",
                            type:"alert",
                            text:"삭제가 완료되었습니다."
                        });
                        DhxLayout_IT_Deal_RecordListLoad(); 
                    }else{
                        top.dhtmlx.alert({
                            title:"오류",
                            type:"alert-error",
                            text:"삭제 중 오류가 발생하였습니다."
                        });
                    }
    
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }



    function Ajax_SysAuthApply(nCD){
        var nRead = "", nModify = "" ;
        dhxGridY.forEachRow(function (id) { // User
            nRead += dhxGridY.cells(id, 0).getValue() + "/"; // ID
            nRead += dhxGridY.cells(id, 1).getValue() + "|"; // Str
        });
        dhxGridN.forEachRow(function (id) { // Org
            nModify += dhxGridN.cells(id, 0).getValue() + "/"; // ID
            nModify += dhxGridN.cells(id, 1).getValue() + "|"; // Str
        });
        var nAcc	= nRead.slice(0,-1) ;
        var nLock	= nModify.slice(0,-1) ;
    
        var AjaxUrl = "/MODULE/ITMS/DATA/Proc_SysAuthSave.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_MENU='+nCD+'&STR_ACC='+encodeURIComponent(nAcc)+'&STR_LOCK='+encodeURIComponent(nLock)+'',
            success: // 성공
            function (ReqData) {
                setTimeout(function () {
                    dhxGridAuthY.clearAndLoad("/MODULE/ITMS/DATA/XmlForGridSysAuthGetList.asp?FLAG=MENU&CD_MENU="+nCD+"&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Str_User')+"&AUTH_TYPE=Y", function () {
                        var nCnt = dhxGridAuthY.getRowsNum()
                        if (nCnt == 0){
                            dhxGridAuthY.addRow(dhxGridAuthY.uid(),['','','','','<span style="font-weight:bold; color:#339900;">전체</span>',''],1);
                        }
                    });
                    dhxGridAuthN.clearAndLoad("/MODULE/ITMS/DATA/XmlForGridSysAuthGetList.asp?FLAG=MENU&CD_MENU="+nCD+"&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Str_User')+"&AUTH_TYPE=N", function () {
                        var nCnt = dhxGridAuthN.getRowsNum()
                        if (nCnt == 0){
                            dhxGridAuthN.addRow(dhxGridAuthN.uid(),['','','','','<span style="font-weight:bold; color:#ff6600;">제한없음</span>',''],1);
                        }
                    });
                    dhxWinsAuth.window("DhxWdmsAuth").close();
                 },500);
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    
    }

    function Ajax_IT_Setting_Category_Proc(nFlag, nType, nCD, nValue, nchkApproval, nSeq, nParent, nSortNo){
        var AjaxUrl = "/MODULE/ITMS/DATA/Proc_IT_Setting_Category.asp";
        $.ajax({
            type: 'POST', url: AjaxUrl, async: false,
            data: 'FLAG='+nFlag
                  +'&SEQ_NO='+nSeq
                  +'&CD_TYPE='+nType
                  +'&CD_OBJECT='+nCD
                  +'&STR_OBJECT='+encodeURIComponent(nValue.replace(/\n/gi, "<br>").replace(/[\^\|]/gi, ''))
                  +'&CHK_APPROVAL='+nchkApproval
                  +'&CD_PARENT='+nParent
                  +'&SORT_NO='+nSortNo
                  +'&REG_USER='+$.cookie('ck_Cd_Emp')+'',
            success: // 성공
            function (ReqData) {
                setTimeout(function () {
                    if (nType == "MAJOR"){
                        DhxListE.clearAll();
                        DhxListE.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG="+nType+"&CD_PARENT="+nParent+"", function(){
                            var id = DhxListE.last();
                            DhxListE.select(id-1);
                            DhxListE.show(id-1);
                        });
                    } else if(nType == "MINOR") {
                        DhxListO.clearAll();
                        DhxListO.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG="+nType+"&CD_PARENT="+nParent+"", function(){
                            var id = DhxListO.last();
                            DhxListO.select(id-1);
                            DhxListO.show(id-1);
                        });
                    } else {
                        DhxListA.clearAll();
                        DhxListA.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG="+nType+"&CD_PARENT="+nParent+"", function(){
                            var id = DhxListA.last();
                            DhxListA.select(id-1);
                            DhxListA.show(id-1);
                        });
                    }
                    if (nFlag != "DELETE")	{
                        dhxWinsObj.window("DhxWinObject").progressOff();
                        dhxWinsObj.window("DhxWinObject").close();
                    }
                 },500);
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    function Ajax_IT_Category_User_GetList(nType, nCd){
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Category_UserGetList.asp";
        $.ajax({
            type: 'POST', url: AjaxUrl, async: false, data: '',
            success: // 성공
            function (ReData) {
                nReturn = ReData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
	}

    function Jq_AjaxIT_SettingTeamLeaderProc(nCd_Org, nStr_ID) {
        var AjaxUrl = "/MODULE/ITMS/DATA/AjaxforIT_Setting_TeamLeaderProc.asp";
    
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'CD_ORG=' + nCd_Org + ''
                + '&STR_ID=' + nStr_ID + '',
            success: // 성공
                function (ReqData) {
    
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }

    function Ajax_IT_Category_GetList(nType, nParentCode){
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Category_GetList.asp";
        $.ajax({
            type: 'POST', 
            url: AjaxUrl, 
            async: false, 
            data: 'CD_TYPE=' + nType + ''
                  + '&PARENT_CODE=' + nParentCode + '',
            success: // 성공
            function (ReData) {
                nReturn = ReData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
	}

    function Jq_Work_RegValidity() {
        var nValues = dhxForm.getFormData();        
        var nMAJOR_OBJECT = nValues.cboSystem;
        var nMINOR_OBJECT = nValues.cboWork;
        var nWORK_USER = nValues.cboUser;
        var nCHK_URGENCY = nValues.chkUrgency;
        var nSTR_TITLE = $("#STR_TITLE").val();
        var nSTR_BODY = DEXT5.getBodyTextValue();
        var nHTML_BODY = DEXT5.getBodyValue();
        
        if (nMAJOR_OBJECT == "") {
            ComDhxMessageObj("System을 선택하지 않았습니다.", '');
            return false;
        } else if (nMINOR_OBJECT == "") {
            ComDhxMessageObj("요청업무를 선택하지 않았습니다.", '');
            return false;
        } else if (nWORK_USER == "") {
            ComDhxMessageObj("담당자를 선택하지 않았습니다.", '');
            return false;
        } else if (nSTR_TITLE == "") {
            ComDhxMessageObj("제목을 입력하지 않았습니다.", '');
            return false;
        } else if (nSTR_BODY == "") {
            ComDhxMessageObj("요청내용을 입력하지 않았습니다.", '');
            return false;
        } 
        return true;
    }

    function Jq_Work_RegSave(nSeqNo) {    
        var nSEQ_NO = $("#SEQ_NO").val();
        var nValues = dhxForm.getFormData();
        var nMAJOR_OBJECT = nValues.cboSystem;
        var nMINOR_OBJECT = nValues.cboWork;
        var nWORK_USER = nValues.cboUser;
        var nCHK_URGENCY = nValues.chkUrgency;
        var nSTR_TITLE = $("#STR_TITLE").val();
        var nSTR_BODY = DEXT5.getBodyTextValue();
        var nHTML_BODY = DEXT5.getBodyValue();
    
        var nCD_MST = $("#CD_MST").val();
        var nNEW_FILELIST = $("#NEW_FILELIST").val();   // 파일 리스트
        var nDEL_FILELIST = $("#DEL_FILELIST").val();   // 삭제 파일 리스트
    
        if(nCHK_URGENCY == 0){
            nCHK_URGENCY = 'N';
        } else {
            nCHK_URGENCY = 'Y';
        }
        if(nSEQ_NO == "" || nSEQ_NO == undefined){
            nSEQ_NO = 0;
        }
        
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_Reg.asp";
        $.ajax({ 
            type: 'POST', url: AjaxUrl, async: false,
            data: 'SEQ_NO=' + nSEQ_NO
                + '&MAJOR_OBJECT=' + encodeURIComponent(nMAJOR_OBJECT)
                + '&MINOR_OBJECT=' + encodeURIComponent(nMINOR_OBJECT)
                + '&WORK_USER=' + encodeURIComponent(nWORK_USER)
                + '&CHK_URGENCY=' + encodeURIComponent(nCHK_URGENCY)
                + '&STR_TITLE=' + encodeURIComponent(nSTR_TITLE)
                + '&HTML_BODY=' + encodeURIComponent(nHTML_BODY)
                + '&STR_BODY=' + encodeURIComponent(nSTR_BODY)
                + '&CD_MST=' + encodeURIComponent(nCD_MST)
                + '&NEW_FILELIST=' + encodeURIComponent(nNEW_FILELIST)
                + '&DEL_FILELIST=' + encodeURIComponent(nDEL_FILELIST)
                + '&REG_USER=' + $.cookie('ck_Cd_Emp') + '',
            success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        dhtmlx.alert({
                            title: '완료', type: "alert", text: '등록 되었습니다.',
                            callback:
                                function (result) {
                                    setTimeout(function () {                                    
                                        parent.dhxTree.selectItem("M050702", true);
                                        parent.dhxTree.refreshItems('M050703', "/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"");
                                        parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstReg', 'N') ;
                                    }, 100);
                                }
                        });
                    }
                    else {
                        ComDhxMessageObj('처리중 오류가 발생했습니다.' + ' (' + ReqData + ')', '');
                    }
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }

    function Dext_IT_Work_AttachGetList(nMst, nAttach_Type){
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_AttachGetList.asp";
        $.ajax({
            type: 'POST', 
            url: AjaxUrl, 
            async: false, 
            data: 'CD_MST=' + nMst
                  +'&ATTACH_TYPE=' + nAttach_Type,
            success: // 성공
                function (ReData) {
                nReturn = ReData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_IT_Work_MstViewSet(nSeqNo) {
        var ReqData = Ajax_IT_Work_MstView(nSeqNo);
        var nCol = ReqData.split("<,>");
        
        var s_MAJOR_OBJECT  = nCol[0];
        var s_MINOR_OBJECT  = nCol[1];
        var s_STR_TITLE     = nCol[2];
        var s_HTML_BODY     = nCol[3];
        var s_CHK_URGENCY   = nCol[4];
        var s_WORK_USER     = nCol[5];

        if(s_CHK_URGENCY == "Y") {
            s_CHK_URGENCY = 1;
        } else {
            s_CHK_URGENCY = 0;
        }

        dhxForm.setItemValue("cboSystem", s_MAJOR_OBJECT);
        dhxForm.setItemValue("cboWork", s_MINOR_OBJECT);
        dhxForm.setItemValue("cboUser", s_WORK_USER);
        dhxForm.setItemValue("chkUrgency", s_CHK_URGENCY);
        $("#STR_TITLE").val(s_STR_TITLE);
        
        DEXT5.setBodyValue(s_HTML_BODY, 'EditorContents');
    }

    function Ajax_IT_Work_MstView(nSeqNo) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_MstView.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSeqNo + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Jq_Work_Delete(nSeqNo) {    
        var nSEQ_NO = $("#SEQ_NO").val();
        
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_Delete.asp";
        $.ajax({ 
            type: 'POST', url: AjaxUrl, async: false,
            data: 'SEQ_NO=' + nSEQ_NO
                + '&REG_USER=' + $.cookie('ck_Cd_Emp') + '',
            success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        dhtmlx.alert({
                            title: '완료', type: "alert", text: '삭제 되었습니다.',
                            callback:
                                function (result) {
                                    setTimeout(function () {                                    
                                        parent.dhxTree.selectItem("M050702", true);
                                        parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstReg', 'N') ;
                                    }, 100);
                                }
                        });
                    }
                    else {
                        ComDhxMessageObj('처리중 오류가 발생했습니다.' + ' (' + ReqData + ')', '');
                    }
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }

    function Jq_IT_Work_DetailViewSet(nSeqNo) {
        var ReqData = Ajax_IT_Work_DetailView(nSeqNo);
        var nCol = ReqData.split("<,>");
        
        var s_NO_WORK           = nCol[0];
        var s_STR_MAJOR         = nCol[1];
        var s_STR_MINOR         = nCol[2];
        var s_CHK_URGENCY       = nCol[3];
        var s_STR_TITLE         = nCol[4];
        var s_STR_STATUS        = nCol[5];
        var s_HTML_BODY         = nCol[6];
        var s_HTML_BODY_RESULT  = nCol[7];
        var s_CD_MST            = nCol[8];

        if(s_CHK_URGENCY == "Y") {
            s_CHK_URGENCY = true;
        } else {
            s_CHK_URGENCY = false;
        }
        
        $("#NO_WORK").val(s_NO_WORK);
        $("#STR_SYSTEM").val(s_STR_MAJOR);
        $("#STR_WORK").val(s_STR_MINOR);
        $('#chkUrgency').prop('checked', s_CHK_URGENCY);
        $("#STR_TITLE").val(s_STR_TITLE);
        $("#STR_STATUS").val(s_STR_STATUS);
        
        DEXT5.setBodyValue(s_HTML_BODY, 'EditorContents_1');
        DEXT5.setBodyValue(s_HTML_BODY_RESULT, 'EditorContents_2');
        
        // 첨부파일 가져오기(요청)
        var ReData = Dext_IT_Work_Detail_AttachGetList(s_CD_MST, 'REQUEST');	
        
        if (ReData != "") {
            var nRow = ReData.split("<,>");
            $.each(nRow, function (No) {
                var nCol = nRow[No].split("</>");
                var s_SEQ_NO = nCol[0];
                var s_FILE_NAME = nCol[1];
                var s_FILE_SIZE = nCol[2];
                var s_FILE_PATH = nCol[3];
                DEXT5UPLOAD.AddUploadedFile(s_SEQ_NO, s_FILE_NAME, 'http://' + location.host + s_FILE_PATH, s_FILE_SIZE, '', "dext5upload");
            });
        }
        // 첨부파일 가져오기(결과)
        var ReData = Dext_IT_Work_Detail_AttachGetList(s_CD_MST, 'RESULT');	
        
        if (ReData != "") {
            var nRow = ReData.split("<,>");
            $.each(nRow, function (No) {
                var nCol = nRow[No].split("</>");
                var s_SEQ_NO = nCol[0];
                var s_FILE_NAME = nCol[1];
                var s_FILE_SIZE = nCol[2];
                var s_FILE_PATH = nCol[3];
                DEXT5UPLOAD.AddUploadedFile(s_SEQ_NO, s_FILE_NAME, 'http://' + location.host + s_FILE_PATH, s_FILE_SIZE, '', "dext5uploadR");
            });
        }
    }

    function Dext_IT_Work_Detail_AttachGetList(nMst, nAttach_Type){
        var nReturn;
        var AjaxUrl = "./DATA/Ajax_IT_Work_AttachGetList.asp";
        $.ajax({
            type: 'POST', 
            url: AjaxUrl, 
            async: false, 
            data: 'CD_MST=' + nMst
                  +'&ATTACH_TYPE=' + nAttach_Type,
            success: // 성공
                function (ReData) {
                nReturn = ReData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Ajax_IT_Work_DetailView(nSeqNo) {
        var nReturn;
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_Detail_View.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'SEQ_NO=' + nSeqNo + '',
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }

    function Fnc_IT_Work_Approval(nSeq, nVal){
		var nValues		= dhxForm.getFormData();
		var nNote		= nValues.STR_NOTE.replace(/[|%*^\&\;\'\"\\]/gi,"") ;
		if (nVal == "A") {
			var nText = "승인";
		}
		else if (nVal == "R"){
			var nText = "반려" ;
		}
		else {
			var nText = "보류" ;
		}
		if (nVal == "R" && nNote == "") {
			ComDhxMessageObj("반려일 경우 결재의견은 필수 입니다.", '');
		} else if (nVal == "D" && nNote == "") {
			ComDhxMessageObj("보류일 경우 결재의견은 필수 입니다.", '');
		} else {
			dhtmlx.confirm({
				title: "알림",	type: "confirm", text: nText+' 하시겠습니까?', ok: nText, cancel: "취소",
				callback	:
					function(result) {
						if (result == true){
							var nData = nVal+"<!>"+nNote.replace(/\n/gi, "<br>")
							Ajax_IT_Work_Approval(nSeq, nData);
						}
						else {
							return ;
						}
					}
			});
		}
	}

	function Ajax_IT_Work_Approval(nSeqNo, nData){        
        var AjaxUrl		= "/MODULE/ITMS/DATA/Ajax_IT_Work_Approval.asp";
		$.ajax({
			type: 'POST', url: AjaxUrl, async: false,
			data: 'SEQ_NO='+nSeqNo
				+ '&STR_DATA='+encodeURIComponent(nData),
			success: // 성공
			function (ReData) {
				if (ReData == "0"){
					setTimeout(function(){
						dhtmlx.alert({
							title: "완료",	type: "alert", text: "처리 되었습니다." ,
							callback	:
								function(result) {                    
                                    // parent.parent.dhxTree.deleteChildItems(0);
                                    // parent.parent.dhxTree.load("/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"", function(){
                                    //     setTimeout(function () {   
                                    //         parent.parent.dhxTree.selectItem("M050703", false);
                                    //     }, 100);
                                    // });
                                    parent.parent.dhxTree.refreshItems('M050703', "/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"");                                            
                                    parent.RealGrid_IT_ApprovalList();                                    
                                    parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstDetail', 'N') ;
								}
						});
					},500);
				}
			},
			error:
			function (request, status, error) {
				alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
				console.log(request.responseText);
				console.log(error);
			}
		});
	}    


    function Jq_Work_ResultSave() {    
        var nSEQ_NO = $("#SEQ_NO").val();
        var nSTR_TYPE = $('#STR_TYPE').val();
        DEXT5.setEditor('EditorContents_2');
        var nSTR_BODY = DEXT5.getBodyTextValue();
        var nHTML_BODY = DEXT5.getBodyValue();
        
        var nCD_MST = $("#CD_MST").val();
        var nNEW_FILELIST = $("#NEW_FILELIST").val();   // 파일 리스트
        var nDEL_FILELIST = $("#DEL_FILELIST").val();   // 삭제 파일 리스트
    
        if(nSEQ_NO == "" || nSEQ_NO == undefined){
            nSEQ_NO = 0;
        }
        var AjaxUrl = "/MODULE/ITMS/DATA/Ajax_IT_Work_Result_Reg.asp";
        $.ajax({ 
            type: 'POST', url: AjaxUrl, async: false,
            data: 'SEQ_NO=' + nSEQ_NO
                + '&STR_TYPE=' + encodeURIComponent(nSTR_TYPE)
                + '&HTML_BODY=' + encodeURIComponent(nHTML_BODY)
                + '&STR_BODY=' + encodeURIComponent(nSTR_BODY)
                + '&CD_MST=' + encodeURIComponent(nCD_MST)
                + '&NEW_FILELIST=' + encodeURIComponent(nNEW_FILELIST)
                + '&DEL_FILELIST=' + encodeURIComponent(nDEL_FILELIST)
                + '&REG_USER=' + $.cookie('ck_Cd_Emp') + '',
            success: // 성공
                function (ReqData) {
                    if (ReqData == "0") {
                        dhtmlx.alert({
                            title: '완료', type: "alert", text: '등록 되었습니다.',
                            callback:
                                function (result) {
                                    setTimeout(function () {   
                                        // parent.parent.dhxTree.deleteChildItems(0);
                                        // parent.parent.dhxTree.load("/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"", function(){
                                        //     setTimeout(function () {   
                                        //         parent.parent.dhxTree.selectItem("M050704", false);
                                        //     }, 100);
                                        // });
                                        parent.parent.dhxTree.refreshItems('M050704', "/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"");
                                        
                                        parent.RealGrid_IT_ProcessList();
                                        parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstDetail', 'N') ;
                                    }, 100);
                                }
                        });
                    }
                    else {
                        ComDhxMessageObj('처리중 오류가 발생했습니다.' + ' (' + ReqData + ')', '');
                    }
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
    }

    function Ajax_IT_Work_User_Change_Proc(nSeqNo, nValue){
        var AjaxUrl = "/MODULE/ITMS/DATA/Proc_IT_Work_User_Change.asp";
        $.ajax({
            type: 'POST', url: AjaxUrl, async: false,
            data: 'SEQ_NO='+nSeqNo
                  +'&WORK_USER='+nValue+'',
            success: // 성공
            function (ReqData) {
                setTimeout(function () {                    
                    parent.parent.dhxTree.refreshItems('M050703', "/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"");                                            
                    parent.RealGrid_IT_ApprovalList();
                    parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstDetail', 'N') ;
                 },500);
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    }

    function Ajax_IT_Work_Combo_GetList(nMajor_Code, nSearchType){
        var nReturn;
        var nThisYear = dhxToolbar2.getListOptionSelected("Year");

        if(nThisYear == undefined) {
            nThisYear = BaseSetDate('','Y');
        } else {
            nThisYear = nThisYear.replace("Y_", "");
        }
        
        var AjaxUrl	= "/MODULE/ITMS/DATA/Ajax_IT_Work_Combo_GetList.asp";
        $.ajax({
            type: 'POST',
            url: AjaxUrl,
            async: false,
            data: 'THIS_YEAR='+nThisYear
                  +'&MAJOR_CODE='+nMajor_Code
                  +'&SEARCH_TYPE='+nSearchType,
            success: // 성공
            function (ReqData) {
                nReturn = ReqData;
            },
            error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
        return nReturn;
    }