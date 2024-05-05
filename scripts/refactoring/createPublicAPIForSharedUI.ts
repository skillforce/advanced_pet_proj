import { Project } from 'ts-morph';
import path from 'path';

const project = new Project();

// get all required files to refactor/checking
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// write all these files in variable
const files = project.getSourceFiles();
const sharedUIPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
// get directory in certain path
const sharedUIDirectory = project.getDirectory(sharedUIPath);

// get all directories in certain path
const componentsDirs = sharedUIDirectory?.getDirectories();

// detect only absolute imports related to our own code
function isAbsolute(value:string) {
    const layers = ['app', 'entity', 'features', 'pages', 'shared', 'widgets'];
    return layers.some((path) => value.startsWith(path));
}

componentsDirs?.forEach((dir) => {
    const indexFileName = `${dir.getPath()}/index.ts`;
    const indexFile = dir.getSourceFile(indexFileName);
    if (!indexFile) {
        const sourceCode = `export * from './${dir.getBaseName()}';`;
        const file = dir.createSourceFile(indexFileName, sourceCode, { overwrite: true });
        file.save();
    }
});

files.forEach((sourceFile) => {
    // get all imports inside certain file
    const importDeclarations = sourceFile.getImportDeclarations();
    // check every import and adjust if needed
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segments = valueWithoutAlias.split('/');
        // determine that current import is from shared folder and from ui folder in it
        const isShared = segments[0] === 'shared';
        const isUiSlice = segments[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isShared && isUiSlice) {
            // make absolute path from relative
            const result = valueWithoutAlias.split('/').slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});
// save all changes that being made
project.save();
