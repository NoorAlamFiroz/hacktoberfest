const tiles = [a,b,c,d,e,f,g,h,i];
let t1 = [a,b,c]
let t2 = [c,f,i]
let t3 = [i,g,h]
let t4 = [g,d,a]
let t5 = [a,e,i]
let t6 = [g,e,c]
let t7 = [d,e,f]
let t8 = [b,e,h]

let data = [t1,t2,t3,t4,t5,t6,t7,t8]
let winner = "Draw 😵‍💫"
const color = ["rgb(255, 54, 54)", "rgb(3, 255, 3)"];
let gameOn = true
let colorIndex = 1;
for(let i=0; i<tiles.length; i++){
    tiles[i].onclick = ()=>{
        p1.setAttribute("disabled", "disabled")
        p1.classList.add("col-6","mb-5")
        p2.setAttribute("disabled", "disabled")
        p2.classList.add("col-6","mb-5")
        if(p1.value=="")
            p1.value = "Player 1"
        if(p2.value=="")
            p2.value = "Player 2"
            if(gameOn){
                if(tiles[i].style.backgroundColor == ''){
                    tiles[i].style.backgroundColor= color[colorIndex%2];
                    colorIndex++;
                    if(colorIndex==10)
                    gameOn = false
                    console.log(colorIndex)
                }
                if(gameOn!=true){
                    h1.innerText = `${winner}` 
                }
    
            let someData = data.map((testData)=>{
                return testData.map((test)=>{
                    return [test.style.backgroundColor, test]
                })
            })
            for(let i=0; i<someData.length; i++){
                if(someData[i][0][0] == someData[i][1][0] && someData[i][1][0] == someData[i][2][0] && someData[i][0][0]!=""){
                    if(someData[i][0][0] == "rgb(3, 255, 3)"){
                        winner = p1.value
                    }
                    else if(someData[i][0][0] == "rgb(255, 54, 54)"){
                        winner = p2.value
                    }
                    h1.innerText = `${winner} Wins 🏆`
                    someData[i][0][1].style.border = "solid 10px rgb(47, 255, 54)"
                    someData[i][1][1].style.border = "solid 10px rgb(47, 255, 54)"
                    someData[i][2][1].style.border = "solid 10px rgb(47, 255, 54)"
                    gameOn = false
                }

            }
        }
    }
}