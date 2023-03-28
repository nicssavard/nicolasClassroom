-- in supabase/seed.sql
insert into public."Group" (id, name)
values 
  (1, 'kc1'),
  (2, 'kc2'),
  (3, 'default');


insert into public."Game" (name, image) 
values ('math', 'math.jpg'),
  ('matching', 'matching.png');
  
       


  
insert into public."Subject" (id, name, image)
values
  (1, 'Words', 'words.jpg'),
  (2, 'Questions', 'questions.jpg'),
  (3, 'Phonics', 'phonics.png'),
  (4, 'Math', 'math.jpg');

insert into public."Class" (id, name, image, subject_id)
values (1, 'Domestic animals', 'domestic_animals.png', 1),
  (2, 'Farm animals', 'farm_animals.jpg', 1),
  (3, 'Zoo animals', 'zoo_animals.jpg', 1),
  (4, 'abcd', 'abcd.jpg', 3),
  (5, 'efgh', 'efgh.jpg', 3),
  (6, 'ijkl', 'ijkl.jpg', 3),
  (7, 'mnop', 'mnop.jpg', 3),
  (8, 'qrst', 'qrst.jpg', 3),
  (9, 'tuvw', 'tuvw.jpg', 3),
  (10, 'wxyz', 'wxyz.jpg', 3),
  (11, '1-4', '1-4.jpg', 4),
  (12, '5-8', '5-8.jpg', 4),
  (13, '9-12', '9-12.jpg', 4),
  (14, 'what is your name?', 'what is your name.jpg', 2),
  (15, 'how is the weather?', 'how is the weather.jpg', 2),
  (16, 'weather', 'weather.jpg', 1),
  (17, '13-16', '13-16.jpg', 4),
  (18, 'natural phenomena', 'natural phenomena.png', 1),
  (19, 'natural disasters', 'natural disasters.jpg', 1),
  (20, 'clothes', 'clothes.jpg', 1),
  (21, 'space', 'space.png', 1),
  (22, 'og', 'bog.jpg', 3),
  (23, 'cvc review', 'win.jpg', 3);

insert into public."CurriculumClasses" (group_id, class_id)
values (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8),
  (1, 9),
  (1, 10),
  (1, 11),
  (1, 12),
  (1, 13),
  (1, 14),
  (1, 15),
  (1, 16),
  (1, 17),
  (2, 1),
  (2, 2),
  (2, 3),
  (2, 4),
  (2, 5),
  (2, 6),
  (2, 7),
  (2, 8),
  (2, 9),
  (2, 10),
  (2, 11),
  (2, 12),
  (2, 13),
  (2, 14),
  (2, 15),
  (2, 16),
  (2, 17),
  (3, 1),
  (3, 2),
  (3, 3),
  (3, 4),
  (3, 5),
  (3, 6),
  (3, 7),
  (3, 8),
  (3, 9),
  (3, 10),
  (3, 11),
  (3, 12),
  (3, 13),
  (3, 14),
  (3, 15),
  (3, 16),
  (3, 17);

  

  -- ('Numbers', 'numbers.jpg', 'Math');
  -- ('Shapes', 'shapes.jpg', 'Math');
  -- ('Colors', 'colors.jpg', 'Math');
  -- ('Days of the week', 'days_of_the_week.jpg', 'Math');
  -- ('Months of the year', 'months_of_the_year.jpg', 'Math');
  -- ('Seasons', 'seasons.jpg', 'Math');
  -- ('Weather', 'weather.jpg', 'Math');
  -- ('Family', 'family.jpg', 'Words');
  -- ('Body', 'body.jpg', 'Words');
  -- ('Clothes', 'clothes.jpg', 'Words');
  -- ('Fruits', 'fruits.jpg', 'Words');
  -- ('Vegetables', 'vegetables.jpg', 'Words');
  -- ('Food', 'food.jpg', 'Words');
  -- ('Transportation', 'transportation.jpg', 'Words');
  -- ('Places', 'places.jpg', 'Words');
  -- ('Jobs', 'jobs.jpg', 'Words');
  -- ('Hobbies', 'hobbies.jpg', 'Words');
  -- ('Sports', 'sports.jpg', 'Words');
  -- ('Emotions', 'emotions.jpg', 'Words');
  -- ('Feelings', 'feelings.jpg', 'Words');
  -- ('Actions', 'actions.jpg', 'Words');
  -- ('Adjectives', 'adjectives.jpg', 'Words');
  -- ('Verbs', 'verbs.jpg', 'Words');
  -- ('Nouns', 'nouns.jpg', 'Words');
  -- ('Prepositions', 'prepositions.jpg', 'Words');
  -- ('Conjunctions', 'conjunctions.jpg', 'Words');
  -- ('Pronouns', 'pronouns.jpg', 'Words');
  -- ('Adverbs', 'adverbs.jpg', 'Words');
  -- ('Interjections', 'interjections.jpg', 'Words');
  -- ('Time', 'time.jpg', 'Words');
  -- ('Money', 'money.jpg', 'Words');
  -- ('School', 'school.jpg', 'Words');
  -- ('Home', 'home.jpg', 'Words');
  -- ('Animals', 'animals.jpg', 'Words');
  -- ('Plants', 'plants.jpg
insert into public."Teacher" (name, image, success_image, failure_image)
values ('nicolas', 'nicolas.jpg', ARRAY ['success1.jpg', 'success2.jpg', 'success3.jpg', 'success4.jpg'], ARRAY ['failure1', 'failure2']);
  
insert into public."Flashcard" (name, image, audio, subject_id, class_id)
values ('Cat', 'cat.png', 'cat.mp3', 1, 1),
  ('Dog', 'dog.jpg', 'dog.mp3', 1, 1),
  ('Bird', 'bird.jpg', 'bird.mp3', 1, 1),
  ('Mouse', 'mouse.jpg', 'mouse.mp3', 1, 1),
  ('B', 'b.jpg', 'b.mp3', 3, 4),
  ('C', 'c.jpg', 'c.mp3', 3, 4),
  ('A', 'a.jpg', 'a.mp3', 3, 4),
  ('D', 'd.jpg', 'd.mp3', 3, 4),
  ('E', 'e.jpg', 'e.mp3', 3, 5),
  ('F', 'f.jpg', 'f.mp3', 3, 5),
  ('G', 'g.jpg', 'g.mp3', 3, 5),
  ('H', 'h.jpg', 'h.mp3', 3, 5),
  ('I', 'i.jpg', 'i.mp3', 3, 6),
  ('J', 'j.jpg', 'j.mp3', 3, 6),
  ('K', 'k.jpg', 'k.mp3', 3, 6),
  ('L', 'l.jpg', 'l.mp3', 3, 6),
  ('M', 'm.jpg', 'm.mp3', 3, 7),
  ('N', 'n.jpg', 'n.mp3', 3, 7),
  ('O', 'o.jpg', 'o.mp3', 3, 7),
  ('P', 'p.jpg', 'p.mp3', 3, 7),
  ('Q', 'q.jpg', 'q.mp3', 3, 8),
  ('R', 'r.jpg', 'r.mp3', 3, 8),
  ('S', 's.jpg', 's.mp3', 3, 8),
  ('T', 't.jpg', 't.mp3', 3, 8),
  ('T', 't.jpg', 't.mp3', 3, 9),
  ('U', 'u.jpg', 'u.mp3', 3, 9),
  ('V', 'v.jpg', 'v.mp3', 3, 9),
  ('W', 'w.jpg', 'w.mp3', 3, 9),
  ('W', 'w.jpg', 'w.mp3', 3, 10),
  ('X', 'x.jpg', 'x.mp3', 3, 10),
  ('Y', 'y.jpg', 'y.mp3', 3, 10),
  ('Z', 'z.jpg', 'z.mp3', 3, 10),
  ('1', '1.jpg', '1.mp3', 4, 11),
  ('2', '2.jpg', '2.mp3', 4, 11),
  ('3', '3.jpg', '3.mp3', 4, 11),
  ('4', '4.jpg', '4.mp3', 4, 11),
  ('5', '5.jpg', '5.mp3', 4, 12),
  ('6', '6.jpg', '6.mp3', 4, 12),
  ('7', '7.jpg', '7.mp3', 4, 12),
  ('8', '8.jpg', '8.mp3', 4, 12),
  ('9', '9.jpg', '9.mp3', 4, 13),
  ('10', '10.jpg', '10.mp3', 4, 13),
  ('11', '11.jpg', '11.mp3', 4, 13),
  ('12', '12.jpg', '12.mp3', 4, 13),
  ('my name is teacher nicolas', 'teacher nicolas.jpg', 'teacher nicolas.mp3', 2, 14),
  ('my name is doraemon', 'doraemon.jpg', 'doraemon.mp3', 2, 14),
  ('my name is ultraman', 'ultraman.jpg', 'ultraman.mp3', 2, 14),
  ('my name is elsa', 'elsa.jpg', 'elsa.mp3', 2, 14),
  ('it is sunny', 'sunny.jpg', 'sunny.mp3', 2, 15),
  ('it is rainy', 'rainy.jpg', 'rainy.mp3', 2, 15),
  ('it is cloudy', 'cloudy.jpg', 'cloudy.mp3', 2, 15),
  ('it is windy', 'windy.jpg', 'windy.mp3', 2, 15),
  ('it is stormy', 'stormy.jpg', 'stormy.mp3', 2, 15),
  ('it is snowy', 'snowy.jpg', 'snowy.mp3', 2, 15),
  ('sun', 'sun.jpg', 'sun.mp3', 1, 16),
  ('cloud', 'cloud.jpg', 'cloud.mp3', 1, 16),
  ('rain', 'rain.jpg', 'rain.mp3', 1, 16),
  ('snow', 'snow.jpg', 'snow.mp3', 1, 16),
  ('wind', 'wind.jpg', 'wind.mp3', 1, 16),
  ('13', '13.jpg', '13.mp3', 4, 17),
  ('14', '14.jpg', '14.mp3', 4, 17),
  ('15', '15.jpg', '15.mp3', 4, 17),
  ('16', '16.jpg', '16.mp3', 4, 17),
  ('volcano', 'volcano.png', 'volcano.mp3', 1, 18),
  ('waterfall', 'waterfall.jpg', 'waterfall.mp3', 1, 18),
  ('rainbow', 'rainbow.png', 'rainbow.mp3', 1, 18),
  ('lightning', 'lightning.jpg', 'lightning.mp3', 1, 18),
  ('thunderstorm', 'thunderstorm.jpg', 'thunderstorm.mp3', 1, 19),
  ('flood', 'flood.jpg', 'flood.mp3', 1, 19),
  ('earthquake', 'earthquake.jpg', 'earthquake.mp3', 1, 19),
  ('tornado', 'tornado.jpg', 'tornado.mp3', 1, 19),
  ('hat', 'hat.jpg', 'hat.mp3', 1, 20),
  ('jacket', 'jacket.jpg', 'jacket.mp3', 1, 20),
  ('pants', 'pants.jpg', 'pants.mp3', 1, 20),
  ('space', 'space.jpg', 'space.mp3', 1, 21),
  ('sky', 'sky.jpg', 'sky.mp3', 1, 21),
  ('sun', 'sun.jpg', 'sun.mp3', 1, 21),
  ('moon', 'moon.jpg', 'moon.mp3', 1, 21),
  ('star', 'star.jpg', 'star.mp3', 1, 21),
  ('planet', 'planet.png', 'planet.mp3', 1, 21),
  ('dog', 'cvcdog.jpg', 'cvcdog.mp3', 3, 22),
  ('bog', 'bog.jpg', 'bog.mp3', 3, 22),
  ('fog', 'fog.jpg', 'fog.mp3', 3, 22),
  ('cog', 'cog.jpg', 'cog.mp3', 3, 22),
  ('win', 'win.jpg', 'win.mp3', 3, 23),
  ('sit', 'sit.jpg', 'sit.mp3', 3, 23),
  ('dog', 'cvcdog.jpg', 'cvcdog.mp3', 3, 23),
  ('pit', 'pit.jpg', 'pit.mp3', 3, 23);

  

  

  -- ('moon', 'moon.jpg', 'moon.mp3', 1, 16),
  -- ('star', 'star.jpg', 'star.mp3', 1, 16), 
  -- ('tree', 'tree.jpg', 'tree.mp3', 1, 17),
  -- ('flower', 'flower.jpg', 'flower.mp3', 1, 17),
  -- ('grass', 'grass.jpg', 'grass.mp3', 1, 17),
  -- ('leaf', 'leaf.jpg', 'leaf.mp3', 1, 17),
  -- ('bush', 'bush.jpg', 'bush.mp3', 1, 17),
  -- ('butterfly', 'butterfly.jpg', 'butterfly.mp3', 1, 18),
  -- ('bee', 'bee.jpg', 'bee.mp3', 1, 18),
  -- ('ant', 'ant.jpg', 'ant.mp3', 1, 18),
  -- ('spider', 'spider.jpg', 'spider.mp3', 1, 18),
  -- ('mosquito', 'mosquito.jpg', 'mosquito.mp3', 1, 18),
  -- ('fly', 'fly.jpg', 'fly.mp3', 1, 18),
  -- ('horse', 'horse.jpg', 'horse.mp3', 1, 19),
  -- ('cow', 'cow.jpg', 'cow.mp3', 1, 19),
  -- ('pig', 'pig.jpg', 'pig.mp3', 1, 19),
  -- ('lion', 'lion.jpg', 'lion.mp3', 1, 20),
  -- ('tiger', 'tiger.jpg', 'tiger.mp3', 1, 20);


  
  -- ('Cow', 'cow.jpg', 'cow.mp3', 'Farm animals'),
  -- ('Pig', 'pig.jpg', 'pig.mp3', 'Farm animals'),
  -- ('Lion', 'lion.jpg', 'lion.mp3', 'Zoo animals'),
  -- ('Tiger', 'tiger.jpg', 'tiger.mp3', 'Zoo animals');
  
insert into public."Homework" (name, file, image)
values ('a', 'a.pdf', 'a.jpg'),
       ('b', 'b.pdf', 'b.jpg'),
       ('c', 'c.pdf', 'c.jpg'),
       ('d', 'd.pdf', 'd.jpg'),
       ('e', 'e.pdf', 'e.jpg'),
       ('f', 'f.pdf', 'f.jpg'),
       ('g', 'g.pdf', 'g.jpg'),
       ('h', 'h.pdf', 'h.jpg'),
       ('i', 'i.pdf', 'i.jpg'),
       ('j', 'j.pdf', 'j.jpg'),
       ('k', 'k.pdf', 'k.jpg'),
       ('l', 'l.pdf', 'l.jpg'),
       ('m', 'm.pdf', 'm.jpg'),
       ('n', 'n.pdf', 'n.jpg'),
       ('o', 'o.pdf', 'o.jpg'),
       ('p', 'p.pdf', 'p.jpg'),
       ('q', 'q.pdf', 'q.jpg'),
       ('r', 'r.pdf', 'r.jpg'),
       ('s', 's.pdf', 's.jpg'),
       ('t', 't.pdf', 't.jpg'),
       ('u', 'u.pdf', 'u.jpg'),
       ('v', 'v.pdf', 'v.jpg'),
       ('w', 'w.pdf', 'w.jpg'),
       ('x', 'x.pdf', 'x.jpg'),
       ('y', 'y.pdf', 'y.jpg'),
       ('z', 'z.pdf', 'z.jpg'),
       ('1', '1.pdf', '1.jpg'),
       ('2', '2.pdf', '2.jpg'),
       ('3', '3.pdf', '3.jpg'),
       ('4', '4.pdf', '4.jpg'),
       ('5', '5.pdf', '5.jpg'),
       ('6', '6.pdf', '6.jpg'),
       ('7', '7.pdf', '7.jpg'),
       ('8', '8.pdf', '8.jpg'),
       ('9', '9.pdf', '9.jpg'),
       ('10', '10.pdf', '10.jpg'),
       ('11', '11.pdf', '11.jpg'),
       ('12', '12.pdf', '12.jpg'),
       ('13', '13.pdf', '13.jpg'),
       ('14', '14.pdf', '14.jpg'),
       ('15', '15.pdf', '15.jpg'),
       ('16', '16.pdf', '16.jpg'),
       ('17', '17.pdf', '17.jpg'),
       ('18', '18.pdf', '18.jpg'),
       ('19', '19.pdf', '19.jpg'),
       ('20', '20.pdf', '20.jpg'),
       ('letter recognition a-f', 'letter recognition a-f.pdf', 'letter recognition a-f.jpg'),
       ('letter recognition g-l', 'letter recognition g-l.pdf', 'letter recognition g-l.jpg'),
       ('letter recognition m-r', 'letter recognition m-r.pdf', 'letter recognition m-r.jpg');
       

       insert into public."User" (id, username, name, group_id, is_admin, encrypted_password, image)
values ('cld3oqda03210vkp0l96pt39i', 'kc1abby', 'abby', 1, FALSE, '$2b$10$lEsy9v0/9p.o3AaHH0smnuqRgWdEu64jNDYR1YI4qjIyPVBwlEWb6', 'kc1abby.jpg'),
       ('cls3oqda04210vkp0l96pt39i', 'kc1amy', 'amy', 1, FALSE, '$2b$10$gX.NClT8tKv3uJcxPh8rwutDdP5/LFy86T5stTaPO0cy.U84vwIie', 'kc1amy.jpg'),
       ('cld3oqda05210vsp0l96pt39i', 'kc1annie', 'annie', 1, FALSE, '$2b$10$8uPkkGHTXnnTOfesMIubh.6ALY1J1lAKXc7NimSW8hnXfI2JBXpiK', 'kc1annie.jpg'),
       ('clf3oqda06210vsp0l96pt39i', 'kc1arthur', 'arthur', 1, FALSE, '$2b$10$iupddgPmFFZ1WRq3tG8yaeDO3KPYEDzLHahsEOPKGdy7pdcCqMK5S', 'kc1arthur.jpg'),
       ('clg3oqda07210vsp0l96pt39i', 'kc1ayden', 'ayden', 1, FALSE, '$2b$10$yMeqvViWdgxvxUNdFbVhz.fRhH3njF81dRWerjTkBJPzcwUcSJhUG', 'kc1ayden.jpg'),
       ('clh3oqda08210vsp0l96pt39i', 'kc1bill', 'bill', 1, FALSE, '$2b$10$3G/vKi2xmWBUqIADjvP/9O0RWsXNpqpCMrbL38e2m/W/tb9XsDkjO', 'kc1bill.jpg'),
       ('cld4oqda09210vsp0l96pt39i', 'kc1coco', 'coco', 1, FALSE, '$2b$10$qB/AcUfSL9hJWobUW8BZNOakb/plko8O2KFy3BDPeQYdxWEN9kAtu', 'kc1coco.jpg'),
       ('cld6oqda11210vsp0l96pt39i', 'kc1darren', 'darren', 1, FALSE, '$2b$10$8GPX7jubJo6majfLVjNKR.y8DUvG/FmdR3kx6sABEp82rDArItZFy', 'kc1darren.jpg'),
       ('cld8oqda21210vsp0l96pt39i', 'kc1dipsy', 'dipsy', 1, FALSE, '$2b$10$gbwQaigaQoLwRWq4IWo6KeHH8Oz4wYkxwItSBkIY7NEOnd5MXRfiC', 'kc1dipsy.jpg'),
       ('cld3fqda31210vsp0l96pt39i', 'kc1domi', 'domi', 1, FALSE, '$2b$10$jacjhNbuFmTNLmo5gLviJu8a4Ym3j2NCmYMR4.9BoaZsQjRlmHJYW', 'kc1domi.jpg'),
       ('cld3hqda41210vsp0l96pt39i', 'kc1eason', 'eason', 1, FALSE, '$2b$10$TWVbcoZN62dJg4XCZA3xqeBaxkeBItsiWqlPXwiSWhKBP8raLfIUu', 'kc1eason.jpg'),
       ('cld3vqda51210vsp0l96pt39i', 'kc1eden', 'eden', 1, FALSE, '$2b$10$vjEqN.4otF5KcwP2V7UU6u6JWOC9GYau8GY6D76D1khkn/v.zpQBu', 'kc1eden.jpg'),
       ('cld3nqda61210vsp0l96pt39i', 'kc1elsa', 'elsa', 1, FALSE, '$2b$10$K7pXYEULHIwd/MiafshGte.DwbFci8IvdbDCxwGhydV5X4WOu55HC', 'kc1elsa.jpg'),
       ('cld3okda71210vsp0l96pt39i', 'kc1emily', 'emily', 1, FALSE, '$2b$10$OfObcAOYvI09QUz9BavFo.gRe1QTc.mUh/r.TN1UI9oJI/i42NHqW', 'kc1emily.jpg'),
       ('cld3olda81210vsp0l96pt39i', 'kc1eric', 'eric', 1, FALSE, '$2b$10$uCsQC1KJu/SH.RemuYd78u.N7HwKK.TAzLnnxmnX2EBcwc2A51xPK', 'kc1eric.jpg'),
       ('cld3oada91210vsp0l96pt39i', 'kc1harry', 'harry', 1, FALSE, '$2b$10$I5BKfrLqxOtIJu4cX.e8r.CQO9D9wjSQ/EvSnNqzbCTdcGF7XfcDq', 'kc1harry.jpg'),
       ('cld3oqwq01210vsp0l96pt39i', 'kc1jo myers', 'jo myers', 1, FALSE, '$2b$10$R7uKwhAI0wxSMWbEALMfBudewUPKJoBChXkyaZSQsvU4PSvUqG6.G', 'kc1jo myers.jpg'),
       ('cld3oqdw01210vwp0l96pt39i', 'kc1lucis', 'lucis', 1, FALSE, '$2b$10$nObBRovXjMRlGZxFPeOQXO0PPPfdDcvuYIB/yty07XbFBw/0qkcPq', 'kc1lucis.jpg'),
       ('cld3oqde01210vtp0l96pt39i', 'kc1madows', 'madows', 1, FALSE, '$2b$10$sUvmR8pbmV8KoM9lEChFH.mKBV9WOybj.qLS7/Pb1ANiHBiDDa98q', 'kc1madows.jpg'),
       ('cld3oqdr01210vsu0l96pt39i', 'kc1marvin', 'marvin', 1, FALSE, '$2b$10$6lyR6io7vpORL4T6MXFFFed1RER209EKDVC3TZRocEMQeSHumhBdm', 'kc1marvin.jpg'),
       ('cld3oqdt01210vsp6l96pt39i', 'kc1mia', 'mia', 1, FALSE, '$2b$10$SfrnstbBzB//66gjhiq66OZsoHxFcdjkmbu9pUGTiIzjNjyqIk/BS', 'kc1mia.jpg'),
       ('cld3oqdy01210vsp8l96pt39i', 'kc1moana', 'moana', 1, FALSE, '$2b$10$jTV3Tg87IQ8CLJhGALF5JObBJIaXLRIXDmZhvRWxALz82mpoEjDI2', 'kc1moana.jpg'),
       ('cld3oqdu01210vsp9l96pt39i', 'kc1oliver', 'oliver', 1, FALSE, '$2b$10$jfW7MlEwtShnsJjBAT2UEuD1y.j1l/aqrMXayaHKyQ3ySh6AWXLiy', 'kc1oliver.jpg'),
       ('cld3oqdi01210vsp0l96ot39i', 'kc1wisdom', 'wisdom', 1, FALSE, '$2b$10$G4PI7/DyE6Nm9xaY18c.WO8NLYeyXmcLJpiY/NSX.3IBwsSuYd8Du', 'kc1wisdom.jpg'),
       ('cld2wqda01210nsp9l96ot39z', 'kc1kevin', 'kevin', 1, FALSE, '$2b$10$K8gizehBtMBTDGOh66Tln.QB9r2xr6EQQVADu4r75NwJFjpUC7YAm', 'kc1kevin.jpg'),
       ('cld3oqdo01210vsp0l96ot39q', 'kc2aiden', 'aiden', 2, FALSE, '$2b$10$EeuAhY0Vvdw6BLcPJGQH8Ob.BKJA4Uzy0Rr2hCLcd.Kvqdj1ar36y', 'kc2aiden.jpg'),
       ('cld3oqdp01210vsp0l96ot39w', 'kc2cassie', 'cassie', 2, FALSE, '$2b$10$ArhLhEjLNLyppR5yPAmrRergCVxpSorHrKtIM1.VSaCctldQmx3cS', 'kc2cassie.jpg'),
       ('cld3oqdl01210vsp0l96ot39e', 'kc2charlie', 'charlie', 2, FALSE, '$2b$10$KmFXyjq8t8QUyLZsgSSBp.2lUfV.qVQduZSGLqgLsmQnsJ8JHP95i', 'kc2charlie.jpg'),
       ('cld3oqdk01210vsp0l96ot39r', 'kc2elsa', 'elsa', 2, FALSE, '$2b$10$lTmN.Sbh6mKcUnGSQRr8leSD5.IQIDrtiMgJXPCdIuIkYKDrflZEG', 'kc2elsa.jpg'),
       ('cld3oqdj01210vsp0l96ot39t', 'kc2enen', 'enen', 2, FALSE, '$2b$10$peiZmAPvBQGaej.2tFRrrOHiDUfJsSP09rkAfV6WdXXiH2FymAqBq', 'kc2enen.jpg'),
       ('cld3oqdh01210vsp0l96ot39y', 'kc2hattie', 'hattie', 2, FALSE, '$2b$10$7gNd.j8uxUI4MIUAHMYNK.wuJ1Dtx4QhiWBYneC3fzvqIlU.fHAGW', 'kc2hattie.jpg'),
       ('cld3oqdg01210vsp0l96ot39u', 'kc2heron', 'heron', 2, FALSE, '$2b$10$iSomS3GE77okiQctdcIRYOAACE1GBuMMio1P69aay34kZg5ZnV12u', 'kc2heron.jpg'),
       ('cld3oqdf01210vsp0l96ot39i', 'kc2jason', 'jason', 2, FALSE, '$2b$10$VnGCFN7TOAjZOWdble2yL.olQsX7eH6fRJ8koa7NDfBelKd.h3pyO', 'kc2jason.jpg'),
       ('cld3oqdd01210vsp0l96ot39o', 'kc2kevin', 'kevin', 2, FALSE, '$2b$10$99zp3okuOrwD8gmmGGvyJOa.B5fxxeet8K3LLWZr51JrZAHe5Nsda', 'kc2kevin.jpg'),
       ('cld3oqds01210vsp0l96ot39p', 'kc2kris', 'kris', 2, FALSE, '$2b$10$a8kffXtNEkss21Pgl/xSse6kXIiTxxEnafoYdOzGTY1Bv7nZSKdFu', 'kc2kris.jpg'),
       ('cld3oqda01210vsp0l96ot39l', 'kc2leon', 'leon', 2, FALSE, '$2b$10$1J3OpKkJHSKLeCff1/LoZuBpf9ezKB2y0LCLd1bU3KCUnsZtd8bde', 'kc2leon.jpg'),
       ('cld3oqdz01210vsp0l96ot39k', 'kc2levi', 'levi', 2, FALSE, '$2b$10$yXV7kHBWpmd0aBDteFIfvuuVU2UQ62hLcevWP4icwVL61WhEtN9gG', 'kc2levi.jpg'),
       ('cld3oqdx01210vsp0l96ot39j', 'kc2michelle', 'michelle', 2, FALSE, '$2b$10$ftJWl.DKNnt/j3B3XlCoouaewNqj01NRWAC2FkUvwPaimCosj0pIq', 'kc2michelle.jpg'),
       ('cld3oqdc01210vsp0l96ot39h', 'kc2nico', 'nico', 2, FALSE, '$2b$10$rmRcwqboDF0rAnfujQgO..3t4SvMu6.Qbn/r8Nj/fMF72LddbKeK6', 'kc2nico.jpg'),
       ('cld3oqdv01210vsp0l96ot39g', 'kc2oscar', 'oscar', 2, FALSE, '$2b$10$fKFcatND3W/kAKguhOBQYORceBaTO95i3mAiktM5AbwF3cikjY0wa', 'kc2oscar.jpg'),
       ('cld3oqdb01210vsp0l96ot39f', 'kc2ray', 'ray', 2, FALSE, '$2b$10$eEOGILT0bJBEpT23KwNIjOBJBDl4TJsbPM4mlS3uFrDRQ22iDOIIW', 'kc2ray.jpg'),
       ('cld3oqdn01210vsp0l96ot39d', 'kc2saga', 'saga', 2, FALSE, '$2b$10$Tpvc0WkJn5xSnUPJsHMILOo7mAa3XrWhTqZWMp0UUwicp35i145su', 'kc2saga.jpg'),
       ('cld3oqdm01210vsp0l96ot39s', 'kc2simon', 'simon', 2, FALSE, '$2b$10$6z9DXDDZM04JXLhF2B3Q.u0PMU5Q38xB1jM1bRpMyhKzX4F3rJCfG', 'kc2simon.jpg'),
       ('cld3qqda01210vsp0l96ot39a', 'kc2sun', 'sun', 2, FALSE, '$2b$10$JqouTnz4C0N8cDhCZp/.cOM5dvhTwdEOqtwqiUcllVEbIgsVcYDC6', 'kc2sun.jpg'),
       ('cld3wqda01210vsp0l96ot39z', 'kc2tina', 'tina', 2, FALSE, '$2b$10$124HWrOFwrZvAlEbCWdMW.Ei4VJZ.ysRt6.I6eXDIBrJ4Wfy8Clne', 'kc2tina.jpg'),
       ('cld3wqda01210csp0l96ot39z', 'kc2frank', 'frank', 2, FALSE, '$2b$10$tpvihzm3HlJ5vNapk5yPI.nAiulRd5i/zUde9/ohn7XCsv59xG8H6', 'kc2frank.jpg'),
       ('cld5wqda01210nsp0l96ot39z', 'kc2nic', 'nic', 2, FALSE, '$2b$10$IbX/gQE7KiYEViAn/UOnUeWWsGT6Xyip0dAQtp6DQuPKet1TwGzqC', 'kc2nic.jpg'),
       ('cld4wqda01250nsp0l96ot39z', 'kc2susie', 'susie', 2, FALSE, '$2b$10$CYV27GhIygMZoSjgJaXrIu7dU06lSbNizH9RDXjo/eq2P9T0vd8su', 'kc2susie.jpg'),
       ('cld2wqda01210nsp0l96ot39z', 'kc2zoey', 'zoey', 2, FALSE, '$2b$10$D0Xg2u.CpldTsscT365q9OQ7i.16rUJTPLKwYVVN/keOKXmO7x9N2', 'kc2zoey.jpg'),
       ('cld2wqda01210nkp0l96ot39z', 'kc2berkeley', 'berkeley', 2, FALSE, '$2b$10$oHxapYCrxbbUlmcmNtP3GuI9nY4qeQoEJ1ygXTDCEJD6zbg9TOd2O', 'kc2berkeley.jpg'),
       ('cld3oqdd01000vkp0l96pt39i', 'nicolas', 'nicolas', 3, TRUE, '$2b$10$QkPCWNvFjPGPZ7K4BnCQtO.OjbXlSFKHum8XnggM7U.haLkyJSwYy', 'nicolas.jpg'),
       ('cld3oqd702010vkp0l96pt39i', 'student1', 'student1', 3, FALSE, '$2b$10$MAcXguCFHTV5ES5xG9CF8.BYAfWkqyB/E6R7/rQLUHGj19NO4uecq', 'student1.jpg'),
       ('cld2wqda01210vdp9l96ot39z', 'guest', 'guest', 3, FALSE, '$2b$10$3Ym7pQb5MpCJqBL.R7x8uuXizbotyh7yAZT3CbR98eh1yZSz/jdEC', 'guest.jpg');
       
-- drop table if exists public."Account";
-- drop table if exists public."Class";
-- drop table if exists public."Example";
-- drop table if exists public."Flashcard";
-- drop table if exists public."Group";
-- drop table if exists public."Homework";
-- drop table if exists public."Session";
-- drop table if exists public."Subject";
-- drop table if exists public."Teacher";
-- drop table if exists public."User";
-- drop table if exists public."VerificationToken";


      --  kc1abby abby
      --  kc1amy amy
      --  kc1annie annie
      --  kc1arthur arthur
      --  kc1ayden ayden
      --  kc1bill bill
      --  kc1coco coco
      --  kc1darren darren
      --  kc1dipsy dipsy
      --  kc1domi domi
      --  kc1eason eason
      --  kc1eden eden
      --  kc1elsa elsa
      --  kc1emily emily
      --  kc1eric eric
      --  kc1harry harry
      --  kc1jo myers jo myers
      --  kc1lucis lucis
      --  kc1madows madows
      --  kc1marvin marvin 
      --  kc1mia mia
      --  kc1moana moana
      --  kc1oliver oliver
      --  kc1wisdom wisdom
      --  kc2aiden aiden
      --  kc2cassie cassie
      --  kc2charlie charlie
      --  kc2elsa elsa
      --  kc2enen enen
      --  kc2hattie hattie
      --  kc2heron heron
      --  kc2jason jason
      --  kc2kevin kevin
      --  kc2kris kris
      --  kc2leon leon
      --  kc2levi levi
      --  kc2michelle michelle
      --  kc2nico nico
      --  kc2oscar oscar
      --  kc2ray ray
      --  kc2saga saga
      --  kc2simon simon
      --  kc2sun sun
      --  kc2tina tina
      --  kc2frank frank
      --  kc2nic', 'nic
      --  kc2susie susie
      --  kc2zoey zoey
      --  kc2berkeley berkeley
      --  kc1kevin kevin