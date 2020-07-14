# A very simple github action to base64 encode a file

Uses this npm package https://www.npmjs.com/package/file-base64

example:
```
steps:
- uses: frostebite/File-To-Base64@master
  id: base64Config
  with:
    - filePath: ~/.kube/config
```

output can then be used:
```
steps:
- uses: frostebite/File-To-Base64@master
  id: base64Config
  with:
    - filePath: ~/.kube/config
- uses: frostebite/kubernetes-download-pv@master
  with:
    kubernetesBase64Config: ${{ steps.base64Config.outputs.base64 }}
```