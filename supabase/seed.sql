-- in supabase/seed.sql
insert into public."User" (id, username, name, is_admin, encrypted_password, image)
values ('cld3oqdd00000vkp0l96pt39i', 'nicolas', 'nicolas', TRUE, '$2b$10$QkPCWNvFjPGPZ7K4BnCQtO.OjbXlSFKHum8XnggM7U.haLkyJSwYy', 'nicolas.jpg');

insert into public."User" (id, username, name, group_name, is_admin, encrypted_password, image)
values ('cld3oqdd00010vkp0l96pt39i', 'student1', 'student1', 'kc1', FALSE, '$2b$10$MAcXguCFHTV5ES5xG9CF8.BYAfWkqyB/E6R7/rQLUHGj19NO4uecq', 'student1.jpg'),
       ('cld3oqdd00210vkp0l96pt39i', 'student2', 'student2', 'kc1', FALSE, '$2b$10$RnIhgvVkWb8r2aVmIBnoxuyZDDw2NHhYpx1sR9nVyXO6dl.kkW1Ha', 'student2.jpg'),
       ('cld3oqda00210vkp0l96pt39i', 'kc1abby', 'abby', 'kc1', FALSE, '$2b$10$lEsy9v0/9p.o3AaHH0smnuqRgWdEu64jNDYR1YI4qjIyPVBwlEWb6', 'abby.jpg');

insert into public."Group" (name)
values 
  ('kc1'),
  ('kc2'),
  ('default');
  
insert into public."Subject" (name, image)
values
  ('Words', 'words.jpg'),
  ('Questions', 'questions.jpg'),
  ('Phonics', 'phonics.png'),
  ('Math', 'math.jpg');

insert into public."Class" (name, image, subject_name)
values ('Domestic animals', 'domestic_animals.png', 'Words'),
  ('Farm animals', 'farm_animals.jpg', 'Words'),
  ('Zoo animals', 'zoo_animals.jpg', 'Words'),
  ('efgh', 'efgh.jpg', 'Phonics'),
  ('abcd', 'abcd.jpg', 'Phonics'),
  ('ijkl', 'ijkl.jpg', 'Phonics'),
  ('mnop', 'mnop.jpg', 'Phonics'),
  ('qrst', 'qrst.jpg', 'Phonics'),
  ('tuvw', 'tuvw.jpg', 'Phonics'),
  ('wxyz', 'wxyz.jpg', 'Phonics'),
  ('1-4', '1-4.jpg', 'Math'),
  ('5-8', '5-8.jpg', 'Math'),
  ('9-12', '9-12.jpg', 'Math');
  

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
  
insert into public."Flashcard" (name, image, audio, subject_name, class_name)
values ('Cat', 'cat.png', 'cat.mp3', 'Words', 'Domestic animals'),
  ('Dog', 'dog.jpg', 'dog.mp3', 'Words', 'Domestic animals'),
  ('Bird', 'bird.jpg', 'bird.mp3', 'Words', 'Domestic animals'),
  ('Mouse', 'mouse.jpg', 'mouse.mp3', 'Words', 'Domestic animals'),
  ('A', 'a.jpg', 'a.mp3', 'Phonics', 'abcd'),
  ('B', 'b.jpg', 'b.mp3', 'Phonics', 'abcd'),
  ('C', 'c.jpg', 'c.mp3', 'Phonics', 'abcd'),
  ('D', 'd.jpg', 'd.mp3', 'Phonics', 'abcd'),
  ('E', 'e.jpg', 'e.mp3', 'Phonics', 'efgh'),
  ('F', 'f.jpg', 'f.mp3', 'Phonics', 'efgh'),
  ('G', 'g.jpg', 'g.mp3', 'Phonics', 'efgh'),
  ('H', 'h.jpg', 'h.mp3', 'Phonics', 'efgh'),
  ('I', 'i.jpg', 'i.mp3', 'Phonics', 'ijkl'),
  ('J', 'j.jpg', 'j.mp3', 'Phonics', 'ijkl'),
  ('K', 'k.jpg', 'k.mp3', 'Phonics', 'ijkl'),
  ('L', 'l.jpg', 'l.mp3', 'Phonics', 'ijkl'),
  ('M', 'm.jpg', 'm.mp3', 'Phonics', 'mnop'),
  ('N', 'n.jpg', 'n.mp3', 'Phonics', 'mnop'),
  ('O', 'o.jpg', 'o.mp3', 'Phonics', 'mnop'),
  ('P', 'p.jpg', 'p.mp3', 'Phonics', 'mnop'),
  ('Q', 'q.jpg', 'q.mp3', 'Phonics', 'qrst'),
  ('R', 'r.jpg', 'r.mp3', 'Phonics', 'qrst'),
  ('S', 's.jpg', 's.mp3', 'Phonics', 'qrst'),
  ('T', 't.jpg', 't.mp3', 'Phonics', 'qrst'),
  ('T', 't.jpg', 't.mp3', 'Phonics', 'tuvw'),
  ('U', 'u.jpg', 'u.mp3', 'Phonics', 'tuvw'),
  ('V', 'v.jpg', 'v.mp3', 'Phonics', 'tuvw'),
  ('W', 'w.jpg', 'w.mp3', 'Phonics', 'tuvw'),
  ('W', 'w.jpg', 'w.mp3', 'Phonics', 'wxyz'),
  ('X', 'x.jpg', 'x.mp3', 'Phonics', 'wxyz'),
  ('Y', 'y.jpg', 'y.mp3', 'Phonics', 'wxyz'),
  ('Z', 'z.jpg', 'z.mp3', 'Phonics', 'wxyz'),
  ('1', '1.jpg', '1.mp3', 'Math', '1-4'),
  ('2', '2.jpg', '2.mp3', 'Math', '1-4'),
  ('3', '3.jpg', '3.mp3', 'Math', '1-4'),
  ('4', '4.jpg', '4.mp3', 'Math', '1-4'),
  ('5', '5.jpg', '5.mp3', 'Math', '5-8'),
  ('6', '6.jpg', '6.mp3', 'Math', '5-8'),
  ('7', '7.jpg', '7.mp3', 'Math', '5-8'),
  ('8', '8.jpg', '8.mp3', 'Math', '5-8'),
  ('9', '9.jpg', '9.mp3', 'Math', '9-12'),
  ('10', '10.jpg', '10.mp3', 'Math', '9-12'),
  ('11', '11.jpg', '11.mp3', 'Math', '9-12'),
  ('12', '12.jpg', '12.mp3', 'Math', '9-12');
  
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
