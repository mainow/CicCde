function Redirect(on, url) {
    if (on == undefined || on) {
        window.location.href = url;
    }
}

export default Redirect;