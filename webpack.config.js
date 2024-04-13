// In der webpack.config.js-Datei müssen Sie nicht explizit Befehle wie webpack oder webpack serve aufrufen. Die Konfigurationsdatei definiert die Einstellungen für Webpack, und wenn Sie webpack oder webpack serve ausführen, verwendet Webpack automatisch die Konfiguration aus dieser Datei.
// In Ihrer webpack.config.js definieren Sie Einstellungen wie den Einstiegspunkt (entry), die Ausgabe (output), Loader und Plugins. Wenn Sie dann npm run build oder npm run dev ausführen, führt Node.js die in der package.json definierten Skripte aus, und diese wiederum rufen Webpack auf, 
// um den Build-Prozess zu starten, wobei die Konfiguration aus der webpack.config.js-Datei verwendet wird.
// In Ihrem Fall wird beim Ausführen von npm run build der Befehl webpack aufgerufen, und beim Ausführen von npm run dev wird der Befehl webpack serve aufgerufen. Diese Befehle nutzen die in Ihrer webpack.config.js definierten Einstellungen, um den Build-Prozess zu steuern.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin') //Initialisieren eines HTMLWebpackPlugin, siehe -> Plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin //Initialisieren eines BundleAnalyzer, siehe -> Plugins

module.exports = {
   mode: 'development', 
   entry: {
      bundle: path.resolve(__dirname, 'src/main.js'), //name der Ausgabedatei, welche an [name] weitergegeben wird. 
   },
   output: {
      filename: '[name][contenthash].js', // Name der Ausgabedatei
      path: path.resolve(__dirname, 'dist'), // Pfad, in dem die Ausgabedatei gespeichert wird
      clean: true, //Kümmert sich darum, dass nur eine js existiert, wenn build ausgeführt wird. 
      assetModuleFilename: '[name][ext]' //Nimmt die Namen der Dateien
   },
   devtool: 'source-map',
   devServer:{
      static: {
         directory: path.resolve(__dirname, 'dist')
      },
      port: 3000, 
      open: true, //If true open the browser auto. 
      hot: true, //reload 
      compress: true, //!Programm läuft im Hitnergrund, weshalb kein weitere Operation gestartet werden kann. 
      historyApiFallback: true, 
   },
   module:{
      rules: [
         {
            test:/\.scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
         }
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'WebpackApp',
         filename: 'index.html',
         template: 'src/template.html',
      }),
      new BundleAnalyzerPlugin(),
   ]
};