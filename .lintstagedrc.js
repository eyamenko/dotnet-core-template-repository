module.exports = {
  '*.cs': filenames => [
    `dotnet dotnet-format --files ${filenames.join(',')}`,
    `git add ${filenames.join(' ')}`
  ]
}
