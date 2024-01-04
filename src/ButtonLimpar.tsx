
 function buttonClickHandle(){
       const input = document.querySelector('.input') as HTMLInputElement
       input.value=''
 } 
 
 
 
 export default function ButtonGerar(props) {
   return (
     <button onClick={buttonClickHandle}  className='button'>
       {props.name}
     </button>
   );
 }
 