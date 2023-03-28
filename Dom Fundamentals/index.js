// DOM Selectors:

// // getElementById()
//   const title =  document.getElementById('main-heading');
//     console.log(title);

// // getElementByClassName()
//   const listItem =  document.getElementsByClassName("list-items");
//     console.log(listItem);

// // getElementByTagName()
//     const listItems = document.getElementsByTagName('li');
//     console.log(listItems);

// // querySelector()
//     const div = document.querySelector('div');
//     console.log(div);

// // querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);


// Styling:
// const title = document.querySelector('#main-heading');
// title.style.color = "red";

// const listItems = document.querySelectorAll('.list-items');
// for (index = 0; index < listItems.length; index++) {
//     listItems[index].style.fontSize = '3rem';
// }


// Creating Elements & Modify Texts:
// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// li.innerText = "Something..."
// ul.append(li);

// Modify attribute & classes:
// li.setAttribute('id', 'main-heading');
// console.log(li);
// li.removeAttribute('id');
// console.log(li);
// console.log(li.getAttribute('id'));

// li.classList.add('list-items');
// console.log(li);
// console.log(li.classList.contains('list-items'));
// li.classList.remove('list-items');
// li.remove(); // li got removed



// Parent node traversal:
// let uList = document.querySelector('ul');
// console.log(uList.parentNode);
// console.log(uList.parentElement);

// Child node traversal:
// let uList = document.querySelector('ul');
// console.log(uList.childNodes);
// console.log(uList.firstChild);
// console.log(uList.lastChild);
// uList.childNodes[1].style.backgroundColor = "blue";
// console.log(uList.children);
// console.log(uList.firstElementChild);


// Sibling Node traversal:
let uList = document.querySelector('ul');
const div = document.querySelector('div');
// console.log(div.childNodes);
// console.log(uList.previousSibling);
// console.log(uList.nextSibling);
// console.log(uList.previousElementSibling);



// Event Listeners:
// addEventListeners alllow us to have as many events as possible,
//  and doesnt override previous events.
// const buttonOne = document.querySelector('.btn-1');
// buttonOne.addEventListener('click', () => {
//     alert("btn");
// });

// const boxTwo =  document.querySelector('.box-2');
// boxTwo.addEventListener('mouseover', () => {
//    boxTwo.style.backgroundColor = "orange";
// });

// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// revealBtn.addEventListener('click', () => {
//     if(hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn');
//     } else {
//         hiddenContent.classList.add('reveal-btn');
//     }
// })


// Event Propagation:
// window.addEventListener('click', () => {
//     console.log('window');
// }, false);

// document.addEventListener('click', () => {
//     console.log('document');
// }, false);

// document.querySelector(".div2").addEventListener(
//     "click", (e) => {
//         // e.stopPropagation();
//         console.log('div 2 here');
//     }, {once: true});

// document.querySelector(".div1").addEventListener(
//     "click", () => {
//         console.log('div 1 here');
//     }, false);

// document.querySelector("button").addEventListener(
//     "click", (event) => {
//         console.log(event.target);
//     }, false);



// Event Delegation: Allows users to append a single event 
//   listener to a parent element that adds it to all of its
//      present and future descendents tht match a selector.

//  Before delegation =>
// document.querySelector('#football').addEventListener(
//     'click', (e) => {
//         console.log('Football clicked');
//         const target = e.target;
//         if(target.matches('li')) {
//             target.style.backgroundColor = 'lightgrey';
//         }
//     });

// document.querySelector('#basketball').addEventListener(
//     'click', (e) => {
//         console.log('Basketball clicked');
//         const target = e.target;
//         if(target.matches('li')) {
//             target.style.backgroundColor = 'orange';
//         }
//     });

// document.querySelector('#boxing').addEventListener(
//         'click', (e) => {
//             console.log('Boxing clicked');
//             const target = e.target;
//             if(target.matches('li')) {
//                 target.style.backgroundColor = 'yellow';
//             }
//     });

// document.querySelector('#tennis').addEventListener(
//         'click', (e) => {
//             console.log('Tennis clicked');
//             const target = e.target;
//             if(target.matches('li')) {
//                 target.style.backgroundColor = 'orangered';
//             }
//     });
 
// After delegation =>
document.querySelector('#sports').addEventListener(
    'click', e => {
        console.log(e.target.getAttribute('id') + 'is clicked');
    }
);