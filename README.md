# zpl-uuid

This is a small class for working with UUID along with code 128 and QR

###Install
```npm
    cd my-project
    npm i zpl-uuid --save
```
###Using

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
zplUUID.printCode128('69c099f6-1577-4091-bb1f-3551173268f2','Text', 'Printer Name')
```

