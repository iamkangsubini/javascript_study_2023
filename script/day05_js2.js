//배열과 객체
const a = 1 //상수(변하지 않는 값)
//a = 2 //error (상수값을 변경할 때 에러 발생)
let b = 2 //변수(변할 수 있는 값)
b += 4 //새로운 값이 대입될 경우 기존 값 2가 제거되고 4로 새로 대입
console.log(b);
//연관된 데이터 2개 이상을 배열
const yoil = ['일','월','화','수','목','금','토']
console.log(yoil);
console.log(`오늘은 ${yoil[1]}요일입니다!`)
console.log('-------------------------');

const colorArray = ['pink', 'blue','purple','white','yellow','black',]
const weather = ['흐름','맑음','비','눈','태풍']
const spanColor = document.querySelector('.color')
const spanWeather = document.querySelector('.weather')
console.log(spanColor, spanWeather)
//pink, white
//맑음
spanColor.innerHTML = colorArray[0]+','+colorArray[2]
//spanWeather.innerHTML = `${weatherArray[1]}입니다!`

let optionArray = new Array(4) //빈 배열 4자리 준비
console.log(optionArray) //emtpy*4
optionArray[0] = 'whtie'
optionArray[1] = 'M'
console.log(optionArray);