document.addEventListener("DOMContentLoaded", function(){
    const cookiebanner = document.getElementById("cookie-banner")
    const acceptbutton = document.getElementById("accept-cookies")

    function executescript(){
        console.log("les scripts sont declanches !")
        
    }

    if (localStorage.getItem('cookiesaccepted') === 'true'){
         cookiebanner.style.display= "none";
         executescript();
    }

    acceptbutton.addEventListener('click',function(){
        localStorage.setItem('cookiesaccepted','true');
        cookiebanner.style.display = "none";
        executescript();
    })

})