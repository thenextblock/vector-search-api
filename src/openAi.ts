// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

import { Config } from "./Config";

const openai = new OpenAI({
  apiKey: Config.OPENAI_API_KEY,
});

(async () => {
  const response = await openai.chat.completions.create({
    stream: false,
    model: "gpt-3.5-turbo-16k",
    messages: [
      {
        role: "user",
        content:
          '{"model":"gpt-4","messages":[{"role":"system","content":"You are a helpful, friendly, assistant."},{"role":"user","content":"Use the following pieces of context to answer the question at the end. If you don\'t know the answer, just say that you don\'t know, don\'t try to make up an answer. \\n\\n\\n\\n\\n           \\n\\n\\n\\n\\n          Question: What is proposer & builder separation ?  \\n\\n\\n  \\n Helpful Answer\\n   "}],"max_tokens":8000,"temperature":0,"stream":true}\n\n\n"Use the following pieces of context to answer the question at the end. If you don\'t know the answer, just say that you don\'t know, don\'t try to make up an answer. \\n\\n\\n\\n\\n          \\n -Author: @thatguy :\\n Are you a searcher?\\n\\n -Author: @Gooby :\\n can you consider yourself a searcher?\\n\\n -Author: @Patrick shu :\\n Does anyone knwo who is the best scearcher in this channel?\\n\\n -Author: @Deleted User :\\n searcher: the one always searching for answers\\n\\n -Author: @Sway :\\n hello, whats a searcher? \\n -Reply by @DeGatchi : someone that looks up shit on google\\n\\n -Author: @Pebbles :\\n So what is a searcher?\\n\\n -Author: @2313211323 :\\n any tips & tricks for an aspiring searcher ?\\n\\n -Author: @alcibiades :\\n So, are you a searcher or an ex-searcher?\\n\\n -Author: @thogard :\\n which searcher comes out ahead?\\n\\n -Author: @icyicy :\\n shit.. what do you know about other searchers though ?\\n\\n -Author: @Shunshow :\\n if you start saying I wanna be the best searcher then you have infinite drive\\n\\n -Author: @splices0 :\\n then its all about who can search better faster...and I think I have that covered pretty fiercely\\n\\n -Author: @Shunshow :\\n we are searchers bro\\n\\n -Author: @Vinzent :\\n Not sure what the average searcher is \\n -Reply by @mes0x : lets call it 5+ hours a day doing searching work\\n\\n -Author: @harpaljadeja.eth :\\n What is a searcher? 😅 \\n -Reply by @thogard : Gotta find the MEV 👀\\n\\n -Author: @Guym :\\n New here. What is a searcher?\\n\\n -Author: @Shunshow :\\n Yeah searchers life is stressing and it\'s a constant competition\\n\\n -Author: @Patrick shu :\\n Scearcher?\\n\\n -Author: @Shunshow :\\n But, thats not easy at all to be a searcher, you need talent and hard work\\n\\n -Author: @Loki :\\n Do we know what most searchers are like? Big company vs small teams vs individuals? Part time vs full time? How much money they made so far? I\'m often asking myself these questions about my competitors...\\n\\n -Author: @sdeadalus :\\n What is the best thing to read to get started learning about opportunities for searchers?\\n\\n -Author: @Forexxtreme :\\n Is it profitable to be a searcher ?\\n\\n -Author: @Combine :\\n Curious, is anyone here a full-time searcher?\\n\\n -Author: @breeze :\\n damn it feels good to be a searcher\\n\\n -Author: @Ani :\\n Not that its easy to be a searcher\\n\\n -Author: @Gooby :\\n The struggle of searchers 🫂\\n\\n -Author: @snoopy :\\n so you can\'t argue for it if you are one of the successful searchers\\n\\n -Author: @Christopher :\\n there\'s hundreds of searchers\\n\\n -Author: @0xa1fa :\\n which searcher?\\n\\n -Author: @GnomeLeonid :\\n who is a profitable searcher raise a hand \\n -Reply by @7citty7 : 🙅\\n\\n -Author: @birdboi :\\n what do yall enjoy the most about searching? \\n -Reply by @YannickCrypto : The competition \\n -Reply by @RAinUsTa : .... dont u mean the frendships?\\n\\n -Author: @hi youy :\\n What\'s up searcher\\n\\n -Author: @yascha :\\n jeff bezos, the ultimate searcher\\n\\n -Author: @VirtualDOM :\\n Question for the more experienced searchers\\n\\n -Author: @Stalkopat :\\n To show my superiority to other searchers\\n\\n -Author: @Patrick shu :\\n quality of life >> \\n -Reply by @qun : You have no quality of life once you\'re a searcher. 😉\\n\\n -Author: @n0k0 :\\n Thats the kind of searcher that inspires me 😍\\n\\n -Author: @Riposte :\\n They don\'t call us searchers for nothing!\\n\\n -Author: @harpaljadeja.eth :\\n And why do we call it searcher \\n -Reply by @Nathan_ : The term \\"searcher\\" was coined as a nod to the despair of the human condition, being driven as sentient beings to continuously \\"search\\" for meaning, in a cold and unyielding universe which will never provide us with the satisfaction we seek.\\n\\n -Author: @ren :\\n what is a searcher \\n -Reply by @h3ku : Google.com, some people uses bing too (jokes aside a piece of code that search for MEV opportunities)\\n\\n -Author: @caravaggio :\\n do ppl enjoy searching?\\n\\n -Author: @Shunshow :\\n So you\'re biased because successful searcher are here\\n\\n -Author: @ofcoursebutmaybe :\\n so how many searchers are there at the moment? \\n -Reply by @jole : 1 \\n -Reply by @breeze : probably 350 \\n -Reply by @ofcoursebutmaybe : ok ok philosphical answer...\\n\\n -Author: @nekiv :\\n are you a solo searcher?\\n\\n -Author: @breeze :\\n what if he doesn\'t even know he\'s a searcher?\\n\\n -Author: @Gooby :\\n and an active searcher\\n\\n -Author: @Stalkopat :\\n They are founded by successful searchers\\n\\n -Author: @Nathan_ :\\n Oracles, users, searchers\\n\\n -Author: @hi youy :\\n hello searcher\\n\\n -Author: @Patrick shu :\\n Searchers has been quite lately\\n\\n -Author: @Reece :\\n good afternoon, Searchers\\n\\n -Author: @Shunshow :\\n I work way harder as a searcher than at my previous job though\\n\\n -Author: @mteam88 :\\n and searchers too\\n\\n -Author: @liquiditygoblin :\\n just a lurker \\n -Reply by @Patrick shu : the way you\'re taking, you are an active person, ig we\'ll never know \\n -Reply by @breeze : the best kind of searcher\\n\\n -Author: @0xSachin :\\n I was here in feb trying to become a searcher\\n\\n -Author: @RebeccaReject :\\n WHO IS A SEARCHER FROM THIS THREAD?\\n\\n -Author: @botcmiller :\\n its definitely a searcher\\n\\n -Author: @RAinUsTa :\\n U never seem a friendly searcher before?\\n\\n -Author: @Ani :\\n compared to a regular person becoming a searcher\\n\\n -Author: @Patrick shu :\\n asking some real scearchers\\n\\n -Author: @Nathan_ :\\n Thinking you are the most intelligent person in the entire world is not a good bet as a searcher\\n\\n -Author: @alcibiades :\\n How many searchers out there do this full time?\\n\\n -Author: @godel :\\n leave it to the real searchers plz\\n\\n -Author: @Deleted User :\\n experienced searching\\n\\n -Author: @breeze :\\n the mindset of a searcher is very interesting to me\\n\\n -Author: @Deleted User :\\n Does anyone know who the top indexer is?\\n\\n -Author: @qun :\\n Like searchers?\\n\\n -Author: @brucecarl :\\n I think more searchers are in and more competitive\\n\\n -Author: @Deleted User :\\n Hey, what do I need to run a searcher and profit from It?\\n\\n -Author: @Debugged :\\n Top searchers dont have this issue?\\n\\n -Author: @Explorer :\\n Do you guys now all have to google the answer?\\n\\n -Author: @Deleted User :\\n Or, do I need to assume that sooner or later traders will always compete with each other and a searcher is a means to guarantee as much profit as possible?\\n\\n -Author: @thogard :\\n And the searcher also shit posts here \\n -Reply by @reborn : A real searcher finds opportunities and talks about them here ;) \\n -Reply by @Deleted User : A top searcher also provides sample code and detailed documents about them\\n\\n -Author: @KeYee :\\n as a searcher, by the way\\n\\n -Author: @Chs2 (I don’t answer dms) :\\n the searchers here are all pros\\n\\n -Author: @0x2 :\\n well, \\"searchers\\"\\n\\n -Author: @yascha :\\n Or a bored searcher 😂\\n\\n -Author: @nrv :\\n Searcher achievement maybe?\\n\\n -Author: @breeze :\\n there are bigger searchers in the sea, like politicians\\n\\n -Author: @etant :\\n is it just mostly individual searchers?\\n\\n -Author: @breeze :\\n wouldn\'t say smart I\'m just a good searcher :cheer:\\n\\n -Author: @Shunshow :\\n Most of the time it is faster finding by yourself than ask 😉 \\n -Reply by @Jack Ma : If the method is right ! You are a good and helpful person !\\n\\n -Author: @Stalkopat :\\n Senior searcher is poor?\\n\\n -Author: @thegostep :\\n It breaks your searcher?\\n\\n -Author: @valu :\\n waste 1000 hours trying to become a searcher\\n\\n -Author: @thegostep :\\n Did you read the searcher guide?\\n\\n -Author: @breeze :\\n are you guys searching for mev or for other searchers?\\n\\n -Author: @breeze :\\n i really think there are like 100 searchers\\n\\n -Author: @brian! :\\n be a searcher they said, it will be profitable they said\\n*you definitely won\'t subjected to intricate psychological operations they said*\\n\\n -Author: @joaorcsilva :\\n yes searchers\\n\\n -Author: @🔭 . :\\n I know what CT thinks I want to know what searchers think\\n\\n -Author: @breeze :\\n the new generation of searchers are no different than us 😄\\n\\n -Author: @Shunshow :\\n To succeed in MEV you have to \\"search\\" and most people don\'t like to search \\n -Reply by @breeze : this is pretty much the cream of the crop nail on the head\\n\\n -Author: @Grapebenice :\\n Any good resources for learning more on searching? How did you guys gain more knowledge? I\'m just looking to learn\\n\\n -Author: @IEatBabies :\\n Is edgar a searcher here?\\n\\n -Author: @shabbiryk :\\n they\'re the top searchers on this server\\n\\n -Author: @Stalkopat :\\n Poor searcher\\n\\n -Author: @ragnar_mb :\\n Whats a current search that you would do?\\n\\n -Author: @Shunshow :\\n when you search , do you write everything in a book, or do you have 20 tabs opened \\n -Reply by @Stalkopat : When you search, how much of your attention is devoted to searching\\n\\n -Author: @DeGatchi :\\n why do searchers need to be fast + have maximum optimisation to compete with one another? \\n -Reply by @meridian (Sam Bacha) : Opportunities are ephemeral\\n\\n -Author: @RAinUsTa :\\n Or did u mean anon searcher peoples?\\n\\n -Author: @cally :\\n A searcher can also be a miner... ok...\\n\\n -Author: @Gooby :\\n you\'re not a searcher\\n\\n -Author: @vagabond :\\n only advanced searchers\\n\\n -Author: @thogard :\\n The searcher is the guy who builds the bot\\n\\n -Author: @vagabond :\\n there\'s no experienced searchers\\n\\n -Author: @alcibiades :\\n Searchers...\\n\\n -Author: @Zero1337 :\\n What are the benefits of collaborating with other searchers, beyond colluding to lower bids? \\n -Reply by @alcibiades : I\'d have to say that a lot of the best searchers are teams, right? \\n -Reply by @0x2 : naw i still do my own thing\\n\\n -Author: @RAinUsTa :\\n so... every day could be ur last day as a successful searcher \\n -Reply by @Stan : Yes, but if you make enough money in a short period as a searcher, youll have enough time to find something new id say\\n\\n -Author: @Reece :\\n How many people is that for searchers\\n\\n -Author: @Shunshow :\\n google will be your best friend ; everything is out there\\n\\n -Author: @0xfadedface :\\n if so very good news for all searchers\\n\\n -Author: @KeesVlees :\\n best indexer atm?\\n\\n -Author: @alcibiades :\\n Well, call me a searcher, keeper, whatever.\\n\\n -Author: @h3ku :\\n Mad respect to that searcher \\n -Reply by @Greg_Vardy : nom nom nom nom\\n\\n -Author: @johndoe :\\n Who is the best Indexers, pls im new here \\n -Reply by @koen84 : I invite you to have a look at mind-heart-soul.eth indexers.\\n\\n -Author: @hi youy :\\n Do searchers plays games videos?\\n\\n -Author: @duality :\\n I am not a searcher. But I figured this would be a good place to ask.\\n\\n -Author: @Dave the fren :\\n or more it\'s just that there\'s different skills at being a searcher vs. an arbitrager\\n\\n -Author: @0xa1fa :\\n funny using the term \\"professional\\" and \\"searcher\\" in the same sentence 😉\\n\\n -Author: @yuyu2023 :\\n Hi everyone, have a general question about searching. Are successful searchers building their only liquidity sourcing algorithms or rely the existing liquidity aggregators?\\n\\n -Author: @Patrick shu :\\n Popular scearchers\\n\\n -Author: @Deleted User :\\n christmas gift for searchers\\n\\n -Author: @0xa1fa :\\n prolly the best deal for searchers anywhere\\n\\n -Author: @dyed :\\n The most profitable searcher I knew was on an obscure alt L1 with no documentation and he didn\'t have any competition\\n\\n -Author: @Gooby :\\n (Congrats if it\'s a searcher in here)\\n\\n -Author: @breeze :\\n they are functioning searchers\\n\\n -Author: @kenpachswapsmartbio :\\n Who is the indexer the most active in the community ? \\n -Reply by @tsunami0719 : You have to do a little bit of research on that\\n\\n -Author: @CactusByte :\\n it would be nice to make a team to develop a searcher\\n\\n -Author: @0x2 :\\n smart searcher or just weird\\n\\n -Author: @0xAbloh :\\n Gm everyone, new to searchers so will just observe for a while. Glad to be among you smart people.\\n\\n -Author: @StellarStoic :\\n I just throw this question before I go to work. I\'ll look at it later if there are any answers. If you were in a position to chose an indexer. How will you choose one from hundreds of them?  Is choosing one of the top 10 at reward rank is a smart idea?\\n\\n -Author: @Stalkopat :\\n Obviously a successfull searcher can make a company out of it\\n\\n -Author: @birdboi :\\n hey do searchers spend more time coding or more time on math?\\n\\n -Author: @Patrick shu :\\n if you are going solo then you will have to be better than others in intellect. A searcher i know started programming 1 year before mev and he was in bsc in the golden days + still is winning really well \\nhe combines long + short tail strats \\n -Reply by @Vinzent : I ❤️ the solo way\\n\\n -Author: @Bor420 :\\n hello guys I’m new to MEV is there any kinds of resources for me to read to become a searcher?\\n\\n -Author: @Stalkopat :\\n I bet most searchers feel similar\\n\\n -Author: @JuanCarlos :\\n is there any good info on how to start setting up a searcher?\\n\\n -Author: @breeze :\\n there just aren\'t enough searchers\\n\\n -Author: @breeze :\\n \\"searcher\\" not \\"asker\\"\\n\\n -Author: @yascha :\\n hello searchers\\n\\n -Author: @botcmiller :\\n there\'s a lot of searchers who are profitable\\n\\n -Author: @swawberry12 :\\n Hi searchers\\n\\n -Author: @Stalkopat :\\n especially not any competing searcher\\n\\n -Author: @Deleted User :\\n for searchers, its 300%\\n\\n -Author: @Patrick shu :\\n I know the most polite scearcher in the world\\n\\n -Author: @Karl :\\n yeah, stalkopat is one of the best searchers here\\n\\n -Author: @k-barbeque :\\n hello searchers\\n\\n -Author: @arianon :\\n for a so called experienced searcher\\n\\n -Author: @0xgoku :\\n I want to see an example of a searcher\\n\\n -Author: @7811 :\\n will the merge be good for the searchers?\\n\\n -Author: @siddharth999 :\\n Im begginer,\\nDo i have to understand geth properly for become searcher in this space??\\n\\n -Author: @RAinUsTa :\\n not even a full time searcher yet \\n -Reply by @arianon : sir it\'s 3 o\'clock on a wednesday\\n\\n -Author: @KeesVlees :\\n best indexer atm? \\n -Reply by @liray : It is very difficult question.\\n1. Activity on discord or forum, 2. Good responsiveness for communication, 3. Future plan....\\n\\n -Author: @kuro.eth :\\n nothing, I think he meant searcher.\\n\\n -Author: @Al Falafels :\\n (i am some searchers)\\n\\n -Author: @0xdapper :\\n i wonder how many of these competitive programmers would actually make for good searchers\\n\\n -Author: @hi youy :\\n 90 WPM n you searcher ? \\n -Reply by @0x2 : no 150wpm??? \\n -Reply by @hi youy : 😮\\n\\n -Author: @Gooby :\\n If you\'re serious about learning, go to the top right and search for all your questions\\n\\n -Author: @0x_doc_mach :\\n such a weird human trait \\n -Reply by @valu : searching is a skill\\n\\n -Author: @Stan :\\n Now it\'s shared amongst the searchers\\n\\n -Author: @FXHVM :\\n What do searchers actually do? \\n -Reply by @jole : pretend to code for 8 hours a day while the computer do the actual work (dont tell anyone)\\n\\n -Author: @bombardier :\\n Between me and the other searcher\\n\\n -Author: @🔭 . :\\n looking for opinion from seasoned mev searchers\\n\\n -Author: @caravaggio :\\n What does the searcher gain from this?\\n\\n -Author: @IEatBabies :\\n Pair up with a 100x searcher and u both get in 😆\\n\\n -Author: @Stalkopat :\\n Last i checked half of them were uncontested \\n -Reply by @ameya : So still some room for new, technically competent searchers to come and extract MEV?\\n\\n -Author: @breeze :\\n have heard a lot of interesting comparisons (as far as searchers in say wall street)\\n\\n -Author: @hachi-27 :\\n it\'d be for the top searcher\\n\\n -Author: @conquerorofconqueror :\\n i could call my dog an experienced searcher too 😉\\n\\n -Author: @icyicy :\\n Any searcher from Russia ? I have some questions (unrelated to the special operation)\\n\\n -Author: @0x000000 :\\n Searchers also become prey\\n\\n -Author: @surf00 :\\n So correct me if I’m wrong. The graphic is basically like a google search ?\\n\\n -Author: @7citty7 :\\n imagine a searcher gf \\n -Reply by @Patrick shu : 💯\\n\\n -Author: @buyAndFree :\\n I keep searching but can\'t find anything profitable. Am I a searcher? \\n -Reply by @Patrick shu : You are a scearcher wannabe \\n -Reply by @buyAndFree : I\'m too slow. Need to be off javascript lol \\n -Reply by @Patrick shu : Chain?\\n\\n -Author: @slimchance :\\n Who are you asking ?\\n\\n -Author: @yascha :\\n You won\'t be able to be successful at searching by googling the answer\\n\\n -Author: @IEatBabies :\\n @shabbiryk r u a searcher\\n\\n -Author: @breeze :\\n ```#1. In every true searcher of Nature there is a kind of religious reverence, for he finds it impossible to imagine that he is the first to have thought out the exceedingly delicate threads that connect his perceptions - Author: Albert Einstein```\\n\\n -Author: @intimus_ :\\n being honest, would you say there\'s even much point to beginners trying to do searching?\\n\\n -Author: @🔭 . :\\n based on all searchers\\n\\n -Author: @Shunshow :\\n You will rekt the lesser developed searchers\\n\\n -Author: @Vinzent :\\n Math checks out, got an 8 figure searcher here\\n\\n -Author: @kpaya :\\n Anyone could tell me the best pool at the moment ?\\n\\n -Author: @SeeSoftware :\\n back to searching :cheer:\\n\\n -Author: @icyicy :\\n Hey, any searchers from Russia ?\\n\\n -Author: @breeze :\\n I\'m an 8 figure searcher now\\n\\n -Author: @Stalkopat :\\n The only real searchers you find on youtube are on the mev day recordings\\n\\n -Author: @Stalkopat :\\n Searchers raging against the machine\\n\\n -Author: @Deleted User :\\n I have a job, it\'s MEV searcher\\n\\n -Author: @BigBrother :\\n Sounds like greed on the part of other searchers\\n\\n -Author: @Deleted User :\\n (on the searcher side)\\n\\n -Author: @0xFreeman :\\n HI, are we MEV-searcher? why talking about the editors? \\n -Reply by @Stalkopat : because no one wants to leak alpha \\n -Reply by @0xFreeman : Can agree any more 😅\\n\\n -Author: @pimkieplop :\\n also how do searchers even begin to have that conversation? how does one profitable searcher talk to another profitable searcher about starting a team?\\n\\n -Author: @Nikita :\\n so  eventually jared will find competitor i presume  or this strategy have enogh to satisfy all searchers?\\n\\n -Author: @stephov :\\n Many questions are been asked, you can also give it a trier too…. You might be among the lucky winner today?\\n\\n -Author: @Chs2 (I don’t answer dms) :\\n Technically 1 searcher can do it all if they run enough bots\\n\\n -Author: @CuriousRabbit :\\n do you run your own searcher @botcmiller ? \\n -Reply by @botcmiller : I do @CuriousRabbit\\n\\n -Author: @botcmiller :\\n that is MEV you can capture as a searcher\\n\\n -Author: @Stalkopat :\\n Almost like old school searchers have a point in not leaking \\n -Reply by @hi youy : then how would u help ?\\n \\n\\n\\n\\n\\n          Question: Who is the best searcher ?  \\n\\n\\n  \\n Helpful Answer\\n   "',
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  console.log(response.choices[0]);
})();
