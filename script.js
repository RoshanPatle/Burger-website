
const hamburger=document.getElementById('hamburger')
const navmenu=document.getElementById('nav-menu')
const closeicom=document.getElementById('close-nav')
const navlink=document.querySelectorAll('.nav--link')


navlink.forEach(link=>
    link.addEventListener('click',()=>{

navmenu.classList.add('hidden')

    })
    )


closeicom.addEventListener('click', ()=>{
    navmenu.classList.add('hidden')
})


hamburger.addEventListener('click', ()=>{
    navmenu.classList.remove('hidden')
})

/*-------------------------tabs wrap-------------*/

const tabs=document.querySelectorAll('.tabs-wrap ul li')
const all = document.querySelectorAll('.item-wrap')
const foods=document.querySelectorAll('.food')
const snacks=document.querySelectorAll('.snack')
const beverages=document.querySelectorAll('.beverage')

         

tabs.forEach(tab=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab=>{
            tab.classList.remove('active')
         } )
         tab.classList.add('active')  
         
         
         const taball=tab.getAttribute("data-tabs");

all.forEach(item=>{
item.style.display='none'
            })
         

if(taball=='food'){
    foods.forEach(item=>{
        item.style.display='block'
                    })
}else if(taball=='snack'){
    snacks.forEach(item=>{
        item.style.display='block'
                    })
}else if(taball=='beverage'){
    beverages.forEach(item=>{
        item.style.display='block'
                    })
}else{
    all.forEach(item=>{
        item.style.display='block'
                    })

}

    })

})

//-----------------dark mode

const toogleblack=document.getElementById('tooglebar');
const body=document.querySelector('body');
const promo1=document.getElementById('promo1')
const promo2=document.getElementById('promo2')
const review=document.getElementById('container1')
const btn = document.querySelectorAll('.tabs-wrap ul li')
const allmenu = document.querySelectorAll('.menu1')
const swipper=document.querySelectorAll('.swiper-slide1')

toogleblack.addEventListener('click', function(){
this.classList.toggle('ri-moon-line');


if(this.classList.toggle('ri-sun-line')){
    body.style.transition='2s'
    review.style.transition='2s'
    body.style.background='black';
    promo1.style.background='#1e293b'
    promo2.style.background='#1e293b'
    review.style.background='black'

    

    btn.forEach(item=>{
        item.style.background='#1e293b'
        item.style.color='white'
                    })

         allmenu.forEach(item=>{
         item.style.background='#1e293b'
        })

swipper.forEach(swip=>{
    swip.style.background='#1e293b'
})


    }else{
        body.style.background='#010a5e';
        promo1.style.background='#010d78'
        promo2.style.background='#010d78'
        review.style.background='#010d78'
        
    
        btn.forEach(item=>{
            item.style.background='#010d78'
            item.style.color='white'
                        })
    
             allmenu.forEach(item=>{
             item.style.background='#010d78'
            })

    }
})



















