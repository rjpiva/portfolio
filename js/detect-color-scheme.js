//Ref.: https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting


// https://dhirajkumarsingh.wordpress.com/2013/01/20/cool-inset-text-effect-with-css3-text-shadow/

//determines if the user has a set theme
function detectColorScheme(){
    let theme="light";    //default to light

    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") == "dark"){
            theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        theme = "dark";
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme=="dark") {
         document.documentElement.setAttribute("data-theme", "dark");
    }
}
detectColorScheme();