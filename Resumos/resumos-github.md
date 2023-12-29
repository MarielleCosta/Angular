# 📚 GIT HUB

- git init -->  Inicializa o versionamento de um repositótio local
- git clone URL nome-que-quer-dar-repo-local --> Clona na máquina local um repositório, nome-que-quer-dar-repo-local (opcional)
- git clone URL --branch nome-branch-a-ser-clonada  --single-branch --> Clona na máquina local uma branch específica

- git remote -v --> mostra os repositórios remotos que estão vinculados

- git remote add origin URL --> conecta o repositório local ao repositório remoto

- git status --> mostra estado dos arquivos
    - Untracked files: arquivos que o git não conhece, eles não foram commitados antes
touch nome-arquivo.extensao --> criar arquivos, por linha de comando

- git add nome-arquivo --> Adiciona o arquivo na área de preparação para subir o arquivo para o repositório remoto, se no lugar do arquivo colocar um . considera todos os arquivos

- git commit -m"Mensagem" --> Envia as alterações para o repositório remoto

- echo nome-pasta > .gitignore --> move a pasta para gitignore, que não faz upload e nem solicita commit dos arquivos

- git log --> Exibe o log de commits


- remote origin = nome do servidor onde foi clonao o arquivo
- arquivo .gitkeep --> usado para o reconhecimento de pastas vazias

# 📑 MARKDOWN
- [Informações sobre como usar markdown](https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)
