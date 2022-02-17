
let button = document.getElementById('button');
let person1 = document.getElementById('pessoa_1');
let person2 = document.getElementById('pessoa_2');
let result = document.getElementById('result');
let loadingCircle = document.getElementById('circle-animation')

button.onclick = () =>{
    let p1 = person1.value
    let p2 = person2.value
    person1.value= ''
    person2.value= ''

    let newP1= p1.charAt(0).toUpperCase() + p1.slice(1)
    let newP2= p2.charAt(0).toUpperCase() + p2.slice(1)

    if(!p1||!p2){
        alert('Coloque todos os nomes!')
    }
    else{
        setTimeout(()=>{
            let compatibilyScore = `${Math.floor(Math.random()*100)+1}%`
            console.log(compatibilyScore, newP1, newP2)
            result.innerText =  `A compatiblidade entre ${newP1} e ${newP2} é de ${compatibilyScore}`
        },2600)
    }
}

