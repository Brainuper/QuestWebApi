# QuestWebApi
### Getting Started
#### Requirement
* Docker
* VirtualBox for OS windows
* Postman or curl

#### Using docker
1. `cd questwebapi`
1. `docker-compose up -d`
1. Open browser `http://192.168.99.100:9001/api/version`
1. profit!

#### Api
Verbs | Http | Description
------|-------|------------
`api/quests` | get, post | working with quest
`api/quest/:id` | get, put, del | working with id quest
`api/subject` | get, post | working with subject
`api/subject/:id` | get, put, del | working with id subject

Body `post` for subject
```json
{
  "name": "Mathematics"
}```

Get response:
```json
{
  "__v": 0,
  "name": "Mathematics",
  "_id": "582e625d96fdff0001c7bc99",
  "updateAt": "2016-11-18T02:07:25.791Z",
  "createAt": "2016-11-18T02:07:25.780Z"
}```

Body `post` for quest
```json
{
  "body": "2 * 2 + 2 = ?",
  "option": ["2", "4", "6", "8"],
  "answer": "2",
  "subjects": [{"_id":"582e625d96fdff0001c7bc99"}]
}```

Get response:
```json
{
  "__v": 0,
  "body": "2 * 2 + 2 = ?",
  "answer": "2",
  "_id": "582e627a96fdff0001c7bc9a",
  "subjects": [
    "582e625d96fdff0001c7bc99"
  ],
  "updateAt": "2016-11-18T02:07:54.584Z",
  "createAt": "2016-11-18T02:07:54.580Z",
  "option": [
    "2",
    "4",
    "6",
    "8"
  ]
}```
