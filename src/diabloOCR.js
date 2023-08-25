const imageReader = require('./lib/image-reader.js');

const diabloOCR = {
    recognize(image) {
        return new Promise((resolve) => {
            resolve(imageReader.performOcr(image));
        });
    }
};

module.exports = diabloOCR;