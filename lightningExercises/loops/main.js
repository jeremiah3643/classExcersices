const words = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] 


const filterArray = words.filter(word =>{
    const string = (typeof word === 'string')
    return string;
})

console.log(filterArray)

const text = document.querySelector(".text")

const textArray = document.createElement("p")
textArray.textContent = filterArray.join(" ")

text.appendChild(textArray)