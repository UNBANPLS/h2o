class liquid {
    constructor(liter){
        this.liter = liter;
    }
    cold(){
        console.log(this.liter + ' ' + 'литра холодной жидкости');
    }
}
const literL = new liquid('2');
console.log(literL);
console.log(literL.cold());

class water extends liquid {
    constructor(liter, O2, density){
        super(liter);
        this.O2 = O2;
        this.density = density;
    }
    oxygen() {
        console.log(this.O2 + '% ксилорода в воде');
    }
    plotnaya() {
        console.log(this.density  + 'г/см 3 ' + ' ' + '- это тяжелее нефти :3')
    }
}
const waterL = new water('2', '88,6', '1');
console.log(waterL);
console.log(waterL.oxygen());
console.log(waterL.plotnaya());

class oil extends water {
    constructor(liter, O2, density, hydrogen, temperature) {
        super(liter, O2, density);
        this.hydrogen = hydrogen;
        this.temperature = temperature;
    }
    hydra(){
        console.log('Содержание водорода в нефти составляет' + ' ' + this.hydrogen + '% таким образом суммарное содержание углерода и водорода в нефти может достигать 88-98%');
    }
    temp(){
        console.log('Начало кипения нефти' + ' ' + this.temperature + '°C');
    }
}
const moriarti = new oil('2', '88,6', '1', '11', '28°C');
console.log(moriarti);
console.log(moriarti.hydra());
console.log(moriarti.temp());


