## npm yarn 对照表

| NPM                        | YARN                      | 说明                                     |
| -------------------------- | ------------------------- | ---------------------------------------- |
| npm init                   | yarn init                 | 初始化某个项目                           |
| npm install/link           | yarn install/link         | 默认的安装依赖操作                       |
| npm install taco —save     | yarn add taco             | 安装某个依赖，并且默认保存到 package.    |
| npm uninstall taco —save   | yarn remove taco          | 移除某个依赖项目                         |
| npm install taco —save-dev | yarn add taco -—dev       | 安装某个开发时依赖项目 -D                |
| npm update taco —save      | yarn upgrade taco         | 更新某个依赖项目                         |
| npm install taco --global  | yarn global add taco      | 安装某个全局依赖项目                     |
| npm publish/login/logout   | yarn publish/login/logout | 发布/登录/登出，一系列 NPM Registry 操作 |
| npm run/test               | yarn run/test             | 运行某个命令                             |

## 全局指定

yarn config set registry https://registry.npm.taobao.org

## 临时指定

yarn add node-sass@4.14.1 --dev --registry=https://registry.npm.taobao.org
yarn add jst-components --registry=http://npm.jushuitan-inc.com:4873

## npm 缩写对应表

| 全写            | 缩写 | 说明                                                               |
| --------------- | ---- | ------------------------------------------------------------------ |
| install         | i    | 安装                                                               |
| --save          | S    | 表示安装的包将写入 package.json 里面的 dependencies                |
| --save-dev      | -D   | 开发环境的依赖，就是我们在开发过程中需要的包，只在开发阶段起作用的 |
| --save-prod     | -P   | 生产环境的依赖，也就是项目运行时的包，程序上线后仍然需要依赖       |
| --global        | -g   | 全局标识，可以在任意目录中使用该工具。全局安装                     |
| --save-optional | -O   | 表示将安装的包将写入 packege.json 里面的 optionalDependencies      |
| --save-bundle   | -B   | 表示将安装的包将写入 packege.json 里面的 bundleDependencies        |
| --save-exact    | -E   | 表示安装的包的版本是精确指定的                                     |
