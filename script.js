const flakes = document.querySelector('.snow')

function createSnow(){
    
    for(let i = 0 ; i < 200 ; i ++){
        function random(min,max){
            return Math.random() * (max - min) + min
        }

        const position =Math.floor(random(5,99));
        const snow = document.createElement('li')
        const size = Math.floor(random(0,5))
        const delay = random(10,0.1)
        const duration = random(24,60)

        snow.style.width=`${size}px`;
        snow.style.height=`${size}px`;
        snow.style.transitionDelay=`${delay}s`
        snow.style.animationDuration=`${duration}s`

        snow.style.left=`${position}%`


        flakes.appendChild(snow)
    }
    
}


createSnow()