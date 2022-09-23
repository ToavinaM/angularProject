var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
;
////////class fa tsy interface indray 
var Person = /** @class */ (function () {
    function Person(_nom, prenom) {
        this._nom = _nom;
        this.prenom = prenom;
    }
    Person.prototype.fullName = function () {
        // console.log(this.nom + this.prenom);
    };
    Object.defineProperty(Person.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person('   asdasdRanarilala', 'Toavina');
// person.
var nomw = person.nom;
console.log(nomw);
// person.fullName();
