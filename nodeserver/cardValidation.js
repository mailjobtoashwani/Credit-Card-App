  //luhn 10 check
// Returns true if given
    // card number is valid (e.g  79927398713)
    const checkLuhn10=(cardNo)=>
    {
        let nDigits = cardNo.length;
 
        let nSum = 0;
        let isSecond = false;
        for (let i = nDigits - 1; i >= 0; i--)
        {
 
            let d = cardNo[i].charCodeAt() - '0'.charCodeAt();
 
            if (isSecond == true)
                d = d * 2;
 
            // We add two digits to handle
            // cases that make two digits
            // after doubling
            nSum += parseInt(d / 10, 10);
            nSum += d % 10;
 
            isSecond = !isSecond;
        }
        return (nSum % 10 == 0);
    }

    const validateCardNumber= (cardNumber)=>{
        if(!checkLuhn10(cardNumber)){
          
            let error =new Error('Card Number is invalid(e.g. Failed Luhn check)');
            error.statusCode = 400;

            throw error;
        }
        
        



    }
     
    //end

    module.exports = validateCardNumber;