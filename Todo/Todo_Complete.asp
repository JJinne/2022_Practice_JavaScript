<%@Language="VBScript" CODEPAGE="65001"%>
<%session.CodePage = "65001"%>
    
<%	
    AppConnect	       = Application("StrConSystem")
    SEQ_NO             = REQUEST("SEQ_NO")



	SET Cmd = Server.CreateObject("ADODB.Command")
    With Cmd
        .ActiveConnection										= AppConnect
        .Prepared												= True
        .CommandType											= adCmdStoredProc
        .CommandText		                                    = "[SP_BPS_TODO_COMPLETE]"
        .Parameters("@SEQ_NO").Value                            = SEQ_NO
        .Execute , , adExecuteNoRecords
         RCD													= Cmd.Parameters("@RCD").Value      
     
    END With
    SET Cmd.ActiveConnection = Nothing
    SET Cmd = Nothing
    Response.Write "rcd=" &RCD

%>


