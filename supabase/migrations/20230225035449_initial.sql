create sequence "public"."CurriculumClasses_id_seq";

create table "public"."CurriculumClasses" (
    "id" integer not null default nextval('"CurriculumClasses_id_seq"'::regclass),
    "group_id" integer not null,
    "class_id" integer not null
);


alter sequence "public"."CurriculumClasses_id_seq" owned by "public"."CurriculumClasses"."id";

CREATE UNIQUE INDEX "CurriculumClasses_pkey" ON public."CurriculumClasses" USING btree (id);

alter table "public"."CurriculumClasses" add constraint "CurriculumClasses_pkey" PRIMARY KEY using index "CurriculumClasses_pkey";


