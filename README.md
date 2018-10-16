# sendSoapRequest
How to send SOAP request using JavaScript (NodeJs - Axios Module)

## Install NodeJs
Check version using

``node -v
``

Version used here: v8.9.1

### How to do?
1. Do ``npm install axios``
2. Create a js file, let's call it soap.js
3. Use the ``axios`` module to send a soap request.
4. Run the js file using ``node soap.js``


### How to use current repo
1. Clone the repo
2. Do ``npm install axios``
3. Run the JS file using ``node soap.js``
4. Check the newly created file response.xml containing the response

Simple!!

## If you want to dig deep?
Try to log the ``res`` variable to console and you can get lot of information about how axios is performing the soap request

This is how, it looks like for the request used here

``Disclaimer: 200 lines of JS code``

## To be frank, the below are important fields from testing point of view

1. status - represents the status code
2. statusText (may be) - represents the status text
3. data - represents the exact xml response which we can see in Soap UI

### Go Ahead, Play with them. Happy Testing !!

{ status: 200,
  statusText: 'OK',
  headers:
   { 'cache-control': 'private, max-age=0',
     'content-length': '325',
     'content-type': 'text/xml; charset=utf-8',
     server: 'Microsoft-IIS/7.5',
     'x-aspnet-version': '2.0.50727',
     'x-powered-by': 'ASP.NET',
     date: 'Tue, 16 Oct 2018 17:28:11 GMT',
     connection: 'close' },
  config:
   { adapter: [Function: httpAdapter],
     transformRequest: { '0': [Function: transformRequest] },
     transformResponse: { '0': [Function: transformResponse] },
     timeout: 0,
     xsrfCookieName: 'XSRF-TOKEN',
     xsrfHeaderName: 'X-XSRF-TOKEN',
     maxContentLength: -1,
     validateStatus: [Function: validateStatus],
     headers:
      { Accept: 'application/json, text/plain, */*',
        'Content-Type': 'text/xml',
        'User-Agent': 'axios/0.18.0',
        'Content-Length': 353 },
     method: 'post',
     url: 'http://www.dneonline.com/calculator.asmx',
     data: '<?xml version="1.0" encoding="utf-8"?>\r\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n  <soap:Body>\r\n    <Add xmlns="http://tempuri.org/">\r\n      <intA>1</intA>\r\n      <intB>2</intB>\r\n    </Add>\r\n  </soap:Body>\r\n</soap:Envelope>' },
  request:
   ClientRequest {
     domain: null,
     _events:
      { socket: [Function],
        abort: [Function],
        aborted: [Function],
        error: [Function],
        timeout: [Function],
        prefinish: [Function: requestOnPrefinish] },
     _eventsCount: 6,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: true,
     upgrading: false,
     chunkedEncoding: false,
     shouldKeepAlive: false,
     useChunkedEncodingByDefault: true,
     sendDate: false,
     _removedConnection: false,
     _removedContLen: false,
     _removedTE: false,
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: true,
     _headerSent: true,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: null,
        _parent: null,
        _host: 'www.dneonline.com',
        _readableState: [Object],
        readable: false,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: false,
        allowHalfOpen: false,
        _bytesDispatched: 545,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [Circular],
        read: [Function],
        _consuming: true,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        [Symbol(asyncId)]: 6,
        [Symbol(bytesRead)]: 574 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: null,
        _parent: null,
        _host: 'www.dneonline.com',
        _readableState: [Object],
        readable: false,
        domain: null,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: false,
        allowHalfOpen: false,
        _bytesDispatched: 545,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: null,
        _server: null,
        parser: null,
        _httpMessage: [Circular],
        read: [Function],
        _consuming: true,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1,
        [Symbol(asyncId)]: 6,
        [Symbol(bytesRead)]: 574 },
     _header: 'POST /calculator.asmx HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nContent-Type: text/xml\r\nUser-Agent: axios/0.18.0\r\nContent-Length: 353\r\nHost: www.dneonline.com\r\nConnection: close\r\n\r\n',
     _onPendingData: [Function: noopPendingOutput],
     agent:
      Agent {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        defaultPort: 80,
        protocol: 'http:',
        options: [Object],
        requests: {},
        sockets: [Object],
        freeSockets: {},
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256 },
     socketPath: undefined,
     timeout: undefined,
     method: 'POST',
     path: '/calculator.asmx',
     _ended: true,
     res:
      IncomingMessage {
        _readableState: [Object],
        readable: false,
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Array],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '',
        method: null,
        statusCode: 200,
        statusMessage: 'OK',
        client: [Object],
        _consuming: true,
        _dumped: false,
        req: [Circular],
        responseUrl: 'http://www.dneonline.com/calculator.asmx',
        redirects: [],
        read: [Function] },
     aborted: undefined,
     timeoutCb: null,
     upgradeOrConnect: false,
     parser: null,
     maxHeadersCount: null,
     _redirectable:
      Writable {
        _writableState: [Object],
        writable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: [Object],
        _redirectCount: 0,
        _redirects: [],
        _requestBodyLength: 353,
        _requestBodyBuffers: [],
        _onNativeResponse: [Function],
        _currentRequest: [Circular],
        _currentUrl: 'http://www.dneonline.com/calculator.asmx' },
     [Symbol(outHeadersKey)]:
      { accept: [Array],
        'content-type': [Array],
        'user-agent': [Array],
        'content-length': [Array],
        host: [Array] } },
  data: '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><AddResponse xmlns="http://tempuri.org/"><AddResult>3</AddResult></AddResponse></soap:Body></soap:Envelope>' }
