-- CreateTable
CREATE TABLE `activity` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `leader` VARCHAR(191) NOT NULL,
    `is_done` BOOLEAN NOT NULL DEFAULT false,
    `author` VARCHAR(191) NOT NULL DEFAULT 'HMTI',
    `logo` VARCHAR(191) NOT NULL DEFAULT 'hmti-logo.png',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
