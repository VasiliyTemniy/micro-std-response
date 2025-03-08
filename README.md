# micro-std-response
This repository holds base api response types for different languages to keep microservice-based api in sync

## Usage
While some parts of this package could be used by dependency management tools, .proto file cannot be imported this way.
Using this package as a git submodule, however, can solve this issue.

### Submodule
To add this package as a submodule to another git repository, run the following command:

```bash
git submodule add -b \<source_branch_name\> -- https://github.com/VasiliyTemniy/micro-std-response.git \<recepient_repo_path_to_submodule\>
```

To update the submodule, run the following command:

```bash
git submodule update --remote
```

### Subtree
Another approach is to use git subtree:

```bash
git subtree add --prefix \<recepient_repo_path_to_submodule\> https://github.com/VasiliyTemniy/micro-std-response.git \<source_branch_name\>
```

To update the subtree, run the following command:

```bash
git subtree pull --prefix \<recepient_repo_path_to_submodule\> https://github.com/VasiliyTemniy/micro-std-response.git \<source_branch_name\>
```