const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['features', 'entity', 'pages'];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Use layer ${layers.join(' or ')}`);
}

if (!sliceName) {
    throw new Error('Specify name of slice');
}

createTemplate(layer, sliceName);
