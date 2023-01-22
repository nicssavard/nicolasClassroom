-- in supabase/seed.sql
insert into public."User" (id, name, is_admin, encrypted_password, image)
values ('cld3oqdd00000vkp0l96pt39i', 'nicolas', TRUE, '2f1995444cf9df2d9eb382c4971883a0:35cd1fecd18d6e6bb5f0446d725bb19b03d660453231cbfece7ecd0fe740aedc', 'nicolas.jpg');

insert into public."User" (id, name, group_name, is_admin, encrypted_password, image)
values ('cld3oqdd00010vkp0l96pt39i', 'student1', 'kc1', FALSE, 'e1ee12038f4c068fdd112925c07847e8:777fcb34e2b2a0a8b5f38207740d0ab0936aa901bd833cfd0a444027d9bec560', 'student1.jpg'),
       ('cld3oqdd00210vkp0l96pt39i', 'student2', 'kc1', FALSE, '4449632f043648976d9a296dcf9b0084:d39913587963ef2e1d8ae6ec200a00e6237133b0e794edd2f56476a94d601d6d', 'student2.jpg');

insert into public."Subject" (name, image)
values
  ('Words', 'words.jpg'),
  ('Questions', 'questions.jpg'),
  ('Phonics', 'phonics.png'),
  ('Math', 'math.jpg');

insert into public."Class" (name, image, subject_name)
values ('Domestic animals', 'domestic_animals.png', 'Words'),
  ('Farm animals', 'farm_animals.jpg', 'Words'),
  ('Zoo animals', 'zoo_animals.jpg', 'Words');

insert into public."Teacher" (name, image, success_image, failure_image)
values ('nicolas', 'nicolas.jpg', ARRAY ['success1.jpg', 'success2.jpg'], ARRAY ['failure1', 'failure2']);
  
insert into public."Flashcard" (name, image, audio, subject_name, class_name)
values ('Cat', 'cat.png', 'cat.mp3', 'Words', 'Domestic animals'),
  ('Dog', 'dog.jpg', 'dog.mp3', 'Words', 'Domestic animals'),
  ('Bird', 'bird.jpg', 'bird.mp3', 'Words', 'Domestic animals'),
  ('Mouse', 'mouse.jpg', 'mouse.mp3', 'Words', 'Domestic animals');
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
