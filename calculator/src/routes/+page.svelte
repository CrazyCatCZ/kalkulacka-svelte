<script>
  let displayValue = "0";
  let buttonCounts = {};

  function handleClick(e) {
    const buttonValue = e.target.textContent;

    switch (buttonValue) {
      case "C":
        displayValue = "0";
        break;
      case "=":
        displayValue = eval(displayValue);
        break;
      default:
        if (displayValue === "0") {
          displayValue = buttonValue;
        } else {
          displayValue += buttonValue;
        }
        if (!buttonCounts[buttonValue]) {
          buttonCounts[buttonValue] = 1;
        } else {
          buttonCounts[buttonValue]++;
        }
        break;
      }

     buttonCounts = {...buttonCounts}; // trigger reactivity
  }
</script>

<div class="calculator">
  <div class="display">{displayValue}</div>
  <button on:click={handleClick}>7</button>
  <button on:click={handleClick}>8</button>
  <button on:click={handleClick}>9</button>
  <button on:click={handleClick}>/</button>
  <button on:click={handleClick}>4</button>
  <button on:click={handleClick}>5</button>
  <button on:click={handleClick}>6</button>
  <button on:click={handleClick}>*</button>
  <button on:click={handleClick}>1</button>
  <button on:click={handleClick}>2</button>
  <button on:click={handleClick}>3</button>
  <button on:click={handleClick}>-</button>
  <button on:click={handleClick}>+</button>
  <button on:click={handleClick}>0</button>
  <button on:click={handleClick}>.</button>
  <button on:click={handleClick}>=</button>
  <button on:click={handleClick}>C</button>

</div>
<ul class="button-counts">
  {#each Object.keys(buttonCounts) as button}
    <li>{button}: {buttonCounts[button]}</li>
  {/each}
</ul>

<style>
  .calculator, .button-counts {
    width: 50%;
    margin: auto;

  }
 
.calculator {
  margin-top: 5em;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
  background-color: #eee;
  border-radius: 5px;
}

.display {
  grid-column: 1 / -1;
  text-align: right;
  font-size: 2rem;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  font-size: 1.5rem;
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #ddd;
}

button:active {
  background-color: #ccc;
}

.button-counts {
  margin-top: 10px;
  padding: 0;
  list-style: none;
}

.button-counts li {
  margin: 5px 0;
  font-size: 1rem;
} 
</style>
