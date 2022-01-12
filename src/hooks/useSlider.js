const useSlider = element => {
 let el = element;
 let x = 0, y = 0, top = 0, left = 0;

 let draggingFunction = (e) => {
    document.addEventListener('mouseup', () => {
        document.removeEventListener("mousemove", draggingFunction);
    });

    el.scrollLeft = left - e.pageX + x;
    el.scrollTop = top - e.pageY + y;
 };
 if(!el) return
 el.addEventListener('mousedown', (e) => {
    e.preventDefault();

    y = e.pageY;
    x = e.pageX;
    top = el.scrollTop;
    left = el.scrollLeft;

    document.addEventListener('mousemove', draggingFunction);
 });
}

export default useSlider;