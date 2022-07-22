<%@Language="VBScript" CODEPAGE="65001"%>
<%
    session.CodePage = "65001"
	Response.ContentType="text/html;charset=UTF-8"
	AppConnect	       = Application("StrConSystem")
    CONTENTS           = REQUEST("CONTENTS")
    FEELING_STATUS     = REQUEST("FEELING_STATUS")


	SET Cmd = Server.CreateObject("ADODB.Command")
    With Cmd
        .ActiveConnection										= AppConnect
        .Prepared												= True
        .CommandType											= adCmdStoredProc
        .CommandText		                                    = "[SP_DIARY_REG]"
        .Parameters("@CONTENTS").Value                          = CONTENTS
        .Parameters("@FEELING_STATUS").Value                    = FEELING_STATUS
        .Execute , , adExecuteNoRecords
         RCD													= Cmd.Parameters("@RCD").Value      
     
    END With
    SET Cmd.ActiveConnection = Nothing
    SET Cmd = Nothing
    Response.Write "rcd=" &RCD
%>
