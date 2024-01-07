const fb = $("#fb");
const gh = $("#gh");
const english = $("#toEnglish");
const polish = $("#toPolish");

fb.click(()=>{
    window.open("https://www.facebook.com/profile.php?id=100080106387894&locale=pl_PL", "_blank");
});
gh.click(()=>{
    window.open("https://github.com/banasaron", "_blank");
});

english.click(()=>{
    window.open("../../index.html");
});
polish.click(()=>{
    window.open("assets/lang/page-polish.html")
});
