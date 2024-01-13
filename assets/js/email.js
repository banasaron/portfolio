const username = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("form");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let ebody = `
        <b>Name and surname: ${username.value}</b>
        <br>
        <hr>
        <br>
        <b>Email: ${email.value}</b>
        <br>
        <hr>
        <br>
        <b>Message: ${message.value}</b>
    `

    Email.send({
        SecureToken : "68246496-690b-42d4-be45-4dd10679073b",
        To : 'aronbanas.kontakt@gmail.com',
        From : "aronbanas.kontakt@gmail.com",
        Subject : "New email from contact form!",
        Body : ebody
    }).then(()=>{
        if(languageParam == "english"){
            window.open("https://banasaron.github.io/portfolio/submit/submit-en.html", "_self")
        } else if(languageParam == "polish"){
            window.open("https://banasaron.github.io/portfolio/submit/submit-pl.html", "_self")
        }
    });
    
});