import { Migration } from '@mikro-orm/migrations';

export class Migration20220325121226 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_username_check";');
    this.addSql('alter table "user" alter column "username" type varchar(60) using ("username"::varchar(60));');
    this.addSql('alter table "user" drop constraint if exists "user_email_check";');
    this.addSql('alter table "user" alter column "email" type varchar(120) using ("email"::varchar(120));');

    this.addSql('alter table "category" drop constraint if exists "category_name_check";');
    this.addSql('alter table "category" alter column "name" type varchar(60) using ("name"::varchar(60));');
    this.addSql('alter table "category" drop constraint if exists "category_description_check";');
    this.addSql('alter table "category" alter column "description" type varchar(3000) using ("description"::varchar(3000));');
    this.addSql('alter table "category" drop column "member_count";');

    this.addSql('alter table "post" drop constraint if exists "post_title_check";');
    this.addSql('alter table "post" alter column "title" type varchar(100) using ("title"::varchar(100));');
    this.addSql('alter table "post" drop constraint if exists "post_body_check";');
    this.addSql('alter table "post" alter column "body" type varchar(15000) using ("body"::varchar(15000));');

    this.addSql('alter table "comment" drop constraint if exists "comment_body_check";');
    this.addSql('alter table "comment" alter column "body" type varchar(3000) using ("body"::varchar(3000));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_username_check";');
    this.addSql('alter table "user" alter column "username" type varchar(255) using ("username"::varchar(255));');
    this.addSql('alter table "user" drop constraint if exists "user_email_check";');
    this.addSql('alter table "user" alter column "email" type varchar(255) using ("email"::varchar(255));');

    this.addSql('alter table "category" add column "member_count" int not null;');
    this.addSql('alter table "category" drop constraint if exists "category_name_check";');
    this.addSql('alter table "category" alter column "name" type varchar(255) using ("name"::varchar(255));');
    this.addSql('alter table "category" drop constraint if exists "category_description_check";');
    this.addSql('alter table "category" alter column "description" type varchar(255) using ("description"::varchar(255));');

    this.addSql('alter table "post" drop constraint if exists "post_title_check";');
    this.addSql('alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));');
    this.addSql('alter table "post" drop constraint if exists "post_body_check";');
    this.addSql('alter table "post" alter column "body" type varchar(255) using ("body"::varchar(255));');

    this.addSql('alter table "comment" drop constraint if exists "comment_body_check";');
    this.addSql('alter table "comment" alter column "body" type varchar(255) using ("body"::varchar(255));');
  }

}
