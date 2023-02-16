create sequence "public"."Game_id_seq";

create table "public"."Game" (
    "id" integer not null default nextval('"Game_id_seq"'::regclass),
    "name" text not null,
    "image" text not null
);


alter sequence "public"."Game_id_seq" owned by "public"."Game"."id";

CREATE UNIQUE INDEX "Game_pkey" ON public."Game" USING btree (id);

alter table "public"."Game" add constraint "Game_pkey" PRIMARY KEY using index "Game_pkey";


