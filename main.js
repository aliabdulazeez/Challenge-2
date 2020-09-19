
const w = document.getElementById("davron");

const button = document.getElementById('share');

button.addEventListener('click', () => {

    if(w.classList[1] == "disabled"){

        w.classList.remove("disabled");

    }else{

        w.classList.add("disabled");
    }  
})
