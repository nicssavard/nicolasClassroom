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
  ('abcd', 'abcd.jpg', 'Phonics');

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
  ('D', 'd.jpg', 'd.mp3', 'Phonics', 'abcd');
  -- ('E', 'e.jpg', 'e.mp3', 'Phonics', 'abcd'),
  -- ('F', 'f.jpg', 'f.mp3', 'Phonics', 'abcd'),
  -- ('G', 'g.jpg', 'g.mp3', 'Phonics', 'abcd'),
  -- ('H', 'h.jpg', 'h.mp3', 'Phonics', 'abcd'),
  -- ('I', 'i.jpg', 'i.mp3', 'Phonics', 'abcd'),
  -- ('J', 'j.jpg', 'j.mp3', 'Phonics', 'abcd'),
  -- ('K', 'k.jpg', 'k.mp3', 'Phonics', 'abcd'),
  -- ('L', 'l.jpg', 'l.mp3', 'Phonics', 'abcd'),
  -- ('M', 'm.jpg', 'm.mp3', 'Phonics', 'abcd'),
  -- ('N', 'n.jpg', 'n.mp3', 'Phonics', 'abcd'),
  -- ('O', 'o.jpg', 'o.mp3', 'Phonics', 'abcd'),
  -- ('P', 'p.jpg', 'p.mp3', 'Phonics', 'abcd'),
  -- ('Q', 'q.jpg', 'q.mp3', 'Phonics', 'abcd'),
  -- ('R', 'r.jpg', 'r.mp3', 'Phonics', 'abcd'),
  -- ('S', 's.jpg', 's.mp3', 'Phonics', 'abcd'),
  -- ('T', 't.jpg', 't.mp3', 'Phonics', 'abcd'),
  -- ('U', 'u.jpg', 'u.mp3', 'Phonics', 'abcd'),
  -- ('V', 'v.jpg', 'v.mp3', 'Phonics', 'abcd'),
  -- ('W', 'w.jpg', 'w.mp3', 'Phonics', 'abcd'),
  -- ('X', 'x.jpg', 'x.mp3', 'Phonics', 'abcd'),
  -- ('Y', 'y.jpg', 'y.mp3', 'Phonics', 'abcd'),
  -- ('Z', 'z.jpg', 'z.mp3', 'Phonics', 'abcd'),
  
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
