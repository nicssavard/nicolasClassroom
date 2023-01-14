-- in supabase/seed.sql
insert into public."Subject" (name, image)
values
  ('Words', 'words.jpeg'),
  ('Questions', 'questions.jpeg'),
  ('Phonics', 'phonics.jpeg'),
  ('Math', 'math.jpeg');

insert into public."Class" (name, image, subject_id)
values ('Domestic animals', 'domestic_animals.jpeg', 1),
  ('Farm animals', 'farm_animals.jpeg', 1),
  ('Zoo animals', 'zoo_animals.jpeg', 1);
  