document.querySelectorAll('.play-btn').forEach(button => {  
    button.addEventListener('click', () => {  
       // Play video or display more information about the episode  
       console.log('Play button clicked!');  
        
       // Add some animation to the button  
       button.classList.add('playing');  
       setTimeout(() => {  
         button.classList.remove('playing');  
       }, 2000);  
    });  
 });
