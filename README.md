# songsterr-api-node

![npm bundle size](https://img.shields.io/bundlephobia/min/songsterr-api-node)
![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/breeku/songsterr-api-node)
![npm](https://img.shields.io/npm/dm/songsterr-api-node)
![NPM](https://img.shields.io/npm/l/songsterr-api-node?color=brightgreen)

Unoffical module to fetch tabs from Songsterr's API.

## Installation

`npm i songsterr-api-node`

## Usage

```
const { songsterrSearch } = require("songsterr-api-node")

const fetch = async string => {
    const results = await songsterrSearch(string)
    console.log('Tabs')
    console.log(results)
}

fetch('track or artist')
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
