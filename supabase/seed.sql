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
  