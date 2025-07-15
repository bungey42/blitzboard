
const fs = require('fs');
const { Octokit } = require("@octokit/rest");

const token = process.argv[2];
const octokit = new Octokit({ auth: token });

const repo = process.env.GITHUB_REPOSITORY;
const [owner, repoName] = repo.split("/");

async function run() {
  const newScores = fs.readFileSync(".github/new-scores.json", "utf-8");

  const { data: { sha } } = await octokit.repos.getContent({
    owner,
    repo: repoName,
    path: "scores.json",
    ref: "gh-pages"
  });

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo: repoName,
    path: "scores.json",
    message: "🔄 Update scores via GitHub Action",
    content: Buffer.from(newScores).toString("base64"),
    sha,
    branch: "gh-pages"
  });

  console.log("✅ scores.json updated via GitHub Actions");
}

run().catch(err => {
  console.error("❌ Error updating scores:", err);
  process.exit(1);
});
