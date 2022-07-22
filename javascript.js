const numbox= document.getElementsByClassName('numbox').item(0);
numbox.textContent ='';

const nums = document.querySelectorAll('.nums');
nums.forEach((button) => {
    button.addEventListener("click", event => {
      if (numbox.textContent.length <11){
        numbox.textContent += button.textContent
      }
      }); 
});

let numlist = [];

const AC = document.querySelector('.clear');
AC.addEventListener('click', event => {
  numbox.textContent ='';
  numlist = [];
});

const x = document.querySelector('.multiply');
x.addEventListener('click', event => {
  numlist.push(numbox.textContent);
  numlist.push('x');
  numbox.textContent ='';
  console.log(numlist);
});

const add = document.querySelector('.add');
add.addEventListener('click', event => {
  numlist.push(numbox.textContent);
  numlist.push('+');
  numbox.textContent ='';
  console.log(numlist);
});

const minus = document.querySelector('.subtract');
minus.addEventListener('click', event => {
  numlist.push(numbox.textContent);
  numlist.push('-');
  numbox.textContent ='';
  console.log(numlist);
});

const dvd = document.querySelector('.divide');
dvd.addEventListener('click', event => {
  numlist.push(numbox.textContent);
  numlist.push('/');
  numbox.textContent ='';
  console.log(numlist);
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', event => {
  numlist.push(numbox.textContent);
  numbox.textContent ='';
  console.log(numlist);
  let temp = 0;
  for (let i=0; i<numlist.length; i++){
    let e = 1;
    if (i>1) { e=2; }
    if (temp == 0){
      if (numlist[i]=='+' ){
        console.log(i);
        temp = parseInt(numlist[i-e]) + parseInt(numlist[i+1]) ;
        console.log(temp);
      } if (numlist[i]=='-' ){
        temp = parseInt(numlist[i-e]) - parseInt(numlist[i+1]);
      } if (numlist[i]=='x'){
        temp = parseInt(numlist[i-e])  * parseInt(numlist[i+1]);
      } if (numlist[i]=='/'){
        temp = parseInt(numlist[i-e])  / parseInt(numlist[i+1]);
      }
    }else{
      if (numlist[i]=='+' ){
          console.log(i);
          temp = temp + parseInt(numlist[i+1]) ;
        } if (numlist[i]=='-' ){
          temp = temp- parseInt(numlist[i+1]);
        } if (numlist[i]=='x'){
          temp = temp  * parseInt(numlist[i+1]);
        } if (numlist[i]=='/'){
          temp = temp  / parseInt(numlist[i+1]);
        }
      console.log(temp);
      }
   }
   numbox.textContent = temp;
   numlist =[];
  });



