<script>
  let numbers = $state([]);
  let operators = $state([]);
  let numberText = $state("0");

  // $inspect(numbers, operators);

  function handleOperator(event) {
    numbers.push(parseFloat(numberText.replaceAll(",", "")));
    operators.push(event.target.textContent)
    numberText = "0"
  }

  function floatNumber() {
    numberText += "."
  }

  function handleNumber(event) {
    if(numberText.length == 1 && numberText[0] == "0") {
      numberText = event.target.textContent;
    } else if (numberText[numberText.length] == ".") {
      numberText += event.target.textContent;
    } else {
      let stringNumber = (numberText + event.target.textContent).replaceAll(",", "");
      let formattedNumber = new Intl.NumberFormat().format(parseFloat(stringNumber))
      numberText = formattedNumber;
    }
  }

  function deleteNumber() {
    if(numberText.length == 1 && numberText[0] == "0") {
      return;
    } else if(numberText.length == 1 && numberText[0] != "0") {
      numberText = "0"
    } else {
      let stringNumber = numberText.slice(0, numberText.length -1).replaceAll(",", "");
      let formattedNumber = new Intl.NumberFormat().format(parseFloat(stringNumber))
      numberText = formattedNumber;
    }
  }

  function reset() {
    numbers = [];
    operators = [];
    numberText = "0";
  }

  function calculate() {
    numbers.push(parseFloat(numberText.replaceAll(",", "")));

    const result = numbers.slice(1).reduce((acc, num, index) => {
      const operator = operators[index];
      switch (operator) {
          case '+':
              return acc + num;
          case '-':
              return acc - num;
          case 'x':
              return acc * num;
          case '/':
              return acc / num;
          default:
              throw new Error(`Unknown operator: ${operator}`);
      }
    }, numbers[0]);

    reset()
    numberText = new Intl.NumberFormat().format(result.toFixed(2))
  }
</script>

<section class="calc">
  <h3 class="calc__result">{numberText}</h3>

  <div class="calc__operator">
    <!-- First Row -->
    <button class="btn btn-primary btn-number" onclick={handleNumber}>7</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>8</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>9</button>
    <button class="btn btn-secondary" onclick={deleteNumber}>DEL</button>

    <!-- Second Row -->
    <button class="btn btn-primary btn-number" onclick={handleNumber}>4</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>5</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>6</button>
    <button class="btn btn-primary btn-operator" onclick={handleOperator}>+</button>

    <!-- Third Row -->
    <button class="btn btn-primary btn-number" onclick={handleNumber}>1</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>2</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>3</button>
    <button class="btn btn-primary btn-operator" onclick={handleOperator}>-</button>

    <!-- Fourth Row -->
    <button class="btn btn-primary btn-operator" onclick={floatNumber}>.</button>
    <button class="btn btn-primary btn-number" onclick={handleNumber}>0</button>
    <button class="btn btn-primary btn-operator" onclick={handleOperator}>/</button>
    <button class="btn btn-primary btn-operator" onclick={handleOperator}>x</button>

    <!-- Last Row -->
    <button class="btn btn-wide btn-secondary" onclick={reset}>RESET</button>
    <button class="btn btn-wide btn-equal" onclick={calculate}>=</button>
  </div>
</section>

<style lang="scss">
  .calc {

    &__result {
      display: block;
      width: 100%;
      padding: 0.938rem 1.25rem;
      margin-bottom: 1.625rem;

      text-align: end;
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--title-color);

      border-radius: 0.625rem;
      background-color: var(--screen-bg);
      box-shadow: 0 0.188rem 0.5rem 0 rgba(0, 0, 0, .3);

      @media (min-width: 47.25rem) {
        padding: 1.25rem 2rem;
        font-size: 3.5rem;
      }
    }

    &__operator {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 1.125rem 0.875rem;
      padding: 1.5rem;
      margin-bottom: 1rem;

      border-radius: 0.625rem;
      background-color: var(--keypad-bg);
      box-shadow: 0 0.188rem 0.5rem 0 rgba(0, 0, 0, .3);

      .btn-wide {
        grid-column: span 2;
      }

      @media (min-width: 47.25rem) {
        gap: 1.5rem 1.438rem;
        padding: 2rem;
      }
    }
  }
</style>