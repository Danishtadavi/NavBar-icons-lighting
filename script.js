var icons = document.querySelectorAll(".icon");

icons.forEach(function(val, index){
    val.addEventListener("click", function(){
        dullandbright()
        gsap.to("#shadow",{
            x: index*100,
            ease: Expo.easeInOut,
            duration: .21
        })
        gsap.to(this.children, {
            opacity: 1
        })
    })
})

function dullandbright(){
    gsap.to(".icon i", {
        opacity: .3
    })
}