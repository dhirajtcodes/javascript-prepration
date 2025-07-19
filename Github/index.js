//  Create / Clone a Repo
// git init                                       # Initialize a new Git repository
// git clone <repo-url>                           # Clone a GitHub repo to your system

// 🌿 Branching
// git branch                                     # List all branches
// git branch <branch-name>                       # Create a new branch
// git checkout <branch-name>                     # Switch to a branch
// git checkout -b <branch-name>                  # Create and switch to a new branch
// git merge <branch-name>                        # Merge a branch into current
// git branch -d <branch-name>                    # Delete a branch locally

// 📄 Basic Workflow
// git status                                     # Show changes and current branch
// git add <file>                                 # Add a file to staging area
// git add .                                      # Add all changes
// git commit -m "Your commit message"            # Commit changes with a message
// git push                                       # Push changes to remote repo
// git pull                                       # Pull latest changes from remote

// 🔁 Remote Repositories
// git remote -v                                  # Show remote URLs
// git remote add origin <repo-url>               # Add a new remote repo
// git push -u origin <branch-name>               # Push branch to GitHub (first time)
// git push origin --delete <branch-name>         # Delete branch from remote

// Stashing Changes
// git stash                                      # Stash current changes
// git stash list                                 # List stashed changes
// git stash apply                                # Reapply the latest stash
// git stash pop                                  # Apply and remove latest stash

// Reverting Changes
// git checkout -- <file>                         # Revert changes

// Ignoring Files
// git rm --cached <file>                         # Untrack a file

// ⚙️ Other Useful Commands
// git fetch                                      # Fetch updates from remote
// git cherry-pick <commit-hash>                  # Apply a specific commit
// git blame <file>                               # Show who modified each line of a file

// 🧠 Tags
// git tag                                        # List tags
// git tag <tag-name>                             # Create a new tag
// git push origin <tag-name>                     # Push a specific tag
// git push origin --tags                         # Push all tags

// 🔍 Logs / Diffs
// git log                                        # View commit history
// git log --oneline                              # Compact commit history
// git diff                                       # View unstaged changes
// git diff --staged                              # View staged changes

// 🧹 Undo / Reset
// git restore <file>                             # Undo changes in a file
// git reset <file>                               # Unstage a file
// git reset --hard                               # Discard all local changes
// git revert <commit-hash>                       # Revert a specific commit
