{ _connecting: false,
  _handle: 
   { fd: 13,
     writeQueueSize: 0,
     owner: [Circular],
     onread: [Function: onread],
     reading: true },
  _readableState: 
   { highWaterMark: 16384,
     buffer: [],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: false,
     ended: false,
     endEmitted: false,
     reading: true,
     calledRead: true,
     sync: false,
     needReadable: true,
     emittedReadable: false,
     readableListening: false,
     objectMode: false,
     defaultEncoding: 'utf8',
     ranOut: false,
     awaitDrain: 0,
     readingMore: false,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: 
   { end: { [Function: g] listener: [Function: onend] },
     finish: [Function: onSocketFinish],
     _socketEnd: [Function: onSocketEnd],
     drain: [ [Function: ondrain], [Function: socketOnDrain] ],
     timeout: [Function],
     error: [Function],
     close: 
      [ [Function: serverSocketCloseListener],
        [Function: onServerResponseClose] ] },
  _maxListeners: 10,
  _writableState: 
   { highWaterMark: 16384,
     objectMode: false,
     needDrain: false,
     ending: false,
     ended: false,
     finished: false,
     decodeStrings: false,
     defaultEncoding: 'utf8',
     length: 0,
     writing: false,
     sync: true,
     bufferProcessing: false,
     onwrite: [Function],
     writecb: null,
     writelen: 0,
     buffer: [],
     errorEmitted: false },
  writable: true,
  allowHalfOpen: true,
  onend: [Function],
  destroyed: false,
  bytesRead: 643,
  _bytesDispatched: 0,
  _pendingData: null,
  _pendingEncoding: '',
  server: 
   { domain: null,
     _events: 
      { connection: [Function: connectionListener],
        clientError: [Function],
        close: [Function],
        upgrade: [Function],
        request: [Function] },
     _maxListeners: 10,
     _connections: 1,
     connections: [Getter/Setter],
     _handle: 
      { fd: 12,
        writeQueueSize: 0,
        onconnection: [Function: onconnection],
        owner: [Circular] },
     _usingSlaves: false,
     _slaves: [],
     allowHalfOpen: true,
     httpAllowHalfOpen: false,
     timeout: 120000,
     _connectionKey: '4:0.0.0.0:4000' },
  _idleTimeout: 120000,
  _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
  _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
  _idleStart: 1426294560176,
  _monotonicStartTime: 181241260,
  parser: 
   { _headers: [],
     _url: '',
     onHeaders: [Function: parserOnHeaders],
     onHeadersComplete: [Function: parserOnHeadersComplete],
     onBody: [Function: parserOnBody],
     onMessageComplete: [Function: parserOnMessageComplete],
     socket: [Circular],
     incoming: 
      { _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _maxListeners: 10,
        socket: [Circular],
        connection: [Circular],
        httpVersion: '1.1',
        complete: false,
        headers: [Object],
        trailers: {},
        _pendings: [],
        _pendingIndex: 0,
        url: '/',
        method: 'GET',
        statusCode: null,
        client: [Circular],
        _consuming: false,
        _dumped: false,
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        upgrade: false,
        next: [Function: next],
        baseUrl: '',
        originalUrl: '/',
        _parsedUrl: [Object],
        params: {},
        query: {},
        res: [Object],
        route: [Object] },
     maxHeaderPairs: 2000,
     onIncoming: [Function] },
  ondata: [Function],
  _paused: false,
  _httpMessage: 
   { domain: null,
     _events: { finish: [Function] },
     _maxListeners: 10,
     output: [],
     outputEncodings: [],
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _headerSent: false,
     _header: '',
     _hasBody: true,
     _trailer: '',
     finished: false,
     _hangupClose: false,
     socket: [Circular],
     connection: [Circular],
     _headers: { 'x-powered-by': 'Express' },
     _headerNames: { 'x-powered-by': 'X-Powered-By' },
     req: 
      { _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _maxListeners: 10,
        socket: [Circular],
        connection: [Circular],
        httpVersion: '1.1',
        complete: false,
        headers: [Object],
        trailers: {},
        _pendings: [],
        _pendingIndex: 0,
        url: '/',
        method: 'GET',
        statusCode: null,
        client: [Circular],
        _consuming: false,
        _dumped: false,
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        upgrade: false,
        next: [Function: next],
        baseUrl: '',
        originalUrl: '/',
        _parsedUrl: [Object],
        params: {},
        query: {},
        res: [Circular],
        route: [Object] },
     locals: {} } }

