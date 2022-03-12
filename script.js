
var app = new Vue({
    el: '#root',
    data: {
        array: [],
        max: 0,
        timer: null,
        n: 55,
        i: -2,
        j: -2,
        delay: 10,
        isRunning: false,
        isSorted: false
    },
    methods: {
        getArray() {
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
            // BubbleSort Algorithm
            for (this.i = 0; this.i < this.array.length && this.isRunning; this.i += 1) {
                for (this.j = 0; this.j < this.array.length - this.i - 1 && this.isRunning; this.j += 1) {
        
                    // To wait for .1 sec
                    await new Promise((resolve) =>
                        setTimeout(() => {
                            resolve();
                        }, this.delay)
                    );
                    
                    let value1 = this.array[this.j];
                    let value2 = this.array[this.j+1];
        
                    // To compare value of two blocks
                    if (value1 > value2) {
                        await new Promise((resolve) => {
                                // For waiting for .25 sec
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
                this.bubbleSort();
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