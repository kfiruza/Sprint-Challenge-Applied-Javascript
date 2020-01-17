// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // define new elements
 const header =document.createElement('div'),
       date = document.createElement('span'),
       h1 = document.createElement('h1'),
       temp = document.createElement('span');
    
     // set class names
       header.classList.add('header');
       date.classList.add('date');
       temp.classList.add('temtp');
    
       h1.textContent ='Lambda Times';
       date.textContent ='SMARCH 28, 2019';
       temp.textContent = '98°';
    
       header.appendChild(date);
       header.appendChild(h1);
       header.appendChild(temp);
    
        return header;
    }
     const header = Header();
     document.querySelector('.header-container' ).appendChild(header);

