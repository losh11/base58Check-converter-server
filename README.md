# base58Check-converter-server

An Express server which provides an endpoint to convert base58Check prefix (version bytes) for a given address & version.

## Installation

```sh
$ cd base58Check-converter-server
$ npm i
$ npm start
```

This will start the server running on `localhost:3002`.
You can use iptables to redirect port 3002 to 80.

## Usage

```
localhost:3002?address=342ftSRCvFHfCeFFBuz4xwbeqnDw6BGUey&version=50
```

will return: `MAEpCKqAsN9619X9HnyQnar4AUpP4cDRLk`

## LICENSE

Copyright (c) 2018 Litecoin Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
