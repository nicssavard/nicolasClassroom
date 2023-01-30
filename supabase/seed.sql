-- in supabase/seed.sql
insert into public."Group" (id, name)
values 
  (1, 'kc1'),
  (2, 'kc2'),
  (3, 'default');

insert into public."User" (id, username, name, group_id, is_admin, encrypted_password, image)
values ('cld3oqdd00000vkp0l96pt39i', 'nicolas', 'nicolas', 3, TRUE, '$2b$10$QkPCWNvFjPGPZ7K4BnCQtO.OjbXlSFKHum8XnggM7U.haLkyJSwYy', 'nicolas.jpg'),
        ('cld3oqdd00010vkp0l96pt39i', 'student1', 'student1', 1, FALSE, '$2b$10$MAcXguCFHTV5ES5xG9CF8.BYAfWkqyB/E6R7/rQLUHGj19NO4uecq', 'student1.jpg'),
       ('cld3oqdd00210vkp0l96pt39i', 'student2', 'student2', 1, FALSE, '$2b$10$RnIhgvVkWb8r2aVmIBnoxuyZDDw2NHhYpx1sR9nVyXO6dl.kkW1Ha', 'student2.jpg'),
       ('cld3oqda00210vkp0l96pt39i', 'kc1abby', 'abby', 1, FALSE, '$2b$10$lEsy9v0/9p.o3AaHH0smnuqRgWdEu64jNDYR1YI4qjIyPVBwlEWb6', 'abby.jpg');


  
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
