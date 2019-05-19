# JPL HORIZONS Node.js Client

##Usage

Running the below command in your terminal will give you state vectors for the Sun and Uranus system between 2001-01-01 and 2001-01-02 and save them to a json file called sunUranusSystem.

```
  fetch-bodies --bodies Sun  Uranus --center Sun --units AU-D --step "1 d" --start 2001-01-01 --stop 2001-01-02 --save sunUranusSystem
```

The output for this query looks as follows:   

```
  [  
    [  
        {  
          "name":"Sun (10)",
          "date":"A.D. 2001-Jan-01 00:00:00.0000",
          "x":0,
          "y":0,
          "z":0,
          "vx":0,
          "vy":0,
          "vz":0
        },
        {  
          "name":"Sun (10)",
          "date":"A.D. 2001-Jan-02 00:00:00.0000",
          "x":0,
          "y":0,
          "z":0,
          "vx":0,
          "vy":0,
          "vz":0
        }
    ],
    [  
        {  
          "name":"Uranus (799)",
          "date":"A.D. 2001-Jan-01 00:00:00.0000",
          "x":15.37333859361431,
          "y":-12.72455315994613,
          "z":-0.2465764556735673,
          "vx":0.002471951210373022,
          "vy":0.002849962182880889,
          "vz":-0.00002140958914339345
        },
        {  
          "name":"Uranus (799)",
          "date":"A.D. 2001-Jan-02 00:00:00.0000",
          "x":15.37581022685618,
          "y":-12.72170297083339,
          "z":-0.2465979327045777,
          "vx":0.002471267458614458,
          "vy":0.002850429686759978,
          "vz":-0.00002151936487289544
        }
    ]
  ]
```

## Development

```
  npm start
```

This project uses husky and lint staged to make sure the code being commited passes all tests and make sure unformatted code does not get commited to the repository. 

## Build 

```
  npm run tsc
```

## Unit Tests

To run all unit tests, you can run the command below in your terminal. 

```
  npm test
```

## Credits

Credits go to the awesome people at JPL that made the [HORIZONS](https://ssd.jpl.nasa.gov/?horizons) system available to the public.

