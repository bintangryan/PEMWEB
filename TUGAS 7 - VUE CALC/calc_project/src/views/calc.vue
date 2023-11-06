<template>
    <div class="calc">
      <h1>This is calculator page</h1>
    </div>
  </template>

<template>
    <div id="calculator">
      <input type="text" v-model="displayValue" readonly>
      <button @click="addToDisplay('7')">7</button>
      <button @click="addToDisplay('8')">8</button>
      <button @click="addToDisplay('9')">9</button>
      <button @click="addToDisplay('+')">+</button>
      <br>
      <button @click="addToDisplay('4')">4</button>
      <button @click="addToDisplay('5')">5</button>
      <button @click="addToDisplay('6')">6</button>
      <button @click="addToDisplay('-')">-</button>
      <br>
      <button @click="addToDisplay('1')">1</button>
      <button @click="addToDisplay('2')">2</button>
      <button @click="addToDisplay('3')">3</button>
      <button @click="addToDisplay('*')">*</button>
      <br>
      <button @click="addToDisplay('0')">0</button>
      <button @click="clearDisplay">C</button>
      <button @click="calculate">=</button>
      <button @click="addToDisplay('/')">/</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        displayValue: ''
      };
    },
    methods: {
      addToDisplay(value) {
        this.displayValue += value;
      },
      clearDisplay() {
        this.displayValue = '';
      },
      calculate() {
        try {
          this.displayValue = eval(this.displayValue);
        } catch (error) {
          this.displayValue = 'Error';
        }
      }
    }
  };
  </script>