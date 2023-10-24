function scrollToElement (elementID) {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({
        behavior: "smooth",
    })
};

export default scrollToElement;