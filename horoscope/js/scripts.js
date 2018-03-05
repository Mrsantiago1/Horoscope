

//* What can the user do?//


document.getElementById("submit").onclick = compare;

function compare(){
  //input their birth informtion
  var month = document.getElementById('month').value;
  var date = document.getElementById('date').value;

  if (month == 1 && date<=21){
    document.getElementById('sign').innerHTML= "Capricorn"
    document.getElementById('horoscope').innerHTML= "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
  }
  else if (month == 1 && date>=20){
    document.getElementById('sign').innerHTML= "Aquarius"
    document.getElementById('horoscope').innerHTML= "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
  }
  else if (month == 2 && date<=18){
    document.getElementById('sign').innerHTML= "Aquarius"
    document.getElementById('horoscope').innerHTML= "Aquarius-born are shy and quiet , but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others. They are able to see without prejudice, on both sides, which makes them people who can easily solve problems."
  }
  else if (month == 2 && date>=19) {
    document.getElementById('sign').innerHTML= "Pisces"
    document.getElementById('horoscope').innerHTML= "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back."
  }
  else if (month == 3 && date<=20) {
    document.getElementById('sign').innerHTML= "Pisces"
    document.getElementById('horoscope').innerHTML= "Pisces are very friendly, so they often find themselves in a company of very different people. Pisces are selfless, they are always willing to help others, without hoping to get anything back."
  }
  else if (month == 3 && date>=20) {
    document.getElementById('sign').innerHTML= "Aires"
    document.getElementById('horoscope').innerHTML= "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings."
  }
  else if (month == 4 && date<=19) {
    document.getElementById('sign').innerHTML= "Aires"
    document.getElementById('horoscope').innerHTML= "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything - from work to social gatherings."
  }
  else if (month == 4 && date>=20) {
    document.getElementById('sign').innerHTML= "Taurus"
    document.getElementById('horoscope').innerHTML= "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
  }
  else if (month == 5 && date<=20) {
    document.getElementById('sign').innerHTML= "Taurus"
    document.getElementById('horoscope').innerHTML= "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
  }
  else if (month == 5 && date>=21) {
    document.getElementById('sign').innerHTML= "Gemini"
    document.getElementById('horoscope').innerHTML= "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
  }
  else if (month == 6 && date<=20) {
    document.getElementById('sign').innerHTML= "Gemini"
    document.getElementById('horoscope').innerHTML= "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
  }
  else if (month == 6 && date>=21 ) {
    document.getElementById('sign').innerHTML= "Cancer"
    document.getElementById('horoscope').innerHTML= "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close."
  }
  else if (month == 7 && date<=22) {
    document.getElementById('sign').innerHTML= "Cancer"
    document.getElementById('horoscope').innerHTML= "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close."
  }
  else if (month == 7 && date>=23) {
    document.getElementById('sign').innerHTML= "Leo"
    document.getElementById('horoscope').innerHTML= "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
  }
  else if (month == 8 && date<=23 ) {
    document.getElementById('sign').innerHTML= "Leo"
    document.getElementById('horoscope').innerHTML= "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
  }
  else if (month == 8 && date>=23) {
    document.getElementById('sign').innerHTML= "Virgo"
    document.getElementById('horoscope').innerHTML= "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world."
  }
  else if (month == 9 && date<=22) {
    document.getElementById('sign').innerHTML= "Virgo"
    document.getElementById('horoscope').innerHTML= "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world."
  }
  else if (month == 9 && date>=23) {
    document.getElementById('sign').innerHTML= "Libra"
    document.getElementById('horoscope').innerHTML= "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality."
  }
  else if (month == 10 && date<=23 ) {
    document.getElementById('sign').innerHTML= "Libra"
    document.getElementById('horoscope').innerHTML= "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, as their mirror and someone giving them the ability to be the mirror themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality."
  }
  else if (month == 10 && date>=23) {
    document.getElementById('sign').innerHTML= "Scorpio"
    document.getElementById('horoscope').innerHTML= "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
  }
  else if (month == 11 && date<=21 ) {
    document.getElementById('sign').innerHTML= "Scorpio"
    document.getElementById('horoscope').innerHTML= "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
  }
  else if (month == 11 && date>=22) {
    document.getElementById('sign').innerHTML= "Sagittarius"
    document.getElementById('horoscope').innerHTML= "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
  }
  else if (month == 12 && date<=21) {
    document.getElementById('sign').innerHTML= "Sagittarius"
    document.getElementById('horoscope').innerHTML= "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
  }
  else if (month == 12 && date>=22) {
    document.getElementById('sign').innerHTML= "Capricorn"
    document.getElementById('horoscope').innerHTML= "Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise."
  }
}
