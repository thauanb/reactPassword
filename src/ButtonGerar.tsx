
function generateRandomCombination() {
  const alfabetic = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%&*';

  const getRandomCharacter = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
  };

  const randomAlfabetic1 = getRandomCharacter(alfabetic)
  const randomAlfabetic2 = getRandomCharacter(alfabetic)
  const randomAlfabetic = randomAlfabetic1.toUpperCase() + randomAlfabetic2
  const randomSymbol1 = getRandomCharacter(symbols);
  const randomSymbol2 = getRandomCharacter(symbols);
  const randomSymbol3 = getRandomCharacter(symbols);
  const randomSymbol = randomSymbol1 + randomSymbol2 + randomSymbol3;
  const randomNumber1 = getRandomCharacter(numbers);
  const randomNumber2 = getRandomCharacter(numbers);
  const randomNumber3= getRandomCharacter(numbers);
  const randomNumber4 = getRandomCharacter(numbers);
  const randomNumber5 = getRandomCharacter(numbers);
  const randomNumber= randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4 + randomNumber5;
  

  const randomCombination = (randomAlfabetic+randomSymbol+randomNumber).toString()
  //console.log(randomCombination); // Exemplo: exibir a combinação gerada no console
  return randomCombination
}

function buttonClickHandle(){
      const randomCombination = generateRandomCombination()
      const input = document.querySelector('.input') as HTMLInputElement
      input.value = randomCombination
} 



export default function ButtonGerar(props) {
  return (
    <button onClick={buttonClickHandle}  className='button'>
      {props.name}
    </button>
  );
}
