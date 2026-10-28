import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const admissions = sqliteTable('preschool_admissions', {
 id: integer('id').primaryKey({autoIncrement:true}),
 requestId: text('request_id').notNull().unique(),
 student: text('student').notNull(),
 level: text('level').notNull(),
 decision: text('decision').notNull(),
 createdAt: text('created_at').notNull(),
 createdBy: text('created_by').notNull(),
 teacher: text('teacher').notNull().default(''),
 period: text('period').notNull().default(''),
 observations: text('observations').notNull().default('{}'),
 assessment: text('assessment').notNull().default('{}'),
 placement: text('placement').notNull().default('{}'),
});
