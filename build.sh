echo "Shell Step 01 ========> deploy starting···"
echo "Shell Step 02 ========> npm build···"
# npm install && npm run build:deploy
npm run build
node ./script/deploy.js
echo "Shell Step 03 ========> copy files···"
cp -rf ./dist www pm2.json package.deploy.json ./Docker
cd Docker
mv package.deploy.json package.json
mv www server.js
echo "Shell Step 04 ========> docker build···"
(sudo docker rm -f hdm-node-app && sudo docker rmi -f hdm-node-pm2:1.0)|| echo "continue execute"
docker build -t hdm-node-pm2:1.0 .
# echo "Shell Step 05 ========> docker run···"
# sudo docker run -d -p 10011:5000 --privileged --restart=always --name hdm-node-app hdm-node-pm2:1.0
# echo "Shell Step 06 ========> docker tag···"
# sudo docker tag hdm-node-pm2:1.0 192.168.0.230:5000/hdm-node-pm2:1.0
# echo "Shell Step 07 ========> docker push···"
# sudo docker push 192.168.0.230:5000/hdm-node-pm2:1.0 && sudo docker rmi 192.168.0.230:5000/hdm-node-pm2:1.0
echo "Shell Step 08 ========> deploy end."
