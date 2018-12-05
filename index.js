const printer = require('printer')
const uuidCompression = require('uuid-compression')

class zplUUID{
    /**
     * Печатает QR code и текст
     * @param data {String} - UUID
     * @param text {String} - Text
     * @param printerName {String} - Printer Name
     * @param template {String} - zpl
     * @return Promise <>
     */
    static printQR(data, text, printerName = 'ZDesigner GC420t', template = undefined) {
        return new Promise((resolve, reject) => {
            try {
                data = uuidCompression.compress(data)
                template = template ? template : `
                ^XA
                ^CI28
                ^FO90,20^BQR,2,8
                ^FDMA'${data}^FS
                ^CF0,30
                ^FO0,270^FD${text}^FSR
                ^XZ
                `

                printer.printDirect({
                    data: template,
                    printer: printerName,
                    type: "RAW",
                    success() {
                        resolve()
                    },
                    error(err) {
                        reject(err)
                    }
                })
            } catch (err) {
                reject(err)
            }
        })

    }

    /**
     * Печатает Сжатый UUID и текст
     * @param data {String} - UUID
     * @param text {String} - Text
     * @param printerName {String} - Printer Name
     * @param template {String} - zpl
     * @return Promise <>
     */
    static printCode128(data, text, printerName = 'ZDesigner GC420t', template = undefined) {
        return new Promise((resolve, reject) => {
            try {
                data = uuidCompression.compress(data)

                template = template ? template : `
                ^XA
                ^CI28
                ^FO2,20^BY1
                ^BY1,2,270
                ^FO45,40^BCN,140,N,N,N^FD${data}^FS
                ^CF0,30
                ^FO0,270^FD${text}^FSR
                ^XZ
                `


                printer.printDirect({
                    data: template,
                    printer: printerName,
                    type: "RAW",
                    success() {
                        resolve()
                    },
                    error(err) {
                        reject(err)
                    }
                })
            } catch (err) {
                reject(err)
            }
        })
    }
    /**
     * Позволяет получить исходные данные отправленые для печати через printCode128()
     * @param data {String} - Просканированные данные напечатанные code128
     * @return Promise <String> - UUID
     */
    static decompress(data){
        return new Promise((resolve, reject) => {
            try {
                resolve(uuidCompression.decompress(data));
            }catch (err) {
                reject(err)
            }
        });
    }
}

module.exports = zplUUID