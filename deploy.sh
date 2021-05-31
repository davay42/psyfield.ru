cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:davay42/psyfield.ru.git master:gh-pages

cd -