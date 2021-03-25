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

  mkdir -p ../website/content/zh/docs/$b
  cp -r ./docs/zh/* ../website/content/zh/docs/$b/ 

  mkdir -p ../website/content/en/docs/$b
  cp -r ./docs/en/* ../website/content/en/docs/$b/ 
  
  if [ -d "./docs/ru" ]; then
    mkdir -p ../website/content/ru/docs/$b
        cp -r ./docs/ru/* ../website/content/ru/docs/$b/ 
  fi
  
  cd ..
  cd ./docs
done
cd ..
if [ -d "./website/content/zh/docs/1.0_Base" ];then
    rm -rf ./website/content/zh/docs/1.0_Base
fi
if [ -d "./website/content/en/docs/1.0_Base" ];then
    rm -rf ./website/content/en/docs/1.0_Base
fi
if [ -d "./website/content/ru/docs/1.0_Base" ];then
    rm -rf ./website/content/ru/docs/1.0_Base
fi
