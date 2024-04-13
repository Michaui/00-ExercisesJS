const path = require('path');

module.exports = {
 entry: './src/main.js', // Pfad zu Ihrer main.js Datei
 output: {
    filename: 'bundle.js', // Name der Ausgabedatei
    path: path.resolve(__dirname, 'dist'), // Pfad, in dem die Ausgabedatei gespeichert wird
 },
 mode: 'development', // Entwicklungsmodus, ändern Sie dies für Produktion
};