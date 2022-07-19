<!DOCTYPE html>
<html>
<head>    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

</head>
<style>
  .selectBox{
    padding: 10px;
    text-align: left;
  }
  select{
    width:150px;
    height: 25px;
    font-size:15px;
    border-radius: 15px;
    border:1px solid#d2b4eefa;
  }
  .container{
    margin-top: 15px;
    padding:5px;
    width :450px;
    height:auto;

    border-radius: 5px;
  }
  textarea{
    width: 430px;
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

</style>
<body>
    <div class = 'container'>   
        <div class='selectBox'>
            <label style="font-size:20px ;">How you feel today?</label> 
            <select id="feeling" >  
                    <option value='' selected disabled hidden ></option>
                    <option value = 'happy'>happy</option>
                    <option value = 'nice'>nice</option>
                    <option value = 'tired'>tired</option>
                    <option value = 'angry'>angry</option>
                    <option value = 'sad'>sad</option>
                    <option value = 'so so'>so so</option>
            </select>
        </div>
        <p></p>
        <textarea hidden> </textarea>
            </div>
    <script type="text/javascript">
        const select = document.querySelector('select');
        const coment = document.querySelector('p');
        const textarea = document.querySelector('textarea');
        select.addEventListener('change',setComent);
        
        function setComent(){
            const choice = select.value;

            switch(choice){
                case 'happy' : 
                    coment.textContent = 'You had a day full of happiness. What made you happy?😊😊😊'; 
                    textarea.removeAttribute('hidden');
                    changethema('#ececc5fa','#c19fe0fa');  
        
                break;
                case 'nice' : 
                    coment.textContent = 'Wow, was it a nice day? Good job.';
                    textarea.removeAttribute('hidden');
                    changethema('#D7FBDD','#c19fe0fa');
                break;
                case 'tired' : 
                    coment.textContent = 'You worked hard today. Take a good rest';
                    textarea.removeAttribute('hidden');
                    changethema('#A6CAF0','white');
                break;
                case 'angry' : 
                    coment.textContent = 'You were upset today, you need a change of pace.';
                    textarea.removeAttribute('hidden');
                    changethema('#FFC0C0','white');
                break;
                case 'sad' : 
                    coment.textContent = 'Pick yourself up and dust yourself off';
                    textarea.removeAttribute('hidden');
                    changethema('#008080','#c19fe0fa');
                break;
                case 'so so' : 
                    coment.textContent = 'so so';
                    textarea.removeAttribute('hidden');
                    changethema('#d2b4eefa','white');
                break;
            }
           
            
        }
        const container = document.querySelector('.container');

        function changethema (bgColor,fontColor){
            container.style.backgroundColor = bgColor;
            container.style.color = fontColor;
        }

    </script>
</body>
</html>
