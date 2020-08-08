# Team E
___
### How to Make Contributions to This Repo

1. Fork the repo
2. Clone the forked repo to your local machine
3. On your local machine inside the cloned repo, add the original repository as a remote called upstream(git remote add upstream https://github.com/<<our repository>>)
4. Create and checkout to a new branch to work ( `git checkout -b ft-chimdia`)
5. Implement your feature on the branch you created
6. After you have implemented your feature, run the following in gitbash or terminal
    * `git add .`
    *   `git commit -m "your commit message goes here.."`
    * git push (e.g. `git push origin ft-chimdia`)
7. Go to github and create a pull request from your fork


## Branch Naming
___
All contributors should adhere to the following branch naming format:

```
{story type}-{slack-username}
```

### Story type should be one of the following:

* ft == feature
* bg == bug
* rf == refactor


### Example
```
ft-chimdia
```


### Note
In other to stay updated with the main repo, always ensure to pull upstream changes into your local repo 

#### Example

`git pull upstream master`





