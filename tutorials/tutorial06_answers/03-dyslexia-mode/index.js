const initPage = () => {
    // toggle dyslexia support
    const isPressed = window.localStorage.getItem("dyslexic") === 'true';
    if(isPressed) {
        document.body.classList.add("dyslexia-mode");
    }

    // set the button to pressed if appropriate
    const toggle = document.querySelector("#dyslexia-toggle");
    if (isPressed) {
        toggle.setAttribute('aria-pressed', 'true');
    }

    // attach event handler
    toggle.addEventListener('click', toggleEventHandler);
};

const toggleEventHandler = ev => {
    // get current state:
    let pressed = ev.currentTarget.getAttribute('aria-pressed') === 'true';;
    //console.log(pressed);

    // toggle button's current state:
    ev.currentTarget.setAttribute('aria-pressed', String(!pressed));

    // toggle the .dyslexia-mode class:
    document.body.classList.toggle("dyslexia-mode");

    // persist the setting to local storage:
    window.localStorage.setItem("dyslexic", String(!pressed));
};

// invoke initPage funnction:
initPage();
