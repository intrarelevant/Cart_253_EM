
# September 28nd - Assignment - Instructions - Thoughts on my Prototypes

[Prototype 1, Anagram](https://intrarelevant.github.io/Cart_253_EM/Course3_Variables/assignment/prototype/), [Prototype 2, Rain](https://intrarelevant.github.io/Cart_253_EM/Course3_Variables/assignment/prototype_2/), [Prototype 3, Poem](https://intrarelevant.github.io/Cart_253_EM/Course3_Variables/assignment/prototype_3/) 

My main goal was to create very fluid looking motions in different ways, and to work with feedback effects and user interaction. I also wanted to stick more to the course material as my very first prototype felt a bit out of my depth. I was mainly thinking about music - artists, songs, lyrics, that I like. I've also read Helene Cixous' Angst not so long ago, and much of her writing uses homophones and homonyms to play with language, to confuse the reader, and to hide psychoanalytic meaning. I thought it could be interesting to play with words.

The first prototype was influenced by the [website for the artist Powder](https://powd.jp/), which uses a motion effect on the otherwise simple website so that text sort of bounces around. While the site is using mostly rotation and translation, I think, I used positioning and trigonometry functions to ease the motion of the letters as they move around.  Since it was a typographic prototype, I thought it could be fun to work with language in that way using an anagram, and re-arrange the letters. Here, I go from 'wonk' to 'know,' which is fitting for a student. This could likely be expanded in the future to maybe solve anagrams, to allow for user input.

I was listening to the song 'She Brings The Rain' by the band Can, so I decided to make something about rain for the second prototype. My goal was to make something that would feel fun and satisfying to play with. I started by creating the circles at the mouse position with some easing functions for scale, then added lines for the rain with some feedback effect. It was nice but it felt a bit too graphic (right)

![Process screenshots for prototype2](/assets/variables_process.png)

The next morning, I introduced more randomness and added some more logic for the segmentation of the lines, which you can see on the left It's just more thick lines drawn on top, but I find the randomness on the alpha channel helps to sell the effect. I needed to move on so I didn't clean up my code as much as I could for this part. When we learn about loops, I'd like to rework this to make the waves grow in scale.

For a last prototype, I wanted to see how I could use simple variables to generate a coherent sentences. This landed me on the idea of using irregular verbs and adverbs as they can work in a number of grammatical persons, time tenses, and so on. I landed on a simple subject pronoun -> verb -> object pronoun -> adverb structure, with all pronouns and adverbs both being optional. The results can be quite ominous and jarring due to the form and the lack of clear subject, object, or context some examples: 

- "you sing me yesterday / feel"
- "knew once / you hurt me"
- "love it yesterday / shut that again"

 Maybe I should have picked happier words, or another sentence structure. I don't mind it, but it might be dreary to play with. Still... 


# September 21nd - Assignment - Instructions - Thoughts on my Prototypes

Class 2: [Prototype 1, Halftone print](https://intrarelevant.github.io/Cart_253_EM/Course2_Instructions/Prototype_1_print/), [Prototype 2, Seascape](https://intrarelevant.github.io/Cart_253_EM/Course2_Instructions/Prototype_2_sea/index.html), and [Prototype 3, Fibonnaci](https://intrarelevant.github.io/Cart_253_EM/Course2_Instructions/Prototype_3_squares/index.html)

My main idea when approaching these prototypes was the need to work with mainly static 2d shapes and colors and wanting to borrow from physical mediums like printmaking. I also wanted to use some math.

I wanted to start from a familiar concept for a first prototype but I ended up being a bit out of my depth. I knew from prior projects I made in Touchdesigner that I could play with 3d shapes to add additional levels of details possible via rotation, via movement along a Z axis, or through lighting to create more interesting and detailed flat images. I also had a reference image saved of a monograph by Karel & Charlotte Martens, showing a a halftone print that made the printing technique itself the focus of the image; in the same vein I didn't want to use the shapes to create a specific composition. I used randomization for the size and position of the spheres based on sample code on the p5 website and iterated from there. I didn't quite understand everything I was doing around repetition but continued to experiment until I received a result I liked.  

One of the things I tried and failed was to get rid of, or manipulate some of the object shading, which in the final image is quite harsh. I experimented with using the emissivematerial function, but this removed the alpha channel, and I didn't like the result using the built in lighting system. I decided to leave it as is for a more graphic effect. Overall, I'm satisfied with the output, but in the future I think I'll experiment with 2D primitives and gradients for this type of render.

For my second prototype I wanted to stick a bit more closely to what we had seen in class and see what I could create with 2D primitives instead. I aimed to make a landscape composition, because I'd been a bit intimidated by my the last experiment. My reference image was 'Phosphorescent Sea' (1933) by M. C. Escher. Escher is primarily known for work that falls under impossible illusion renders, mathematical paradoxes, and the like, but this particular work showing a sea at night is quite somber and moody. As I wanted to limit myself to 2D primitives and basic instructions here, I decided to use elongated, overlapping ellipses to shape the sea. 

My last prototype is a simple series of squares, rotating around a centre point, using the Fibonnacci sequence. I had some trouble using the 'rotate' instruction, so I used the scale instructions instead to flip the squares. I would, eventually, like to recreate this by storing further variables to generate the sequence, rather than plugging in the numbers.

# September 16th Reflection
Well, I forgot to do this assignment, so here is a demonstration that I understand how to create a journal and the .MD file. 

This was interesting to me because in my corporate job, I need to use AI a lot, so I am used to seeing Claude/Cowork creating MD files. But here I am writing one; it feels like I learned about code in reverse and now I need to start from the very beginning. 

I had already set up a github repo for my portfolio before, so there wasn't anything new there, but I did get better practices in terms of organization, commenting, etc. and making it easier to interpret the code.

Thank you for reading. 

Erica

