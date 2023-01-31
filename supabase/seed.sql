-- in supabase/seed.sql
insert into public."Group" (id, name)
values 
  (1, 'kc1'),
  (2, 'kc2'),
  (3, 'default');

insert into public."User" (id, username, name, group_id, is_admin, encrypted_password, image)
values ('cld3oqdd01000vkp0l96pt39i', 'nicolas', 'nicolas', 3, TRUE, '$2b$10$QkPCWNvFjPGPZ7K4BnCQtO.OjbXlSFKHum8XnggM7U.haLkyJSwYy', 'nicolas.jpg'),
       ('cld3oqd702010vkp0l96pt39i', 'student1', 'student1', 3, FALSE, '$2b$10$MAcXguCFHTV5ES5xG9CF8.BYAfWkqyB/E6R7/rQLUHGj19NO4uecq', 'student1.jpg'),
       ('cld3oqda03210vkp0l96pt39i', 'kc1abby', 'abby', 1, FALSE, '$2b$10$lEsy9v0/9p.o3AaHH0smnuqRgWdEu64jNDYR1YI4qjIyPVBwlEWb6', 'kc1abby.jpg'),
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
       ('cld3wqda01210vsp0l96ot39z', 'kc2tina', 'tina', 2, FALSE, '$2b$10$124HWrOFwrZvAlEbCWdMW.Ei4VJZ.ysRt6.I6eXDIBrJ4Wfy8Clne', 'kc2tina.jpg');
       

       


  
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
  (13, '9-12', '9-12.jpg', 4);
  

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
values ('nicolas', 'nicolas.jpg', ARRAY ['success1.jpg', 'success2.jpg'], ARRAY ['failure1', 'failure2']);
  
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
  ('12', '12.jpg', '12.mp3', 4, 13);
  
  -- ('Cow', 'cow.jpg', 'cow.mp3', 'Farm animals'),
  -- ('Pig', 'pig.jpg', 'pig.mp3', 'Farm animals'),
  -- ('Lion', 'lion.jpg', 'lion.mp3', 'Zoo animals'),
  -- ('Tiger', 'tiger.jpg', 'tiger.mp3', 'Zoo animals');
  
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
