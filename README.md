# songsterr-api-node

Module to fetch tabs from songsterr's api v2.

## Installation

`npm i songsterr-api-node`

## Usage

```
const { songsterrSearch } = require("songsterr-api-node")

const fetch = async () => {
    const results = await songsterrSearch(search)
    console.log('Tabs')
    console.log(results)
}

fetch()
```

## Why?

This module also transform's the original result's tuning array to one that makes sense.

### Before

```
console.log(results[0].tracks[0].tuning)
[ 64, 59, 55, 50, 45, 40 ]
```

### After

```
console.log(results[0].tracks[0].tuning)
{
    octave: 'E2 A2 D3 G3 B3 E4',
    note: 'e A D G B E',
    name: 'Standard tuning'
}
```
