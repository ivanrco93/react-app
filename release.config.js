module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/ivanrco93/react-app",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github'
    ]
}