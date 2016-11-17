'use strict'; // eslint-disable-line

// create array of 2 posts
const buildPosts = () => {
  // 3 known posts
  const posts = [{
    title: 'Bacon, please',
    content: 'Bacon ipsum dolor amet prosciutto strip steak bresaola, frankfurter ham hock doner tongue flank. Spare ribs venison turkey, sausage bacon pancetta landjaeger tenderloin ball tip beef ribs hamburger frankfurter leberkas drumstick. Rump short loin strip steak porchetta pancetta flank andouille pork chop alcatra ground round beef tri-tip chuck kevin. Short loin swine chuck shankle burgdoggen. Pork loin capicola prosciutto pork belly beef ham pancetta ham hock kevin fatback biltong.\n\n**Cupim ham hock ribeye boudin meatloaf. Chicken cupim shoulder andouille kielbasa.** Capicola ground round landjaeger spare ribs kevin chicken. Kielbasa hamburger doner filet mignon cow frankfurter kevin brisket sausage. Prosciutto flank rump beef alcatra short loin pork loin jowl turkey chicken sausage pastrami sirloin. Pastrami venison turkey, leberkas pig sausage chicken swine hamburger jowl ball tip meatloaf beef.\n>Ham bacon chuck, alcatra prosciutto jerky strip steak ribeye frankfurter doner ham hock shoulder fatback.',
    tags: ['bacon', 'meat', 'brunch']
  }, {
    title: 'Kitty kitty cat cat',
    content: 'Stretch meow to be let in or has closed eyes but still sees you. Favor packaging over toy climb leg, chase imaginary bugs, and chase after silly colored fish toys around the house so refuse to drink water except out of someones glass or knock dish off table head butt cant eat out of my own dish. Poop in litter box, scratch the walls run in circles, yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet lick butt and make a weird face lick butt and make a weird face need to chase tail.\n\nLies down meowzer! then cats take over the world chase dog then run away, yet dream about hunting birds but lick plastic bags jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water.',
    tags: ['cats', 'meow', 'purr']
  }, {
    title: 'Not throwing away my shot',
    content: 'I’m ‘a get a scholarship to King’s College I prob’ly shouldn’t brag, but dag, I amaze and astonish The problem is I got a lot of brains but no polish I gotta holler just to be heard With every word, I drop knowledge! I’m a diamond in the rough, a shiny piece of coal Tryin’ to reach my goal. My power of speech: unimpeachable Only nineteen but my mind is older These New York City streets get colder, I shoulder Ev’ry burden, ev’ry disadvantage I have learned to manage, I don’t have a gun to brandish I walk these streets famished The plan is to fan this spark into a flame But damn, it’s getting dark, so let me spell out the name',
    tags: ['hamilton', 'camelton', 'musicals']
  }, {
    title: 'Witches who brunch',
    content: 'Witchcraft (also called witchery or spellcraft) broadly means the practice of, and belief in, magical skills and abilities that are able to be exercised by individuals and certain social groups. Witchcraft is a complex concept that varies culturally and societally; therefore, it is difficult to define with precision and cross-cultural assumptions about the meaning or significance of the term should be applied with caution. Witchcraft often occupies a religious, divinatory or medicinal role, and is often present within societies and groups whose cultural framework includes a magical world view. Although witchcraft can often share common ground with related concepts such as sorcery, the paranormal, magic, superstition, necromancy, possession, shamanism, healing, spiritualism, nature worship and the occult, it is usually seen as distinct from these when examined by sociologists and anthropologists.\n\nThe concept of witchcraft and the belief in its existence have existed throughout recorded history. They have been present or central at various times, and in many diverse forms, among cultures and religions worldwide, including both "primitive" and "highly advanced" cultures, and continue to have an important role in many cultures today. Scientifically, the existence of magical powers and witchcraft are generally believed to lack credence and to be unsupported by high quality experimental testing, although individual witchcraft practices and effects may be open to scientific explanation or explained via mentalism and psychology.\n\n[Click here](http://www.the-toast.net) to find out more about witches.',
    tags: ['witches', 'brunch']
  }];

  return posts;
};

module.exports = (() => buildPosts())();

