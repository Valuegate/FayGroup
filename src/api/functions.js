function scrollToElement (elementID) {
    const element = document.getElementById(elementID);
    element?.scrollIntoView({
        behavior: "smooth",
    })
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.error = reject;
    });
}


export default {scrollToElement, getBase64};