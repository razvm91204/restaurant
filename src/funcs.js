// images src https://cdn-icons-png.flaticon.com/512/739/739249.png
// factory function for any element
import './style.css'

const data={
    root: 'content',
    image: 'https://cdn-icons-png.flaticon.com/512/739/739249.png',
}

function Element(source, dist, text='', id='', className='', imagesrc='', onclick=''){
    this.source=source;
    this.dist=document.getElementById(dist);
    this.text=text;
    this.imagesrc=imagesrc;
    this.id=id;
    this.className=className;
    this.onclick = onclick;
    let elem = document.createElement(source);
    if(source=='img'){
        elem.height="50";
        elem.width="50";
        elem.src=imagesrc;
    }
    elem.textContent=text;
    if(id.length>0)
        elem.id=id;
    if(className.length>0)
        elem.classList.add(className);
    this.dist.appendChild(elem);

    return {onclick, id};
}
function selectTab(){
    let tab = this.id;

    if(document.getElementById(tab).classList.contains('selected')==false){
        if(document.getElementById('main-section')){
            document.getElementById('main-section').remove();
        }
        new Element('section', data.root, '', 'main-section');
        setSelected();
        if(tab==='home'){
            new Element('div', 'main-section', 'Shelly\'s Shack', 'title');
            new Element('div', 'main-section', 'ABOUT', 'about', 'card');
            new Element('p', 'about', 'Shelly\'s Shack is a welcoming restaurant, serving food from different corners of the world');
            new Element('div', 'main-section', 'HOURS', 'hours', 'card');
            new Element('p', 'hours', 'Monday: 8-22');
            new Element('p', 'hours', 'Tuesday: 8-22');
            new Element('p', 'hours', 'Wednesday: 8-22');
            new Element('p', 'hours', 'Thursday: 8-22');
            new Element('p', 'hours', 'Friday: 8-22');
            new Element('p', 'hours', 'Saturday: 9-17');
            new Element('p', 'hours', 'Sunday: 9-15');
            new Element('div', 'main-section', 'LOCATION', 'location', 'card');
            new Element('p', 'location', 'Str. Bocșei, nr. 75, Lugoj')
        }
        else if(tab==='menu'){
            new Element('div', 'main-section', 'MENU', 'title');
            new Element('div', 'main-section', '', 'img-1', 'card');
            new Element('p','img-1','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            new Element('img', 'img-1', '', '', '','https://cdn-icons-png.flaticon.com/512/739/739249.png');
            new Element('div', 'main-section', '', 'img-2', 'card');
            new Element('p','img-2','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            new Element('img', 'img-2', '', '', '','https://cdn-icons-png.flaticon.com/512/739/739249.png');
            new Element('div', 'main-section', '', 'img-3', 'card');
            new Element('p','img-3','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            new Element('img', 'img-3', '', '', '','https://cdn-icons-png.flaticon.com/512/739/739249.png');
            new Element('div', 'main-section', '', 'img-4', 'card');
            new Element('p','img-4','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
            new Element('img', 'img-4', '', '', '','https://cdn-icons-png.flaticon.com/512/739/739249.png');

        }
        else if(tab==='contact'){
            new Element('div', 'main-section', 'CONTACT', 'title');
            new Element('div', 'main-section', 'CHEF', 'contact-1','card');
            new Element('p', 'contact-1', '555-555-5554');new Element('p', 'contact-1', 'totallyRealEmail@notFake.com');  
            new Element('div', 'main-section', 'MANAGER', 'contact-2','card');
            new Element('p', 'contact-2', '555-555-5554');new Element('p', 'contact-2', 'totallyRealEmail@notFake.com');  
            new Element('div', 'main-section', 'OWNER', 'contact-3','card');
            new Element('p', 'contact-3', '555-555-5554');new Element('p', 'contact-3', 'totallyRealEmail@notFake.com'); 
        }
    } 
    function setSelected(){
        let tabs = Array.from(document.getElementsByClassName('nav-btn'));
        tabs.forEach(thisTab=>{
            if(thisTab.id!==tab) thisTab.classList.remove('selected');
            else thisTab.classList.add('selected');
        })
    }
}

function init(){

    let tabsFunc=[];
    new Element('nav', data.root, '', 'nav');
    tabsFunc.push(new Element('div', 'nav', 'Home', 'home', 'nav-btn', '', selectTab));
    tabsFunc.push(new Element('div', 'nav', 'Menu', 'menu', 'nav-btn', '', selectTab));
    tabsFunc.push(new Element('div', 'nav', 'Contact', 'contact', 'nav-btn', '', selectTab));
    let tabs=Array.from(document.getElementsByClassName('nav-btn'));
    tabs.forEach((tab, index)=>{
        tab.addEventListener('click', tabsFunc[index].onclick);
    })
    tabsFunc[0].onclick(); // starts on home 
}

export {init};
