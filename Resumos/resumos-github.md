# 📚 GIT HUB

## Materiais de ajuda
- [Documentação](https://git-scm.com/book/en/v2)
- [Repositório Git](https://github.com/elidianaandrade/dio-curso-git-github)
- [Slides - versionamento de código co Git e GitHub](https://academiapme-my.sharepoint.com/:p:/g/personal/renato_dio_me/EYjkgVZuUv5HsVgJUEPv1_oB_QWs8MFBY_PBQ2UAtLqucg?e=262HGK)

## Comandos

- git init -->  Inicializa o versionamento de um repositótio local
- git clone URL nome-que-quer-dar-repo-local --> Clona na máquina local um repositório, nome-que-quer-dar-repo-local (opcional)
- git clone URL --branch nome-branch-a-ser-clonada --single-branch --> Clona na máquina local uma branch específica

- git remote -v --> mostra os repositórios remotos que estão vinculados

- git remote add origin URL --> conecta o repositório local ao repositório remoto

- git status --> mostra estado dos arquivos
    - Untracked files: arquivos que o git não conhece, eles não foram commitados antes
touch nome-arquivo.extensao --> criar arquivos, por linha de comando

- git add nome-arquivo --> Adiciona o arquivo na área de preparação para subir o arquivo para o repositório remoto, se no lugar do arquivo colocar um . considera todos os arquivos

- git commit -m"Mensagem" --> Envia as alterações para o repositório remoto
- git commit --amend -m"Nova mensagem" --> Alterar a mensagem do último commit

- echo nome-pasta > .gitignore --> move a pasta para gitignore, que não faz upload e nem solicita commit dos arquivos

- git log --> Exibe o log de commits

- git restore nome-arquivo --> descarta as alterações realizadas em um arquivo

- git reset --> desfaz um commit, para isso usar git log para descobrir chave do commit,

- git push origin nome-branch --> subir alterações do repositório local, para o remoto

- git pull origin nome-branch --> mescla as alterações do repositórios remoto com o local, no repositório local

- git checkout -b nome-branch --> muda para a branch indicada, se a branch não existir vai ser criada
- git checkout nome-branch --> volta para a branch

- remote origin = nome do servidor onde foi clonao o arquivo
- arquivo .gitkeep --> usado para o reconhecimento de pastas vazias

- git fetch origin main --> baixa as atualizações do repositório remoto, sem substituir no arquivo local
- git diff main origin/main --> mostra as diferenças entre os arquivos do repositório local e remoto (após um git fetch)
- git merge origin/main --> combina as alterações do repositório remoto com o local, na máquina local
- git stash --> arquiva uma modificação

# 📑 MARKDOWN
- [Informações sobre como usar markdown](https://docs.github.com/pt/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)

- [Site de icons](https://www.flaticon.com/br/)