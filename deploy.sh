#!/usr/bin/env sh

# break the build if errors thrown
set -e

# build
npm run build

# move to the build directory
cd dist

# if you publish to custom domain
# echo 'www.test.tv' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you post to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you post to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vvxcoder/borisbot_tt.git master:gh-pages

cd -
