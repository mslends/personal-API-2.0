var name = { "name": "Donald Duck" };
var location = { "location": "Timbuktu" };
var occupations = { "occupations": ["Thwarting Buggs Bunny", "Tomfoolery"] };
var occupationsLatest = { "latestOccupation": "Tomfoolery" };
var hobbies = { hobbies: [{
    "name": "Watching cartoons",
    "type": "current"
    },
    {
    "name": "Quacking",
    "type": "past"
    }
    ]
};

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json(location);
  },
  getOcccupations: function(req, res, next) {
    if(req.query.order === 'asc') {
      res.status(200).json(occupations.sort());
    } if(req.query.order === 'desc') {
      res.status(200).json(occupations.sort().reverse());
    }  else {
        res.status(200).json(occupations);
      }
  },
  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(occupationsLatest);
  },
  getHobbies: function(req, res, next) {
    res.status(200).json(getHobbies);
  },
  getHobbiesType: function(req, res, next) {
    res.status(200).json(hobbiesType);
  }

};
