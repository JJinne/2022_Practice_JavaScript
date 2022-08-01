<%@LANGUAGE="vbscript" CodePage="65001" %>
<% session.CodePage = "65001" %>
<%
	AppConnect			= Application("StrConSystem")
	SEQ_NO			    = REQUEST("SEQ_NO")

	SET Conn = Server.CreateObject("ADODB.Connection")
	Conn.Open AppConnect
		Set Rs = Conn.Execute("EXEC [SP_BPS_TODO_MOD_GETVIEW] '"& SEQ_NO &"' ")
			IF Rs.EOF Or Rs.Bof THEN
				s_Msg							= "N"
			ELSE
				s_Msg							= "Y"
				s_SEQ_NO						= Rs(0)
				s_CONTENTS                      = Rs(1)
               

			END IF
		Rs.Close()
	Conn.Close
	SET Conn = Nothing

	Response.Write s_SEQ_NO&"</>"&s_CONTENTS

%>
