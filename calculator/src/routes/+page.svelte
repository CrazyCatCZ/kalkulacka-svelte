<script>
  import { updateButtonCounts } from '../../api/update-statistic.js';
  import { getButtonCounts } from '../../api/get-statistic.js';

  let displayValue = '0';
  let buttonCounts = {};

  async function handleClick(buttonValue) {
    if (buttonValue === 'C') {
      displayValue = '0';
    } else if (buttonValue === '=') {
      displayValue = eval(displayValue);
    } else {
      if (displayValue === '0') {
        displayValue = buttonValue;
      } else {
        displayValue += buttonValue;
      }
      await updateButtonCounts(buttonValue);
      buttonCounts = await getButtonCounts();
    }
  }
</script>

<div class="calculator">
  <div class="display">{displayValue}</div>
  <div class="buttons">
    <button on:click={() => handleClick('7')}>7</button>
    <button on:click={() => handleClick('8')}>8</button>
    <button on:click={() => handleClick('9')}>9</button>
    <button on:click={() => handleClick('/')}>/</button>
    <button on:click={() => handleClick('4')}>4</button>
    <button on:click={() => handleClick('5')}>5</button>
    <button on:click={() => handleClick('6')}>6</button>
    <button on:click={() => handleClick('*')}>*</button>
    <button on:click={() => handleClick('1')}>1</button>
    <button on:click={() => handleClick('2')}>2</button>
    <button on:click={() => handleClick('3')}>3</button>
    <button on:click={() => handleClick('-')}>-</button>
    <button on:click={() => handleClick('0')}>0</button>
    <button on:click={() => handleClick('.')}>.</button>
    <button on:click={() => handleClick('=')}>=</button>
    <button on:click={() => handleClick('+')}>+</button>
    <button on:click={() => handleClick('C')}>C</button>
  </div>
  <div class="statistics">
    {#each Object.keys(buttonCounts) as buttonValue}
      <div>{buttonValue}: {buttonCounts[buttonValue]}</div>
    {/each}
  </div>
</div>

<style>
  .calculator {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .display {
    font-size: 32px;
    margin: 10px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 10px;
  }

  .buttons button {
    font-size: 24px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .buttons button:hover {
    background-color: #e0e0e0;
  }

  .buttons button:active {
    background-color: #d0d0d0;
  }

  .statistics {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
