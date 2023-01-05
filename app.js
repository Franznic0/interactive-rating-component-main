const rates = document.querySelectorAll('.ratings');
const submit = document.querySelector('.submit');
const containerRating = document.querySelector('.container-rating');
const conatinerThankyou = document.querySelector('.container-thankyou');
const rateValue = document.querySelector('.rate-value');

submit.addEventListener('click', e => {
    console.log(rates.checked);
})

submit.addEventListener('click', () => {
    
    /* rate handler */
    
    let selectedRate;
    for ( const rate of rates) {
        if (rate.checked) {
            selectedRate = rate.value;
            break;
        } 
    }

    rateValue.textContent = selectedRate;
    
    /* add animation Thank you card */
    conatinerThankyou.classList.add('active-animation');
    
    setTimeout(() =>{

            /* remove active-animation class */
            conatinerThankyou.classList.remove('active-animation');

            /* reset radio button*/
            for ( const rate of rates) {
                if (rate.checked) {
                    rate.checked = false;
                    break;
                }
            }

    }, 4500
    );
    
    }
);
