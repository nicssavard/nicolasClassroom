type Class = {
  id: number;
  subject_name: string;
  name: string;
  image: string;
};

type Flashcard = {
  id: number;
  name: string;
  audio: string;
  image: string;
  subject_name: string;
  class_name: string;
};

type Group = {
  _id: string;
  name: string;
  teacher: string;
  image: string;
};

type Subject = {
  _id: string;
  name: string;
  image: string;
};

type User = {
  _id: string;
  username: string;
  name: string;
  image: string;
  position: string;
  priviledge: string;
  is_admin: boolean;
  points: number;
  group: {
    _id: string;
    name: string;
    teacher: string;
    image: string;
  };
  failureImage: [string];
  successImage: [string];
};

type Teacher = {
  id: number;
  name: string;
  image: string;
  success_image: string[];
  failure_image: string[];
};
