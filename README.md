# Game Developer Network website!

## Prerequisites
* [Node.js](https://nodejs.org/en/) (Version 5 and up recommended)
* [CouchDB](https://apache.couchdb.com)

### Installation

* Clone down the repository.
```
git clone https://github.com/cynical89/gdnsite.git
```

* If you don't have yarn you can get it [here](https://yarnpkg.com/en/docs/install), or
```
npm install -g yarn
```

* Install packages (from inside the koa-starer folder).
```
npm install or yarn install
```

* Create your config.  There's a `config.json.example` file in the root.  Edit it to include all your values for the site and your OAuth information.  Save it as `config.json` and leave it in the root.

* If you want to use Google Analytics, set `config.site.analytics` to your Tracking ID and make sure the analytics partial (analytics.hbs) contains the correct Universal Analytics tracking code.  If you don't want to use Google Analytics, remove that property or set it to false.

* Start it up.
```
npm start or yarn start
```

* Enjoy!
