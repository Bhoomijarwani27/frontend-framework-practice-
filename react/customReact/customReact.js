
// custom react render function 
   function customRender(reactElement,maincontainer  ){
   /* const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
     domElement.setAttribute('target', reactElement.props.target)

     maincontainer.appendChild(domElement)
     */
    // Loop through all props and set them as DOM attributes automatically
    // This avoids manual work and makes the renderer dynamic, reusable, and flexible
     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.Children
     for (const prop in  reactElement.props){
        if (prop == 'Children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }
     maincontainer.appendChild(domElement)
}
// react element
const reactElement = {
    type: 'a',
    props : {
        href: 'https://google.com',
        target : '_blank'  
    },
    Children : 'click me to vist google'
}

const  maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer)


