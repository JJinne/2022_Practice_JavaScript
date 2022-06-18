const todoInputElem = document.querySelector('.todo-input');
const todoListElem = document.querySelector('.todo-list');
const completeAllBtnElem = document.querySelector('.complete-all-btn');
const leftItemsElem = document.querySelector('.left-items')
const showAllBtnElem = document.querySelector('.show-all-btn');
const showActiveBtnElem = document.querySelector('.show-active-btn');
const showCompletedBtnElem = document.querySelector('.show-completed-btn');
const clearCompletedBtnElem = document.querySelector('.clear-completed-btn');
 
const ToDos_ls = "todos"; //local storage에 todoList 변수명을 저장한 상수
let todos = []; // todos 할일을 담을 배열
 
function saveTodos(){   //localStorage에 리스트 저장
    localStorage.setItem('ToDos_ls',JSON.stringify(todos))
}
 
let id = 0;
//새롭게 저장되는 할일의 id값
const setId = (newId) => {id = newId};
 
let isAllCompleted = false; // 전체 todos 체크 여부
const setIsAllCompleted = (bool) => { isAllCompleted = bool};
 
let currentShowType = 'all'; // all  | active | complete
const setCurrentShowType = (newShowType) => currentShowType = newShowType
 
 
 
const setTodos = (newTodos) => {
    todos = newTodos;
}
 
const getAllTodos = () => {
    return todos;
}
const getCompletedTodos = () => {
    return todos.filter(todo => todo.isCompleted === true );
}
const getActiveTodos = () => {
    return todos.filter(todo => todo.isCompleted === false);
}
 
const setLeftItems = () => {
    const leftTodos = getActiveTodos()
    leftItemsElem.innerHTML = `${leftTodos.length} items left`
}
 
const completeAll = () => {
    completeAllBtnElem.classList.add('checked');
    const newTodos = getAllTodos().map(todo => ({...todo, isCompleted: true }) )
    setTodos(newTodos)
}
 
const incompleteAll = () => {
    completeAllBtnElem.classList.remove('checked');
    const newTodos =  getAllTodos().map(todo => ({...todo, isCompleted: false }) );
    setTodos(newTodos)
}
 
// 전체 todos의 check 여부 (isCompleted)
const checkIsAllCompleted = () => {
    if(getAllTodos().length === getCompletedTodos().length ){
        setIsAllCompleted(true);
        completeAllBtnElem.classList.add('checked');
    }else {
        setIsAllCompleted(false);
        completeAllBtnElem.classList.remove('checked');
    }
}
 
const onClickCompleteAll = () => {
    if(!getAllTodos().length) return; // todos배열의 길이가 0이면 return;
 
    if(isAllCompleted) incompleteAll(); // isAllCompleted가 true이면 todos를 전체 미완료 처리
    else completeAll(); // isAllCompleted가 false이면 todos를 전체 완료 처리
    setIsAllCompleted(!isAllCompleted); // isAllCompleted 토글
    paintTodos(); // 새로운 todos를 렌더링
    setLeftItems()
}
 
const appendTodos = (text) => {
    const newId = id + 1; // 기존에 i++ 로 작성했던 부분을 setId()를 통해 id값을 갱신하였다.
    setId(newId)
//새롭게 추가된 할 일을 concat()을 통해 추가된 배열을 newTodos에 저장한다
    const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text })
    // const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }] 스프레드 연산자 사용할 경우
    const todoobj={
        text, id:newId
    }
    todos.push(todoobj);    
    setTodos(newTodos)
    setLeftItems()
    checkIsAllCompleted();
    paintTodos();
}
 
const deleteTodo = (todoId) => {
    const newTodos = getAllTodos().filter(todo => todo.id !== todoId );
    setTodos(newTodos);
    saveTodos()
    setLeftItems()
    paintTodos()
}
 
const completeTodo = (todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
    setTodos(newTodos);
    saveTodos()
    paintTodos();
    setLeftItems()
    checkIsAllCompleted();
}
 
const updateTodo = (text, todoId) => {
    const currentTodos = getAllTodos();
    const newTodos = currentTodos.map(todo => todo.id === todoId ? ({...todo, content: text}) : todo);
    setTodos(newTodos);
    saveTodos()
    paintTodos();
}
 
const onDbclickTodo = (e, todoId) => {
    const todoElem = e.target;
    const inputText = e.target.innerText;
    const todoItemElem = todoElem.parentNode;
    const inputElem = document.createElement('input');
    inputElem.value = inputText;
    inputElem.classList.add('edit-input');
    inputElem.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter') {
            updateTodo(e.target.value, todoId);
            document.body.removeEventListener('click', onClickBody );
        }
    })
 
    const onClickBody = (e) => {
        if(e.target !== inputElem)  {
            todoItemElem.removeChild(inputElem);
            document.body.removeEventListener('click', onClickBody );
        }
    }
   
    document.body.addEventListener('click', onClickBody)
    todoItemElem.appendChild(inputElem);
}
 
const clearCompletedTodos = () => {
    const newTodos = getActiveTodos()
    setTodos(newTodos)
    paintTodos();
}
 
const paintTodo = (todo) => {
    const todoItemElem = document.createElement('li');
    todoItemElem.classList.add('todo-item');
 
    todoItemElem.setAttribute('data-id', todo.id );
 
    const checkboxElem = document.createElement('div');
    checkboxElem.classList.add('checkbox');
    checkboxElem.addEventListener('click', () => completeTodo(todo.id))
 
    const todoElem = document.createElement('div');
    todoElem.classList.add('todo');
    todoElem.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id))
    todoElem.innerText = todo.content;
 
    const delBtnElem = document.createElement('button');
    delBtnElem.classList.add('delBtn');
    delBtnElem.addEventListener('click', () =>  deleteTodo(todo.id))
    delBtnElem.innerHTML = 'X';
 
    if(todo.isCompleted) {
        todoItemElem.classList.add('checked');
        checkboxElem.innerText = '✔';
    }
 
    todoItemElem.appendChild(checkboxElem);
    todoItemElem.appendChild(todoElem);
    todoItemElem.appendChild(delBtnElem);
    todoListElem.appendChild(todoItemElem);
 
    //위로아래로 버튼 구현해보기
    const upButtonEl = document.createElement('button');
    upButtonEl.classList.add('sideButton')
    upButtonEl.innerHTML = '▲'
    upButtonEl.addEventListener('click', e => {
        // alert('위로 버튼이 클릭되었습니다.')
        todoListElem.insertBefore(todoItemElem, todoItemElem.previousElementSibling)
    })
    todoItemElem.appendChild(upButtonEl)
   
   
   
    // 아래로 버튼을 만들어서 문서 안에 넣기
    const downButtonEl = document.createElement('button');
    downButtonEl.classList.add('sideButton')
    downButtonEl.innerHTML = '▼ '
    downButtonEl.addEventListener('click', e => {
        // insertBefore는 대상이 되는 것에 바로 앞에 넣는다.
        todoListElem.insertBefore(
        //다음 순서로 넣으려면, 다음다음의 바로 앞에 넣으면 된다.
        todoItemElem,
        todoItemElem.nextElementSibling.nextElementSibling
        )
    })
    todoItemElem.appendChild(downButtonEl)
   
   
 
    saveTodos();
}
 
const paintTodos = () => {
    todoListElem.innerHTML = null;
 
    switch (currentShowType) {
        case 'all':
            const allTodos = getAllTodos();
            allTodos.forEach(todo => { paintTodo(todo);});
            break;
        case 'active':
            const activeTodos = getActiveTodos();
            activeTodos.forEach(todo => { paintTodo(todo);});
            break;
        case 'completed':
            const completedTodos = getCompletedTodos();
            completedTodos.forEach(todo => { paintTodo(todo);});
            break;
        default:
            break;
    }
}
 
const onClickShowTodosType = (e) => {
    const currentBtnElem = e.target;
    const newShowType = currentBtnElem.dataset.type;
 
    if ( currentShowType === newShowType ) return;
 
    const preBtnElem = document.querySelector(`.show-${currentShowType}-btn`);
    preBtnElem.classList.remove('selected');
 
    currentBtnElem.classList.add('selected')
    setCurrentShowType(newShowType)
    paintTodos();
}
// function handleSubmit(e) {
//     e.preventDefault(); // 이벤트가 작동하지 못하게 함
//     const currentValue = todoInputElem.value; // currentValue에 input창에 입력한 값 대입
//     paintTodo(currentValue); // 리스트 추가하는 함수
//     todoInputElem.value = ""; // input창 초기화
//   }
 
function loadTodos(){
    const loadedTodos = localStorage.getItem(ToDos_ls);
    if(loadedTodos != null){
        const parsedTodos =JSON.parse(loadedTodos)
        parsedTodos.forEach(function(todo){
            paintTodos(todo.text);
        });
    }
}
//.js파일이 실행되자마자 호출되는 함수
const init = () => {
    todoInputElem.addEventListener('keypress', (e) =>{
        if( e.key === 'Enter' ){
            e.preventDefault();
            const currentValue = appendTodos(e.target.value);        
            todoInputElem.value =""; //todoInputElem의 value값을 초기화
            paintTodo(currentValue)
        }
    })
    completeAllBtnElem.addEventListener('click',  onClickCompleteAll);
    showAllBtnElem.addEventListener('click', onClickShowTodosType);
    showActiveBtnElem.addEventListener('click',onClickShowTodosType);
    showCompletedBtnElem.addEventListener('click',onClickShowTodosType);
    clearCompletedBtnElem.addEventListener('click', clearCompletedTodos);
    //todoListElem.addEventListener('sub')
    setLeftItems()
    loadTodos()
    todoInputElem.addEventListener("submit");
   
}
 
init()
 
