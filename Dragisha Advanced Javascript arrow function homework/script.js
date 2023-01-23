let colorFunc = (elem, color) => color === undefined ? elem.style.color = 'black' : elem.style.color = color; // црно е по дефолт, но ете

let textSizeFunc = (elem, textSize) => textSize === undefined ? elem.style['font-size'] = '24px' : elem.style['font-size'] = textSize + 'px'; // приметив без тоа + 'px' пак работи доколку напишеме, пример, 30px во input box директно
 
let colorAndTextSizeAttributor = document.getElementById('colorAndTextSizeAttributor');
let textSizeInput = document.getElementById('textSize');
let colorInput = document.getElementById('color');
let dummyText = document.getElementById('dummyText');

colorAndTextSizeAttributor.addEventListener('click', () => {
    textSizeFunc(dummyText, textSizeInput.value)
    colorFunc(dummyText, colorInput.value);
});





// function textSizeFunc(elem, textSize) {
//     if (textSize === undefined) {
//         elem.style['font-size'] = '24px';
//     }
//     else if (!isNaN(textSize)) {
//         elem.style['font-size'] = textSize + 'px'
//     }
//     else {
//         elem.innerText = 'Enter a number instead!';
//     }
// }


// сакав да направам уште нешто екстра, но не му успева... сакам ако не напишеме бројка како инпут, да ни се смени насловот во Enter a number instead!

// ова успеав да го направам, но ако после тоа (без refresh) отидам и напишам 40, ќе го претвори во 40px, но ќе остане како Enter a number instead!

// сакам да се случи нешто вакво: 

// пишувам 'ддњаодањодањд' во полето, се претвора h1 во Enter a number instead!

// директно отпосле пишувам 40, го претвора во 40px големина h1 и се враќа назад на 'Dummy text that should be affected by your inputs :)'

// сега за сега е whatever, барањето го пополнив од задачата брзо, ова е тоа што ме мачеше и сакам да добијам некаква идеја како хаха

// гледав нешто за тоа како на elem вредноста да му ја revert-нам на оригиналното (односно Dummy text that should be affected by your inputs :))... но само ми наоѓа нешто околу форми и defaultValue итн...

// ФАЛА ОДНАПРЕД!!! 😛