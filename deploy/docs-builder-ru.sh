#!/bin/sh

if [ -d "./docs" ]; then
  rm -rf ./docs
fi
if [ -d "./website" ]; then
    rm -rf ./website
fi
mkdir website

git clone https://gitee.com/openeuler/docs
cd ./docs
git checkout -b website origin/website
cp -r * ../website

for r in $(git branch -r --list "origin/stable2-*")
do
  b=${r##*origin/stable2-}
  git checkout -b $b $r

  
  if [ -d "./docs/ru" ]; then
    mkdir -p ../website/content/ru/docs/$b
        cp -r ./docs/ru/* ../website/content/ru/docs/$b/ 
  fi
  
  cd ..
  cd ./docs
done
cd ..

cp -f ./website/Dockerfile-ru ./website/Dockerfile
cp -f ./website/config.ru.toml ./website/config.toml