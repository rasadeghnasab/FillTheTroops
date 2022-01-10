## Usage

After you run the server you can call the url below with `soldiersCount` and `solution` parameters:

```
http://localhost:8000/api/troops/suggest?soldiersCount=300
```

## Compare solutions:

| Feature         | Solution-1 | Solution-2 |
|-----------------|------------|------------|
| Time complexity | O(1)       | O(n)       |
| Entropy         | High       | Low        |

## Output time profiling

### solution-1:

| Input           | Time    | Extra               |
|-----------------|---------|---------------------|
| 500             | 0.051ms |                     |
| 5000            | 0.028ms |                     |
| 50000           | 0.021ms |                     |
| 500000          | 0.041ms |                     |
| 500000000       | 0.03ms  | 500,000,000         |
| 500000000000    | 0.036ms | 500,000,000,000     |
| 500000000000000 | 0.023ms | 500,000,000,000,000 |

### solution-2:

| Input      | Time         |                                                                |
|------------|--------------|----------------------------------------------------------------|
| 500        | 0.119ms      |                                                                |
| 5000       | 2.491ms      |                                                                |
| 50000      | 2.064ms      |                                                                |
| 500000     | 15.058ms     |                                                                |
| 500000000: | 1:02.720     | (m:ss.mmm) (500,000,000)                                       |
| 500000000  | > 10 Minutes | pending for more than 10 minutes so I terminated the execution |

### Todos
- [ ] Add nodejs
    - [x] Add Koa + tests
    - [x] Add solutions + tests
    - [x] Add utilities + unit tests
    - [ ] Move troops types and troops minimum members to config
- [ ] Add Docker. build and deployment setup
- [ ] Complete the README file.
    - [ ] Add Postman public link to the README file
