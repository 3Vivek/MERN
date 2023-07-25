// var React=require('react');
import React from 'react';
// var ReactDOM=require('react-dom');
import ReactDOM from 'react-dom';


// ReactDOM.render('kya dikahna h','kaha dikhana h','callback function')

//ye h react wala jo single line aur jsx ki help se efficinet h
ReactDOM.render(<h1>Hello vivek</h1>, document.getElementById('root'));

//h1 tage jo h wo html tag nhi h
//wo jsx h aur react help krta jsx ko run krane me nhi to bhut long ho jaega code
//babel kaam aata wo traditonal code to new me compile krdeta ek trh ka compiler h

//agr hello world ko traditional way se dikhate to
//pure js h

//ye h js wala jo traditional h
var h1=document.createElement('h1');
h1.innerHTML="Hello ";
document.getElementById("root").appendChild(h1);
//index.html me add kro kyuki ye new create hua h abhi (h1 i mean)

//ye h babel wala jo complicated h
ReactDOM.render( React.createElement("h1", {
  children: "Bye world"
}), document.getElementById('root'));