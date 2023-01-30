const booMove = () => {
    const smellmore = document.querySelector('.boo3');
    
    smellmore.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('boob');
  
    });
    
    smellmore.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('boob');
    
    });
  
  }
  
  booMove();

const booMovePhone = () => {
    const smellmore = document.querySelector('.boo3phone');
    
    smellmore.addEventListener('click',() => {
        
        smellmore.classList.toggle('boob');
  
    });
    
  
  }
  
  booMovePhone();

  const symbol = () => {
    const smellmore = document.querySelector('.boo3')
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    const drawing = document.querySelector('.drawing');
    const painting = document.querySelector('.painting');
    const digital = document.querySelector('.digital');
    const shop = document.querySelector('.shop');
    
    home.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('home');
  
    });
    
    home.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('home');
    
    });
    about.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('about');
  
    });
    
    about.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('about');
    
    });
    drawing.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('drawing');
  
    });
    
    drawing.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('drawing');
    
    });
    painting.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('painting');
  
    });
    
    painting.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('painting');
    
    });
    digital.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('digital');
  
    });
    
    digital.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('digital');
    
    });
    shop.addEventListener('mouseenter',() => {
        
        smellmore.classList.toggle('shop');
  
    });
    
    shop.addEventListener('mouseleave',() => {
        
        smellmore.classList.toggle('shop');
    
    });
   
  
  }
  
  symbol();