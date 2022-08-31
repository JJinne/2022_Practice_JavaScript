
var dhxLayout, dhxLayout1, dhxLayout2, dhxLayout3 ;
var dhxRibbon ;
var dhxTree ;
var dhxGrid ;
var dhxToolbar, dhxToolbar1, dhxToolbar2, dhxToolbar3 ;
var dhxCombo_Type, dhxCombo_Div, dhxCombo_User, dhxCombo_Charge, dhxCombo_Org, dhxCombo_Main_User, dhxCombo_Main_Type ;
var dhxCalendar, dhxCalendar_1 ;
var dhxTabbar, dhxTabbar1 ;
var container, dataProvider, gridContainer, gridView;
var HeaderList;
var ColumnLine;
var DhxListE, DhxListA, DhxListO;
var dhxWins;
var dhxWinsView;
var dhxForm,formData;

	function BaseSetGridResize(){
		$("#objGrid").css("width",$(document.body).width()-12+"px");
		$("#objGrid").css("height",$(document.body).height()-49+"px");
		dhxGrid.setSizes();
    }

    function tmpCookie(nID, nNm, nOrg, nOrgStr){
        $.cookie('ck_Cd_Emp' ,nID, { path : '/' });
        $.cookie('ck_Str_User' ,nNm, { path : '/' });
        $.cookie('ck_Cd_Org' ,nOrg, { path : '/' });
        $.cookie('ck_Str_Org' ,nOrgStr, { path : '/' });
    }
    function BaseSetGridResize(nW, nH) {
        if (typeof nW === "undefined") {
            var nWidth = 10;
            var nHeight = 85;
        }
        else {
            var nWidth = nW;
            var nHeight = nH;
        }
        $("#objGrid").css("width", $(document.body).width() - nWidth + "px");
        $("#objGrid").css("height", $(document.body).height() - nHeight + "px");
    }

	function DhxLayout_Layout(){
		/*** Create Object ****/
		dhxLayout = new dhtmlXLayoutObject({
			parent: document.body,
			pattern: "2U",
			cells: [
				{id: "a", text: "ITMS MENU", collapsed_text: "", header: true, fix_size: [true, true], width:274},
				{id: "b", text: "", collapsed_text: "", header: true, fix_size: [false, false]}
//				{id: "c", text: "", collapsed_text: "", header: false, fix_size: [false, false]}
			]
		});
	    // var data1 = {
		// 	    icons_path: "/IMAGES/ICO/",
		// 	    items:	[
		// 					{	id: "PC", type: 'block', text: 'Management', mode: 'cols',
		// 						list: [	{ id: 'PcList', type: 'button', text: '<div class="LeftRibbonBtn" style="padding-top:5px; width:100px; color:#ff6600; font-weight:bold;">PC 관리대장</div>',  isbig: true,  img: "Dhx/104.png" }]
		// 					},
		// 					{	id: "NET", type: 'block', text: 'List', mode: 'cols',
		// 						list: [	{ id: 'NetworkList', type: 'button', text: '<div style="padding-top:5px;  width:100px;">IP LIST</div>', isbig: true, img: "Dhx/105.png" }]
		// 					}
		// 				]
		// };
	    // /*** Create Object ****/
        // dhxRibbon = dhxLayout.cells('a').attachRibbon(data1);
        // dhxRibbon.attachEvent("onClick", function (id) {
        //     switch (id) {
        //         case "PcList":
        //             dhxTree.selectItem("M050203", true);
        //             break;
        //         case "NetworkList":
        //             dhxTree.selectItem("M050101", true);
        //             break;
        //     }
        // });


		if($.cookie('ck_Ori_Emp') == 'ydyoon' || $.cookie('ck_Ori_Emp') == 'namhy' || $.cookie('ck_Ori_Emp') == 'shinys' || $.cookie('ck_Ori_Emp') == 'kimth') {
			dhxLayout.cells('a').attachStatusBar({
				text:   "<div id='objCombo_User' style='width:100%; margin-top:2px;'></div>"
			});

            if($.cookie('ck_Ori_Emp') == 'ydyoon') {
                dhxCombo_HRM_User = new dhtmlXCombo({
                    parent: "objCombo_User", filter: true, name: "cb_HRM_Type", width: 250,
                    items: [				
                        { value: "yskim", text: "김윤상 대표이사"},
                        { value: "yorhee", text: "이영옥 사업부장" },
                        { value: "smlee", text: "이상민 팀장"},
                        { value: "jonghoon.chung", text: "정종훈 팀장"},
                        { value: "ksk", text: "김기석 팀장"},
                        { value: "jihwanpark", text: "박지환 연구소장"},
                        { value: "kimyhy", text: "김용회 그룹장"},
                        { value: "sgshim", text: "심상기 그룹장"},
                        { value: "rhs1219", text: "유현수 그룹장"},
                        { value: "jykim", text: "김지영 그룹장"},
                        { value: "tarzan", text: "김정화 님"},
                        { value: "shinys", text: "신이삭 님"},
                        { value: "namhy", text: "남홍영 님"},
                        { value: "kimth", text: "김태훈 님"},
                        { value: "ydyoon", text: "윤용대 님"},
                        { value: "parkjh", text: "박진희 님"},
                        { value: "sh.jung", text: "정성현 님"},
                        { value: "jwh", text: "정원호 님"},
                        { value: "shkim", text: "김승환 님"},
                        { value: "ximuoi", text: "담티씨무오이 님"},
                        { value: "choihobyung", text: "최호병 님"},
                        { value: "jaehoon.moon", text: "문재훈 님"},
                        { value: "oys", text: "오용섭 님"},
                        { value: "jschung", text: "정지선 님"},
                        { value: "ng0313", text: "김명훈 님"},
                        { value: "sklee", text: "이세관 님"},
                        { value: "sanghee", text: "박상희 님"},
                        { value: "hsin", text: "인휘식 님"}
                    ]	
                });
            }

            if($.cookie('ck_Ori_Emp') == 'namhy') {
                dhxCombo_HRM_User = new dhtmlXCombo({
                    parent: "objCombo_User", filter: true, name: "cb_HRM_Type", width: 250,
                    items: [				
                        { value: "kimyhy", text: "김용회 그룹장"},
                        { value: "namhy", text: "남홍영 님"}                       
                    ]	
                });
            }

            if($.cookie('ck_Ori_Emp') == 'shinys') {
                dhxCombo_HRM_User = new dhtmlXCombo({
                    parent: "objCombo_User", filter: true, name: "cb_HRM_Type", width: 250,
                    items: [				
                        { value: "kimyhy", text: "김용회 그룹장"},
                        { value: "shinys", text: "신이삭 님"}                       
                    ]	
                });
            }

            if($.cookie('ck_Ori_Emp') == 'kimth') {
                dhxCombo_HRM_User = new dhtmlXCombo({
                    parent: "objCombo_User", filter: true, name: "cb_HRM_Type", width: 250,
                    items: [				
                        { value: "kimyhy", text: "김용회 그룹장"},
                        { value: "kimth", text: "김태훈 님"}                        
                    ]	
                });
            }
			
			dhxCombo_HRM_User.setComboValue($.cookie('ck_Cd_Emp'));

			dhxCombo_HRM_User.attachEvent("onChange", function(value, text){	
				if(value == "yskim") {
					tmpCookie('yskim','김윤상 대표이사','20501','대표이사실');
				} else if(value == "yorhee") {
					tmpCookie('yorhee','이영옥 사업부장','204','IP통신사업부');
				} else if(value == "smlee") {
					tmpCookie('smlee','이상민 팀장','205','경영지원팀');
				} else if(value == "jonghoon.chung") {
					tmpCookie('jonghoon.chung','정종훈 팀장','206','경영전략기획팀');
				} else if(value == "ksk") {
					tmpCookie('ksk','김기석 팀장','210','IT솔루션팀');
				} else if(value == "jihwanpark") {
					tmpCookie('jihwanpark','박지환 연구소장','207','기술연구소');
				} else if(value == "kimyhy") {
					tmpCookie('kimyhy','김용회 그룹장','20504','가치혁신그룹');
				} else if(value == "tarzan") {
					tmpCookie('tarzan','김정화 님','20504','가치혁신그룹');
				} else if(value == "shinys") {
					tmpCookie('shinys','신이삭 님','20504','가치혁신그룹');
				} else if(value == "namhy") {
					tmpCookie('namhy','남홍영 님','20504','가치혁신그룹');
				} else if(value == "kimth") {
					tmpCookie('kimth','김태훈 님','20504','가치혁신그룹');
				} else if(value == "ydyoon") {
					tmpCookie('ydyoon','윤용대 님','21001','IT솔루션그룹');
				} else if(value == "parkjh") {
					tmpCookie('parkjh','박진희 님','21001','IT솔루션그룹');
				} else if(value == "jwh") {
					tmpCookie('jwh','정원호 님','21001','IT솔루션그룹');
				} else if(value == "shkim") {
					tmpCookie('shkim','김승환 님','21001','IT솔루션그룹');
				} else if(value == "sgshim") {
					tmpCookie('sgshim','심상기 그룹장','20602','재경그룹');
				} else if(value == "ng0313") {
					tmpCookie('ng0313','김명훈 님','20602','재경그룹');
				} else if(value == "ximuoi") {
					tmpCookie('ximuoi','담티씨무오이 님','20504','가치혁신그룹');
				} else if(value == "jykim") {
					tmpCookie('jykim','김지영 그룹장','21001','IT솔루션그룹');
				} else if(value == "rhs1219") {
					tmpCookie('rhs1219','유현수 그룹장','20509','구매그룹');
				} else if(value == "sklee") {
					tmpCookie('sklee','이세관 님','207','기술연구소');
				} else if(value == "sanghee") {
					tmpCookie('sanghee','박상희 님','207','기술연구소');
				} else if(value == "hsin") {
					tmpCookie('hsin','인휘식 님','207','기술연구소');
				} else if(value == "jaehoon.moon") {
					tmpCookie('jaehoon.moon','문재훈 님','20509','구매그룹');
				} else if(value == "oys") {
					tmpCookie('oys','오용섭 님','20509','구매그룹');
				} else if(value == "jschung") {
					tmpCookie('jschung','정지선 님','20509','구매그룹');
				} else if(value == "choihobyung") {
					tmpCookie('choihobyung','최호병 님','20509','구매그룹');
				} else if(value == "sh.jung") {
					tmpCookie('sh.jung','정성현 님','296','바이오연구소');
				}
				location.reload();
			});
			
		}
        
	    /*** Create Object ****/
	    dhxTree = dhxLayout.cells("a").attachTree();
	    dhxTree.setImagePath("/LIB/Dhtmlx/imgs/dhxtree_terrace/");
        // dhxTree.load("/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"");
        
        dhxTree.load("/MODULE/ITMS/DATA/XmlForTreeMenu.asp?FLAG=AUTH&CD_MODULE=ITMS&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"", function(){
            dhxTree.selectItem("M050703", true);
        });
        // dhxTree.enableTreeLines(true);
        // dhxTree.enableTreeImages(false);
	    dhxTree.setOnClickHandler(function (id) {
	        var nStr = dhxTree.getItemText(id);
	        switch (id) {
	            case "M050701": // 업무 요청 등록
                    var nHeight = dhxLayout.cells("a").getHeight();            
                    DhxBaseCreateWindowObj('DhxWinIPWorkMstReg', '업무 요청 등록', '/Module/ITMS/IT_Work_Reg.html?/', 0, 0, 1200, nHeight - 100, true, true, 'Y', 'N');
	                break;
                case "M050702": // 업무 요청 문서함
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Request_List.html");
                    break;
                case "M050703": // 결재 수신 문서함
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Approval_Wait_List.html");
                    break;
                case "M050704": // 처리 수신 문서함
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Process_Wait_List.html");
                    break;
                case "M050705": // 결재 문서함
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Approval_Total_List.html");
                    break;
                case "M050706": // 처리 문서함
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Process_Total_List.html");
                    break;
                    case "M050707": // 전사 문서함
                        if (dhxLayout1) {
                            dhxLayout.cells("b").detachObject();
                        }
    
                        dhxLayout1 = dhxLayout.cells("b").attachLayout({
                            pattern: "1C",
                            cells: [
                                { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                            ]
                        });
                        dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Total_List.html");
                        break;
                case "M050799": // IT 업무 관리 설정
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/IT_Work_Setting.html"); 
                    break;
                case "M050101": // IP LIST
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2U",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false], width: 550 },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    RealGrid_Initialization();
                    DhxGrid_IPList();                     
                    RealGrid_GetIPList();       
                    break;
                case "M050102": // NAT LIST
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2U",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false], width: 550 },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    DhxGrid_NATList();
                    break;
                case "M050201": // PC 등록
                    DhxBaseCreateWindowObj('DhxWinPcMstReg', 'PC 등록', '/Module/ITMS/PcMst_Reg.html', 0, 0, 800, 450, true, true, 'Y', 'N');
                    break;
                case "M050202": // PC 목록
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2E",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false] },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/PcMst_List.html");
                    dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
                    break;
                case "M050203": // PC 관리대장
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2U",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false], width: 350 },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    /*** Create Object ****/
                    dhxGrid = dhxLayout1.cells("a").attachGrid();
                    dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
                    dhxGrid.setHeader("ID,이름,부서,CD_DIV,관리PC");
                    dhxGrid.attachHeader("&nbsp;,#text_filter,#combo_filter,#text_filter,#text_filter");
                    dhxGrid.setInitWidths("0,120,120,0,*");
                    dhxGrid.setColAlign("left,left,left,left,left");
                    dhxGrid.setColTypes("ro,ro,ro,ro,ro");
                    dhxGrid.setColSorting("na,str,str,str,str");
                    dhxGrid.init();
                    dhxGrid.attachEvent("onRowSelect", function (id, idd) {
                        var nCD = dhxGrid.cells(id, 0).getValue();
                        var nCD_DIV = dhxGrid.cells(id, 3).getValue();
                        dhxLayout1.cells("b").attachURL("/MODULE/ITMS/Manage_Layout.html?" + nCD + "/" + nCD_DIV + "");
                    });
                    dhxGrid.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_Management_UserList.asp", function () {
                        dhxGrid.forEachRow(function (id) {
                            dhxGrid.setCellTextStyle(id, 1, "color:#0066cc;");
                        });
                    });
                    break;
                case "M050204": // PC 리스트
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false] }
                        ]
                    });
                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/Pc_List.html");
                    break;
                case "M050501": // Table LIST
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2U",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false], width: 450 },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    DhxGrid_TableList();
                    break;
                case "M050601": // License관리
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }
                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "2U",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false], width: 450 },
                            { id: "b", text: "", collapsed_text: "", header: false, fix_size: [false, false] }
                        ]
                    });
                    
                    DhxToolbar_SoftwareList();

                    DhxGrid_SoftwareList();
                    
                    DhxToolbar_UseSoftwareList();
                    break; 
                case "M050602": //IT 구매/계약 관리
                if (dhxLayout1) {
                    dhxLayout.cells("b").detachObject();
                }
                    dhxLayout.cells("b").setText("<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/32/1099.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>");
                    dhxLayout.cells("b").attachURL("/MODULE/ITMS/IT_Deal_List_Layout.html");                  
                    // dhxLayout1.cells("b").hideHeader();
                    // DhxToolbar_IT_DealList();
                    // DhxGrid_IT_DealListSet();
                    // DhxToolbar_IT_Deal_Record();

                    break; 
                case "M990101": //  시스템관리 > 권한관리
                    if (dhxLayout1) {
                        dhxLayout.cells("b").detachObject();
                    }

                    dhxLayout1 = dhxLayout.cells("b").attachLayout({
                        pattern: "1C",
                        cells: [
                            { id: "a", text: "<div style='float:left; padding:6px 0 0 0;'><img src='/IMAGES/ICO/Dhx/106.png' width='20'></div><div style='float:left; padding:0 0 0 10px;'>" + nStr + "</div>", collapsed_text: nStr, header: true, fix_size: [false, false] }
                        ]
                    });

                    dhxLayout1.cells("a").attachURL("/MODULE/ITMS/Auth_Layout.html");      
                    break;              
	        }
        });
        dhxTree.selectItem("M050702", true);
	}

	function DhxGrid_PcMstList(){
		/*** Create Object ****/
		dhxToolbar = new dhtmlXToolbarObject({
			parent: "objToolbar",
			icons_path: "/IMAGES/ICO/"
		});
		var opts			= [['CD_PC', 'obj', '관리번호', ''],['NO_MODEL', 'obj', '모델명', ''],['DATE_BUY', 'obj', '구입일', '']];
		var opts2		= [['', 'obj', '전체', ''],['Y', 'obj', '정상', ''],['H', 'obj', '점검', ''],['D', 'obj', '폐기', '']];
		dhxToolbar.addText("Count", 1, "ROWS");
		dhxToolbar.addButtonSelect("Field", 10, "", opts, "", "",true, true, 6,"select");
		dhxToolbar.setListOptionSelected("Field", "CD_PC");
		dhxToolbar.setWidth("Field", 100);
		dhxToolbar.addInput("Keyword", 20, "", 140);
		dhxToolbar.addButton("Search", 30, "", "/32/861.png", "");
		dhxToolbar.addSeparator("sep30", 31);
		dhxToolbar.addButtonSelect("Status", 41, "", opts2, "", "",true, true, 6,"select");
		dhxToolbar.setListOptionSelected("Status", "");
		dhxToolbar.setWidth("Status", 80);
		dhxToolbar.addButton("Reload", 60, "", "/Dhx/25.png", "");
		dhxToolbar.addSpacer("Count");
		dhxToolbar.attachEvent("onEnter", function(id, value) {
			DhxGrid_PcMstListLoad();
			parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
		});
		dhxToolbar.attachEvent("onClick", function(id) {
			if (id == "Reload"){
				location.reload();
				parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
			}
			else {
				DhxGrid_PcMstListLoad();
				parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
			}
		});
		/*** Create Object ****/
		dhxGrid = new dhtmlXGridObject('objGrid');
		dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid.setHeader("순번,관리번호,구분,사용여부,<strong>제품정보</strong>,#cspan,#cspan,<strong>제품스팩</strong>,#cspan,#cspan,#cspan,#cspan,용도,<strong>사용자정보</strong>,#cspan,#cspan,#cspan,사용목적,위치,비고");
        dhxGrid.attachHeader(["#rspan", "#rspan", "#rspan", "#rspan", "제조사", "구입년월", "모델명", "CPU", "VGA", "RAM", "SSD", "HDD", "#rspan", "취득년월", "사용부서", "사용자", "관리책임자", "#rspan", "#rspan", "#rspan"]);
        dhxGrid.setInitWidths("40,100,80,80,100,80,120,150,150,60,60,60,80,80,120,100,100,150,150,150");
        dhxGrid.setColAlign("center,center,center,center,left,center,left,left,left,left,left,left,center,center,left,left,left,left,left,left");
        dhxGrid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
        dhxGrid.setColSorting("str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str");    
		dhxGrid.init();
		dhxGrid.attachEvent("onRowSelect",function(id, idd){
			var nCD		= dhxGrid.cells(id, 1).getValue();
			parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?"+encodeURIComponent(nCD)+"");
		});
		DhxGrid_PcMstListLoad();
	}

	function DhxToolbar_PcMstReg(){
		$('.input01').focus(function() { 	$(this).removeClass("input01"); $(this).addClass("input01_over");	$(this).select();	})
		.blur(function(){ 	$(this).removeClass("input01_over"); $(this).addClass("input01"); });
		/*** Create Object ****/
		dhxToolbar1 = new dhtmlXToolbarObject({
			parent: "objToolbar",
			icons_path: "/IMAGES/ICO/"
        });

        var opts2 = [['Y', 'obj', '사용', ''], ['N', 'obj', '미사용', ''], ['D', 'obj', '폐기', '']];
        dhxToolbar1.addButtonSelect("Status", 41, "", opts2, "", "", true, true, 6, "select");
        dhxToolbar1.setListOptionSelected("Status", "Y");
		dhxToolbar1.addButton("Reg", 1, "등록", "/Dhx/108.png", "");
		dhxToolbar1.addButton("Cancel", 2, "취소", "/Dhx/109.png", "");
        dhxToolbar1.setIconSize("24");
        dhxToolbar1.addSpacer("Status");
		dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Reg") {
                var nReturn = Jq_PcMstRegValidity();
                (nReturn == true) ? Jq_PcMstRegSubmit() : '';
				
			}
			else {
				parent.DhxBaseCloseWindowObj('DhxWinPcMstReg', 'Y') ;
			}
	    });
		/*** Create Object ****/
		dhxCombo_Type = new dhtmlXCombo({
			parent: "objCombo_Type", filter: true, name: "cb_CD_TYPE",
			items: [
				{value: "", text: "선택", selected: true},
				{value: "Desktop", text: "Desktop"},
				{value: "Notebook", text: "Notebook"},
				{value: "Server", text: "Server"}
			]
		});
		dhxCombo_Type.attachEvent("onChange", function(value, text){
		});
		/*** Create Object ****/
		dhxCombo_Div = new dhtmlXCombo({
			parent: "objCombo_Div", filter: true, name: "cb_DIV",
			items: [
				{value: "", text: "선택", selected: true},
				{value: "개인업무", text: "개인업무"},
				{value: "공용", text: "공용"},
				{value: "개발", text: "개발"},
				{value: "테스트", text: "테스트"},
				{value: "서비스", text: "서비스"},
				{value: "관리", text: "관리"},
				{value: "경비", text: "경비"}
			]
		});
		dhxCombo_Div.attachEvent("onChange", function(value, text){
            if (value == "개인업무") {
                dhxCombo_User.enable();
                dhxCombo_Org.disable();
                document.getElementById("STR_USE").disabled = true;
                dhxCombo_Org.setComboValue("");
                document.getElementById("STR_USE").value = "";
                //$("#objUser").show();
                //$("#objOrg").hide();
            }
            else {
                dhxCombo_User.disable();
                dhxCombo_Org.enable();
                document.getElementById("STR_USE").disabled = false;
                dhxCombo_User.setComboValue("");
                //$("#objUser").hide();
                //$("#objOrg").show();
            }
		});
		/*** Create Object ****/
		var arryUser		= [];
		var nUsers			= Ajax_ComboListUser();
		var nRow			= nUsers.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_STR_ID  			= nCol[0] ;
			var s_STR_USER  		= nCol[1] ;
			var s_STR_POS  		= nCol[2] ;
			arryUser.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS});
		});
		dhxCombo_User = new dhtmlXCombo({
			parent: "objCombo_User", filter: true, name: "cb_USER", width: 150,
		});
		dhxCombo_User.addOption([{value:"", text:"선택", selected: true}]);
		dhxCombo_User.addOption(arryUser);
		/*** Create Object ****/
		var arryCharge		= [];
		var nCharge			= Ajax_ComboListUser();
		var nRow				= nCharge.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_STR_ID  			= nCol[0] ;
			var s_STR_USER  		= nCol[1] ;
			var s_STR_POS  		= nCol[2] ;
			if ($.cookie('ck_Cd_Emp') == s_STR_ID){
				arryCharge.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS, selected: true});
			}
			else{
				arryCharge.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS});
			}
		});
		dhxCombo_Charge = new dhtmlXCombo({
			parent: "objCombo_Charge", filter: true, name: "cb_CHARGE", width: 150,
		});
		dhxCombo_Charge.addOption(arryCharge);
		/*** Create Object ****/
		var arryOrg		= [];
		var nOrg			= Ajax_ComboListOrg();
		var nRow			= nOrg.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_CD_ORG  			= nCol[0] ;
			var s_STR_ORG  		= nCol[1] ;
			arryOrg.push({value:s_CD_ORG, text:s_STR_ORG});
		});
		dhxCombo_Org = new dhtmlXCombo({
			parent: "objCombo_Org", filter: true, name: "cb_ORG", width: 180,
		});
		dhxCombo_Org.addOption([{value:"", text:"선택", selected: true}]);
		dhxCombo_Org.addOption(arryOrg);

		/*** Create Object ****/
	    dhtmlXCalendarObject.prototype.langData["ko"] = {
	        dateformat: '%Y-%m-%d',
	        monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
	        monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
	        daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
	        daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
	        weekstart: 7
	    }
        var dhxCalendar = new dhtmlXCalendarObject(["DATE_BUY","DATE_SET"]);
	    dhxCalendar.setSkin("dhx_skyblue");
	    dhxCalendar.loadUserLanguage("ko");
	    dhxCalendar.hideTime();

		/*** Create Object ****/
		dhxTabbar1 = new dhtmlXTabBar({
			parent:	"objTabbar",
			arrows_mode:   "auto",
			tabs: [
				{id: "Default", text: "기본 정보", active: true},
				{id: "Detail", text: "사용 정보"},
				{id: "Log", text: "로그 정보"}
			]
		});
		dhxTabbar1.tabs("Default").attachObject("objDefault");
		dhxTabbar1.tabs("Detail").attachObject("objDetail");
		dhxTabbar1.tabs("Log").attachObject("objLog");
	}

	function DhxGrid_PcMstListLoad(){
		var nStatus		= dhxToolbar.getListOptionSelected("Status");
		var nField			= dhxToolbar.getListOptionSelected("Field");
		var nKeyword		= dhxToolbar.getValue("Keyword");
	    var loadUrl			= "/MODULE/ITMS/DATA/XmlForGrid_PcMstList.asp?CD_STATUS="+nStatus+"&STR_FIELD="+nField+"&STR_KEY="+encodeURIComponent(nKeyword)+"";
	    dhxGrid.clearAndLoad(loadUrl, function(){
	        dhxGrid.forEachRow(function (id) {
				var sStt		= dhxGrid.cells(id, 9).getValue();
	            dhxGrid.setCellTextStyle(id, 0, "color:#339933; font-weight:bold;");
				if (sStt == "정상"){
					dhxGrid.setCellTextStyle(id, 9, "color:#0066ff; font-weight:bold;");
					dhxGrid.setCellTextStyle(id, 0, "color:#0066ff; font-weight:bold;");
				}
				else if (sStt == "폐기"){
					dhxGrid.setCellTextStyle(id, 9, "color:#cc0000; font-weight:bold;");
					dhxGrid.setCellTextStyle(id, 0, "color:#cc0000; font-weight:bold;");
				}
				else {
					dhxGrid.setCellTextStyle(id, 9, "color:#808080; font-weight:bold;");
					dhxGrid.setCellTextStyle(id, 0, "color:#808080; font-weight:bold;");
				}
	        });
			dhxToolbar.setItemText("Count", "<strong style='color:#ff6600;'>ROWS : "+dhxGrid.getRowsNum()+"</strong> ");
		});
	}

    // PC 목록 View
	function DhxTabbar_PcMstView(nCD){
		$('.input01').focus(function() { 	$(this).removeClass("input01"); $(this).addClass("input01_over");	$(this).select();	})
		.blur(function(){ 	$(this).removeClass("input01_over"); $(this).addClass("input01"); });
		/*** Create Object ****/
		dhxToolbar2 = new dhtmlXToolbarObject({
			parent: "objToolbar",
			icons_path: "/IMAGES/ICO/"
        });
        var opts2 = [['Y', 'obj', '사용', ''], ['N', 'obj', '미사용', ''], ['D', 'obj', '폐기', '']];
        dhxToolbar2.addText("", 0, "관리번호 : ");
        dhxToolbar2.addText("CD_PC", 1, "");
        dhxToolbar2.addSeparator("sep", 2);
		dhxToolbar2.addButtonSelect("Status", 3, "", opts2, "", "",true, true, 6,"select");
		dhxToolbar2.setListOptionSelected("Status", "Y");
		dhxToolbar2.setWidth("Status", 100);
		dhxToolbar2.addButton("Save", 4, "<strong>저장</strong>", "/Dhx/27.png", "");
		dhxToolbar2.addSpacer("Status");
        dhxToolbar2.attachEvent("onClick", function (id) {
            if (id == "Save") {

                var nReturn = Jq_PcMstRegModifyValidity();
                (nReturn == true) ? Jq_PcMstRegModify() : '';
			}
			else {
				$("#CD_STATUS").val(id);
			}
	    });

		/*** Create Object ****/
		dhxCombo_Type = new dhtmlXCombo({
			parent: "objCombo_Type", filter: true, name: "cb_CD_TYPE",
			items: [
				{value: "", text: "선택", selected: true},
				{value: "Desktop", text: "Desktop"},
				{value: "Notebook", text: "Notebook"},
				{value: "Server", text: "Server"}
			]
		});
		dhxCombo_Type.attachEvent("onChange", function(value, text){
		});
		/*** Create Object ****/
		dhxCombo_Div = new dhtmlXCombo({
			parent: "objCombo_Div", filter: true, name: "cb_DIV",
			items: [
				{value: "", text: "선택", selected: true},
                {value: "개인업무", text: "개인업무"},
				{value: "공용", text: "공용"},
				{value: "개발", text: "개발"},
				{value: "테스트", text: "테스트"},
				{value: "서비스", text: "서비스"},
				{value: "관리", text: "관리"},
				{value: "경비", text: "경비"}
			]
		});
		dhxCombo_Div.attachEvent("onChange", function(value, text){
            if (value == "개인업무") {
                dhxCombo_User.enable();
                dhxCombo_Org.disable();
                document.getElementById("STR_USE").disabled = true;
                dhxCombo_Org.setComboValue("");
                document.getElementById("STR_USE").value = "";
                //$("#objUser").show();
                //$("#objOrg").hide();
            }
            else {
                dhxCombo_User.disable();
                dhxCombo_Org.enable();
                document.getElementById("STR_USE").disabled = false;
                dhxCombo_User.setComboValue("");
                //$("#objUser").hide();
                //$("#objOrg").show();
            }
		});
		/*** Create Object ****/
		var arryUser		= [];
		var nUsers			= Ajax_ComboListUser();
		var nRow			= nUsers.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_STR_ID  			= nCol[0] ;
			var s_STR_USER  		= nCol[1] ;
			var s_STR_POS  		= nCol[2] ;
			arryUser.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS});
		});
		dhxCombo_User = new dhtmlXCombo({
			parent: "objCombo_User", filter: true, name: "cb_USER", width: 150,
		});
		dhxCombo_User.addOption([{value:"", text:"선택", selected: true}]);
		dhxCombo_User.addOption(arryUser);
		/*** Create Object ****/
		var arryCharge		= [];
		var nCharge			= Ajax_ComboListUser();
		var nRow				= nCharge.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_STR_ID  			= nCol[0] ;
			var s_STR_USER  		= nCol[1] ;
			var s_STR_POS  		= nCol[2] ;
			if ($.cookie('ck_Cd_Emp') == s_STR_ID){
				arryCharge.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS, selected: true});
			}
			else{
				arryCharge.push({value:s_STR_ID, text: s_STR_USER+" "+s_STR_POS});
			}
		});
		dhxCombo_Charge = new dhtmlXCombo({
			parent: "objCombo_Charge", filter: true, name: "cb_CHARGE", width: 150,
		});
		dhxCombo_Charge.addOption(arryCharge);
		/*** Create Object ****/
		var arryOrg		= [];
		var nOrg			= Ajax_ComboListOrg();
		var nRow			= nOrg.split("<,>");
		$.each(nRow,function(No){
			var nCol						= nRow[No].split("</>");
			var s_CD_ORG  			= nCol[0] ;
			var s_STR_ORG  		= nCol[1] ;
			arryOrg.push({value:s_CD_ORG, text:s_STR_ORG});
		});
		dhxCombo_Org = new dhtmlXCombo({
			parent: "objCombo_Org", filter: true, name: "cb_ORG", width: 180,
		});
		dhxCombo_Org.addOption([{value:"", text:"선택", selected: true}]);
		dhxCombo_Org.addOption(arryOrg);

		/*** Create Object ****/
	    dhtmlXCalendarObject.prototype.langData["ko"] = {
	        dateformat: '%Y-%m-%d',
	        monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
	        monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
	        daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
	        daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
	        weekstart: 7
	    }
        var dhxCalendar = new dhtmlXCalendarObject(["DATE_BUY", "DATE_SET"]);
	    dhxCalendar.setSkin("dhx_skyblue");
	    dhxCalendar.loadUserLanguage("ko");
	    dhxCalendar.hideTime();

		/*** Create Object ****/
		dhxTabbar1 = new dhtmlXTabBar({
			parent:	"objTabbar",
			arrows_mode:   "auto",
			tabs: [
				{id: "Default", text: "기본 정보", active: true},
				{id: "Detail", text: "사용 정보"},
				{id: "Log", text: "로그 정보"},
				{id: "Main", text: "정비 이력"}
			]
        });

        /*** Create Object -- 정비 이력 ****/
        var dhxCalendar_1 = new dhtmlXCalendarObject(["DATE_MAIN"]);
        dhxCalendar_1.setSkin("dhx_skyblue");
        dhxCalendar_1.loadUserLanguage("ko");
        dhxCalendar_1.hideTime();

        var arryMainUser = [];
        var nMainUsers = Ajax_ComboListUser();
        var nRow = nMainUsers.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];

            if ($.cookie('ck_Cd_Emp') == s_STR_ID) {
                arryMainUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS, selected: true });
            }
            else {
                arryMainUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
            }
        });
        dhxCombo_Main_User = new dhtmlXCombo({
            parent: "objCombo_MainUser", filter: true, name: "cb_USER", width: 150,
        });
        dhxCombo_Main_User.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_Main_User.addOption(arryMainUser);
        
        dhxCombo_Main_Type = new dhtmlXCombo({
            parent: "objCombo_MainType", filter: true, name: "cb_MainType",
            items: [
                { value: "", text: "선택", selected: true },
                { value: "OS", text: "OS" },
                { value: "부품교체", text: "부품교체" },
                { value: "기타", text: "기타" }
            ]
        });

		dhxTabbar1.tabs("Default").attachObject("objDefault");
		dhxTabbar1.tabs("Detail").attachObject("objDetail");
        dhxTabbar1.tabs("Log").attachObject("objLog");
        dhxTabbar1.tabs("Main").attachObject("objMaintenance");

		
	}


	function DhxGrid_ManageList(){
//		parent.dhxLayout1.cells("a").progressOn();
		/*** Create Object ****/
		dhxToolbar = new dhtmlXToolbarObject({
			parent: "objToolbar",
			icons_path: "/IMAGES/ICO/",
			align:"right"
		});
		dhxToolbar.addButton("Reload", 60, "PC 등록", "/Dhx/25.png", "");
		dhxToolbar.attachEvent("onClick", function(id) {
			if (id == "Reload"){
				location.reload();
				parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
			}
			else {
				DhxGrid_PcMstListLoad();
				parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?/");
			}
		});
		/*** Create Object ****/
		dhxGrid = new dhtmlXGridObject('objGrid');
		dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
		dhxGrid.setHeader("관리번호,구분,모델명,CPU,MEMORY,SSD,HDD,VGA,구입일,상태");
		dhxGrid.setInitWidths("100,80,150,100,90,90,90,*,100,80");
		dhxGrid.setColAlign("left,left,left,left,left,left,left,left,left,left");
		dhxGrid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro");
		dhxGrid.setColSorting("str,str,str,str,str,str,str,str,str,str");
		dhxGrid.init();
		dhxGrid.attachEvent("onRowSelect",function(id, idd){
			var nCD		= dhxGrid.cells(id, 0).getValue();
			parent.dhxLayout1.cells("b").attachURL("/MODULE/ITMS/PcMst_View.html?"+encodeURIComponent(nCD)+"");
		});
	}

    function DhxLayout_Manage(nCD, nCD_DIV) {
        /*** Create Object ****/
        dhxLayout2 = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: "5K",
            cells: [
                { id: "a", text: "PC", collapsed_text: "", header: true, fix_size: [false, false], width: 300 },
                { id: "b", text: "MONITOR", collapsed_text: "", header: true, fix_size: [false, false] },
                { id: "c", text: "기타", collapsed_text: "", header: true, fix_size: [false, false] },
                { id: "d", text: "상제정보", collapsed_text: "", header: true, fix_size: [false, false], height: 435 },
                { id: "e", text: "정비내역", collapsed_text: "", header: true, fix_size: [false, false] }
            ]
        });

        /*** Create Object ****/
        dhxGrid = dhxLayout2.cells("a").attachGrid();
        dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid.setHeader("관리번호,구분,구입일");
        dhxGrid.setInitWidths("100,100,*");
        dhxGrid.setColAlign("left,left,center");
        dhxGrid.setColTypes("ro,ro,ro");
        dhxGrid.setColSorting("na,str,str");
        dhxGrid.init();
        dhxGrid.attachEvent("onRowSelect", function (id, idd) {
            var nCD = dhxGrid.cells(id, 0).getValue();     
            DhxLayout_MonitorList();
            DhxLayout_EtcList();
            dhxLayout2.cells("d").attachURL("/MODULE/ITMS/PcManageDetail.html?" + encodeURIComponent(nCD) + "");
            DhxLayout_MaintenanceList();
        });
        dhxGrid.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_User_Pc_List.asp?USER_ID=" + encodeURIComponent(nCD) + "&CD_DIV=" + encodeURIComponent(nCD_DIV), function () {
            dhxGrid.forEachRow(function (id) {
            });
        });
        
        /*** Create Object(PC 관리대장->MONITOR) ****/
        dhxToolbar = dhxLayout2.cells("b").attachToolbar();
        dhxToolbar.setAlign("right");
        dhxToolbar.addButton("Monitor_Add", 60, "추가", "", "");
        dhxToolbar.addButton("Monitor_Del", 60, "삭제", "", "");
        dhxToolbar.attachEvent("onClick", function (id) {
            var CD_PC = dhxGrid.getSelectedId();
            if (CD_PC == null) {
                DhxMessageObj('PC를 선택해 주세요..', '');
                return;
            }

            if (id == "Monitor_Add") {
                DhxBaseCreateWindowObj('DhxWinMonitorMstReg', '모니터 등록', '/Module/ITMS/MonitorMst_Reg.html', 0, 0, 800, 190, true, true, 'Y', 'N');
            } else {
                dhtmlx.confirm({
                    title: "Warning",
                    type: "confirm-error",
                    text: "삭제 하겠습니까?",
                    ok: "확인",
                    cancel: "취소",
                    callback:
                    function (result) {
                        if (result == true) {                            
                            var id = dhxGrid.getSelectedId();
                            var nCD_PC = dhxGrid.cells(id, 0).getValue();

                            for (i = 1; i <= dhxGrid_1.getRowsNum(); i++) {
                                if (dhxGrid_1.cells(i, 0).getValue() == 1) {
                                    var nCD_MONITOR = dhxGrid_1.cells(i, 2).getValue()

                                    Jq_MonitorMstDelSubmit(nCD_PC, nCD_MONITOR);
                                }
                            }
                            setTimeout(function () {
                                DhxLayout_MonitorList();
                            }, 100);
                        }
                        else {
                            return;
                        }
                    }
                });
                
            }
        });

        /*** Create Object(PC 관리대장->기타) ****/
        dhxToolbar_1 = dhxLayout2.cells("c").attachToolbar();
        dhxToolbar_1.setAlign("right");
        dhxToolbar_1.addButton("Etc_Add", 60, "추가", "", "");
        dhxToolbar_1.addButton("Etc_Del", 60, "삭제", "", "");
        dhxToolbar_1.attachEvent("onClick", function (id) {
            var CD_PC = dhxGrid.getSelectedId();
            if (CD_PC == null) {
                DhxMessageObj('PC를 선택해 주세요..', '');
                return;
            }

            if (id == "Etc_Add") {
                DhxBaseCreateWindowObj('DhxWinEtcMstReg', '기타 등록', '/Module/ITMS/EtcMst_Reg.html', 0, 0, 800, 190, true, true, 'Y', 'N');
            } else {

                dhtmlx.confirm({
                    title: "Warning",
                    type: "confirm-error",
                    text: "삭제 하겠습니까?",
                    ok: "확인",
                    cancel: "취소",
                    callback:
                    function (result) {
                        if (result == true) {
                            var id = dhxGrid.getSelectedId();
                            var nCD_PC = dhxGrid.cells(id, 0).getValue();

                            for (i = 1; i <= dhxGrid_2.getRowsNum(); i++) {
                                if (dhxGrid_2.cells(i, 0).getValue() == 1) {
                                    var nSEQ_NO = dhxGrid_2.cells(i, 1).getValue()

                                    Jq_EtcMstDelSubmit(nCD_PC, nSEQ_NO);
                                }
                            }
                            setTimeout(function () {
                                DhxLayout_EtcList();
                            }, 100);
                        }
                        else {
                            return;
                        }
                    }
                });

            }
        });

        /*** Create Object(PC 관리대장->정비내역) ****/
        dhxToolbar_2 = dhxLayout2.cells("e").attachToolbar();
        dhxToolbar_2.setAlign("right");
        dhxToolbar_2.addButton("Maintenance_Add", 60, "추가", "", "");
        dhxToolbar_2.attachEvent("onClick", function (id) {
            var CD_PC = dhxGrid.getSelectedId();
            if (CD_PC == null) {
                DhxMessageObj('PC를 선택해 주세요..', '');
                return;
            }

            if (id == "Maintenance_Add") {
                DhxBaseCreateWindowObj('DhxWinMaintenanceMstReg', '정비내역 등록', '/Module/ITMS/MaintenanceMst_Reg.html?', 0, 0, 800, 380, true, true, 'Y', 'N');
            } 
        });
    }

    // PC관리대장 -> 모니터 그리드 조회
    function DhxLayout_MonitorList() {
        var id = dhxGrid.getSelectedId();
        var nCD_PC = dhxGrid.cells(id, 0).getValue();

        dhxGrid_1 = dhxLayout2.cells("b").attachGrid();
        dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_1.setHeader(",CD_MONITOR,관리번호,제조사,크기");
        dhxGrid_1.setInitWidths("30,0,100,100,*");
        dhxGrid_1.setColAlign("left,left,left,left,center");
        dhxGrid_1.setColTypes("ch,ro,ro,ro,ro");
        dhxGrid_1.setColSorting("ch,na,str,str,str");
        dhxGrid_1.init();
        dhxGrid_1.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_User_Moniter_List.asp?CD_PC=" + encodeURIComponent(nCD_PC), function () {
            dhxGrid_1.forEachRow(function (id) {
            });
        });
    }

    // PC관리대장 -> 모니터 추가 팝업
    function DhxToolbar_MonitorMstReg() {
        var id = parent.dhxGrid.getSelectedId();
        var nCD_PC = parent.dhxGrid.cells(id, 0).getValue();
        
        $('#CD_PC').val(nCD_PC);

        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbar1.addButton("Reg", 1, "등록", "/Dhx/108.png", "");
        dhxToolbar1.addButton("Cancel", 2, "취소", "/Dhx/109.png", "");
        dhxToolbar1.setIconSize("24");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Reg") {
                Jq_MonitorMstRegSubmit();
            }
            else {
                parent.DhxBaseCloseWindowObj('DhxWinMonitorMstReg', 'Y');
            }
        });
    }

    // PC관리대장 -> 기타 그리드 조회
    function DhxLayout_EtcList() {
        var id = dhxGrid.getSelectedId();
        var nCD_PC = dhxGrid.cells(id, 0).getValue();

        dhxGrid_2 = dhxLayout2.cells("c").attachGrid();
        dhxGrid_2.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_2.setHeader(",SEQ_NO,일자,비고");
        dhxGrid_2.setInitWidths("30,0,80,*");
        dhxGrid_2.setColAlign("center,left,left,left");
        dhxGrid_2.setColTypes("ch,ro,ro,ro");
        dhxGrid_2.setColSorting("ch,na,str,str");
        dhxGrid_2.init();
        dhxGrid_2.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_User_Etc_List.asp?CD_PC=" + encodeURIComponent(nCD_PC), function () {
            dhxGrid_1.forEachRow(function (id) {
            });
        });
    }

    // PC관리대장 -> 기타 추가 팝업
    function DhxToolbar_EtcMstReg() {
        var id = parent.dhxGrid.getSelectedId();
        var nCD_PC = parent.dhxGrid.cells(id, 0).getValue();

        $('#CD_PC').val(nCD_PC);

        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbar1.addButton("Reg", 1, "등록", "/Dhx/108.png", "");
        dhxToolbar1.addButton("Cancel", 2, "취소", "/Dhx/109.png", "");
        dhxToolbar1.setIconSize("24");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Reg") {
                Jq_EtcMstRegSubmit();
            }
            else {
                parent.DhxBaseCloseWindowObj('DhxWinEtcMstReg', 'Y');
            }
        });
    }

    // PC관리대장 -> 상세정보
    function DhxTabbar_PcDetailView(nCD) {
        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar2 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/"
        });
        var opts2 = [['Y', 'obj', '사용', ''], ['N', 'obj', '미사용', ''], ['D', 'obj', '폐기', '']];
        dhxToolbar2.addText("", 0, "관리번호 : ");
        dhxToolbar2.addText("CD_PC", 1, "");
        dhxToolbar2.addSeparator("sep", 2);
        dhxToolbar2.addButtonSelect("Status", 3, "", opts2, "", "", true, true, 6, "select");
        dhxToolbar2.setListOptionSelected("Status", "Y");
        dhxToolbar2.setWidth("Status", 90);
        dhxToolbar2.addButton("Save", 4, "<strong>저장</strong>", "/Dhx/27.png", "");
        dhxToolbar2.addSpacer("Status");
        dhxToolbar2.attachEvent("onClick", function (id) {
            if (id == "Save") {

                var nReturn = Jq_PcDetailValidity();
                (nReturn == true) ? Jq_PcDetailModify() : '';
            }
            else {
                $("#CD_STATUS").val(id);
            }
        });

        /*** Create Object ****/
        dhxCombo_Type = new dhtmlXCombo({
            parent: "objCombo_Type", filter: true, name: "cb_CD_TYPE",
            items: [
                { value: "", text: "선택", selected: true },
                { value: "Desktop", text: "Desktop" },
                { value: "Notebook", text: "Notebook" },
                { value: "Server", text: "Server" }
            ]
        });
        dhxCombo_Type.attachEvent("onChange", function (value, text) {
        });
        /*** Create Object ****/
        dhxCombo_Div = new dhtmlXCombo({
            parent: "objCombo_Div", filter: true, name: "cb_DIV",
            items: [
                { value: "", text: "선택", selected: true },
                { value: "개인업무", text: "개인업무" },
                { value: "공용", text: "공용" },
                { value: "개발", text: "개발" },
                { value: "테스트", text: "테스트" },
                { value: "서비스", text: "서비스" },
                { value: "관리", text: "관리" },
                { value: "경비", text: "경비" }
            ]
        });
        dhxCombo_Div.attachEvent("onChange", function (value, text) {
            if (value == "개인업무") {
                dhxCombo_User.enable();
                dhxCombo_Org.disable();
                document.getElementById("STR_USE").disabled = true;
                dhxCombo_Org.setComboValue("");
                document.getElementById("STR_USE").value = "";
                //$("#objUser").show();
                //$("#objOrg").hide();
            }
            else {
                dhxCombo_User.disable();
                dhxCombo_Org.enable();
                document.getElementById("STR_USE").disabled = false;
                dhxCombo_User.setComboValue("");
                //$("#objUser").hide();
                //$("#objOrg").show();
            }
        });
        /*** Create Object ****/
        var arryUser = [];
        var nUsers = Ajax_ComboListUser();
        var nRow = nUsers.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];
            arryUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
        });
        dhxCombo_User = new dhtmlXCombo({
            parent: "objCombo_User", filter: true, name: "cb_USER", width: 150,
        });
        dhxCombo_User.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_User.addOption(arryUser);
        /*** Create Object ****/
        var arryCharge = [];
        var nCharge = Ajax_ComboListUser();
        var nRow = nCharge.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];
            if ($.cookie('ck_Cd_Emp') == s_STR_ID) {
                arryCharge.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS, selected: true });
            }
            else {
                arryCharge.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
            }
        });
        dhxCombo_Charge = new dhtmlXCombo({
            parent: "objCombo_Charge", filter: true, name: "cb_CHARGE", width: 150,
        });
        dhxCombo_Charge.addOption(arryCharge);
        /*** Create Object ****/
        var arryOrg = [];
        var nOrg = Ajax_ComboListOrg();
        var nRow = nOrg.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_CD_ORG = nCol[0];
            var s_STR_ORG = nCol[1];
            arryOrg.push({ value: s_CD_ORG, text: s_STR_ORG });
        });
        dhxCombo_Org = new dhtmlXCombo({
            parent: "objCombo_Org", filter: true, name: "cb_ORG", width: 180,
        });
        dhxCombo_Org.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_Org.addOption(arryOrg);

        /*** Create Object ****/
        dhtmlXCalendarObject.prototype.langData["ko"] = {
            dateformat: '%Y-%m-%d',
            monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
            monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
            daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
            daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
            weekstart: 7
        }
        var dhxCalendar = new dhtmlXCalendarObject(["DATE_BUY", "DATE_SET"]);
        dhxCalendar.setSkin("dhx_skyblue");
        dhxCalendar.loadUserLanguage("ko");
        dhxCalendar.hideTime();

        /*** Create Object ****/
        dhxTabbar1 = new dhtmlXTabBar({
            parent: "objTabbar",
            arrows_mode: "auto",
            tabs: [
                { id: "Default", text: "기본 정보", active: true },
                { id: "Detail", text: "사용 정보" },
                { id: "Log", text: "로그 정보" }
            ]
        });
        
        dhxTabbar1.tabs("Default").attachObject("objDefault");
        dhxTabbar1.tabs("Detail").attachObject("objDetail");
        dhxTabbar1.tabs("Log").attachObject("objLog");

        
    }

    // PC관리대장 -> 정비내역 그리드 조회
    function DhxLayout_MaintenanceList() {
        var id = dhxGrid.getSelectedId();
        var nCD_PC = dhxGrid.cells(id, 0).getValue();

        dhxGrid_3 = dhxLayout2.cells("e").attachGrid();
        dhxGrid_3.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_3.setHeader(",SEQ_NO,정비일,담당자,구분,설명");
        dhxGrid_3.setInitWidths("0,0,80,80,80,*");
        dhxGrid_3.setColAlign("center,left,center,center,left,left");
        dhxGrid_3.setColTypes("ch,ro,ro,ro,ro,ro");
        dhxGrid_3.setColSorting("ch,na,str,str,str,str");
        dhxGrid_3.init();
        dhxGrid_3.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_User_Maintenance_List.asp?CD_PC=" + encodeURIComponent(nCD_PC), function () {
            dhxGrid_3.forEachRow(function (id) {
            });
        });
        dhxGrid_3.attachEvent("onRowDblClicked", function (id, idd) {
            var nSEQ_NO = dhxGrid_3.cells(id, 1).getValue();            
            DhxBaseCreateWindowObj('DhxWinMaintenanceMstReg', '정비내역 등록', '/Module/ITMS/MaintenanceMst_Reg.html?' + nSEQ_NO, 0, 0, 800, 380, true, true, 'Y', 'N');
        });
    }

    // PC관리대장 -> 정비내역 추가 팝업
    function DhxToolbar_MaintenanceMstReg(nSeq_No) {
        var id = parent.dhxGrid.getSelectedId();
        var nCD_PC = parent.dhxGrid.cells(id, 0).getValue();

        $('#CD_PC').val(nCD_PC);

        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbar1.addButton("Reg", 1, "저장", "/Dhx/108.png", "");
        dhxToolbar1.addButton("Cancel", 2, "취소", "/Dhx/109.png", "");
        dhxToolbar1.setIconSize("24");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Reg") {
                if (nSeq_No == "") {
                    Jq_MaintenanceMstRegSubmit();
                } else {
                    Jq_MaintenanceMstModifySubmit();
                }
                
            }
            else {
                parent.DhxBaseCloseWindowObj('DhxWinMaintenanceMstReg', 'Y');
            }
        });

        /*** Create Object -- 정비 이력 ****/
        var dhxCalendar_1 = new dhtmlXCalendarObject(["DATE_MAIN"]);
        dhxCalendar_1.setSkin("dhx_skyblue");
        dhxCalendar_1.loadUserLanguage("ko");
        dhxCalendar_1.hideTime();

        var arryMainUser = [];
        var nMainUsers = Ajax_ComboListUser();
        var nRow = nMainUsers.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];

            if ($.cookie('ck_Cd_Emp') == s_STR_ID) {
                arryMainUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS, selected: true });
            }
            else {
                arryMainUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
            }
        });
        dhxCombo_Main_User = new dhtmlXCombo({
            parent: "objCombo_MainUser", filter: true, name: "cb_USER", width: 150,
        });
        dhxCombo_Main_User.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_Main_User.addOption(arryMainUser);

        dhxCombo_Main_Type = new dhtmlXCombo({
            parent: "objCombo_MainType", filter: true, name: "cb_MainType",
            items: [
                { value: "", text: "선택", selected: true },
                { value: "OS", text: "OS" },
                { value: "부품교체", text: "부품교체" },
                { value: "기타", text: "기타" }
            ]
        });

        if (nSeq_No != "") {
            Jq_MaintenanceMstViewSet(nSeq_No);
        }
    }

    function DhxLayout_IP(nIP) {
        /*** Create Object ****/
        dhxLayout2 = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: "2E",
            cells: [
                { id: "a", text: "정보", collapsed_text: "", header: true, fix_size: [false, false], height: 400 },
                { id: "b", text: "이력", collapsed_text: "", header: true, fix_size: [false, false] }
            ]
        });
        dhxLayout2.cells("a").attachURL("/MODULE/ITMS/IP_Detail.html?" + nIP + "");        
        
        /*** Create Object ****/
        dhxGrid_1 = dhxLayout2.cells("b").attachGrid();
        dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_1.setHeader("일자,변경내역");
        dhxGrid_1.setInitWidths("80,*");
        dhxGrid_1.setColAlign("center,left");
        dhxGrid_1.setColTypes("ro,ro");
        dhxGrid_1.setColSorting("str,str");
        dhxGrid_1.init();
        dhxGrid_1.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_IP_Log.asp?STR_IP=" + nIP, function () {
        });
    }
    function DhxGrid_IPList() {
        container = document.getElementById("objRealGrid");
        dataProvider = new RealGrid.LocalDataProvider();
        gridView = new RealGrid.GridView(container);
        gridView.setDataSource(dataProvider);
        gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
        gridView.header.height = 40;

        RealGrid2SizeSetting(dhxLayout1, gridView, "objRealGrid", "a");

        dataProvider.setFields([
            {fieldName: "IP", dataType: "text",},
            {fieldName: "User", dataType: "text",},
            {fieldName: "Division", dataType: "text",},
            {fieldName: "NatIP", dataType: "text",},   
            {fieldName: "Position", dataType: "text",},   
            {fieldName: "InCom", dataType: "text",},
            {fieldName: "Level", dataType: "text",},
        ]);

        gridView.setColumns([
            {name: "IP", fieldName: "IP", width: "120", header: {text: "IP",},},
            {name: "User", fieldName: "User", width: "160", header: {text: "사용자",},},
            {name: "Division", fieldName: "Division", width: "120", header: {text: "부서",},},
            {name: "NatIP", fieldName: "NatIP", width: "120", header: {text: "공인 IP",},},
            {name: "Position", fieldName: "Position", width: "80", header: {text: "직책",},},
            {name: "InCom", fieldName: "InCom", width: "80", header: {text: "퇴사여부",},},
            {name: "Level", fieldName: "Level", width: "80", header: {text: "IP대역",},},
        ]);
        gridView.columnByName("Position").visible =  false;   // 셀 숨김 여부    
        gridView.columnByName("InCom").visible =  false;   // 셀 숨김 여부      
        gridView.columnByName("Level").visible =  false;   // 셀 숨김 여부    
        gridView.columnByName("IP").editable = false;     // 셀 편집 여부
        gridView.columnByName("User").editable = false;
        gridView.columnByName("Division").editable = false;
        gridView.columnByName("NatIP").editable = false;

        gridView.footers.visible = false;                   // Footer 표시 / 숨김
        gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
        gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
        gridView.setRowIndicator({visible: false});         // No 표시 / 숨김
                
        gridView.setColumnProperty("IP", "autoFilter", true);
        gridView.setColumnProperty("User", "autoFilter", true);
        gridView.setColumnProperty("Division", "autoFilter", true);
        gridView.setColumnProperty("NatIP", "autoFilter", true);

        gridView.groupBy(["Level"]);
        gridView.setRowGroup({
            headerStatement: "IP 대역: ${groupValue} - ${rowCount}"
        });
         
        gridView.setOptions({
            editor: {
                viewGridInside: true
            }
        })
        
        gridView.columnByName("User").renderer = {
            type:"html",
            callback: function(grid, cell, w, h) {                    
                if(dataProvider.getValue(cell.index.dataRow, "InCom") == "Y"){
                    var str = cell.value + ' <span style="color:#808080">' + dataProvider.getValue(cell.index.dataRow, "Position") + '</span>';
                    return str;
                }else {
                    var str = cell.value + ' <span style="color:#808080">' + dataProvider.getValue(cell.index.dataRow, "Position") + '</span> - 퇴사';
                    return str;
                }
            },
        }         

        gridView.onCellClicked = function (grid, clickData) {
            var nIP = dataProvider.getValue(clickData.dataRow, "IP");
            dhxLayout1.cells("b").attachURL("/MODULE/ITMS/IP_Layout.html?" + nIP);         
        }
    }
    function RealGrid_GetIPList(){
        dhxLayout1.cells("a").progressOn();

        var loadUrl = "./DATA/XmlForGrid_IP_List.asp";
        $.ajax({
            type: 'POST',
            url: loadUrl,
            async: false,
            success: // 성공
                function (ReqData) {
                    dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                    dhxLayout1.cells("a").progressOff();
                },
            error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }
        });
        
    }
    // IP LIST -> 상세정보
    function DhxIPDetailView(nIP) {
        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/"
        });
        dhxToolbar1.setAlign("right");
        dhxToolbar1.addButton("Delete", 0, "삭제", "", "");
        dhxToolbar1.addSeparator("sep1", 1);
        dhxToolbar1.addButton("Save", 2, "저장", "", "");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Save") {
                Jq_IPMstRegSubmit(nIP);
            } else if (id == "Delete") {
                Jq_IPMstDelSubmit(nIP);
            }
        });
        
        /*** Create Object ****/
        var arryUser = [];
        var nUsers = Ajax_ComboListUser();
        var nRow = nUsers.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];
            arryUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
        });
        dhxCombo_User = new dhtmlXCombo({
            parent: "objCombo_User", filter: true, name: "cb_USER", width: 150,
        });
        dhxCombo_User.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_User.addOption(arryUser);
        dhxCombo_User.addOption([{ value: "ETC", text: "기타"}]);
        dhxCombo_User.attachEvent("onChange", function (value, text) {
            if (value == "ETC") {
                $("#obj_Etc").show();
            }
            else {
                $("#obj_Etc").hide();
            }
        });

        if (nIP != "") {
            Jq_IPMstViewSet(nIP);            
        }
    }

    function DhxGrid_NATList() {
        /*** Create Object ****/
        dhxGrid = dhxLayout1.cells("a").attachGrid();
        dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid.setHeader("공인IP,내부IP,사용자,담당자,부서");
        dhxGrid.attachHeader("#text_filter,#text_filter,#text_filter,#text_filter,#combo_filter");
        dhxGrid.setInitWidths("100,120,120,*,0");
        dhxGrid.setColAlign("center,center,left,left,left");
        dhxGrid.setColTypes("ro,ro,ro,ro,ro");
        dhxGrid.setColSorting("str,str,str,str,str");
        dhxGrid.init();
        dhxGrid.attachEvent("onRowSelect", function (id, idd) {
            var nIP = dhxGrid.cells(id, 0).getValue();
            dhxLayout1.cells("b").attachURL("/MODULE/ITMS/NAT_Layout.html?" + nIP);
        });
        dhxGrid.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_NAT_List.asp", function () {
            dhxGrid.forEachRow(function (id) {
                dhxGrid.setCellTextStyle(id, 1, "color:#0066cc;");
            });
        });
    }

    function DhxLayout_NAT(nIP) {
        /*** Create Object ****/
        dhxLayout2 = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: "2E",
            cells: [
                { id: "a", text: "정보", collapsed_text: "", header: true, fix_size: [false, false], height: 400 },
                { id: "b", text: "이력", collapsed_text: "", header: true, fix_size: [false, false] }
            ]
        });
        dhxLayout2.cells("a").attachURL("/MODULE/ITMS/NAT_Detail.html?" + nIP + "");

        /*** Create Object ****/
        dhxGrid_1 = dhxLayout2.cells("b").attachGrid();
        dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_1.setHeader("일자,변경내역");
        dhxGrid_1.setInitWidths("80,*");
        dhxGrid_1.setColAlign("center,left");
        dhxGrid_1.setColTypes("ro,ro");
        dhxGrid_1.setColSorting("str,str");
        dhxGrid_1.init();
        dhxGrid_1.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_NAT_Log.asp?STR_IP=" + nIP, function () {
        });
    }

    // IP LIST -> 상세정보
    function DhxNATDetailView(nIP) {
        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/"
        });
        dhxToolbar1.setAlign("right");
        dhxToolbar1.addButton("Save", 1, "저장", "/Dhx/108.png", "");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Save") {
                Jq_NATMstRegSubmit(nIP);
            }
        });

        /*** Create Object ****/
        var arryUser = [];
        var nUsers = Ajax_ComboListUser();
        var nRow = nUsers.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_STR_ID = nCol[0];
            var s_STR_USER = nCol[1];
            var s_STR_POS = nCol[2];
            arryUser.push({ value: s_STR_ID, text: s_STR_USER + " " + s_STR_POS });
        });
        dhxCombo_User = new dhtmlXCombo({
            parent: "objCombo_User", filter: true, name: "cb_USER", width: 150,
        });
        dhxCombo_User.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_User.addOption(arryUser);

        /*** Create Object ****/
        var arryIP = [];
        var nIPs = Ajax_ComboListIP();
        var nRow = nIPs.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_SEQ_NO = nCol[0];
            var s_STR_IP = nCol[1];
            arryIP.push({ value: s_SEQ_NO, text: s_STR_IP });
        });
        dhxCombo_IP = new dhtmlXCombo({
            parent: "objCombo_IP", filter: true, name: "cb_IP", width: 150,
        });
        dhxCombo_IP.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_IP.addOption(arryIP);

        if (nIP != "") {
            Jq_NATMstViewSet(nIP);
        }
    }

    /* DataBase 관리 시작 */

    function DhxGrid_TableList() {
        /*** Create Object ****/
        dhxGrid = dhxLayout1.cells("a").attachGrid();
        dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid.setHeader("Type,Table Name,Comment");
        dhxGrid.attachHeader("#combo_filter,#text_filter,#text_filter");
        dhxGrid.setInitWidths("80,200,*");
        dhxGrid.setColAlign("left,left,left");
        dhxGrid.setColTypes("ro,ro,ro");
        dhxGrid.setColSorting("str,str,str");
        dhxGrid.init();
        dhxGrid.attachEvent("onRowSelect", function (id, idd) {
            var nTable = dhxGrid.cells(id, 1).getValue();
            dhxLayout1.cells("b").attachURL("/MODULE/ITMS/Table_Layout.html?" + nTable);
        });
        dhxGrid.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_Table_List.asp", function () {
            dhxGrid.forEachRow(function (id) {
            });
        });
    }

    function DhxLayout_Table(nTable) {
        /*** Create Object ****/
        dhxLayout2 = new dhtmlXLayoutObject({
            parent: document.body,
            pattern: "2E",
            cells: [
                { id: "a", text: nTable + " Table", collapsed_text: "", header: true, fix_size: [false, false], height: 200 },
                { id: "b", text: nTable + " Column", collapsed_text: "", header: true, fix_size: [false, false] }
            ]
        });
        dhxLayout2.cells("a").attachURL("/MODULE/ITMS/Table_Detail.html?" + nTable + "");
        
        /*** Create Object ****/
        dhxToolbar = dhxLayout2.cells("b").attachToolbar();
        dhxToolbar.setAlign("right");
        dhxToolbar.addButton("Save", 60, "저장", "", "");
        dhxToolbar.attachEvent("onClick", function (id) {
            if (id == "Save") {                
                for (i = 1; i <= dhxGrid_1.getRowsNum(); i++) {
                    var nColumn_NM = dhxGrid_1.cells(i, 0).getValue()
                    var nComment = dhxGrid_1.cells(i, 5).getValue()

                    Jq_TableColumnRegSubmit(nTable, nColumn_NM, nComment);
                }

                DhxGrid_TableColumn_List(nTable);
            }
        });

        DhxGrid_TableColumn_List(nTable);
    }

    function DhxGrid_TableColumn_List(nTable) {
        dhxGrid_1 = dhxLayout2.cells("b").attachGrid();
        dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_1.setHeader("NAME,TYPE,LENGTH,NULL,DATA,COMMENT");
        dhxGrid_1.setInitWidths("150,80,50,50,150,*");
        dhxGrid_1.setColAlign("left,center,center,center,left,left");
        dhxGrid_1.setColTypes("ro,ro,ro,ro,ro,ed");
        dhxGrid_1.setColSorting("str,str,str,str,str,str");
        dhxGrid_1.init();
        dhxGrid_1.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_Column_List.asp?STR_TABLE=" + nTable, function () {
        });
    }

    // Table관리 -> Table 정보
    function DhxTableDetailView(nTable) {
        $('.input01').focus(function () { $(this).removeClass("input01"); $(this).addClass("input01_over"); $(this).select(); })
            .blur(function () { $(this).removeClass("input01_over"); $(this).addClass("input01"); });
        /*** Create Object ****/
        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbar",
            icons_path: "/IMAGES/ICO/"
        });
        dhxToolbar1.setAlign("right");
        dhxToolbar1.addButton("Save", 1, "저장", "", "");
        
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Save") {
                Jq_TableMstRegSubmit(nTable);
            }
        });

        /*** Create Object ****/        
        dhxCombo_Type = new dhtmlXCombo({
            parent: "objCombo_Type", filter: true, name: "cb_TYPE", width: 150,
        });
        dhxCombo_Type.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_Type.addOption([{ value: "VRS", text: "차량예약" }]);
        dhxCombo_Type.addOption([{ value: "ITMS", text: "ITMS" }]);
        dhxCombo_Type.addOption([{ value: "FM", text: "시설" }]);
        dhxCombo_Type.addOption([{ value: "QMS", text: "품질" }]);
        dhxCombo_Type.addOption([{ value: "ERP", text: "ERP지원" }]);
        dhxCombo_Type.addOption([{ value: "SM", text: "인감" }]);
        dhxCombo_Type.addOption([{ value: "IAM", text: "내부회계" }]);
        dhxCombo_Type.addOption([{ value: "OM", text: "조직도" }]);
        dhxCombo_Type.addOption([{ value: "ADMIN", text: "시스템" }]);
        dhxCombo_Type.addOption([{ value: "ETC", text: "기타" }]);

        if (nTable != "") {
            Jq_TableMstViewSet(nTable);
        }
    }

    /* DataBase 관리 종료 */

    /* Software 관리 시작 */
    function DhxToolbar_SoftwareList() {
        dhxToolbar = dhxLayout1.cells("a").attachToolbar();
        dhxToolbar.setAlign("right");
        dhxToolbar.addButton("Software_Add", 60, "등록", "", "");
        dhxToolbar.attachEvent("onClick", function (id) {
            DhxBaseCreateWindowObj('dhxWin_SoftwareReg', '라이센스 등록', '/MODULE/ITMS/Software_Reg.html?/', 10, 10, 915, 400, true, true, 'N', 'Y');            
        });
    }
    function DhxGrid_SoftwareList() {
        /*** Create Object ****/
        dhxGrid = dhxLayout1.cells("a").attachGrid();
        dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid.setHeader("seq_no,Software명,보유,사용,미사용,사용 종료일");
        dhxGrid.setInitWidths("0,270,60,60,60,*");
        dhxGrid.setColAlign("left,left,right,right,right,center");
        dhxGrid.setColTypes("ro,ro,ro,ro,ro,ro");
        dhxGrid.setColSorting("str,str,str,str,str,str");
        dhxGrid.init();
        dhxGrid.attachEvent("onRowDblClicked", function (id, idd) {
            var nSEQ_NO = dhxGrid.cells(id, 0).getValue();
            DhxBaseCreateWindowObj('dhxWin_SoftwareReg', '정비내역 등록', '/MODULE/ITMS/Software_Reg.html?' + nSEQ_NO, 0, 0, 915, 400, true, true, 'N', 'Y');
        });
        dhxGrid.attachEvent("onRowSelect", function (id, idd) {
            DhxLayout_UseSoftwareList();
        });
        dhxGrid.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_Software_List.asp", function () {
            dhxGrid.forEachRow(function (id) {
            });
        });
    }

    function DhxSoftwareRegSet(nSEQ_NO) {
        var dhxToolbarSubmit = new dhtmlXToolbarObject({
            parent: "objToolbarSubmit",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbarSubmit.setIconsPath("/IMAGES/ICO/");
        dhxToolbarSubmit.addButton("Save", 1, "<strong>저장 (Save)</strong>", "/32/694.png", "");
        dhxToolbarSubmit.addSeparator("sep1", 2);
        dhxToolbarSubmit.addButton("Cancel", 3, "취소 (Cancel)", "/32/170.png", "");
        dhxToolbarSubmit.attachEvent("onClick", function (id) {
            if (id == "Save") {
                if (nSEQ_NO != "") {
                    Jq_SoftwareMstModifySubmit(nSEQ_NO);
                } else {
                    Jq__SoftwareMstRegSubmit();
                }
            }
            else {
                parent.DhxBaseCloseWindowObj('dhxWin_SoftwareReg', 'Y');
            }
        });


        dhtmlXCalendarObject.prototype.langData["ko"] = {
            dateformat: '%Y-%m-%d',
            monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
            monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
            daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
            daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
            weekstart: 7
        }
        var dhxCalendar = new dhtmlXCalendarObject(["END_DATE"]);
        dhxCalendar.setSkin("dhx_skyblue");
        dhxCalendar.loadUserLanguage("ko");
        dhxCalendar.hideTime();

    }

    // License 관리 -> 소프트웨어 사용자
    function DhxToolbar_UseSoftwareList() {
        dhxToolbar = dhxLayout1.cells("b").attachToolbar();
        dhxToolbar.setAlign("right");
        dhxToolbar.addButton("Add", 60, "등록", "", "");
        dhxToolbar.addButton("Del", 60, "삭제", "", "");
        dhxToolbar.attachEvent("onClick", function (id) {
            if (id == "Add") {
                var id = dhxGrid.getSelectedId();
                var nSEQ_NO = dhxGrid.cells(id, 0).getValue();

                DhxBaseCreateWindowObj('dhxWin_SoftwareUseReg', '사용처 등록', '/MODULE/ITMS/Software_UseReg.html?' + nSEQ_NO, 10, 10, 600, 500, true, true, 'N', 'Y');
            } else {

                dhtmlx.confirm({
                    title: "Warning",
                    type: "confirm-error",
                    text: "삭제 하겠습니까?",
                    ok: "확인",
                    cancel: "취소",
                    callback:
                    function (result) {
                        if (result == true) { 
                            for (i = 1; i <= dhxGrid_1.getRowsNum(); i++) {
                                if (dhxGrid_1.cells(i, 0).getValue() == 1) {
                                    var nSEQ_NO = dhxGrid_1.cells(i, 1).getValue()

                                    Jq_UseSoftwareMstDelSubmit(nSEQ_NO);
                                }
                            }
                            setTimeout(function () {
                                dhxTree.selectItem("M050601", true);
                            }, 100);
                        }
                        else {
                            return;
                        }
                    }
                });                
            }

        });
    }

    function DhxLayout_UseSoftwareList() {
        var id = dhxGrid.getSelectedId();
        var nSEQ_NO = dhxGrid.cells(id, 0).getValue();

        dhxGrid_1 = dhxLayout1.cells("b").attachGrid();
        dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid_1.setHeader(",SEQ_NO,사용구분,사용부서,사용처");
        //dhxGrid_1.attachHeader("&nbsp,&nbsp,#text_filter,#combo_filter,#text_filter");
        dhxGrid_1.setInitWidths("30,0,100,150,*");
        dhxGrid_1.setColAlign("left,left,left,left,left");
        dhxGrid_1.setColTypes("ch,ro,ro,ro,ro");
        dhxGrid_1.setColSorting("ch,na,str,str,str");
        dhxGrid_1.init();
        dhxGrid_1.clearAndLoad("/MODULE/ITMS/DATA/XmlForGrid_User_UseSoftware_List.asp?SEQ_NO=" + nSEQ_NO, function () {
            dhxGrid_1.forEachRow(function (id) {
            });
        });
    }

    function DhxUseSoftwareSet(nSEQ_NO) {
        dhxToolbar = new dhtmlXToolbarObject({
            parent: "objToolbarSubmit",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbar.setIconsPath("/IMAGES/ICO/");
        
        dhxToolbar.addButton("Add", 0, "등록", "", "");
        dhxToolbar.addButton("Cancel", 1, "취소", "", "");
        dhxToolbar.attachEvent("onClick", function (id) {
            if (id == "Add") {                
                var nCnt = 0;

                for (i = 1; i <= dhxGrid2.getRowsNum(); i++) {

                    if (dhxGrid2.cells(i, 0).getValue() == 1) {
                        var nUserID = dhxGrid2.cells(i, 1).getValue();
                        var nCdOrg = dhxGrid2.cells(i, 3).getValue();

                        Jq_UseSoftwareUserRegSubmit(nSEQ_NO, nUserID, nCdOrg);
                        nCnt = nCnt + 1;
                    }
                }
                if (nCnt > 0) {
                    parent.dhxTree.selectItem("M050601", true);
                    parent.DhxBaseCloseWindowObj('dhxWin_SoftwareUseReg', 'N');
                }
            } else if (id == "Cancel") {
                parent.DhxBaseCloseWindowObj('dhxWin_SoftwareUseReg', 'Y');
            }
        });

        dhxToolbar1 = new dhtmlXToolbarObject({
            parent: "objToolbarSubmit1",
            icons_path: "/IMAGES/ICO/",
            align: "right"
        });
        dhxToolbar1.setIconsPath("/IMAGES/ICO/");

        dhxToolbar1.addButton("Add", 0, "등록", "", "");
        dhxToolbar1.attachEvent("onClick", function (id) {
            if (id == "Add") {
                Jq_UseSoftwareEtcRegSubmit(nSEQ_NO);
            }
        });

        /*** Create Object ****/
        dhxCombo_Flag = new dhtmlXCombo({
            parent: "objCombo_Flag", filter: true, name: "cb_Flag",
            items: [
                { value: "", text: "선택", selected: true },
                { value: "공용", text: "공용" },
                { value: "개발", text: "개발" },
                { value: "테스트", text: "테스트" },
                { value: "서비스", text: "서비스" },
                { value: "관리", text: "관리" },
                { value: "경비", text: "경비" }
            ]
        });

        /*** Create Object ****/
        var arryOrg = [];
        var nOrg = Ajax_ComboListOrg();
        var nRow = nOrg.split("<,>");
        $.each(nRow, function (No) {
            var nCol = nRow[No].split("</>");
            var s_CD_ORG = nCol[0];
            var s_STR_ORG = nCol[1];
            arryOrg.push({ value: s_CD_ORG, text: s_STR_ORG });
        });
        dhxCombo_Org = new dhtmlXCombo({
            parent: "objCombo_Org", filter: true, name: "cb_ORG", width: 150,
        });
        dhxCombo_Org.addOption([{ value: "", text: "선택", selected: true }]);
        dhxCombo_Org.addOption(arryOrg);

        /*** Create Object ****/
        dhxGrid2 = new dhtmlXGridObject('objGrid');
        dhxGrid2.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
        dhxGrid2.setHeader(",ID,이름,ORG_CD,부서");
        dhxGrid2.setInitWidths("40,0,100,0,*");
        dhxGrid2.setColAlign("center,left,left,left,left");
        dhxGrid2.setColTypes("ch,ro,ro,ro,ro");
        dhxGrid2.setColSorting("na,str,str,str,str");

        dhxGrid2.init();

        dhxUseSoftwareGridGetList(nSEQ_NO);
    }

    function dhxUseSoftwareGridGetList(nSEQ_NO) {
        var loadUrl = "";
        loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_UseSoftware_List.asp?SEQ_NO=" + nSEQ_NO;

        dhxGrid2.clearAndLoad(loadUrl, function () {
        });
    }

function DhxGrid_PcList() {
    /*** Create Object ****/
    dhxToolbar = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });
    var opts = [['CD_PC', 'obj', '관리번호', ''], ['NO_MODEL', 'obj', '모델명', ''], ['DATE_BUY', 'obj', '구입일', '']];
    var opts2 = [['', 'obj', '전체', ''], ['Y', 'obj', '사용', ''], ['N', 'obj', '미사용', ''], ['D', 'obj', '폐기', '']];
    dhxToolbar.addText("Count", 0, "ROWS");
    dhxToolbar.addButtonSelect("Field", 1, "", opts, "", "", true, true, 6, "select");
    dhxToolbar.setListOptionSelected("Field", "CD_PC");
    dhxToolbar.setWidth("Field", 100);
    dhxToolbar.addInput("Keyword", 2, "", 140);
    dhxToolbar.addButton("Search", 3, "", "/32/861.png", "");
    dhxToolbar.addSeparator("sep30", 4);
    dhxToolbar.addButtonSelect("Status", 5, "", opts2, "", "", true, true, 6, "select");
    dhxToolbar.setListOptionSelected("Status", "");
    dhxToolbar.setWidth("Status", 80);
    dhxToolbar.addButton("Reload", 6, "", "/Dhx/25.png", "");
    dhxToolbar.addSeparator("sep2", 7);
    dhxToolbar.addButton("Excel", 8, "Excel Download", "", "");
    dhxToolbar.addSpacer("Count");

    dhxToolbar.attachEvent("onClick", function (id) {
        if (id == "Reload") {
            location.reload();
        } else if (id == "Excel") {
            dhxGrid.toExcel('/LIB/Dhtmlx/grid-excel-php/Generate.php');
        } else {
            DhxGrid_PcListLoad();
        }
    });
    /*** Create Object ****/
    dhxGrid = new dhtmlXGridObject('objGrid');
    dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGrid.setHeader("순번,관리번호,구분,사용여부,<strong>제품정보</strong>,#cspan,#cspan,<strong>제품스팩</strong>,#cspan,#cspan,#cspan,#cspan,용도,<strong>사용자정보</strong>,#cspan,#cspan,#cspan,사용목적,위치,비고,제품사진");
    dhxGrid.attachHeader(["#rspan", "#rspan", "#rspan", "#rspan", "제조사", "구입년월", "모델명", "CPU", "VGA", "RAM", "SSD", "HDD", "#rspan", "취득년월", "사용부서", "사용자", "관리책임자", "#rspan", "#rspan", "#rspan", "#rspan"]);
    dhxGrid.setInitWidths("40,100,80,80,100,80,120,150,150,60,60,60,80,80,120,100,100,150,150,150,150");
    dhxGrid.setColAlign("center,center,center,center,left,center,left,left,left,left,left,left,center,center,left,left,left,left,left,left,center");
    dhxGrid.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,ro,img");
    dhxGrid.setColSorting("str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str,str");    
    //dhxGrid.enableMultiline(true);
    dhxGrid.init();    
    DhxGrid_PcListLoad();
}

function DhxGrid_PcListLoad() {
    var nStatus = dhxToolbar.getListOptionSelected("Status");
    var nField = dhxToolbar.getListOptionSelected("Field");
    var nKeyword = dhxToolbar.getValue("Keyword");
    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_PcList.asp?CD_STATUS=" + nStatus + "&STR_FIELD=" + nField + "&STR_KEY=" + encodeURIComponent(nKeyword) + "";
    dhxGrid.clearAndLoad(loadUrl, function () {
        dhxGrid.forEachRow(function (id) {
            //var sStt = dhxGrid.cells(id, 9).getValue();
            //dhxGrid.setCellTextStyle(id, 0, "color:#339933; font-weight:bold;");
            //if (sStt == "정상") {
            //    dhxGrid.setCellTextStyle(id, 9, "color:#0066ff; font-weight:bold;");
            //    dhxGrid.setCellTextStyle(id, 0, "color:#0066ff; font-weight:bold;");
            //}
            //else if (sStt == "폐기") {
            //    dhxGrid.setCellTextStyle(id, 9, "color:#cc0000; font-weight:bold;");
            //    dhxGrid.setCellTextStyle(id, 0, "color:#cc0000; font-weight:bold;");
            //}
            //else {
            //    dhxGrid.setCellTextStyle(id, 9, "color:#808080; font-weight:bold;");
            //    dhxGrid.setCellTextStyle(id, 0, "color:#808080; font-weight:bold;");
            //}
            
        });
        dhxToolbar.setItemText("Count", "<strong style='color:#ff6600;'>ROWS : " + dhxGrid.getRowsNum() + "</strong> ");
    });
}
//IT 구매/계약 관리페이지 시작
function IT_Deal_Layout(){                
    dhxLayout1 = new dhtmlXLayoutObject({
        parent:document.body,
        pattern: "2U",
        cells: [
            { id: "a", text: "IT 구매/계약 관리", header: true, fix_size: [true, false],width:650 },
            { id: "b", text: "IT 구매/계약 상세 이력", header: true, fix_size: [false, false] }
        ]
        });
        DhxToolbar_IT_DealList();
        DhxGrid_IT_DealListSet();
        DhxToolbar_IT_Deal_Record();
    }
//IT 구매/계약 관리 Toolbar
function DhxToolbar_IT_DealList(){
   
    var opts1 = [["STR_TITLE", "obj", "TITLE", ""], ["END_DATE", "obj", "만료일", ""]];
    dhxToolbar = dhxLayout1.cells("a").attachToolbar();
    dhxToolbar.setAlign("left");
    dhxToolbar.setIconsPath("/IMAGES/ICO/");
    dhxToolbar.addButtonSelect("Field", 1, "", opts1, "", "",true, true, 6,"select");
    dhxToolbar.setListOptionSelected("Field", "STR_TITLE");
    dhxToolbar.addInput("Keyword", 2, "", 140);
    dhxToolbar.addButton("Search", 3, "", "/32/861.png", "");
    dhxToolbar.addButton("Reg",4,"등록","/32/754.png","");
    dhxToolbar.addButton("Del", 5, "삭제", "/32/628.png", "");
    dhxToolbar.addSpacer("Search");
    //검색 기능 넣어보기 수정 중
    dhxToolbar.attachEvent("onEnter",function(id, value){
        DhxGrid_IT_DealListLoad();
    });
    dhxToolbar.attachEvent("onClick", function (id) {
        switch(id){
            case "Search": 
                DhxGrid_IT_DealListLoad();
                break;  
            case "Reg":              
                DhxWindow_IT_DealReg();            
                // var nUrl = '/MODULE/ITMS/IT_Deal_Reg.html?Reg/';
                // DhxBaseCreateWindowObj('dhxWin_IT_DealReg', 'IT 구매 / 계약 관리 등록', nUrl, 10, 10, 650, 400, true, true, 'N', 'Y');    
                break;
            case "Del":
                var selectedRow = dhxGrid.getSelectedId();
                if(selectedRow == null){
                    DhxMessageObj("삭제할 구매/계약건을 선택해주세요.","");
                    return;
                }else{ 
                    dhtmlx.confirm({
                        title: "Warning",
                        type: "confirm-error",
                        text: "해당 상세 이력까지 모두 삭제됩니다.<br> 삭제하겠습니까?",
                        ok: "확인",
                        cancel: "취소",
                        callback:
                        function (result) {
                            if(result == true){
                                //하나만 선택 해당 상세 이력 전체 삭제
                                var nCdMst = dhxGrid.cells(dhxGrid.getSelectedId(),0).getValue();
                                Jq_Ajax_IT_Deal_Delete(nCdMst);       
                            }
                            else{
                                return;
                            } 
                        }
                    });
                }
                break;
        } 
        
    });
}
//IT 구매/계약 관리 grid set//
function DhxGrid_IT_DealListSet(){
    // dhxGrid = new dhtmlXGridObject('objGrid');
    dhxGrid = dhxLayout1.cells("a").attachGrid();
    dhxGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGrid.setHeader("key,TITLE,수량,종료일");
    dhxGrid.setInitWidthsP("0,60,15,25");
    dhxGrid.setColAlign("center,left,right,center");
    dhxGrid.setColTypes("ro,ro,ro,ro");
    dhxGrid.setColSorting("str,str,int,str");
    dhxGrid.enableCollSpan(true);
    dhxGrid.enableRowsHover(true, 'grid_hover');
    dhxGrid.enableHeaderMenu();
    dhxGrid.init();
    // 더블 클릭 시 수정 팝업 창
    dhxGrid.attachEvent("onRowDblClicked", function (id, idd) {	// RowDbClick 이벤트
        var nCdMst = dhxGrid.cells(dhxGrid.getSelectedId(), 0).getValue();
        Dhx_IT_DealMod(nCdMst);
        Jq_Ajax_IT_DealModGetView(nCdMst);
        // var nUrl = "/MODULE/ITMS/IT_Deal_Reg.html?Mod/" + nCdMst + "";
        // parent.DhxBaseCreateWindowObj('dhxWin_IT_DealMod', 'IT 구매 / 계약 관리 수정', nUrl, 10, 10, 650, 400, true, true, 'N', 'Y');
    });
    // row 선택 시 cells("b") 상세 이력 출력
    dhxGrid.attachEvent("onRowSelect", function (id, idd) {         
        DhxLayout_IT_Deal_Record();        
    });  
    DhxGrid_IT_DealListLoad();  
}
//IT 구매/계약 관리 grid load//
function DhxGrid_IT_DealListLoad(){
    
    var nField = dhxToolbar.getListOptionSelected("Field");
    var nKeyword		= dhxToolbar.getValue("Keyword");
    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Deal_List.asp?STR_FIELD=" +nField + "&STR_KEY="+encodeURIComponent(nKeyword) + "";
    // var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Deal_List.asp";
    dhxGrid.clearAndLoad(loadUrl, function() {		
        dhxGrid.forEachRow(function(id){

        });			        
    });
}
//IT 구매/계약 관리 등록
function DhxWindow_IT_DealReg(){
    var nID ="dhxWin_IT_DealReg";
    dhxWinsView =  new dhtmlXWindows();
    var dhxWin = dhxWinsView.createWindow({ id: nID, left: 0, top: 0, width: 465, height: 280, center: true });
    dhxWinsView.window(nID).setModal(true);
    dhxWinsView.window(nID).setText('IT 구매 / 계약 관리 등록');
    dhxWinsView.window(nID).denyResize();
    
    formData = [
        {type:"settings", position:"label-left", labelWidth:60, inputWidth:300 },
        {type:"block", width:410, offsetLeft:10, offsetTop:20, list:[
            {type:"input", name:"FLAG", label: "", value:"Reg", hidden:true},
            {type:"input", name:"CD_MST", label: "", value:Math.uuid(), hidden:true},
            {type:"input", name:"STR_TITLE", label: "Title", value: "", required:true},
            {type:"input", name:"OWN_VOLUME", label: "수량",value:"" , required:true},
            {type:"calendar", name:"END_DATE", label: "종료일",value:"",dateFormat: "%Y-%m-%d", required:true}
            
        ]},
        {type: "block",offsetLeft: 140, blockOffset: 5, offsetTop:30, list: [
            {type: "button", value: "저장", name:"save"},
            {type: "newcolumn"},
            {type: "button", value: "취소" ,name:"cancel"}
        ]}
    ];
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.enableLiveValidation(true);
    dhxForm.attachEvent("onButtonClick", function(id){
        if(id=="save"){
            Jq_IT_DealRegSave();
            // dhxWinsView.window("dhxWin_IT_DealReg").progressOn();
        }else{
            dhxWinsView.window(nID).close();
        }
    });
    // $("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
    // $("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Reg" class="objhide" />');
    // $("body").append('<input type="text" name="CD_MST" id="CD_MST" value="' + Math.uuid() + '" class="objhide"/>');
    
    // var dhxToolbarSubmit = new dhtmlXToolbarObject({
    //     parent: "objToolbarSubmit",
    //     icons_path: "/IMAGES/ICO/",
    //     align: "right"
    // });
    // dhxToolbarSubmit.setIconSize(24);
    // dhxToolbarSubmit.setIconsPath("/IMAGES/ICO/");
    // dhxToolbarSubmit.addButton("Save", 1, "<strong>저장</strong>", "/32/694.png", "");
    // dhxToolbarSubmit.addSeparator("sep1", 2);
    // dhxToolbarSubmit.addButton("Cancel", 3, "취소 ", "/32/170.png", "");
    // dhxToolbarSubmit.attachEvent("onClick", function (id) {
    //     if (id == "Save") {
    //         Jq_IT_DealRegSave();
    //         parent.dhxTree.selectItem("M050602", true);
    //         parent.DhxBaseCloseWindowObj("dhxWin_IT_DealReg", "N");               
    //     }
    //     else {
    //         parent.DhxBaseCloseWindowObj('dhxWin_IT_DealReg', "Y");
    //     }
    // });
    // dhtmlXCalendarObject.prototype.langData["ko"] = {
    //     dateformat: '%Y-%m-%d',
    //     monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     weekstart: 7
    // }
    // var dhxCalendar = new dhtmlXCalendarObject(["END_DATE"]);
    // dhxCalendar.setSkin("dhx_skyblue");
    // dhxCalendar.loadUserLanguage("ko");
    // dhxCalendar.hideTime();
}

//IT 구매/계약 관리 수정
function Dhx_IT_DealMod(nCdMst){
    var nID ="dhxWin_IT_DealReg";
    dhxWinsView =  new dhtmlXWindows();
    var dhxWin = dhxWinsView.createWindow({ id: nID, left: 0, top: 0, width: 465, height: 280, center: true });
    dhxWinsView.window(nID).setModal(true);
    dhxWinsView.window(nID).setText('IT 구매 / 계약 관리 수정');
    dhxWinsView.window(nID).denyResize();

    formData = [
        {type: "settings",position: "label-left", labelWidth: 60, inputWidth: 300 },
        {type:"block", width: 410, offsetLeft: 10, offsetTop:20, list:[
            {type: "input", name: "FLAG", label: "", value: "Mod", hidden:true},
            {type: "input", name: "CD_MST", label: "", value: nCdMst, hidden:true },
            {type: "input", name: "STR_TITLE", label: "Title", value: "", required:true},
            {type: "input", name: "OWN_VOLUME", label: "수량",value:"" , required:true},
            {type: "calendar", name: "END_DATE", label: "종료일",value:"",dateFormat: "%Y-%m-%d", required:true}       
        ]},
        {type: "block",offsetLeft: 140, blockOffset: 5, offsetTop:30, list: [
            {type: "button", value: "수정", name:"save"},
            {type: "newcolumn"},
            {type: "button", value: "취소" ,name:"cancel"}
        ]}
    ];
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(id){
        if(id=="save"){            
            Jq_IT_DealRegSave();
            // dhxWinsView.window("dhxWin_IT_DealReg").progressOn();
        }else{
            dhxWinsView.window(nID).close();
        }

    });


    // $("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
    // $("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Mod" class="objhide" />');
    // $("body").append('<input type="text" name="CD_MST" id="CD_MST" value="' + nCdMst + '" class="objhide"/>');

    // var dhxToolbarSubmit = new dhtmlXToolbarObject({
    //     parent: "objToolbarSubmit",
    //     icons_path: "/IMAGES/ICO/",
    //     align: "right"
    // });
    // dhxToolbarSubmit.setIconSize(24);
    // dhxToolbarSubmit.setIconsPath("/IMAGES/ICO/");
    // dhxToolbarSubmit.addButton("Save", 1, "<strong>수정</strong>", "/32/694.png", "");
    // dhxToolbarSubmit.addSeparator("sep1", 2);
    // dhxToolbarSubmit.addButton("Cancel", 3, "취소 ", "/32/170.png", "");
    // dhxToolbarSubmit.attachEvent("onClick", function (id) {
    //     if (id == "Save") {
    //         Jq_IT_DealRegSave();
    //         parent.dhxTree.selectItem("M050602", true);
    //         parent.DhxBaseCloseWindowObj("dhxWin_IT_DealMod", "N");   
        
    //     }
    //     else {
    //         parent.DhxBaseCloseWindowObj('dhxWin_IT_DealMod', "Y");
    //     }
    // });

    // dhtmlXCalendarObject.prototype.langData["ko"] = {
    //     dateformat: '%Y-%m-%d',
    //     monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     weekstart: 7
    // }
    // var dhxCalendar = new dhtmlXCalendarObject(["END_DATE"]);
    // dhxCalendar.setSkin("dhx_skyblue");
    // dhxCalendar.loadUserLanguage("ko");
    // dhxCalendar.hideTime();
}

//IT 구매/계약 관리 상세 이력  -Toolbar 세팅
function DhxToolbar_IT_Deal_Record(){
    dhxToolbar = dhxLayout1.cells("b").attachToolbar();
    dhxToolbar.setAlign("right");
    dhxToolbar.setIconsPath("/IMAGES/ICO/");
    dhxToolbar.addButton("Add", 60, "추가", "/32/030.png", "");
    dhxToolbar.addButton("Del", 60, "삭제", "/32/295.png", "");
    dhxToolbar.attachEvent("onClick",function(id){
        switch(id){
            case "Add":
                var selectedRow = dhxGrid.getSelectedId();
                if(selectedRow == null){
                    DhxMessageObj('구매/계약 관리건을 선택해주세요.','');
                }else{
                    var nCdMst = dhxGrid.cells(dhxGrid.getSelectedId(), 0).getValue();
                    DhxLayout_IT_Deal_Record_Reg(nCdMst)                
                     // parent.DhxBaseCreateWindowObj('dhxWin_IT_DealRecord_Add', 'IT 구매/계약 관리 상세 이력 추가', '/MODULE/ITMS/IT_Deal_Record_Reg.html?Add/' + nCdMst + "", 10, 10, 700, 400, true, true, 'N', 'Y');            
                }
                break;
            case "Del" :
                var selectedRow = dhxGrid_1.getSelectedId();
                if(selectedRow == null){
                    DhxMessageObj('삭제할 상세 이력을 선택해주세요.','');
                    return;
                }else{
                    dhtmlx.confirm({
                        title: "Warning",
                        type: "confirm-error",
                        text: "삭제 하겠습니까?",
                        ok: "확인",
                        cancel: "취소",
                        callback:
                        function (result) {
                            if (result == true) { 
                                //다중 선택 가능 shift or ctrl
                                var nSeqNo = "";
                                for(i = 1;  i <= dhxGrid_1.getRowsNum(); i++){   
                                    var selectedRowId = dhxGrid_1.getSelectedId().split(",")[i-1];
                                    if(selectedRowId !== undefined){    
                                        nSeqNo += dhxGrid_1.cells(selectedRowId, 0).getValue() + "|"; 
                                    }
                                }
                                Jq_Ajax_IT_Deal_RecordDelete(nSeqNo);                                

                            }else {
                                return;
                            }
                        }
                    });  
                }
                break;
        }

    });
}
//IT 구매/계약 관리 roW 상세 이력 Layout
function DhxLayout_IT_Deal_Record(){
    dhxGrid_1 = dhxLayout1.cells("b").attachGrid();
    dhxGrid_1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGrid_1.setHeader("SEQ_NO,CD_MST,시작일,수량,금액,업체,업체담당자,전화번호,이메일");
    dhxGrid_1.enableMultiselect(true); 
    dhxGrid_1.setInitWidthsP("0,0,13,10,13,22,12,15,15");
    dhxGrid_1.setColAlign("left,left,center,right,right,left,center,center,left");
    dhxGrid_1.setColTypes("ro,ro,ro,ro,ro,ro,ro,ro,ro");
    dhxGrid_1.setColSorting("int,str,str,int,int,str,str,str,str");
    dhxGrid_1.init();
    dhxGrid_1.attachEvent("onRowDblClicked", function (id, idd) {	// RowDbClick 이벤트
        var nSeqNo = dhxGrid_1.cells(dhxGrid_1.getSelectedId(), 0).getValue();
        DhxLayout_IT_Deal_Record_Mod(nSeqNo);
        Jq_Ajax_IT_Deal_Record_ModGetView(nSeqNo);
        // var nUrl = '/MODULE/ITMS/IT_Deal_Record_Reg.html?Mod/' + nSeqNo + "";    
        // DhxBaseCreateWindowObj('dhxWin_IT_DealRecord_Mod', 'IT 구매/계약 상세 이력 수정', nUrl, 10, 10, 700, 400, true, true, 'N', 'Y');
    });
    DhxLayout_IT_Deal_RecordListLoad();
}
function DhxLayout_IT_Deal_RecordListLoad(){
    var nCdMst = dhxGrid.cells(dhxGrid.getSelectedId(), 0).getValue();
    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Deal_Record_List.asp?CD_MST=" + nCdMst;
    dhxGrid_1.clearAndLoad(loadUrl, function(){
    });
}
//IT 구매/계약 관리 roW 상세 이력 추가 팝업
function DhxLayout_IT_Deal_Record_Reg(nCdMst) {
    var nID = "dhxWin_IT_DealRecord_Add";
    dhxWinsView =  new dhtmlXWindows();
    var dhxWin = dhxWinsView.createWindow({ id: nID, left: 0, top: 0, width: 590, height: 345, center: true });
    dhxWinsView.window(nID).setModal(true);
    dhxWinsView.window(nID).setText('IT 구매/계약 관리 상세 이력 추가');
    dhxWinsView.window(nID).denyResize();

    formData = [
        {type:"settings",position:"label-left", labelWidth:80, offsetLeft:5},     
        {type:"input", name:"FLAG", label:"", value:"Add", hidden:true },
        {type:"input", name:"CD_MST", label:"", value: nCdMst, hidden:true },
        {type:"input", name:"SEQ_NO", label:"", value: "0", hidden:true },
        {type:"input", name:"CUS_NAME", label:"업체명", value:"", inputWidth:410, offsetTop:35, offsetLeft:30, required:true},
        {type:"block", width:550, inputWidth:195,  list:[
            {type: "input", name: "CUS_USER", label:"업체담당자", value:"", required:true},
            {type: "input", name: "CUS_PHONE", label:"전화번호", value:"", required:false},
            {type: "input", name: "CUS_MAIL", label:"이메일", value:"", required:false, validate:"ValidEmail"},
            {type: "newcolumn" ,offset:0, labelWidth:60},
            {type: "calendar", name: "START_DATE", label: "시작일", value: "", required:true, dateFormat: "%Y-%m-%d"},
            {type: "input", name: "OWN_VOLUME", label: "수량", value: "", required:true},
            {type: "input", name: "PRICE", label: "금액", value: "", required:true},

        ]},
        {type:"block", offsetLeft:200, blockOffset: 5,  offsetTop:35, list: [
            {type:"button", value:"저장", name:"add"},
            {type:"newcolumn", blockOffset:5},
            {type:"button", value:"취소" ,name:"cancel"}
        ]}
    ];
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.enableLiveValidation(true);
    //전화번호 형식 변환 Base.js
    var cus_phone = dhxForm.getInput("CUS_PHONE");
    cus_phone.addEventListener("input",(e) => {phoneFormat(e.target)}); 
    dhxForm.attachEvent("onButtonClick", function(id){
        if(id=="add"){
            Jq_Ajax_IT_Deal_RecordgAdd(nCdMst);
        }else{
            dhxWinsView.window(nID).close();
        }
    });
    // $("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
    // $("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Add" class="objhide" />');
    // $("#Frm").append('<input type="text" name="CD_MST" id="CD_MST" value="' + nCdMst + '" class="objhide"/>');
    // $("#Frm").append('<input type="text" name="SEQ_NO" id="SEQ_NO" value="0" class="objhide" />');
    
    // var dhxToolbarSubmit = new dhtmlXToolbarObject({
    //     parent: "objToolbarSubmit",
    //     icons_path: "/IMAGES/ICO/",
    //     align: "right"
    // });
    
    // dhxToolbarSubmit.setIconSize(24);
    // dhxToolbarSubmit.setIconsPath("/IMAGES/ICO/");
    // dhxToolbarSubmit.addButton("Save", 1, "<strong>저장</strong>", "/32/694.png", "");
    // dhxToolbarSubmit.addSeparator("sep1", 2);
    // dhxToolbarSubmit.addButton("Cancel", 3, "취소 ", "/32/170.png", "");
    // dhxToolbarSubmit.attachEvent("onClick", function (id) {
    //     if (id == "Save") {
    //         Jq_Ajax_IT_Deal_RecordgAdd(nCdMst); 
    //         //수정중
    //         // parent.dhxGrid.selectItem("M050602", true);
    //         parent.DhxBaseCloseWindowObj("dhxWin_IT_DealRecord_Add", "N");  
    //         DhxLayout_IT_Deal_Record();
        
    //     }
    //     else {
    //         parent.DhxBaseCloseWindowObj('dhxWin_IT_DealRecord_Add', "Y");
            
    //     }
    // });

    // dhtmlXCalendarObject.prototype.langData["ko"] = {
    //     dateformat: '%Y-%m-%d',
    //     monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     weekstart: 7
    // }
    // var dhxCalendar = new dhtmlXCalendarObject(["START_DATE"]);
    // dhxCalendar.setSkin("dhx_skyblue");
    // dhxCalendar.loadUserLanguage("ko");
    // dhxCalendar.hideTime();
}

//IT 구매/계약 관리 roW 상세 이력 수정 팝업
function DhxLayout_IT_Deal_Record_Mod(nSeqNo) {
    var nID = "dhxWin_IT_DealRecord_Add";
    dhxWinsView =  new dhtmlXWindows();
    var dhxWin = dhxWinsView.createWindow({ id: nID, left: 0, top: 0, width: 600, height: 350, center: true });
    dhxWinsView.window(nID).setModal(true);
    dhxWinsView.window(nID).setText('IT 구매/계약 관리 상세 이력 수정');
    dhxWinsView.window(nID).denyResize();

    formData = [
        {type:"settings",position:"label-left", labelWidth:80, offsetLeft:10},     
        {type:"input", name:"FLAG", label:"", value:"Mod", hidden:true },
        {type:"input", name:"SEQ_NO", label:"", value:nSeqNo, hidden:true },
        {type:"input", name:"CUS_NAME", label:"업체명", value:"", inputWidth:415, offsetTop:40, offsetLeft:40, required:true},
        {type:"block", width:560, inputWidth: 200,  list:[
            {type:"input", name:"CUS_USER", label:"업체담당자", value:"", required:true},
            {type:"input", name:"CUS_PHONE", label:"전화번호", value:"", required:false},
            {type:"input", name:"CUS_MAIL", label:"이메일", value:"", required:false, validate:"ValidEmail"},
            {type:"newcolumn" ,offset:0},
            {type:"calendar", name:"START_DATE", label: "시작일", value:"", required:true, dateFormat:"%Y-%m-%d"},
            {type:"input", name:"OWN_VOLUME", label:"수량", value:"", required:true},
            {type:"input", name:"PRICE", label:"금액", value:"", required:true},

        ]},
        {type:"block", offsetLeft:210, blockOffset:5,  offsetTop:40, list: [
            {type: "button", value: "수정", name:"mod"},
            {type: "newcolumn"},
            {type: "button", value: "취소" ,name:"cancel"}
        ]}
    ];

    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.enableLiveValidation(true);
    
    var cus_phone = dhxForm.getInput("CUS_PHONE");
    cus_phone.addEventListener("input",(e) => {phoneFormat(e.target)});

    dhxForm.attachEvent("onButtonClick", function(id){
        if(id=="mod"){
            nCdMst = "";
            Jq_Ajax_IT_Deal_RecordgAdd(nCdMst);
        }else{
            dhxWinsView.window(nID).close();
        }

    });
    // $("body").append('<iframe id="ifrmProcess" name="ifrmProcess" frameborder="0" width="100%" height="100" scrolling="auto" class="objhide"></iframe>');
    // $("#Frm").append('<input type="text" name="FLAG" id="FLAG" value="Mod" class="objhide" />');
    // $("#Frm").append('<input type="text" name="SEQ_NO" id="SEQ_NO" value="' + nSeqNo + '" class="objhide" />');
    
    // var dhxToolbarSubmit = new dhtmlXToolbarObject({
    //     parent: "objToolbarSubmit",
    //     icons_path: "/IMAGES/ICO/",
    //     align: "right"
    // });
    
    // dhxToolbarSubmit.setIconSize(24);
    // dhxToolbarSubmit.setIconsPath("/IMAGES/ICO/");
    // dhxToolbarSubmit.addButton("Save", 1, "<strong>수정</strong>", "/32/694.png", "");
    // dhxToolbarSubmit.addSeparator("sep1", 2);
    // dhxToolbarSubmit.addButton("Cancel", 3, "취소 ", "/32/170.png", "");
    // dhxToolbarSubmit.attachEvent("onClick", function (id) {
    //     if (id == "Save") {
    //         nCdMst = "";
    //         Jq_Ajax_IT_Deal_RecordgAdd(nCdMst);
    //         parent.DhxBaseCloseWindowObj("dhxWin_IT_DealRecord_Mod", "N");
    //         DhxLayout_IT_Deal_Record(); 
                
    //     }
    //     else {
    //         parent.DhxBaseCloseWindowObj('dhxWin_IT_DealRecord_Mod', "Y");
    //     }
    // });

    // dhtmlXCalendarObject.prototype.langData["ko"] = {
    //     dateformat: '%Y-%m-%d',
    //     monthesFNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     monthesSNames: ["01 / ", "02 / ", "03 / ", "04 / ", "05 / ", "06 / ", "07 / ", "08 / ", "09 / ", "10 / ", "11 / ", "12 / "],
    //     daysFNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     daysSNames: ["SU", "MO", "TU", "WE", "TH", "FR", "SA"],
    //     weekstart: 7
    // }
    // var dhxCalendar = new dhtmlXCalendarObject(["START_DATE"]);
    // dhxCalendar.setSkin("dhx_skyblue");
    // dhxCalendar.loadUserLanguage("ko");
    // dhxCalendar.hideTime();
}

// 권한 관리 시작 //
function DhxLayout_SysAuthLayout(){
    /*** Create Object ****/
    dhxLayout1 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "3L",
        skin:"material",
        cells: [
            {id: "a", text: "권한 관리", collapsed_text: "권한 관리", header: true, fix_size: [false, false], width:400},
            {id: "b", text: "권한 허용", collapsed_text: "권한 허용", header: true, fix_size: [false, false]},
            {id: "c", text: "<span style='color:#800000;'>권한 제한</span>", collapsed_text: "권한 제한", header: true, fix_size: [false, false]}
        ]
    });
    /*** Create Object ****/
    dhxTree1 = dhxLayout1.cells("a").attachTree();
    dhxTree1.setImagePath("/LIB/Dhtmlx/imgs/dhxtree_terrace/");
    dhxTree1.enableItemEditor(false);
    dhxTree1.load("/MODULE/ITMS/DATA/XmlForTreeMenu.asp?CD_MODULE=ITMS", function(id){
        dhxTree1.openAllItems(0);
        var nKids = dhxTree1.getAllItemsWithKids();
        var nRows = nKids.split(",");
        $.each(nRows,function(No){
            dhxTree1.setItemColor(nRows[No], "#000000", "#FFFFFF");
        });
    });
    dhxTree1.attachEvent("onSelect", function(id){		
        dhxLayout1.cells("b").progressOn();
        dhxLayout1.cells("c").progressOn();
        DhxGrid_SysAuthList(id);
    });
}
    
function DhxGrid_SysAuthList(nCD){
    /*** Create Object ****/
    dhxToolbar1 = dhxLayout1.cells("b").attachToolbar({
        icons_path: "/IMAGES/ICO/DHX/",
        skin: "dhx_terrace",
        align:"right",
        items:[
            {id: "info", type: "text", text: "<div style='color:#339900; padding-right:100px;'>등록된 사용자, 부서만 허용 합니다.</div>"},
            {id: "Auth", type: "button", text: "권한 편집", img: "77.png"}
        ],
        onClick:function(id){
            DhxWindow_SysAuthReg();
        }
    });
    /*** Create Object ****/
    dhxGridAuthY = dhxLayout1.cells("b").attachGrid();
    dhxGridAuthY.setSkin("dhx_terrace");
    dhxGridAuthY.setImagePath("/QMS/LIB/Dhtmlx/codebase/imgs/dhxgrid_material/");
    dhxGridAuthY.setHeader(",,,,이름,등록일");
    dhxGridAuthY.setInitWidths("0,0,0,0,200,*");
    dhxGridAuthY.setColAlign("left,left,left,left,left,left");
    dhxGridAuthY.setColTypes("ro,ro,ro,ro,ro,ro");
    dhxGridAuthY.setColSorting("str,str,str,str,str,str");
    dhxGridAuthY.setColumnHidden(0,true);
    dhxGridAuthY.setColumnHidden(1,true);
    dhxGridAuthY.setColumnHidden(2,true);
    dhxGridAuthY.setColumnHidden(3,true);
    dhxGridAuthY.init();
    dhxGridAuthY.clearAndLoad("/MODULE/ITMS/DATA/XmlForGridSysAuthGetList.asp?FLAG=MENU&CD_MENU="+nCD+"&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"&AUTH_TYPE=Y", function () {
        var nCnt = dhxGridAuthY.getRowsNum()
        if (nCnt == 0){
            dhxGridAuthY.addRow(dhxGridAuthY.uid(),['','','','','<span style="font-weight:bold; color:#339900;">전체</span>',''],1);
        }
        dhxLayout1.cells("b").progressOff();
    });
    /*** Create Object ****/
    dhxToolbar2 = dhxLayout1.cells("c").attachToolbar({
        icons_path: "/IMAGES/ICO/DHX/",
        skin: "dhx_terrace",
        align:"right",
        items:[
            {id: "info", type: "text", text: "<div style='color:#ff6600; padding-right:100px;'>등록된 사용자, 부서만 제한 합니다.</div>"},
            {id: "Auth", type: "button", text: "권한 편집", img: "77.png"}
        ],
        onClick:function(id){
            DhxWindow_SysAuthReg();
        }
    });
    /*** Create Object ****/
    dhxGridAuthN = dhxLayout1.cells("c").attachGrid();
    dhxGridAuthN.setSkin("dhx_terrace");
    dhxGridAuthN.setImagePath("/QMS/LIB/Dhtmlx/codebase/imgs/dhxgrid_material/");
    dhxGridAuthN.setHeader(",,,,이름,등록일");
    dhxGridAuthN.setInitWidths("0,0,0,0,200,*");
    dhxGridAuthN.setColAlign("left,left,left,left,left,left");
    dhxGridAuthN.setColTypes("ro,ro,ro,ro,ro,ro");
    dhxGridAuthN.setColSorting("str,str,str,str,str,str");
    dhxGridAuthN.setColumnHidden(0,true);
    dhxGridAuthN.setColumnHidden(1,true);
    dhxGridAuthN.setColumnHidden(2,true);
    dhxGridAuthN.setColumnHidden(3,true);
    dhxGridAuthN.init();
    dhxGridAuthN.clearAndLoad("/MODULE/ITMS/DATA/XmlForGridSysAuthGetList.asp?FLAG=MENU&CD_MENU="+nCD+"&ID_USER="+$.cookie('ck_Cd_Emp')+"&CD_ORG="+$.cookie('ck_Cd_Org')+"&AUTH_TYPE=N", function () {
        var nCnt = dhxGridAuthN.getRowsNum()
        if (nCnt == 0){
            dhxGridAuthN.addRow(dhxGridAuthN.uid(),['','','','','<span style="font-weight:bold; color:#ff6600;">제한없음</span>',''],1);
        }
        dhxLayout1.cells("c").progressOff();
    });
}

function DhxWindow_SysAuthReg(){
    var nCD = dhxTree1.getSelectedItemId();
    /*** Create Object ****/
    dhxWinsAuth = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nID = "DhxWdmsAuth" ;
    var dhxWin = dhxWinsAuth.createWindow({ id: nID, left: 0, top: 0, width: 700, height: 600, center: true });
    dhxWinsAuth.window(nID).setModal(true);
    dhxWinsAuth.window(nID).setText('권한편집');
    dhxWinsAuth.window(nID).denyResize();
    /*** Create Object ****/
    var dhxToolbarAuth = dhxWin.attachToolbar({
        icons_path: "/IMAGES/ICO/DHX/",
        skin: "dhx_terrace",
        items:[
            {type: "text", id: "info", text: "<span style='color:#0033ff;'>※ 드래그(Drag)해서 추가 하세요!</span><span style='padding-left:10px; color:#ff6600;'>※ 더블클릭(Double Click)하면 삭제 됩니다.</span>"},
            {id: "Confirm", type: "button", text: "<strong>완료</strong>", img: "133.png"},
            {id: "Cancel", type: "button", text: "취소", img: "131.png"}
        ],
        onClick:function(id){
            switch (id) {
                case "Confirm":
                    dhxWinsAuth.window("DhxWdmsAuth").progressOn();
                    Ajax_SysAuthApply(nCD);
                break;
                case "Cancel":
                    dhxWinsAuth.window("DhxWdmsAuth").close();
                break;
            }
        }
    });
    dhxToolbarAuth.setIconSize(24);
    dhxToolbarAuth.addSpacer("info");
    /*** Create Object ****/
    dhxLayoutAuth = dhxWin.attachLayout({
        pattern: "3L",
        skin: "dhx_terrace",
        cells: [
            {id: "a", text: "TAB", collapsed_text: "TAB", header: false, fix_size: [false, false]},
            {id: "b", text: "허용", collapsed_text: "열람", header: true, fix_size: [false, false], width:300},
            {id: "c", text: "제한", collapsed_text: "편집", header: true, fix_size: [false, false]}
        ]
    });
    /*** Create Object ****/
    var dhxTabbar = dhxLayoutAuth.cells("a").attachTabbar({
        arrows_mode:"auto",
        tabs: [
            { id: "User", text: "임직원", active: true },
            { id: "Org", text: "조직도" }
        ]
    });
    /*** Create Object ****/
    var dhxGridUser = dhxTabbar.tabs("User").attachGrid();
    dhxGridUser.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGridUser.setHeader("ID,이름,부서");
    dhxGridUser.attachHeader("#text_filter,#text_filter,#text_filter");
    dhxGridUser.setInitWidths("0,140,*");
    dhxGridUser.setColAlign("left,left,left");
    dhxGridUser.setColTypes("ro,ro,ro");
    dhxGridUser.setColSorting("str,str,str");
    dhxGridUser.enableDragAndDrop(true);
    dhxGridUser.enableMercyDrag(true);
    dhxGridUser.init();
    dhxGridUser.attachEvent("onDrag", function(sId,tId,sObj,tObj,sInd,tInd){
        return false;
    });
    dhxGridUser.clearAndLoad("/QMS/DATA/XmlforGridUserList.asp", function () {
        dhxGridUser.forEachRow(function (id) {
            dhxGridUser.setCellTextStyle(id, 1, "color:#0033ff; font-weight:bold;");
        });
    });
    /*** Create Object ****/
    var dhxTreeGrid = dhxTabbar.tabs("Org").attachGrid();
    dhxTreeGrid.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxTreeGrid.setHeader("ID,이름");
    dhxTreeGrid.setInitWidths("0,*");
    dhxTreeGrid.setColAlign("left,left");
    dhxTreeGrid.setColTypes("ro,tree");
    dhxTreeGrid.setColSorting("na,na");
    dhxTreeGrid.enableEditEvents(false,false);
    dhxTreeGrid.enableDragAndDrop(true);
    dhxTreeGrid.enableMercyDrag(true);
    dhxTreeGrid.setNoHeader(true);
    dhxTreeGrid.init();
    dhxTreeGrid.attachEvent("onDrag", function(sId,tId,sObj,tObj,sInd,tInd){
        return false;
    });
    dhxTreeGrid.load("/QMS/DATA/XmlforTreeGridOrgList.asp");
    /*** Create Object ****/
    dhxGridY = dhxLayoutAuth.cells("b").attachGrid();
    dhxGridY.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGridY.setHeader("ID,이름");
    dhxGridY.setInitWidths("0,*");
    dhxGridY.setColAlign("left,left");
    dhxGridY.setColTypes("ro,ro");
    dhxGridY.setColSorting("na,na");
    dhxGridY.enableDragAndDrop(true);
    dhxGridY.enableMercyDrag(true);
    dhxGridY.setNoHeader(true);
    dhxGridY.init();
    dhxGridY.attachEvent("onRowDblClicked", function(rId,cInd){
        var nID = dhxGridY.cells(rId, 0).getValue() ;
        if (nID != ""){
            dhxGridY.deleteRow(rId);
        }
    });
    dhxGridY.attachEvent("onDrag", function(sId,tId,sObj,tObj,sInd,tInd){
        var nSeq	= 0 ;
        var nID		= sObj.cells(sId, 0).getValue();
        var nStr		= sObj.cells(sId, 1).getValue();
        dhxGridY.forEachRow(function (id) {
            var nUser = dhxGridY.cells(id, 0).getValue();
            if (nUser == nID){
                nSeq = nSeq + 1 ;
            }
        });
        if (nSeq == 0 ){
            var newId			=  (new Date()).getTime();
            dhxGridY.addRow(newId,"", "");
            dhxGridY.cells(newId, 0).setValue(nID);
            dhxGridY.cells(newId, 1).setValue(nStr);
        }
        else {
            ComDhxMessageObj('이미 등록되었습니다.', '');
        }
        return false;
    });
    /*** Create Object ****/
    dhxGridN = dhxLayoutAuth.cells("c").attachGrid();
    dhxGridN.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGridN.setHeader("ID,이름");
    dhxGridN.setInitWidths("0,*");
    dhxGridN.setColAlign("left,left");
    dhxGridN.setColTypes("ro,ro");
    dhxGridN.setColSorting("na,na");
    dhxGridN.enableDragAndDrop(true);
    dhxGridN.enableMercyDrag(true);
    dhxGridN.setNoHeader(true);
    dhxGridN.init();
    dhxGridN.attachEvent("onRowDblClicked", function(rId,cInd){
        var nID = dhxGridN.cells(rId, 0).getValue() ;
        if (nID != ""){
            dhxGridN.deleteRow(rId);
        }
    });
    dhxGridN.attachEvent("onDrag", function(sId,tId,sObj,tObj,sInd,tInd){
        var nSeq	= 0 ;
        var nID		= sObj.cells(sId, 0).getValue();
        var nStr		= sObj.cells(sId, 1).getValue();
        dhxGridN.forEachRow(function (id) {
            var nUser = dhxGridN.cells(id, 0).getValue();
            if (nUser == nID){
                nSeq = nSeq + 1 ;
            }
        });
        if (nSeq == 0 ){
            var newId			=  (new Date()).getTime();
            dhxGridN.addRow(newId,"", "");
            dhxGridN.cells(newId, 0).setValue(nID);
            dhxGridN.cells(newId, 1).setValue(nStr);
        }
        else {
            ComDhxMessageObj('이미 등록되었습니다.', '');
        }
        return false;
    });
    dhxGridAuthY.forEachRow(function (id) {
        if (dhxGridAuthY.cells(id, 0).getValue() != ""){
            var newId1	= (new Date()).getTime()+'1'+id;
            dhxGridY.addRow(newId1,"", "");
            dhxGridY.cells(newId1, 0).setValue(dhxGridAuthY.cells(id, 3).getValue());
            dhxGridY.cells(newId1, 1).setValue(dhxGridAuthY.cells(id, 4).getValue());
        }
    });
    dhxGridAuthN.forEachRow(function (id) {
        if (dhxGridAuthN.cells(id, 0).getValue() != ""){
            var newId2	= (new Date()).getTime()+'2'+id;
            dhxGridN.addRow(newId2,"", "");
            dhxGridN.cells(newId2, 0).setValue(dhxGridAuthN.cells(id, 3).getValue());
            dhxGridN.cells(newId2, 1).setValue(dhxGridAuthN.cells(id, 4).getValue());
        }
    });
}

// 권한 관리 종료 //

// IT 업무관리 설정 시작 //
function Dhx_IT_Setting_Layout() {
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "3T",
        cells: [
            { id: "a", text: "요청 Category", header: false, fix_size: [false, false], height:450 },
            { id: "b", text: "부서리스트", header: false, fix_size: [false, false] },
            { id: "c", text: "사용자", header: false, fix_size: [false, false] }
        ]
    });

    /*** Create Object ****/
    dhxLayout3 = dhxLayout2.cells("a").attachLayout({
        parent: document.body,
        pattern: "3W",
        skin:"material",
        cells: [
            {id: "a", text: "Category", collapsed_text: "Category", header: false},
            {id: "b", text: "Object", collapsed_text: "Object", header: false},
            {id: "c", text: "Action Plan", collapsed_text: "Action Plan", header: false}
        ]
    });
    dhxLayout3.setAutoSize("a", "a;b;c");
    
    DhxList_IT_Setting_Category_GetList();

    // 팀 세팅
    dhxGrid1 = dhxLayout2.cells("b").attachGrid();
    dhxGrid1.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGrid1.setHeader("&nbsp;,,팀");
    dhxGrid1.setInitWidths("20,0,*");
    dhxGrid1.setColAlign("left,left,left");
    dhxGrid1.setColTypes("ro,ro,ro");
    dhxGrid1.setColSorting("na,str,str");
    dhxGrid1.enableRowsHover(true, 'grid_hover');
    dhxGrid1.init();

    dhxGrid1.attachEvent("onRowSelect", function (id, idd) {
        var nCd_Org = dhxGrid1.cells(id, 1).getValue();
        DhxGrid_IT_Setting_Leader_Load(nCd_Org);
    });

    var dhxToolbar2 = dhxLayout2.cells("b").attachToolbar({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/",
        align: "right",
        items: [
        ],
        onClick: function (id) {
        }
    });
    DhxGrid_IT_Setting_Team_Load();
    
    // 인감사용 팀장 권한 세팅
    dhxGrid2 = dhxLayout2.cells("c").attachGrid();
    dhxGrid2.setImagePath("/LIB/Dhtmlx/imgs/dhxgrid_terrace/");
    dhxGrid2.setHeader(",,이름,결재자");
    dhxGrid2.setInitWidths("0,0,150,60");
    dhxGrid2.setColAlign("left,left,left,center");
    dhxGrid2.setColTypes("ro,ro,ro,ra");
    dhxGrid2.setColSorting("na,str,str,str");
    dhxGrid2.enableRowsHover(true, 'grid_hover');
    dhxGrid2.init();

    var dhxToolbar3 = dhxLayout2.cells("c").attachToolbar({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/",
        align: "right",
        items: [
            { type: "button", id: "New", text: "저장", img: "/32/754.png" }
        ],
        onClick: function (id) {
            var nSelRow = "";
            var nCd_Org = "";
            var nStr_ID = "";
            
            nSelRow = dhxGrid1.getSelectedRowId();
            nCd_Org = dhxGrid1.cells(nSelRow, 1).getValue();

            dhxGrid2.forEachRow(function (id) {
                var nChecked = dhxGrid2.cells(id, 3).getValue();
                
                if (nChecked == 1) {
                    nStr_ID = dhxGrid2.cells(id, 1).getValue();                    
                }
            });
            
            Jq_AjaxIT_SettingTeamLeaderProc(nCd_Org, nStr_ID);
        }
    });
}

function DhxGrid_IT_Setting_Team_Load() {    
    var loadUrl = "/MODULE/ITMS/DATA/XmlforGrid_IT_Setting_TeamList.asp";
    dhxGrid1.clearAndLoad(loadUrl, function () {
    });
}

function DhxGrid_IT_Setting_Leader_Load(nCd_Org) {   
    dhxLayout2.cells("c").progressOn();
    var loadUrl = "/MODULE/ITMS/DATA/XmlforGrid_IT_Setting_Leader_List.asp?CD_ORG=" + nCd_Org;
    dhxGrid2.clearAndLoad(loadUrl, function () {
        dhxLayout2.cells("c").progressOff();
    });
}

function DhxList_IT_Setting_Category_GetList(){
    var nSeq_No = ""
    /*** Create Object ****/
    dhxMenu = new dhtmlXMenuObject({
        context: true,
        image_path:"/IMAGES/ICO/DHX/",
        skin : "material",
        items:[
            {id:"Modify", text:"수정", img:"/IMAGES/ICO/DHX/27.png"},
            {id:"Del", text:"삭제", img:"/IMAGES/ICO/DHX/144.png"}
        ]
    });
    dhxMenu.renderAsContextMenu();
    dhxMenu.attachEvent("onBeforeContextMenu", function(zoneId,ev){
        var nData	= DhxListE.get(zoneId);
        nSeq_No		= nData.Seq_No ;
        nStr_Object	= nData.Str_Object.replace(/<br>/gi,"\n") ;
        nNo_Sort = nData.No_Sort;
        if (nSeq_No == ""){
            dhxMenu.hide();
            return false;
        }
        else{
            return true;
        }
    });
    dhxMenu.attachEvent("onClick",function(menuitemId, type){
        if (menuitemId == "Modify"){            
            DhxWindow_IT_Setting_Category_Modify("System", 'MAJOR', nSeq_No, '', nStr_Object, nNo_Sort);
        }
        else{
            dhtmlx.confirm({
                title: "경고",	type: "confirm-error",	text: "삭제 하겠습니까?", ok: "삭제", cancel	: "취소",
                callback	:
                    function(result) {
                        if (result == true){
                            Ajax_IT_Setting_Category_Proc('DELETE', 'MAJOR', '', '', '', nSeq_No, '', 0);
                        }
                        else {
                            return ;
                        }
                    }
            });
        }
    });
    /*** Create Object ****/
    DhxListE = dhxLayout3.cells("a").attachList({
        type: {
            template: "<div style='width:100%; clear:both; font-size:20px; font-weight:bold; padding:10px 0 5px 0;'>#Str_Object#</div><div style='display:none;'>#No_Sort#</div>",
            padding: 10,
            height:"auto"
        }
    });
    DhxListE.attachEvent("onAfterSelect", function (id){
        var nData			= DhxListE.get(id);
        var nDate_Reg		= nData.Date_Reg ;
        var nCd_Object		= nData.Cd_Object ;
        var nStr_Object		= nData.Str_Object ;
        
        if (nCd_Object == ""){
            DhxListE.unselect(id);
            DhxWindow_IT_Setting_Category_Reg('SYSTEM', 'MAJOR', 0, '');
        }
        else{
            if (DhxListA){
                DhxListA.clearAll();
            }
            DhxList_IT_Setting_Category_ObjectGetList(nCd_Object);
        }
        return true;
    });
    DhxListE.attachEvent("onBeforeContextMenu",function(id,e){
        dhxMenu._doOnContextBeforeCall(e,{id:id});
        DhxListE.select(id);
        return 	false;
    });
    DhxListE.clearAll();
    DhxListE.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG=MAJOR&CD_PARENT=", function(){
        dhxLayout3.cells("a").progressOff();
    });
}

function DhxWindow_IT_Setting_Category_Reg(nTxt, nType, nSeq, nParent){		    
    /*** Create Object ****/
    dhxWinsObj = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nHeight = 0;

    if(nTxt == "업무") {
        nHeight = 250;
    } else {
        nHeight = 220;
    }
    var nID = "DhxWinObject" ;
    var dhxWin = dhxWinsObj.createWindow({ id: nID, left: 0, top: 0, width: 445, height: nHeight, center: true });
    dhxWinsObj.setSkin('material');
    dhxWinsObj.window(nID).setModal(true);
    dhxWinsObj.window(nID).setText(nTxt + ' 등록');
    dhxWinsObj.window(nID).denyResize();
    var formData = [
        {type: "input", name:"Contents", rows: 4, value: "", width:420},        
        {type: "input", label:"순서:", name:"SortNo", value: "0", width:60},
        {type: "checkbox", name:"chkApproval", label: "결재 반영"},
        {type: "button", name:"Save", value: "등록", offsetLeft: 180, offsetTop: 7}
    ];
    /*** Create Object ****/
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(name){
        var nFlag		= "REG";
        var nCD			= (new Date()).getTime();
        var nValue		= dhxForm.getItemValue("Contents");
        var nchkApproval= dhxForm.getItemValue("chkApproval");
        var nSortNo = dhxForm.getItemValue("SortNo");

        if (nValue != "") 	{
            dhxWinsObj.window("DhxWinObject").progressOn();
            Ajax_IT_Setting_Category_Proc(nFlag, nType, nCD, nValue, nchkApproval, nSeq, nParent, nSortNo);
        }
    });
    if(nTxt == "업무") {
        dhxForm.showItem("chkApproval");
    }
    else {
        dhxForm.hideItem("chkApproval");
    }
}

function DhxWindow_IT_Setting_Category_Modify(nTxt, nType, nSeq, nParent, nStr, nNo_Sort){
    /*** Create Object ****/
    dhxWinsObj = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nHeight = 0;

    if(nTxt == "업무") {
        nHeight = 250;
    } else {
        nHeight = 220;
    }

    var nCheckApproval = 0;
    if(nStr.indexOf("(결재)") != -1) {
        nCheckApproval = 1;
        nStr = nStr.replace(" (결재)", "");
    }
    var nID = "DhxWinObject" ;
    var dhxWin = dhxWinsObj.createWindow({ id: nID, left: 0, top: 0, width: 445, height: nHeight, center: true });
    dhxWinsObj.setSkin('material');
    dhxWinsObj.window(nID).setModal(true);
    dhxWinsObj.window(nID).setText(nTxt+' 수정');
    dhxWinsObj.window(nID).denyResize();
    var formData = [
        {type: "input", name:"Contents", rows: 4, value: nStr, width:420},
        {type: "input", name:"SortNo", label:"순서:", value: nNo_Sort, width:60},
        {type: "checkbox", name:"chkApproval", label: "결재 반영"},
        {type: "button", name:"Save", value: "등록", offsetLeft: 180, offsetTop: 7}
    ];
    /*** Create Object ****/
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(name){
        var nFlag		= "MODIFY";
        var nCD			= "";
        var nValue		= dhxForm.getItemValue("Contents");
        var nchkApproval = dhxForm.getItemValue("chkApproval");
        var nSortNo = dhxForm.getItemValue("SortNo");

        if (nValue != "") 	{
            dhxWinsObj.window("DhxWinObject").progressOn();
            Ajax_IT_Setting_Category_Proc(nFlag, nType, nCD, nValue, nchkApproval, nSeq, nParent, nSortNo);
        }
    });

    if(nTxt == "업무") {
        dhxForm.showItem("chkApproval");
    }
    else {
        dhxForm.hideItem("chkApproval");
    }

    if(nCheckApproval == 1) {
        dhxForm.checkItem("chkApproval");
    }
}


function DhxList_IT_Setting_Category_ObjectGetList(nParent){
    var nSeq_No = ""
    /*** Create Object ****/
    dhxMenuO = new dhtmlXMenuObject({
        context: true,
        image_path:"/IMAGES/ICO/DHX/",
        skin : "material",
        items:[
            {id:"Modify", text:"수정", img:"/IMAGES/ICO/DHX/27.png"},
            {id:"Del", text:"삭제", img:"/IMAGES/ICO/DHX/144.png"}
        ]
    });
    dhxMenuO.renderAsContextMenu();
    dhxMenuO.attachEvent("onBeforeContextMenu", function(zoneId,ev){
        var nData	= DhxListO.get(zoneId);
        nSeq_No		= nData.Seq_No ;
        nStr_Object	= nData.Str_Object.replace(/<br>/gi,"\n") ;
        nNo_Sort = nData.No_Sort;
        if (nSeq_No == ""){
            dhxMenuO.hide();
            return false;
        }
        else{
            return true;
        }
    });
    dhxMenuO.attachEvent("onClick",function(menuitemId, type){
        if (menuitemId == "Modify"){
            DhxWindow_IT_Setting_Category_Modify("업무", 'MINOR', nSeq_No, nParent, nStr_Object, nNo_Sort);
        }
        else{
            dhtmlx.confirm({
                title: "경고",	type: "confirm-error",	text: "삭제 하겠습니까?", ok: "삭제", cancel	: "취소",
                callback	:
                    function(result) {
                        if (result == true){
                            Ajax_IT_Setting_Category_Proc('DELETE', 'MINOR', '', '', '', nSeq_No, nParent, 0);
                        }
                        else {
                            return ;
                        }
                    }
            });
        }
    });
    /*** Create Object ****/
    DhxListO = dhxLayout3.cells("b").attachList({
        type: {
            template: "<div style='width:100%; clear:both; font-size:20px; font-weight:bold; padding:10px 0 5px 0;'>#Str_Object#</div><div style='display:none;'>#No_Sort#</div>",
            padding: 10,
            height:"auto"
        }
    });
    DhxListO.attachEvent("onAfterSelect", function (id){
        var nData			= DhxListO.get(id);
        var nDate_Reg		= nData.Date_Reg ;
        var nCd_Object		= nData.Cd_Object ;
        var nStr_Object		= nData.Str_Object ;
        var nNo_Sort        = nData.No_Sort;
        if (nCd_Object == ""){
            DhxListO.unselect(id);
            DhxWindow_IT_Setting_Category_Reg("업무", 'MINOR', 0, nParent);
        }
        else{
            DhxList_IT_Setting_Category_ActionGetList(nCd_Object);
        }
        return true;
    });
    DhxListO.attachEvent("onBeforeContextMenu",function(id,e){
        dhxMenuO._doOnContextBeforeCall(e,{id:id});
        DhxListO.select(id);
        return 	false;
    });
    DhxListO.clearAll();
    
    DhxListO.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG=MINOR&CD_PARENT="+nParent, function(){				
        dhxLayout3.cells("b").progressOff();
    });
}

function DhxList_IT_Setting_Category_ActionGetList(nParent){
    var nSeq_No = ""
    /*** Create Object ****/
    dhxMenuA = new dhtmlXMenuObject({
        context: true,
        image_path:"/IMAGES/ICO/DHX/",
        skin : "material",
        items:[
            {id:"Modify", text:"수정", img:"/IMAGES/ICO/DHX/27.png"},
            {id:"Del", text:"삭제", img:"/IMAGES/ICO/DHX/144.png"}
        ]
    });
    dhxMenuA.renderAsContextMenu();
    dhxMenuA.attachEvent("onBeforeContextMenu", function(zoneId,ev){
        var nData		= DhxListA.get(zoneId);
        nSeq_No		= nData.Seq_No ;
        nStr_Object	= nData.Str_Object.replace(/<br>/gi,"\n") ;
        if (nSeq_No == ""){
            dhxMenuA.hide();
            return false;
        }
        else{
            return true;
        }
    });
    dhxMenuA.attachEvent("onClick",function(menuitemId, type){
        if (menuitemId == "Modify"){
            DhxWindow_IT_Setting_Category_User_Modify("처리 담당자", 'USER', nSeq_No, nParent, nStr_Object);
        }
        else{
            dhtmlx.confirm({
                title: "경고",	type: "confirm-error",	text: "삭제 하겠습니까?", ok: "삭제", cancel	: "취소",
                callback	:
                    function(result) {
                        if (result == true){
                            Ajax_IT_Setting_Category_Proc('DELETE', 'USER', '', '', '', nSeq_No, nParent, 0);
                        }
                        else {
                            return ;
                        }
                    }
            });
        }
    });
/*** Create Object ****/
    DhxListA = dhxLayout3.cells("c").attachList({
        type: {
            template: "<div style='width:100%; clear:both; font-size:20px; font-weight:bold; padding:10px 0 5px 0;'>#Str_Object#</div>",
            padding: 10,
            height:"auto"
        }
    });
    DhxListA.attachEvent("onAfterSelect", function (id){
        var nData			= DhxListA.get(id);
        var nDate_Reg		= nData.Date_Reg ;
        var nCd_Object		= nData.Cd_Object ;
        var nStr_Object		= nData.Str_Object ;
        if (nCd_Object == ""){
            DhxListA.unselect(id);
            DhxWindow_IT_Setting_Category_User_Reg("처리 담당자", 'USER', 0, nParent);
        }
        return true;
    });
    DhxListA.attachEvent("onBeforeContextMenu",function(id,e){
        dhxMenuA._doOnContextBeforeCall(e,{id:id});
        DhxListA.select(id);
        return 	false;
    });
    DhxListA.clearAll();
    DhxListA.load("/MODULE/ITMS/DATA/XmlForList_IT_Setting_Category.asp?FLAG=USER&CD_PARENT="+nParent+"", function(){
        dhxLayout3.cells("c").progressOff();
    });
}

function DhxWindow_IT_Setting_Category_User_Reg(nTxt, nType, nSeq, nParent){		
    /*** Create Object ****/
    dhxWinsObj = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nID = "DhxWinObject" ;
    var dhxWin = dhxWinsObj.createWindow({ id: nID, left: 0, top: 0, width: 360, height: 180, center: true });
    dhxWinsObj.setSkin('material');
    dhxWinsObj.window(nID).setModal(true);
    dhxWinsObj.window(nID).setText(nTxt + ' 등록');
    dhxWinsObj.window(nID).denyResize();
    /*** Create Object ****/
    var nOpts		= [];
    var nReqData1	= Ajax_IT_Category_User_GetList('LIST', ''); // Function Call
    var nRow1		= nReqData1.split("<,>");

    nOpts.push({text: "", value: ""});
    $.each(nRow1,function(No){
        var nCol		= nRow1[No].split("</>");
        nOpts.push({text: nCol[1], value: nCol[0]});
    });

    var formData = [
        {type: "fieldset", label: nTxt, inputWidth: 320, offsetLeft: 15, list:[
            {type: "combo", name: "cdUser", label: "", labelWidth: 0, inputWidth: 260, readonly: true, options: nOpts},
            {type: "button", name:"Save", value: "등록", offsetLeft: 100, offsetTop: 7}
        ]}
    ];
    
    /*** Create Object ****/
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(name){
        var nFlag		= "REG";
        var nCD			= (new Date()).getTime();
        var nValue		= dhxForm.getItemValue("cdUser");
        
        if (nValue != "") 	{
            dhxWinsObj.window("DhxWinObject").progressOn();
            Ajax_IT_Setting_Category_Proc(nFlag, nType, nCD, nValue, '', nSeq, nParent, 0);
        } else {
            parent.DhxMessageObj('처리 담당자를 선택해 주세요..', '');
            return;
        }
    });
}

function DhxWindow_IT_Setting_Category_User_Modify(nTxt, nType, nSeq, nParent, nStr){
    /*** Create Object ****/
    dhxWinsObj = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nID = "DhxWinObject" ;
    var dhxWin = dhxWinsObj.createWindow({ id: nID, left: 0, top: 0, width: 360, height: 180, center: true });
    dhxWinsObj.setSkin('material');
    dhxWinsObj.window(nID).setModal(true);
    dhxWinsObj.window(nID).setText(nTxt+' 수정');
    dhxWinsObj.window(nID).denyResize();

    var nOpts		= [];
    var nReqData1	= Ajax_IT_Category_User_GetList('LIST', ''); // Function Call
    var nRow1		= nReqData1.split("<,>");

    nOpts.push({text: "", value: ""});
    $.each(nRow1,function(No){
        var nCol		= nRow1[No].split("</>");
        nOpts.push({text: nCol[1], value: nCol[0]});
    });

    var formData = [
        {type: "fieldset", label: nTxt, inputWidth: 320, offsetLeft: 15, list:[
            {type: "combo", name: "cdUser", label: "", labelWidth: 0, inputWidth: 260, readonly: true, options: nOpts},
            {type: "button", name:"Save", value: "저장", offsetLeft: 100, offsetTop: 7}
        ]}
    ];
    /*** Create Object ****/
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(name){
        var nFlag		= "MODIFY";
        var nCD			= "";
        var nValue		= dhxForm.getItemValue("cdUser");
        if (nValue != "") 	{
            dhxWinsObj.window("DhxWinObject").progressOn();
            Ajax_IT_Setting_Category_Proc(nFlag, nType, nCD, nValue, '', nSeq, nParent, 0);
        }
    });
}

// IT 업무관리 설정 종료 //

// IT 업무 요청 리스트 //
function Dhx_IT_Request_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "업무 요청 목록", header: false, fix_size: [false, false]}
        ]
    });

    // dhxToolbar2 = dhxLayout2.cells("a").attachToolbar({
    //     parent: "objToolbar",
    //     icons_path: "/IMAGES/ICO/"
    // });
    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2022; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 1, "", "/Dhx/25.png", "");
    dhxToolbar2.addSpacer("Year");				
    dhxToolbar2.setListOptionSelected("Year", BaseSetDate('','Y'));

    dhxToolbar2.attachEvent("onClick", function(id) {
        RealGrid_IT_RequestList();
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        if(nCdStatus == "R"){
            parent.DhxBaseCreateWindowObj('DhxWinIPWorkMstReg', '업무 요청 등록', '/Module/ITMS/IT_Work_Reg.html?' + nSeqNo + '/' + nCdMst, 0, 0, 1200, nHeight, true, true, 'Y', 'N');
        } else {
            DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/REQUEST', 0, 0, 1200, nHeight, true, true, 'N', 'N');
        }
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_RequestList();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_RequestList(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Request_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}

// IT 업무관리 설정 시작 //
function Dhx_IT_Work_Reg_Layout(nSeqNo) {
    dhxLayout = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "3L",
        cells: [
            { id: "a", text: "업무 내용", header: false, fix_size: [false, false] },
            { id: "b", text: "업무 분류", header: false, fix_size: [false, false], width:330, height:190 },
            { id: "c", text: "첨부 파일", header: false, fix_size: [false, false] }
        ]
    });

    dhxLayout.cells("c").attachObject("objUpload");    
    /*** Create Dext5Upload ****/
    fn_create("ITMS_WORK");

    /*** Create Object ****/
    var nBtnOffsetLeft = 0;

    if(nSeqNo == "") {
        nBtnOffsetLeft = 80;
    } else {
        nBtnOffsetLeft = 30;
    }
    var formData = [
        {type: "block",  offsetLeft:0, offsetTop:10, width:"auto", list: [
            {type: "combo", name: "cboSystem", label: "System", labelWidth: 80, inputWidth: 200, readonly: true},
            {type: "combo", name: "cboWork", label: "요청업무", labelWidth: 80, inputWidth: 200, readonly: true},
            {type: "combo", name: "cboUser", label: "처리 담당자", labelWidth: 80, inputWidth: 200, readonly: true},
            {type: "checkbox", name: "chkUrgency", label: "긴급", labelWidth: 80, inputWidth: 200},
            {type: "block", offsetLeft: nBtnOffsetLeft, list:[
                {type: "button", name: "btnSave", value: "요청등록"},
                {type: "newcolumn"},
                {type: "button", name: "btnDelete", value: "요청삭제"}
            ]}
        ]},
    ];
    dhxForm = dhxLayout.cells("b").attachForm(formData);
        
    if(nSeqNo == "") {
        dhxForm.hideItem("btnDelete");
    }

    dhxForm.attachEvent("onKeyUp",function(inp, ev, name, value){
        BaseSpecialCharCheck2(inp); // Function Call //
    });

    dhxForm.attachEvent("onButtonClick", function(name){
        if(name == "btnSave") {
            var nReturn = Jq_Work_RegValidity();
            
            if (nReturn == true) {
                var nAttachFlag = false;

                if (DEXT5UPLOAD.GetTotalFileCount("dext5upload") > 0) {
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5upload");
                } else if ( DEXT5UPLOAD.GetDeleteListForJson("dext5upload") != null){
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5upload");
                }

                if(nAttachFlag == false){
                    Jq_Work_RegSave(nSeqNo);
                }
            }
        } else if(name == "btnDelete"){
            dhtmlx.confirm({
                title: "Warning",
                type: "confirm-error",
                text: "삭제 하겠습니까?",
                ok: "확인",
                cancel: "취소",
                callback:
                function (result) {
                    if (result == true) {
                        Jq_Work_Delete(nSeqNo);
                    }
                    else {
                        return;
                    }
                }
            });
        }
    });

    var dhxCboSystem = dhxForm.getCombo("cboSystem");
    var dhxCboWork = dhxForm.getCombo("cboWork");
    var dhxCboUser = dhxForm.getCombo("cboUser");

    // System Combo Load
    var nReqData1	= Ajax_IT_Category_GetList('MAJOR', '');
    var nRow1		= nReqData1.split("<,>");

    $.each(nRow1,function(No){
        var nCol		= nRow1[No].split("</>");
        dhxCboSystem.addOption([[nCol[0], nCol[1]]]);
    });    

    // 요청업무 Combo Load
    dhxCboSystem.attachEvent("onChange", function(value, text){
        var nReqData2	= Ajax_IT_Category_GetList('MINOR', value);
        var nRow2		= nReqData2.split("<,>");
        dhxCboWork.unSelectOption();
        dhxCboWork.clearAll();
        dhxCboUser.unSelectOption();
        dhxCboUser.clearAll();

        $.each(nRow2,function(No){
            var nCol		= nRow2[No].split("</>");
            dhxCboWork.addOption([[nCol[0], nCol[1]]]);
        });
    });
    
    // 요청업무 Combo Load
    dhxCboWork.attachEvent("onChange", function(value, text){
        var nReqData3	= Ajax_IT_Category_GetList('USER', value);
        var nRow3		= nReqData3.split("<,>");
        dhxCboUser.unSelectOption();
        dhxCboUser.clearAll();

        $.each(nRow3,function(No){
            var nCol		= nRow3[No].split("</>");
            dhxCboUser.addOption([[nCol[0], nCol[1]]]);
        });
    });
    dhxLayout.cells("a").attachObject("objWork");

    var nLayoutHeight = dhxLayout.cells("a").getHeight();

    /*** Create Dext5Editor ****/
    DEXT5.config.EditorHolder = "objDext5Editor";
    DEXT5.config.Lang		= "ko-kr";
    DEXT5.config.Height		= nLayoutHeight - 60 + "px";
    new Dext5editor("EditorContents");    
}


// IT 업무요청 상세보기 시작 //
function Dhx_IT_Work_Detail_Layout(nSeqNo, nCdStatus, nMenuType) {
    dhxLayout = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "2U",
        cells: [
            { id: "a", text: "업무 내용", header: false, fix_size: [false, false] },
            { id: "b", text: "결재 리스트", header: false, fix_size: [false, false], width:260}
        ]
    });
    
    /*** Create Object ****/
    DhxList = dhxLayout.cells("b").attachList({
        type: {
            template: "<div style='width:100%;'><div style='clear:both; font-weight:bold; padding:10px 0 5px 0;'>#Str_User#</div><div style='float:left;width:40%; color:#a8d2d2;'>#Str_Status#</div><div style='width:60%;float:right; text-align:right; color:#c0c0c0;'>#Str_Date#</div><div style='clear:both; font-weight:bold; padding:10px 0 5px 0;'>#Str_Comment#</div></div>",
            padding: 10,
            height:"auto"
        }
    });
    
    DhxList.load("/MODULE/ITMS/DATA/XmlForList_IT_Work_ApprovalList.asp?SEQ_NO="+nSeqNo, function(){        
        if(nMenuType == "APPROVAL"){
            var nApprovalCnt = DhxList.dataCount();
            if(nCdStatus == "RC" || (nCdStatus == "R" && nApprovalCnt == 4)) {     // 담당자 결재시
                dhxToolbar.showItem("btnChange");
            }
        }        
    });

    /*** Create Object ****/
    dhxToolbar = dhxLayout.attachToolbar({
        icons_path: "/IMAGES/ICO/DHX/",
        skin: "dhx_terrace",
        align:"right",
        items:[            
            {id: "btnChange", type: "button", text: "처리 담당자 변경", img: ""},
            {id: "btnSave", type: "button", text: "저장", img: ""},
            {id: "btnProcess", type: "button", text: "처리완료", img: ""},
            {id: "btnApproval", type: "button", text: "결재", img: ""},
            {id: "btnClose", type: "button", text: "닫기", img: ""}
        ],
        onClick:function(id){
            if(id == "btnApproval"){
                DhxWindow_IT_Work_Approval(nSeqNo, nCdStatus);
            } else if (id == "btnSave") {
                $('#STR_TYPE').val("SAVE");
                var nAttachFlag = false;

                if (DEXT5UPLOAD.GetTotalFileCount("dext5uploadR") > 0) {
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5uploadR");
                } else if ( DEXT5UPLOAD.GetDeleteListForJson("dext5uploadR") != null){
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5uploadR");
                }
                
                if(nAttachFlag == false){
                    Jq_Work_ResultSave();
                }
            } else if (id == "btnProcess") {
                $('#STR_TYPE').val("PROCESS");
                var nAttachFlag = false;

                if (DEXT5UPLOAD.GetTotalFileCount("dext5uploadR") > 0) {
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5uploadR");
                } else if ( DEXT5UPLOAD.GetDeleteListForJson("dext5uploadR") != null){
                    nAttachFlag = true;
                    DEXT5UPLOAD.Transfer("dext5uploadR");
                }
                
                if(nAttachFlag == false){
                    Jq_Work_ResultSave();
                }
            } else if(id == "btnClose") {
                parent.DhxBaseCloseWindowObj('DhxWinIPWorkMstDetail', 'N');
            } else if(id == "btnChange") {
                DhxWindow_IT_Work_User_Change(nSeqNo);
            }
        }
    });
    dhxToolbar.addSeparator("Sep0", 1);
    dhxToolbar.addSeparator("Sep0", 5);

    dhxToolbar.hideItem("btnChange");

    if(nMenuType == "APPROVAL") {
        dhxToolbar.hideItem("btnSave");
        dhxToolbar.hideItem("btnProcess");
    } else if(nMenuType == "PROCESS") {
        dhxToolbar.hideItem("btnApproval");
    } else {
        dhxToolbar.hideItem("btnSave");
        dhxToolbar.hideItem("btnProcess");
        dhxToolbar.hideItem("btnApproval");
        dhxToolbar.hideItem("Sep0");
    }
    dhxLayout.cells("a").attachObject("objWork");    

    /*** Create Object ****/
    dhxToolbarSub = new dhtmlXToolbarObject({
        parent: "objToolbarSub",
        skin: "material",
        icons_path: "/IMAGES/ICO/"
    });
    
    dhxToolbarSub.addButtonTwoState("Request", 0, '요청내용', "", "");
    dhxToolbarSub.addButtonTwoState("Result", 1, '처리결과', "", "");

    dhxToolbarSub.attachEvent("onStateChange", function(id, state){
        if(id == "Request" && state == true) {            
            document.getElementById('objEditor_1').style.display = "block";
            document.getElementById('objEditor_2').style.display = "none";
            
            dhxToolbarSub.setItemState("Request", true);
            dhxToolbarSub.setItemState("Result", false);

            document.getElementById('objUpload').style.display = "block";
            document.getElementById('objUploadR').style.display = "none";
        } else if(id == "Result" && state == true) {
            document.getElementById('objEditor_1').style.display = "none";
            document.getElementById('objEditor_2').style.display = "block";
            
            dhxToolbarSub.setItemState("Request", false);
            dhxToolbarSub.setItemState("Result", true);
            
            document.getElementById('objUpload').style.display = "none";
            document.getElementById('objUploadR').style.display = "block";
        }
    });
    dhxToolbarSub.setItemState("Request", true);
    dhxToolbarSub.setItemState("Result", false);
    

}

function DhxWindow_IT_Work_User_Change(nSeqNo){		
    /*** Create Object ****/
    dhxWinsObj = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx/imgs/dhxwins_terrace/"
    });
    var nID = "DhxWinObject" ;
    var dhxWin = dhxWinsObj.createWindow({ id: nID, left: 0, top: 0, width: 360, height: 180, center: true });
    dhxWinsObj.setSkin('material');
    dhxWinsObj.window(nID).setModal(true);
    dhxWinsObj.window(nID).setText('처리 담당자 변경');
    dhxWinsObj.window(nID).denyResize();
    /*** Create Object ****/
    var nOpts		= [];
    var nReqData1	= Ajax_IT_Category_User_GetList('LIST', ''); // Function Call
    var nRow1		= nReqData1.split("<,>");

    nOpts.push({text: "", value: ""});
    $.each(nRow1,function(No){
        var nCol		= nRow1[No].split("</>");
        nOpts.push({text: nCol[1], value: nCol[0]});
    });

    var formData = [
        {type: "fieldset", label: "처리 담당자", inputWidth: 320, offsetLeft: 15, list:[
            {type: "combo", name: "cdUser", label: "", labelWidth: 0, inputWidth: 260, readonly: true, options: nOpts},
            {type: "button", name:"Save", value: "등록", offsetLeft: 100, offsetTop: 7}
        ]}
    ];
    
    /*** Create Object ****/
    dhxForm = dhxWin.attachForm(formData, true);
    dhxForm.attachEvent("onButtonClick", function(name){
        var nValue		= dhxForm.getItemValue("cdUser");
        
        if (nValue != "") 	{
            dhxWinsObj.window("DhxWinObject").progressOn();
            
            Ajax_IT_Work_User_Change_Proc(nSeqNo, nValue);
        } else {
            ComDhxMessageObj('처리 담당자를 선택해 주세요..', '');
            return;
        }
    });
}

function Fnc_DextBind_Work_Detail(nHeight, nCdStatus, nMenuType) {    
    nResultReg = 'Y';

    /*** Create Dext5Editor ****/
    DEXT5.config.EditorHolder = "objDext5Editor_1";    
    DEXT5.config.Lang		= "ko-kr";
    DEXT5.config.Height		= "420px";
    DEXT5.config.Mode       = "view";
    new Dext5editor("EditorContents_1");
    
    DEXT5.config.EditorHolder = "objDext5Editor_2";
    DEXT5.config.Lang		= "ko-kr";
    DEXT5.config.Height		= "420px";    
    
    if(nMenuType == 'PROCESS'){
        nResultReg = "Y";
        DEXT5.config.Mode = "edit";
    } else {
        nResultReg = "N";
        DEXT5.config.Mode = "view";
    }
    
    new Dext5editor("EditorContents_2");

    /*** Create Dext5Upload ****/
    fn_create('ITMS_WORK', $(document.body).height() - nHeight, nResultReg);
}

function DhxWindow_IT_Work_Approval(nSeq, nCdStatus){
    /*** Create Object ****/
    dhxWinsItWorkApp = new dhtmlXWindows({
        image_path:"/LIB/Dhtmlx_v51/codebase/imgs/dhxwins_terrace/"
    });
    var nID = "dhxWinsItWorkApp";
    var dhxWin = dhxWinsItWorkApp.createWindow({ id: nID, left: 0, top: 0, width: 470, height:320, center: true });
    dhxWinsItWorkApp.setSkin('material');
    dhxWinsItWorkApp.window(nID).setModal(true);
    dhxWinsItWorkApp.window(nID).setText("결재하기");
    dhxWinsItWorkApp.window(nID).button("park").hide();
    var nApprovalCnt = DhxList.dataCount();
    if(nCdStatus == "RC" || (nCdStatus == "R" && nApprovalCnt == 4)) {     // 담당자 결재시
        /*** Create Object ****/
        dhxRibbon = dhxWin.attachRibbon({
            icons_path: "/IMAGES/ICO/",
            arrows_mode:"auto",
            skin:"dhx_terrace",
            items: [
                {	type: "block", text: "APPROVAL", mode: "cols",
                    list: [
                        {	id:'Approval', type:'button', text:'<div style="width:117px; font-weight:bold; padding:5px 0 0 0;">승인</div>', isbig: true, img: "48/13.png"	}
                    ]
                },
                {	type: "block", text: "DELAY", mode: "cols",
                    list: [
                        {	id:'Delay', type:'button', text:'<div style="width:117px; font-weight:bold; padding:5px 0 0 0;">보류</div>', isbig: true, img: "48/15.png"	}
                    ]
                },
                {	type: "block", text: "RETURN", mode: "cols",
                    list: [
                        {	id:'Return', type:'button', text:'<div style="width:117px; font-weight:bold; padding:5px 0 0 0;">반려</div>', isbig: true, img: "48/14.png"	}
                    ]
                }
            ]
        });
    } else {
        /*** Create Object ****/
        dhxRibbon = dhxWin.attachRibbon({
            icons_path: "/IMAGES/ICO/",
            arrows_mode:"auto",
            skin:"dhx_terrace",
            items: [
                {	type: "block", text: "APPROVAL", mode: "cols",
                    list: [
                        {	id:'Approval', type:'button', text:'<div style="width:190px; font-weight:bold; padding:5px 0 0 0;">승인</div>', isbig: true, img: "48/13.png"	}
                    ]
                },
                {	type: "block", text: "RETURN", mode: "cols",
                    list: [
                        {	id:'Return', type:'button', text:'<div style="width:190px; font-weight:bold; padding:5px 0 0 0;">반려</div>', isbig: true, img: "48/14.png"	}
                    ]
                }
            ]
        });
    }
    
    dhxRibbon.attachEvent("onClick", function(itemId, bId){
        if (itemId == "Approval") {
            Fnc_IT_Work_Approval(nSeq, 'A');
        } else if (itemId == "Return") {
            Fnc_IT_Work_Approval(nSeq, 'R');
        } else if (itemId == "Delay") {
            Fnc_IT_Work_Approval(nSeq, 'D');
        }
    });
    /*** Create Object ****/
    var formData = [
        {type:"input",name:"STR_NOTE",label:"<strong>결재 의견</strong>", value:"", rows:3, position: "label-top", offsetTop:10, offsetLeft:10, inputWidth:440, note:{text:"<span style='color:#ff6600;'>반려일 경우 결재의견은 필수 입니다.</span>"} }
    ];
    dhxForm = dhxWin.attachForm(formData, true);
}

// IT 결재 수신 리스트 //
function Dhx_IT_Approval_Wait_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "결재 수신 목록", header: false, fix_size: [false, false]}
        ]
    });

    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2022; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 1, "", "/Dhx/25.png", "");
    dhxToolbar2.addSpacer("Year");				
    dhxToolbar2.setListOptionSelected("Year", BaseSetDate('','Y'));

    dhxToolbar2.attachEvent("onClick", function(id) {
        RealGrid_IT_ApprovalList();
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Reg_User", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Reg_User", fieldName: "Reg_User", width: "100", header: {text: "요청자",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Reg_User").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Reg_User", "autoFilter", true);
    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/APPROVAL', 0, 0, 1200, nHeight, true, true, 'N', 'N');
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_ApprovalList();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_ApprovalList(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Approval_Wait_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}

// IT 처리 수신 리스트 //
function Dhx_IT_Process_Wait_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "결재 수신 목록", header: false, fix_size: [false, false]}
        ]
    });

    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2022; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 1, "", "/Dhx/25.png", "");
    dhxToolbar2.addSpacer("Year");				
    dhxToolbar2.setListOptionSelected("Year", BaseSetDate('','Y'));

    dhxToolbar2.attachEvent("onClick", function(id) {
        RealGrid_IT_ProcessList();
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Reg_User", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Reg_User", fieldName: "Reg_User", width: "100", header: {text: "요청자",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Reg_User").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Reg_User", "autoFilter", true);
    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/PROCESS', 0, 0, 1200, nHeight, true, true, 'N', 'N');
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_ProcessList();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_ProcessList(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Process_Wait_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}

// IT 결재 수신 리스트 //
function Dhx_IT_Approval_Total_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "결재 수신 목록", header: false, fix_size: [false, false]}
        ]
    });

    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2022; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 1, "", "/Dhx/25.png", "");
    dhxToolbar2.addSpacer("Year");				
    dhxToolbar2.setListOptionSelected("Year", BaseSetDate('','Y'));

    dhxToolbar2.attachEvent("onClick", function(id) {
        RealGrid_IT_Approval_Total_List();
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Reg_User", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Reg_User", fieldName: "Reg_User", width: "100", header: {text: "요청자",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Reg_User").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Reg_User", "autoFilter", true);
    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/APPROVAL_TOTAL', 0, 0, 1200, nHeight, true, true, 'N', 'N');
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_Approval_Total_List();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_Approval_Total_List(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Approval_Total_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}

// IT 처리 문서함 리스트 //
function Dhx_IT_Process_Total_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "결재 수신 목록", header: false, fix_size: [false, false]}
        ]
    });

    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2022; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 1, "", "/Dhx/25.png", "");
    dhxToolbar2.addSpacer("Year");				
    dhxToolbar2.setListOptionSelected("Year", BaseSetDate('','Y'));

    dhxToolbar2.attachEvent("onClick", function(id) {
        RealGrid_IT_Process_Total_List();
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Reg_User", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Reg_User", fieldName: "Reg_User", width: "100", header: {text: "요청자",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Reg_User").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Reg_User", "autoFilter", true);
    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/PROCESS_TOTAL', 0, 0, 1200, nHeight, true, true, 'N', 'N');
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_Process_Total_List();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_Process_Total_List(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Process_Total_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}

// IT 전사 문서함 리스트 //
function Dhx_IT_Total_List(nType){    
    dhxLayout2 = new dhtmlXLayoutObject({
        parent: document.body,
        pattern: "1C",
        cells: [
            { id: "a", text: "결재 수신 목록", header: false, fix_size: [false, false]}
        ]
    });

    dhxToolbar2 = new dhtmlXToolbarObject({
        parent: "objToolbar",
        icons_path: "/IMAGES/ICO/"
    });

    /*** Create Object ****/
    var opts = [];
    for (var Y = 2021; Y <= BaseSetDate('','Y'); Y++) {
        opts.push({id: "Y_" + Y, type: "obj", text: '<strong style="font-size:14px;">'+Y+'</strong>'});
    }
    
    var nSystemList = Ajax_IT_Work_Combo_GetList('', 'SYSTEM');
    var nRow = nSystemList.split("</>");
    var opts_System = [];
    
    opts_System.push({id: "SYSTEM_TOTAL", type: "obj", text: '전체'});

    for(var i=0; i<=nRow.length-1; i++){
        var nSystemSplit = nRow[i].split("<|>");
        opts_System.push({id: "S_" + nSystemSplit[0], type: "obj", text: nSystemSplit[1]});
    }

    var nWorkList = Ajax_IT_Work_Combo_GetList('', 'WORK');
    var nRow_Work = nWorkList.split("</>");
    var opts_Work = [];
    
    opts_Work.push({id: "WORK_TOTAL", type: "obj", text: '전체'});

    for(var i=0; i<=nRow_Work.length-1; i++){
        var nWorkSplit = nRow_Work[i].split("<|>");
        opts_Work.push({id: "W_" + nWorkSplit[0], type: "obj", text: nWorkSplit[1]});
    }
    
	dhxToolbar2.addButtonSelect("Year", 0, "", opts, "", "",true, true, 0,"select");
    dhxToolbar2.addSeparator("sep0", 1);
	dhxToolbar2.addButtonSelect("System", 2, "", opts_System, "", "",true, true, 0,"select");
    dhxToolbar2.addSeparator("sep1", 3);
	dhxToolbar2.addButtonSelect("Work", 4, "", opts_Work, "", "",true, true, 0,"select");
    dhxToolbar2.addButton("Reload", 5, "", "/Dhx/25.png", "");

    dhxToolbar2.addSpacer("Work");				
    dhxToolbar2.setListOptionSelected("Year", "Y_" + BaseSetDate('','Y'));
    dhxToolbar2.setListOptionSelected("System", 'SYSTEM_TOTAL');
    dhxToolbar2.setListOptionSelected("Work", 'WORK_TOTAL');

    dhxToolbar2.attachEvent("onClick", function(id) {
        var nSelectHeaderType = id.substr(0, 1);

        if(id=="Reload") {
            RealGrid_IT_Total_List();
        } else if(nSelectHeaderType == "Y") {       
            dhxToolbar2.forEachListOption("System", function(optionId){
                dhxToolbar2.removeListOption("System", optionId);
            });
            dhxToolbar2.forEachListOption("Work", function(optionId){
                dhxToolbar2.removeListOption("Work", optionId);
            });
            var nSystemList = Ajax_IT_Work_Combo_GetList("", 'SYSTEM');
            var nRow_System = nSystemList.split("</>");
            var opts_System = [];            

            for(var i=0; i<=nRow_System.length-1; i++){
                var nSystemSplit = nRow_System[i].split("<|>");
                dhxToolbar2.addListOption("System", "S_" + nSystemSplit[0], i+1, "button", nSystemSplit[1], null);
            }

            dhxToolbar2.addListOption("System", "SYSTEM_TOTAL", 0, "button", '전체', null);
            dhxToolbar2.addListOption("Work", "WORK_TOTAL", 0, "button", '전체', null);

            dhxToolbar2.setListOptionSelected("System", 'SYSTEM_TOTAL');
            dhxToolbar2.setListOptionSelected("Work", 'WORK_TOTAL');

            RealGrid_IT_Total_List();
        } else if(nSelectHeaderType == "S") {       
            dhxToolbar2.forEachListOption("Work", function(optionId){
                dhxToolbar2.removeListOption("Work", optionId);
            });
            var nWorkList = Ajax_IT_Work_Combo_GetList(id.replace("S_", ""), 'WORK');
            var nRow_Work = nWorkList.split("</>");
            var opts_Work = [];            
            
            for(var i=0; i<=nRow_Work.length-1; i++){
                var nWorkSplit = nRow_Work[i].split("<|>");
                dhxToolbar2.addListOption("Work", "W_" + nWorkSplit[0], i+1, "button", nWorkSplit[1], null);
            }
            dhxToolbar2.addListOption("Work", "WORK_TOTAL", 0, "button", '전체', null);
            
            dhxToolbar2.setListOptionSelected("Work", 'WORK_TOTAL');

            RealGrid_IT_Total_List();
        } else {
            RealGrid_IT_Total_List();
        }
    });

    container = document.getElementById("objRealGrid");
    dataProvider = new RealGrid.LocalDataProvider();
    gridView = new RealGrid.GridView(container);
    gridView.setDataSource(dataProvider);
    gridView.displayOptions.emptyMessage = "표시할 데이타가 없습니다.";
    gridView.header.height = 40;

    RealGrid2SizeSettingDiv(dhxLayout2, gridView, "objRealGrid", "a", 85);

    dataProvider.setFields([
        {fieldName: "Seq_No", dataType: "text",},
        {fieldName: "Request_Date", dataType: "text",},
        {fieldName: "Reg_User", dataType: "text",},
        {fieldName: "Str_System", dataType: "text",},
        {fieldName: "Str_Work", dataType: "text",},
        {fieldName: "Str_Title", dataType: "text",},   
        {fieldName: "No_Work", dataType: "text",},   
        {fieldName: "Str_Status", dataType: "text",},
        {fieldName: "Work_User", dataType: "text",},
        {fieldName: "Cd_Status", dataType: "text",},
        {fieldName: "Cd_Mst", dataType: "text",},
        {fieldName: "chk_Urgency", dataType: "text",},
    ]);

    gridView.setColumns([
        {name: "Seq_No", fieldName: "Seq_No", width: "0", header: {text: "Seq_No",},},
        {name: "Request_Date", fieldName: "Request_Date", width: "80", header: {text: "작성일",},},
        {name: "Reg_User", fieldName: "Reg_User", width: "100", header: {text: "요청자",},},
        {name: "Str_System", fieldName: "Str_System", width: "100", header: {text: "System",},},
        {name: "Str_Work", fieldName: "Str_Work", width: "200", header: {text: "요청내역",},},
        {name: "Str_Title", fieldName: "Str_Title", width: "500", header: {text: "제목",}, "styleName": "editor-merge-left",},
        {name: "No_Work", fieldName: "No_Work", width: "100", header: {text: "문서번호",},},
        {name: "Str_Status", fieldName: "Str_Status", width: "100", header: {text: "상태",},},
        {name: "Work_User", fieldName: "Work_User", width: "100", header: {text: "처리 담당자",},},
        {name: "Cd_Status", fieldName: "Cd_Status", width: "100", header: {text: "상태코드",},},
        {name: "Cd_Mst", fieldName: "Cd_Mst", width: "100", header: {text: "CD_MST",},},
        {name: "chk_Urgency", fieldName: "chk_Urgency", width: "50", header: {text: "긴급",},},
    ]);
    gridView.columnByName("Seq_No").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Status").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Cd_Mst").visible =  false;   // 셀 숨김 여부    
    gridView.columnByName("Request_Date").editable = false;     // 셀 편집 여부
    gridView.columnByName("Reg_User").editable = false;     // 셀 편집 여부
    gridView.columnByName("Str_System").editable = false;
    gridView.columnByName("Str_Work").editable = false;
    gridView.columnByName("Str_Title").editable = false;     // 셀 편집 여부
    gridView.columnByName("No_Work").editable = false;
    gridView.columnByName("Str_Status").editable = false;
    gridView.columnByName("Work_User").editable = false;
    gridView.columnByName("chk_Urgency").editable = false;

    gridView.footers.visible = false;                   // Footer 표시 / 숨김
    gridView.setStateBar({visible: false});             // 에디트 상태 표시 / 숨김
    gridView.setCheckBar({visible: false});             // 체크버튼 표시 / 숨김
    gridView.setRowIndicator({visible: true});         // No 표시 / 숨김
    gridView.displayOptions.fitStyle = "evenFill";      // 컬럼 너비 자동 조정

    gridView.setColumnProperty("Reg_User", "autoFilter", true);
    gridView.setColumnProperty("Str_System", "autoFilter", true);
    gridView.setColumnProperty("Str_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Title", "autoFilter", true);
    gridView.setColumnProperty("No_Work", "autoFilter", true);
    gridView.setColumnProperty("Str_Status", "autoFilter", true);
    gridView.setColumnProperty("Work_User", "autoFilter", true);
    gridView.setColumnProperty("chk_Urgency", "autoFilter", true);

    gridView.displayOptions.selectionStyle = "singleRow"

    gridView.setPaging(true, $('#PAGE_SIZE').val());

    gridView.onCellDblClicked = function (grid, clickData) {
        var realGridRow = JSON.parse(JSON.stringify(clickData));			
        var jsonData = dataProvider.getJsonRow(realGridRow.dataRow);
        var nSeqNo = jsonData.Seq_No;
        var nCdMst = jsonData.Cd_Mst;
        var nCdStatus = jsonData.Cd_Status;
        var nHeight = dhxLayout2.cells("a").getHeight();

        DhxBaseCreateWindowObj('DhxWinIPWorkMstDetail', '업무 요청', '/Module/ITMS/IT_Work_Detail.html?' + nSeqNo + '/' + nCdMst + '/' + nCdStatus + '/TOTAL', 0, 0, 1200, nHeight, true, true, 'N', 'N');
    }

    gridView.onDataLoadComplated = function(grid){
        RealGrid_PagingSet();
    }    
    RealGrid_IT_Total_List();    
    
    dhxLayout2.cells("a").attachObject("container");    
}

function RealGrid_IT_Total_List(){
    dhxLayout2.cells("a").progressOn();

    var loadUrl = "/MODULE/ITMS/DATA/XmlForGrid_IT_Total_List.asp";
    $.ajax({
        type: 'POST',
        url: loadUrl,
        async: false,
        data: 'THIS_YEAR='+dhxToolbar2.getListOptionSelected("Year").replace("Y_", "")
              + '&MAJOR_CODE='+dhxToolbar2.getListOptionSelected("System").replace("S_", "")
              + '&MINOR_CODE='+dhxToolbar2.getListOptionSelected("Work").replace("W_", "")
              + '&REG_USER='+$.cookie('ck_Cd_Emp'),
        success: // 성공
            function (ReqData) {
                dataProvider.fillXmlData(ReqData, { fillMode: "set" });           
                dhxLayout2.cells("a").progressOff();
            },
        error:
            function (request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
    });
    
}