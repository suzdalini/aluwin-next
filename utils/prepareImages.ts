import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Поддержка __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../public/img/systems');
const maxWidth = 2000;
const quality = 90;

const isImage = (filename: string) =>
    ['.jpg', '.jpeg', '.png'].includes(path.extname(filename).toLowerCase());

async function optimizeImage(inputPath: string) {
    const { dir, name } = path.parse(inputPath);
    const outputPath = path.join(dir, `${name}.webp`);

    try {
        await sharp(inputPath).resize({ width: maxWidth }).webp({ quality }).toFile(outputPath);

        fs.unlinkSync(inputPath);
        console.log(`✅ ${inputPath} → ${outputPath} (оригинал удален)`);
    } catch (err) {
        console.error(`❌ Ошибка при обработке ${inputPath}:`, err);
    }
}

async function walkAndOptimize(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await walkAndOptimize(fullPath); // рекурсия
        } else if (entry.isFile() && isImage(entry.name)) {
            await optimizeImage(fullPath);
        }
    }
}

async function start() {
    console.log(`📂 Начинаем обработку папки: ${rootDir}`);
    await walkAndOptimize(rootDir);
    console.log('✅ Все изображения оптимизированы!');
}

start();
