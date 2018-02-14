function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');

btn1.create();


//////////////////////////////////////// BONUS


function Phone(brand, price, color, size) {
	this.brand = brand || 'Brand';
	this.price = price || 0;
	this.color = color || 'Color';
	this.size = size || 0;

}

Phone.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.brand + " " + this.color);
		this.$element.click(function() {
			alert(self.brand + " " + self.price + " " + self.color + " " + self.size);
		});
		$('body').append(this.$element);
	}
};

var btn2 = new Phone("Apple", 2250, "silver","5");
var btn3 = new Phone(); // for default values

btn2.create();
btn3.create();
