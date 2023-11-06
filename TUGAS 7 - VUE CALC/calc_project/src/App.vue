<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <h1>Kalkulator</h1> <!-- Tambahkan teks Kalkulator di sini -->
        <div class="calc">
          <input type="text" v-model="displayValue" readonly>
          <div class="buttons">
            <div class="row">
              <button @click="addToDisplay('7')">7</button>
              <button @click="addToDisplay('8')">8</button>
              <button @click="addToDisplay('9')">9</button>
              <button @click="addToDisplay('+')">+</button>
            </div>
            <div class="row">
              <button @click="addToDisplay('4')">4</button>
              <button @click="addToDisplay('5')">5</button>
              <button @click="addToDisplay('6')">6</button>
              <button @click="addToDisplay('-')">-</button>
            </div>
            <div class="row">
              <button @click="addToDisplay('1')">1</button>
              <button @click="addToDisplay('2')">2</button>
              <button @click="addToDisplay('3')">3</button>
              <button @click="addToDisplay('*')">*</button>
            </div>
            <div class="row">
              <button @click="addToDisplay('0')">0</button>
              <button @click="clearDisplay">C</button>
              <button @click="calculate">=</button>
              <button @click="addToDisplay('/')">/</button>
            </div>
          </div>
        </div>
      </div>
    </header>
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

<style scoped>
/* Gaya styling yang sesuai untuk komponen kalkulator dapat ditambahkan di sini */

.calc {
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input {
  width: 100%;
  font-size: 18px;
  padding: 5px;
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48px;
  height: 48px;
  font-size: 20px;
  margin: 5px;
}
</style>
