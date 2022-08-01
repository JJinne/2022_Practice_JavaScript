<%@Language="VBScript" CODEPAGE="65001"%>
<%
    session.CodePage = "65001"
	Response.ContentType="text/html;charset=UTF-8"
	AppConnect					= Application("StrConSystem")
	FLAG						= REQUEST("FLAG")
    SEQ_NO						= REQUEST("SEQ_NO")
    CONTENTS                    = REQUEST ("CONTENTS")


	SET Cmd = Server.CreateObject("ADODB.Command")
    With Cmd
        .ActiveConnection										= AppConnect
        .Prepared												= True
        .CommandType											= adCmdStoredProc
        .CommandText		                                    = "[SP_BPS_TODO_REG]"
        .Parameters("@FLAG").Value                               = FLAG
        .Parameters("@SEQ_NO").Value                             = SEQ_NO
        .Parameters("@CONTENTS").Value                           = CONTENTS
        .Execute , , adExecuteNoRecords
         RCD													= Cmd.Parameters("@RCD").Value      
     
    END With
    SET Cmd.ActiveConnection = Nothing
    SET Cmd = Nothing
    Response.Write "rcd=" &RCD
%>