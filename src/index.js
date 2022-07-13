// images src https://cdn-icons-png.flaticon.com/512/739/739249.png
// factory function for any element
import './style.css'

const data={
    root: 'content',
    image: 'https://cdn-icons-png.flaticon.com/512/739/739249.png',
}

function Element(source, dist, text, id, className, imagesrc){
    this.source=source;
    this.dist=document.getElementById(dist);
    this.text=text;
    this.imagesrc=imagesrc;
    this.id=id;
    this.className=className;
    let elem = document.createElement(source);
    elem.textContent=text;
    if(id.length>0)
        elem.id=id;
    if(className.length>0)
        elem.classList.add(className);
    this.dist.appendChild(elem);
}

new Element('nav', data.root, '', 'nav', '', '');
new Element('div', 'nav', 'Home', '', 'nav-btn', '');
new Element('div', 'nav', 'Menu', '', 'nav-btn', '');
new Element('div', 'nav', 'Contact', '', 'nav-btn', '');

