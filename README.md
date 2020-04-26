# frontend-base-app

Базовая конфигурация фронтовгого приложения c redux

`app.config.yaml` - конфиг переменных, которые будут прокинуты в `process.env`

- `consul` - данные будут браться из консула (http://consul-ump-dev.mbrd.ru:8081/) 
- `local` - ключ/значение указываются непосредственно в конфиге
- `ключ/значение` - as is добавятся в `process.env` 
 
`app.config.yaml` - обязательный конфиг для старта приложения, необходимо указать хотя бы одну пару `ключ/значение`, например, `APP_ID: appName`

**Запуск приложения**

- `dev:wds` - запускает `webpack dev server`, прокси конфигурируется в `webpack.dev.babel.js` - требуется для разработки клиенсткой части
- `dev:build:client` - запускает `build` в режиме `production` с параметрами для коннекта к консулу  
- `dev:start` - запускает `build` в режиме `production` и запускает сервер в режиме `watch` - требуется для разработки серверной части
- `build:client` - билд клиентской части приложения в режиме `production`
- `build:server` - билд серверной части приложения в режиме `production`
- `build` - билд приложения в режиме `production`
- `start` - запуск сервера в проде
- `lint` - запускает `eslint` в соответсвии с `Airbnb JavaScript Style Guide`, изменения добавлены в `.eslintrc.js`   


`consul_host` и `consul_config_acl_token` в параметрах запуска `dev:*` - параметры коннекта к консулу (эмуляция деплоя); при деплое на UMP, данные параметры доступны в соответсвующих переменных окружения 

`webpack.common.babel.js` - базовый конфиг `webpack`, в котором используется переменная окружения `process.env.SERVICE_NAME`
 
Значение `process.env.SERVICE_NAME` задаётся в `Dockerfile` при деплое, например, `frontend-base-app` - по данному имени будет доступно приложение после деплоя `http://services-ump2-dev.mbrd.ru:8090/frontend-base-app/` 