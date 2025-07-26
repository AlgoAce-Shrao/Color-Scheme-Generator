//Steps::

//1. take the buttons as input
const inpButt=document.querySelectorAll('.button')
//2.access each of the buttons and check the color it mentions
inpButt.forEach((col)=>{
    col.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        //if...else

        // if(e.target.id==='red'){
        //     color(`${e.target.id}`)
        // }
        // if(e.target.id==='blue'){
        //     color(`${e.target.id}`)
        // }
        // if(e.target.id==='green'){
        //     color(`${e.target.id}`)
        // }
        // if(e.target.id==='violet'){
        //     color(`${e.target.id}`)
        // }

        //switch case::

        const ids=e.target.id;
        switch(ids){
            case 'red':
                color(ids)
                break;
            case 'blue':
                color(ids)
                break;
            case 'green':
                color(ids)
                break;
            case 'violet':
                color(ids)
                break;
            case 'aqua':
                color(ids)
                break;
            default: 
                color('grey');
        }
    })
    
    
})

//function to change the bgcol according to the color of the buttons
function color(c){
    const body = document.querySelector('body');
    body.style.backgroundColor = c;
    // console.log(c);
    // console.log(body.style.backgroundColor = c);
}