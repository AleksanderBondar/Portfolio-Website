import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllPhotos = () => {
    const pathToFolderContent = path.join(process.cwd(), 'content', 'photos');
    const contentDirectoryFiles = fs.readdirSync(pathToFolderContent);

    const withGrayMatter = contentDirectoryFiles.map((adf) => {
        const realPath = path.join(pathToFolderContent, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const changeToMatter = matter(fileContents);

        return changeToMatter.data as {
            title: string;
            description: string;
            imgPath: string;
            className: string;
            lat: number;
            lng: number;
            name: string;
        };
    });
    return withGrayMatter;
};
