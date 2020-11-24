# NotePad

A simple note-taking application that perform CRUD actions. Please be noted that this is only a front-end application.

The following frameworks are used to build this application.

```
React@16.8
material-ui/core
material-ui/icons
```

## React@16.8

Introducing **useState**, it is a hook that allow us to have a state variable in functional component. But it allows us to only declare one state variable at a time.

When declaring a state, we can write for eg.

```
import React, { useState } from 'react';

const [isOn, setOn] = useState(0);

console.log(ísOn); // 0

```

## Installation 

Install [node](https://nodejs.org/en/) 

Use the npm package manager to install packages.

```bash
npm install
```

## Usage
Run the NotePad

```bash
# the react app will run on port 3000
npm run start
```

It will redirect you to http://localhost:3000/

Writing a note in the textfield and hit the add button! 