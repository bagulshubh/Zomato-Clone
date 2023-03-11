let text = document.getElementById('needtochange');

function changeinput(){
    text.innerHTML = `
    <input type="text" name="text-input" id="text-input" class="email" placeholder="+91  |  type here...">
    `
}

function changeback(){

    text.innerHTML=`
        <input type="text" name="text-input" id="text-input" class="email" placeholder="Email">
    `
}

let dropdown = document.querySelectorAll('.visible')
let hidden = document.querySelectorAll('.hidden-para')
let icon = document.querySelectorAll('.exp-down-icon')

for(let i  = 0;i<dropdown.length;i++){
        dropdown[i].addEventListener('click',function(){
            hidden[i].style.cssText = `
                display:block;
            `
            icon[i].style.cssText=`
                transform: rotate(180deg);
                transition-duration: 400ms;
            `
        })

        hidden[i].addEventListener('click',function(){

            hidden[i].style.cssText = `
                display:none;
            `
            icon[i].style.cssText=`
                transform: rotate(360deg);
                transition-duration: 400ms;
            `

        })

}

