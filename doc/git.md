## 切分支

git branch -a
git checkout -b relase-merge-source-w origin/relase-merge-source-w

## 使用命令行推送已存在的仓库

git remote add origin https://e.coding.net/yearyeah/tj-express/test-git.git
git push -u origin master

## 使用命令行创建仓库

git clone https://e.coding.net/yearyeah/tj-express/test-git.git
cd test-git
echo "# test-git" >> README.md
git add README.md
git commit -m "first commit"
git push -u origin master
