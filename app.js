slowMath.add(6, 2)
    .then((result) => {
        console.log(result);
        slowMath.multiply(result, 2)
            .then((result) => {
                console.log(result);
                slowMath.divide(result, 4)
                    .then((result) => {
                        console.log(result);
                        slowMath.subtract(3, result)
                            .then((result) => {
                                console.log(result);
                                slowMath.add(98, result)
                                    .then((result) => {
                                        console.log(result);
                                        slowMath.remainder(result, 2)
                                            .then((result) => {
                                                console.log(result);
                                                slowMath.multiply(result, 50)
                                                    .then((result) => {
                                                        console.log(result);
                                                        slowMath.divide(result, 40)
                                                            .then((result) => {
                                                                console.log(result);
                                                                slowMath.add(32, result)
                                                                    .then((result) => {
                                                                        console.log(result);
                                                                        setTimeout(() => {
                                                                            console.log(`The final result is ${result}.`)
                                                                        }, 3000)
                                                                    }).catch((error) => {
                                                                        console.log(error);
                                                                    })
                                                            })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })