//함수
//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다!
//1. 생성 : function 함수명(매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(str){ //접속 회원에 맞춤형 인사 함수생성
    console.log(`${str}님 어서오세용~`)
} //생성함수 end
func1('슈빔')
func1('bini66') //호출
//------------------------------
console.log('----------------------')
//함수 기능 : 리턴(return) 함수결과값 외부로 반환명령
function fun2(a){
    return a+1 //리턴을 활용해서 함수의 결과값만 외부로 변환
}
fun2(100) //함수결과값을 출력하는 메서드가 없어 출력x
console.log(fun2(100)) //함수결과를 호출앞 메서드에 의해 출력o
window.alert(fun2(200))
document.write(fun2(10))
//------------------------------
console.log('----------------------')
function fun3(a,b){
    return a*b
}
console.log(fun3(10,20))
console.log(fun3(2,3))
//------------------------------
console.log('----------------------')
let totla = 0
function fun4(a){
    total = a 
    return total //return이 나오면 바로 console로 가기 때문에 증가는 무시하게 된다.
    total++ //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(fun4(10)) //10
//------------------------------
console.log('----------------------')
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //num1 = 30
    num2 = a+b //num2 = 6
    num1 += num2 // num1 = 36
    return num1
}
console.log(func5(2,4))
//------------------------------
console.log('----------------------')
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow') //노랑
});
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue') //파랑
});
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2], 'pink') //분홍
});
//함수 = 반복되는 재사용 문법, 매개변수 = 재사용문법 내 수정데이터
function bg(target, target2){
    return target.style.backgroundColor = target2
}
//------------------------------
console.log('----------------------')
//관심상품, 알림설정 이미지에 마우스를 올렸을 때
//off -> on 이미지 변경
//마우스를 나갔을 때 on -> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    //likeImg.src = './images/heart_on.png'
    onoff(likeImg, 'heart', 'on')
});
likeImg.addEventListener('mouseout',function(){
    //likeImg.src = './images/heart_off.png'
    onoff(likeImg, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    //ideaImg.src = './images/idea_on.png'
    onoff(ideaImg, 'idea', 'on')
});
ideaImg.addEventListener('mouseout',function(){
    //ideaImg.src = './images/idea_off.png'
    onoff(ideaImg, 'idea', 'off')
})
function onoff(target, name, status){
    return target.src = `./images/${name}_${status}.png`
}
//this로 적어도 됨