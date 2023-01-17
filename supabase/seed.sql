-- in supabase/seed.sql
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
values ('Nicolas', 'nicolas.jpg', ARRAY ['success1.jpg', 'success2.jpg'], ARRAY ['failure1', 'failure2']);
  
insert into public."Flashcard" (name, image, audio, class_name)
values ('Cat', 'cat.png', 'cat.mp3', 'Domestic animals'),
  ('Dog', 'dog.jpg', 'dog.mp3', 'Domestic animals');
  -- ('Bird', 'bird.jpg', 'bird.mp3', 'Domestic animals'),
  -- ('Mouse', 'mouse.jpg', 'mouse.mp3', 'Domestic animals');
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
