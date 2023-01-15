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
values ('Nicolas', 'nicolas.jpg', ARRAY ['success1', 'success2'], ARRAY ['failure1', 'failure2']);
  
insert into public."Flashcard" (name, image, audio, class_name)
values ('Cat', 'cat.jpg', 'cat.mp3', 'Domestic animals'),
  ('Dog', 'dog.jpg', 'dog.mp3', 'Domestic animals');
  -- ('Bird', 'bird.jpg', 'bird.mp3', 'Domestic animals'),
  -- ('Mouse', 'mouse.jpg', 'mouse.mp3', 'Domestic animals');
  -- ('Cow', 'cow.jpg', 'cow.mp3', 'Farm animals'),
  -- ('Pig', 'pig.jpg', 'pig.mp3', 'Farm animals'),
  -- ('Lion', 'lion.jpg', 'lion.mp3', 'Zoo animals'),
  -- ('Tiger', 'tiger.jpg', 'tiger.mp3', 'Zoo animals');
  