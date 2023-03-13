<script>
  let displayValue = "0";

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
        break;
    }
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

<style>
  .calculator {
    margin: auto;
    margin-top: 5em;
    width: 50%;
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
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    font-size: 1.5rem;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #ccc;
  }

  button:active {
    transform: scale(0.98);
  }
</style>
