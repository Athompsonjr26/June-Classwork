var str = "MY NAME IS ANTHONY";


var letters = str.split('');
var newString = letters.map(function(letter) {
  if ( letter === "A") {
    return "4";
  } else if ( letter === "E") {
    return "3";
  }
  else if (letter === "G") {
    return "6";
  }
  else if (letter === "I") {
    return "1";
  }
  else if (letter === "O") {
    return "0";
  }
  else if (letter === "S") {
    return "5";
  }
  else if (letter === "T") {
    return "7";
  } else {
    return letter;
  }
});
//////////////////////////////////
var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];

var starters = players.filter(function(player) {
  if (player.starter) {
    return true;
  }
});
console.log('STARTERS');
console.log(starters);

var pointGuards = players.filter(function(player) {
  return player.position === 'PG';
});

console.log('POINT GUARDS');
console.log(pointGuards);

var names = players.map(function(player) {
  return player.name;
});
console.log('Player names: ', names);

var starterNames = starters.map(function(player) {
  return player.name;
});

console.log('Starter names: ', starterNames);

var pointGuardNames = pointGuards.map(function(player) {
  return player.name;
});

console.log('Point guards', pointGuardNames);

var avgTeamPoints = players.reduce(function(sum, player) {
  return sum + player.avgPoints;
}, 0);

console.log('Average team points: ', avgTeamPoints);

var startersPoints = players.filter(function(player) {
  return player.starter;
})
.reduce(function(sum, player) {
  return sum + player.avgPoints;
}, 0);

console.log('Starters points: ', startersPoints);

var everyOneGets10Minutes = players.every(function(player) {
  return player.avgMinutesPlayed > 10;
});

console.log('Every one gets 10 minutes: ', everyOneGets10Minutes);

var startersGet30Minutes = starters.every(function(player) {
  return player.avgMinutesPlayed > 30;
});

console.log('Starters get 30 minutes: ', startersGet30Minutes);

var positions = players.map(function(player) {
  return player.position;
});

console.log('Position values:', positions);

var tally = positions.reduce(function(tally, position) {
  if(!tally[position]) {
    tally[position] = 1;
  } else {
    tally[position] += 1;
  }
  return tally;
}, {});

console.log(tally);
