mreq
===
> Massive Request tester for Node.js

## NPM Package:
```sh
https://www.npmjs.com/package/mreq
```

## Install client with npm:
```sh
npm install mreq -g
```

## Install client with yarn:
```sh
yarn global add mreq
```

## Run with npx
```sh
npx mreq
```

## Usage:
```text
      mreq [URL] [-c [CADENCY]] [-t [STATS_TIMEOUT]]

    -c   Cadency setter. (Optional value. Default set in 10000.)
    -t   Stats timeout setter. (Optional value. Default set in 3 seconds.)
```

## Use with default cadency(10000 request in parallel):
```sh
mreq http://localhost
```

## Set request parallel cadency:
```sh
mreq http://localhost -c 10
```

## Set timeut stats ouput:
```sh
mreq http://localhost -t 10
```


## License
All the code here is under MIT license. Which means you could do virtually anything with the code.
I will appreciate it very much if you keep an attribution where appropriate.

The MIT License (MIT)
Copyright (c) 2015 Josep Subils (js@js.gl)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
