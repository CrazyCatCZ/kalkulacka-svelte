<script>
	import { construct_svelte_component } from "svelte/internal";


  let displayValue = '0';
  let counts = {};

  async function updateCounts(button) {
    const response = await fetch('http://localhost:3000/clicks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        button
      })
    });

    if (response.ok) {
      const newCounts = await response.json();
      console.log(newCounts)
      counts = newCounts;
    }
  }

  async function handleClick(buttonValue) {
    updateCounts(buttonValue)
    
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
  <div class="statistic">
    <table>
      <thead>
        <tr>
          <th>Tlačítko</th>
          <th>Počet stisknutí</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.keys(counts) as button}
          <tr>
            <td>{button}</td>
            <td>{counts[button]}</td>
          </tr>
        {/each}
      </tbody>
    </table>
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

  .statistic {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
