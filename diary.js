<!DOCTYPE html>
<html>
<head>    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/LIB/jquery/jquery-cookie.js"></script>
</head>
<style>

  #calendar{
    width: 1000px;
    height:1000px;    
  }
  #calendar,#container{
    float:left;
  }
  #container{
    width:400px;
    height:1000px;  
  }
  .selectBox{
    padding: 10px;
    text-align: left;
  }
  select{
    width:150px;
    height: 25px;
    font-size:15px;
    border-radius: 15px;
    border:3px solid#d2b4eefa;
  }
  #todo{
    width:400px;
    height:auto;
    background-color: antiquewhite;
  }
  #diary{
    margin-top: 15px;
    padding:5px;
    width :400px;
    height:auto;
    border-radius: 5px;
  }
  textarea{
    width: 380px;
    height: 250px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    margin: 10px;
    word-wrap:break-word;
    white-space: normal;

  }
  p{
    padding: 10px;
    margin:5px;
    text-align: left;
  }

  #submit{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    margin-right: -4px;
  }
  #cancel{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-right: -3px;
  }
  #inputBox button{
    border: 2px solid #d2b4eefa;
    background-color: #d2b4eefa;
    color: white;
    padding: 5px;
  }
  #inputBox button:hover{
    color: #d2b4eefa;
    background-color:rgba(255, 255, 255, 0);
  }
  #inputBox{
    margin:5px;
    margin-left:300px; 
    
  }


</style>
<body>
    <div id='calendar'>
    </div>
    <div id='container'>
        <div id ='todo'>
        <!-- <iframe src="./todo.html"></iframe> -->
        </div>
        <div id = 'diary'>   
            <form id = 'diaryForm' method='post'>
                <div class='selectBox'>
                    <label style="font-size:20px ;">How you feel today?</label> 
                    <select id="FEELING_STATUS" >  
                            <option value='' selected disabled hidden ></option>
                            <option value = 'happy'>happy</option>
                            <option value = 'nice'>nice</option>
                            <option value = 'tired'>tired</option>
                            <option value = 'angry'>angry</option>
                            <option value = 'sad'>sad</option>
                            <option value = 'so so'>so so</option>
                    </select>
                </div>
                <div><p></p></div>             
                <div><textarea hidden id ='CONTENTS'> </textarea></div>
                <div id = 'inputBox' style='visibility: hidden;'>
                    <button id ='submit' type = 'submit' >저장</button>
                    <button id='cancel'  type = 'button' >취소</button>
                </div>
            </form>
        </div>
    </div>
  
    <script type="text/javascript">
    // 다른 html 파일 포함 안됨 해결하기
    //  $("#calendar").load('calendar.html');  
       
        const select = document.querySelector('select');
        const coment = document.querySelector('p');
       
        select.addEventListener('change',setComent);

        
        function setComent(){
            const choice = select.value;

            switch(choice){
                case 'happy' : 
                    coment.textContent = 'You had a day full of happiness. What made you happy?😊😊😊';           
                    changethema('#ececc5fa','#c19fe0fa'); 
                    writeDiary();
        
                break;
                case 'nice' : 
                    coment.textContent = 'Wow, was it a nice day? Good job.';
                    changethema('#D7FBDD','#c19fe0fa');
                    writeDiary();
                break;
                case 'tired' : 
                    coment.textContent = 'You worked hard today. Take a good rest';
                    changethema('#A6CAF0','white');
                    writeDiary();
                break;
                case 'angry' : 
                    coment.textContent = 'You were upset today, you need a change of pace.';
                    changethema('#FFC0C0','white');
                    writeDiary();
                break;
                case 'sad' : 
                    coment.textContent = 'Pick yourself up and dust yourself off';
                    changethema('#008080','#c19fe0fa');
                    writeDiary();
                break;
                case 'so so' : 
                    coment.textContent = 'so so';
                    changethema('#d2b4eefa','white');
                    writeDiary();
                break;
            }
           
            
        }
        
        const diary = document.querySelector('#diary');

        function changethema (bgColor,fontColor){
            diary.style.backgroundColor = bgColor;
            diary.style.color = fontColor;
        }
        const textarea = document.querySelector('textarea');
        const inputBox = document.getElementById('inputBox');

        function writeDiary(){
            textarea.removeAttribute('hidden');
            inputBox.style.visibility = 'visible';
        }  

        //수정필요
        const form = document.getElementById('diaryForm');
        form.addEventListener('submit',function(){
            var nDIARY_NO = $("#DIARY_NO").val();
            var nFLAG = $("#DIARY_NO").val();
            var nFEELING_STATUS = $("#FEELING_STATUS").val();
            var nCONTENTS = $("#CONTENTS").val();

                $.ajax ({
                type:'POST',
                url: 'diary.asp?Reg',
                async: false,    //sync 동기 <-> async 비동기 
                data: 'FLAG=' + nFLAG
                    + '&DIARY_NO=' + nDIARY_NO
                    + '&CONTENTS=' + nCONTENTS
                    + '&FEELING_STATUS' + nFEELING_STATUS,
                success:
                    function(){
                    },
                error:
                function (request, status, error) {
                    alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
                }	

                });
    })
       //
        const cancel = document.getElementById('cancel');
        cancel.addEventListener('click',function(){
            location.reload();
        });

    </script>
</body>
</html>
