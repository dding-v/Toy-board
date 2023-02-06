const dummyData = {
  post: [
    {
      id: 12,
      title: "초매 = 초록매실",
      body: "달ㅡ다",
      createAt: "2023. 2. 2.",
    },
    {
      id: 11,
      title: "점심: 카츠 / 저녁: 쌀국수",
      body: "도합 배달의 민족",
      createAt: "2023. 2. 1.",
    },
    {
      id: 10,
      title: "아첨복 나 대신 해 줄 사람",
      body: "구인(0/100)",
      createAt: "2023. 1. 31.",
    },
    {
      id: 9,
      title: "언더바 과제보다 리액트가 재미있다",
      body: "그것이 현생이니까",
      createAt: "2023. 1. 30.",
    },
    {
      id: 8,
      title: "밤이 되니까 추워지네요",
      body: "손이 정말정말 시려워요",
      createAt: "2023. 1. 29.",
    },
    {
      id: 7,
      title: "내일 페어 언제 알려 주나요?",
      body: "전날 저녁 7시 전에 알려 준다면서요",
      createAt: "2023. 1. 28.",
    },
    {
      id: 6,
      title: "집에 언제 가지?",
      body: "내일 죽는 거 아니여",
      createAt: "2023. 1. 27.",
    },
    {
      id: 5,
      title: "코드스테이츠 쿠쿠마곡빌딩",
      body: "저녁 7시까지랬는데 그냥 9시 30분까지 하기",
      createAt: "2023. 1. 26.",
    },
    {
      id: 4,
      title: "내가 제일 좋아하는 갈비찜 덮밥",
      body: "아으아 냠냠",
      createAt: "2023. 1. 25.",
    },
    {
      id: 3,
      title: "3번이에요",
      body: "내용도 3번입니다",
      createAt: "2023. 1. 24.",
    },
    {
      id: 2,
      title: "안녕하세요 포스트 2입니다",
      body: "포스트 2의 내용입니다",
      createAt: "2023. 1. 23.",
    },
    {
      id: 1,
      title: "포스트 1인데요",
      body: "내용도 포스트 1입니다",
      createAt: "2023. 1. 22.",
    },
  ],
  guest: [
    {
      id: 1,
      author: "moo",
      text: 'none',
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAFeCAYAAAAWrzWlAAAAAXNSR0IArs4c6QAAIABJREFUeF7t3UuMq+dZB/DndW69BSi9KjlJ2lJVBZWqQiwLEoue8bQo40EgJBZFiKu6QUisUHddoS7KAlGBUAGhsoig42mqjidIqGoAseBS0kKbkjRpc05KlYQ2be4nxy/y3OKZ8czY48s8tn9Wdv78fs/7ex5p8j+f/X0lvAgQIECAAAECBAgQIECAAIELFygXXoECCBAgQIAAAQIECBAgQIAAgRDQDQEBAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECBAgQIECAAAECBAR0M0CAAAECBAgQIECAAAECBBIICOgJmqAEAgQIECBAgAABAgQIECAgoJsBAgQIECBAgAABAgQIECCQQEBAT9AEJRAgQIAAAQIECBAgQIAAAQHdDBAgQIAAAQIECBAgQIAAgQQCAnqCJiiBAAECBAgQIECAAAECBAgI6GaAAAECBAgQIECAAAECBAgkEBDQEzRBCQQIECBAgAABAgQIECBAQEA3AwQIECBAgAABAgQIECBAIIGAgJ6gCUogQIAAAQIECBAgQIAAAQICuhkgQIAAAQIECBAgQIAAAQIJBAT0BE1QAgECBAgQIECAAAECBAgQENDNAAECBAgQIECAAAECBAgQSCAgoCdoghIIECBAgAABAgQIECBAgICAbgYIECBAgAABAgQIECBAgEACAQE9QROUQIAAAQIECBAgQIAAAQIEBHQzQIAAAQIECBAgQIAAAQIEEggI6AmaoAQCBAgQIECAAAECBAgQICCgmwECBAgQIECAAAECBAgQIJBAQEBP0AQlECBAgAABAgQIECBAgAABAd0MECBAgAABAgQIECBAgACBBAICeoImKIEAAQIECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQICOhmgAABAgQIECBAgAABAgQIJBAQ0BM0QQkECBAgQIAAAQIECBAgQEBANwMECBAgQIAAAQIECBAgQCCBgICeoAlKIECAAAECBAgQIECAAAECAroZIECAAAECBAgQIECAAAECCQQE9ARNUAIBAgQIECBAgAABAgQIEBDQzQABAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECkxdotuuLEXFzb+US8dJWq9wy+bNYkQABAgQIECAwOQEBfXKWViJAgACBRAIrm/X5UuNVOyWVeKGzVl6dqDylECBAgAABAgSOCQjohoIAAQIEUgg0P1O/HY14c6dVbphEQQL6JBStQYAAAQIECMxSQECfpbZzESBAgMBAgZWN+lQp8aO9NzutMpG/TSub9ZlS47U7JyzxbGetvA4/AQIECBAgQCCzwET+JyjzBtVGgAABArkFPrBZb7uhxtWDKmtc76yXG8etWkAfV9DnCRAgQIAAgVkLCOizFnc+AgQIEDgQWGnXbtm5h9uh1+90WuVPx2US0McVzPn55mZ9PtxbIGdzVEWAAAECYwsI6GMTWoAAAQIERhVotutmRNx97HMl/qOzVn5q1PUGHX8k/D/aaZW3T2Jda5xf4PLf1HeXV8cvRcQP9lfZXi9/NMqKzc36TPjpwihkjiVAgACBORIQ0OeoWUolQIDAIgg02/VaRBz9CvvLnVa5aZL7a7Zr3V9vUr9rn2R987zW5c36gdKNjzRO+b+IGnFriXhnLfHGqNG7g35j0J5H7Y2APs+To3YCBAgQOEtAQD9LyPsECBAgMBGBlc/WT5Vu/NrRxWqN7e310pzISfoWEdDHF11p140S8dMR8aa9Z8pP/P8bBPTx+2QFAgQIEFgcgYn/oV0cGjshQIAAgUkJDPqteY2o260y8KrquOdttutDEfFjvXWmeZ5x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eoImKIEAAQIECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQICOhmgAABAgQIECBAgAABAgQIJBAQ0BM0QQkECBAgQIAAAQIECBAgQEBANwMECBAgQIAAAQIECBAgQCCBgICeoAlKIECAAAECBAgQIECAAAECAroZIECAAAECBAgQIECAAAECCQQE9ARNUAIBAgQIECBAgAABAgQIEBDQzQABAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECBAgQIECAAAECBAR0M0CAAAECBAgQIECAAAECBBIICOgJmqAEAgQIECBAgAABAgQIECAgoJsBAgQIECBAgAABAgQIECCQQEBAT9AEJRAgQIAAAQIECBAgQIAAAQHdDBAgQIAAAQIECBAgQIAAgQQCAnqCJiiBAAECBAgQIECAAAECBAgI6GaAAAECBAgQIECAAAECBAgkEBDQEzRBCQQIECBAgAABAgQIECBAQEA3AwQIECBAgAABAgQIECBAIIGAgJ6gCUogQIAAAQIECBAgQIAAAQICuhkgQIAAAQIECBAgQIAAAQIJBAT0BE1QAgECBAgQIECAAAECBAgQENDNAAECBAgQIECAAAECBAgQSCAgoCdoghIIECBAgAABAgQIECBAgICAbgYIECBAgAABAgQIECBAgEACAQE9QROUQIAAAQIECBAgQIAAAQIEBHQzQIAAAQIECBAgQIAAAQIEEggI6AmaoAQCBAgQIECAAAECBAgQICCgmwECBAgQIECAAAECBAgQIJBAQEBP0AQlECBAgAABAgQIECBAgAABAd0MECBAgAABAgQIECBAgACBBAICeoImKIEAAQIECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQICOhmgAABAgQIECBAgAABAgQIJBAQ0BM0QQkECBAgQIAAAQIECBAgQEBANwMECBAgQIAAAQIECBAgQCCBgICeoAlKIECAAAECBAgQIECAAAECAroZIECAAAECBAgQIECAAAECCQQE9ARNUAIBAgQIECBAgAABAgQIEBDQzQABAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECBAgQIECAAAECBAR0M0CAAAECBAgQIECAAAECBBIICOgJmqAEAgQIECBAgAABAgQIECAgoJsBAgQIECBAgAABAgQIECCQQEBAT9AEJRAgQIAAAQIECBAgQIAAAQHdDBAgQIAAAQIECBAgQIAAgQQCAnqCJiiBAAECBAgQIECAAAECBAgI6GaAAAECBAgQIECAAAECBAgkEBDQEzRBCQQIECBAgAABAgQIECBAQEA3AwQIECBAgAABAgQIECBAIIGAgJ6gCUogQIAAAQIECBAgQIAAAQICuhkgQIAAAQIECBAgQIAAAQIJBAT0BE1QAgECBAgQIECAAAECBAgQENDNAAECBAgQIECAAAECBAgQSCAgoCdoghIIECBAgAABAgQIECBAgICAbgYIECBAgAABAgQIECBAgEACAQE9QROUQIAAAQIECBAgQIAAAQIEBHQzQIAAAQIECBAgQIAAAQIEEggI6AmaoAQCBAgQIECAAAECBAgQICCgmwECBAgQIECAAAECBAgQIJBAQEBP0AQlECBAgAABAgQIECBAgAABAd0MECBAgAABAgQIECBAgACBBAICeoImKIEAAQKMp8TDAAAI5klEQVQECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQICOhmgAABAgQIECBAgAABAgQIJBAQ0BM0QQkECBAgQIAAAQIECBAgQEBANwMECBAgQIAAAQIECBAgQCCBgICeoAlKIECAAAECBAgQIECAAAECAroZIECAAAECBAgQIECAAAECCQQE9ARNUAIBAgQIECBAgAABAgQIEBDQzQABAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECBAgQIECAAAECBAR0M0CAAAECBAgQIECAAAECBBIICOgJmqAEAgQIECBAgAABAgQIECAgoJsBAgQIECBAgAABAgQIECCQQEBAT9AEJRAgQIAAAQIECBAgQIAAAQHdDBAgQIAAAQIECBAgQIAAgQQCAnqCJiiBAAECBAgQIECAAAECBAgI6GaAAAECBAgQIECAAAECBAgkEBDQEzRBCQQIECBAgAABAgQIECBAQEA3AwQIECBAgAABAgQIECBAIIGAgJ6gCUogQIAAAQIECBAgQIAAAQICuhkgQIAAAQIECBAgQIAAAQIJBAT0BE1QAgECBAgQIECAAAECBAgQENDNAAECBAgQIECAAAECBAgQSCAgoCdoghIIECBAgAABAgQIECBAgICAbgYIECBAgAABAgQIECBAgEACAQE9QROUQIAAAQIECBAgQIAAAQIEBHQzQIAAAQIECBAgQIAAAQIEEggI6AmaoAQCBAgQIECAAAECBAgQICCgmwECBAgQIECAAAECBAgQIJBAQEBP0AQlECBAgAABAgQIECBAgAABAd0MECBAgAABAgQIECBAgACBBAICeoImKIEAAQIECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQICOhmgAABAgQIECBAgAABAgQIJBAQ0BM0QQkECBAgQIAAAQIECBAgQEBANwMECBAgQIAAAQIECBAgQCCBgICeoAlKIECAAAECBAgQIECAAAECAroZIECAAAECBAgQIECAAAECCQQE9ARNUAIBAgQIECBAgAABAgQIEBDQzQABAgQIECBAgAABAgQIEEggIKAnaIISCBAgQIAAAQIECBAgQICAgG4GCBAgQIAAAQIECBAgQIBAAgEBPUETlECAAAECBAgQIECAAAECBAR0M0CAAAECBAgQIECAAAECBBIICOgJmqAEAgQIECBAgAABAgQIECAgoJsBAgQIECBAgAABAgQIECCQQEBAT9AEJRAgQIAAAQIECBAgQIAAAQHdDBAgQIAAAQIECBAgQIAAgQQCAnqCJiiBAAECBAgQIECAAAECBAgI6GaAAAECBAgQIECAAAECBAgkEBDQEzRBCQQIECBAgAABAgQIECBAQEA3AwQIECBAgAABAgQIECBAIIGAgJ6gCUogQIAAAQIECBAgQIAAAQICuhkgQIAAAQIECBAgQIAAAQIJBAT0BE1QAgECBAgQIECAAAECBAgQENDNAAECBAgQIECAAAECBAgQSCAgoCdoghIIECBAgAABAgQIECBAgICAbgYIECBAgAABAgQIECBAgEACAQE9QROUQIAAAQIECBAgQIAAAQIEBHQzQIAAAQIECBAgQIAAAQIEEggI6AmaoAQCBAgQIECAAAECBAgQICCgmwECBAgQIECAAAECBAgQIJBAQEBP0AQlECBAgAABAgQIECBAgAABAd0MECBAgAABAgQIECBAgACBBAICeoImKIEAAQIECBAgQIAAAQIECAjoZoAAAQIECBAgQIAAAQIECCQQENATNEEJBAgQIECAAAECBAgQIEBAQDcDBAgQIECAAAECBAgQIEAggYCAnqAJSiBAgAABAgQIECBAgAABAgK6GSBAgAABAgQIECBAgAABAgkEBPQETVACAQIECBAgQIAAAQIECBAQ0M0AAQIECBAgQIAAAQIECBBIICCgJ2iCEggQIECAAAECBAgQIECAgIBuBggQIECAAAECBAgQIECAQAIBAT1BE5RAgAABAgQIECBAgAABAgQEdDNAgAABAgQIECBAgAABAgQSCAjoCZqgBAIECBAgQIAAAQIECBAgIKCbAQIECBAgQIAAAQIECBAgkEBAQE/QBCUQIECAAAECBAgQIECAAAEB3QwQIECAAAECBAgQIECAAIEEAgJ6giYogQABAgQIECBAgAABAgQI/D/zNnO5QTodpwAAAABJRU5ErkJggg==",
    },
    {
      id: 2,
      author: "min",
      text: "bye",
      img: "none",
    },
    {
      id: 3,
      author: "jeong",
      text: "Hello",
      img: "none",
    },
    {
      id: 4,
      author: "seong",
      text: "good night",
      img: "none",
    },
    {
      id: 5,
      author: "kim",
      text: "good morning",
      img: "none",
    },
  ],
};

export default dummyData;
