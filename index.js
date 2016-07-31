/**
 Trivia author: Shane Besong (Shwheelz)

 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "Which Psychic Pokemon emits special alpha waves from its body that induce headaches to those who are close by?": [
            "Kadabra.",
            "Psyduck.",
            "Mr. Mime.",
            "Musharna."
        ]
    },
    {
        "This Pokemon sees the likeliness of its mother in the moonlight, and it cries.": [
            "Cubone.",
            "Umbreon.",
            "Cubchoo.",
            "Cryogonal."
        ]
    },
    {
        "Electricity runs across the surface of this Pokemon's body. In darkness, its entire body glows a whitish blue.": [
            "Electabuzz.",
            "Lanturn.",
            "Thundurus.",
            "Tynamo."
        ]
    },
    {
        "This Pokemon was born in the spout of a volcano, and its body is nearly 2,200 degrees Fahrenheit.": [
            "Magmar.",
            "Charmander.",
            "Heatmor.",
            "Volcanion."
        ]
    },
    {
        "When this Pokemon is healthy, it spouts yellow flames from its mouth. Black smoke will come out when it is fatigued.": [
            "Magby.",
            "Lilteo.",
            "Lampent.",
            "Moltres."
        ]
    },
    {
        "This Pokemon blasts fireballs of over 3,600 degrees Fahrenheit from the ends of its arms.": [
            "Magmortar.",
            "Groudon.",
            "Emboar.",
            "Chandelure."
        ]
    },
    {
        "This Pokemon can easily lift a foe twice its weight with its massive horns and even tear it in half.": [
            "Pinsir.",
            "Mamoswine.",
            "Haxorus.",
            "Excadrill."
        ]
    },
    {
        "This Pokemon is virutally worthless in terms of both power and speed. It is the most weak and pathetic Pokemon in the world.": [
            "Magikarp.",
            "Bellsprout.",
            "Sunkern.",
            "Hoppip."
        ]
    },
    {
        "In ancient literature there is a record that this Pokemon razed a village when violence flared.": [
            "Gyarados.",
            "Dragonite.",
            "Yveltal.",
            "Arceus."
        ]
    },
    {
        "This is a manmade Pokemon that was programmed with only basic motions.": [
            "Porygon.",
            "Mewtwo.",
            "Bronzor.",
            "Magnemite."
        ]
    },
    {
        "This Pokemon is revived from the Helix fossil.": [
            "Omanyte.",
            "Kabuto.",
            "Aerodactyl.",
            "Heliolisk."
        ]
    },
    {
        "This Pokemon's tentacles are highly developed as if they are hands and feet. It ensnares its prey, then immediately bites.": [
            "Omastar.",
            "Jellicent.",
            "Tentacruel.",
            "Tangrowth."
        ]
    },
    {
        "This Pokemon is revived from the Dome fossil and is thought to have inhabited beaches 300 million years ago.": [
            "Kabuto.",
            "Omanyte.",
            "Aerodactyl.",
            "Amaura."
        ]
    },
    {
        "A slim and fasty swimmer, this Pokemon slices its prey open and drinks the body fluids.": [
            "Kabutops.",
            "Kingler.",
            "Feraligatr.",
            "Carvanha."
        ]
    },
    {
        "The bone this Pokemon holds is its key weapon.  It throws it like a boomerange to KO opponents.": [
            "Marowak.",
            "Lucario.",
            "Duskull.",
            "Mamoswine."
        ]
    },
    {
        "This Pokemon's legs freely contract and stretch.  It rubs down its legs after battle to overcome fatigue.": [
            "Hitmonlee.",
            "Hitmontop.",
            "Blaziken.",
            "Mienshao."
        ]
    },
    {
        "This Pokemon's arm-twisting punches can pulverize even concrete.  It fights for three minutes, then rests.": [
            "Hitmonchan.",
            "Primeape.",
            "Machamp.",
            "Throh."
        ]
    },
    {
        "This compassionate Pokemon is said to deliver happiness.": [
            "Chansey.",
            "Togepi.",
            "Beautifly.",
            "Cherrim."
        ]
    },
    {
        "This Pokemon is covered with writhing vines, so its true identity remains unknown.": [
            "Tangela.",
            "Victreebell.",
            "Cradily.",
            "Ferrothorn."
        ]
    },
    {
        "This Pokemon has a small brain, and will charge straight forward, smashing everything in its path.": [
            "Rhyhorn.",
            "Golem.",
            "Rampardos.",
            "Donphan."
        ]
    },
    {
        "This Pokemon will spray a dense, black ink from its mouth if it senses danger.": [
            "Horsea.",
            "Tentacool.",
            "Inkay.",
            "Jellicent."
        ]
    },
    {
        "This Pokemon is adept at conning people and will make walls out of thin air.": [
            "Mr. Mime.",
            "Alakazam.",
            "Drowzee.",
            "Hoopa."
        ]
    },
    {
        "This Pokemon wiggles its hips as it walks and speaks in a language that sounds human.": [
            "Jynx.",
            "Mr. Mime.",
            "Gothorita.",
            "Kadabra."
        ]
    },
    {
        "This Pokemon has a central core that can regenerate its body.": [
            "Staryu.",
            "Gollurk.",
            "Diancie.",
            "Bronzong."
        ]
    },
    {
        "This Pokemon's central core glows the colors of the rainbow.": [
            "Starmie.",
            "Diancie.",
            "Metagross.",
            "Bronzong."
        ]
    },
    {
        "This Pokemon weakens its prey with strong whirlpools, then swallows them whole.": [
            "Seadra.",
            "Wailord.",
            "Huntail.",
            "Manaphy."
        ]
    },
    {
        "This Pokemon, if placed in an aquarium, will shatter even the thickest glass with its horn and make its escape.": [
            "Goldeen.",
            "Walrein.",
            "Wartortle.",
            "Carracosta."
        ]
    },
    {
        "This Pokemon is very protective of its eggs, and will guard them for over a month.": [
            "Seaking.",
            "Chansey.",
            "Pidgeot.",
            "Exeggutor."
        ]
    },
    {
        "This Pokemon's hide is extremely tough, and its horn can crush even uncut diamonds.": [
            "Rhydon.",
            "Diancie.",
            "Mamoswine.",
            "Heracross."
        ]
    },
    {
        "This Pokemon fires out Geodudes from its palms, and its carapace can withstand volcanic eruptions.": [
            "Rhyperior.",
            "Golem.",
            "Regirock.",
            "Gigalith."
        ]
    },
    {
        "If you come across a young of this species, you should never try to diturb it or catch it. Its mother is very protective.": [
            "Kangaskhan.",
            "Cubone.",
            "Happiny.",
            "Riolu."
        ]
    },
    {
        "This Pokemon has a long tongue that is slathered with gooey saliva that is twice the length of its body.": [
            "Lickitung.",
            "Swalot.",
            "Greninja.",
            "Croagunk."
        ]
    },
    {
        "Gases lighter than air keep this Pokemon afloat. It has a thin, filmy body.": [
            "Koffing.",
            "Cresselia.",
            "Gastly.",
            "Uxie."
        ]
    },
    {
        "This Pokemon loves the gases given off by rotting kitchen garbage. It will find an abandoned, unkempt house and stay there.": [
            "Weezing.",
            "Muk.",
            "Dragalge.",
            "Trubbish."
        ]
    },
    {
        "This Pokemon lives in a closely knit cluster which can communicate using telepathy.": [
            "Exeggcute.",
            "Metagross.",
            "Mesprit.",
            "Elgyem."
        ]
    },
    {
        "This Pokemon has three heads that think independenlty, but they are friendly and never appear to squabble.": [
            "Exeggutor.",
            "Dodrio.",
            "Hydreigon.",
            "Cloydol."
        ]
    },
    {
        "This Pokemon not only has three heads, but three sets of heats and lungs as well.": [
            "Dodrio.",
            "Exeggutor.",
            "Claydol.",
            "Hydreigon."
        ]
    },
    {
        "This Pokemon's heads take turns sleeping so it can always be on the lookout for enemies." : [
            "Doduo.",
            "Zweilous.",
            "Hydreigon.",
            "Barbarnacle."
        ]
    },
    {
        "This Pokemon fights with others over plant stalks, which it will use as a sword to cut through things.": [
            "Farfetch'd.",
            "Bayleef.",
            "Grovyle.",
            "Shiftry."
        ]
    },
    {
        "This Pokemon generates radio signals and emits a powerful magnetic force that is fatal to mechanical devices.": [
            "Magneton.",
            "Bronzong.",
            "Klinklang.",
            "Probopass."
        ]
    },
    {
        "This Pokemon floats in the air by emitting electromagnetic waves from the units at its sides.": [
            "Magnemite.",
            "Probopass.",
            "Bronzong.",
            "Beldum."
        ]
    },
    {
        "Because this Pokemon can't fish with its tail, it grudgingly swims around to catch its prey.": [
            "Slowbro.",
            "Nidoqueen.",
            "Zygarde.",
            "Poliwag."
        ]
    },
    {
        "This Pokemon is always vacantly lost in thought and lazes near water.": [
            "Slowpoke.",
            "Slaking.",
            "Lombre.",
            "Panpour."
        ]
    },
    {
        "This Pokemon has incredible intellect and intuation. It always remains calm and collected.": [
            "Slowking.",
            "Alakazam.",
            "Xatu.",
            "Dragonite."
        ]
    },
    {
        "It is rumored that this Pokemon was first created when a Pokeball was exposed to a powerful pulse of energy.": [
            "Voltorb.",
            "Electrode.",
            "Foongus.",
            "Amoonguss."
        ]
    },
    {
        "On days when lightening strikes, you can see this Pokemon exploding all over from eating too much electricity.": [
            "Electrode.",
            "Golem.",
            "Weezing.",
            "Gigalith."
        ]
    },
    {
        "This male Pokemon's ears are flapped out like wings, and it can extend its toxic barbs when angered.": [
            "Nidoran.",
            "Tyrogue.",
            "Trubbish.",
            "Crobat."
        ]
    },
    {
        "This Pokemon uses its big ears to check its surroundings, and will attack immediately upon finding something.": [
            "Nidorino.",
            "Diggersby.",
            "Lopunny.",
            "Golbat."
        ]  
    },
    {
        "This Pokemon has leafy cutters, and the acid from its mouth can dissolve anything.": [
            "Weepinbell",
            "Venusaur.",
            "Oddish.",
            "Roserade."
        ]
    },
    {
        "Although its body is small, it runs blindingly fast to catch its prey.": [
            "Bellsprout.",
            "Azumarill.",
            "Rapidash.",
            "Doduo."
        ]
    },
    {
        "This Pokemon is very competitive and can run at nearly 150 miles per hour.": [
            "Rapidash.",
            "Dodrio.",
            "Electivire.",
            "Raichu."
        ]
    },
    {
        "This Pokemon's legs grow strong while it chases after its parent in the mountains and fields all day.": [
            "Ponyta.",
            "Doduo.",
            "Blitzle.",
            "Shinx."
        ]
    },
    {
        "This Pokemon eats over 880 pounds of food every day and can digest even moldy and rotten food.": [
            "Snorlax.",
            "Swalot.",
            "Trubbish.",
            "Steelix."
        ]
    },
    {
        "This Pokemon lives in thunderclouds and freely controls lightning bolts.": [
            "Zapdos.",
            "Arceus.",
            "Zekrom.",
            "Emolga."
        ]
    },
    {
        "When injured, this Pokemon is said to dip its body into molten magma to heal itself. Its appearance indicates the coming of spring.": [
            "Moltres.",
            "Victini.",
            "Darmanitan.",
            "Volcarona."
        ]
    },
    {
        "This Pokemon is called the mirage Pokemon because so few have seen it. Its life energy steadily builds to reach uncontrollable levels.": [
            "Dratini.",
            "Vaporeon.",
            "Kingdra.",
            "Latios."
        ]
    },
    {
        "This mystical Pokemon exudes a gentle aura and can freely control the weather.": [
            "Dragonair.",
            "Castform.",
            "Thundurus.",
            "Slowking."
        ]
    },
    {
        "On nights with shooting stars, this Pokemon can be seen dancing in a ring throughout the night but disappear with sunrise.": [
            "Cleffa.",
            "Lunatone.",
            "Umbreon.",
            "Vileplume."
        ]
    },
    {
        "This Pokemon is said to live in huge colonies in the jungle, but no one has ever returned from there.": [
            "Victreebell.",
            "Machoke.",
            "Aipom.",
            "Leafeon."
        ]
    },
    {
        "This Pokemon's body is virutally composed of water. It shoots beams from its crystal like eyes.": [
            "Tentacool.",
            "Jellicent.",
            "Frillish.",
            "Froslass."
        ]
    },
    {
        "This iPokemon buries itself halfway in the ground when it sleeps, and it won't wake up even if a hiker steps on it.": [
            "Geodude.",
            "Roggenrola.",
            "Crustle.",
            "Shuckle."
        ]
    },
    {
        "This Pokemon likes to eat mossy rocks; it will eat a ton of rocks in a day!": [
            "Graveler.",
            "Leafeon.",
            "Steelix.",
            "Barbarnacle."
        ]
    },
    {
        "This Pokemon uses its 80 tentacles to ensnare its prey.": [
            "Tentacruel.",
            "Octillery.",
            "Tangela.",
            "Carnivine."
        ]
    },
    {
        "This Pokemon has a rock-hard hide and its thick tail can smash through a metal transmission tower with a single swing.": [
            "Nidoking.",
            "Arbok.",
            "Krookodile.",
            "Taillow."
        ]
    },
    {
        "This Pokemon has a mysterious power, but can never remember using it because it enters an altered state of mind.": [
            "Psyduck.",
            "Slowpoke",
            "Wynaut.",
            "Munna."
        ]
    },
    {
        "The fastest swimmer of all Pokemon, it can swim through stormy seas to rescue people from ship wrecks.": [
            "Golduck.",
            "Poliwrath.",
            "Kyogre.",
            "Azumarill."
        ]
    },
    {
        "This Pokemon lives in treetop colonies.  If one becomes enraged, the entire colony will attack for no reason.": [
            "Mankey.",
            "Ambipom.",
            "Heracross.",
            "Combee."
        ]
    },
    {
        "This Pokemon is always furious, and it only calms down when nobody is around.": [
            "Primeape.",
            "Rampardos.",
            "Tauros.",
            "Bouffalant."
        ]
    },
    {
        "A brave and trustworthy Pokemon; it will stand up to bigger foes to protect its trainer.": [
            "Growlithe.",
            "Charmeleon.",
            "Eeee.",
            "Hitmonchan."
        ]
    },
    {
        "Though this Pokemon's skin is very thin, it is so flexible that even some fangs bounce off of it.": [
            "Poliwag.",
            "Lickilicky.",
            "Blissey.",
            "Munchlax."
        ]
    },
    {
        "This Pokemon can live in or out of water, but when it is out of water, it sweats constantly to keep its skin slimy.": [
            "Poliwhril.",
            "Toxicroak.",
            "Omanyte.",
            "Octillery."
        ]
    },
    {
        "This Pokemon's body is encased in extremely tough scales, and is strongest when it is defending its young.": [
            "Nidoqueen.",
            "Kangaskan.",
            "Blastoise.",
            "Avalugg."
        ]
    },
    {
        "It is said that happiness will come to those that see this Pokemon dancing in a group under the full moon.": [
            "Clefairy.",
            "Lunatone.",
            "Umbreon.",
            "Diancie."
        ]
    },
    {
        "This Pokemon's hearing is so keen that it can hear even a pin drop a mile away.  It lives in the mountains away from humans.": [
            "Clefable.",
            "Crobat.",
            "Diggersby.",
            "Espeon."
        ]
    },
    {
        "This Pokemon devours its prey after dousing it in toxic spores.": [
            "Vileplume.",
            "Victreebell.",
            "Breloom.",
            "Parasect."
        ]
    },
    {
        "This Pokemon grows mushrooms called tochukaso, which are highly valued as medicine.": [
            "Paras.",
            "Gloom.",
            "Tropius.",
            "Foongus."
        ]
    },
    {
        "This Pokemon practices every type of martial arts, and lifts Graveler to strengthen its muscles.": [
            "Machop.",
            "Pancham.",
            "Tyrogue.",
            "Makuhita."
        ]
    },
    {
        "This Pokemon is so strong, it can lift a dump truck with one arm.  It often helps people move heavy objects.": [
            "Machoke.",
            "Hariyama.",
            "Conkeldurr.",
            "Throh."
        ]
    },
    {
        "This Pokemon has mastered every kind of martial arts and can throw a thousand punches in two seconds.": [
            "Machamp.",
            "Hitmonchan.",
            "Mienshao.",
            "Medicham."
        ]
    },
    {
        "This Pokemon infests trees and drains their nutrients from the lower trunk and roots.": [
            "Parasect.",
            "Vespiquen.",
            "Phantump.",
            "Sewaddle."
        ]
    },
    {
        "This Pokemon lives in the shadows of trees, and it has clusters of tiny eyes.": [
            "Venonat.",
            "Ariados.",
            "Yanmega.",
            "Venipede."
        ]
    },
    {
        "This Pokemon preys on small insects that gather around streetlights at night.": [
            "Venomoth.",
            "Dustox.",
            "Beautifly.",
            "Scyther."
        ]
    },
    {
        "This Pokemon spends most of its time underground because the sun heats up its blood quickly, causing it to grow weak.": [
            "Diglett.",
            "Kabuto.",
            "Sandile.",
            "Palpitoad"
        ]
    },
    {
        "This Pokemon is said to be able to burrow through even the toughest ground to a depth of over 60 miles.": [
            "Dugtrio.",
            "Hippowdon.",
            "Sandslash.",
            "Excadrill."
        ]
    },
    {
        "This nocturnal Pokemon adores shiny, round objects.": [
            "Meowth.",
            "Noctowl.",
            "Murkrow.",
            "Sneasel."
        ]
    },
    {
        "This stealthy Pokemon can attack in an instant, but becomes docile if grabbed by the whiskers.": [
            "Persian.",
            "Pyroar.",
            "Delcatty.",
            "Glameow."
        ]  
    },
    {
        "This Pokemon has huge, round eyes and lulls its foes to sleep. When singing, it never stops to breathe.": [
            "Jigglypuff.",
            "Hoothoot.",
            "Spinda.",
            "Jynx."
        ]
    },
    {
        "This Pokemon has a very flexible body, and will suck in air to turn itself into an enormous balloon.": [
            "Wigglytuff.",
            "Chansey.",
            "Lickilicky.",
            "Audino."
        ]
    },
    {
        "This Pokemon has no eyes, but can see with the ultrasonic waves emitted from its mouth.": [
            "Zubat.",
            "Sliggoo.",
            "Tympole.",
            "Tynamo."
        ]
    },
    {
        "This Pokemon usually lives underground, where it moves at speeds of 50 miles per hour. It has a magnet in its brain.": [
            "Onix.",
            "Diglet.",
            "Excadrill.",
            "Durant."
        ]
    },
    {
        "This Pokemon hides in the shadows and absorbs people's heat at night.": [
            "Gengar.",
            "Litwick.",
            "Spiritomb.",
            "Sableye."
        ]
    },
    {
        "Lurking in the darkness, this Pokemon licks its victim with a gaseous tongue which steals its life force.": [
            "Haunter.",
            "Jynx.",
            "Frogadier.",
            "Lickitung."
        ]
    },
    {
        "With a body made of gas, this Pokemon can envelop an opponent of any size and cause suffocation.": [
            "Gastly.",
            "Koffing.",
            "Drifloon.",
            "Spiritomb."
        ]
    },
    {
        "This Pokemon swims by swallowing water then jetting it out toward the rear.": [
            "Cloyster.",
            "Blastoise.",
            "Azumarill.",
            "Horsea."
        ]
    },
    {
        "This Pokemon is only vulnerable when its shell is open, and it uses its broad tongue to burrow a hole in the seafloor.": [
            "Shellder.",
            "Slowbro.",
            "Shuckle.",
            "Clamperl."
        ]
    },
    {
        "This Pokemon's toxic fluid instantly kills plants and trees on contact.": [
            "Muk.",
            "Trubbish.",
            "Swalot.",
            "Venipede."
        ]
    },
    {
        "This Pokemon emerged from the sludge of a polluted seabed and has a rubbery body.": [
            "Grimer.",
            "Skrelp.",
            "Croagunk.",
            "Gulpin."
        ]
    },
    {
        "This Pokemon loves to snooze on bitterly cold ice. The sight of this Pokemon was mistaken to be a mermaid.": [
            "Dewgong.",
            "Jynx.",
            "Smoochum.",
            "Sneasel."
        ]
    },
    {
        "Covered with light blue fur, its hide is thick and tough. It lives on icebergs.": [
            "Seel.",
            "Articuno.",
            "Glalie.",
            "Amaura."
        ]
    },
    {
        "Once this Pokemon bites, it won't stop sucking blood until it's full.": [
            "Golbat.",
            "Garchomp.",
            "Venomoth.",
            "Absol."
        ]
    },
    {
        "This grass Pokemon grows in the moonlight and avoids the sun.": [
            "Oddish.",
            "Trevenant.",
            "Lileep.",
            "Treecko."
        ]
    },
    {
        "The honey that drips from this Pokemon's mouth smells so atrocious and can curl noses over a mile away.": [
            "Gloom.",
            "Muk.",
            "Trubbish.",
            "Combee."
        ]
    },
    {
        "This Pokemon attacks its prey on shore and immediately drags it back into the ocean:": [
            "Eelektross.",
            "Samurott.",
            "Jynx.",
            "Keldeo."
        ]
    },
    {
        "Which Pokemon's body temperature is approximately 18,000 degrees Fahrenheit?": [
            "Magcargo.",
            "Magmar.",
            "Darmanitan.",
            "Heatran."
        ]
    },
    {
        "This Pokemon started as a figurine made over 20,000 years ago. It was born when explosed to a mysterious ray of light": [
            "Claydol.",
            "Unknown.",
            "Spiritomb.",
            "Diancie."
        ]
    },
    {
        "Which Pokemon has a body harder than diamonds and can chew through boulders?": [
            "Steelix.",
            "Mawile.",
            "Aggron.",
            "Bastiodon."
        ]
    },
    {
        "This Pokemon hides in the darkness and eats gems.  It is rarely seen:": [
            "Sableye.",
            "Gible.",
            "Abra.",
            "Spiritomb."
        ]
    },
    {
        "Whenever this Pokemon comes across something new, it blasts it with a jolt of electricity.": [ 
            "Pikachu.",
            "Electabuzz.",
            "Jolteon.",
            "Voltorb."
        ]
    },
    {
        "This Pokemon was created after years of gene-splicing and DNA engineering.": [
            "Mewtwo.",
            "Mew.",
            "Deoxys.",
            "Dialga."
        ]
    },
    {
        "This Pokemon's DNA is said to have the genetic codes of all Pokemon, so it can use all kinds of techniques.": [
            "Mew.",
            "Ditto.",
            "Deoxys.",
            "Unown."
        ]
    },
    {
        "When this Pokemon is born, it has one snow-white tail.  The tail splits as it grows older.": [
            "Vulpix.",
            "Espeon.",
            "Zangoose.",
            "Cinccino."
        ]
    },
    {
        "This Pokemon is very smart and very vengeful. It can gain total control over its foe's mind using its bright red eyes.": [
            "Ninetales.",
            "Malamar.",
            "Alakazom.",
            "Dustox."
        ]
    },
    {
        "This small and docile Pokemon's female form has a smaller horn than its male counterpart.": [
            "Nidoran.",
            "Rhyperior.",
            "Tauros.",
            "Houndoom."
        ]
    },
    {
        "This Pokemon tucks away its barbs when around friend and family to avoid accidentally hurting a loved one.": [
            "Nidorina.",
            "Jolteon.",
            "Barboach.",
            "Ferrothorn."
        ]
    },
    {
        "This strong and skilled swimmer can cross the Pacific Ocean just by kicking:": [
            "Poliwrath.",
            "Frogadier.",
            "Palkia.",
            "Simipour."
        ]
    },
    {
        "Which Pokemon lives deep in the forest and plays a grass flute that makes listeners uneasy?": [
            "Nuzleaf.",
            "Serperior.",
            "Leavanny.",
            "Whimsicott."
        ]
    },
    {
        "Which Pokemon sings in an eerie voice that curses those who listen?": [
            "Gourgeist.",
            "Gastly.",
            "Misdreavus.",
            "Hoopa."
        ]
    },
    {
        "Once this Pokemon starts running, it won't stop until it hits something": [
            "Tauros.",
            "Rapidash.",
            "Dodrio.",
            "Rampardos."
        ]
    },
    {
        "This doll became a Pokemon over its grudge of being thrown away:": [
            "Banette.",
            "Sableye.",
            "Claydol.",
            "Spiritomb."
        ]
    },
    {
        "This Pokemon's body can withstand dynamite and sheds its hide once a year:": [
            "Golem.",
            "Seviper.",
            "Magcargo.",
            "Shuckle."
        ]
    },
    {
        "This Pokemon, though small, will challenge anyone. It is constantly nursing injuries from challenging larger foes:": [
            "Tyrogue.",
            "Hawlucha.",
            "Monferno.",
            "Mankey."
        ]
    },
    {
        "When it moves, it leaves only a blur. If it hides in the grass, its protective coloration makes it invisible": [
            "Scyther.",
            "Kecleon.",
            "Roserade.",
            "Sceptile."
        ]
    },
    {
        "This Pokemon ensnares its prey in its eight tentacles and melts them with strong acid before feeding:": [
            "Cradily.",
            "Tentecruel.",
            "Jellicent.",
            "Weepinbell."
        ]
    },
    {
        "This Pokemon's sharp fangs grow constantly, so it has to widdle them down by gnawing on hard objects.": [
            "Rattata.",
            "Pikachu.",
            "Zigzagoon.",
            "Patrat."
        ]
    },
    {
        "This Pokemon wanders around and is curious about everything it happens to see.": [
            "Zigzagoon.",
            "Furret.",
            "Dedenne.",
            "Aipom."
        ]
    },
    {
        "This Pokemon preys on bugs in grassy areas and flaps its short wings raplidly to stay airborne.": [
            "Spearow.",
            "Ninjask.",
            "Beedrill.",
            "Pidgey."
        ]
    },
    {
        "This Pokemon has large and magnificent wings, and it never has to land to rest.": [
            "Fearow.",
            "Ho-oh.",
            "Talonflame.",
            "Charizard."
        ]
    },
    {
        "The webs on this Pokemon's hind legs allow it to cross rivers.  It can gnaw through cinder walls.": [
            "Raticate.",
            "Bibarel.",
            "Watchog.",
            "Vaporeon."
        ]
    },
    {
        "This Pokemon is constantly gnawing on logs and rocks to widdle down its front teeth. It also has nerves of steel; nothing can disturb it.": [
            "Bidoof.",
            "Rattata.",
            "Patrat.",
            "Zigzagoon."
        ]
    },
    {
        "This Pokemon can completely freeze its fur to make its hairs stand up like needles:": [
            "Glaceon.",
            "Abomasnow.",
            "Beartic.",
            "Avalugg."
        ]
    },
    {
        "This Pokemon's excellent sense of smell allows it to find mushrooms buried under frozen ground": [
            "Piloswine.",
            "Donphan.",
            "Probopass.",
            "Cubchoo."
        ]
    },
    {
        "Because its fangs are too heavy, it always keeps its head tilted down": [
            "Granbull.",
            "Mamoswine.",
            "Stoutland.",
            "Steelix."
        ]
    },
    {
        "This legendary Chinese Pokemon is considered magnificent. Many people are enchanted by its grand mane": [
            "Arcanine.",
            "Ryekow.",
            "Entay.",
            "Pyroar."
        ]
    },
    {
        "This Pokemon has a secret, devastating move. It rubs its blazing fur together to cause huge explosions": [
            "Typhlosion.",
            "Camerupt.",
            "Heatran.",
            "Entay."
        ]
    },
    {
        "This Pokemon species can see the future from the movement of the stars": [
            "Gothitelle.",
            "Musharna.",
            "Zekrom.",
            "Celebi."
        ]
    },
    {
        "With incredible jaw power, it can bite apart foes while flying by at a high speed": [
            "Yanmega.",
            "Aerodactyl.",
            "Fearow.",
            "Rayquaza."
        ]
    },
    {
        "When volcanic ash darkened the atmosphere, which Pokemon's fire provided a replacement for the sun?": [
            "Volcarona.",
            "Heatran.",
            "Camerupt.",
            "Talonflame."
        ]
    },
    {
        "This marine Pokemon is said to have intelligence matching that of humans": [
            "Dragonite.",
            "Simipour.",
            "Poliwhirl.",
            "Golduck."
        ]
    },
    {
        "This Pokemon is known as the guardian of the fields because it grants bountiful crops to lands it has visited": [
            "Landorus.",
            "Tropius.",
            "Bellossom.",
            "Meganium."
        ]
    },
    {
        "This Pokemon is so quick, it is said to be able to avoid any attack.  It loves to feed on tree sap": [
            "Ninjask.",
            "Shedinja.",
            "Greninja.",
            "Electivire."
        ]
    },
    {
        "When stars flicker in the night sky, the patterns on this Pokemon's back grow larger or smaller": [
            "Ledian.",
            "Noctowl.",
            "Sableye.",
            "Murkrow."
        ]
    },
    {
        "This Pokemon is said to evolve after eating an entire mountain worth of soil": [
            "Larvitar.",
            "Phanpy.",
            "Diglett.",
            "Geodude."
        ]
    },
    {
        "This Pokemon can fly at sonic speeds when it folds up its body and extends its wings": [
            "Garchomp.",
            "Salamence.",
            "Sigilyph.",
            "Tornadus."
        ]
    },
    {
        "This Pokemon is known to stand in one spot and stare at the sun all day long": [
            "Xatu.",
            "Slowpoke.",
            "Shuckle.",
            "Tangrowth."
        ]
    },
    {
        "Which Pokemon lives in the mountains and hides itself by whipping up blizzards?": [
            "Abomasnow.",
            "Glaceon.",
            "Tornadus.",
            "Froslass."
        ]
    },
    {
        "This Pokemon sleeps for eighteen hours a day, or else it loses its ability to use telekinetic powers.": [
            "Abra.",
            "Snorlax.",
            "Musharna.",
            "Lunatone."
        ]
    },
    {
        "This Pokemon can sense imminent disasters and warns people of danger.": [
            "Absol.",
            "Gardevoir.",
            "Kadabra.",
            "Xatu."
        ]   
    },
    {
        "This evolved Pokemon removed its shell and fights with ninja-like movements.": [
            "Accelgor.",
            "Ninjask.",
            "Shedinja.",
            "Greninja."
        ]
    },
    {
        "This Pokemon has slept hundreds of millions of years and is sometimes found during the excavation of caves.": [
            "Carbink.",
            "Lunatone.",
            "Solrock.",
            "Aerodactyl."
        ]
    },
    {
        "The weakest dragon-type Pokemon; it lives in damp, shady places.": [
            "Goomy.",
            "Gible.",
            "Dratini.",
            "Larvitar."
        ]
    },
    {
        "This Pokemon uses its four horns as an advanced radar system because it can't see anything.": [
            "Sliggoo.",
            "Rhyhorn.",
            "Golbat.",
            "Houndoom."
        ]
    },
    {
        "Generations of kings were attended by this Pokemon, which can manipulate and control both people and Pokemon.": [
            "Aegislash.",
            "Kingdra.",
            "Arceus.",
            "Dusknoir."
        ]
    },
    {
        "This fossil Pokemon is regenerated from amber.": [
            "Aerodactyl.",
            "Kabuto.",
            "Omanyte",
            "Geodude"
        ]
    },
    {
        "This Pokemon claims an entire mountain as its territory, and will attack anything that violates its environment.": [
            "Aggron.",
            "Dugtrio.",
            "Donphan.",
            "Golem."
        ]
    },
    {
        "This Pokemon has clumsy hands because it uses its tail so much.": [
            "Aipom.",
            "Ninetales.",
            "Raichu.",
            "Spoink."
        ]
    },
    {
        "This Pokemon is said to have an IQ around five thousand.": [
            "Alakazam.",
            "Dragonite.",
            "Xatu.",
            "Giratina"
        ]
    },
    {
        "This Pokemon moves silently and stealthily, and it eats the eggs of Pidgey and Spearow whole.": [
            "Ekans",
            "Seviper.",
            "Gulpin.",
            "Mandibuzz."
        ]
    },
    {
        "Weak foes will flee at the sight of this Pokemon at the first sight of the scary pattern on its chest.": [
            "Arbok.",
            "Seviper.",
            "Xatu",
            "Sigilyph"
        ]
    },
    {
        "This Pokemon creates infinite energy, and its body is overflowing with power.": [
            "Victini.",
            "Arceus.",
            "Dragonite.",
            "Xerneas."
        ]
    },
    {
        "This Pokemon is said to have been born before the universe existed.": [
            "Arceus.",
            "Victini.",
            "Carbink.",
            "Deoxys."
        ]
    },
    {
        "This Pokemon can dissolve toxins in the air to turn ruined land into a lush field of flowers.": [
            "Shaymin.",
            "Xerneas.",
            "Bellossom.",
            "Meganium."
        ]
    },
    {
        "This Pokemon's ritual dance is said to summon the sun.": [
            "Bellossom.",
            "Sunkern.",
            "Solrock.",
            "Groudon."
        ]
    },
    {
        "This Pokemon heals wounded Pokemon in the sea.": [
            "Alomomola.",
            "Luvdisc.",
            "Manaphy.",
            "Phione."
        ]
    },
    {
        "It is said that any couple that meets this Pokemon is promised a loving relationship that never ends.": [
            "Luvdisc.",
            "Jynx.",
            "Alomomola.",
            "Blissey."
        ]
    },
    {
        "This Pokemon's ribbon-like feelers increase its psychic power.": [
            "Gothita.",
            "Musharna.",
            "Shuckle.",
            "Malamar."
        ]
    },
    {
        "Starlight is the source of this Pokemon's power. It controls sleeping children on starry nights.": [
            "Gothorita.",
            "Golbat.",
            "Lunatone.",
            "Staravia."
        ]
    },
    {
        "Singing in a beautiful soprano, this Pokemon makes you feel like you're in a dream.": [
            "Altaria.",
            "Jigglypuff.",
            "Bellossom.",
            "Clefable."
        ]
    },
    {
        "This Pokemon is Seviper's archrival.": [
            "Zangoose.",
            "Arbok.",
            "Charizard.",
            "Pidgeot."
        ]
    },
    {
        "This Pokemon uses its bladed tail to counter Zangoose.": [
            "Seviper.",
            "Skorupi.",
            "Aggron.",
            "Torterra."
        ]
    },
    {
        "This Pokemon attacks with retractable horns and can throw a punch with the force of a hundred boxers.": [
            "Goodra.",
            "Hitmonchan.",
            "Hariyama.",
            "Druddigon."
        ]
    },
    {
        "This Pokemon's poison stinger is very powerful.  Its bright body is intended to warn off its enemies.": [
            "Weedle.",
            "Skorupi.",
            "Nidorino.",
            "Roselia."
        ]
    },
    {
        "This Pokemon is almost incapable of moving, and just hardens its shell when it is being attacked.": [
            "Kakuna.",
            "Shellder.",
            "Clampearl.",
            "Aron."
        ]
    },
    {
        "This Pokemon has three poison stingers and can appear in a swarm.": [
            "Beedrill.",
            "Ariados.",
            "Ninjask.",
            "Scolipede."
        ]
    },
    {
        "A common Pokemon that flaps its wings at ground level to kick up sand.": [
            "Pidgey.",
            "Swellow.",
            "Flygon.",
            "Farfetch'd."
        ]
    },
    {
        "Turning active on nights of the full moon, this Pokemon is said to have a link to the lunar phases.": [
            "Lunatone.",
            "Clefable.",
            "Wifflytuff.",
            "Umbreon."
        ]  
    },
    {
        "This Pokemon is said to have fallen from space, floats silently through the air, and gives off intense heat when rotating its body.": [
            "Solrock.",
            "Espeon.",
            "Bellossom.",
            "Deoxys."
        ]  
    },
    {
        "A strange seed was planted on its back during birth.  The plant sprouts and grows with this Pokemon.": [
            "Bulbasaur.",
            "Turtwig.",
            "Oddish.",
            "Larvesta."
        ]  
    },
    {
        "This Pokemon's legs and trunk grow thick to support the bud on its back.": [
            "Ivysaur.",
            "Venusaur.",
            "Budew.",
            "Roserade."
        ]
    },
    {
        "After it rains, this Pokemon's flower smells strong and attracts other Pokemon.": [
            "Venusaur.",
            "Roserade.",
            "Cherrim.",
            "Sunflora."
        ]
    },
    {
        "This Pokemon's burning flame is an indication of its emotions as well as its life force": [
            "Charmander.",
            "Litwick.",
            "Ponyta.",
            "Cyndaquil."
        ]
    },
    {
        "This timid Pokemon protects itself using the flames on its back.": [
            "Cyndaquil.",
            "Flareon.",
            "Ponyta.",
            "Torkoal."
        ]
    },
    {
        "This Pokemon turns its back to its foe to show off its flames before battle.": [
            "Quilava.",
            "Rapidash.",
            "Heatran.",
            "Torkoal."
        ]
    },
    {
        "This Pokemon's shell has grooves to limit its resistance to water, allowing it to swim at high speeds.": [
            "Squirtle.",
            "Shellder.",
            "Clampearl.",
            "Shellgon."
        ]
    },
    {
        "This Pokemon is said to live 10,000 years, and its furry tail is a symbol of its longevity.": [
            "Wartortle.",
            "Arceus.",
            "Entei.",
            "Ursaring."
        ]
    },
    {
        "This Pokemon will crush foes with its heavy body, but can withdraw into its shell in a pinch.": [
            "Blastoise.",
            "Shellgon.",
            "Cloyster.",
            "Lairon."
        ]  
    },
    {
        "For protection, this Pokemon releases a horrible stench from the antennae on its head to drive away enemies.": [
            "Caterpie.",
            "Trubbish.",
            "Vileplume.",
            "Whimsicott."
        ]
    },
    {
        "A steel-hard shell protects this Pokemon's body. It will quietly endure attacks until it is ready to evolve.": [
            "Metapod.",
            "Aron.",
            "Clampearl.",
            "Shellder."
        ]
    },
    {
        "This Pokemon's wings are protected by a rain-repellant dust, so it has no problems flying in the rain.": [
            "Butterfree.",
            "Swanna.",
            "Pelipper.",
            "Articuno."
        ]  
    },
    {
        "This Pokemon mercilessly destroys its foes with its sharp claws and tough tail.": [
            "Charmeleon.",
            "Zangoose.",
            "Tailow.",
            "Aggron."
        ]
    },
    {
        "This Pokemon can fly at an altitude of 4,600 feet, and it never turns its fiery breath on any opponent weaker than itself.": [
            "Charizard.",
            "Ho-oh.",
            "Moltres.",
            "Talonflame."
        ]
    },
    {
        "This Pokemon can quickly scale vertical walls and sense humidity with its tail to predict the weather.": [
            "Treecko.",
            "Castform.",
            "Greninja.",
            "Lucario."
        ]
    },
    {
        "This Pokemon has strong thigh muscles and is a master of climbing trees in jungles.": [
            "Grovyle.",
            "Mankey.",
            "Aipom.",
            "Toxicroak."
        ]
    },
    {
        "This Pokemon's leaves are as sharp as swords, and the seeds on its back can revitalize trees.": [
            "Sceptile.",
            "Torterra.",
            "Bellossom.",
            "Tangela."
        ]
    },
    {
        "This Pokemon follows close behind its trainer with unsteady steps, and it is very warm when hugged.": [
            "Torchic.",
            "Spinda.",
            "Pignite.",
            "Cyndaquil."
        ]
    },
    {
        "This Pokemon can kick 10 times per second and intimidates foes with sharp cries.": [
            "Combusken.",
            "Hitmonlee.",
            "Hitmontop.",
            "Sawk."
        ]
    },
    {
        "This fire type Pokemon can clear a 30-story building in a single leap.": [
            "Blaziken.",
            "Houndoom.",
            "Infernape.",
            "Pyroar."
        ]  
    },
    {
        "This Pokemon blows out dense steam and disappears into the fog. It lives in the mountains where humans don't tread.": [
            "Volcanion.",
            "Heatran.",
            "Torkoal.",
            "Magcargo."
        ]
    },
    {
        "This Pokemon sleeps under the sea and can blow apart houses by flapping its wings.": [
            "Lugia.",
            "Pelipper.",
            "Palkia.",
            "Kyogre."
        ]
    },
    {
        "This Pokemon busies itself by making nests of branches and roots cut up by its sharp incisors.": [
            "Bibarel.",
            "Scyther.",
            "Ledyba.",
            "Beedrill."
        ]
    },
    {
        "This Pokemon is said to appear to doomed people lost in icy mountains.": [
            "Articuno.",
            "Beartic.",
            "Moltres.",
            "Froslass."
        ]
    },
    {
        "By freezing its breath, this Pokemon creates claws and fangs to survive in the harsh North.": [
            "Beartic.",
            "Abomasnow.",
            "Kyurem.",
            "Avalugg."
        ]
    },
    {
        "This Pokemon was created by the energy of the morning light on icicles.": [
            "Vanillite.",
            "Froslass.",
            "Bergmite.",
            "Snorunt."
        ]
    },
    {
        "During the ancient ice age, this Pokemon moved to southern areas.": [
            "Vanillish.",
            "Ursaring.",
            "Jynx.",
            "Seel."
        ]
    },
    {
        "Swallowing large amounts of water, this Pokemon makes snow clouds inside its body and can cause blizzards.": [
            "Vanilluxe.",
            "Lugia.",
            "Cloyster.",
            "Lapras."
        ]
    },
    {
        "This Pokemon rarely fights, is very intelligent, and is known for carrying humans on its back.": [
            "Lapras.",
            "Torterra.",
            "Dragonite.",
            "Pidgeot."
        ]
    },
    {
        "This Pokemon can reconstitute its cellular structure, often relying on its memory to get its new form right.": [
            "Ditto.",
            "Grimer.",
            "Deoxys.",
            "Mew."
        ]
    },
    {
        "This rare Pokemon adapts to harsh environments by taking on many evolutionary forms.  It has unstable genetic makeup.": [
            "Eevee.",
            "Castform.",
            "Gastly.",
            "Ditto."
        ]
    },
    {
        "This Pokemon produces clean air when it sleeps in a patch of sunshine.": [
            "Leafeon.",
            "Venusaur.",
            "Virizion.",
            "Sunflora."
        ]  
    },
    {
        "This Pokemon can use its feelers to send a soothing aura and calm fights.": [
            "Sylveon.",
            "Xerneas.",
            "Togekiss.",
            "Florges."
        ]
    },
    {
        "Though this Pokemon has a small body, it can keep up with the strongest fighters like Machamp and Hariyama.": [
            "Hawlucha.",
            "Machop.",
            "Tyrogue.",
            "Primeape."
        ]
    },
    {
        "This Pokemon's whiskers serve as antennas, allowing it to communicate with other Pokemon over vast distances.": [
            "Dedenne.",
            "Pikachu.",
            "Pachirisu.",
            "Persian."
        ]
    },
    {
        "This Pokemon's bristly fur is made up of electrically charged needles.": [
            "Jolteon.",    
            "Raichu.",
            "Dedenne.",
            "Electabuzz."
        ]
    },
    {
        "Because its cells are so similar to that of water molecules, it can invisibly melt away when swimming.": [
            "Vaporeon.",
            "Castform.",
            "Gorebyss.",
            "Tynamo."
        ]
    },
    {
        "This Pokemon alone isn't able to emit much electricity, but a group will unleash a powerful shock.": [
            "Tynamo.",
            "Electivire.",
            "Eelektross.",
            "Dedenne."
        ]
    },
    {
        "Wrapping itself around its prey, this Pokemon will paralyze it's victim with an electric shock before it chomps.": [
            "Eelektrik",
            "Lanturn.",
            "Arbok.",
            "Heliolisk."
        ]
    },
    {
        "This Pokemon's fluffy fur releases heat into the air so its body doesn't overheat.": [
            "Flareon.",
            "Ninetails.",
            "Mareep.",
            "Blaziken."
        ]
    },
    {
        "This Pokemon's tail quivers when it is predicting its opponent's next move.": [
            "Espeon.",
            "Mewtwo.",
            "Wobbuffet.",
            "Girafarig."
        ]
    },
    {
        "The rings on this Pokemon's body glow as it bathes in the aura of the moon.": [
            "Umbreon.",
            "Cresselia.",
            "Absol.",
            "Lunatone."
        ]
    },
    {
        "Using its feelers, this Pokemon can emit a soothing aura and calm fights.": [
            "Sylveon.",
            "Florges.",
            "Gardevoir.",
            "Togekiss."
        ]
    },
    {
        "Though its body is small, it can keep up with even the strongest fighters like Machamp and Hariyama.": [
            "Hawlucha.",
            "Machop.",
            "Tyrogue.",
            "Primeape."
        ]
    },
    {
        "This Pokemon's whiskers serve as antennas, allowing this Pokemon to communciate with others over vast distances.": [
            "Dedenne.",
            "Pikachu.",
            "Meowth.",
            "Pachirisu."
        ]
    },
    {
        "This Pokemon preys on Exeggcute with its well-developed claws.": [
            "Pidgeotto.",
            "Zangoose.",
            "Charmeleon.",
            "Unfezant."
        ]
    },
    {
        "This Pokemon skims the surface of water at a high speed and preys on Magikarp.": [
            "Pidgeot.",
            "Surskit.",
            "Swanna.",
            "Pelipper."
        ]
    },
    {
        "Known as a messenger Pokemon, it can swallow all of its food in one big gulp.": [
            "Pelipper.",
            "Gulpin.",
            "Exploud.",
            "Taillow."
        ]
    },
    {
        "Disliking water, this Pokemon lives in deep burrows in arid areas.": [
            "Sandshrew.",
            "Diglett.",
            "Graveler.",
            "Relicanth."
        ]
    }
    
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

    if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.34b4784b-1abc-4011-bf8d-6bdddb056671") {
        context.fail("Invalid Application ID");
     }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Trivia for Pokemon"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Trivia for Pokemon. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}