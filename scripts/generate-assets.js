const fs = require("fs/promises");

const outputFile = "../constants/assets.ts";

const folders = [
    "../assets/images",
    "../assets/icons"
];

const app = async () => {
    const assetsObject = {};

    for (const folder of folders) {
        const items = await fs.readdir(folder);

        const splitedFolderName = folder.split("/");
        const folderName = splitedFolderName[splitedFolderName.length - 1];

        for (const item of items) {

            const isolatedItemName = item.split(".")[0]
                .replaceAll(" ", "_")
                .replaceAll("-", "_")
                .toUpperCase();

            const isolatedFolderName = folderName.toUpperCase();

            if (Object.hasOwn(assetsObject, isolatedFolderName)) {
                assetsObject[isolatedFolderName] = {
                    ...assetsObject[isolatedFolderName],
                    [isolatedItemName]: `@/assets/${folderName}/${item}`
                };
            } else {
                assetsObject[isolatedFolderName] = {
                    [isolatedItemName]: `@/assets/${folderName}/${item}`
                };
            }
        }
    }

    const itemsTemplate = Object.keys(assetsObject).map((key) => {
        const items = Object.keys(assetsObject[key]).map(itemKey => {
            return `'${itemKey}': require('${assetsObject[key][itemKey]}'),`;
        });

        return `'${key}' : {${items.join("")}},`;
    });

    const template = `
        export const ASSETS = {
            ${itemsTemplate.join("")}
        }
    `;

    await fs.writeFile(outputFile, template);

    console.log(`\nAssets generated successfully! [ out: ${outputFile} ]`);

};

app();