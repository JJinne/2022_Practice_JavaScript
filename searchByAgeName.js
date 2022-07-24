<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Search by age name</title>
</head>

<body>
    <label for="search">Search by age name: </label>
    <input id="search" type="text">
    <button>Search</button>
    <p></p>
    <script type="text/javascript">
       const age = ['Hong:20 ','Kim:36','Lee:18','Park:25'];
       const para = document.querySelector('p');
       const input = document.querySelector('input');
       const button = document.querySelector('button');
       
       button.addEventListener('click', searchName);
       
       function searchName(){
            search = input.value;
            input.value ='';
            input.focus();
    
        for(let i = 0; i<age.length;i++){
            const splitAge = age[i].split(':');
            if(search == splitAge[0]){
                para.textContent  = splitAge[0] +' '+ ' is ' + splitAge[1]; + 'years old'
                break;
            }else{
                para.textContent = 'Not found';
            }
            
        }
       }


    </script>
</body>
</html>
