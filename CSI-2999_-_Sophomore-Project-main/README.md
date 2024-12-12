# CSI 2999 ~ Sophomore Project: FitTrax
FitTrax is a fitness-tracking application that allows users to plan and track their workouts and overall health.

<!-- > [!NOTE]
> This file is very much empty at the moment, and will likely be updated with dramatic changes over the next little while as the project outline gets settled in and useful materials are added. *If you would like to update this file, please make a pull request, same as with updating anything else in this branch.* **Do *not* commit changes directly.** If you don't feel like writing and there's a section you'd like to see added, please let me (@aefentid-alpenglow) know on Discord and I will add it for you. -->

> [!TIP]
> Don't know how to use markdown? [Here's a handy guide that you can use when editing this file and other markdown files like it!](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## Contributors
- Joshua Carlson `@aefentid-alpenglow`
- Luke Dolan `@supreme302`
- Alexander Sekulski `@asekulski21`
- Sam Yalda `@Sam248586`

## How To Run FitTrax
1. Install a branch, either by downloading it directly from GitHub/the releases page or by cloning the repository using VSCode or another IDE.
2. Run `npm install` to obtain the node_modules folder containing all of the dependencies required to run the project.
3. Run `npm start` to boot up the project on a localhost instance.

## Branches
To edit this project, you should probably make a branch.
*Any branch that is meant to be edited by multiple people should not be directly committed to, and pull requests from sub-branches should be utilized instead to prevent the accidental overwriting of other people's uncommitted changes that might occur otherwise.*

Branches should be named differently depending on their purpose:
| Purpose | Convention | Description | Examples |
| - | - | - | - |
| Personal Branch | \<name\> | Create a branch in your own name or with your name somewhere within it (IRL or username) to signify a personal branch. Personal branches should only be edited by the person who made them. Basically, don't touch someone elses personal branch. As you're the only one editing your own branch, feel free to directly commit to them. | Alex, Luke, calorie-counter-alex |
| Implementation Branch | \<feature-to-be-implemented\> | If you wish to collaborate with others on a particiular feature, name the created branch after that feature. This indicates to people that this branch is for anyone to edit, as long as they are working on that particiular feature. Implementation branches should be updated via pull requests from personal implementation branches, of which good naming for those would be the name of the base implementation branch plus your name. If you wish to work on a feature solo, but still think it needs its own branch, then create only a personal implementation branch for that feature. | calorie-counter, custom-workout-plans |
<!-- < and > need to be escaped with \ -->
<!-- update with practical examples as the project evolves -->

Each branch has a *primary manager*, which is essentially just a fancy title for the person in charge of managing the branch and reviewing pull requests, including deciding what to do with overlapping code and other pull request issues. Although as far as I know anyone can approve a pull request, it's good practice to let the dedicated primary manager do the approval and merge. Don't take on this role if you don't feel like checking regularly and doing those tasks!

The chart below gives a basic overview of all major branches in this project and their purpose, as well as their primary managers.
| Name | Primary Manager | Description |
| - | - | - |
| [main](https://github.com/aefentid-alpenglow/CSI-2999_-_Sophomore-Project/tree/main) | @aefentid-alpenglow | The main branch holds the current *stable* build of the codebase. (If you're looking for new cutting-edge features, those are in the development branch.) **Unless the change is *extremely* minor, like fixing a typo, direct changes should *never* be made to this branch, and changes to this branch are instead pulled from the development branch.** |
| [development](https://github.com/aefentid-alpenglow/CSI-2999_-_Sophomore-Project/tree/development) | @aefentid-alpenglow | The development branch holds the current *work-in-progress* build of the codebase. **Codebase modifications should be submitted to this branch via pull requests.** |
