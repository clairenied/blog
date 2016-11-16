'use strict'; // eslint-disable-line

// create array of 2 posts
const buildPosts = () => {
  // 2 known posts
  const posts = [{
    title: 'Bacon, please',
    content: '<p>Bacon ipsum dolor amet prosciutto strip steak bresaola, frankfurter ham hock doner tongue flank. Spare ribs venison turkey, sausage bacon pancetta landjaeger tenderloin ball tip beef ribs hamburger frankfurter leberkas drumstick. Rump short loin strip steak porchetta pancetta flank andouille pork chop alcatra ground round beef tri-tip chuck kevin. Short loin swine chuck shankle burgdoggen. Pork loin capicola prosciutto pork belly beef ham pancetta ham hock kevin fatback biltong.</p><p>Cupim ham hock ribeye boudin meatloaf. Chicken cupim shoulder andouille kielbasa. Capicola ground round landjaeger spare ribs kevin chicken. Kielbasa hamburger doner filet mignon cow frankfurter kevin brisket sausage. Prosciutto flank rump beef alcatra short loin pork loin jowl turkey chicken sausage pastrami sirloin. Pastrami venison turkey, leberkas pig sausage chicken swine hamburger jowl ball tip meatloaf beef. Ham bacon chuck, alcatra prosciutto jerky strip steak ribeye frankfurter doner ham hock shoulder fatback.</p>',
    tags: ['bacon', 'meat', 'brunch']
  }, {
    title: 'Kitty kitty cat cat',
    content: '<p>Stretch meow to be let in or has closed eyes but still sees you. Favor packaging over toy climb leg, chase imaginary bugs, and chase after silly colored fish toys around the house so refuse to drink water except out of someones glass or knock dish off table head butt cant eat out of my own dish. Poop in litter box, scratch the walls run in circles, yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet lick butt and make a weird face lick butt and make a weird face need to chase tail.</p><p>Lies down meowzer! then cats take over the world chase dog then run away, yet dream about hunting birds but lick plastic bags jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. </p>',
    tags: ['cats', 'meow', 'purr']
  }];

  return posts;
};

module.exports = (() => buildPosts())();

