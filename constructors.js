function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  console.log(this.owner + " loves " + this.name );
}

var markov = new Cat ("markov", "Ned");
markov.cuteStatement();

Cat.prototype.meow = function () {
  console.log("meow");
}

markov.meow = function () {
  console.log("meow!!");
}

markov.meow();

var gizmo = new Cat ("gizmo", "Ned");

gizmo.cuteStatement();
gizmo.meow();
