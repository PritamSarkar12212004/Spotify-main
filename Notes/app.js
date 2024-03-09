let addBtn = document.querySelector("#add")
let box = document.querySelector(".box")

//function
function action() {
    let p = document.createElement("p")
    p.setAttribute("contenteditable", "true")
    p.className = "pp"
    box.appendChild(p)
    let img=document.createElement("img")
    img.className="delete"
    img.src="asists/trash.png"
    p.appendChild(img)
    img.addEventListener("click",()=>{
        p.remove()
    })
}
//btn
addBtn.addEventListener("click", () => {
    action()
    console.log("Acive")
    
})