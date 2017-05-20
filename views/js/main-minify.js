function getAdj(a){switch(a){case"dark":return["dark","morbid","scary","spooky","gothic","deviant","creepy","sadistic","black","dangerous","dejected","haunted","morose","tragic","shattered","broken","sad","melancholy","somber","dark","gloomy","homicidal","murderous","shady","misty","dusky","ghostly","shadowy","demented","cursed","insane","possessed","grotesque","obsessed"];case"color":return["blue","green","purple","grey","scarlet","NeonGreen","NeonBlue","NeonPink","HotPink","pink","black","red","maroon","silver","golden","yellow","orange","mustard","plum","violet","cerulean","brown","lavender","violet","magenta","chestnut","rosy","copper","crimson","teal","indigo","navy","azure","periwinkle","brassy","verdigris","veridian","tan","raspberry","beige","sandy","ElectricBlue","white","champagne","coral","cyan"];case"whimsical":return["whimsical","silly","drunken","goofy","funny","weird","strange","odd","playful","clever","boastful","breakdancing","hilarious","conceited","happy","comical","curious","peculiar","quaint","quirky","fancy","wayward","fickle","yawning","sleepy","cockeyed","dizzy","dancing","absurd","laughing","hairy","smiling","perplexed","baffled","cockamamie","vulgar","hoodwinked","brainwashed"];case"shiny":return["sapphire","opal","silver","gold","platinum","ruby","emerald","topaz","diamond","amethyst","turquoise","starlit","moonlit","bronze","metal","jade","amber","garnet","obsidian","onyx","pearl","copper","sunlit","brass","brassy","metallic"];case"noisy":return["untuned","loud","soft","shrieking","melodious","musical","operatic","symphonic","dancing","lyrical","harmonic","orchestral","noisy","dissonant","rhythmic","hissing","singing","crooning","shouting","screaming","wailing","crying","howling","yelling","hollering","caterwauling","bawling","bellowing","roaring","squealing","beeping","knocking","tapping","rapping","humming","scatting","whispered","whispering","rasping","buzzing","whirring","whistling","whistled"];case"apocalyptic":return["nuclear","apocalyptic","desolate","atomic","zombie","collapsed","grim","fallen","collapsed","cannibalistic","radioactive","toxic","poisonous","venomous","disastrous","grimy","dirty","undead","bloodshot","rusty","glowing","decaying","rotten","deadly","plagued","decimated","rotting","putrid","decayed","deserted","acidic"];case"insulting":return["stupid","idiotic","fat","ugly","hideous","grotesque","dull","dumb","lazy","sluggish","brainless","slow","gullible","obtuse","dense","dim","dazed","ridiculous","witless","daft","crazy","vapid","inane","mundane","hollow","vacuous","boring","insipid","tedious","monotonous","weird","bizarre","backward","moronic","ignorant","scatterbrained","forgetful","careless","lethargic","insolent","indolent","loitering","gross","disgusting","bland","horrid","unseemly","revolting","homely","deformed","disfigured","offensive","cowardly","weak","villainous","fearful","monstrous","unattractive","unpleasant","nasty","beastly","snide","horrible","syncophantic","unhelpful","bootlicking"];case"praise":return["beautiful","intelligent","smart","genius","ingenious","gorgeous","pretty","witty","angelic","handsome","graceful","talented","exquisite","enchanting","fascinating","interesting","divine","alluring","ravishing","wonderful","magnificient","marvelous","dazzling","cute","charming","attractive","nifty","delightful","superior","amiable","gentle","heroic","courageous","valiant","brave","noble","daring","fearless","gallant","adventurous","cool","enthusiastic","fierce","awesome","radical","tubular","fearsome","majestic","grand","stunning"];case"scientific":return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"];default:return["scientific","technical","digital","programming","calculating","formulating","cyberpunk","mechanical","technological","innovative","brainy","chemical","quantum","astro","space","theoretical","atomic","electronic","gaseous","investigative","solar","extinct","galactic"]}}function getNoun(a){switch(a){case"animals":return["flamingo","hedgehog","owl","elephant","pussycat","alligator","dachsund","poodle","beagle","crocodile","kangaroo","wallaby","woodpecker","eagle","falcon","canary","parrot","parakeet","hamster","gerbil","squirrel","rat","dove","toucan","raccoon","vulture","peacock","goldfish","rook","koala","skunk","goat","rooster","fox","porcupine","llama","grasshopper","gorilla","monkey","seahorse","wombat","wolf","giraffe","badger","lion","mouse","beetle","cricket","nightingale","hawk","trout","squid","octopus","sloth","snail","locust","baboon","lemur","meerkat","oyster","frog","toad","jellyfish","butterfly","caterpillar","tiger","hyena","zebra","snail","pig","weasel","donkey","penguin","crane","buzzard","vulture","rhino","hippopotamus","dolphin","sparrow","beaver","moose","minnow","otter","bat","mongoose","swan","firefly","platypus"];case"profession":return["doctor","lawyer","ninja","writer","samurai","surgeon","clerk","artist","actor","engineer","mechanic","comedian","fireman","nurse","RockStar","musician","carpenter","plumber","cashier","electrician","waiter","president","governor","senator","scientist","programmer","singer","dancer","director","mayor","merchant","detective","investigator","navigator","pilot","priest","cowboy","stagehand","soldier","ambassador","pirate","miner","police"];case"fantasy":return["centaur","wizard","gnome","orc","troll","sword","fairy","pegasus","halfling","elf","changeling","ghost","knight","squire","magician","witch","warlock","unicorn","dragon","wyvern","princess","prince","king","queen","jester","tower","castle","kraken","seamonster","mermaid","psychic","seer","oracle"];case"music":return["violin","flute","bagpipe","guitar","symphony","orchestra","piano","trombone","tuba","opera","drums","harpsichord","harp","harmonica","accordion","tenor","soprano","baritone","cello","viola","piccolo","ukelele","woodwind","saxophone","bugle","trumpet","sousaphone","cornet","stradivarius","marimbas","bells","timpani","bongos","clarinet","recorder","oboe","conductor","singer"];case"horror":return["murderer","chainsaw","knife","sword","murder","devil","killer","psycho","ghost","monster","godzilla","werewolf","vampire","demon","graveyard","zombie","mummy","curse","death","grave","tomb","beast","nightmare","frankenstein","specter","poltergeist","wraith","corpse","scream","massacre","cannibal","skull","bones","undertaker","zombie","creature","mask","psychopath","fiend","satanist","moon","fullMoon"];case"gross":return["slime","bug","roach","fluid","pus","booger","spit","boil","blister","orifice","secretion","mucus","phlegm","centipede","beetle","fart","snot","crevice","flatulence","juice","mold","mildew","germs","discharge","toilet","udder","odor","substance","fluid","moisture","garbage","trash","bug"];case"everyday":return["mirror","knife","fork","spork","spoon","tupperware","minivan","suburb","lamp","desk","stereo","television","TV","book","car","truck","soda","door","video","game","computer","calender","tree","plant","flower","chimney","attic","kitchen","garden","school","wallet","bottle"];case"jewelry":return["earrings","ring","necklace","pendant","choker","brooch","bracelet","cameo","charm","bauble","trinket","jewelry","anklet","bangle","locket","finery","crown","tiara","blingBling","chain","rosary","jewel","gemstone","beads","armband","pin","costume","ornament","treasure"];case"places":return["swamp","graveyard","cemetery","park","building","house","river","ocean","sea","field","forest","woods","neighborhood","city","town","suburb","country","meadow","cliffs","lake","stream","creek","school","college","university","library","bakery","shop","store","theater","garden","canyon","highway","restaurant","cafe","diner","street","road","freeway","alley"];case"scifi":return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"];default:return["robot","alien","raygun","spaceship","UFO","rocket","phaser","astronaut","spaceman","planet","star","galaxy","computer","future","timeMachine","wormHole","timeTraveler","scientist","invention","martian","pluto","jupiter","saturn","mars","quasar","blackHole","warpDrive","laser","orbit","gears","molecule","electron","neutrino","proton","experiment","photon","apparatus","universe","gravity","darkMatter","constellation","circuit","asteroid"]}}function generator(a,b){var c=getAdj(a),d=getNoun(b),e=parseInt(Math.random()*c.length),f=parseInt(Math.random()*d.length);return"The "+c[e].capitalize()+" "+d[f].capitalize()}function randomName(){var a=parseInt(Math.random()*adjectives.length),b=parseInt(Math.random()*nouns.length);return generator(adjectives[a],nouns[b])}function logAverageFrame(a){for(var b=a.length,c=0,d=b-1;d>b-11;d--)c+=a[d].duration;console.log("Average scripting time to generate last 10 frames: "+c/10+"ms")}function updatePositions(){frame++,window.performance.mark("mark_start_frame");for(var a=document.querySelectorAll(".mover"),b=0;b<a.length;b++){var c=Math.sin(frame/100);a[b].style.left=a[b].basicLeft+100*c+"px"}if(window.performance.mark("mark_end_frame"),window.performance.measure("measure_frame_duration","mark_start_frame","mark_end_frame"),frame%10==0){logAverageFrame(window.performance.getEntriesByName("measure_frame_duration"))}}var pizzaIngredients={};pizzaIngredients.meats=["Pepperoni","Sausage","Fennel Sausage","Spicy Sausage","Chicken","BBQ Chicken","Chorizo","Chicken Andouille","Salami","Tofu","Bacon","Canadian Bacon","Proscuitto","Italian Sausage","Ground Beef","Anchovies","Turkey","Ham","Venison","Lamb","Duck","Soylent Green","Carne Asada","Soppressata Picante","Coppa","Pancetta","Bresola","Lox","Guanciale","Chili","Beef Jerky","Pastrami","Kielbasa","Scallops","Filet Mignon"],pizzaIngredients.nonMeats=["White Onions","Red Onions","Sauteed Onions","Green Peppers","Red Peppers","Banana Peppers","Ghost Peppers","Habanero Peppers","Jalapeno Peppers","Stuffed Peppers","Spinach","Tomatoes","Pineapple","Pear Slices","Apple Slices","Mushrooms","Arugula","Basil","Fennel","Rosemary","Cilantro","Avocado","Guacamole","Salsa","Swiss Chard","Kale","Sun Dried Tomatoes","Walnuts","Artichoke","Asparagus","Caramelized Onions","Mango","Garlic","Olives","Cauliflower","Polenta","Fried Egg","Zucchini","Hummus"],pizzaIngredients.cheeses=["American Cheese","Swiss Cheese","Goat Cheese","Mozzarella Cheese","Parmesean Cheese","Velveeta Cheese","Gouda Cheese","Muenster Cheese","Applewood Cheese","Asiago Cheese","Bleu Cheese","Boursin Cheese","Brie Cheese","Cheddar Cheese","Chevre Cheese","Havarti Cheese","Jack Cheese","Pepper Jack Cheese","Gruyere Cheese","Limberger Cheese","Manchego Cheese","Marscapone Cheese","Pecorino Cheese","Provolone Cheese","Queso Cheese","Roquefort Cheese","Romano Cheese","Ricotta Cheese","Smoked Gouda"],pizzaIngredients.sauces=["Red Sauce","Marinara","BBQ Sauce","No Sauce","Hot Sauce"],pizzaIngredients.crusts=["White Crust","Whole Wheat Crust","Flatbread Crust","Stuffed Crust"],String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var adjectives=["dark","color","whimsical","shiny","noisy","apocalyptic","insulting","praise","scientific"],nouns=["animals","everyday","fantasy","gross","horror","jewelry","places","scifi"],selectRandomMeat=function(){return pizzaIngredients.meats[Math.floor(Math.random()*pizzaIngredients.meats.length)]},selectRandomNonMeat=function(){return pizzaIngredients.nonMeats[Math.floor(Math.random()*pizzaIngredients.nonMeats.length)]},selectRandomCheese=function(){return pizzaIngredients.cheeses[Math.floor(Math.random()*pizzaIngredients.cheeses.length)]},selectRandomSauce=function(){return pizzaIngredients.sauces[Math.floor(Math.random()*pizzaIngredients.sauces.length)]},selectRandomCrust=function(){return pizzaIngredients.crusts[Math.floor(Math.random()*pizzaIngredients.crusts.length)]},ingredientItemizer=function(a){return"<li>"+a+"</li>"},makeRandomPizza=function(){for(var a="",b=Math.floor(4*Math.random()),c=Math.floor(3*Math.random()),d=Math.floor(2*Math.random()),e=0;e<b;e++)a+=ingredientItemizer(selectRandomMeat());for(var f=0;f<c;f++)a+=ingredientItemizer(selectRandomNonMeat());for(var g=0;g<d;g++)a+=ingredientItemizer(selectRandomCheese());return a+=ingredientItemizer(selectRandomSauce()),a+=ingredientItemizer(selectRandomCrust())},pizzaElementGenerator=function(a){var b,c,d,e,f,g;return b=document.createElement("div"),c=document.createElement("div"),d=document.createElement("img"),e=document.createElement("div"),b.classList.add("randomPizzaContainer"),b.style.width="33.33%",b.style.height="325px",b.id="pizza"+a,c.style.width="35%",d.src="images/pizza.png",d.classList.add("img-responsive"),c.appendChild(d),b.appendChild(c),e.style.width="65%",f=document.createElement("h4"),f.innerHTML=randomName(),e.appendChild(f),g=document.createElement("ul"),g.innerHTML=makeRandomPizza(),e.appendChild(g),b.appendChild(e),b},resizePizzas=function(a){function b(a){switch(a){case"1":return void(document.querySelector("#pizzaSize").innerHTML="Small");case"2":return void(document.querySelector("#pizzaSize").innerHTML="Medium");case"3":return void(document.querySelector("#pizzaSize").innerHTML="Large");default:console.log("bug in changeSliderLabel")}}function d(a){switch(a){case"1":newWidth=25;break;case"2":newWidth=33.3;break;case"3":newWidth=50;break;default:console.log("bug in sizeSwitcher")}for(var b=document.querySelectorAll(".randomPizzaContainer"),c=0;c<b.length;c++)b[c].style.width=newWidth+"%"}window.performance.mark("mark_start_resize"),b(a),d(a),window.performance.mark("mark_end_resize"),window.performance.measure("measure_pizza_resize","mark_start_resize","mark_end_resize");var e=window.performance.getEntriesByName("measure_pizza_resize");console.log("Time to resize pizzas: "+e[e.length-1].duration+"ms")};window.performance.mark("mark_start_generating");for(var i=2;i<100;i++){var pizzasDiv=document.getElementById("randomPizzas");pizzasDiv.appendChild(pizzaElementGenerator(i))}window.performance.mark("mark_end_generating"),window.performance.measure("measure_pizza_generation","mark_start_generating","mark_end_generating");var timeToGenerate=window.performance.getEntriesByName("measure_pizza_generation");console.log("Time to generate pizzas on load: "+timeToGenerate[0].duration+"ms");var frame=0;window.addEventListener("scroll",updatePositions),document.addEventListener("DOMContentLoaded",function(){for(var a=8,b=256,c=0;c<200;c++){var d=document.createElement("img");d.className="mover",d.src="images/pizza.png",d.style.height="100px",d.style.width="73.333px",d.basicLeft=c%a*b,d.style.top=Math.floor(c/a)*b+"px",document.querySelector("#movingPizzas1").appendChild(d)}updatePositions()});