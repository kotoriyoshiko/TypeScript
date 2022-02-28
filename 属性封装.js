(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Object.defineProperty(Animal.prototype, "_name", {
            //暴露出读方法
            get: function () {
                return this.name;
            },
            //暴露出写方法
            set: function (value) {
                this.name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Animal;
    }());
    var cat = new Animal('like', 1);
    //写
    cat._name = 'little';
    //读
    console.log(cat._name);
})();
