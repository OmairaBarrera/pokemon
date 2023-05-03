import myModulo from "./myModulo.js";
// export default{
//     previo(){
//         let previo = document.querySelector("#botones");
//         previo.addEventListener("click", (e)=>{
//             if(e.target.matches("a")){
//                 e.preventDefault();
//                 let data = e.target.href;
//                 myModulo.pokemon(data);
//             };
//         });
//     }
// }
export default{
    previo(){
        let previo = document.querySelector("#botones");
        previo.addEventListener("click", (e)=>{
          if(e.target.matches("a")){
            e.preventDefault();
            if (e.target.closest('#botones')) {
              let data = e.target.href;
              myModulo.pokemon(data);
            }
          };
        });
    }
}

  