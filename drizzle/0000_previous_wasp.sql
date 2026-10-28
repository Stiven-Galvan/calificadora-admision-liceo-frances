CREATE TABLE `preschool_admissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`request_id` text NOT NULL,
	`student` text NOT NULL,
	`level` text NOT NULL,
	`decision` text NOT NULL,
	`created_at` text NOT NULL,
	`created_by` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `preschool_admissions_request_id_unique` ON `preschool_admissions` (`request_id`);