#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$BRANCH" = "main" ]
then 
  VERSION=$(npm version minor)
else
  VERSION=$(npm version patch)
fi

echo "Version changed to $VERSION"