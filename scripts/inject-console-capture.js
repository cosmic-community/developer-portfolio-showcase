const fs = require("fs");
const path = require("path");

const buildDir = path.join(process.cwd(), ".next");
const scriptTag = '<script src="/dashboard-console-capture.js"></script>';

function walkDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      const html = fs.readFileSync(fullPath, "utf8");
      if (!html.includes(scriptTag)) {
        const updated = html.replace("</head>", `${scriptTag}</head>`);
        fs.writeFileSync(fullPath, updated, "utf8");
      }
    }
  });
}

if (fs.existsSync(buildDir)) {
  walkDir(buildDir);
}