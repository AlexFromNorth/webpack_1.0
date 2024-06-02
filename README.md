# webpack_1.0
react, ts, scss, html, prov dev сборка

plugins:
Environment Variables - позволяет передать/использовать переменные в вебпак.конфиге
HtmlWebpackPlugin - подключает к сборке html-файл и к нему итоговый js-файл
ProgressPlugin - плагин для разработки, позволяющий вовремя сборки увидеть процент прогресса
typescript ts-loader - расширение способная обратывать ts файлы
MiniCssExtractPlugin - сжатие кодов/файлов
sass/css-loader - позволяет использовать стили
React
react-router-dom
webpack-bundle-analyzer - анализатор сборки
svgr/webpack - loader для работы с свг-изображениями

npm run build:dev - создать версию для проверки проекта
npm run build:prod - создать итоговую(минифицированную) версию проекта
npm run build:prod -- --env analyzer=true - проанализировать итоговую версию проекта
npm run start -- --env port=5000 - запустить приложение с live reload  на определенном порту