import { readFile, writeFile, appendFile, unlink, mkdir, rmdir, stat } from "fs/promises";
import path from "path";
import { getFilePath, getNewPath, getDirName } from "./utils.mjs";

const filePath = getFilePath("example.txt");
const newFilePath = getNewPath("newFile.txt");
const tempDir = path.join(getDirName(), "temp");

async function fileSystemDemo() {
   try {
		console.log("1. Reading a file...");
		const content = await readFile(filePath, "utf-8");
		console.log("Content:", content);

    	console.log("\n2. Writing to a new file...");
    	await writeFile(newFilePath, "This is a new file!\n");
    	console.log("File written.");

    	console.log("\n3. Appending to the file...");
    	await appendFile(newFilePath, "Appended content.\n");
    	console.log("Content appended.");

    	console.log("\n4. Checking if the file exists...");
    	try {
      	const stats = await stat(newFilePath);
      	console.log("File exists:", stats.isFile());
    	} catch {
      	console.log("File does not exist.");
    	}

		console.log("\n5. Creating a temporary directory...");
		await fs.mkdir(tempDir, { recursive: true });
		console.log("Directory created:", tempDir);

		console.log("\n6. Deleting the new file...");
		await unlink(newFilePath);
		console.log("File deleted.");

		console.log("\n7. Removing the temp directory...");
		await rmdir(tempDir);
		console.log("Directory removed.");
   } catch (err) {
    	console.error("Error:", err.message);
   };
};

fileSystemDemo();
