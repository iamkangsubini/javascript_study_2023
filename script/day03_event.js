//1. 변수생성
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const input_id = document.querySelector('#user_id');
console.log(btn1, btn2, btn3, btn4, btn5, btn6, btn7, input_id); //정상확인
//2. 이벤트 작성
//btn3 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');
});
//변수.addEventListener('이벤트',function(){실행});
btn4.addEventListener('mouseup',function(){
    window.alert('안녕반가워');
});
//변수.addEventListener('이벤트',function(){});
btn5.addEventListener('mousedown',function(){
    window.alert('저는 강수빈입니돠');
});
//변수.addEventListener('이벤트',function(){});
btn6.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua';
    //this 현재 이베트 객체 대상 == btn4
    //현재대상.style.css속성 = '대입값'
});
btn7.addEventListener('click',function(){
    btn4.style.transform = 'skew(10deg)';
    btn3.style.backgroundColor = 'pink';
    btn3.style.border = 'none';
    btn2.innerHTML = '결과';
    btn1.innerHTML = '냠냠';
});
input_id.addEventListener('focus',function(){ //적용
    this.style.backgroundColor = 'skyblue';
});
input_id.addEventListener('blur',function(){ //포커스를 잃었을때
    this.style.backgroundColor = 'grey';
});