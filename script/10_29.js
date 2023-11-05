const basic_btn = document.querySelector('#basic_btn')
const a = document. querySelector('#dst_link')
console.log(basic_btn, a)

//버튼에 마우스를 올렸을 때 색이 핑크색으로 변하기
basic_btn.addEventListener('mouseover',function(){
    this.style.color = 'pink'
});

basic_btn.addEventListener('mouseout',function(){
    this.style.color = 'aqua'
});

//링크 마우스 클릭했을 때 basic_btn의 선이 없어지고 배경색 바뀌기, 글씨 커지기
a.addEventListener('click',function(){
    basic_btn.style.border = 'none'
    basic_btn.style.backgroundColor = 'green'
    basic_btn.style.fontSize = '5rem'
});
