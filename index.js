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

    Array.prototype.mySort = function (compareFn) {

        return mergeSort(this);

        function mergeSort(array) {
            if (array.length === 1) {
                return array;
            }

            const middle = Math.floor(array.length / 2);
            const left = array.slice(0, middle);
            const right = array.slice(middle);

            return merge(
                mergeSort(left),
                mergeSort(right)
            )
        }

        function merge(left, right) {
            let result = [];
            let indexLeft = 0;
            let indexRight = 0;

            while (indexLeft < left.length && indexRight < right.length) {
                let _left = left[indexLeft];
                let _right = right[indexRight];

                if (compareFn)
                    compareFn = composeCompareFn(compareFn(left, right));
                compareFn = (l, r) => l < r;

                if (compareFn(_left, _right)) {
                    result.push(left[indexLeft]);
                    indexLeft++
                } else {
                    result.push(right[indexRight]);
                    indexRight++
                }
            }
            return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
        }

        function composeCompareFn(compareResult) {
            if (Math.sign(compareResult) === -1)
                return false;
            if (Math.sign(compareResult) === 1)
                return true;
            if (compareResult === 0)
                return false;
        }
    };

    const array = [11, 1, 2, 3, 4, 6, 8, 5, 10, 1000];
    const stringArray = ['apple', 'zebra', 'banana'];
    const testArray = [22, 4, 5, 29, 40, 2, 46, 33, 48, 11, 42, 1, 12, 25, 10, 13, 21, 39, 45, 38, 8, 23, 50, 27, 20,
        14, 26, 16, 31, 34, 3, 19, 7, 32, 41, 6, 28, 30, 44, 18, 24, 47, 43, 49, 15, 35, 36, 9, 37, 17];
    console.log(array.myForEach((el) => console.log(el * 2)));
    console.log(array.myMap((el) => el * 2 ));
    console.log(array.mySort());
    console.log(stringArray.mySort());
    console.log(testArray.mySort());

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
