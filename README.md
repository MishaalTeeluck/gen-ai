# Introduction

Welcome to the Gen AI Wizard App! This app serves as the central hub for all generative AI tools developed by Accenture. Designed to streamline access to our cutting-edge AI solutions, the Gen AI Wizard App aims to empower teams with advanced tools and resources to accelerate innovation, enhance productivity, and drive impactful results. Whether you're working on internal projects or exploring new opportunities, this app ensures you have everything you need to leverage the full potential of Accenture's AI technology.

# Getting Started

### 1. Prerequisite 

This project depends on the following software, ensure you have them installed:

* [Visual studio code](https://code.visualstudio.com/download). Install recommended extensions prompted by VS code

* [Node.js v20.12.2](https://nodejs.org/en/download)

* Node Package Manager v10.5.0. Install latest version: _npm install -g npm_

### 2. Installation process

* Clone the repository:

		git clone https://github.com/MishaalTeeluck/gen-ai.git

* Navigate to the project directory:

    	cd gen-ai

### 3. Launching the application

_First time installation process_

	# Install dependencies
	npm install

	# Run the app for development
	npm run dev

_Clean installation from scratch_

	# Delete node_modules folder
	Simply right-click on the node_modules folder and select delete

	# Clean the cache
	npm cache clean --force

	# Install dependencies
	npm install

	# Configure environment variables for local-developement tests
	NODE_ENV=development
	# or local-production tests
	NODE_ENV=production

	# Declare environment variable starting with VITE_
	VITE_VARIABLE_NAME

	# Run the app for development
	npm run dev

# Build

### Building

- To build the code for production, run the following command:

		npm run build

- Run the development project:

		npm run dev

# Contribute

Contributions to this project are highly appreciated. There are several ways you can contribute:

After cloning the repository, all changes should be made on a new branch derived from the develop branch. One branch should be created for each functionality being implemented.

	# To create a new branch from existing branch
	git checkout -b <new-branch-name> <source-branch>

After adding changes, commit them and push

### Commits Naming Convention

	<type>(scope): <Short Message>

	<type>
	feat: New Feature
	test: Adding/modifying tests
	fix: Bug fix
	docs: Documentation changes only
	refactor: A code change that neither fixes a bug nor adds a feature
	perf: Code that improves performance
	build: Changes that affects the build system or external dependencies (e.g. gulp, broccoli, npm)
	ci: Changes to our CI configuration files and scripts

	# Add changes
	git add .

	# Commit changes
	git commit -m "<type>(scope): <Short Message>"

	# Example
	git commit -m "feat(login): user authentication mechanism"


### Rebase & Push

Before you push, make sure your branch in already aligned with current changes in develop

	# Fetch latest changes from remote repository
	git fetch

	# Rebase from the develop branch into your branch (if your branch is already aligned with current changes in develop, you will get a message telling you so)
	git rebase origin/develop

	# If there are conflicts, you will need to resolve them manually in the Visual Studio Editor and continue the rebase

	# Continue rebase if conflicts are merge
	git rebase –-continue

	# Finally push your branch
	git push –f

	# [Optional] If your branch is not yet on the remote repository, you should run the following
	git push --set-upstream origin <your_branch_name>

### Pull Request Process

New changes should be integrated via a pull request and a code review process before being approved and accepted into develop. To do so, go on Azure devops of the project and [Submit pull requests](https://github.com/MishaalTeeluck/gen-ai/pulls).

### Types of branches

* __main__: Consists of version of code that is in production at a point in time.
* __develop__: Serves as an integration branch for functionalities(features).
* __feature__: branch that owns a single feature.
* __hotfix__: used to patch production releases.
* __release__: Release branches are created once enough features are ready.

### Branch Naming convention

There are different branch directories that should be used for:

* feature: For features.
* bugfix: For bug fixes.
* release: For deployments.
* hotfix: For hot fixes on the production environment.

Your active participation is highly valued, and we extend our sincere appreciation for any contributions you choose to offer in advancing this project. We are deeply grateful for your assistance in our collective endeavor to enhance its quality and functionality. Your dedication plays a significant role in our ongoing efforts to refine and elevate this project. Thank you for your invaluable support in our pursuit of excellence.