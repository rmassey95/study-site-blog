---
title: "GitHub Cheatsheet"
folder: "Programming"
excerpt: "GitHub note on key commands and what these commands allow you to do"
date: "2023-02-16"
---

## Git Clone

`git clone <URL>` allows you to clone a remote repo to a local repo. The URL can be found on GitHub.

## Git Status

The `git status` command displays the status of your working directory and the staging area. Shows you which changes have been staged. The staging area includes what files you have changed but not yet committed to git.

## Git Add

The `git add .` command will add all the files that have been changed since the last commit to the staging area.

## Git Commit

Finally, to commit the changes that have been added to the staging area, you use the `git commit -m "message here"` command where `-m` can be used to specify a message for the git commit. This flag is not needed.

`git commit --amend` allows you to change the last commit by adding files to the git commit which you may have forgotten. You cannot ammend commits that have already been pushed somewhere.

## Git Log

`git log` will show the details of each commit.

## Git Push

`git push` command will allow you to push your local git repository to a remote repository. For example, `git push origin main` will push the local repo branch main to origin which will be a remote repo on GitHub. You can also include the `-f` flag to force the changes through.

## Git Remote

The `git remote` command allows you to create, view, and delete connections to remote repos. A few popular uses of `git remote` include:

- `git remote` and `git remote -v` - these are both the same commands that show any remote connections except the `-v` flag will display the URL of each connection.
- `git remote add <name> <url>` - this will create a new connnection to the specified URL (remote repo). The `<name>` can now be used to reference the URL.
- `git remote rm <name>` - simply removes the connection to the remote repo with `<name>`.

The commands above update/read from the ./.git/config file in your git repo.

## Git Pull

`git pull` is used to fetch and download content from a remote repo. `git pull` command is a combination of `git fetch` followed by `git merge`. `git fetch`, first command run, downloads content from a specified remote repo. After this is done, `git merge` is run which merges the remote content refs and heads into a new local merge commit. `git pull` is an easy way to synchronize your local repo with upstream changes.

`git pull --rebase` command will combine two branches commits, from the local and the remote repo, into one branch, typically main. Essentially, commits from the local branch will be deleted and added to the main branch in the remote repo. Without the `--rebase` flag, the commits will not be linear. The commits from the local repo will appear separately in the commit history when observing from the remote repo after using `git pull`.

## Git Rebase

Rebasing is the process of moving/combining a sequence of commits into a new base commit. Primary reason for using `rebase` is to maintain a linear project history. Even though you may have done your work on a separate branch, you can use `rebase` to make it appear as though you were working off the main branch, creating a linear history.

## Git Checkout

The `git checkout` command allows you to move around to other branches in your git repo. Checking out a new branch will cause the files in your working directory to update to the version of the branch you are looking at. Any new commits on the branch will be recorded on that branch.

You can also use `git checkout` to view past commits. In this case, the `HEAD` will be in a 'detatched state'.

## Git Branch

The `git branch` command will list all the branches in your repo. To create a new branch you type `git branch <branch>` where the branch name will be `<branch>`. IMPORTANT, this command will not go to that branch, use `git checkout` to switch to the newley created branch. `git branch -d <branch>` will delete the specified branch safely, meaning it won't delete the branch if there are unmerged changes. To delete a branch with unmerged changes, use `git branch -D <branc>`. `git branch -m <branch>` will rename the current branch to `<branch>`.

## Git Reset

`git reset <commit>` updates a branch, which is a pointer to a commit, to point to a different commit specified in the command (`<commit>`). Four main options to control what happens with `git reset`:

- `--hard` - makes everything match the commit specified. All local changes get removed.
- `--mixed` - default case for `git reset`. Resets the index but not the work tree. All your files will remain intact, but any differences between the original commit and the one you reset to will show as untracked files with `git status`. Useful when you have made some bad commits but you want to keep the work, update it and fix the commits.
- `--soft` - doesn't touch the index or the work tree. All files are intact and changes show up as 'changes to be committed' with `git status`. Useful when you've made some bad commits but the work is good.
- `--merge` - resets the index (like `--mixed`) and resets the files affected by a merge. Restores everything to how it was before a merge. Useful when you have made a bad merge.

## Git rm

To remove a folder from being tracked in your git repository you should first be sure to add it to your `.gitignore` file and next, type the following command:  
`git rm -r --cached path_to_your_folder/`
Now when you commit the changes, the folder that you specified above will no longer be tracked in your git repository.

## Git

`Git` is a version control system that creates snapshots of your work which allow you to return back to if needed. Provides a detailed history of your project, what features/work was done at what time, allows you to checkout this work and allows for relatively easy collaboration. You can think of it like saving a word document, except anytime you save the document, instead of that document being overwritter, a new snapshot of that word document is created. You can then view the different snapshots (saves) which holds different information. You can then collaborate with others by creating a copy of that word document on your computer, adding your changes and then pushing those changes back up to the main save without effecting anyone elses work on the main document.
