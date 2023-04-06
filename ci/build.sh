#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)

TICKET_NUMBER="${BRANCH:0:2}"
REGEX='^[0-9]+$'

if [ "$BRANCH" = "main" ]
then 
  VERSION=$(npm version minor)
elif [[ $TICKET_NUMBER =~ $REGEX ]]
then 
  VERSION=$(npm version patch)
fi

echo "Version changed to $VERSION"