
window.onscroll = () =>{
    if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        $("#back-to-top").show();
    }else{
        $("#back-to-top").hide(); 
    }
    
}

const toTop = () => window.scrollTo({top: 0, behavior:'smooth'});