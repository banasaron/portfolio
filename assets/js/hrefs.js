const gh = $("#gh");
const english = $("#toEnglish");
const polish = $("#toPolish");

gh.click(()=>{
    window.open("https://github.com/banasaron", "_blank");
});

english.click(()=>{
    window.open("../index.html", "_self");
});
polish.click(()=>{
    window.open("lang/page-pl.html", "_self")
});
