<?xml version="1.0" encoding="UTF-8"?>

<%@LANGUAGE="vbscript" CodePage="65001" %>
<% session.CodePage = "65001" %>
<%
 Response.ContentType = "text/xml"
 Response.AddHeader "Pragma", "no-cache"
 Response.expires = -1
 Response.buffer = True

	AppConnect		= Application("StrConSystem")
    PAGE_SIZE		= REQUEST("PAGE_SIZE")
	PAGE			= REQUEST("PAGE")
    
    IF PAGE_SIZE = "" THEN PAGE_SIZE = 10 :
	IF PAGE = "" THEN PAGE = 1 :

	SET Cmd = Server.CreateObject("ADODB.Command")
	With Cmd
		.ActiveConnection								= AppConnect
		.Prepared										= True
		.CommandType									= adCmdStoredProc
		.CommandText									= "[SP_BPS_TODO_LIST]"
		.Parameters("@PAGE_SIZE").Value		            = PAGE_SIZE
		.Parameters("@PAGE").Value		                = PAGE
			SET Rs = .Execute
				IF Rs.EOF OR Rs.Bof THEN
					s_Msg		= "N"
				ELSE
					s_Msg		= "Y"
					s_AllRec	= Rs.GetString(,,"/./","|.|","")
					s_Rows		= Split(s_AllRec,"|.|")
					s_Count		= Ubound(s_Rows)
				END IF
			Rs.Close()								<!--@ROW_COUNT%오타 때문에 오류!!!-->
		ROW_COUNT									= Cmd.Parameters("@ROW_COUNT").Value
	END With
	SET Cmd.ActiveConnection = Nothing
	SET Cmd =Nothing
    
%>

<rows>
<%
	FOR s_No = 0 TO s_Count-1
		s_Cols						= Split(s_Rows(s_No),"/./")
		s_SEQ_NO					= s_Cols(0)
		s_COMPLETE_YN				= s_Cols(1)
		s_ROWNUM			        = s_Cols(2)
		s_CONTENTS			        = s_Cols(3)
		s_WRITE_DATE				= s_Cols(4)
%>
    <row id="<%=s_No+1%>" >
		<cell ><%=s_SEQ_NO%></cell>
        <cell ><%=s_COMPLETE_YN%></cell>
        <cell ><%=s_ROWNUM%></cell>
		<cell ><%=s_CONTENTS%></cell>
		<cell ><%=s_WRITE_DATE%></cell>
	</row>
<%
	NEXT
%>
</rows>



