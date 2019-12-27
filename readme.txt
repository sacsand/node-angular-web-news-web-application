

Deploy Server side

install node 8+
install mongodb
cd into server folder
npm install
set database usernmae paswword .env 
npm start


Deploy Client Side

install node 8++
cd into Front
npm install
npm start or  to start with server side rendering run  - npm run build:ssr && npm run serve:ssr
visit localhost:4200 or localhost:4000 




API Information 

##### please use postmon for testing  ####

## API to get all articeles
http://localhost:8000/article?query={}

##  same api query field can be used to search and get articles. title is unique identifier . using title can get single article also. 
http://localhost:8000/article?query={ "title": ""}
