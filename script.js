const body= document.body
const div =document.createElement("div")
const strong =document.createElement("strong")// anathor way for using htmls tags
strong.innerText="Hello world4"
body.append(strong)
body.append(div)
//div.innerText=" Hello world"// prints the text which is in space , shows the text as html output shows
//div.textContent ="Hello world 2"// print all the text in div
div.innerHTML = "<strong>Hello world 3</strong>" // .innerHTML is used to for using Htmls tags llike  here strong

// const div = document.querySelector("div")
// console.log(div.innerText)
// console.log(div.textContent)