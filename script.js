

    const quizData = [
      {
        question: 'Which command shows the current repository status?',
        options: ['git push', 'git status', 'git merge', 'git branch'],
        answer: 'git status'
      },
      {
        question: 'Which command creates a commit?',
        options: ['git pull', 'git add .', 'git commit -m "message"', 'git log'],
        answer: 'git commit -m "message"'
      },
      {
        question: 'Which command uploads commits to GitHub?',
        options: ['git push', 'git status', 'git init', 'git branch'],
        answer: 'git push'
      },
      {
        question: 'Which command creates and switches to a branch?',
        options: ['git switch -c navbar', 'git pull', 'git add .', 'git log'],
        answer: 'git switch -c navbar'
      },
    
  {
    question: 'Which command creates a new Git repository?',
    options: ['git start', 'git init', 'git create', 'git new'],
    answer: 'git init'
  },
  {
    question: 'Which command shows the current repository status?',
    options: ['git push', 'git status', 'git merge', 'git branch'],
    answer: 'git status'
  },
  {
    question: 'Which command adds all files to the staging area?',
    options: ['git add .', 'git stage', 'git commit', 'git push'],
    answer: 'git add .'
  },
  {
    question: 'Which command creates a commit?',
    options: ['git pull', 'git add', 'git commit -m "message"', 'git branch'],
    answer: 'git commit -m "message"'
  },
  {
    question: 'Which command shows commit history?',
    options: ['git log', 'git push', 'git status', 'git init'],
    answer: 'git log'
  },
  {
    question: 'Which command shows compact commit history?',
    options: ['git shortlog', 'git log --oneline', 'git history', 'git show'],
    answer: 'git log --oneline'
  },
  {
    question: 'Which command creates a new branch?',
    options: ['git branch feature-login', 'git switch main', 'git merge', 'git init'],
    answer: 'git branch feature-login'
  },
  {
    question: 'Which command switches to another branch?',
    options: ['git branch', 'git switch main', 'git push', 'git fetch'],
    answer: 'git switch main'
  },
  {
    question: 'Which command creates and switches to a branch?',
    options: ['git merge', 'git switch -c navbar', 'git pull', 'git reset'],
    answer: 'git switch -c navbar'
  },
  {
    question: 'Which command merges a branch into current branch?',
    options: ['git merge feature-navbar', 'git add .', 'git clone', 'git log'],
    answer: 'git merge feature-navbar'
  },
  {
    question: 'Which command uploads commits to GitHub?',
    options: ['git pull', 'git push', 'git merge', 'git status'],
    answer: 'git push'
  },
  {
    question: 'Which command downloads latest changes from remote?',
    options: ['git add', 'git pull', 'git branch', 'git mv'],
    answer: 'git pull'
  },
  {
    question: 'Which command downloads remote changes without merging?',
    options: ['git fetch', 'git push', 'git add', 'git restore'],
    answer: 'git fetch'
  },
  {
    question: 'Which command clones a repository?',
    options: ['git clone', 'git copy', 'git fetch', 'git init'],
    answer: 'git clone'
  },
  {
    question: 'Which command shows unstaged changes?',
    options: ['git diff', 'git log', 'git stash', 'git clean'],
    answer: 'git diff'
  },
  {
    question: 'Which command shows staged changes?',
    options: ['git diff --staged', 'git add .', 'git branch', 'git grep'],
    answer: 'git diff --staged'
  },
  {
    question: 'Which command discards file changes?',
    options: ['git restore file.txt', 'git push', 'git fetch', 'git tag'],
    answer: 'git restore file.txt'
  },
  {
    question: 'Which command removes a file from staging area?',
    options: ['git restore --staged app.js', 'git merge', 'git clone', 'git log'],
    answer: 'git restore --staged app.js'
  },
  {
    question: 'Which command deletes a file and stages deletion?',
    options: ['git rm old.txt', 'git clean', 'git branch', 'git show'],
    answer: 'git rm old.txt'
  },
  {
    question: 'Which command renames a file?',
    options: ['git rename', 'git mv old.txt new.txt', 'git branch', 'git fetch'],
    answer: 'git mv old.txt new.txt'
  },
  {
    question: 'Which command shows remote repositories?',
    options: ['git remote -v', 'git pull', 'git tag', 'git log'],
    answer: 'git remote -v'
  },
  {
    question: 'Which command adds a remote repository?',
    options: ['git remote add origin url', 'git clone', 'git reset', 'git show'],
    answer: 'git remote add origin url'
  },
  {
    question: 'Which command pushes and sets upstream branch?',
    options: ['git push -u origin main', 'git add .', 'git fetch', 'git merge'],
    answer: 'git push -u origin main'
  },
  {
    question: 'Which command temporarily saves changes?',
    options: ['git stash', 'git pull', 'git init', 'git show'],
    answer: 'git stash'
  },
  {
    question: 'Which command restores stashed changes?',
    options: ['git stash pop', 'git push', 'git diff', 'git clean'],
    answer: 'git stash pop'
  },
  {
    question: 'Which command shows all stashes?',
    options: ['git stash list', 'git log', 'git tag', 'git branch'],
    answer: 'git stash list'
  },
  {
    question: 'Which command unstages a file?',
    options: ['git reset HEAD file.txt', 'git push', 'git show', 'git archive'],
    answer: 'git reset HEAD file.txt'
  },
  {
    question: 'Which command removes all local changes?',
    options: ['git reset --hard', 'git add .', 'git fetch', 'git stash'],
    answer: 'git reset --hard'
  },
  {
    question: 'Which command reverses a commit using a new commit?',
    options: ['git revert commit-id', 'git rebase', 'git grep', 'git blame'],
    answer: 'git revert commit-id'
  },
  {
    question: 'Which command copies a commit into current branch?',
    options: ['git cherry-pick commit-id', 'git stash', 'git rm', 'git show'],
    answer: 'git cherry-pick commit-id'
  },
  {
    question: 'Which command reapplies commits on another branch?',
    options: ['git rebase main', 'git pull', 'git clean', 'git archive'],
    answer: 'git rebase main'
  },
  {
    question: 'Which command lists tags?',
    options: ['git tag', 'git grep', 'git mv', 'git shortlog'],
    answer: 'git tag'
  },
  {
    question: 'Which command creates a new tag?',
    options: ['git tag v1.0', 'git push', 'git fetch', 'git reset'],
    answer: 'git tag v1.0'
  },
  {
    question: 'Which command shows details of a commit?',
    options: ['git show', 'git branch', 'git clean', 'git add'],
    answer: 'git show'
  },
  {
    question: 'Which command shows who changed each line?',
    options: ['git blame app.js', 'git merge', 'git fetch', 'git clone'],
    answer: 'git blame app.js'
  },
  {
    question: 'Which command sets Git username globally?',
    options: [
      'git config --global user.name "Nayeem"',
      'git init',
      'git tag',
      'git stash'
    ],
    answer: 'git config --global user.name "Nayeem"'
  },
  {
    question: 'Which command sets Git email globally?',
    options: [
      'git config --global user.email "mail@example.com"',
      'git reset',
      'git log',
      'git branch'
    ],
    answer: 'git config --global user.email "mail@example.com"'
  },
  {
    question: 'Which command shows Git settings?',
    options: ['git config --list', 'git clean', 'git add .', 'git pull'],
    answer: 'git config --list'
  },
  {
    question: 'Which command deletes a branch?',
    options: ['git branch -d feature-login', 'git show', 'git fetch', 'git tag'],
    answer: 'git branch -d feature-login'
  },
  {
    question: 'Which command removes untracked files?',
    options: ['git clean -f', 'git clone', 'git stash', 'git merge'],
    answer: 'git clean -f'
  },
  {
    question: 'Which command lists tracked files?',
    options: ['git ls-files', 'git diff', 'git mv', 'git reset'],
    answer: 'git ls-files'
  },
  {
    question: 'Which command shows commit summary by author?',
    options: ['git shortlog', 'git show', 'git grep', 'git fetch'],
    answer: 'git shortlog'
  },
  {
    question: 'Which command creates a zip archive?',
    options: ['git archive', 'git stash', 'git pull', 'git blame'],
    answer: 'git archive'
  },
  {
    question: 'Which command starts searching for bad commit?',
    options: ['git bisect start', 'git branch', 'git tag', 'git mv'],
    answer: 'git bisect start'
  },
  {
    question: 'Which command searches text in repository files?',
    options: ['git grep "navbar"', 'git merge', 'git clean', 'git clone'],
    answer: 'git grep "navbar"'
  },
  {
    question: 'Which command shows reference history?',
    options: ['git reflog', 'git archive', 'git stash', 'git add'],
    answer: 'git reflog'
  },
  {
    question: 'Which command edits the last commit?',
    options: ['git commit --amend', 'git pull', 'git fetch', 'git rm'],
    answer: 'git commit --amend'
  },
  {
    question: 'Which command pulls changes from origin main?',
    options: ['git pull origin main', 'git push', 'git show', 'git init'],
    answer: 'git pull origin main'
  },
  {
    question: 'Which command stages a specific file?',
    options: ['git add app.js', 'git merge', 'git clean', 'git clone'],
    answer: 'git add app.js'
  },
  {
    question: 'Which command switches to main branch?',
    options: ['git switch main', 'git stash', 'git tag', 'git grep'],
    answer: 'git switch main'
  },
  {
    question: 'Which command checks repository state?',
    options: ['git status', 'git mv', 'git archive', 'git reflog'],
    answer: 'git status'
  }
];

    let currentQuestion = 0;
    let score = 0;

    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const scoreEl = document.getElementById('score');

    function loadQuestion() {
      const currentQuiz = quizData[currentQuestion];

      questionEl.textContent = currentQuiz.question;
      optionsEl.innerHTML = '';

      currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;

        button.addEventListener('click', () => {
          checkAnswer(button, option, currentQuiz.answer);
        });

        optionsEl.appendChild(button);
      });
    }

    function checkAnswer(button, selected, correct) {
      const allButtons = document.querySelectorAll('.option-btn');

      allButtons.forEach(btn => btn.disabled = true);

      if (selected === correct) {
        button.classList.add('correct');
        score++;
      } else {
        button.classList.add('wrong');

        allButtons.forEach(btn => {
          if (btn.textContent === correct) {
            btn.classList.add('correct');
          }
        });
      }

      scoreEl.textContent = `Score: ${score} / ${quizData.length}`;

      setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          questionEl.textContent = 'Quiz Completed!';
          optionsEl.innerHTML = '<h3>You finished the Git quiz.</h3>';
        }
      }, 1200);
    }

    loadQuestion();
  