# React UI
This is an open-source `React Library`, named `React UI` or `react-ui`, released under the [MIT Licence](https://github.com/hackdanismo/react-ui/blob/main/LICENSE). This is created by `Dan Jackson` under the `Hackdanismo` `GitHub` account.

The library is written in `JavaScript` rather than `TypeScript` to avoid the initial setup required to use `TypeScript` within a project.

## Documentation
The `Documentation` is written in the form of a [Wiki](https://github.com/hackdanismo/react-ui/wiki).

## Clone the Repository
The `repository` contains the `React` components that form the library. This requires `git` to clone the contents of the `repository`. Once `git` has been installed, along with setting up `SSH (Secure Shell)`, the `repository` can be cloned locally.

```shell
$ git clone git@github.com:hackdanismo/react-ui.git
```

Once cloned, `cd` into the `react-ui` directory and install any `dependencies` or `packages` that maybe required.

## Updating the Library
It is recommended to always create a `branch` off the `main` branch to add or make changes to the library. Begin by making sure that you are on the `main` branch first and using `git pull` to receive any recent changes. Once this is completed, a new `branch` can be created.

```shell
# Change to the main branch
$ git checkout main

# Pull any recent changes locally that have been committed to the main branch 
$ git pull

# Create a new branch
$ git checkout -b "type/branch-name-here"
```

The new branch should follow this naming convention:

```shell
# A new feature added to the library, such as a new component
$ git checkout -b "feature/branch-name-here"

# An update to change to the library, such as a revision or admin
$ git checkout -b "chore/branch-name-here"

# A fix for a bug or issue within the code
$ git checkout -b "fix/branch-name-here"
```