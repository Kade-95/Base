const Func = require('./classes/Func');
const Matrix = require('./classes/Matrix');
const NeuralNetwork = require('./classes/NeuralNetwork');
const Template = require('./classes/Template');
const Components = require('./classes/Components');
const ColorPicker = require('./classes/ColorPicker');
const Period = require('./classes/Period');
const Icons = require('./Icons');
const Shadow = require('./functions/Shadow');
const ArrayLibrary = require('./functions/ArrayLibrary');
const ObjectsLibrary = require('./functions/ObjectsLibrary');
const MathsLibrary = require('./functions/MathsLibrary');
const AnalysisLibrary = require('./functions/AnalysisLibrary');
const Compression = require('./functions/Compression');

class Empty {
}

class Base extends Components {
    constructor(theWindow = Empty) {
        super(theWindow);
        this.colorHandler = new ColorPicker();
        this.array = ArrayLibrary();
        this.object = ObjectsLibrary();
        this.math = MathsLibrary();
        this.analytics = AnalysisLibrary();
        this.icons = Icons;

        this.styles = [
            'https://kade-95.github.io/kerdx/css/table.css',
            'https://kade-95.github.io/kerdx/css/cell.css',
            'https://kade-95.github.io/kerdx/css/form.css',
            'https://kade-95.github.io/kerdx/css/picker.css',
            'https://kade-95.github.io/kerdx/css/select.css',
            'https://kade-95.github.io/kerdx/css/json.css',
            'https://kade-95.github.io/kerdx/css/popup.css'
        ];
        for (let style of this.styles) {
            this.loadCss(style);
        }
    }
}

module.exports = {
    Base,
    ColorPicker,
    Period,
    Matrix,
    Func,
    Components,
    Template,
    NeuralNetwork,
    Icons,
    Shadow,
    ArrayLibrary,
    ObjectsLibrary,
    MathsLibrary,
    AnalysisLibrary,
    Compression
};
