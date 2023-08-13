var says = 
[
    "uh",
    "my coder friends copying me and hes better at coding then me",
    "Schools Pretty Boring",
    "This Websites Trash", 
    "i took too long making this :(", 
    "AOSUDHASIUD4u3ghiuj34hgi34gH", 
    "tinyurl.com/RailinDev", 
    "all 1v1lol's are blocked at my school", 
    "the person who made this websites pretty cool", 
    "what day is it?", 
    "i hate myself",
    "SOMEONE PLEASE SPONSOR ME (cartxrr@proton.me)"
]

function pageLoad() {
    document.getElementById('randomting').innerHTML = says[Math.floor(Math.random() * says.length)]
}