## Tests: [![CircleCI](https://circleci.com/gh/rasadeghnasab/FillTheTroops.svg?style=svg)](https://circleci.com/gh/rasadeghnasab/FillTheTroops)

# Up and running:

```sh
git clone git@github.com:rasadeghnasab/FillTheTroops.git

cd FillTheTroops
```

## Method 01:

- Run the command below and let it to finishes the job:

```sh
docker run --name fillTheTroops -p 8000:8000 -d rasadeghnasab/goodgame-nodejs
```

- Now you're open the browser in this URL:

### Close and clear:
```sh
docker stop fillTheTroops
docker rm fillTheTroops
docker rmi rasadeghnasab/goodgame-nodejs
```

## Method 02:

Note: you need to have npm and node installed to use this method.

```
npm install
npm run prod
```

### Close and clear:
Simply return to your terminal and press `ctrl+c` to terminate the process

## Usage

After you run the server you can call the url below with `soldiersCount` and `solution` parameters:

```
http://localhost:8000/api/troops/suggest?soldiersCount=300
```

## Compare solutions:

| Feature         | Solution-1 | Solution-2 |
| --------------- | ---------- | ---------- |
| Time complexity | O(1)       | O(n)       |
| Entropy         | High       | Low        |

## Output time profiling

### solution-1:

| Input           | Time    | Extra               |
| --------------- | ------- | ------------------- |
| 500             | 0.051ms |                     |
| 5000            | 0.028ms |                     |
| 50000           | 0.021ms |                     |
| 500000          | 0.041ms |                     |
| 500000000       | 0.03ms  | 500,000,000         |
| 500000000000    | 0.036ms | 500,000,000,000     |
| 500000000000000 | 0.023ms | 500,000,000,000,000 |

### solution-2:

| Input      | Time         |                                                                |
| ---------- | ------------ | -------------------------------------------------------------- |
| 500        | 0.119ms      |                                                                |
| 5000       | 2.491ms      |                                                                |
| 50000      | 2.064ms      |                                                                |
| 500000     | 15.058ms     |                                                                |
| 500000000: | 1:02.720     | (m:ss.mmm) (500,000,000)                                       |
| 500000000  | > 10 Minutes | pending for more than 10 minutes so I terminated the execution |
