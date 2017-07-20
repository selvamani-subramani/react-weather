# react-weather

App Description
  To retrieve 5 days weather report and display the data by datewise. 
  In `components\Main.js:[28]` I have hardcode to `London`. Please change it as your wish.

Requirements:
- Node v6
- npm v3

To run the app locally:

```bash
git clone https://github.com/sselvamani22/react-weather.git
cd react-weather
npm install
npm run dev
open http://localhost:3000
```

To build the app

```bash
npm run clean
npm run dist

```

To run the unit test:

```bash
npm run test
```

I have just retrieved the data and display on fly. We can enhance this app on a lot of other ways. To retrieve the data and store it to our own DB and we can manipulate as our wish. Can be implemented cache mechanism. Shall follow CSS modular design pattern and improve the design. Instead of refresh all data on virtual dom wean partially touch and update. Instead of hardcode to London, can be searched and retrieve data as our wish.
