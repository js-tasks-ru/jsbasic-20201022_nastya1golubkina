let calculator = {
  // ваш код

  read() {
    this.a = +prompt('Введите а:', 0);
    this.b = +prompt('Введите b:', 0);
  },
  
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
