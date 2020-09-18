
const parent = document.getElementById('here').lastElementChild;


const button = document.getElementById('share').addEventListener('click', () => {

    
    const has = document.getElementById('here').innerHTML;

     console.log(has);

        add();

     console.log(has);
    

   
    
      
});


function add(){
    const shares = document.createElement('div');

    shares.className = 'shares';

    shares.innerHTML = `
        <h3>SHARE</h3>
        <img src="images/icon-facebook.svg" alt="">
        <img src="images/icon-pinterest.svg" alt="">
        <img src="images/icon-twitter.svg" alt="">
    `;

    document.getElementById('here').appendChild(shares);
}


function remove() {
    // const shares = document.getElementsByClassName('shares');
    document.getElementById('here').removeChild(shares);
  }