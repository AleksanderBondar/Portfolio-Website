import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllProjects = () => {
    const pathToFolderContent = path.join(process.cwd(), 'content', 'projects');
    const contentDirectoryFiles = fs.readdirSync(pathToFolderContent);

    const withGrayMatter = contentDirectoryFiles.map((adf) => {
        const realPath = path.join(pathToFolderContent, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const changeToMatter = matter(fileContents);

        return changeToMatter.data as {
            header: string;
            subtitle: string;
            description: string;
            imgPath: string;
            id: string;
        };
    });
    return withGrayMatter;
};
