   
        const select = document.querySelector('select');
        const coment = document.querySelector('p');
       
        select.addEventListener('change',setComent);

        //select 별 코멘트
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
        //select 별 테마 적용
        const diary = document.querySelector('#diary');

        function changethema (bgColor,fontColor){
            diary.style.backgroundColor = bgColor;
            diary.style.color = fontColor;
        }
        const textarea = document.querySelector('textarea');
        const inputBox = document.getElementById('inputBox');
        //입력 창
        function writeDiary(){
            textarea.removeAttribute('hidden');
            inputBox.style.visibility = 'visible';
        }  
        //
        $('#submit').click( function () {
           
          const AjaxUrl = '/MODULE/BPS/LIB/diary.asp'
          $.ajax ({
                type:'POST',
                url: AjaxUrl,
                async: true,   
                data: 
                    //'FEELING_STATUS='  + $("#FEELING_STATUS").val() + '&CONTENTS=' +  $("#CONTENTS").val(),
                    { CONTENTS:$("textarea#CONTENTS").val() , FEELING_STATUS:$("select#FEELING_STATUS").val()},

              success:
                  function(result){
                    console.log(result);
                  },
              error:
              function (request, status, error) {
                  alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
              }	

              });
        
        });
        
        //
        const cancel = document.getElementById('cancel');
        cancel.addEventListener('click',function(){
            location.reload();
        });
