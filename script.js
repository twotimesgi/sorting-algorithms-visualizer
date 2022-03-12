
var app = new Vue({
    el: '#root',
    data: {
        array: [],
        max: 0,
        timer: null,
        n: 30,
        i: -2,
        j: -2,
        delay: 100,
        isRunning: false,
        isSorted: false,
        sortingAlgorithm: "0",
        iterations: 0
    },
    methods: {
        getArray() {
            this.iterations = 0;
            this.isRunning = false;
            this.i = -2;
            this.j = -2;
            this.max = 0;
            this.array = [];
            for (this.i = 0; this.i < this.n; this.i++) {
                let rand = Math.floor(Math.random() * this.n + 1);
                if (rand > this.max) this.max = rand;
                this.array.push(rand);
            }
        },
        async bubbleSort() {
            this.isRunning = true;
            for (this.i = 0; this.i < this.array.length && this.isRunning; this.i += 1) {
                for (this.j = 0; this.j < this.array.length - this.i - 1 && this.isRunning; this.j += 1) {
                    this.iterations++;
                    // wait here
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, this.delay)
                    );

                    // compare [j] and [j+1]
                    if (this.array[this.j] > this.array[this.j+1]) {
                        await new Promise((resolve) => {
                                // wait here
                                setTimeout(() => {
                                    let temp = this.array[this.j];
                                    this.array[this.j]= this.array[this.j+1];
                                    this.array[this.j+1] = temp;
                                    this.$forceUpdate();
                                    resolve();
                                }, this.delay);
                        });
                    }
                }
            }
        },
        startSort(){
            if(!this.isRunning){
                if(this.sortingAlgorithm == "0"){
                    this.bubbleSort();
                }
            }
        },
        stopSort(){
            this.isRunning = false;
            this.getArray();
        }
    },
    created() {
        this.getArray();
        }
    });