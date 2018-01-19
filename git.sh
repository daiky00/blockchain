#!/bin/sh

git filter-branch --env-filter 
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Your Correct Name"
CORRECT_EMAIL="your-correct-email@example.com"
if [ "$GIT_COMMITTER_EMAIL" = "project.01@hotmal.com" ]
then
    export GIT_COMMITTER_NAME="daiky00"
    export GIT_COMMITTER_EMAIL="project.01@hotmail.com"
fi
if [ "$GIT_AUTHOR_EMAIL" = "project.01@hotmal.com" ]
then
    export GIT_AUTHOR_NAME="daiky00"
    export GIT_AUTHOR_EMAIL="project.01@hotmail.com"
fi
 --tag-name-filter cat -- --branches --tags