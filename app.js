let so = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let chuSo = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

// Function get length of a number
function getLength(num)
{
    let count = 0;

    if (num === 0)
    {
        count++;
    }

    while(num >= 1)
    {
        count ++;
        num /= 10;
    }
    return count;
}

//Function chuyển số thành chữ
function chuyenSoThanhChu(number)
{ 
    let Chu = [];
    let numberLength = getLength(number);

    if(Number.isInteger(number) && number < 1000)
    {
        for(let i = 0; i < numberLength; i++)
        {
            let remainder = number % 10;
            number = Math.trunc(number/10);

            for(let j = 0; j < so.length; j++)
            {
                if(remainder === so[j])
                {
                    Chu.push(chuSo[j]);
                }
            }
        }
    } else {
        console.log('so khong hop le')
    }

    //Chuyển Chu array đúng thứ tự của dãy số
    h = Chu.reverse()
    let finalResult;
    
    finalResult = numberLength === 1 ? h[0] : "";


    if(numberLength === 2)
    {
        if(h[0] === 'một' && h[1] === 'không' ) {
            finalResult = "mười";
        } else if (h[0] === 'một'){
            finalResult = 'mười ' + h[1];
        } else if (h[1] === 'không' || h[0] !== 'một' && h[1] === 'một'){
            finalResult = h[1] === 'không' ?  `${h[0]} mươi` : `${h[0]} mươi mốt` ;
        } else {
            finalResult = h[0] + ' mươi ' + h[1];
        }
    }

    if(numberLength === 3)
    {
        if(h[1] === 'không') {
            finalResult = h[0] + " trăm linh " + h[2];    
        } else if (h[2] === 'không') {
            finalResult = h[1] === 'một' ? `${h[0]} trăm mười` : `${h[0]} trăm ${h[1]} mươi`;
        } else if(h[1] === 'không' && h[2] === 'không') {
            finalResult = h[0] + ' trăm';
        } else if(h[1] === 'một') {
            finalResult = h[0] + ' trăm mười ' + h[2];
        }  else if(h[2] === 'một') {
            finalResult = h[0] + ' trăm ' + h[1] + ' mươi mốt';
        } else {
            finalResult =  h[0] + ' trăm ' + h[1] + ' mươi ' + h[2];
        }
    }

    return finalResult;
} 



//Test
console.log(chuyenSoThanhChu(101));
console.log(chuyenSoThanhChu(231));
console.log(chuyenSoThanhChu(19));
console.log(chuyenSoThanhChu(10));
console.log(chuyenSoThanhChu(0));
console.log(chuyenSoThanhChu(510));
console.log(chuyenSoThanhChu(212));
