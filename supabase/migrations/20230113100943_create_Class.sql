create table "public"."Class" (
    "id" uuid not null,
    "name" text,
    "subject" uuid,
    "image" text
);


alter table "public"."Class" enable row level security;

CREATE UNIQUE INDEX "Class_pkey" ON public."Class" USING btree (id);

alter table "public"."Class" add constraint "Class_pkey" PRIMARY KEY using index "Class_pkey";

alter table "public"."Class" add constraint "Class_subject_fkey" FOREIGN KEY (subject) REFERENCES "Subject"(id) not valid;

alter table "public"."Class" validate constraint "Class_subject_fkey";


