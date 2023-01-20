create sequence "public"."Class_id_seq";

create sequence "public"."Flashcard_id_seq";

create sequence "public"."Group_id_seq";

create sequence "public"."Homework_id_seq";

create sequence "public"."Subject_id_seq";

create sequence "public"."Teacher_id_seq";

create table "public"."Account" (
    "id" text not null,
    "userId" text not null,
    "type" text not null,
    "provider" text not null,
    "providerAccountId" text not null,
    "refresh_token" text,
    "access_token" text,
    "expires_at" integer,
    "token_type" text,
    "scope" text,
    "id_token" text,
    "session_state" text
);


create table "public"."Class" (
    "id" integer not null default nextval('"Class_id_seq"'::regclass),
    "name" text not null,
    "image" text not null,
    "subject_name" text not null
);


create table "public"."Example" (
    "id" text not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP,
    "updatedAt" timestamp(3) without time zone not null
);


create table "public"."Flashcard" (
    "id" integer not null default nextval('"Flashcard_id_seq"'::regclass),
    "name" text not null,
    "image" text not null,
    "audio" text not null,
    "class_name" text not null
);


create table "public"."Group" (
    "id" integer not null default nextval('"Group_id_seq"'::regclass),
    "name" text not null
);


create table "public"."Homework" (
    "id" integer not null default nextval('"Homework_id_seq"'::regclass),
    "name" text not null,
    "image" text not null
);


create table "public"."Session" (
    "id" text not null,
    "sessionToken" text not null,
    "userId" text not null,
    "expires" timestamp(3) without time zone not null
);


create table "public"."Subject" (
    "id" integer not null default nextval('"Subject_id_seq"'::regclass),
    "name" text not null,
    "image" text not null
);


create table "public"."Teacher" (
    "id" integer not null default nextval('"Teacher_id_seq"'::regclass),
    "name" text not null,
    "image" text not null,
    "success_image" text[],
    "failure_image" text[]
);


create table "public"."User" (
    "id" text not null,
    "name" text,
    "encrypted_password" text,
    "email" text,
    "emailVerified" timestamp(3) without time zone,
    "image" text,
    "points" integer default 0,
    "tries" integer default 0,
    "group_name" text
);


create table "public"."VerificationToken" (
    "identifier" text not null,
    "token" text not null,
    "expires" timestamp(3) without time zone not null
);


alter sequence "public"."Class_id_seq" owned by "public"."Class"."id";

alter sequence "public"."Flashcard_id_seq" owned by "public"."Flashcard"."id";

alter sequence "public"."Group_id_seq" owned by "public"."Group"."id";

alter sequence "public"."Homework_id_seq" owned by "public"."Homework"."id";

alter sequence "public"."Subject_id_seq" owned by "public"."Subject"."id";

alter sequence "public"."Teacher_id_seq" owned by "public"."Teacher"."id";

CREATE UNIQUE INDEX "Account_pkey" ON public."Account" USING btree (id);

CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON public."Account" USING btree (provider, "providerAccountId");

CREATE UNIQUE INDEX "Class_pkey" ON public."Class" USING btree (id);

CREATE UNIQUE INDEX "Example_pkey" ON public."Example" USING btree (id);

CREATE UNIQUE INDEX "Flashcard_pkey" ON public."Flashcard" USING btree (id);

CREATE UNIQUE INDEX "Group_pkey" ON public."Group" USING btree (id);

CREATE UNIQUE INDEX "Homework_pkey" ON public."Homework" USING btree (id);

CREATE UNIQUE INDEX "Session_pkey" ON public."Session" USING btree (id);

CREATE UNIQUE INDEX "Session_sessionToken_key" ON public."Session" USING btree ("sessionToken");

CREATE UNIQUE INDEX "Subject_pkey" ON public."Subject" USING btree (id);

CREATE UNIQUE INDEX "Teacher_pkey" ON public."Teacher" USING btree (id);

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);

CREATE UNIQUE INDEX "User_pkey" ON public."User" USING btree (id);

CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON public."VerificationToken" USING btree (identifier, token);

CREATE UNIQUE INDEX "VerificationToken_token_key" ON public."VerificationToken" USING btree (token);

alter table "public"."Account" add constraint "Account_pkey" PRIMARY KEY using index "Account_pkey";

alter table "public"."Class" add constraint "Class_pkey" PRIMARY KEY using index "Class_pkey";

alter table "public"."Example" add constraint "Example_pkey" PRIMARY KEY using index "Example_pkey";

alter table "public"."Flashcard" add constraint "Flashcard_pkey" PRIMARY KEY using index "Flashcard_pkey";

alter table "public"."Group" add constraint "Group_pkey" PRIMARY KEY using index "Group_pkey";

alter table "public"."Homework" add constraint "Homework_pkey" PRIMARY KEY using index "Homework_pkey";

alter table "public"."Session" add constraint "Session_pkey" PRIMARY KEY using index "Session_pkey";

alter table "public"."Subject" add constraint "Subject_pkey" PRIMARY KEY using index "Subject_pkey";

alter table "public"."Teacher" add constraint "Teacher_pkey" PRIMARY KEY using index "Teacher_pkey";

alter table "public"."User" add constraint "User_pkey" PRIMARY KEY using index "User_pkey";

alter table "public"."Account" add constraint "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Account" validate constraint "Account_userId_fkey";

alter table "public"."Session" add constraint "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE CASCADE not valid;

alter table "public"."Session" validate constraint "Session_userId_fkey";


