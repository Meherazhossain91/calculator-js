
//get eliment



let call_data = [];
let valgate = (val) =>{
     
    call_data.push(val);
  

      document.querySelector('.top-monitor').innerHTML = call_data.join('');
      document.querySelector('.main-monitor').innerHTML=0;


}

let allclear = () =>{

    call_data = [];

    document.querySelector('.top-monitor').innerHTML = 0;
    document.querySelector('.main-monitor').innerHTML='';

}

let back= () =>{

    call_data.pop();
    document.querySelector('.top-monitor').innerHTML = call_data.join('');
    


}


let finalresult =() =>{

    let cal_string = call_data.join('');
    document.querySelector('.main-monitor').innerHTML=eval(cal_string);

}