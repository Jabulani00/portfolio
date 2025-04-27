const particlesConfig = {
    particles: {
        number: {
            value: 50
        },
        size: {
            value: 5
        },
        move: {
            speed: 5
        }
    },
    responsive: [
        {
            breakpoint: 768,
            options: {
                particles: {
                    number: {
                        value: 30
                    },
                    size: {
                        value: 3
                    },
                    move: {
                        speed: 3
                    }
                }
            }
        },
        {
            breakpoint: 480,
            options: {
                particles: {
                    number: {
                        value: 15
                    },
                    size: {
                        value: 2
                    },
                    move: {
                        speed: 2
                    }
                }
            }
        }
    ]
};