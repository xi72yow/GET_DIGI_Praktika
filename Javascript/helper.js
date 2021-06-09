function mathTosub() {
    let maths = document.querySelectorAll("math");
    maths.forEach((elem, index, array) => {
        let upper = elem.querySelector("mi").innerHTML;
        let down = elem.querySelector("mn").innerHTML;
        elem.insertAdjacentHTML("beforebegin", upper + "<sub>" + down + "</sub>");
        elem.parentNode.removeChild(elem);
    });
}
mathTosub();