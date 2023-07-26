// dom == document object model
//자바스크립트 = 객체지향언어
//bom = browser object model 웹브라우저의 기본 객체
let hello = 'hello js';
// window.prompt('이건 뭘까?');
// let qu = window.prompt('1+1?');
// window.alert('정답은 '+qu+'입니다.');
/* let ox = window.confirm('자바스크립트는 객체지향언어다.');
window.alert(ox); */ 
// 확인=true(참), 취소=false(거짓)
// window.alert(ox;)

//객체.속성
//객체.메서드()
//객체.속성.메서드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1')
const loginBtn =document.getElementById('login')
const payBtn = document.getElementById('pay')
const price = document.getElementById('price')
console.log(btn1, login, pay, price);
btn1.style.color = 'red';
login.style.color = 'blue';
pay.style.color = 'green';

//클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first')
const li_second = document.getElementsByClassName('second')
const li_last = document.getElementsByClassName('last');
console.log(li_first, li_second, li_last);
console.log(li_first[0]);
console.log(li_first[1]);

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header')
const h1 = document.getElementsByTagName('h1')
const nav = document.getElementsByTagName('nav')
const aTag = document.getElementsByTagName('a')
console.log(header, h1, nav, aTag);
console.log(aTag[0]);

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
header.innerHTML
console.log(header.innerHTML); //undefined
console.log(header[0].innerHTML); //자손, 자손 읽기
console.log(h1[0].innerHTML);
console.log(li_first[0].innerHTML);
console.log(btn1.innerHTML);

h1[0].innerHTML = '로<br>고';
btn1.innerHTML = '전송';
aTag[2].innerHTML = ''; //빈문자열 ==문자열을 비운다.(삭제)

nav[0].style.backgroundColor = 'pink' ;
nav[0].style.border = '3px solid yellow';
h1[0].style.fontSize = '0.333rem';
h1[0].style.color = 'skyblue';
btn1.style.cursor = 'pointer';
login.style.cursor = 'pointer';