create table "public"."Subject" (
    "id" uuid not null default uuid_generate_v4(),
    "name" text not null,
    "image" text not null
);


CREATE UNIQUE INDEX "Subject_pkey" ON public."Subject" USING btree (id);

alter table "public"."Subject" add constraint "Subject_pkey" PRIMARY KEY using index "Subject_pkey";


