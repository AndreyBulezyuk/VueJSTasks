<template>
  <div id="CustomizeDonut">
    <h1 v-text="stepConfig[step].title"></h1>
      <div v-if="step == 1">
            <select v-model="userInput.donutId">
                <option v-for="donut in donuts" :value="donut.id" :key="donut.id" v-text="donut.name"/>
            </select>
      </div>
      <div v-else-if="step == 2">
            <select v-model="userInput.batterId">
                <option v-for="batter in batters" :value="batter.id" :key="batter.id" v-text="batter.type"/>
            </select>
      </div>
      <div v-else-if="step == 3">
            <select v-model="userInput.toppingId">
                <option v-for="topping in toppings" :value="topping.id" :key="topping.id" v-text="topping.type"/>
            </select>
      </div>
      <div v-else-if="step == 4">
            Donut Id: {{userInput.donutId}}<br>
            Batter Id: {{userInput.batterId}}<br>
            Topping Id: {{userInput.toppingId}}<br>
      </div>
      <button @click="stepConfig[step].nextStep" v-text="stepConfig[step].button"/>
  </div>
</template>

<script>
    export default {
        name: "CustomizeDonut",
        data() {
            return {
                donuts: [{
                        "id": "0001",
                        "type": "donut",
                        "name": "Cake",
                        "ppu": 0.55,
                        "batters": {
                            "batter": [{
                                    "id": "1001",
                                    "type": "Regular"
                                },
                                {
                                    "id": "1002",
                                    "type": "Chocolate"
                                },
                                {
                                    "id": "1003",
                                    "type": "Blueberry"
                                },
                                {
                                    "id": "1004",
                                    "type": "Devil's Food"
                                }
                            ]
                        },
                        "topping": [{
                                "id": "5001",
                                "type": "None"
                            },
                            {
                                "id": "5002",
                                "type": "Glazed"
                            },
                            {
                                "id": "5005",
                                "type": "Sugar"
                            },
                            {
                                "id": "5007",
                                "type": "Powdered Sugar"
                            },
                            {
                                "id": "5006",
                                "type": "Chocolate with Sprinkles"
                            },
                            {
                                "id": "5003",
                                "type": "Chocolate"
                            },
                            {
                                "id": "5004",
                                "type": "Maple"
                            }
                        ]
                    },
                    {
                        "id": "0002",
                        "type": "donut",
                        "name": "Raised",
                        "ppu": 0.55,
                        "batters": {
                            "batter": [{
                                "id": "1001",
                                "type": "Regular"
                            }]
                        },
                        "topping": [{
                                "id": "5001",
                                "type": "None"
                            },
                            {
                                "id": "5002",
                                "type": "Glazed"
                            },
                            {
                                "id": "5005",
                                "type": "Sugar"
                            },
                            {
                                "id": "5003",
                                "type": "Chocolate"
                            },
                            {
                                "id": "5004",
                                "type": "Maple"
                            }
                        ]
                    },
                    {
                        "id": "0003",
                        "type": "donut",
                        "name": "Old Fashioned",
                        "ppu": 0.55,
                        "batters": {
                            "batter": [{
                                    "id": "1001",
                                    "type": "Regular"
                                },
                                {
                                    "id": "1002",
                                    "type": "Chocolate"
                                }
                            ]
                        },
                        "topping": [{
                                "id": "5001",
                                "type": "None"
                            },
                            {
                                "id": "5002",
                                "type": "Glazed"
                            },
                            {
                                "id": "5003",
                                "type": "Chocolate"
                            },
                            {
                                "id": "5004",
                                "type": "Maple"
                            }
                        ]
                    }
                ],
                step: 1, // We start with step 1
                stepConfig: {
                    1: {
                        title: "Donut Type",
                        button: `Go to Step 2`,
                        nextStep: () => {this.step = 2;}
                    },
                    2: {
                        title: "Batter Type",
                        button: `Go to Step 3`,
                        nextStep: () => {this.step = 3;}
                    },
                    3: {
                        title: "Topping Type",
                        button: `Final Step`,
                        nextStep: () => {this.step = 4;}
                    },
                    4: {
                        title: "Your Donut",
                        button: `Send order and Start over`,
                        nextStep: () => {this.step = 1;}
                    },
                },
                userInput: {
                    donutId: 0,
                    batterId: 0,
                    toppingId: 0
                }
            }
        },
        computed: {
            batters: {
                get() {
                    const currentDonut = this.donuts.filter(item => item.id == this.userInput.donutId)
                    return currentDonut[0].batters.batter
                }
            },
            toppings: {
                get() {
                    const currentDonut = this.donuts.filter(item => item.id == this.userInput.donutId)
                    return currentDonut[0].topping
                }
            }
        }
    }
</script>

<style>
button, option, select {
    margin: 20px 20px 20px 20px;
    font-size: 30px;
    color: rgb(255, 255, 255);
    background: rgba(255, 106, 0, 0.972)
}
</style>