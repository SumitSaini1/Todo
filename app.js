let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let value=inp.value.trim();

    if (value.length > 0) {
        let list = document.createElement("li");
        list.innerText = value +"  ";

        let dlt=document.createElement('button');
        dlt.innerText="Delete";

        dlt.addEventListener("click", function () {
            list.remove();
        });


        list.appendChild(dlt);
        ul.appendChild(list);
        
    
       
    }
    inp.value = "";

  

});

ul.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});