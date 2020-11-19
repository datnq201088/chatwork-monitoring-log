# Requirement 
- Node verion 14 or higher
- Installed packages: `git`, `yarn`, `pm2`
# Development
1.Clone source code from repository
```
git clone git@github.com:datnq201088/chatwork-monitoring-log.git
```

2.Change to our directory
```
cd chatwork-monitoring-log
yarn install
```

3.Copy configuration file, edit params
```
cp .env.example .env

# Room chat to notify 
CHATWORK_ROOM_ID=123456

# Bot api token 
CHATWORK_API_TOKEN=56tqt5agat55qfa8a5hs6

# Config users receive messsages
CHATWORK_USERS=TO ALL >>> | [toall] | [1234567] 

# Log path file 
LOG_PATH=/var/log/nginx/error.log

# Eviroment server 
ENV=staging
```

4.Start script
```
node src/index.js
```

# Production
```
pm2 start src/index.js
```
