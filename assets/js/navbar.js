/*=============== SHOW MENU ===============*/
$(document).ready(()=>{
    const navMenu = $('#nav-menu');
    const navToggle = $('#nav-toggle');
    const navClose = $('#nav-close');

    /* Menu show */
    navToggle.click(()=>{
        navMenu.addClass('show-menu');
    });

    /* Menu hidden */
    navClose.click(()=>{
        navMenu.removeClass('show-menu');
    });
});

