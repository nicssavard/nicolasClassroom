type Class = {
  id: number;
  subject_id: number;
  name: string;
  image: string;
};

type Flashcard = {
  id: number;
  name: string;
  audio: string;
  image: string;
  class_id: number;
  subject_id: number;
};

type Group = {
  id: number;
  name: string;
};

type Game = {
  id: number;
  name: string;
  image: string;
};

type Subject = {
  id: number;
  name: string;
  image: string;
};

type User = {
  id: string;
  username: string;
  name: string;
  encrypted_password: string;
  image: string;
  is_admin: boolean;
  points: number;
  weekly_points: number;
  group_id: number;
};

type Teacher = {
  id: number;
  name: string;
  image: string;
  success_image: string[];
  failure_image: string[];
};

type Homework = {
  id: number;
  name: string;
  file: string;
  image: string;
};
