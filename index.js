(function () {

    // Closures and private methods
    function SuperHero(name, superPower, city) {
        let _name = name;
        let _superPower = superPower;
        let _city = city;

        guard();

        return {
            getName() {
                return _name;
            },

            getSuperPower() {
                return _superPower;
            },

            getCity() {
                return _city;
            },

            setName(newName) {
                _name = newName;
            },

            setSuperPower(newSuperPower) {
                _superPower = newSuperPower;
            },

            setCity(newCity) {
                _city = newCity;
            }
        };

        function guard() {
            console.log(name + ' is guarding ' + city);
        }

    }

    let batMan = new SuperHero('Batman', 'No power', 'Gotham');
    batMan.superPower = 'Invincibility';
    console.log(batMan.getSuperPower());
    batMan.setSuperPower('Invincibility');
    console.log(batMan.getSuperPower());
    console.log(batMan);

    // Custom array functions
    Array.prototype.myForEach = function (callback) {
        for (let element of this) {
            callback(element);
        }
    };

    Array.prototype.myMap = function (callback) {
        let newArray = [];

        for (let element of this) {
            newArray.push(callback(element));
        }

        return newArray;
    };

    Array.prototype.mySort = function () {

        return sort(this);

        function sort(array) {
            const arrayLength = array.length;

            for (let i = 0; i < arrayLength; i++) {
                let left = array[i];
                let right = array[i + 1];
                if (left > right) {
                    array[i] = right;
                    array[i + 1] = left;
                }
            }
            return array;
        }

    };

    const array = [11, 1, 2, 3, 4, 6, 8, 5, 10, 1000];
    const stringArray = ['apple', 'zebra', 'banana'];
    console.log(array.myForEach((el) => console.log(el * 2)));
    console.log(array.myMap((el) => el * 2 ));
    console.log(array.mySort());
    console.log(stringArray.mySort());

    // Circle
    const circle = document.getElementById('circle');

    circle.addEventListener('mouseenter', function () {
        let maxX = window.innerWidth - this.clientWidth;
        let maxY = window.innerHeight - this.clientHeight;
        this.style.left = getRandomInt(0, maxX) + 'px';
        this.style.top = getRandomInt(0, maxY) + 'px';
        this.style.backgroundColor = getRandomColor();
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

})();
