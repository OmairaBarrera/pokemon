export default{
    previo(){
        let previo = document.querySelector(".botones");
        previo.addEventListener("click", (e)=>{
            if(e.target.matches("a")){
                e.preventDefault();
                console.log(e.target.href)
            };
        });
    }
}