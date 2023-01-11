type Class = {
  _id: string;
  subject: string;
  name: string;
  image: string;
  teacher: string;
  flashcards: [string];
};

type Flashcard = {
  _id: string;
  name: string;
  audio: string;
  image: string;
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
