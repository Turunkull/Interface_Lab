<template>
  <div class="standard-calculator">
    <div class="display">
      <div class="io-display">
        <div class="result">
          <span class="calcResult" v-if="calcResult"> {{ currentValue }}</span>
        </div>
        <div class="operation">
          <input
            type="text"
            v-model="displayInput"
            name="operation"
            disabled
            @keypress="onlyNumbers">
        </div>
      </div>
      <div class="options"></div>
    </div>
    <div class="standard-calculator-mode">
      <div class="radioButton">
        <input id="regular" type="radio" checked name="standard-calculator" value="0" @click="displayCalcType('regular')">
        <label for="regular">Basic</label>
      </div>
      <div class="radioButton">
        <input id="advanced" type="radio" name="standard-calculator" value="1" @click="displayCalcType('advanced')">
        <label for="advanced">Advanced</label>
      </div>
    </div>
    <div class="standard">
      <div class="scientific">
        <ul>
          <li
            v-for="button in scientific"
            :key="button.id"><button @click="methodTo(button.function, button.value)"><span v-html="button.value">{{ button.value }}</span></button></li>
        </ul>
      </div>
      <div class="regular">
        <ul>
          <li
            v-for="button in regular"
            :key="button.id"><button @click="methodTo(button.function, button.value)"><span>{{ button.value }}</span></button></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Standard',
  componentName: 'Standard',
  data() {
    return {
      displayInput: '',
      previousValue: null,
      currentValue: '',
      operator: null,
      operatorClicked: false,
      calcResult: false,
      calcMode: 'deg',
      scientific: [
        {
          id: 1,
          value: 'Radian',
          function: 'mode'
        },
        {
          id: 2,
          value: 'x<sup>2</sup>',
          function: 'square'
        },
        {
          id: 3,
          value: 'x<sup>3</sup>',
          function: 'cube'
        },
        {
          id: 4,
          value: 'x<sup>y</sup>',
          function: 'nthPower'
        },
        {
          id: 5,
          value: 'AC',
          function: 'reset'
        },
        {
          id: 6,
          value: '10<sup>x</sup>',
          function: 'decimalPower'
        },
        {
          id: 7,
          value: 'INV',
          function: 'inverse'
        },
        {
          id: 8,
          value: '<sup>2</sup>√x',
          function: 'square-root'
        },
        {
          id: 9,
          value: '<sup>3</sup>√x',
          function: 'cube-root'
        },
        {
          id: 10,
          value: '<sup>y</sup>√x',
          function: 'nthRoot'
        },
        {
          id: 11,
          value: 'x!',
          function: 'factorial'
        },
        {
          id: 12,
          value: 'e<sup>x</sup>',
          function: 'exponentialToNthPower'
        },
        {
          id: 13,
          value: 'ln',
          function: 'logE'
        },
        {
          id: 14,
          value: 'log<sub>10</sub>',
          function: 'log10'
        },
        {
          id: 15,
          value: 'e',
          function: 'E'
        },
        {
          id: 16,
          value: '(',
          function: 'braces'
        },
        {
          id: 17,
          value: ')',
          function: 'braces'
        },
        {
          id: 18,
          value: 'sin',
          function: 'sine'
        },
        {
          id: 19,
          value: 'cos',
          function: 'cosine'
        },
        {
          id: 20,
          value: 'tan',
          function: 'tangent'
        },
        {
          id: 21,
          value: 'sinh',
          function: 'sineHyp'
        },
        {
          id: 22,
          value: 'cosh',
          function: 'cosineHyp'
        },
        {
          id: 23,
          value: 'tanh',
          function: 'tangentHyp'
        },
        {
          id: 24,
          value: 'sin<sup>-1</sup>',
          function: 'arcSine'
        },
        {
          id: 25,
          value: 'cos<sup>-1</sup>',
          function: 'arcCosine'
        },
        {
          id: 26,
          value: 'tan<sup>-1</sup>',
          function: 'arcTangent'
        },
        {
          id: 27,
          value: 'sinh<sup>-1</sup>',
          function: 'arcSineHype'
        },
        {
          id: 28,
          value: 'cosh<sup>-1</sup>',
          function: 'arcCosineHyp'
        },
        {
          id: 29,
          value: 'tanh<sup>-1</sup>',
          function: 'arcTangentHyp'
        },
      ],
      regular: [
        {
          id: 19,
          value: 'Del',
          function: 'delete'
        },
        {
          id: 18,
          value: '+/-',
          function: 'sign'
        },
        {
          id: 17,
          value: '%',
          function: 'percent'
        },
        {
          id: 16,
          value: '/',
          function: 'divide'
        },
        {
          id: 7,
          value: 7,
          function: 'append'
        },
        {
          id: 8,
          value: 8,
          function: 'append'
        },
        {
          id: 9,
          value: 9,
          function: 'append'
        },
        {
          id: 15,
          value: 'x',
          function: 'multiply'
        },
        {
          id: 4,
          value: 4,
          function: 'append'
        },
        {
          id: 5,
          value: 5,
          function: 'append'
        },
        {
          id: 6,
          value: 6,
          function: 'append'
        },
        {
          id: 14,
          value: '+',
          function: 'add'
        },
        {
          id: 1,
          value: 1,
          function: 'append'
        },
        {
          id: 2,
          value: 2,
          function: 'append'
        },
        {
          id: 3,
          value: 3,
          function: 'append'
        },
        {
          id: 13,
          value: '-',
          function: 'subtract'
        },
        {
          id: 10,
          value: '0',
          function: 'append'
        },
        {
          id: 11,
          value: '.',
          function: 'decimal'
        },
        {
          id: 12,
          value: '=',
          function: 'equals'
        },
      ],
      standardMobile: 'regular',
    }
  },
  computed:  {},
  methods: {
    onlyNumbers(e) {
      if (e.shiftKey || e.which >= 58 || e.key === 32 || e.key === 13) {
        e.preventDefault();
      }
    },

    displayCalcType(value) {
      if (value === 'advanced') {
        document.querySelector('.regular').style.display = 'none';
        document.querySelector('.scientific').style.display = 'block';
      } else {
        document.querySelector('.regular').style.display = '';
        document.querySelector('.scientific').style.display = 'none';
      }
    },

    calcDeg() {
      if (this.calcMode === 'deg') {
         return (parseFloat(this.currentValue) * Math.PI/180);
      }
      return parseFloat(this.currentValue);
    },

    inverseTrig(value) {
      if (this.calcMode === 'deg') {
        return (value * 180/Math.PI);
      }
      return value;
    },

    methodTo(buttonFunction,buttonValue) {
      switch (buttonFunction) {
        case 'delete':
          return this.delete();
        case 'reset':
          return this.reset();
        case 'sign':
          return this.sign();
        case 'percent':
          return this.calcPercent();
        case 'divide':
          return this.divide(buttonValue);
        case 'multiply':
          return this.multiply(buttonValue);
        case 'add':
          return this.add(buttonValue);
        case 'subtract':
          return this.subtract(buttonValue);
        case 'equals':
          return this.equals();
        case 'append':
          return this.appendNumber(buttonValue);
        case 'decimal':
          return this.decimal();
        case 'mode':
          return this.mode();
        case 'square':
          return this.squareValue();
        case 'cube':
          return this.cubeValue();
        case 'nthPower':
          return this.nthPower();
        case 'decimalPower':
          return this.decimalPower();
        case 'inverse':
          return this.inverse();
        case 'square-root':
          return this.squareRoot();
        case 'cube-root':
          return this.cubeRoot();
        case 'nthRoot':
          return this.nthRoot();
        case 'factorial':
          return this.calcFactorial();
        case 'exponentialToNthPower':
          return this.exponentialNthPower();
        case 'logE':
          return this.logE();
        case 'log10':
          return this.log10();
        case 'E':
          return this.E();
        case 'braces':
          return this.braces(buttonValue);
        case 'sine':
          return this.sine();
        case 'cosine':
          return this.cosine();
        case 'tangent':
          return this.tangent();
        case 'sineHyp':
          return this.sineHyp();
        case 'cosineHyp':
          return this.cosineHyp();
        case 'tangentHyp':
          return this.tangentHyp();
        case 'arcSine':
          return this.arcSine();
        case 'arcCosine':
          return this.arcCosine();
        case 'arcTangent':
          return this.arcTangent();
        case 'arcSineHyp':
          return this.arcSineHyp();
        case 'arcCosineHyp':
          return this.arcCosineHyp();
        case 'arcTangentHyp':
          return this.arcTangentHyp();
        default:
          return this.currentValue = '';
      }
    },

    reset() {
      this.currentValue = '';
      this.displayInput = '';
    },

    delete() {
      this.currentValue = this.currentValue.slice(0,-1);
      this.displayInput = this.displayInput.slice(0,-1);
    },

    sign() {
      this.currentValue = this.currentValue.charAt(0) === '-' ? this.currentValue.slice(1) : `-${this.currentValue}`;
      this.displayInput = this.displayInput.charAt(0) === '-' ? this.displayInput.slice(1) : `-${this.displayInput}`;
    },

    calcPercent() {
      this.currentValue = `${parseFloat(this.currentValue) / 100}`;
      this.calcResult = true;
    },

    setPrevious() {
      this.operatorClicked = true;
      if (this.previousValue !== null) {
        this.currentValue = `${this.operator(parseFloat(this.previousValue), parseFloat(this.currentValue))}`;
      }
      this.previousValue = this.currentValue;
      this.calcResult = false;
    },

    divide(value) {
      this.setPrevious();
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a / b;
    },

    multiply(value) {
      this.setPrevious();
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a * b;
    },

    add(value) {
      this.setPrevious();
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a + b;
    },

    subtract(value) {
      this.setPrevious();
      this.displayInput = `${this.displayInput}${value}`;
      this.operator = (a,b) => a - b;
    },

    equals() {
      this.currentValue = `${this.operator(parseFloat(this.previousValue), parseFloat(this.currentValue))}`;
      this.previousValue = null;
      this.displayInput = this.currentValue;
      this.calcResult = true;
    },

    appendNumber(value) {
      if (this.operatorClicked) {
        this.currentValue = '';
        this.operatorClicked = false;
      }
      this.displayInput = `${this.displayInput}${value}`;
      this.currentValue = `${this.currentValue}${value}`;
      this.calcResult = false;
    },

    decimal() {
      if (this.currentValue.indexOf('.') === -1) {
        this.displayInput = `${this.displayInput}.`;
        this.currentValue = `${this.currentValue}.`;
      }
    },

    mode() {
      if (this.scientific[0].value === 'Radian') {
        document.querySelector('.mode').innerHTML = 'RAD';
        this.scientific[0].value = 'Degree';
        this.calcMode = 'rad';
      } else {
        document.querySelector('.mode').innerHTML = 'DEG';
        this.scientific[0].value = 'Radian';
        this.calcMode = 'deg';
      }
    },

    squareValue() {
      this.currentValue = `${Math.pow(parseFloat(this.currentValue),2)}`;
      this.calcResult = true;
    },

    cubeValue() {
      this.currentValue = `${Math.pow(parseFloat(this.currentValue),3)}`;
      this.calcResult = true;
    },

    nthPower() {
      this.displayInput = `${this.displayInput}^`;
      this.operator = (a,b) => Math.pow(a,b);
      this.setPrevious();
    },

    decimalPower() {
      this.currentValue = `${Math.pow(10,parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    inverse() {
      this.currentValue = `${1 / parseFloat(this.currentValue)}`;
      this.calcResult = true;
    },

    squareRoot() {
      this.currentValue = `${Math.sqrt(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    cubeRoot() {
      this.currentValue = `${Math.cbrt(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    nthRoot() {
      this.displayInput = `${this.displayInput}^1/`;
      this.operator = (a,b) => parseFloat(Math.pow(a, 1/b)).toFixed(3);
      this.setPrevious();
    },

    calcFactorial() {
      let factorial = 1;
      for (let i = 1; i <= parseFloat(this.currentValue); i += 1) {
        factorial = factorial * i;
      }
      this.currentValue = factorial;
      this.calcResult = true;
    },

    exponentialNthPower() {
      const e = 2.71828;
      this.currentValue = `${Math.pow(e, parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    logE() {
      this.currentValue = `${Math.log(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    log10() {
      this.currentValue = `${Math.log10(parseFloat(this.currentValue))}`;
      this.calcResult = true;
    },

    E() {
      this.currentValue = 2.71828;
      this.displayInput = 2.71828;
      this.calcResult = true;
    },

    braces(value) {
      this.displayInput = `${this.displayInput}${value}`;
    },

    sine() {
      this.currentValue = Math.sin(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    cosine() {
      this.currentValue = Math.cos(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    tangent() {
      this.currentValue = Math.tan(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    sineHyp() {
      this.currentValue = Math.sinh(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    cosineHyp() {
      this.currentValue = Math.cosh(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    tangentHyp() {
      this.currentValue = Math.tanh(this.calcDeg()).toFixed(4);
      this.calcResult = true;
    },

    arcSine() {
      this.currentValue = this.inverseTrig(Math.asin(parseFloat(this.currentValue))).toFixed(4);
      this.calcResult = true;
    },

    arcCosine() {
      this.currentValue = this.inverseTrig(Math.acos(parseFloat(this.currentValue))).toFixed(4);
      this.calcResult = true;
    },

    arcTangent() {
      this.currentValue = this.inverseTrig(Math.atan(parseFloat(this.currentValue))).toFixed(4);
      this.calcResult = true;
    },

    arcSineHyp() {
      this.currentValue = this.inverseTrig(Math.asinh(parseFloat(this.currentValue))).toFixed(4);
      this.calcResult = true;
    },

    arcCosineHyp() {
      this.currentValue = this.inverseTrig(Math.acosh(parseFloat(this.currentValue))).toFixed(4)
      this.calcResult = true;
    },

    arcTangentHyp() {
      this.currentValue = this.inverseTrig(Math.atanh(parseFloat(this.currentValue))).toFixed(4)
      this.calcResult = true;
    }
  }
}
</script>

<style scoped>

</style>
