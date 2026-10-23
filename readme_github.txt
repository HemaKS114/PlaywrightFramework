Git installation and push commands:

1.to check git version
    git --version   
    gh --version
2. to login on github CLI(gh)
    gh auth login
3. to initialize git
    git init 
4. to add the framework into git
    git add .
5. to commit with message  
    git commit -m ""Initial commit: Playwright framework"
6. to push it on main branch
    git branch -M main
7. Replace placeholders with your GitHub username and repository name. (If Git asks for authentication, use the supported GitHub sign-in flow; do not put credentials in the remote URL.)

    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
8. push your code into git
    git push -u origin main -> for the first time. next time git push is enough

Everyday Git workflow(git status shows modified/untracked files; git add stages changes; git commit saves a local snapshot; git push sends committed changes to GitHub. git pull --rebase can incorporate remote updates before pushing when appropriate.)

1. git status
2. git add .
3. git commit -m "Add reusable login test utilities"
4. git push

Verification commands

1. status reports a clean working tree after a successful commit/push
    git status
2. remote -v points to the correct GitHub URL
    git remote -v
3. current branch is main (if selected)
    git branch --show-current
4. GitHub Code tab shows the same latest commit
git log -1 --oneline


