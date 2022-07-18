const customName = document.getElementById('customname'); //Eneter custom name
const randomize = document.querySelector('.randomize');   //button object 저장
const story = document.querySelector('.story');           //randomValueFormArray() 함수는 배열을 가져와서 배열이 가진 항목 중 하나 반환

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";



const insertx = ['Willy the Goblin','Big Daddy','Father Christmas'];
const inserty = ['the soup kitchen','Disneyland','the White House'];
const insertz = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xitem = randomValueFromArray(insertx);
    var yitem = randomValueFromArray(inserty);  
    var zitem = randomValueFromArray(insertz);      
    
    newStory = newStory.replace(':insertx:', xitem);
    newStory = newStory.replace(':inserty:', yitem);
    newStory = newStory.replace(':insertz:', zitem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + 'stones';       // 파운드 - > stones
    const temperature =  Math.round((94 - 32)/1.8) + 'centigrade';  // 화씨온도  -> 섭씨온도
    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 fahrenheit". temperature);


  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
  //story.style.color = "white";

}
