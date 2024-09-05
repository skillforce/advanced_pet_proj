import { Project } from 'ts-morph';

const project = new Project();

// get all required files to refactor/checking
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

// write all these files in variable
const files = project.getSourceFiles();

// detect only absolute imports related to our own code
function isAbsolute(value: string) {
    const layers = ['app', 'entity', 'features', 'pages', 'shared', 'widgets'];
    return layers.some((path) => value.startsWith(path));
}
files.forEach((sourceFile) => {
    // get all imports inside certain file
    const importDeclarations = sourceFile.getImportDeclarations();
    // check every import and adjust if needed
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            // adjust absolute import for using alias
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
