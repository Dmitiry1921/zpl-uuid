# zpl-uuid

This is a small class for working with UUID along with code 128 and QR

###Install
```npm
    cd my-project
    npm i zpl-uuid --save
```
###Using

Get a list of available printers
```javascript
const zplUUID = require('zpl-uuid');
//Print QR code
zplUUID.getPrinters();
```

print QR code UUID
```javascript
    const zplUUID = require('zpl-uuid');
    //Print QR code
    zplUUID.printQR('69c099f6-1577-4091-bb1f-3551173268f2','Text', 'Printer Name')
```

print code128 UUID
```javascript
const zplUUID = require('zpl-uuid');
//Print code128
zplUUID.printCode128('69c099f6-1577-4091-bb1f-3551173268f2','Text', 'Printer Name')
```

decompress data after printing
```javascript
const zplUUID = require('zpl-uuid');
//Print code128
zplUUID.decompress('69c099f6-1577-4091-bb1f-3551173268f2','Text', 'Printer Name')
```

print your ZPL
```javascript
const zplUUID = require('zpl-uuid');
let data = 'Your Data string';
let text = 'Your text string';
zplUUID.zplPrint(`
    ^XA
    ^CI28
    ^FO2,20^BY1
    ^BY1,2,270
    ^FO45,40^BCN,140,N,N,N^FD${data}^FS
    ^CF0,30
    ^FO0,270^FD${text}^FSR
    ^XZ
`)
```

